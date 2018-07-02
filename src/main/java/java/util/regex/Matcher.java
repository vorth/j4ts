package java.util.regex;

import def.js.RegExp;
import def.js.RegExpExecArray;
import jsweet.util.Lang;

import java.util.Stack;
import java.util.function.Function;
import java.util.function.Supplier;

import static jsweet.util.Lang.any;
import static jsweet.util.Lang.array;
import static jsweet.util.Lang.string;

public class Matcher implements MatchResult {
    private Pattern _pattern;
    private String text;
    private int[] starts;
    private int[] ends;
    private String[] groups;

    public Matcher(Pattern _pattern, String text) {
        this._pattern = _pattern;
        this.text = text;
    }

    private void hasGroups() {
        if (groups == null)
            throw new IllegalStateException("No match available");
    }

    private static class IndexGetter implements Function<def.js.String[], def.js.String> {
        private final String regexString;
        private final int[] starts;
        private final int[] ends;
        private final int startLastIndex;

        private IndexGetter(String regexString, int[] starts, int[] ends, int startLastIndex) {
            this.regexString = regexString;
            this.starts = starts;
            this.ends = ends;
            this.startLastIndex = startLastIndex;
        }

        @Override
        public def.js.String apply(def.js.String[] args) {
            array(starts).push(any(args[args.length - 2]));
            array(ends).push((starts[0]) + args[0].length);

            int pl = -1;
            Stack<Integer> lastIndices = new Stack<>();
            lastIndices.push(ends[0]);
            lastIndices.push(starts[0]);

            for (int i = 0; i < args.length-3; ++i) {
                int prevpl = pl + 1;
                pl = regexString.indexOf("(", pl+1);

                int countOut = regexString.substring(prevpl, pl).split(")").length - 1;
                for(int k = 0; k < countOut; ++k) {
                    lastIndices.pop();
                }

                int start = lastIndices.pop();
                int len = 0;
                if (args[i+1] != null)
                    len = args[i+1].length;

                lastIndices.push(start + len);
                lastIndices.push(start);

                if (regexString.charAt(pl+1) == '?') {
                    continue;
                }

                if (len == 0) {
                    array(starts).push(-1);
                    array(ends).push(-1);
                } else {
                    start += startLastIndex;
                    array(starts).push(start);
                    array(ends).push(start + len);
                }

            }
            starts[0] += startLastIndex;
            ends[0] += startLastIndex;
            return args[0];
        }
    }

    private boolean searchWith(RegExp regExp) {
        int startLastIndex = (int) regExp.lastIndex;
        RegExpExecArray exec = regExp.exec(text);
        groups = array(exec);
        if (groups == null) {
            reset();
            return false;
        }
        starts = new int[0];
        ends = new int[0];

        IndexGetter indexGetter = new IndexGetter(regExp.source, starts, ends, startLastIndex);
        RegExp regExpWithAllCaptures = new RegExp(string(string(regExp.source).replace(new RegExp("\\(\\?\\:", "g"), "(")));

        string(text.substring(startLastIndex)).replace(regExpWithAllCaptures,
                Lang.<Supplier<def.js.String>> any((Function<def.js.String[], def.js.String>)
                ((def.js.String ... args) -> indexGetter.apply(args))));

        return true;
    }

    @Override
    public int end() {
        return end(0);
    }

    @Override
    public int end(int i) {
        this.hasGroups();
        return ends[i];
    }

    public int end(String string) {
        return end(_pattern.namedGroupsNames.get(string) + regionStart());
    }

    public boolean find() {
        return searchWith(_pattern.regexp);
    }

    public boolean find(int start) {
        _pattern.regexp.lastIndex = start;
        return find();
    }

    @Override
    public String group() {
        return group(0);
    }

    @Override
    public String group(int i) {
        this.hasGroups();
        return groups[i];
    }

    public String group(String string) {
        return group(_pattern.namedGroupsNames.get(string) + regionStart());
    }

    @Override
    public int groupCount() {
        return groups.length - 1;
    }

    public boolean hitEnd() {
        return end() == text.length();
    }

    public boolean lookingAt() {
        reset();
        return searchWith(Pattern.compile("^" + _pattern.pattern()).regexp);
    }

    public boolean matches() {
        reset();
        return searchWith(Pattern.compile("^" + _pattern.pattern() + "$").regexp);
    }

    public Pattern pattern() {
        return _pattern;
    }

    public int regionEnd() {
        this.hasGroups();
        return groups.length;
    }

    public int regionStart() {
        this.hasGroups();
        return 1;
    }

    public String replaceAll(String replacement) {
        reset();
        text = string(string(text).replace(_pattern.regexp, replacement));
        return text;
    }

    private static class FirstReplacer implements Function<def.js.String[], def.js.String> {
        private final def.js.String replacement;
        boolean first = true;


        private FirstReplacer(def.js.String replacement) {
            this.replacement = replacement;
        }

        @Override
        public def.js.String apply(def.js.String[] args) {
            if (first) {
                first = false;
                return replacement;
            }
            return args[0];
        }
    }

    public String replaceFirst(String replacement) {
        reset();
        FirstReplacer firstReplacer = new FirstReplacer(string(replacement));
        text = string(string(text).replace(_pattern.regexp, Lang. <Supplier<def.js.String>> any(
                (Function<def.js.String[], def.js.String>) ((def.js.String[] args) -> firstReplacer.apply(args)))));

        return text;
    }

    public Matcher reset() {
        _pattern.regexp.lastIndex = 0;
        groups = null;
        starts = null;
        ends = null;
        return this;
    }

    public Matcher reset(CharSequence input) {
        this.text = input.toString();
        return reset();
    }

    @Override
    public int start() {
        return start(0);
    }

    @Override
    public int start(int i) {
        this.hasGroups();
        return starts[i];
    }

    public int start(String string) {
        return start(_pattern.namedGroupsNames.get(string) + regionStart());
    }

    public MatchResult toMatchResult() {
        return this;
    }

    public Matcher usePattern(Pattern newPattern) {
        this._pattern = newPattern;
        return this;
    }
}
