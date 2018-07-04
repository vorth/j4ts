package java.util.regex;

import def.js.JSON;
import def.js.RegExp;
import def.js.SyntaxError;
import jsweet.util.Lang;

import java.io.Serializable;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Stream;

import static def.js.Globals.undefined;
import static jsweet.util.Lang.*;

public class Pattern implements Serializable {
    public static final int CASE_INSENSITIVE = 2;
    public static final int MULTILINE = 8;
    public static final int UNICODE_CASE = 64;
    public static final int UNICODE_CHARACTER_CLASS = 256;

    final RegExp regexp;
    final int _flags;
    final Map<String, Integer> namedGroupsNames;

    private Pattern(RegExp regexp, int _flags, Map<String, Integer> namedGroupsNames) {
        this.regexp = regexp;
        this._flags = _flags;
        this.namedGroupsNames = namedGroupsNames;
    }

    private static class GroupNameRemover implements Function<def.js.String[], def.js.String> {
        private final Map<String, Integer> namedGroupsNames;
        int count = 0;

        private GroupNameRemover(Map<String, Integer> namedGroupsNames) {
            this.namedGroupsNames = namedGroupsNames;
        }

        @Override
        public def.js.String apply(def.js.String[] args) {
            if (args[2] != undefined) {
                namedGroupsNames.put(string(args[2]), count);
            }
            if (args[1] == undefined) {
                count += 1;
            }
            return args[0].replace(new RegExp("\\?<[^>]+>"), "");
        }
    }

    static Pattern compile(String regexp) {
        return compile(regexp, 0);
    }

    static Pattern compile(String regexpString, int flags) {
        String jsFlags = "g";
        if ((flags & MULTILINE) > 0) {
            jsFlags += "m";
        }
        if ((flags & CASE_INSENSITIVE) > 0) {
            jsFlags += "i";
        }
        if ((flags & UNICODE_CHARACTER_CLASS) > 0) {
            jsFlags += "u";
        }
        if ((flags & UNICODE_CASE) > 0) {
            jsFlags += "ui";
        }

        // formatting regexp to acquire some information (name and indices)
        // this should not be to change anything (expect regExps with: "[( (]", or "[) (]" - TODO)
        Map<String, Integer> namedGroupsNames = new HashMap<>();
        GroupNameRemover groupNameRemover = new GroupNameRemover(namedGroupsNames);

        regexpString = string(string(regexpString)
                .replace(new RegExp("(?:[^\\\\]\\(|^\\()(?:(\\?\\:)|\\?<([^)>]*)>)?", "g"),
                        Lang.<Supplier<def.js.String>> any((Function<def.js.String[], def.js.String>)
                                ((def.js.String ... args) -> groupNameRemover.apply(args))))
                // add non-capturing groups to all string
                .replace(new RegExp("(^|\\(|\\)(?:\\+|\\?|\\{[^}]+\\})?)([^+{}?()][^()]*)(\\(|$)", "g"), "$1(?:$2)$3"));

        try {
            return new Pattern(new RegExp(regexpString, jsFlags), flags, namedGroupsNames);
        } catch (SyntaxError e) {
            throw new PatternSyntaxException(e, regexpString);
        }
    }

    public int flags() {
        return _flags;
    }

    public Matcher matcher(CharSequence sequence) {
        return new Matcher(this, sequence.toString());
    }

    public static boolean matches(String regex, CharSequence input) {
        return compile(regex).matcher(input).matches();
    }

    public String pattern() {
        return regexp.source;
    }

    public static String quote(String s) {
        return JSON.stringify(s);
    }

    public String[] split(CharSequence input, int limit) {
        return any(string(input.toString()).split(regexp, limit).toArray());
    }

    public String[] split(CharSequence input) {
        return split(input, 0);
    }

    public Stream<String> splitAsStream(CharSequence input) {
        return Arrays.stream(split(input));
    }

    @Override
    public String toString() {
        return pattern();
    }
}
