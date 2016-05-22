"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html">
     * the official Java API doc</a> for details.
     * 
     * @param <E> element type
     */
    export interface Iterator<E> {
        hasNext() : boolean;

        next() : E;

        forEachRemaining(consumer? : any) : any;

        remove();
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Abstracts the notion of a sequence of characters.
     */
    export interface CharSequence {
        charAt(index : number) : string;

        length() : number;

        subSequence(start : number, end : number) : string;

        toString() : string;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Included for hosted mode source compatibility. Partially implemented
     * 
     * @skip
     */
    export class StackTraceElement implements java.io.Serializable {
        private className : string;

        private fileName : string;

        private lineNumber : number;

        private methodName : string;

        public constructor(className? : any, methodName? : any, fileName? : any, lineNumber? : any) {
            if(((typeof className === 'string') || className === null) && ((typeof methodName === 'string') || methodName === null) && ((typeof fileName === 'string') || fileName === null) && ((typeof lineNumber === 'number') || lineNumber === null)) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                this.lineNumber = 0;
                (() => {
                    this.className = className;
                    this.methodName = methodName;
                    this.fileName = fileName;
                    this.lineNumber = lineNumber;
                })();
            } else if(className === undefined && methodName === undefined && fileName === undefined && lineNumber === undefined) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                this.lineNumber = 0;
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public getClassName() : string {
            return this.className;
        }

        public getFileName() : string {
            return this.fileName;
        }

        public getLineNumber() : number {
            return this.lineNumber;
        }

        public getMethodName() : string {
            return this.methodName;
        }

        public equals(other : any) : boolean {
            if(other != null && other instanceof java.lang.StackTraceElement) {
                var st : java.lang.StackTraceElement = <java.lang.StackTraceElement>other;
                return this.lineNumber === st.lineNumber && java.util.Objects.equals(this.methodName, st.methodName) && java.util.Objects.equals(this.className, st.className) && java.util.Objects.equals(this.fileName, st.fileName);
            }
            return false;
        }

        public hashCode() : number {
            return java.util.Objects.hash(this.lineNumber, this.className, this.methodName, this.fileName);
        }

        public toString() : string {
            return this.className + "." + this.methodName + "(" + (this.fileName != null?this.fileName:"Unknown Source") + (this.lineNumber >= 0?":" + this.lineNumber:"") + ")";
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Indicates that a class implements <code>clone()</code>.
     */
    export interface Cloneable {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Provides an interface for simple JavaScript idioms that can not be expressed in Java.
     */
    export class JsUtils {
        public static getInfinity() : number {
            return Infinity;
        }

        public static isUndefined(value : any) : boolean {
            return value == null;
        }

        public static unsafeCastToString(string : any) : string {
            return <string>string;
        }

        public static setPropertySafe(map : any, key : string, value : any) {
            try {
                map[key] = <any>value;
            } catch(e) {
            };
        }

        public static getIntProperty(map : any, key : string) : number {
            return (<number>map[key]|0);
        }

        public static setIntProperty(map : any, key : string, value : number) {
            map[key] = <any>value;
        }

        public static typeOf(o : any) : string {
            return typeof o;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Abstract interface for maps.
     * 
     * @param <K> key type.
     * @param <V> value type.
     */
    export interface Map<K, V> {
        clear();

        containsKey(key : any) : boolean;

        containsValue(value : any) : boolean;

        entrySet() : java.util.Set<Map.Entry<K, V>>;

        equals(o : any) : boolean;

        get(key : any) : V;

        hashCode() : number;

        isEmpty() : boolean;

        keySet() : java.util.Set<K>;

        put(key? : any, value? : any) : any;

        putAll(t : Map<any, any>);

        remove(key : any) : V;

        size() : number;

        values() : java.util.Collection<V>;
    }

    export namespace Map {

        /**
         * Represents an individual map entry.
         */
        export interface Entry<K, V> {
            equals(o : any) : boolean;

            getKey() : K;

            getValue() : V;

            hashCode() : number;

            setValue(value : V) : V;
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * A readable source of bytes.
     * 
     * <p>Most clients will use input streams that read data from the file system
     * ({@link FileInputStream}), the network ({@link java.net.Socket#getInputStream()}/{@link
     * java.net.HttpURLConnection#getInputStream()}), or from an in-memory byte
     * array ({@link ByteArrayInputStream}).
     * 
     * <p>Use {@link InputStreamReader} to adapt a byte stream like this one into a
     * character stream.
     * 
     * <p>Most clients should wrap their input stream with {@link
     * BufferedInputStream}. Callers that do only bulk reads may omit buffering.
     * 
     * <p>Some implementations support marking a position in the input stream and
     * resetting back to this position later. Implementations that don't return
     * false from {@link #markSupported()} and throw an {@link IOException} when
     * {@link #reset()} is called.
     * 
     * <h3>Subclassing InputStream</h3>
     * Subclasses that decorate another input stream should consider subclassing
     * {@link FilterInputStream}, which delegates all calls to the source input
     * stream.
     * 
     * <p>All input stream subclasses should override <strong>both</strong> {@link
     * #read() read()} and {@link #read(byte[],int,int) read(byte[],int,int)}. The
     * three argument overload is necessary for bulk access to the data. This is
     * much more efficient than byte-by-byte access.
     * 
     * @see OutputStream
     */
    export abstract class InputStream implements java.io.Closeable {
        /**
         * Size of the temporary buffer used when skipping bytes with {@link skip(long)}.
         */
        private static MAX_SKIP_BUFFER_SIZE : number = 4096;

        /**
         * This constructor does nothing. It is provided for signature
         * compatibility.
         */
        public constructor() {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable","java.lang.AutoCloseable"] });
        }

        /**
         * Returns an estimated number of bytes that can be read or skipped without blocking for more
         * input.
         * 
         * <p>Note that this method provides such a weak guarantee that it is not very useful in
         * practice.
         * 
         * <p>Firstly, the guarantee is "without blocking for more input" rather than "without
         * blocking": a read may still block waiting for I/O to complete&nbsp;&mdash; the guarantee is
         * merely that it won't have to wait indefinitely for data to be written. The result of this
         * method should not be used as a license to do I/O on a thread that shouldn't be blocked.
         * 
         * <p>Secondly, the result is a
         * conservative estimate and may be significantly smaller than the actual number of bytes
         * available. In particular, an implementation that always returns 0 would be correct.
         * In general, callers should only use this method if they'd be satisfied with
         * treating the result as a boolean yes or no answer to the question "is there definitely
         * data ready?".
         * 
         * <p>Thirdly, the fact that a given number of bytes is "available" does not guarantee that a
         * read or skip will actually read or skip that many bytes: they may read or skip fewer.
         * 
         * <p>It is particularly important to realize that you <i>must not</i> use this method to
         * size a container and assume that you can read the entirety of the stream without needing
         * to resize the container. Such callers should probably write everything they read to a
         * {@link ByteArrayOutputStream} and convert that to a byte array. Alternatively, if you're
         * reading from a file, {@link File#length} returns the current length of the file (though
         * assuming the file's length can't change may be incorrect, reading a file is inherently
         * racy).
         * 
         * <p>The default implementation of this method in {@code InputStream} always returns 0.
         * Subclasses should override this method if they are able to indicate the number of bytes
         * available.
         * 
         * @return the estimated number of bytes available
         * @throws IOException if this stream is closed or an error occurs
         */
        public available() : number {
            return 0;
        }

        /**
         * Closes this stream. Concrete implementations of this class should free
         * any resources during close. This implementation does nothing.
         * 
         * @throws IOException
         * if an error occurs while closing this stream.
         */
        public close() {
        }

        /**
         * Sets a mark position in this InputStream. The parameter {@code readlimit}
         * indicates how many bytes can be read before the mark is invalidated.
         * Sending {@code reset()} will reposition the stream back to the marked
         * position provided {@code readLimit} has not been surpassed.
         * <p>
         * This default implementation does nothing and concrete subclasses must
         * provide their own implementation.
         * 
         * @param readlimit
         * the number of bytes that can be read from this stream before
         * the mark is invalidated.
         * @see #markSupported()
         * @see #reset()
         */
        public mark(readlimit : number) {
        }

        /**
         * Indicates whether this stream supports the {@code mark()} and
         * {@code reset()} methods. The default implementation returns {@code false}.
         * 
         * @return always {@code false}.
         * @see #mark(int)
         * @see #reset()
         */
        public markSupported() : boolean {
            return false;
        }

        /**
         * Reads a single byte from this stream and returns it as an integer in the
         * range from 0 to 255. Returns -1 if the end of the stream has been
         * reached. Blocks until one byte has been read, the end of the source
         * stream is detected or an exception is thrown.
         * 
         * @throws IOException
         * if the stream is closed or another IOException occurs.
         */
        public read$() : number { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

        /**
         * Equivalent to {@code read(buffer, 0, buffer.length)}.
         */
        public read$byte_A(buffer : number[]) : number {
            javaemul.internal.InternalPreconditions.checkNotNull(buffer);
            return this.read(buffer, 0, buffer.length);
        }

        /**
         * Reads up to {@code byteCount} bytes from this stream and stores them in
         * the byte array {@code buffer} starting at {@code byteOffset}.
         * Returns the number of bytes actually read or -1 if the end of the stream
         * has been reached.
         * 
         * @throws IndexOutOfBoundsException
         * if {@code byteOffset < 0 || byteCount < 0 || byteOffset + byteCount > buffer.length}.
         * @throws IOException
         * if the stream is closed or another IOException occurs.
         */
        public read(buffer? : any, byteOffset? : any, byteCount? : any) : any {
            if(((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                return <any>(() => {
                    java.io.IOUtils.checkOffsetAndCount(buffer, byteOffset, byteCount);
                    for(var i : number = 0; i < byteCount; ++i) {
                        var c : number;
                        try {
                            if((c = this.read()) === -1) {
                                return i === 0?-1:i;
                            }
                        } catch(e) {
                            if(i !== 0) {
                                return i;
                            }
                            throw e;
                        };
                        buffer[byteOffset + i] = (<number>c|0);
                    }
                    return byteCount;
                })();
            } else if(((buffer != null && buffer instanceof Array) || buffer === null) && byteOffset === undefined && byteCount === undefined) {
                return <any>this.read$byte_A(buffer);
            } else if(buffer === undefined && byteOffset === undefined && byteCount === undefined) {
                return <any>this.read$();
            } else throw new Error('invalid overload');
        }

        /**
         * Resets this stream to the last marked location. Throws an
         * {@code IOException} if the number of bytes read since the mark has been
         * set is greater than the limit provided to {@code mark}, or if no mark
         * has been set.
         * <p>
         * This implementation always throws an {@code IOException} and concrete
         * subclasses should provide the proper implementation.
         * 
         * @throws IOException
         * if this stream is closed or another IOException occurs.
         */
        public reset() {
            throw new java.io.IOException();
        }

        /**
         * Skips at most {@code byteCount} bytes in this stream. The number of actual
         * bytes skipped may be anywhere between 0 and {@code byteCount}. If
         * {@code byteCount} is negative, this method does nothing and returns 0, but
         * some subclasses may throw.
         * 
         * <p>Note the "at most" in the description of this method: this method may
         * choose to skip fewer bytes than requested. Callers should <i>always</i>
         * check the return value.
         * 
         * <p>This default implementation reads bytes into a temporary buffer. Concrete
         * subclasses should provide their own implementation.
         * 
         * @return the number of bytes actually skipped.
         * @throws IOException if this stream is closed or another IOException
         * occurs.
         */
        public skip(byteCount : number) : number {
            if(byteCount <= 0) {
                return 0;
            }
            var bSize : number = (<number>Math.min(InputStream.MAX_SKIP_BUFFER_SIZE, byteCount)|0);
            var b : number[] = new Array(bSize);
            var skipped : number = 0;
            while((skipped < byteCount)){
                var toRead : number = (<number>Math.min(byteCount - skipped, b.length)|0);
                var readCount : number = this.read(b, 0, toRead);
                if(readCount === -1) {
                    break;
                }
                skipped += readCount;
                if(readCount < toRead) {
                    break;
                }
            };
            return skipped;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Available as a superclass of event objects.
     */
    export class EventObject {
        source : any;

        public constructor(source : any) {
            this.source = source;
        }

        public getSource() : any {
            return this.source;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * A base class to share implementation between {@link StringBuffer} and {@link StringBuilder}.
     * <p>
     * Most methods will give expected performance results. Exception is {@link #setCharAt(int, char)},
     * which is O(n), and thus should not be used many times on the same <code>StringBuffer</code>.
     */
    export abstract class AbstractStringBuilder {
        string : string;

        public constructor(string : string) {
            this.string = string;
        }

        public length() : number {
            return this.string.length;
        }

        public setLength(newLength : number) {
            var oldLength : number = this.length();
            if(newLength < oldLength) {
                this.string = this.string.substring(0, newLength);
            } else if(newLength > oldLength) {
                this.string += /* valueOf */new String(new Array(newLength - oldLength)).toString();
            }
        }

        public capacity() : number {
            return javaemul.internal.IntegerHelper.MAX_VALUE;
        }

        public ensureCapacity(ignoredCapacity : number) {
        }

        public trimToSize() {
        }

        public charAt(index : number) : string {
            return this.string.charAt(index);
        }

        public getChars(srcStart : number, srcEnd : number, dst : string[], dstStart : number) {
            javaemul.internal.InternalPreconditions.checkStringBounds(srcStart, srcEnd, this.length());
            javaemul.internal.InternalPreconditions.checkStringBounds(dstStart, dstStart + (srcEnd - srcStart), dst.length);
            while((srcStart < srcEnd)){
                dst[dstStart++] = this.string.charAt(srcStart++);
            };
        }

        /**
         * Warning! This method is <b>much</b> slower than the JRE implementation. If you need to do
         * character level manipulation, you are strongly advised to use a char[] directly.
         */
        public setCharAt(index : number, x : string) {
            this.replace0(index, index + 1, /* valueOf */new String(x).toString());
        }

        public subSequence(start : number, end : number) : string {
            return this.string.substring(start, end);
        }

        public substring$int(begin : number) : string {
            return this.string.substring(begin);
        }

        public substring(begin? : any, end? : any) : any {
            if(((typeof begin === 'number') || begin === null) && ((typeof end === 'number') || end === null)) {
                return <any>(() => {
                    return this.string.substring(begin, end);
                })();
            } else if(((typeof begin === 'number') || begin === null) && end === undefined) {
                return <any>this.substring$int(begin);
            } else throw new Error('invalid overload');
        }

        public indexOf$java_lang_String(x : string) : number {
            return this.string.indexOf(x);
        }

        public indexOf(x? : any, start? : any) : any {
            if(((typeof x === 'string') || x === null) && ((typeof start === 'number') || start === null)) {
                return <any>(() => {
                    return this.string.indexOf(x, start);
                })();
            } else if(((typeof x === 'string') || x === null) && start === undefined) {
                return <any>this.indexOf$java_lang_String(x);
            } else throw new Error('invalid overload');
        }

        public lastIndexOf$java_lang_String(s : string) : number {
            return this.string.lastIndexOf(s);
        }

        public lastIndexOf(s? : any, start? : any) : any {
            if(((typeof s === 'string') || s === null) && ((typeof start === 'number') || start === null)) {
                return <any>(() => {
                    return this.string.lastIndexOf(s, start);
                })();
            } else if(((typeof s === 'string') || s === null) && start === undefined) {
                return <any>this.lastIndexOf$java_lang_String(s);
            } else throw new Error('invalid overload');
        }

        public toString() : string {
            return this.string;
        }

        append0(x : string, start : number, end : number) {
            if(x == null) {
                x = "null";
            }
            this.string += /* subSequence */x.substring(start, end);
        }

        appendCodePoint0(x : number) {
            this.string += /* valueOf */new String(/* toChars */String.fromCharCode(x)).toString();
        }

        replace0(start : number, end : number, toInsert : string) {
            this.string = this.string.substring(0, start) + toInsert + this.string.substring(end);
        }

        reverse0() {
            var length : number = this.string.length;
            if(length <= 1) {
                return;
            }
            var buffer : string[] = new Array(length);
            buffer[0] = this.string.charAt(length - 1);
            for(var i : number = 1; i < length; i++) {
                buffer[i] = this.string.charAt(length - 1 - i);
                if(javaemul.internal.CharacterHelper.isSurrogatePair(buffer[i], buffer[i - 1])) {
                    AbstractStringBuilder.swap(buffer, i - 1, i);
                }
            }
            this.string = <string>new String(buffer);
        }

        private static swap(buffer : string[], f : number, s : number) {
            var tmp : string = buffer[f];
            buffer[f] = buffer[s];
            buffer[s] = tmp;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * A fast way to create strings using multiple appends.
     * 
     * This class is an exact clone of {@link StringBuffer} except for the name. Any
     * change made to one should be mirrored in the other.
     */
    export class StringBuilder extends java.lang.AbstractStringBuilder implements java.lang.CharSequence, java.lang.Appendable {
        public constructor(s? : any) {
            if(((typeof s === 'string') || s === null)) {
                super(s);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence","java.lang.Appendable"] });
                (() => {
                })();
            } else if(((s != null && (s["__interfaces"] != null && s["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof s === "string")) || s === null)) {
                super(/* valueOf */new String(s).toString());
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence","java.lang.Appendable"] });
                (() => {
                })();
            } else if(((typeof s === 'number') || s === null)) {
                var ignoredCapacity : any = s;
                super("");
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence","java.lang.Appendable"] });
                (() => {
                })();
            } else if(s === undefined) {
                super("");
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence","java.lang.Appendable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public append$boolean(x : boolean) : java.lang.StringBuilder {
            this.string += x;
            return this;
        }

        public append$char(x : string) : java.lang.StringBuilder {
            this.string += x;
            return this;
        }

        public append$char_A(x : string[]) : java.lang.StringBuilder {
            this.string += /* valueOf */new String(x).toString();
            return this;
        }

        public append(x? : any, start? : any, len? : any) : any {
            if(((x != null && x instanceof Array) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
                return <any>(() => {
                    this.string += /* valueOf */((str, index, len) => str.join('').substring(index, index + len))(x, start, len);
                    return this;
                })();
            } else if(((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
                return <any>this.append$java_lang_CharSequence$int$int(x, start, len);
            } else if(((x != null && x instanceof Array) || x === null) && start === undefined && len === undefined) {
                return <any>this.append$char_A(x);
            } else if(((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$java_lang_String(x);
            } else if(((x != null && x instanceof java.lang.StringBuffer) || x === null) && start === undefined && len === undefined) {
                return <any>this.append$java_lang_StringBuffer(x);
            } else if(((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && start === undefined && len === undefined) {
                return <any>this.append$java_lang_CharSequence(x);
            } else if(((typeof x === 'boolean') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$boolean(x);
            } else if(((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$char(x);
            } else if(((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$int(x);
            } else if(((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$long(x);
            } else if(((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$float(x);
            } else if(((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$double(x);
            } else if(((x != null) || x === null) && start === undefined && len === undefined) {
                return <any>this.append$java_lang_Object(x);
            } else throw new Error('invalid overload');
        }

        public append$java_lang_CharSequence(x : string) : java.lang.StringBuilder {
            this.string += x;
            return this;
        }

        public append$java_lang_CharSequence$int$int(x : string, start : number, end : number) : java.lang.StringBuilder {
            this.append0(x, start, end);
            return this;
        }

        public append$double(x : number) : java.lang.StringBuilder {
            this.string += x;
            return this;
        }

        public append$float(x : number) : java.lang.StringBuilder {
            this.string += x;
            return this;
        }

        public append$int(x : number) : java.lang.StringBuilder {
            this.string += x;
            return this;
        }

        public append$long(x : number) : java.lang.StringBuilder {
            this.string += x;
            return this;
        }

        public append$java_lang_Object(x : any) : java.lang.StringBuilder {
            this.string += x;
            return this;
        }

        public append$java_lang_String(x : string) : java.lang.StringBuilder {
            this.string += x;
            return this;
        }

        public append$java_lang_StringBuffer(x : java.lang.StringBuffer) : java.lang.StringBuilder {
            this.string += x;
            return this;
        }

        public appendCodePoint(x : number) : java.lang.StringBuilder {
            this.appendCodePoint0(x);
            return this;
        }

        public delete(start : number, end : number) : java.lang.StringBuilder {
            this.replace0(start, end, "");
            return this;
        }

        public deleteCharAt(start : number) : java.lang.StringBuilder {
            this.replace0(start, start + 1, "");
            return this;
        }

        public insert$int$boolean(index : number, x : boolean) : java.lang.StringBuilder {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$char(index : number, x : string) : java.lang.StringBuilder {
            this.replace0(index, index, /* valueOf */new String(x).toString());
            return this;
        }

        public insert$int$char_A(index : number, x : string[]) : java.lang.StringBuilder {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert(index? : any, x? : any, offset? : any, len? : any) : any {
            if(((typeof index === 'number') || index === null) && ((x != null && x instanceof Array) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                return <any>(() => {
                    return this.insert(index, /* valueOf */((str, index, len) => str.join('').substring(index, index + len))(x, offset, len));
                })();
            } else if(((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                return <any>this.insert$int$java_lang_CharSequence$int$int(index, x, offset, len);
            } else if(((typeof index === 'number') || index === null) && ((x != null && x instanceof Array) || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$char_A(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$java_lang_String(index, x);
            } else if(((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$java_lang_CharSequence(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'boolean') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$boolean(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$char(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$int(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$long(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$float(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$double(index, x);
            } else if(((typeof index === 'number') || index === null) && ((x != null) || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$java_lang_Object(index, x);
            } else throw new Error('invalid overload');
        }

        public insert$int$java_lang_CharSequence(index : number, chars : string) : java.lang.StringBuilder {
            return this.insert(index, chars.toString());
        }

        public insert$int$java_lang_CharSequence$int$int(index : number, chars : string, start : number, end : number) : java.lang.StringBuilder {
            return this.insert(index, /* subSequence */chars.substring(start, end).toString());
        }

        public insert$int$double(index : number, x : number) : java.lang.StringBuilder {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$float(index : number, x : number) : java.lang.StringBuilder {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$int(index : number, x : number) : java.lang.StringBuilder {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$long(index : number, x : number) : java.lang.StringBuilder {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$java_lang_Object(index : number, x : any) : java.lang.StringBuilder {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$java_lang_String(index : number, x : string) : java.lang.StringBuilder {
            this.replace0(index, index, x);
            return this;
        }

        public replace(start : number, end : number, toInsert : string) : java.lang.StringBuilder {
            this.replace0(start, end, toInsert);
            return this;
        }

        public reverse() : java.lang.StringBuilder {
            this.reverse0();
            return this;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    export class InternalJsMap<V> {
        public get$int(key : number) : V {
            return null;
        }

        public get(key? : any) : any {
            if(((typeof key === 'string') || key === null)) {
                return <any>(() => {
                    return null;
                })();
            } else if(((typeof key === 'number') || key === null)) {
                return <any>this.get$int(key);
            } else throw new Error('invalid overload');
        }

        public set$int$java_lang_Object(key : number, value : V) {
        }

        public set(key? : any, value? : any) : any {
            if(((typeof key === 'string') || key === null) && ((value != null) || value === null)) {
                return <any>(() => {
                })();
            } else if(((typeof key === 'number') || key === null) && ((value != null) || value === null)) {
                return <any>this.set$int$java_lang_Object(key, value);
            } else throw new Error('invalid overload');
        }

        public delete$int(key : number) {
            InternalJsMap.JsHelper.delete(this, key);
        }

        public delete(key? : any) : any {
            if(((typeof key === 'string') || key === null)) {
                return <any>(() => {
                    InternalJsMap.JsHelper.delete(this, key);
                })();
            } else if(((typeof key === 'number') || key === null)) {
                return <any>this.delete$int(key);
            } else throw new Error('invalid overload');
        }

        public entries() : InternalJsMap.Iterator<V> {
            return null;
        }
    }

    export namespace InternalJsMap {

        export class Iterator<V> {
            public next() : InternalJsMap.IteratorEntry<V> {
                return null;
            }
        }

        export class IteratorEntry<V> {
            public value : any[];

            public done : boolean;

            constructor() {
                this.done = false;
            }
        }

        export class JsHelper {
            static delete$java_util_InternalJsMap$int(obj : java.util.InternalJsMap<any>, key : number) {
                (<any>obj["delete"])(key);
            }

            public static delete(obj? : any, key? : any) : any {
                if(((obj != null && obj instanceof java.util.InternalJsMap) || obj === null) && ((typeof key === 'string') || key === null)) {
                    return <any>(() => {
                        (<any>obj["delete"])(key);
                    })();
                } else if(((obj != null && obj instanceof java.util.InternalJsMap) || obj === null) && ((typeof key === 'number') || key === null)) {
                    return <any>java.util.InternalJsMap.JsHelper.delete$java_util_InternalJsMap$int(obj, key);
                } else throw new Error('invalid overload');
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * A writable sink for bytes.
     * 
     * <p>Most clients will use output streams that write data to the file system
     * ({@link FileOutputStream}), the network ({@link java.net.Socket#getOutputStream()}/{@link
     * java.net.HttpURLConnection#getOutputStream()}), or to an in-memory byte array
     * ({@link ByteArrayOutputStream}).
     * 
     * <p>Use {@link OutputStreamWriter} to adapt a byte stream like this one into a
     * character stream.
     * 
     * <p>Most clients should wrap their output stream with {@link
     * BufferedOutputStream}. Callers that do only bulk writes may omit buffering.
     * 
     * <h3>Subclassing OutputStream</h3>
     * Subclasses that decorate another output stream should consider subclassing
     * {@link FilterOutputStream}, which delegates all calls to the target output
     * stream.
     * 
     * <p>All output stream subclasses should override <strong>both</strong> {@link
     * #write(int)} and {@link #write(byte[],int,int) write(byte[],int,int)}. The
     * three argument overload is necessary for bulk access to the data. This is
     * much more efficient than byte-by-byte access.
     * 
     * @see InputStream
     * 
     * <p>The implementation provided by this class behaves as described in the Java
     * API documentation except for {@link write(int)} which throws an exception of
     * type {@link java.lang.UnsupportedOperationException} instead of being
     * abstract.
     */
    export abstract class OutputStream implements java.io.Closeable, java.io.Flushable {
        /**
         * Default constructor.
         */
        public constructor() {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"] });
        }

        /**
         * Closes this stream. Implementations of this method should free any
         * resources used by the stream. This implementation does nothing.
         * 
         * @throws IOException
         * if an error occurs while closing this stream.
         */
        public close() {
        }

        /**
         * Flushes this stream. Implementations of this method should ensure that
         * any buffered data is written out. This implementation does nothing.
         * 
         * @throws IOException
         * if an error occurs while flushing this stream.
         */
        public flush() {
        }

        /**
         * Equivalent to {@code write(buffer, 0, buffer.length)}.
         */
        public write$byte_A(buffer : number[]) {
            javaemul.internal.InternalPreconditions.checkNotNull(buffer);
            this.write(buffer, 0, buffer.length);
        }

        /**
         * Writes {@code count} bytes from the byte array {@code buffer} starting at
         * position {@code offset} to this stream.
         * 
         * @param buffer
         * the buffer to be written.
         * @param offset
         * the start position in {@code buffer} from where to get bytes.
         * @param count
         * the number of bytes from {@code buffer} to write to this
         * stream.
         * @throws IOException
         * if an error occurs while writing to this stream.
         * @throws IndexOutOfBoundsException
         * if {@code offset < 0} or {@code count < 0}, or if
         * {@code offset + count} is bigger than the length of
         * {@code buffer}.
         */
        public write(buffer? : any, offset? : any, count? : any) : any {
            if(((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
                return <any>(() => {
                    java.io.IOUtils.checkOffsetAndCount(buffer, offset, count);
                    for(var i : number = offset; i < offset + count; i++) {
                        this.write(buffer[i]);
                    }
                })();
            } else if(((buffer != null && buffer instanceof Array) || buffer === null) && offset === undefined && count === undefined) {
                return <any>this.write$byte_A(buffer);
            } else if(((typeof buffer === 'number') || buffer === null) && offset === undefined && count === undefined) {
                return <any>this.write$int(buffer);
            } else throw new Error('invalid overload');
        }

        /**
         * Writes a single byte to this stream. Only the least significant byte of
         * the integer {@code oneByte} is written to the stream.
         * 
         * @param oneByte
         * the byte to be written.
         * @throws IOException
         * if an error occurs while writing to this stream.
         */
        public write$int(oneByte : number) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A factory to create JavaScript Map instances.
     */
    export class InternalJsMapFactory {
        private static jsMapCtor : any; public static jsMapCtor_$LI$() : any { if(InternalJsMapFactory.jsMapCtor == null) InternalJsMapFactory.jsMapCtor = InternalJsMapFactory.getJsMapConstructor(); return InternalJsMapFactory.jsMapCtor; };

        private static getJsMapConstructor() : Object {
            return window["Map"];
        }

        public static newJsMap<V>() : java.util.InternalJsMap<V> {
            return new (<any>InternalJsMapFactory.jsMapCtor_$LI$())();
        }

        constructor() {
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Sorted map providing additional query operations and views.
     * 
     * @param <K> key type.
     * @param <V> value type.
     */
    export interface NavigableMap<K, V> extends java.util.SortedMap<K, V> {
        ceilingEntry(key : K) : java.util.Map.Entry<K, V>;

        ceilingKey(key : K) : K;

        descendingKeySet() : java.util.NavigableSet<K>;

        descendingMap() : NavigableMap<K, V>;

        firstEntry() : java.util.Map.Entry<K, V>;

        floorEntry(key : K) : java.util.Map.Entry<K, V>;

        floorKey(key : K) : K;

        headMap(toKey? : any, inclusive? : any) : any;

        higherEntry(key : K) : java.util.Map.Entry<K, V>;

        higherKey(key : K) : K;

        lastEntry() : java.util.Map.Entry<K, V>;

        lowerEntry(key : K) : java.util.Map.Entry<K, V>;

        lowerKey(key : K) : K;

        navigableKeySet() : java.util.NavigableSet<K>;

        pollFirstEntry() : java.util.Map.Entry<K, V>;

        pollLastEntry() : java.util.Map.Entry<K, V>;

        subMap(fromKey? : any, fromInclusive? : any, toKey? : any, toInclusive? : any) : any;

        tailMap(fromKey? : any, inclusive? : any) : any;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    export class JreHelper {
        public static LOG10E : number; public static LOG10E_$LI$() : number { if(JreHelper.LOG10E == null) JreHelper.LOG10E = Math.LOG10E; return JreHelper.LOG10E; };
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/PrimitiveIterator.html">
     * the official Java API doc</a> for details.
     * 
     * @param <T> element type
     * @param <C> consumer type
     */
    export interface PrimitiveIterator<T, C> extends java.util.Iterator<T> {    }

    export namespace PrimitiveIterator {

        /**
         * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/PrimitiveIterator.OfDouble.html">
         * the official Java API doc</a> for details.
         */
        export interface OfDouble extends java.util.PrimitiveIterator<number, (number) => void> {
            nextDouble() : number;

            next() : number;

            forEachRemaining(consumer? : any) : any;
        }

        /**
         * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/PrimitiveIterator.OfInt.html">
         * the official Java API doc</a> for details.
         */
        export interface OfInt extends java.util.PrimitiveIterator<number, (number) => void> {
            nextInt() : number;

            next() : number;

            forEachRemaining(consumer? : any) : any;
        }

        /**
         * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/PrimitiveIterator.OfLong.html">
         * the official Java API doc</a> for details.
         */
        export interface OfLong extends java.util.PrimitiveIterator<number, (number) => void> {
            nextLong() : number;

            next() : number;

            forEachRemaining(consumer? : any) : any;
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a
     * href="http://docs.oracle.com/javase/7/docs/api/java/util/Objects.html">the
     * official Java API doc</a> for details.
     */
    export class Objects {
        constructor() {
        }

        public static compare<T>(a : T, b : T, c : java.util.Comparator<any>) : number {
            return a === b?0:c.compare(a, b);
        }

        public static deepEquals(a : any, b : any) : boolean {
            if(a === b) {
                return true;
            }
            if(a == null || b == null) {
                return false;
            }
            if((a === b)) {
                return true;
            }
            var class1 : any = a.getClass();
            var class2 : any = b.getClass();
            if(!class1.isArray() || !class1.equals(class2)) {
                return false;
            }
            if(a != null && a instanceof Array) {
                return java.util.Arrays.deepEquals(<any[]>a, <any[]>b);
            }
            if(a != null && a instanceof Array) {
                return java.util.Arrays.equals(<boolean[]>a, <boolean[]>b);
            }
            if(a != null && a instanceof Array) {
                return java.util.Arrays.equals(<number[]>a, <number[]>b);
            }
            if(a != null && a instanceof Array) {
                return java.util.Arrays.equals(<string[]>a, <string[]>b);
            }
            if(a != null && a instanceof Array) {
                return java.util.Arrays.equals(<number[]>a, <number[]>b);
            }
            if(a != null && a instanceof Array) {
                return java.util.Arrays.equals(<number[]>a, <number[]>b);
            }
            if(a != null && a instanceof Array) {
                return java.util.Arrays.equals(<number[]>a, <number[]>b);
            }
            if(a != null && a instanceof Array) {
                return java.util.Arrays.equals(<number[]>a, <number[]>b);
            }
            if(a != null && a instanceof Array) {
                return java.util.Arrays.equals(<number[]>a, <number[]>b);
            }
            return true;
        }

        public static equals(a : any, b : any) : boolean {
            return (a === b) || (a != null && (a === b));
        }

        public static hashCode(o : any) : number {
            return o != null?(<any>o.toString()):0;
        }

        public static hash(...values : any[]) : number {
            return java.util.Arrays.hashCode(values);
        }

        public static isNull(obj : any) : boolean {
            return obj == null;
        }

        public static nonNull(obj : any) : boolean {
            return obj != null;
        }

        public static requireNonNull$java_lang_Object<T>(obj : T) : T {
            if(obj == null) {
                throw new java.lang.NullPointerException();
            }
            return obj;
        }

        public static requireNonNull<T>(obj? : any, message? : any) : any {
            if(((obj != null) || obj === null) && ((typeof message === 'string') || message === null)) {
                return <any>(() => {
                    if(obj == null) {
                        throw new java.lang.NullPointerException(message);
                    }
                    return obj;
                })();
            } else if(((obj != null) || obj === null) && ((message != null && message["__interfaces"] != null && message["__interfaces"].indexOf("java.util.function.Supplier") >= 0) || message === null)) {
                return <any>java.util.Objects.requireNonNull$java_lang_Object$java_util_function_Supplier(obj, message);
            } else if(((obj != null) || obj === null) && message === undefined) {
                return <any>java.util.Objects.requireNonNull$java_lang_Object(obj);
            } else throw new Error('invalid overload');
        }

        public static requireNonNull$java_lang_Object$java_util_function_Supplier<T>(obj : T, messageSupplier : () => string) : T {
            if(obj == null) {
                throw new java.lang.NullPointerException(messageSupplier());
            }
            return obj;
        }

        public static toString$java_lang_Object(o : any) : string {
            return /* valueOf */new String(o).toString();
        }

        public static toString(o? : any, nullDefault? : any) : any {
            if(((o != null) || o === null) && ((typeof nullDefault === 'string') || nullDefault === null)) {
                return <any>(() => {
                    return o != null?o.toString():nullDefault;
                })();
            } else if(((o != null) || o === null) && nullDefault === undefined) {
                return <any>java.util.Objects.toString$java_lang_Object(o);
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.annotation {
    /**
     * Base interface for all annotation types <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/Annotation.html">[Sun
     * docs]</a>.
     */
    export interface Annotation {
        annotationType() : any;

        equals(obj : any) : boolean;

        hashCode() : number;

        toString() : string;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/StringJoiner.html">
     * the official Java API doc</a> for details.
     */
    export class StringJoiner {
        private delimiter : string;

        private prefix : string;

        private suffix : string;

        private builder : java.lang.StringBuilder;

        private emptyValue : string;

        public constructor(delimiter : string, prefix : string = "", suffix : string = "") {
            javaemul.internal.InternalPreconditions.checkNotNull(delimiter, "delimiter");
            javaemul.internal.InternalPreconditions.checkNotNull(prefix, "prefix");
            javaemul.internal.InternalPreconditions.checkNotNull(suffix, "suffix");
            this.delimiter = delimiter.toString();
            this.prefix = prefix.toString();
            this.suffix = suffix.toString();
            this.emptyValue = this.prefix + this.suffix;
        }

        public add(newElement : string) : StringJoiner {
            this.initBuilderOrAddDelimiter();
            this.builder.append(newElement);
            return this;
        }

        public length() : number {
            if(this.builder == null) {
                return this.emptyValue.length;
            }
            return this.builder.length() + this.suffix.length;
        }

        public merge(other : StringJoiner) : StringJoiner {
            if(other.builder != null) {
                var otherLength : number = other.builder.length();
                this.initBuilderOrAddDelimiter();
                this.builder.append(other.builder, other.prefix.length, otherLength);
            }
            return this;
        }

        public setEmptyValue(emptyValue : string) : StringJoiner {
            javaemul.internal.InternalPreconditions.checkNotNull(emptyValue);
            this.emptyValue = emptyValue.toString();
            return this;
        }

        public toString() : string {
            if(this.builder == null) {
                return this.emptyValue;
            } else if(/* isEmpty */(this.suffix.length === 0)) {
                return this.builder.toString();
            } else {
                return this.builder.toString() + this.suffix;
            }
        }

        private initBuilderOrAddDelimiter() {
            if(this.builder == null) {
                this.builder = new java.lang.StringBuilder(this.prefix);
            } else {
                this.builder.append(this.delimiter);
            }
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A collection designed for holding elements prior to processing. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Queue.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export interface Queue<E> extends java.util.Collection<E> {
        element() : E;

        offer(o : E) : boolean;

        peek() : E;

        poll() : E;

        remove(index? : any) : any;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Private implementation class for GWT. This API should not be
     * considered public or stable.
     */
    export class Coercions {
        /**
         * Coerce js int to 32 bits.
         * Trick related to JS and lack of integer rollover.
         * {@see com.google.gwt.lang.Cast#narrow_int}
         */
        public static ensureInt(value : number) : number {
            return value | 0;
        }

        constructor() {
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.beans {
    /**
     * General-purpose beans control methods. GWT only supports a limited subset of these methods. Only
     * the documented methods are available.
     */
    export class Beans {
        /**
         * @return <code>true</code> if we are running in the design time mode.
         */
        public static isDesignTime() : boolean {
            return false;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * General-purpose interface for storing collections of objects. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type
     */
    export interface Collection<E> extends java.lang.Iterable<E> {
        add(index? : any, element? : any) : any;

        addAll(index? : any, c? : any) : any;

        clear();

        contains(o : any) : boolean;

        containsAll(c : Collection<any>) : boolean;

        equals(o : any) : boolean;

        hashCode() : number;

        isEmpty() : boolean;

        iterator() : java.util.Iterator<E>;

        remove(index? : any) : any;

        removeAll(c : Collection<any>) : boolean;

        retainAll(c : Collection<any>) : boolean;

        size() : number;

        toArray<T>(a? : any) : any;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
/**
 * Declares equals and hashCode on JavaScript objects, for compilation.
 */
interface Object {
    equals(object : Object) : boolean;

    hashCode() : number;
}

"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.annotation {
    /**
     * Annotation which indicates the kinds of program element to which an
     * annotation type is applicable <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/Target.html">[Sun
     * docs]</a>.
     */
    export interface Target {
        value() : java.lang.annotation.ElementType[];
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.security {
    /**
     * Message Digest Service Provider Interface - <a
     * href="http://java.sun.com/j2se/1.4.2/docs/api/java/security/MessageDigestSpi.html">[Sun's
     * docs]</a>.
     */
    export abstract class MessageDigestSpi {
        engineDigest$() : number[] { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

        public engineDigest(buf? : any, offset? : any, len? : any) : any {
            if(((buf != null && buf instanceof Array) || buf === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                return <any>(() => {
                    var digest : number[] = this.engineDigest();
                    if(buf.length < digest.length + offset) {
                        throw new java.security.DigestException("Insufficient buffer space for digest");
                    }
                    if(len < digest.length) {
                        throw new java.security.DigestException("Length not large enough to hold digest");
                    }
                    java.lang.System.arraycopy(digest, 0, buf, offset, digest.length);
                    return digest.length;
                })();
            } else if(buf === undefined && offset === undefined && len === undefined) {
                return <any>this.engineDigest$();
            } else throw new Error('invalid overload');
        }

        engineGetDigestLength() : number {
            return 0;
        }

        abstract engineReset();

        engineUpdate$byte(input : number) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

        public engineUpdate(input? : any, offset? : any, len? : any) : any {
            if(((input != null && input instanceof Array) || input === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
            } else if(((typeof input === 'number') || input === null) && offset === undefined && len === undefined) {
                return <any>this.engineUpdate$byte(input);
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.security {
    /**
     * Message Digest algorithm - <a href=
     * "http://java.sun.com/j2se/1.4.2/docs/api/java/security/MessageDigest.html"
     * >[Sun's docs]</a>.
     */
    export abstract class MessageDigest extends java.security.MessageDigestSpi {
        public static getInstance(algorithm : string) : MessageDigest {
            if(("MD5" === algorithm)) {
                return new MessageDigest.Md5Digest();
            }
            throw new java.security.NoSuchAlgorithmException(algorithm + " not supported");
        }

        public static isEqual(digestA : number[], digestB : number[]) : boolean {
            var n : number = digestA.length;
            if(n !== digestB.length) {
                return false;
            }
            for(var i : number = 0; i < n; ++i) {
                if(digestA[i] !== digestB[i]) {
                    return false;
                }
            }
            return true;
        }

        private algorithm : string;

        constructor(algorithm : string) {
            super();
            this.algorithm = algorithm;
        }

        public digest$() : number[] {
            return this.engineDigest();
        }

        public digest$byte_A(input : number[]) : number[] {
            this.update(input);
            return this.digest();
        }

        public digest(buf? : any, offset? : any, len? : any) : any {
            if(((buf != null && buf instanceof Array) || buf === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                return <any>(() => {
                    return this.engineDigest(buf, offset, len);
                })();
            } else if(((buf != null && buf instanceof Array) || buf === null) && offset === undefined && len === undefined) {
                return <any>this.digest$byte_A(buf);
            } else if(buf === undefined && offset === undefined && len === undefined) {
                return <any>this.digest$();
            } else throw new Error('invalid overload');
        }

        public getAlgorithm() : string {
            return this.algorithm;
        }

        public getDigestLength() : number {
            return this.engineGetDigestLength();
        }

        public reset() {
            this.engineReset();
        }

        public update$byte(input : number) {
            this.engineUpdate(input);
        }

        public update$byte_A(input : number[]) {
            this.engineUpdate(input, 0, input.length);
        }

        public update(input? : any, offset? : any, len? : any) : any {
            if(((input != null && input instanceof Array) || input === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                return <any>(() => {
                    this.engineUpdate(input, offset, len);
                })();
            } else if(((input != null && input instanceof Array) || input === null) && offset === undefined && len === undefined) {
                return <any>this.update$byte_A(input);
            } else if(((typeof input === 'number') || input === null) && offset === undefined && len === undefined) {
                return <any>this.update$byte(input);
            } else throw new Error('invalid overload');
        }
    }

    export namespace MessageDigest {

        export class Md5Digest extends java.security.MessageDigest {
            static padding : number[]; public static padding_$LI$() : number[] { if(Md5Digest.padding == null) Md5Digest.padding = [(<number>128|0), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; return Md5Digest.padding; };

            /**
             * Converts a long to a 8-byte array using low order first.
             * 
             * @param n A long.
             * @return A byte[].
             */
            public static toBytes(n : number) : number[] {
                var b : number[] = new Array(8);
                b[0] = (<number>(n)|0);
                n >>>= 8;
                b[1] = (<number>(n)|0);
                n >>>= 8;
                b[2] = (<number>(n)|0);
                n >>>= 8;
                b[3] = (<number>(n)|0);
                n >>>= 8;
                b[4] = (<number>(n)|0);
                n >>>= 8;
                b[5] = (<number>(n)|0);
                n >>>= 8;
                b[6] = (<number>(n)|0);
                n >>>= 8;
                b[7] = (<number>(n)|0);
                return b;
            }

            /**
             * Converts a 64-byte array into a 16-int array.
             * 
             * @param in A byte[].
             * @param out An int[].
             */
            static byte2int(__in : number[], out : number[]) {
                for(var inpos : number = 0, outpos : number = 0; outpos < 16; outpos++) {
                    out[outpos] = ((__in[inpos++] & 255) | ((__in[inpos++] & 255) << 8) | ((__in[inpos++] & 255) << 16) | ((__in[inpos++] & 255) << 24));
                }
            }

            static f(x : number, y : number, z : number) : number {
                return (z ^ (x & (y ^ z)));
            }

            static ff(a : number, b : number, c : number, d : number, x : number, s : number, ac : number) : number {
                a += x + ac + Md5Digest.f(b, c, d);
                a = (a << s | a >>> -s);
                return a + b;
            }

            static g(x : number, y : number, z : number) : number {
                return (y ^ (z & (x ^ y)));
            }

            static gg(a : number, b : number, c : number, d : number, x : number, s : number, ac : number) : number {
                a += x + ac + Md5Digest.g(b, c, d);
                a = (a << s | a >>> -s);
                return a + b;
            }

            static h(x : number, y : number, z : number) : number {
                return (x ^ y ^ z);
            }

            static hh(a : number, b : number, c : number, d : number, x : number, s : number, ac : number) : number {
                a += x + ac + Md5Digest.h(b, c, d);
                a = (a << s | a >>> -s);
                return a + b;
            }

            static i(x : number, y : number, z : number) : number {
                return (y ^ (x | ~z));
            }

            static ii(a : number, b : number, c : number, d : number, x : number, s : number, ac : number) : number {
                a += x + ac + Md5Digest.i(b, c, d);
                a = (a << s | a >>> -s);
                return a + b;
            }

            /**
             * Converts a 4-int array into a 16-byte array.
             * 
             * @param in An int[].
             * @param out A byte[].
             */
            static int2byte(__in : number[], out : number[]) {
                for(var inpos : number = 0, outpos : number = 0; inpos < 4; inpos++) {
                    out[outpos++] = (<number>(__in[inpos] & 255)|0);
                    out[outpos++] = (<number>((__in[inpos] >>> 8) & 255)|0);
                    out[outpos++] = (<number>((__in[inpos] >>> 16) & 255)|0);
                    out[outpos++] = (<number>((__in[inpos] >>> 24) & 255)|0);
                }
            }

            buffer : number[];

            counter : number;

            oneByte : number[] = new Array(1);

            remainder : number;

            state : number[];

            x : number[];

            public constructor() {
                super("MD5");
                this.counter = 0;
                this.remainder = 0;
                this.engineReset();
            }

            engineDigest$() : number[] {
                var bits : number[] = Md5Digest.toBytes(this.counter << 3);
                var digest : number[] = new Array(16);
                if(this.remainder > 8) {
                    this.engineUpdate(Md5Digest.padding_$LI$(), 0, this.remainder - 8);
                } else {
                    this.engineUpdate(Md5Digest.padding_$LI$(), 0, 64 + (this.remainder - 8));
                }
                this.engineUpdate(bits, 0, 8);
                Md5Digest.int2byte(this.state, digest);
                this.reset();
                return digest;
            }

            engineGetDigestLength() : number {
                return 16;
            }

            engineReset() {
                this.buffer = new Array(64);
                this.state = new Array(4);
                this.x = new Array(16);
                this.state[0] = 1732584193;
                this.state[1] = -271733879;
                this.state[2] = -1732584194;
                this.state[3] = 271733878;
                this.counter = 0;
                this.remainder = 64;
            }

            engineUpdate$byte(input : number) {
                this.oneByte[0] = input;
                this.engineUpdate(this.oneByte, 0, 1);
            }

            public engineUpdate(input? : any, offset? : any, len? : any) : any {
                if(((input != null && input instanceof Array) || input === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return <any>(() => {
                        while((true)){
                            if(len >= this.remainder) {
                                java.lang.System.arraycopy(input, offset, this.buffer, (<number>(this.counter & 63)|0), this.remainder);
                                this.transform(this.buffer);
                                this.counter += this.remainder;
                                offset += this.remainder;
                                len -= this.remainder;
                                this.remainder = 64;
                            } else {
                                java.lang.System.arraycopy(input, offset, this.buffer, (<number>(this.counter & 63)|0), len);
                                this.counter += len;
                                this.remainder -= len;
                                break;
                            }
                        };
                    })();
                } else if(((typeof input === 'number') || input === null) && offset === undefined && len === undefined) {
                    return <any>this.engineUpdate$byte(input);
                } else throw new Error('invalid overload');
            }

            transform(buffer : number[]) {
                var a : number;
                var b : number;
                var c : number;
                var d : number;
                Md5Digest.byte2int(buffer, this.x);
                a = this.state[0];
                b = this.state[1];
                c = this.state[2];
                d = this.state[3];
                a = Md5Digest.ff(a, b, c, d, this.x[0], 7, -680876936);
                d = Md5Digest.ff(d, a, b, c, this.x[1], 12, -389564586);
                c = Md5Digest.ff(c, d, a, b, this.x[2], 17, 606105819);
                b = Md5Digest.ff(b, c, d, a, this.x[3], 22, -1044525330);
                a = Md5Digest.ff(a, b, c, d, this.x[4], 7, -176418897);
                d = Md5Digest.ff(d, a, b, c, this.x[5], 12, 1200080426);
                c = Md5Digest.ff(c, d, a, b, this.x[6], 17, -1473231341);
                b = Md5Digest.ff(b, c, d, a, this.x[7], 22, -45705983);
                a = Md5Digest.ff(a, b, c, d, this.x[8], 7, 1770035416);
                d = Md5Digest.ff(d, a, b, c, this.x[9], 12, -1958414417);
                c = Md5Digest.ff(c, d, a, b, this.x[10], 17, -42063);
                b = Md5Digest.ff(b, c, d, a, this.x[11], 22, -1990404162);
                a = Md5Digest.ff(a, b, c, d, this.x[12], 7, 1804603682);
                d = Md5Digest.ff(d, a, b, c, this.x[13], 12, -40341101);
                c = Md5Digest.ff(c, d, a, b, this.x[14], 17, -1502002290);
                b = Md5Digest.ff(b, c, d, a, this.x[15], 22, 1236535329);
                a = Md5Digest.gg(a, b, c, d, this.x[1], 5, -165796510);
                d = Md5Digest.gg(d, a, b, c, this.x[6], 9, -1069501632);
                c = Md5Digest.gg(c, d, a, b, this.x[11], 14, 643717713);
                b = Md5Digest.gg(b, c, d, a, this.x[0], 20, -373897302);
                a = Md5Digest.gg(a, b, c, d, this.x[5], 5, -701558691);
                d = Md5Digest.gg(d, a, b, c, this.x[10], 9, 38016083);
                c = Md5Digest.gg(c, d, a, b, this.x[15], 14, -660478335);
                b = Md5Digest.gg(b, c, d, a, this.x[4], 20, -405537848);
                a = Md5Digest.gg(a, b, c, d, this.x[9], 5, 568446438);
                d = Md5Digest.gg(d, a, b, c, this.x[14], 9, -1019803690);
                c = Md5Digest.gg(c, d, a, b, this.x[3], 14, -187363961);
                b = Md5Digest.gg(b, c, d, a, this.x[8], 20, 1163531501);
                a = Md5Digest.gg(a, b, c, d, this.x[13], 5, -1444681467);
                d = Md5Digest.gg(d, a, b, c, this.x[2], 9, -51403784);
                c = Md5Digest.gg(c, d, a, b, this.x[7], 14, 1735328473);
                b = Md5Digest.gg(b, c, d, a, this.x[12], 20, -1926607734);
                a = Md5Digest.hh(a, b, c, d, this.x[5], 4, -378558);
                d = Md5Digest.hh(d, a, b, c, this.x[8], 11, -2022574463);
                c = Md5Digest.hh(c, d, a, b, this.x[11], 16, 1839030562);
                b = Md5Digest.hh(b, c, d, a, this.x[14], 23, -35309556);
                a = Md5Digest.hh(a, b, c, d, this.x[1], 4, -1530992060);
                d = Md5Digest.hh(d, a, b, c, this.x[4], 11, 1272893353);
                c = Md5Digest.hh(c, d, a, b, this.x[7], 16, -155497632);
                b = Md5Digest.hh(b, c, d, a, this.x[10], 23, -1094730640);
                a = Md5Digest.hh(a, b, c, d, this.x[13], 4, 681279174);
                d = Md5Digest.hh(d, a, b, c, this.x[0], 11, -358537222);
                c = Md5Digest.hh(c, d, a, b, this.x[3], 16, -722521979);
                b = Md5Digest.hh(b, c, d, a, this.x[6], 23, 76029189);
                a = Md5Digest.hh(a, b, c, d, this.x[9], 4, -640364487);
                d = Md5Digest.hh(d, a, b, c, this.x[12], 11, -421815835);
                c = Md5Digest.hh(c, d, a, b, this.x[15], 16, 530742520);
                b = Md5Digest.hh(b, c, d, a, this.x[2], 23, -995338651);
                a = Md5Digest.ii(a, b, c, d, this.x[0], 6, -198630844);
                d = Md5Digest.ii(d, a, b, c, this.x[7], 10, 1126891415);
                c = Md5Digest.ii(c, d, a, b, this.x[14], 15, -1416354905);
                b = Md5Digest.ii(b, c, d, a, this.x[5], 21, -57434055);
                a = Md5Digest.ii(a, b, c, d, this.x[12], 6, 1700485571);
                d = Md5Digest.ii(d, a, b, c, this.x[3], 10, -1894986606);
                c = Md5Digest.ii(c, d, a, b, this.x[10], 15, -1051523);
                b = Md5Digest.ii(b, c, d, a, this.x[1], 21, -2054922799);
                a = Md5Digest.ii(a, b, c, d, this.x[8], 6, 1873313359);
                d = Md5Digest.ii(d, a, b, c, this.x[15], 10, -30611744);
                c = Md5Digest.ii(c, d, a, b, this.x[6], 15, -1560198380);
                b = Md5Digest.ii(b, c, d, a, this.x[13], 21, 1309151649);
                a = Md5Digest.ii(a, b, c, d, this.x[4], 6, -145523070);
                d = Md5Digest.ii(d, a, b, c, this.x[11], 10, -1120210379);
                c = Md5Digest.ii(c, d, a, b, this.x[2], 15, 718787259);
                b = Md5Digest.ii(b, c, d, a, this.x[9], 21, -343485551);
                this.state[0] = javaemul.internal.Coercions.ensureInt(this.state[0] + a);
                this.state[1] = javaemul.internal.Coercions.ensureInt(this.state[1] + b);
                this.state[2] = javaemul.internal.Coercions.ensureInt(this.state[2] + c);
                this.state[3] = javaemul.internal.Coercions.ensureInt(this.state[3] + d);
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A very simple emulation of Locale for shared-code patterns like
     * {@code String.toUpperCase(Locale.US)}.
     * <p>
     * Note: Any changes to this class should put into account the assumption that
     * was made in rest of the JRE emulation.
     */
    export class Locale {
        public static ROOT : Locale; public static ROOT_$LI$() : Locale { if(Locale.ROOT == null) Locale.ROOT = new Locale.RootLocale(); return Locale.ROOT; };

        public static ENGLISH : Locale; public static ENGLISH_$LI$() : Locale { if(Locale.ENGLISH == null) Locale.ENGLISH = new Locale.EnglishLocale(); return Locale.ENGLISH; };

        public static US : Locale; public static US_$LI$() : Locale { if(Locale.US == null) Locale.US = new Locale.USLocale(); return Locale.US; };

        private static defaultLocale : Locale; public static defaultLocale_$LI$() : Locale { if(Locale.defaultLocale == null) Locale.defaultLocale = new Locale.DefaultLocale(); return Locale.defaultLocale; };

        /**
         * Returns an instance that represents the browser's default locale (not
         * necessarily the one defined by 'gwt.locale').
         */
        public static getDefault() : Locale {
            return Locale.defaultLocale_$LI$();
        }

        constructor() {
        }
    }

    export namespace Locale {

        export class RootLocale extends java.util.Locale {
            public toString() : string {
                return "";
            }
        }

        export class EnglishLocale extends java.util.Locale {
            public toString() : string {
                return "en";
            }
        }

        export class USLocale extends java.util.Locale {
            public toString() : string {
                return "en_US";
            }
        }

        export class DefaultLocale extends java.util.Locale {
            public toString() : string {
                return "unknown";
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal.annotations {
    /**
     * An annotation to mark a given method as not inlineable.
     * <p>
     * Internal SDK use only, might change or disappear at any time.
     */
    export interface DoNotInline {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Basic {@link Map.Entry} implementation that implements hashCode, equals, and
     * toString.
     */
    export abstract class AbstractMapEntry<K, V> implements java.util.Map.Entry<K, V> {
        public abstract getKey(): any;
        public abstract getValue(): any;
        public abstract setValue(value: any): any;
        public equals(other : any) : boolean {
            if(!(other != null && other["__interfaces"] != null && other["__interfaces"].indexOf("java.util.Map.Entry") >= 0)) {
                return false;
            }
            var entry : java.util.Map.Entry<any, any> = <java.util.Map.Entry<any, any>>other;
            return java.util.Objects.equals(this.getKey(), entry.getKey()) && java.util.Objects.equals(this.getValue(), entry.getValue());
        }

        /**
         * Calculate the hash code using Sun's specified algorithm.
         */
        public hashCode() : number {
            return java.util.Objects.hashCode(this.getKey()) ^ java.util.Objects.hashCode(this.getValue());
        }

        public toString() : string {
            return this.getKey() + "=" + this.getValue();
        }

        constructor() {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A simple wrapper around JavaScript Map for key type is string.
     */
    export class InternalStringMap<K, V> implements java.lang.Iterable<Map.Entry<K, V>> {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index121=this.iterator();index121.hasNext();) {
                var t = index121.next();
                {
                    action(t);
                }
            }
        }
        private backingMap : java.util.InternalJsMap<V> = java.util.InternalJsMapFactory.newJsMap<any>();

        private host : java.util.AbstractHashMap<K, V>;

        private size : number;

        /**
         * A mod count to track 'value' replacements in map to ensure that the
         * 'value' that we have in the iterator entry is guaranteed to be still
         * correct. This is to optimize for the common scenario where the values are
         * not modified during iterations where the entries are never stale.
         */
        private valueMod : number;

        public constructor(host : java.util.AbstractHashMap<K, V>) {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Iterable"] });
            this.size = 0;
            this.valueMod = 0;
            this.host = host;
        }

        public contains(key : string) : boolean {
            return !javaemul.internal.JsUtils.isUndefined(this.backingMap.get(key));
        }

        public get(key : string) : V {
            return this.backingMap.get(key);
        }

        public put(key : string, value : V) : V {
            var oldValue : V = this.backingMap.get(key);
            this.backingMap.set(key, InternalStringMap.toNullIfUndefined<any>(value));
            if(javaemul.internal.JsUtils.isUndefined(oldValue)) {
                this.size++;
                java.util.ConcurrentModificationDetector.structureChanged(this.host);
            } else {
                this.valueMod++;
            }
            return oldValue;
        }

        public remove(key : string) : V {
            var value : V = this.backingMap.get(key);
            if(!javaemul.internal.JsUtils.isUndefined(value)) {
                this.backingMap.delete(key);
                this.size--;
                java.util.ConcurrentModificationDetector.structureChanged(this.host);
            } else {
                this.valueMod++;
            }
            return value;
        }

        public getSize() : number {
            return this.size;
        }

        public iterator() : java.util.Iterator<Map.Entry<K, V>> {
            return new InternalStringMap.InternalStringMap$0(this);
        }

        private newMapEntry(entry : java.util.InternalJsMap.IteratorEntry<V>, lastValueMod : number) : Map.Entry<K, V> {
            return new InternalStringMap.InternalStringMap$1(this, entry, lastValueMod);
        }

        private static toNullIfUndefined<T>(value : T) : T {
            return javaemul.internal.JsUtils.isUndefined(value)?null:value;
        }
    }

    export namespace InternalStringMap {

        export class InternalStringMap$0 implements java.util.Iterator<java.util.Map.Entry<any, any>> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            entries : java.util.InternalJsMap.Iterator<any>;

            current : java.util.InternalJsMap.IteratorEntry<any>;

            last : java.util.InternalJsMap.IteratorEntry<any>;

            public hasNext() : boolean {
                return !this.current.done;
            }

            public next() : Map.Entry<any, any> {
                this.last = this.current;
                this.current = this.entries.next();
                return this.__parent.newMapEntry(this.last, this.__parent.valueMod);
            }

            public remove() {
                this.__parent.remove(<string>this.last.value[0]);
            }

            constructor(__parent: any) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                this.__parent = __parent;
                this.entries = this.__parent.backingMap.entries();
                this.current = this.entries.next();
            }
        }

        export class InternalStringMap$1 extends java.util.AbstractMapEntry<any, any> {
            public __parent: any;
            public getKey() : any {
                return <any>this.entry.value[0];
            }

            public getValue() : any {
                if(this.__parent.valueMod !== this.lastValueMod) {
                    return this.__parent.get(<string>this.entry.value[0]);
                }
                return <any>this.entry.value[1];
            }

            public setValue(object : any) : any {
                return this.__parent.put(<string>this.entry.value[0], object);
            }

            constructor(__parent: any, private entry: any, private lastValueMod: any) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                this.__parent = __parent;
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/OptionalLong.html">
     * the official Java API doc</a> for details.
     */
    export class OptionalLong {
        public static empty() : OptionalLong {
            return OptionalLong.EMPTY_$LI$();
        }

        public static of(value : number) : OptionalLong {
            return new OptionalLong(value);
        }

        private static EMPTY : OptionalLong; public static EMPTY_$LI$() : OptionalLong { if(OptionalLong.EMPTY == null) OptionalLong.EMPTY = new OptionalLong(); return OptionalLong.EMPTY; };

        private ref : number;

        private present : boolean;

        public constructor(value? : any) {
            if(((typeof value === 'number') || value === null)) {
                this.ref = 0;
                this.present = false;
                (() => {
                    this.ref = value;
                    this.present = true;
                })();
            } else if(value === undefined) {
                this.ref = 0;
                this.present = false;
                (() => {
                    this.ref = 0;
                    this.present = false;
                })();
            } else throw new Error('invalid overload');
        }

        public isPresent() : boolean {
            return this.present;
        }

        public getAsLong() : number {
            javaemul.internal.InternalPreconditions.checkCriticalElement(this.present);
            return this.ref;
        }

        public ifPresent(consumer : (number) => void) {
            if(this.present) {
                consumer(this.ref);
            }
        }

        public orElse(other : number) : number {
            return this.present?this.ref:other;
        }

        public orElseGet(other : () => number) : number {
            return this.present?this.ref:other();
        }

        public orElseThrow<X extends Error>(exceptionSupplier : () => X) : number {
            if(this.present) {
                return this.ref;
            }
            throw exceptionSupplier();
        }

        public equals(obj : any) : boolean {
            if(obj === this) {
                return true;
            }
            if(!(obj != null && obj instanceof java.util.OptionalLong)) {
                return false;
            }
            var other : OptionalLong = <OptionalLong>obj;
            return this.present === other.present && javaemul.internal.LongHelper.compare(this.ref, other.ref) === 0;
        }

        public hashCode() : number {
            return this.present?javaemul.internal.LongHelper.hashCode(this.ref):0;
        }

        public toString() : string {
            return this.present?"OptionalLong.of(" + /* toString */(''+this.ref) + ")":"OptionalLong.empty()";
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Claims to the compiler that the annotation target does nothing potentially unsafe
     * to its varargs argument.
     */
    export interface SafeVarargs {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/OptionalInt.html">
     * the official Java API doc</a> for details.
     */
    export class OptionalInt {
        public static empty() : OptionalInt {
            return OptionalInt.EMPTY_$LI$();
        }

        public static of(value : number) : OptionalInt {
            return new OptionalInt(value);
        }

        private static EMPTY : OptionalInt; public static EMPTY_$LI$() : OptionalInt { if(OptionalInt.EMPTY == null) OptionalInt.EMPTY = new OptionalInt(); return OptionalInt.EMPTY; };

        private ref : number;

        private present : boolean;

        public constructor(value? : any) {
            if(((typeof value === 'number') || value === null)) {
                this.ref = 0;
                this.present = false;
                (() => {
                    this.ref = value;
                    this.present = true;
                })();
            } else if(value === undefined) {
                this.ref = 0;
                this.present = false;
                (() => {
                    this.ref = 0;
                    this.present = false;
                })();
            } else throw new Error('invalid overload');
        }

        public isPresent() : boolean {
            return this.present;
        }

        public getAsInt() : number {
            javaemul.internal.InternalPreconditions.checkCriticalElement(this.present);
            return this.ref;
        }

        public ifPresent(consumer : (number) => void) {
            if(this.present) {
                consumer(this.ref);
            }
        }

        public orElse(other : number) : number {
            return this.present?this.ref:other;
        }

        public orElseGet(other : () => number) : number {
            return this.present?this.ref:other();
        }

        public orElseThrow<X extends Error>(exceptionSupplier : () => X) : number {
            if(this.present) {
                return this.ref;
            }
            throw exceptionSupplier();
        }

        public equals(obj : any) : boolean {
            if(obj === this) {
                return true;
            }
            if(!(obj != null && obj instanceof java.util.OptionalInt)) {
                return false;
            }
            var other : OptionalInt = <OptionalInt>obj;
            return this.present === other.present && javaemul.internal.IntegerHelper.compare(this.ref, other.ref) === 0;
        }

        public hashCode() : number {
            return this.present?javaemul.internal.IntegerHelper.hashCode(this.ref):0;
        }

        public toString() : string {
            return this.present?"OptionalInt.of(" + /* toString */(''+this.ref) + ")":"OptionalInt.empty()";
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * Provided for interoperability; RPC treats this interface synonymously with
     * {@link com.google.gwt.user.client.rpc.IsSerializable IsSerializable}.
     * The Java serialization protocol is explicitly not supported.
     */
    export interface Serializable {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Hashcode caching for strings.
     */
    export class StringHashCache {
        /**
         * The "old" cache; it will be dumped when front is full.
         */
        private static back : any; public static back_$LI$() : any { if(StringHashCache.back == null) StringHashCache.back = StringHashCache.createNativeObject(); return StringHashCache.back; };

        /**
         * Tracks the number of entries in front.
         */
        private static count : number = 0;

        /**
         * The "new" cache; it will become back when it becomes full.
         */
        private static front : any; public static front_$LI$() : any { if(StringHashCache.front == null) StringHashCache.front = StringHashCache.createNativeObject(); return StringHashCache.front; };

        /**
         * Pulled this number out of thin air.
         */
        private static MAX_CACHE : number = 256;

        public static getHashCode(str : string) : number {
            var key : string = ":" + str;
            var result : any = StringHashCache.getProperty(StringHashCache.front_$LI$(), key);
            if(!javaemul.internal.JsUtils.isUndefined(result)) {
                return StringHashCache.unsafeCastToInt(result);
            }
            result = StringHashCache.getProperty(StringHashCache.back_$LI$(), key);
            var hashCode : number = javaemul.internal.JsUtils.isUndefined(result)?StringHashCache.compute(str):StringHashCache.unsafeCastToInt(result);
            StringHashCache.increment();
            javaemul.internal.JsUtils.setIntProperty(StringHashCache.front_$LI$(), key, hashCode);
            return hashCode;
        }

        private static compute(str : string) : number {
            var hashCode : number = 0;
            var n : number = str.length;
            var nBatch : number = n - 4;
            var i : number = 0;
            while((i < nBatch)){
                hashCode = (str.charAt(i + 3)).charCodeAt(0) + 31 * ((str.charAt(i + 2)).charCodeAt(0) + 31 * ((str.charAt(i + 1)).charCodeAt(0) + 31 * ((str.charAt(i)).charCodeAt(0) + 31 * hashCode)));
                hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                i += 4;
            };
            while((i < n)){
                hashCode = hashCode * 31 + (str.charAt(i++)).charCodeAt(0);
            };
            hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
            return hashCode;
        }

        private static increment() {
            if(StringHashCache.count === StringHashCache.MAX_CACHE) {
                StringHashCache.back = StringHashCache.front;
                StringHashCache.front = StringHashCache.createNativeObject();
                StringHashCache.count = 0;
            }
            ++StringHashCache.count;
        }

        private static getProperty(map : any, key : string) : any {
            return map[key];
        }

        private static createNativeObject() : any {
            return {};
        }

        private static unsafeCastToInt(o : any) : number {
            return o;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.annotation {
    /**
     * Enumerates annotation retention policies <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/RetentionPolicy.html">[Sun
     * docs]</a>.
     */
    export enum RetentionPolicy {
        CLASS, RUNTIME, SOURCE
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    export class Comparators {
        /**
         * Compares two Objects according to their <i>natural ordering</i>.
         * 
         * @see java.lang.Comparable
         */
        private static NATURAL : java.util.Comparator<any>; public static NATURAL_$LI$() : java.util.Comparator<any> { if(Comparators.NATURAL == null) Comparators.NATURAL = new Comparators.NaturalComparator(); return Comparators.NATURAL; };

        /**
         * Returns the natural Comparator.
         * <p>
         * Example:
         * 
         * <pre>Comparator&lt;String&gt; compareString = Comparators.natural()</pre>
         * 
         * @return the natural Comparator
         */
        public static natural<T>() : java.util.Comparator<T> {
            return <java.util.Comparator<T>>Comparators.NATURAL_$LI$();
        }
    }

    export namespace Comparators {

        export class NaturalComparator implements java.util.Comparator<any> {
            public compare(o1 : any, o2 : any) : number {
                javaemul.internal.InternalPreconditions.checkNotNull(o1);
                javaemul.internal.InternalPreconditions.checkNotNull(o2);
                return (<java.lang.Comparable<any>>o1).compareTo(o2);
            }

            constructor() {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Comparator"] });
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * A helper class for long comparison.
     */
    export class LongCompareHolder {
        public static getLongComparator() : any {
            return (l1, l2) => l2 - l1;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A {@code SortedSet} with more flexible queries.
     * 
     * @param <E> element type.
     */
    export interface NavigableSet<E> extends java.util.SortedSet<E> {
        ceiling(e : E) : E;

        descendingIterator() : java.util.Iterator<E>;

        descendingSet() : NavigableSet<E>;

        floor(e : E) : E;

        headSet(toElement? : any, inclusive? : any) : any;

        higher(e : E) : E;

        lower(e : E) : E;

        pollFirst() : E;

        pollLast() : E;

        subSet(fromElement? : any, fromInclusive? : any, toElement? : any, toInclusive? : any) : any;

        tailSet(fromElement? : any, inclusive? : any) : any;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.annotation {
    /**
     * Annotation which indicates how long annotations should be retained <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/Retention.html">[Sun
     * doc]</a>.
     */
    export interface Retention {
        value() : java.lang.annotation.RetentionPolicy;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Abstract base class for numeric wrapper classes.
     */
    export abstract class NumberHelper implements java.io.Serializable {
        /**
         * Stores a regular expression object to verify the format of float values.
         */
        private static floatRegex : RegExp;

        /**
         * @skip
         * 
         * This function will determine the radix that the string is expressed
         * in based on the parsing rules defined in the Javadocs for
         * Integer.decode() and invoke __parseAndValidateInt.
         */
        static __decodeAndValidateInt(s : string, lowerBound : number, upperBound : number) : number {
            var decode : NumberHelper.__Decode = NumberHelper.__decodeNumberString(s);
            return NumberHelper.__parseAndValidateInt(decode.payload, decode.radix, lowerBound, upperBound);
        }

        static __decodeNumberString(s : string) : NumberHelper.__Decode {
            var negative : boolean;
            if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(s, "-")) {
                negative = true;
                s = s.substring(1);
            } else {
                negative = false;
                if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(s, "+")) {
                    s = s.substring(1);
                }
            }
            var radix : number;
            if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(s, "0x") || /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(s, "0X")) {
                s = s.substring(2);
                radix = 16;
            } else if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(s, "#")) {
                s = s.substring(1);
                radix = 16;
            } else if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(s, "0")) {
                radix = 8;
            } else {
                radix = 10;
            }
            if(negative) {
                s = "-" + s;
            }
            return new NumberHelper.__Decode(radix, s);
        }

        /**
         * @skip
         * 
         * This function contains common logic for parsing a String as a
         * floating- point number and validating the range.
         */
        static __parseAndValidateDouble(s : string) : number {
            if(!NumberHelper.__isValidDouble(s)) {
                throw java.lang.NumberFormatException.forInputString(s);
            }
            return parseFloat(s);
        }

        /**
         * @skip
         * 
         * This function contains common logic for parsing a String in a given
         * radix and validating the result.
         */
        static __parseAndValidateInt(s : string, radix : number, lowerBound : number, upperBound : number) : number {
            if(s == null) {
                throw java.lang.NumberFormatException.forNullInputString();
            }
            if(radix < javaemul.internal.CharacterHelper.MIN_RADIX || radix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                throw java.lang.NumberFormatException.forRadix(radix);
            }
            var length : number = s.length;
            var startIndex : number = (length > 0) && (s.charAt(0) === '-' || s.charAt(0) === '+')?1:0;
            for(var i : number = startIndex; i < length; i++) {
                if(javaemul.internal.CharacterHelper.digit(s.charAt(i), radix) === -1) {
                    throw java.lang.NumberFormatException.forInputString(s);
                }
            }
            var toReturn : number = (<number>parseInt(s, radix)|0);
            var isTooLow : boolean = toReturn < lowerBound;
            if(javaemul.internal.DoubleHelper.isNaN(toReturn)) {
                throw java.lang.NumberFormatException.forInputString(s);
            } else if(isTooLow || toReturn > upperBound) {
                throw java.lang.NumberFormatException.forInputString(s);
            }
            return toReturn;
        }

        /**
         * @skip
         * 
         * This function contains common logic for parsing a String in a given
         * radix and validating the result.
         */
        static __parseAndValidateLong(s : string, radix : number) : number {
            if(s == null) {
                throw java.lang.NumberFormatException.forNullInputString();
            }
            if(radix < javaemul.internal.CharacterHelper.MIN_RADIX || radix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                throw java.lang.NumberFormatException.forRadix(radix);
            }
            var orig : string = s;
            var length : number = s.length;
            var negative : boolean = false;
            if(length > 0) {
                var c : string = s.charAt(0);
                if(c === '-' || c === '+') {
                    s = s.substring(1);
                    length--;
                    negative = (c === '-');
                }
            }
            if(length === 0) {
                throw java.lang.NumberFormatException.forInputString(orig);
            }
            while((s.length > 0 && s.charAt(0) === '0')){
                s = s.substring(1);
                length--;
            };
            if(length > NumberHelper.__ParseLong.maxLengthForRadix_$LI$()[radix]) {
                throw java.lang.NumberFormatException.forInputString(orig);
            }
            for(var i : number = 0; i < length; i++) {
                if(javaemul.internal.CharacterHelper.digit(s.charAt(i), radix) === -1) {
                    throw java.lang.NumberFormatException.forInputString(orig);
                }
            }
            var toReturn : number = 0;
            var maxDigits : number = NumberHelper.__ParseLong.maxDigitsForRadix_$LI$()[radix];
            var radixPower : number = NumberHelper.__ParseLong.maxDigitsRadixPower_$LI$()[radix];
            var minValue : number = -NumberHelper.__ParseLong.maxValueForRadix_$LI$()[radix];
            var firstTime : boolean = true;
            var head : number = length % maxDigits;
            if(head > 0) {
                toReturn = -(<number>parseInt(s.substring(0, head), radix)|0);
                s = s.substring(head);
                length -= head;
                firstTime = false;
            }
            while((length >= maxDigits)){
                head = (<number>parseInt(s.substring(0, maxDigits), radix)|0);
                s = s.substring(maxDigits);
                length -= maxDigits;
                if(!firstTime) {
                    if(toReturn < minValue) {
                        throw java.lang.NumberFormatException.forInputString(orig);
                    }
                    toReturn *= radixPower;
                } else {
                    firstTime = false;
                }
                toReturn -= head;
            };
            if(toReturn > 0) {
                throw java.lang.NumberFormatException.forInputString(orig);
            }
            if(!negative) {
                toReturn = -toReturn;
                if(toReturn < 0) {
                    throw java.lang.NumberFormatException.forInputString(orig);
                }
            }
            return toReturn;
        }

        /**
         * @skip
         * 
         * @param str
         * @return {@code true} if the string matches the float format,
         * {@code false} otherwise
         */
        static __isValidDouble(str : string) : boolean {
            if(NumberHelper.floatRegex == null) {
                NumberHelper.floatRegex = NumberHelper.createFloatRegex();
            }
            return NumberHelper.floatRegex.test(str);
        }

        static createFloatRegex() : RegExp {
            return /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/;
        }

        public byteValue() : number {
            return (<number>this.intValue()|0);
        }

        public abstract doubleValue() : number;

        public abstract floatValue() : number;

        public abstract intValue() : number;

        public abstract longValue() : number;

        public shortValue() : number {
            return (<number>this.intValue()|0);
        }

        constructor() {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
        }
    }

    export namespace NumberHelper {

        export class __Decode {
            public payload : string;

            public radix : number;

            public constructor(radix : number, payload : string) {
                this.radix = 0;
                this.radix = radix;
                this.payload = payload;
            }
        }

        /**
         * Use nested class to avoid clinit on outer.
         */
        export class __ParseLong {
            static __static_initialized : boolean = false;
            static __static_initialize() { if(!__ParseLong.__static_initialized) { __ParseLong.__static_initialized = true; __ParseLong.__static_initializer_0(); } }

            /**
             * The number of digits (excluding minus sign and leading zeros) to
             * process at a time. The largest value expressible in maxDigits digits
             * as well as the factor radix^maxDigits must be strictly less than
             * 2^31.
             */
            static maxDigitsForRadix : number[]; public static maxDigitsForRadix_$LI$() : number[] { __ParseLong.__static_initialize(); if(__ParseLong.maxDigitsForRadix == null) __ParseLong.maxDigitsForRadix = [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]; return __ParseLong.maxDigitsForRadix; };

            /**
             * A table of values radix*maxDigitsForRadix[radix].
             */
            static maxDigitsRadixPower : number[]; public static maxDigitsRadixPower_$LI$() : number[] { __ParseLong.__static_initialize(); if(__ParseLong.maxDigitsRadixPower == null) __ParseLong.maxDigitsRadixPower = new Array(37); return __ParseLong.maxDigitsRadixPower; };

            /**
             * The largest number of digits (excluding minus sign and leading zeros)
             * that can fit into a long for a given radix between 2 and 36,
             * inclusive.
             */
            static maxLengthForRadix : number[]; public static maxLengthForRadix_$LI$() : number[] { __ParseLong.__static_initialize(); if(__ParseLong.maxLengthForRadix == null) __ParseLong.maxLengthForRadix = [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]; return __ParseLong.maxLengthForRadix; };

            /**
             * A table of floor(MAX_VALUE / maxDigitsRadixPower).
             */
            static maxValueForRadix : number[]; public static maxValueForRadix_$LI$() : number[] { __ParseLong.__static_initialize(); if(__ParseLong.maxValueForRadix == null) __ParseLong.maxValueForRadix = new Array(37); return __ParseLong.maxValueForRadix; };

            static __static_initializer_0() {
                for(var i : number = 2; i <= 36; i++) {
                    __ParseLong.maxDigitsRadixPower_$LI$()[i] = (<number>Math.pow(i, __ParseLong.maxDigitsForRadix_$LI$()[i])|0);
                    __ParseLong.maxValueForRadix_$LI$()[i] = Math.round(9223372036854775807 / __ParseLong.maxDigitsRadixPower_$LI$()[i]);
                }
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Wraps a primitive <code>long</code> as an object.
     */
    export class LongHelper extends javaemul.internal.NumberHelper implements java.lang.Comparable<LongHelper> {
        public static MAX_VALUE : number = 9223372036854775807;

        public static MIN_VALUE : number = -9223372036854775808;

        public static SIZE : number = 64;

        public static bitCount(i : number) : number {
            var high : number = (<number>(i >> 32)|0);
            var low : number = (<number>i|0);
            return javaemul.internal.IntegerHelper.bitCount(high) + javaemul.internal.IntegerHelper.bitCount(low);
        }

        public static compare(x : number, y : number) : number {
            if(x < y) {
                return -1;
            } else if(x > y) {
                return 1;
            } else {
                return 0;
            }
        }

        public static decode(s : string) : LongHelper {
            var decode : NumberHelper.__Decode = NumberHelper.__decodeNumberString(s);
            return LongHelper.valueOf(decode.payload, decode.radix);
        }

        /**
         * @skip Here for shared implementation with Arrays.hashCode
         */
        public static hashCode(l : number) : number {
            return (<number>l|0);
        }

        public static highestOneBit(i : number) : number {
            var high : number = (<number>(i >> 32)|0);
            if(high !== 0) {
                return (Math.round(<number>javaemul.internal.IntegerHelper.highestOneBit(high))) << 32;
            } else {
                return javaemul.internal.IntegerHelper.highestOneBit((<number>i|0)) & 4294967295;
            }
        }

        public static lowestOneBit(i : number) : number {
            return i & -i;
        }

        public static numberOfLeadingZeros(i : number) : number {
            var high : number = (<number>(i >> 32)|0);
            if(high !== 0) {
                return javaemul.internal.IntegerHelper.numberOfLeadingZeros(high);
            } else {
                return javaemul.internal.IntegerHelper.numberOfLeadingZeros((<number>i|0)) + 32;
            }
        }

        public static numberOfTrailingZeros(i : number) : number {
            var low : number = (<number>i|0);
            if(low !== 0) {
                return javaemul.internal.IntegerHelper.numberOfTrailingZeros(low);
            } else {
                return javaemul.internal.IntegerHelper.numberOfTrailingZeros((<number>(i >> 32)|0)) + 32;
            }
        }

        public static parseLong(s : string, radix : number = 10) : number {
            return NumberHelper.__parseAndValidateLong(s, radix);
        }

        public static reverse(i : number) : number {
            var high : number = (<number>(i >>> 32)|0);
            var low : number = (<number>i|0);
            return (Math.round(<number>javaemul.internal.IntegerHelper.reverse(low)) << 32) | (javaemul.internal.IntegerHelper.reverse(high) & 4294967295);
        }

        public static reverseBytes(i : number) : number {
            var high : number = (<number>(i >>> 32)|0);
            var low : number = (<number>i|0);
            return (Math.round(<number>javaemul.internal.IntegerHelper.reverseBytes(low)) << 32) | (javaemul.internal.IntegerHelper.reverseBytes(high) & 4294967295);
        }

        public static rotateLeft(i : number, distance : number) : number {
            while((distance-- > 0)){
                i = i << 1 | ((i < 0)?1:0);
            };
            return i;
        }

        public static rotateRight(i : number, distance : number) : number {
            var ui : number = i & LongHelper.MAX_VALUE;
            var carry : number = (i < 0)?4611686018427387904:0;
            while((distance-- > 0)){
                var nextcarry : number = ui & 1;
                ui = carry | (ui >> 1);
                carry = (nextcarry === 0)?0:4611686018427387904;
            };
            if(carry !== 0) {
                ui = ui | LongHelper.MIN_VALUE;
            }
            return ui;
        }

        public static signum(i : number) : number {
            if(i === 0) {
                return 0;
            } else if(i < 0) {
                return -1;
            } else {
                return 1;
            }
        }

        public static toBinaryString(value : number) : string {
            return LongHelper.toPowerOfTwoUnsignedString(value, 1);
        }

        public static toHexString(value : number) : string {
            return LongHelper.toPowerOfTwoUnsignedString(value, 4);
        }

        public static toOctalString(value : number) : string {
            return LongHelper.toPowerOfTwoUnsignedString(value, 3);
        }

        public static toString$long(value : number) : string {
            return /* valueOf */new String(value).toString();
        }

        public static toString(value? : any, intRadix? : any) : any {
            if(((typeof value === 'number') || value === null) && ((typeof intRadix === 'number') || intRadix === null)) {
                return <any>(() => {
                    if(intRadix === 10 || intRadix < javaemul.internal.CharacterHelper.MIN_RADIX || intRadix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                        return /* valueOf */new String(value).toString();
                    }
                    var intValue : number = (<number>value|0);
                    if(intValue === value) {
                        return javaemul.internal.IntegerHelper.toString(intValue, intRadix);
                    }
                    var negative : boolean = value < 0;
                    if(!negative) {
                        value = -value;
                    }
                    var bufLen : number = intRadix < 8?65:23;
                    var buf : string[] = new Array(bufLen);
                    var cursor : number = bufLen;
                    var radix : number = intRadix;
                    do {
                        var q : number = Math.round(value / radix);
                        buf[--cursor] = javaemul.internal.CharacterHelper.forDigit((<number>(radix * q - value)|0));
                        value = q;
                    } while((value !== 0));
                    if(negative) {
                        buf[--cursor] = '-';
                    }
                    return /* valueOf */((str, index, len) => str.join('').substring(index, index + len))(buf, cursor, bufLen - cursor);
                })();
            } else if(((typeof value === 'number') || value === null) && intRadix === undefined) {
                return <any>javaemul.internal.LongHelper.toString$long(value);
            } else throw new Error('invalid overload');
        }

        public static valueOf$long(i : number) : LongHelper {
            if(i > -129 && i < 128) {
                var rebase : number = (<number>i|0) + 128;
                var result : LongHelper = LongHelper.BoxedValues.boxedValues_$LI$()[rebase];
                if(result == null) {
                    result = LongHelper.BoxedValues.boxedValues_$LI$()[rebase] = new LongHelper(i);
                }
                return result;
            }
            return new LongHelper(i);
        }

        public static valueOf$java_lang_String(s : string) : LongHelper {
            return LongHelper.valueOf(s, 10);
        }

        public static valueOf(s? : any, radix? : any) : any {
            if(((typeof s === 'string') || s === null) && ((typeof radix === 'number') || radix === null)) {
                return <any>(() => {
                    return LongHelper.valueOf(LongHelper.parseLong(s, radix));
                })();
            } else if(((typeof s === 'string') || s === null) && radix === undefined) {
                return <any>javaemul.internal.LongHelper.valueOf$java_lang_String(s);
            } else if(((typeof s === 'number') || s === null) && radix === undefined) {
                return <any>javaemul.internal.LongHelper.valueOf$long(s);
            } else throw new Error('invalid overload');
        }

        static toPowerOfTwoUnsignedString(value : number, shift : number) : string {
            var radix : number = 1 << shift;
            if(javaemul.internal.IntegerHelper.MIN_VALUE <= value && value <= javaemul.internal.IntegerHelper.MAX_VALUE) {
                return javaemul.internal.IntegerHelper.toString((<number>value|0), radix);
            }
            var mask : number = radix - 1;
            var bufSize : number = (64 / shift|0) + 1;
            var buf : string[] = new Array(bufSize);
            var pos : number = bufSize;
            do {
                buf[--pos] = javaemul.internal.CharacterHelper.forDigit(((<number>value|0)) & mask);
                value >>>= shift;
            } while((value !== 0));
            return /* valueOf */((str, index, len) => str.join('').substring(index, index + len))(buf, pos, bufSize - pos);
        }

        private value : number;

        public constructor(s? : any) {
            if(((typeof s === 'string') || s === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = LongHelper.parseLong(s);
                })();
            } else if(((typeof s === 'number') || s === null)) {
                var value : any = s;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = value;
                })();
            } else throw new Error('invalid overload');
        }

        public byteValue() : number {
            return (<number>this.value|0);
        }

        public compareTo(b? : any) : any {
            if(((b != null && b instanceof javaemul.internal.LongHelper) || b === null)) {
                return <any>(() => {
                    return LongHelper.compare(this.value, b.value);
                })();
            } else throw new Error('invalid overload');
        }

        public doubleValue() : number {
            return this.value;
        }

        public equals(o : any) : boolean {
            return (o != null && o instanceof javaemul.internal.LongHelper) && ((<LongHelper>o).value === this.value);
        }

        public floatValue() : number {
            return this.value;
        }

        public hashCode() : number {
            return LongHelper.hashCode(this.value);
        }

        public intValue() : number {
            return (<number>this.value|0);
        }

        public longValue() : number {
            return this.value;
        }

        public shortValue() : number {
            return (<number>this.value|0);
        }

        public toString() : string {
            return LongHelper.toString(this.value);
        }
    }

    export namespace LongHelper {

        /**
         * Use nested class to avoid clinit on outer.
         */
        export class BoxedValues {
            static boxedValues : javaemul.internal.LongHelper[]; public static boxedValues_$LI$() : javaemul.internal.LongHelper[] { if(BoxedValues.boxedValues == null) BoxedValues.boxedValues = new Array(256); return BoxedValues.boxedValues; };
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Wraps native <code>byte</code> as an object.
     */
    export class ByteHelper extends javaemul.internal.NumberHelper implements java.lang.Comparable<ByteHelper> {
        public static MIN_VALUE : number; public static MIN_VALUE_$LI$() : number { if(ByteHelper.MIN_VALUE == null) ByteHelper.MIN_VALUE = (<number>128|0); return ByteHelper.MIN_VALUE; };

        public static MAX_VALUE : number; public static MAX_VALUE_$LI$() : number { if(ByteHelper.MAX_VALUE == null) ByteHelper.MAX_VALUE = (<number>127|0); return ByteHelper.MAX_VALUE; };

        public static SIZE : number = 8;

        public static TYPE : typeof Number; public static TYPE_$LI$() : typeof Number { if(ByteHelper.TYPE == null) ByteHelper.TYPE = Number; return ByteHelper.TYPE; };

        public static compare(x : number, y : number) : number {
            return x - y;
        }

        public static decode(s : string) : ByteHelper {
            return ByteHelper.valueOf((<number>NumberHelper.__decodeAndValidateInt(s, ByteHelper.MIN_VALUE_$LI$(), ByteHelper.MAX_VALUE_$LI$())|0));
        }

        /**
         * @skip
         * 
         * Here for shared implementation with Arrays.hashCode
         */
        public static hashCode(b : number) : number {
            return b;
        }

        public static parseByte(s : string, radix : number = 10) : number {
            return (<number>NumberHelper.__parseAndValidateInt(s, radix, ByteHelper.MIN_VALUE_$LI$(), ByteHelper.MAX_VALUE_$LI$())|0);
        }

        public static toString(b : number) : string {
            return /* valueOf */new String(b).toString();
        }

        public static valueOf$byte(b : number) : ByteHelper {
            var rebase : number = b + 128;
            var result : ByteHelper = ByteHelper.BoxedValues.boxedValues_$LI$()[rebase];
            if(result == null) {
                result = ByteHelper.BoxedValues.boxedValues_$LI$()[rebase] = new ByteHelper(b);
            }
            return result;
        }

        public static valueOf$java_lang_String(s : string) : ByteHelper {
            return ByteHelper.valueOf(s, 10);
        }

        public static valueOf(s? : any, radix? : any) : any {
            if(((typeof s === 'string') || s === null) && ((typeof radix === 'number') || radix === null)) {
                return <any>(() => {
                    return ByteHelper.valueOf(ByteHelper.parseByte(s, radix));
                })();
            } else if(((typeof s === 'string') || s === null) && radix === undefined) {
                return <any>javaemul.internal.ByteHelper.valueOf$java_lang_String(s);
            } else if(((typeof s === 'number') || s === null) && radix === undefined) {
                return <any>javaemul.internal.ByteHelper.valueOf$byte(s);
            } else throw new Error('invalid overload');
        }

        private value : number;

        public constructor(s? : any) {
            if(((typeof s === 'string') || s === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = ByteHelper.parseByte(s);
                })();
            } else if(((typeof s === 'number') || s === null)) {
                var value : any = s;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = value;
                })();
            } else throw new Error('invalid overload');
        }

        public byteValue() : number {
            return this.value;
        }

        public compareTo(b? : any) : any {
            if(((b != null && b instanceof javaemul.internal.ByteHelper) || b === null)) {
                return <any>(() => {
                    return ByteHelper.compare(this.value, b.value);
                })();
            } else throw new Error('invalid overload');
        }

        public doubleValue() : number {
            return this.value;
        }

        public equals(o : any) : boolean {
            return (o != null && o instanceof javaemul.internal.ByteHelper) && ((<ByteHelper>o).value === this.value);
        }

        public floatValue() : number {
            return this.value;
        }

        public hashCode() : number {
            return ByteHelper.hashCode(this.value);
        }

        public intValue() : number {
            return this.value;
        }

        public longValue() : number {
            return this.value;
        }

        public shortValue() : number {
            return this.value;
        }

        public toString() : string {
            return ByteHelper.toString(this.value);
        }
    }

    export namespace ByteHelper {

        /**
         * Use nested class to avoid clinit on outer.
         */
        export class BoxedValues {
            static boxedValues : javaemul.internal.ByteHelper[]; public static boxedValues_$LI$() : javaemul.internal.ByteHelper[] { if(BoxedValues.boxedValues == null) BoxedValues.boxedValues = new Array(256); return BoxedValues.boxedValues; };
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Wraps a primitive <code>double</code> as an object.
     */
    export class DoubleHelper extends javaemul.internal.NumberHelper implements java.lang.Comparable<DoubleHelper> {
        public static MAX_VALUE : number = 1.7976931348623157E308;

        public static MIN_VALUE : number = 4.9E-324;

        public static MIN_NORMAL : number = 2.2250738585072014E-308;

        public static MAX_EXPONENT : number = 1023;

        public static MIN_EXPONENT : number = -1022;

        public static NaN : number; public static NaN_$LI$() : number { if(DoubleHelper.NaN == null) DoubleHelper.NaN = 0.0 / 0.0; return DoubleHelper.NaN; };

        public static NEGATIVE_INFINITY : number; public static NEGATIVE_INFINITY_$LI$() : number { if(DoubleHelper.NEGATIVE_INFINITY == null) DoubleHelper.NEGATIVE_INFINITY = -1.0 / 0.0; return DoubleHelper.NEGATIVE_INFINITY; };

        public static POSITIVE_INFINITY : number; public static POSITIVE_INFINITY_$LI$() : number { if(DoubleHelper.POSITIVE_INFINITY == null) DoubleHelper.POSITIVE_INFINITY = 1.0 / 0.0; return DoubleHelper.POSITIVE_INFINITY; };

        public static SIZE : number = 64;

        public static POWER_512 : number = 1.3407807929942597E154;

        public static POWER_MINUS_512 : number = 7.458340731200207E-155;

        public static POWER_256 : number = 1.157920892373162E77;

        public static POWER_MINUS_256 : number = 8.636168555094445E-78;

        public static POWER_128 : number = 3.4028236692093846E38;

        public static POWER_MINUS_128 : number = 2.9387358770557188E-39;

        public static POWER_64 : number = 1.8446744073709552E19;

        public static POWER_MINUS_64 : number = 5.421010862427522E-20;

        public static POWER_52 : number = 4.503599627370496E15;

        public static POWER_MINUS_52 : number = 2.220446049250313E-16;

        public static POWER_32 : number = 4.294967296E9;

        public static POWER_MINUS_32 : number = 2.3283064365386963E-10;

        public static POWER_31 : number = 2.147483648E9;

        public static POWER_20 : number = 1048576.0;

        public static POWER_MINUS_20 : number = 9.5367431640625E-7;

        public static POWER_16 : number = 65536.0;

        public static POWER_MINUS_16 : number = 1.52587890625E-5;

        public static POWER_8 : number = 256.0;

        public static POWER_MINUS_8 : number = 0.00390625;

        public static POWER_4 : number = 16.0;

        public static POWER_MINUS_4 : number = 0.0625;

        public static POWER_2 : number = 4.0;

        public static POWER_MINUS_2 : number = 0.25;

        public static POWER_1 : number = 2.0;

        public static POWER_MINUS_1 : number = 0.5;

        public static POWER_MINUS_1022 : number = 2.2250738585072014E-308;

        public static compare(x : number, y : number) : number {
            if(x < y) {
                return -1;
            }
            if(x > y) {
                return 1;
            }
            if(x === y) {
                return 0;
            }
            if(DoubleHelper.isNaN(x)) {
                if(DoubleHelper.isNaN(y)) {
                    return 0;
                } else {
                    return 1;
                }
            } else {
                return -1;
            }
        }

        public static doubleToLongBits(value : number) : number {
            if(DoubleHelper.isNaN(value)) {
                return 9221120237041090560;
            }
            var negative : boolean = false;
            if(value === 0.0) {
                if(1.0 / value === DoubleHelper.NEGATIVE_INFINITY_$LI$()) {
                    return -9223372036854775808;
                } else {
                    return 0;
                }
            }
            if(value < 0.0) {
                negative = true;
                value = -value;
            }
            if(DoubleHelper.isInfinite(value)) {
                if(negative) {
                    return -4503599627370496;
                } else {
                    return 9218868437227405312;
                }
            }
            var exp : number = 0;
            if(value < 1.0) {
                var bit : number = 512;
                for(var i : number = 0; i < 10; i++, bit >>= 1) {
                    if(value < DoubleHelper.PowersTable.invPowers_$LI$()[i] && exp - bit >= -1023) {
                        value *= DoubleHelper.PowersTable.powers_$LI$()[i];
                        exp -= bit;
                    }
                }
                if(value < 1.0 && exp - 1 >= -1023) {
                    value *= 2.0;
                    exp--;
                }
            } else if(value >= 2.0) {
                var bit : number = 512;
                for(var i : number = 0; i < 10; i++, bit >>= 1) {
                    if(value >= DoubleHelper.PowersTable.powers_$LI$()[i]) {
                        value *= DoubleHelper.PowersTable.invPowers_$LI$()[i];
                        exp += bit;
                    }
                }
            }
            if(exp > -1023) {
                value -= 1.0;
            } else {
                value *= 0.5;
            }
            var ihi : number = Math.round(<number>(value * DoubleHelper.POWER_20));
            value -= ihi * DoubleHelper.POWER_MINUS_20;
            var ilo : number = Math.round(<number>(value * DoubleHelper.POWER_52));
            ihi |= (exp + 1023) << 20;
            if(negative) {
                ihi |= 2147483648;
            }
            return (ihi << 32) | ilo;
        }

        /**
         * @skip Here for shared implementation with Arrays.hashCode
         */
        public static hashCode(d : number) : number {
            return (<number>d|0);
        }

        public static isInfinite(x : number) : boolean {
            return x === javaemul.internal.JsUtils.getInfinity() || x === -javaemul.internal.JsUtils.getInfinity();
        }

        public static isNaN(x : number) : boolean {
            return isNaN(x);
        }

        public static longBitsToDouble(bits : number) : number {
            var ihi : number = Math.round(<number>(bits >> 32));
            var ilo : number = Math.round(<number>(bits & 4294967295));
            if(ihi < 0) {
                ihi += 4294967296;
            }
            if(ilo < 0) {
                ilo += 4294967296;
            }
            var negative : boolean = (ihi & -2147483648) !== 0;
            var exp : number = (<number>((ihi >> 20) & 2047)|0);
            ihi &= 1048575;
            if(exp === 0) {
                var d : number = (ihi * DoubleHelper.POWER_MINUS_20) + (ilo * DoubleHelper.POWER_MINUS_52);
                d *= DoubleHelper.POWER_MINUS_1022;
                return negative?(d === 0.0?-0.0:-d):d;
            } else if(exp === 2047) {
                if(ihi === 0 && ilo === 0) {
                    return negative?DoubleHelper.NEGATIVE_INFINITY_$LI$():DoubleHelper.POSITIVE_INFINITY_$LI$();
                } else {
                    return DoubleHelper.NaN_$LI$();
                }
            }
            exp -= 1023;
            var d : number = 1.0 + (ihi * DoubleHelper.POWER_MINUS_20) + (ilo * DoubleHelper.POWER_MINUS_52);
            if(exp > 0) {
                var bit : number = 512;
                for(var i : number = 0; i < 10; i++, bit >>= 1) {
                    if(exp >= bit) {
                        d *= DoubleHelper.PowersTable.powers_$LI$()[i];
                        exp -= bit;
                    }
                }
            } else if(exp < 0) {
                while((exp < 0)){
                    var bit : number = 512;
                    for(var i : number = 0; i < 10; i++, bit >>= 1) {
                        if(exp <= -bit) {
                            d *= DoubleHelper.PowersTable.invPowers_$LI$()[i];
                            exp += bit;
                        }
                    }
                };
            }
            return negative?-d:d;
        }

        public static parseDouble(s : string) : number {
            return NumberHelper.__parseAndValidateDouble(s);
        }

        public static toString(b : number) : string {
            return /* valueOf */new String(b).toString();
        }

        public static valueOf$double(d : number) : DoubleHelper {
            return new DoubleHelper(d);
        }

        public static valueOf(s? : any) : any {
            if(((typeof s === 'string') || s === null)) {
                return <any>(() => {
                    return new DoubleHelper(s);
                })();
            } else if(((typeof s === 'number') || s === null)) {
                return <any>javaemul.internal.DoubleHelper.valueOf$double(s);
            } else throw new Error('invalid overload');
        }

        public constructor(s? : any) {
            if(((typeof s === 'string') || s === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof s === 'number') || s === null)) {
                var value : any = s;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public byteValue() : number {
            return (<number>this.doubleValue()|0);
        }

        public compareTo(b? : any) : any {
            if(((b != null && b instanceof javaemul.internal.DoubleHelper) || b === null)) {
                return <any>(() => {
                    return DoubleHelper.compare(this.doubleValue(), b.doubleValue());
                })();
            } else throw new Error('invalid overload');
        }

        public doubleValue() : number {
            return DoubleHelper.unsafeCast(javaemul.internal.InternalPreconditions.checkNotNull(this));
        }

        static unsafeCast(instance : any) : number {
            return instance;
        }

        public equals(o : any) : boolean {
            return javaemul.internal.InternalPreconditions.checkNotNull(this) === o;
        }

        public floatValue() : number {
            return <number>this.doubleValue();
        }

        /**
         * Performance caution: using Double objects as map keys is not recommended.
         * Using double values as keys is generally a bad idea due to difficulty
         * determining exact equality. In addition, there is no efficient JavaScript
         * equivalent of <code>doubleToIntBits</code>. As a result, this method
         * computes a hash code by truncating the whole number portion of the
         * double, which may lead to poor performance for certain value sets if
         * Doubles are used as keys in a {@link java.util.HashMap}.
         */
        public hashCode() : number {
            return DoubleHelper.hashCode(this.doubleValue());
        }

        public intValue() : number {
            return (<number>this.doubleValue()|0);
        }

        public isInfinite() : boolean {
            return DoubleHelper.isInfinite(this.doubleValue());
        }

        public isNaN() : boolean {
            return DoubleHelper.isNaN(this.doubleValue());
        }

        public longValue() : number {
            return Math.round(<number>this.doubleValue());
        }

        public shortValue() : number {
            return (<number>this.doubleValue()|0);
        }

        public toString() : string {
            return DoubleHelper.toString(this.doubleValue());
        }
    }

    export namespace DoubleHelper {

        export class PowersTable {
            static powers : number[]; public static powers_$LI$() : number[] { if(PowersTable.powers == null) PowersTable.powers = [javaemul.internal.DoubleHelper.POWER_512, javaemul.internal.DoubleHelper.POWER_256, javaemul.internal.DoubleHelper.POWER_128, javaemul.internal.DoubleHelper.POWER_64, javaemul.internal.DoubleHelper.POWER_32, javaemul.internal.DoubleHelper.POWER_16, javaemul.internal.DoubleHelper.POWER_8, javaemul.internal.DoubleHelper.POWER_4, javaemul.internal.DoubleHelper.POWER_2, javaemul.internal.DoubleHelper.POWER_1]; return PowersTable.powers; };

            static invPowers : number[]; public static invPowers_$LI$() : number[] { if(PowersTable.invPowers == null) PowersTable.invPowers = [javaemul.internal.DoubleHelper.POWER_MINUS_512, javaemul.internal.DoubleHelper.POWER_MINUS_256, javaemul.internal.DoubleHelper.POWER_MINUS_128, javaemul.internal.DoubleHelper.POWER_MINUS_64, javaemul.internal.DoubleHelper.POWER_MINUS_32, javaemul.internal.DoubleHelper.POWER_MINUS_16, javaemul.internal.DoubleHelper.POWER_MINUS_8, javaemul.internal.DoubleHelper.POWER_MINUS_4, javaemul.internal.DoubleHelper.POWER_MINUS_2, javaemul.internal.DoubleHelper.POWER_MINUS_1]; return PowersTable.invPowers; };
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Indicates that a method definition is intended to override a declaration from
     * a superclass. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Override.html">[Sun
     * docs]</a>
     */
    export interface Override {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Represents a date and time.
     */
    export class Date implements java.lang.Cloneable, java.lang.Comparable<Date>, java.io.Serializable {
        public static parse(s : string) : number {
            var parsed : number = (<any>Date.jsdateClass()["parse"])(s);
            if(/* isNaN */(Number.NaN === parsed)) {
                throw new java.lang.IllegalArgumentException();
            }
            return Math.round(<number>parsed);
        }

        public static UTC(year : number, month : number, date : number, hrs : number, min : number, sec : number) : number {
            return Math.round(<number>(<any>Date.jsdateClass()["UTC"])(year + 1900, month, date, hrs, min, sec, 0));
        }

        /**
         * Ensure a number is displayed with two digits.
         * 
         * @return a two-character base 10 representation of the number
         */
        static padTwo(number : number) : string {
            if(number < 10) {
                return "0" + number;
            } else {
                return /* valueOf */new String(number).toString();
            }
        }

        /**
         * JavaScript Date instance.
         */
        private jsdate : Object;

        static jsdateClass() : Object {
            return <Object>window["Date"];
        }

        public constructor(year? : any, month? : any, date? : any, hrs? : any, min? : any, sec? : any) {
            if(((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof date === 'number') || date === null) && ((typeof hrs === 'number') || hrs === null) && ((typeof min === 'number') || min === null) && ((typeof sec === 'number') || sec === null)) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                (() => {
                    this.jsdate = new (<any>Date.jsdateClass())();
                    (<any>this.jsdate["setFullYear"])(this.jsdate, year + 1900, month, date);
                    (<any>this.jsdate["setHours"])(this.jsdate, hrs, min, sec, 0);
                    this.fixDaylightSavings(hrs);
                })();
            } else if(((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof date === 'number') || date === null) && ((typeof hrs === 'number') || hrs === null) && ((typeof min === 'number') || min === null) && sec === undefined) {
                {
                    var sec : any = 0;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                    (() => {
                        this.jsdate = new (<any>Date.jsdateClass())();
                        (<any>this.jsdate["setFullYear"])(this.jsdate, year + 1900, month, date);
                        (<any>this.jsdate["setHours"])(this.jsdate, hrs, min, sec, 0);
                        this.fixDaylightSavings(hrs);
                    })();
                }
                (() => {
                })();
            } else if(((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof date === 'number') || date === null) && hrs === undefined && min === undefined && sec === undefined) {
                {
                    var hrs : any = 0;
                    var min : any = 0;
                    var sec : any = 0;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                    (() => {
                        this.jsdate = new (<any>Date.jsdateClass())();
                        (<any>this.jsdate["setFullYear"])(this.jsdate, year + 1900, month, date);
                        (<any>this.jsdate["setHours"])(this.jsdate, hrs, min, sec, 0);
                        this.fixDaylightSavings(hrs);
                    })();
                }
                (() => {
                })();
            } else if(((typeof year === 'string') || year === null) && month === undefined && date === undefined && hrs === undefined && min === undefined && sec === undefined) {
                var date : any = year;
                {
                    var date : any = Date.parse(date);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                    (() => {
                        this.jsdate = new Date(date);
                    })();
                }
                (() => {
                })();
            } else if(((typeof year === 'number') || year === null) && month === undefined && date === undefined && hrs === undefined && min === undefined && sec === undefined) {
                var date : any = year;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                (() => {
                    this.jsdate = new Date(date);
                })();
            } else if(year === undefined && month === undefined && date === undefined && hrs === undefined && min === undefined && sec === undefined) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                (() => {
                    this.jsdate = new (<any>Date.jsdateClass())();
                })();
            } else throw new Error('invalid overload');
        }

        public after(ts? : any) : any {
            if(((ts != null && ts instanceof java.util.Date) || ts === null)) {
                return <any>this.after$java_util_Date(ts);
            } else throw new Error('invalid overload');
        }

        public after$java_util_Date(when : Date) : boolean {
            return this.getTime() > when.getTime();
        }

        public before(ts? : any) : any {
            if(((ts != null && ts instanceof java.util.Date) || ts === null)) {
                return <any>this.before$java_util_Date(ts);
            } else throw new Error('invalid overload');
        }

        public before$java_util_Date(when : Date) : boolean {
            return this.getTime() < when.getTime();
        }

        public clone() : any {
            return new Date(this.getTime());
        }

        public compareTo(other? : any) : any {
            if(((other != null && other instanceof java.util.Date) || other === null)) {
                return <any>(() => {
                    return javaemul.internal.LongHelper.compare(this.getTime(), other.getTime());
                })();
            } else throw new Error('invalid overload');
        }

        public equals(ts? : any) : any {
            if(((ts != null) || ts === null)) {
                return <any>this.equals$java_lang_Object(ts);
            } else throw new Error('invalid overload');
        }

        public equals$java_lang_Object(obj : any) : boolean {
            return ((obj != null && obj instanceof java.util.Date) && (this.getTime() === (<Date>obj).getTime()));
        }

        public getDate() : number {
            return (<number>(<any>this.jsdate["getDate"])(this.jsdate)|0);
        }

        public getDay() : number {
            return (<number>(<any>this.jsdate["getDay"])(this.jsdate)|0);
        }

        public getHours() : number {
            return (<number>(<any>this.jsdate["getHours"])(this.jsdate)|0);
        }

        public getMinutes() : number {
            return (<number>(<any>this.jsdate["getMinutes"])(this.jsdate)|0);
        }

        public getMonth() : number {
            return (<number>(<any>this.jsdate["getMonth"])(this.jsdate)|0);
        }

        public getSeconds() : number {
            return (<number>(<any>this.jsdate["getSeconds"])(this.jsdate)|0);
        }

        public getTime() : number {
            return Math.round(<number>(<any>this.jsdate["getTime"])(this.jsdate));
        }

        public getTimezoneOffset() : number {
            return (<number>(<any>this.jsdate["getTimezoneOffset"])(this.jsdate)|0);
        }

        public getYear() : number {
            return (<number>(<any>this.jsdate["getFullYear"])(this.jsdate)|0) - 1900;
        }

        public hashCode() : number {
            var time : number = this.getTime();
            return (<number>(time ^ (time >>> 32))|0);
        }

        public setDate(date : number) {
            var hours : number = this.getHours();
            (<any>this.jsdate["setDate"])(this.jsdate, date);
            this.fixDaylightSavings(hours);
        }

        public setHours(hours : number) {
            (<any>this.jsdate["setHours"])(this.jsdate, hours);
            this.fixDaylightSavings(hours);
        }

        public setMinutes(minutes : number) {
            var hours : number = this.getHours() + (minutes / 60|0);
            (<any>this.jsdate["setMinutes"])(this.jsdate, minutes);
            this.fixDaylightSavings(hours);
        }

        public setMonth(month : number) {
            var hours : number = this.getHours();
            (<any>this.jsdate["setMonth"])(this.jsdate, month);
            this.fixDaylightSavings(hours);
        }

        public setSeconds(seconds : number) {
            var hours : number = this.getHours() + (seconds / (60 * 60)|0);
            (<any>this.jsdate["setSeconds"])(this.jsdate, seconds);
            this.fixDaylightSavings(hours);
        }

        public setTime(time : number) {
            (<any>this.jsdate["setTime"])(this.jsdate, time);
        }

        public setYear(year : number) {
            var hours : number = this.getHours();
            (<any>this.jsdate["setFullYear"])(this.jsdate, year + 1900);
            this.fixDaylightSavings(hours);
        }

        public toGMTString() : string {
            return (<any>this.jsdate["getUTCDate"])(this.jsdate) + " " + Date.StringData.MONTHS_$LI$()[(<number>(<any>this.jsdate["getUTCMonth"])(this.jsdate)|0)] + " " + (<any>this.jsdate["getUTCFullYear"])(this.jsdate) + " " + Date.padTwo((<number>(<any>this.jsdate["getUTCHours"])(this.jsdate)|0)) + ":" + Date.padTwo((<number>(<any>this.jsdate["getUTCMinutes"])(this.jsdate)|0)) + ":" + Date.padTwo((<number>(<any>this.jsdate["getUTCSeconds"])(this.jsdate)|0)) + " GMT";
        }

        public toLocaleString() : string {
            return this.jsdate.toLocaleString();
        }

        public toString() : string {
            var offset : number = -(<number>this.getTimezoneOffset()|0);
            var hourOffset : string = ((offset >= 0)?"+":"") + ((offset / 60|0));
            var minuteOffset : string = Date.padTwo(Math.abs(offset) % 60);
            return Date.StringData.DAYS_$LI$()[(<number>this.getDay()|0)] + " " + Date.StringData.MONTHS_$LI$()[(<number>this.getMonth()|0)] + " " + Date.padTwo((<number>this.getDate()|0)) + " " + Date.padTwo((<number>this.getHours()|0)) + ":" + Date.padTwo((<number>this.getMinutes()|0)) + ":" + Date.padTwo((<number>this.getSeconds()|0)) + " GMT" + hourOffset + minuteOffset + " " + (<any>this.jsdate["getFullYear"])(this.jsdate);
        }

        private static ONE_HOUR_IN_MILLISECONDS : number; public static ONE_HOUR_IN_MILLISECONDS_$LI$() : number { if(Date.ONE_HOUR_IN_MILLISECONDS == null) Date.ONE_HOUR_IN_MILLISECONDS = 60 * 60 * 1000; return Date.ONE_HOUR_IN_MILLISECONDS; };

        /**
         * Detects if the requested time falls into a non-existent time range due to
         * local time advancing into daylight savings time or is ambiguous due to
         * going out of daylight savings. If so, adjust accordingly.
         */
        fixDaylightSavings(requestedHours : number) {
            requestedHours %= 24;
            if(this.getHours() !== requestedHours) {
                var copy : Object = new (<any>Date.jsdateClass())(this.getTime());
                (<any>copy["setDate"])(((<number>(<any>copy["getDate"])(copy)|0) + 1));
                var timeDiff : number = (<number>(<any>this.jsdate["getTimezoneOffset"])(this.jsdate)|0) - (<number>(<any>copy["getTimezoneOffset"])(copy)|0);
                if(timeDiff > 0) {
                    var timeDiffHours : number = (timeDiff / 60|0);
                    var timeDiffMinutes : number = timeDiff % 60;
                    var day : number = (<number>this.getDate()|0);
                    var badHours : number = (<number>this.getHours()|0);
                    if(badHours + timeDiffHours >= 24) {
                        day++;
                    }
                    var newTime : Object = new (<any>Date.jsdateClass())((<number>(<any>this.jsdate["getFullYear"])(this.jsdate)|0), this.getMonth(), day, requestedHours + timeDiffHours, this.getMinutes() + timeDiffMinutes, this.getSeconds(), Math.round(<number>(<any>this.jsdate["getMilliseconds"])(this.jsdate)));
                    this.setTime((<any>newTime["getMilliseconds"])(newTime));
                }
            }
            var originalTimeInMillis : number = this.getTime();
            this.setTime(originalTimeInMillis + Date.ONE_HOUR_IN_MILLISECONDS_$LI$());
            if(this.getHours() !== requestedHours) {
                this.setTime(originalTimeInMillis);
            }
        }
    }

    export namespace Date {

        /**
         * Encapsulates static data to avoid Date itself having a static
         * initializer.
         */
        export class StringData {
            public static DAYS : string[]; public static DAYS_$LI$() : string[] { if(StringData.DAYS == null) StringData.DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; return StringData.DAYS; };

            public static MONTHS : string[]; public static MONTHS_$LI$() : string[] { if(StringData.MONTHS == null) StringData.MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; return StringData.MONTHS; };
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.sql {
    /**
     * An implementation of java.sql.Timestame. Derived from
     * http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html. This is
     * basically just regular Date decorated with a nanoseconds field.
     */
    export class Timestamp extends java.util.Date {
        public static valueOf(s : string) : Timestamp {
            var components : string[] = s.split(" ");
            if(components.length !== 2) {
                throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
            }
            var timeComponents : string[] = components[1].split("\\.");
            var hasNanos : boolean = true;
            var nanos : number = 0;
            if(timeComponents.length === 1) {
                hasNanos = false;
            } else if(timeComponents.length !== 2) {
                throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
            }
            var d : java.sql.Date = java.sql.Date.valueOf(components[0]);
            var t : java.sql.Time = java.sql.Time.valueOf(timeComponents[0]);
            if(hasNanos) {
                var nanosString : string = timeComponents[1];
                var len : number = nanosString.length;
                if(len > 9) {
                    throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
                }
                if(len < 9) {
                    nanosString += "00000000".substring(len - 1);
                }
                try {
                    nanos = javaemul.internal.IntegerHelper.valueOf(nanosString);
                } catch(e) {
                    throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
                };
            }
            return new Timestamp(d.getYear(), d.getMonth(), d.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), nanos);
        }

        private static padNine(value : number) : string {
            var toReturn : java.lang.StringBuilder = new java.lang.StringBuilder("000000000");
            var asString : string = /* valueOf */new String(value).toString();
            toReturn = toReturn.replace(9 - asString.length, 9, asString);
            return toReturn.toString();
        }

        /**
         * Stores the nanosecond resolution of the timestamp; must be kept in sync
         * with the sub-second part of Date.millis.
         */
        private nanos : number;

        public constructor(year? : any, month? : any, date? : any, hour? : any, minute? : any, second? : any, nano? : any) {
            if(((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof date === 'number') || date === null) && ((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && ((typeof second === 'number') || second === null) && ((typeof nano === 'number') || nano === null)) {
                super(year, month, date, hour, minute, second);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                this.nanos = 0;
                (() => {
                    this.setNanos(nano);
                })();
            } else if(((typeof year === 'number') || year === null) && month === undefined && date === undefined && hour === undefined && minute === undefined && second === undefined && nano === undefined) {
                var time : any = year;
                super(time);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                this.nanos = 0;
                (() => {
                    this.nanos = (((<number>(time % 1000)|0)) * 1000000);
                })();
            } else throw new Error('invalid overload');
        }

        public after(ts? : any) : any {
            if(((ts != null && ts instanceof java.sql.Timestamp) || ts === null)) {
                return <any>(() => {
                    return (this.getTime() > ts.getTime()) || (this.getTime() === ts.getTime() && this.getNanos() > ts.getNanos());
                })();
            } else if(((ts != null && ts instanceof java.util.Date) || ts === null)) {
                return <any>this.after$java_util_Date(ts);
            } else throw new Error('invalid overload');
        }

        public before(ts? : any) : any {
            if(((ts != null && ts instanceof java.sql.Timestamp) || ts === null)) {
                return <any>(() => {
                    return (this.getTime() < ts.getTime()) || (this.getTime() === ts.getTime() && this.getNanos() < ts.getNanos());
                })();
            } else if(((ts != null && ts instanceof java.util.Date) || ts === null)) {
                return <any>this.before$java_util_Date(ts);
            } else throw new Error('invalid overload');
        }

        public compareTo$java_util_Date(o : java.util.Date) : number {
            if(o != null && o instanceof java.sql.Timestamp) {
                return this.compareTo(<Timestamp>o);
            } else {
                return this.compareTo(new Timestamp(o.getTime()));
            }
        }

        public compareTo(o? : any) : any {
            if(((o != null && o instanceof java.sql.Timestamp) || o === null)) {
                return <any>(() => {
                    var cmp : number = javaemul.internal.LongHelper.compare(this.getTime(), o.getTime());
                    return cmp === 0?javaemul.internal.IntegerHelper.compare(this.getNanos(), o.getNanos()):cmp;
                })();
            } else if(((o != null && o instanceof java.util.Date) || o === null)) {
                return <any>this.compareTo$java_util_Date(o);
            } else throw new Error('invalid overload');
        }

        public equals$java_lang_Object(ts : any) : boolean {
            return (ts != null && ts instanceof java.sql.Timestamp) && this.equals(<Timestamp>ts);
        }

        public equals(ts? : any) : any {
            if(((ts != null && ts instanceof java.sql.Timestamp) || ts === null)) {
                return <any>(() => {
                    return ts != null && this.getTime() === ts.getTime() && this.getNanos() === ts.getNanos();
                })();
            } else if(((ts != null) || ts === null)) {
                return <any>this.equals$java_lang_Object(ts);
            } else throw new Error('invalid overload');
        }

        public getNanos() : number {
            return this.nanos;
        }

        public getTime() : number {
            return super.getTime();
        }

        public hashCode() : number {
            return super.hashCode();
        }

        public setNanos(n : number) {
            if(n < 0 || n > 999999999) {
                throw new java.lang.IllegalArgumentException("nanos out of range " + n);
            }
            this.nanos = n;
            super.setTime((Math.round(this.getTime() / 1000)) * 1000 + ((this.nanos / 1000000|0)));
        }

        public setTime(time : number) {
            super.setTime(time);
            this.nanos = (((<number>(time % 1000)|0)) * 1000000);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.sql {
    /**
     * An implementation of java.sql.Time. Derived from
     * http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html
     */
    export class Time extends java.util.Date {
        public static valueOf(s : string) : Time {
            var split : string[] = s.split(":");
            if(split.length !== 3) {
                throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
            }
            try {
                var hh : number = javaemul.internal.IntegerHelper.parseInt(split[0]);
                var mm : number = javaemul.internal.IntegerHelper.parseInt(split[1]);
                var ss : number = javaemul.internal.IntegerHelper.parseInt(split[2]);
                return new Time(hh, mm, ss);
            } catch(e) {
                throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
            };
        }

        public constructor(hour? : any, minute? : any, second? : any) {
            if(((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && ((typeof second === 'number') || second === null)) {
                super(70, 0, 1, hour, minute, second);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof hour === 'number') || hour === null) && minute === undefined && second === undefined) {
                var time : any = hour;
                super(time);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public getDate() : number {
            throw new java.lang.IllegalArgumentException();
        }

        public getDay() : number {
            throw new java.lang.IllegalArgumentException();
        }

        public getMonth() : number {
            throw new java.lang.IllegalArgumentException();
        }

        public getYear() : number {
            throw new java.lang.IllegalArgumentException();
        }

        public setDate(i : number) {
            throw new java.lang.IllegalArgumentException();
        }

        public setMonth(i : number) {
            throw new java.lang.IllegalArgumentException();
        }

        public setYear(i : number) {
            throw new java.lang.IllegalArgumentException();
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * A specialized {@link OutputStream} for class for writing content to an
     * (internal) byte array. As bytes are written to this stream, the byte array
     * may be expanded to hold more bytes. When the writing is considered to be
     * finished, a copy of the byte array can be requested from the class.
     * 
     * @see ByteArrayInputStream
     */
    export class ByteArrayOutputStream extends java.io.OutputStream {
        /**
         * The byte array containing the bytes written.
         */
        buf : number[];

        /**
         * The number of bytes written.
         */
        count : number;

        /**
         * Constructs a new {@code ByteArrayOutputStream} with a default size of
         * {@code size} bytes. If more than {@code size} bytes are written to this
         * instance, the underlying byte array will expand.
         * 
         * @param size
         * initial size for the underlying byte array, must be
         * non-negative.
         * @throws IllegalArgumentException
         * if {@code size} < 0.
         */
        public constructor(size? : any) {
            if(((typeof size === 'number') || size === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"] });
                this.count = 0;
                (() => {
                    if(size >= 0) {
                        this.buf = new Array(size);
                    } else {
                        throw new java.lang.IllegalArgumentException("size < 0");
                    }
                })();
            } else if(size === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"] });
                this.count = 0;
                (() => {
                    this.buf = new Array(32);
                })();
            } else throw new Error('invalid overload');
        }

        /**
         * Closes this stream. This releases system resources used for this stream.
         * 
         * @throws IOException
         * if an error occurs while attempting to close this stream.
         */
        public close() {
            super.close();
        }

        private expand(i : number) {
            if(this.count + i <= this.buf.length) {
                return;
            }
            var newbuf : number[] = new Array((this.count + i) * 2);
            java.lang.System.arraycopy(this.buf, 0, newbuf, 0, this.count);
            this.buf = newbuf;
        }

        /**
         * Resets this stream to the beginning of the underlying byte array. All
         * subsequent writes will overwrite any bytes previously stored in this
         * stream.
         */
        public reset() {
            this.count = 0;
        }

        /**
         * Returns the total number of bytes written to this stream so far.
         * 
         * @return the number of bytes written to this stream.
         */
        public size() : number {
            return this.count;
        }

        /**
         * Returns the contents of this ByteArrayOutputStream as a byte array. Any
         * changes made to the receiver after returning will not be reflected in the
         * byte array returned to the caller.
         * 
         * @return this stream's current contents as a byte array.
         */
        public toByteArray() : number[] {
            var newArray : number[] = new Array(this.count);
            java.lang.System.arraycopy(this.buf, 0, newArray, 0, this.count);
            return newArray;
        }

        /**
         * Returns the contents of this ByteArrayOutputStream as a string. Any
         * changes made to the receiver after returning will not be reflected in the
         * string returned to the caller.
         * 
         * @return this stream's current contents as a string.
         */
        public toString$() : string {
            return <string>((str, index, len) => str.substring(index, index + len))((this.buf).map(s => String.fromCharCode(s)).join(''), 0, this.count);
        }

        /**
         * Returns the contents of this ByteArrayOutputStream as a string. Each byte
         * {@code b} in this stream is converted to a character {@code c} using the
         * following function:
         * {@code c == (char)(((hibyte & 0xff) << 8) | (b & 0xff))}. This method is
         * deprecated and either {@link #toString()} or {@link #toString(String)}
         * should be used.
         * 
         * @param hibyte
         * the high byte of each resulting Unicode character.
         * @return this stream's current contents as a string with the high byte set
         * to {@code hibyte}.
         * @deprecated Use {@link #toString()} instead.
         */
        public toString$int(hibyte : number) : string {
            var newBuf : string[] = new Array(this.size());
            for(var i : number = 0; i < newBuf.length; i++) {
                newBuf[i] = String.fromCharCode((((hibyte & 255) << 8) | (this.buf[i] & 255)));
            }
            return <string>new String(newBuf);
        }

        /**
         * Returns the contents of this ByteArrayOutputStream as a string converted
         * according to the encoding declared in {@code charsetName}.
         * 
         * @param charsetName
         * a string representing the encoding to use when translating
         * this stream to a string.
         * @return this stream's current contents as an encoded string.
         * @throws UnsupportedEncodingException
         * if the provided encoding is not supported.
         */
        public toString(charsetName? : any) : any {
            if(((typeof charsetName === 'string') || charsetName === null)) {
                return <any>(() => {
                    return <string>((str, index, len) => str.substring(index, index + len))((this.buf).map(s => String.fromCharCode(s)).join(''), 0, this.count);
                })();
            } else if(((typeof charsetName === 'number') || charsetName === null)) {
                return <any>this.toString$int(charsetName);
            } else if(charsetName === undefined) {
                return <any>this.toString$();
            } else throw new Error('invalid overload');
        }

        /**
         * Writes {@code count} bytes from the byte array {@code buffer} starting at
         * offset {@code index} to this stream.
         * 
         * @param buffer
         * the buffer to be written.
         * @param offset
         * the initial position in {@code buffer} to retrieve bytes.
         * @param len
         * the number of bytes of {@code buffer} to write.
         * @throws NullPointerException
         * if {@code buffer} is {@code null}.
         * @throws IndexOutOfBoundsException
         * if {@code offset < 0} or {@code len < 0}, or if
         * {@code offset + len} is greater than the length of
         * {@code buffer}.
         */
        public write(buffer? : any, offset? : any, len? : any) : any {
            if(((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                return <any>(() => {
                    java.io.IOUtils.checkOffsetAndCount(buffer, offset, len);
                    if(len === 0) {
                        return;
                    }
                    this.expand(len);
                    java.lang.System.arraycopy(buffer, offset, this.buf, this.count, len);
                    this.count += len;
                })();
            } else if(((buffer != null && buffer instanceof Array) || buffer === null) && offset === undefined && len === undefined) {
                return <any>this.write$byte_A(buffer);
            } else if(((typeof buffer === 'number') || buffer === null) && offset === undefined && len === undefined) {
                return <any>this.write$int(buffer);
            } else throw new Error('invalid overload');
        }

        /**
         * Writes the specified byte {@code oneByte} to the OutputStream. Only the
         * low order byte of {@code oneByte} is written.
         * 
         * @param oneByte
         * the byte to be written.
         */
        public write$int(oneByte : number) {
            if(this.count === this.buf.length) {
                this.expand(1);
            }
            this.buf[this.count++] = (<number>oneByte|0);
        }

        /**
         * Takes the contents of this stream and writes it to the output stream
         * {@code out}.
         * 
         * @param out
         * an OutputStream on which to write the contents of this stream.
         * @throws IOException
         * if an error occurs while writing to {@code out}.
         */
        public writeTo(out : java.io.OutputStream) {
            out.write(this.buf, 0, this.count);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * Defines an interface for classes that can (or need to) be flushed, typically
     * before some output processing is considered to be finished and the object
     * gets closed.
     */
    export interface Flushable {
        /**
         * Flushes the object by writing out any buffered data to the underlying
         * output.
         * 
         * @throws IOException
         * if there are any issues writing the data.
         */
        flush();
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A simple wrapper around JavaScriptObject to provide {@link java.util.Map}-like semantics for any
     * key type.
     * <p>
     * Implementation notes:
     * <p>
     * A key's hashCode is the index in backingMap which should contain that key. Since several keys may
     * have the same hash, each value in hashCodeMap is actually an array containing all entries whose
     * keys share the same hash.
     */
    export class InternalHashCodeMap<K, V> implements java.lang.Iterable<Map.Entry<K, V>> {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index122=this.iterator();index122.hasNext();) {
                var t = index122.next();
                {
                    action(t);
                }
            }
        }
        private backingMap : java.util.InternalJsMap<any> = java.util.InternalJsMapFactory.newJsMap<any>();

        private host : java.util.AbstractHashMap<K, V>;

        private __size : number;

        public constructor(host : java.util.AbstractHashMap<K, V>) {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Iterable"] });
            this.__size = 0;
            this.host = host;
        }

        public put(key : K, value : V) : V {
            var hashCode : number = this.hash(key);
            var chain : Map.Entry<K, V>[] = this.getChainOrEmpty(hashCode);
            if(chain.length === 0) {
                this.backingMap.set(hashCode, chain);
            } else {
                var entry : Map.Entry<K, V> = this.findEntryInChain(key, chain);
                if(entry != null) {
                    return entry.setValue(value);
                }
            }
            chain[chain.length] = new AbstractMap.SimpleEntry<K, V>(key, value);
            this.__size++;
            java.util.ConcurrentModificationDetector.structureChanged(this.host);
            return null;
        }

        public remove(key : any) : V {
            var hashCode : number = this.hash(key);
            var chain : Map.Entry<K, V>[] = this.getChainOrEmpty(hashCode);
            for(var i : number = 0; i < chain.length; i++) {
                var entry : Map.Entry<K, V> = chain[i];
                if(this.host._equals(key, entry.getKey())) {
                    if(chain.length === 1) {
                        javaemul.internal.ArrayHelper.setLength(chain, 0);
                        this.backingMap.delete(hashCode);
                    } else {
                        javaemul.internal.ArrayHelper.removeFrom(chain, i, 1);
                    }
                    this.__size--;
                    java.util.ConcurrentModificationDetector.structureChanged(this.host);
                    return entry.getValue();
                }
            }
            return null;
        }

        public getEntry(key : any) : java.util.Map.Entry<K, V> {
            return this.findEntryInChain(key, this.getChainOrEmpty(this.hash(key)));
        }

        private findEntryInChain(key : any, chain : Map.Entry<K, V>[]) : java.util.Map.Entry<K, V> {
            for(var index123=0; index123 < chain.length; index123++) {
                var entry = chain[index123];
                {
                    if(this.host._equals(key, entry.getKey())) {
                        return entry;
                    }
                }
            }
            return null;
        }

        public size() : number {
            return this.__size;
        }

        public iterator() : java.util.Iterator<Map.Entry<K, V>> {
            return new InternalHashCodeMap.InternalHashCodeMap$0(this);
        }

        private getChainOrEmpty(hashCode : number) : Map.Entry<K, V>[] {
            var chain : Map.Entry<K, V>[] = this.unsafeCastToArray(this.backingMap.get(hashCode));
            return chain == null?this.newEntryChain():chain;
        }

        private newEntryChain() : Map.Entry<K, V>[] {
            return [];
        }

        private unsafeCastToArray(arr : any) : Map.Entry<K, V>[] {
            return arr;
        }

        /**
         * Returns hash code of the key as calculated by {@link AbstractHashMap#getHashCode(Object)} but
         * also handles null keys as well.
         */
        private hash(key : any) : number {
            return key == null?0:this.host.getHashCode(key);
        }
    }

    export namespace InternalHashCodeMap {

        export class InternalHashCodeMap$0 implements java.util.Iterator<java.util.Map.Entry<any, any>> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            chains : java.util.InternalJsMap.Iterator<any>;

            itemIndex : number;

            chain : Map.Entry<any, any>[];

            lastEntry : Map.Entry<any, any>;

            public hasNext() : boolean {
                if(this.itemIndex < this.chain.length) {
                    return true;
                }
                var current : java.util.InternalJsMap.IteratorEntry<any> = this.chains.next();
                if(!current.done) {
                    this.chain = this.__parent.unsafeCastToArray(current.value[1]);
                    this.itemIndex = 0;
                    return true;
                }
                return false;
            }

            public next() : Map.Entry<any, any> {
                this.lastEntry = this.chain[this.itemIndex++];
                return this.lastEntry;
            }

            public remove() {
                this.__parent.remove(this.lastEntry.getKey());
                if(this.itemIndex !== 0) {
                    this.itemIndex--;
                }
            }

            constructor(__parent: any) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                this.__parent = __parent;
                this.chains = this.__parent.backingMap.entries();
                this.itemIndex = 0;
                this.chain = this.__parent.newEntryChain();
                this.lastEntry = null;
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * For JRE compatibility.
     */
    export class Void {
        /**
         * Not instantiable.
         */
        constructor() {
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Wraps native <code>boolean</code> as an object.
     */
    export class BooleanHelper implements java.lang.Comparable<BooleanHelper>, java.io.Serializable {
        public static FALSE : boolean = false;

        public static TRUE : boolean = true;

        public static TYPE : typeof Boolean; public static TYPE_$LI$() : typeof Boolean { if(BooleanHelper.TYPE == null) BooleanHelper.TYPE = Boolean; return BooleanHelper.TYPE; };

        public static compare(x : boolean, y : boolean) : number {
            return (x === y)?0:(x?1:-1);
        }

        public static hashCode(value : boolean) : number {
            return value?1231:1237;
        }

        public static logicalAnd(a : boolean, b : boolean) : boolean {
            return a && b;
        }

        public static logicalOr(a : boolean, b : boolean) : boolean {
            return a || b;
        }

        public static logicalXor(a : boolean, b : boolean) : boolean {
            return a !== b;
        }

        public static parseBoolean(s : string) : boolean {
            return /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("true", s);
        }

        public static toString(x : boolean) : string {
            return /* valueOf */new String(x).toString();
        }

        public static valueOf$boolean(b : boolean) : boolean {
            return b?BooleanHelper.TRUE:BooleanHelper.FALSE;
        }

        public static valueOf(s? : any) : any {
            if(((typeof s === 'string') || s === null)) {
                return <any>(() => {
                    return BooleanHelper.valueOf(BooleanHelper.parseBoolean(s));
                })();
            } else if(((typeof s === 'boolean') || s === null)) {
                return <any>javaemul.internal.BooleanHelper.valueOf$boolean(s);
            } else throw new Error('invalid overload');
        }

        public booleanValue() : boolean {
            return BooleanHelper.unsafeCast(javaemul.internal.InternalPreconditions.checkNotNull(this));
        }

        private static unsafeCast(value : any) : boolean {
            return <boolean>value;
        }

        public compareTo(b? : any) : any {
            if(((b != null && b instanceof javaemul.internal.BooleanHelper) || b === null)) {
                return <any>(() => {
                    return BooleanHelper.compare(this.booleanValue(), b.booleanValue());
                })();
            } else throw new Error('invalid overload');
        }

        public equals(o : any) : boolean {
            return javaemul.internal.InternalPreconditions.checkNotNull(this) === o;
        }

        public hashCode() : number {
            return BooleanHelper.hashCode(this.booleanValue());
        }

        public toString() : string {
            return BooleanHelper.toString(this.booleanValue());
        }

        constructor() {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * An {@code AutoCloseable} whose close method may throw an {@link IOException}.
     */
    export interface Closeable extends java.lang.AutoCloseable {
        /**
         * Closes the object and release any system resources it holds.
         * 
         * <p>Although only the first call has any effect, it is safe to call close
         * multiple times on the same object. This is more lenient than the
         * overridden {@code AutoCloseable.close()}, which may be called at most
         * once.
         */
        close();
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * An interface used a basis for implementing custom ordering. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Comparator.html">[Sun
     * docs]</a>
     * 
     * @param <T> the type to be compared.
     */
    export interface Comparator<T> {
        compare(o1? : any, o2? : any) : any;

        equals(other : any) : boolean;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A set known to be in ascending order. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/SortedSet.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export interface SortedSet<E> extends java.util.Set<E> {
        comparator() : java.util.Comparator<any>;

        first() : E;

        headSet(toElement? : any, inclusive? : any) : any;

        last() : E;

        subSet(fromElement? : any, fromInclusive? : any, toElement? : any, toInclusive? : any) : any;

        tailSet(fromElement? : any, inclusive? : any) : any;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Simple Helper class to return Date.now.
     */
    export class DateUtil {
        /**
         * Returns the numeric value corresponding to the current time -
         * the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
         */
        public static now() : number {
            // IE8 does not have Date.now
            // when removing IE8 support we change this to Date.now()
            if (Date.now) {
            // Date.now vs Date.getTime() performance comparison:
            // http://jsperf.com/date-now-vs-new-date/8
            return Date.now();
            }
            return (new Date()).getTime();
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html">
     * the official Java API doc</a> for details.
     * 
     * @param <T> type of the wrapped reference
     */
    export class Optional<T> {
        public static empty<T>() : Optional<T> {
            return <Optional<T>>Optional.EMPTY_$LI$();
        }

        public static of<T>(value : T) : Optional<T> {
            return new Optional<any>(value);
        }

        public static ofNullable<T>(value : T) : Optional<T> {
            return value == null?Optional.empty<any>():Optional.of<any>(value);
        }

        private static EMPTY : Optional<any>; public static EMPTY_$LI$() : Optional<any> { if(Optional.EMPTY == null) Optional.EMPTY = new Optional<any>(); return Optional.EMPTY; };

        private ref : T;

        public constructor(ref? : any) {
            if(((ref != null) || ref === null)) {
                (() => {
                    this.ref = javaemul.internal.InternalPreconditions.checkCriticalNotNull(ref);
                })();
            } else if(ref === undefined) {
                (() => {
                    this.ref = null;
                })();
            } else throw new Error('invalid overload');
        }

        public isPresent() : boolean {
            return this.ref != null;
        }

        public get() : T {
            javaemul.internal.InternalPreconditions.checkCriticalElement(this.isPresent());
            return this.ref;
        }

        public ifPresent(consumer : (p1: any) => void) {
            if(this.isPresent()) {
                consumer(this.ref);
            }
        }

        public filter(predicate : (p1: any) => boolean) : Optional<T> {
            javaemul.internal.InternalPreconditions.checkCriticalNotNull(predicate);
            if(!this.isPresent() || predicate(this.ref)) {
                return this;
            }
            return Optional.empty<any>();
        }

        public map<U>(mapper : (p1: any) => any) : Optional<U> {
            javaemul.internal.InternalPreconditions.checkCriticalNotNull(mapper);
            if(this.isPresent()) {
                return Optional.ofNullable<any>(mapper(this.ref));
            }
            return Optional.empty<any>();
        }

        public flatMap<U>(mapper : (p1: any) => Optional<U>) : Optional<U> {
            javaemul.internal.InternalPreconditions.checkCriticalNotNull(mapper);
            if(this.isPresent()) {
                return javaemul.internal.InternalPreconditions.checkCriticalNotNull(mapper(this.ref));
            }
            return Optional.empty<any>();
        }

        public orElse(other : T) : T {
            return this.isPresent()?this.ref:other;
        }

        public orElseGet(other : () => any) : T {
            return this.isPresent()?this.ref:other();
        }

        public orElseThrow<X extends Error>(exceptionSupplier : () => any) : T {
            if(this.isPresent()) {
                return this.ref;
            }
            throw exceptionSupplier();
        }

        public equals(obj : any) : boolean {
            if(obj === this) {
                return true;
            }
            if(!(obj != null && obj instanceof java.util.Optional)) {
                return false;
            }
            var other : Optional<any> = <Optional<any>>obj;
            return java.util.Objects.equals(this.ref, other.ref);
        }

        public hashCode() : number {
            return java.util.Objects.hashCode(this.ref);
        }

        public toString() : string {
            return this.isPresent()?"Optional.of(" + /* valueOf */new String(this.ref).toString() + ")":"Optional.empty()";
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Wraps a primitive <code>int</code> as an object.
     */
    export class IntegerHelper extends javaemul.internal.NumberHelper implements java.lang.Comparable<IntegerHelper> {
        public static MAX_VALUE : number = 2147483647;

        public static MIN_VALUE : number = -2147483648;

        public static SIZE : number = 32;

        public static bitCount(x : number) : number {
            x -= ((x >> 1) & 1431655765);
            x = (((x >> 2) & 858993459) + (x & 858993459));
            x = (((x >> 4) + x) & 252645135);
            x += (x >> 8);
            x += (x >> 16);
            return x & 63;
        }

        public static compare(x : number, y : number) : number {
            if(x < y) {
                return -1;
            } else if(x > y) {
                return 1;
            } else {
                return 0;
            }
        }

        public static decode(s : string) : IntegerHelper {
            return IntegerHelper.valueOf(NumberHelper.__decodeAndValidateInt(s, IntegerHelper.MIN_VALUE, IntegerHelper.MAX_VALUE));
        }

        /**
         * @skip
         * 
         * Here for shared implementation with Arrays.hashCode
         */
        public static hashCode(i : number) : number {
            return i;
        }

        public static highestOneBit(i : number) : number {
            if(i < 0) {
                return IntegerHelper.MIN_VALUE;
            } else if(i === 0) {
                return 0;
            } else {
                var rtn : number;
                for(rtn = 1073741824; (rtn & i) === 0; rtn >>= 1) {
                }
                return rtn;
            }
        }

        public static lowestOneBit(i : number) : number {
            return i & -i;
        }

        public static numberOfLeadingZeros(i : number) : number {
            if(i < 0) {
                return 0;
            } else if(i === 0) {
                return IntegerHelper.SIZE;
            } else {
                var y : number;
                var m : number;
                var n : number;
                y = -(i >> 16);
                m = (y >> 16) & 16;
                n = 16 - m;
                i = i >> m;
                y = i - 256;
                m = (y >> 16) & 8;
                n += m;
                i <<= m;
                y = i - 4096;
                m = (y >> 16) & 4;
                n += m;
                i <<= m;
                y = i - 16384;
                m = (y >> 16) & 2;
                n += m;
                i <<= m;
                y = i >> 14;
                m = y & ~(y >> 1);
                return n + 2 - m;
            }
        }

        public static numberOfTrailingZeros(i : number) : number {
            if(i === 0) {
                return IntegerHelper.SIZE;
            } else {
                var rtn : number = 0;
                for(var r : number = 1; (r & i) === 0; r <<= 1) {
                    rtn++;
                }
                return rtn;
            }
        }

        public static parseInt(s : string, radix : number = 10) : number {
            return NumberHelper.__parseAndValidateInt(s, radix, IntegerHelper.MIN_VALUE, IntegerHelper.MAX_VALUE);
        }

        public static reverse(i : number) : number {
            var nibbles : number[] = IntegerHelper.ReverseNibbles.reverseNibbles_$LI$();
            return (nibbles[i >>> 28]) | (nibbles[(i >> 24) & 15] << 4) | (nibbles[(i >> 20) & 15] << 8) | (nibbles[(i >> 16) & 15] << 12) | (nibbles[(i >> 12) & 15] << 16) | (nibbles[(i >> 8) & 15] << 20) | (nibbles[(i >> 4) & 15] << 24) | (nibbles[i & 15] << 28);
        }

        public static reverseBytes(i : number) : number {
            return ((i & 255) << 24) | ((i & 65280) << 8) | ((i & 16711680) >> 8) | ((i & -16777216) >>> 24);
        }

        public static rotateLeft(i : number, distance : number) : number {
            while((distance-- > 0)){
                i = i << 1 | ((i < 0)?1:0);
            };
            return i;
        }

        public static rotateRight(i : number, distance : number) : number {
            var ui : number = i & IntegerHelper.MAX_VALUE;
            var carry : number = (i < 0)?1073741824:0;
            while((distance-- > 0)){
                var nextcarry : number = ui & 1;
                ui = carry | (ui >> 1);
                carry = (nextcarry === 0)?0:1073741824;
            };
            if(carry !== 0) {
                ui = ui | IntegerHelper.MIN_VALUE;
            }
            return ui;
        }

        public static signum(i : number) : number {
            if(i === 0) {
                return 0;
            } else if(i < 0) {
                return -1;
            } else {
                return 1;
            }
        }

        public static toBinaryString(value : number) : string {
            return IntegerHelper.toUnsignedRadixString(value, 2);
        }

        public static toHexString(value : number) : string {
            return IntegerHelper.toUnsignedRadixString(value, 16);
        }

        public static toOctalString(value : number) : string {
            return IntegerHelper.toUnsignedRadixString(value, 8);
        }

        public static toString$int(value : number) : string {
            return /* valueOf */new String(value).toString();
        }

        public static toString(value? : any, radix? : any) : any {
            if(((typeof value === 'number') || value === null) && ((typeof radix === 'number') || radix === null)) {
                return <any>(() => {
                    if(radix === 10 || radix < javaemul.internal.CharacterHelper.MIN_RADIX || radix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                        return /* valueOf */new String(value).toString();
                    }
                    return IntegerHelper.toRadixString(value, radix);
                })();
            } else if(((typeof value === 'number') || value === null) && radix === undefined) {
                return <any>javaemul.internal.IntegerHelper.toString$int(value);
            } else throw new Error('invalid overload');
        }

        public static valueOf$int(i : number) : IntegerHelper {
            if(i > -129 && i < 128) {
                var rebase : number = i + 128;
                var result : IntegerHelper = IntegerHelper.BoxedValues.boxedValues_$LI$()[rebase];
                if(result == null) {
                    result = IntegerHelper.BoxedValues.boxedValues_$LI$()[rebase] = new IntegerHelper(i);
                }
                return result;
            }
            return new IntegerHelper(i);
        }

        public static valueOf$java_lang_String(s : string) : IntegerHelper {
            return IntegerHelper.valueOf(s, 10);
        }

        public static valueOf(s? : any, radix? : any) : any {
            if(((typeof s === 'string') || s === null) && ((typeof radix === 'number') || radix === null)) {
                return <any>(() => {
                    return IntegerHelper.valueOf(IntegerHelper.parseInt(s, radix));
                })();
            } else if(((typeof s === 'string') || s === null) && radix === undefined) {
                return <any>javaemul.internal.IntegerHelper.valueOf$java_lang_String(s);
            } else if(((typeof s === 'number') || s === null) && radix === undefined) {
                return <any>javaemul.internal.IntegerHelper.valueOf$int(s);
            } else throw new Error('invalid overload');
        }

        static toRadixString(value : number, radix : number) : string {
            return value.toString(radix);
        }

        static toUnsignedRadixString(value : number, radix : number) : string {
            // ">>> 0" converts the value to unsigned number.
            return (value >>> 0).toString(radix);
        }

        private value : number;

        public constructor(s? : any) {
            if(((typeof s === 'string') || s === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = IntegerHelper.parseInt(s);
                })();
            } else if(((typeof s === 'number') || s === null)) {
                var value : any = s;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = value;
                })();
            } else throw new Error('invalid overload');
        }

        public byteValue() : number {
            return (<number>this.value|0);
        }

        public compareTo(b? : any) : any {
            if(((b != null && b instanceof javaemul.internal.IntegerHelper) || b === null)) {
                return <any>(() => {
                    return IntegerHelper.compare(this.value, b.value);
                })();
            } else throw new Error('invalid overload');
        }

        public doubleValue() : number {
            return this.value;
        }

        public equals(o : any) : boolean {
            return (o != null && o instanceof javaemul.internal.IntegerHelper) && ((<IntegerHelper>o).value === this.value);
        }

        public floatValue() : number {
            return this.value;
        }

        public hashCode() : number {
            return IntegerHelper.hashCode(this.value);
        }

        public intValue() : number {
            return this.value;
        }

        public longValue() : number {
            return this.value;
        }

        public shortValue() : number {
            return (<number>this.value|0);
        }

        public toString() : string {
            return IntegerHelper.toString(this.value);
        }
    }

    export namespace IntegerHelper {

        /**
         * Use nested class to avoid clinit on outer.
         */
        export class BoxedValues {
            static boxedValues : javaemul.internal.IntegerHelper[]; public static boxedValues_$LI$() : javaemul.internal.IntegerHelper[] { if(BoxedValues.boxedValues == null) BoxedValues.boxedValues = new Array(256); return BoxedValues.boxedValues; };
        }

        /**
         * Use nested class to avoid clinit on outer.
         */
        export class ReverseNibbles {
            /**
             * A fast-lookup of the reversed bits of all the nibbles 0-15. Used to
             * implement {@link #reverse(int)}.
             */
            static reverseNibbles : number[]; public static reverseNibbles_$LI$() : number[] { if(ReverseNibbles.reverseNibbles == null) ReverseNibbles.reverseNibbles = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]; return ReverseNibbles.reverseNibbles; };
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Uses Java 1.5 ListIterator for documentation. The methods hasNext, next, and
     * remove are repeated to allow the specialized ListIterator documentation to be
     * associated with them. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/ListIterator.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export interface ListIterator<E> extends java.util.Iterator<E> {
        add(o : E);

        hasNext() : boolean;

        hasPrevious() : boolean;

        next() : E;

        nextIndex() : number;

        previous() : E;

        previousIndex() : number;

        remove();

        set(o : E);
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/OptionalDouble.html">
     * the official Java API doc</a> for details.
     */
    export class OptionalDouble {
        public static empty() : OptionalDouble {
            return OptionalDouble.EMPTY_$LI$();
        }

        public static of(value : number) : OptionalDouble {
            return new OptionalDouble(value);
        }

        private static EMPTY : OptionalDouble; public static EMPTY_$LI$() : OptionalDouble { if(OptionalDouble.EMPTY == null) OptionalDouble.EMPTY = new OptionalDouble(); return OptionalDouble.EMPTY; };

        private ref : number;

        private present : boolean;

        public constructor(value? : any) {
            if(((typeof value === 'number') || value === null)) {
                this.ref = 0;
                this.present = false;
                (() => {
                    this.ref = value;
                    this.present = true;
                })();
            } else if(value === undefined) {
                this.ref = 0;
                this.present = false;
                (() => {
                    this.ref = 0;
                    this.present = false;
                })();
            } else throw new Error('invalid overload');
        }

        public isPresent() : boolean {
            return this.present;
        }

        public getAsDouble() : number {
            javaemul.internal.InternalPreconditions.checkCriticalElement(this.present);
            return this.ref;
        }

        public ifPresent(consumer : (number) => void) {
            if(this.present) {
                consumer(this.ref);
            }
        }

        public orElse(other : number) : number {
            return this.present?this.ref:other;
        }

        public orElseGet(other : () => number) : number {
            return this.present?this.ref:other();
        }

        public orElseThrow<X extends Error>(exceptionSupplier : () => X) : number {
            if(this.present) {
                return this.ref;
            }
            throw exceptionSupplier();
        }

        public equals(obj : any) : boolean {
            if(obj === this) {
                return true;
            }
            if(!(obj != null && obj instanceof java.util.OptionalDouble)) {
                return false;
            }
            var other : OptionalDouble = <OptionalDouble>obj;
            return this.present === other.present && javaemul.internal.DoubleHelper.compare(this.ref, other.ref) === 0;
        }

        public hashCode() : number {
            return this.present?javaemul.internal.DoubleHelper.hashCode(this.ref):0;
        }

        public toString() : string {
            return this.present?"OptionalDouble.of(" + /* toString */(''+this.ref) + ")":"OptionalDouble.empty()";
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * Wraps an existing {@link OutputStream} and performs some transformation on
     * the output data while it is being written. Transformations can be anything
     * from a simple byte-wise filtering output data to an on-the-fly compression or
     * decompression of the underlying stream. Output streams that wrap another
     * output stream and provide some additional functionality on top of it usually
     * inherit from this class.
     * 
     * @see FilterOutputStream
     */
    export class FilterOutputStream extends java.io.OutputStream {
        /**
         * The target output stream for this filter stream.
         */
        out : java.io.OutputStream;

        /**
         * Constructs a new {@code FilterOutputStream} with {@code out} as its
         * target stream.
         * 
         * @param out
         * the target stream that this stream writes to.
         */
        public constructor(out : java.io.OutputStream) {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"] });
            this.out = out;
        }

        /**
         * Closes this stream. This implementation closes the target stream.
         * 
         * @throws IOException
         * if an error occurs attempting to close this stream.
         */
        public close() {
            var thrown : Error = null;
            try {
                this.flush();
            } catch(e) {
                thrown = e;
            };
            try {
                this.out.close();
            } catch(e) {
                if(thrown == null) {
                    thrown = e;
                }
            };
            if(thrown != null) {
                throw new java.io.IOException(thrown);
            }
        }

        /**
         * Ensures that all pending data is sent out to the target stream. This
         * implementation flushes the target stream.
         * 
         * @throws IOException
         * if an error occurs attempting to flush this stream.
         */
        public flush() {
            this.out.flush();
        }

        /**
         * Writes {@code count} bytes from the byte array {@code buffer} starting at
         * {@code offset} to the target stream.
         * 
         * @param buffer
         * the buffer to write.
         * @param offset
         * the index of the first byte in {@code buffer} to write.
         * @param length
         * the number of bytes in {@code buffer} to write.
         * @throws IndexOutOfBoundsException
         * if {@code offset < 0} or {@code count < 0}, or if
         * {@code offset + count} is bigger than the length of
         * {@code buffer}.
         * @throws IOException
         * if an I/O error occurs while writing to this stream.
         */
        public write(buffer? : any, offset? : any, length? : any) : any {
            if(((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof offset === 'number') || offset === null) && ((typeof length === 'number') || length === null)) {
                return <any>(() => {
                    java.io.IOUtils.checkOffsetAndCount(buffer, offset, length);
                    for(var i : number = 0; i < length; i++) {
                        this.write(buffer[offset + i]);
                    }
                })();
            } else if(((buffer != null && buffer instanceof Array) || buffer === null) && offset === undefined && length === undefined) {
                return <any>this.write$byte_A(buffer);
            } else if(((typeof buffer === 'number') || buffer === null) && offset === undefined && length === undefined) {
                return <any>this.write$int(buffer);
            } else throw new Error('invalid overload');
        }

        /**
         * Writes one byte to the target stream. Only the low order byte of the
         * integer {@code oneByte} is written.
         * 
         * @param oneByte
         * the byte to be written.
         * @throws IOException
         * if an I/O error occurs while writing to this stream.
         */
        public write$int(oneByte : number) {
            this.out.write(oneByte);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * @skip
     */
    export class PrintStream extends java.io.FilterOutputStream {
        public constructor(out : java.io.OutputStream) {
            super(out);
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"] });
        }

        public print$boolean(x : boolean) {
        }

        public print$char(x : string) {
        }

        public print(x? : any) : any {
            if(((x != null && x instanceof Array) || x === null)) {
                return <any>(() => {
                })();
            } else if(((typeof x === 'string') || x === null)) {
                return <any>this.print$java_lang_String(x);
            } else if(((typeof x === 'boolean') || x === null)) {
                return <any>this.print$boolean(x);
            } else if(((typeof x === 'string') || x === null)) {
                return <any>this.print$char(x);
            } else if(((typeof x === 'number') || x === null)) {
                return <any>this.print$int(x);
            } else if(((typeof x === 'number') || x === null)) {
                return <any>this.print$long(x);
            } else if(((typeof x === 'number') || x === null)) {
                return <any>this.print$float(x);
            } else if(((typeof x === 'number') || x === null)) {
                return <any>this.print$double(x);
            } else if(((x != null) || x === null)) {
                return <any>this.print$java_lang_Object(x);
            } else throw new Error('invalid overload');
        }

        public print$double(x : number) {
        }

        public print$float(x : number) {
        }

        public print$int(x : number) {
        }

        public print$long(x : number) {
        }

        public print$java_lang_Object(x : any) {
        }

        public print$java_lang_String(s : string) {
        }

        public println$() {
        }

        public println$boolean(x : boolean) {
        }

        public println$char(x : string) {
        }

        public println(x? : any) : any {
            if(((x != null && x instanceof Array) || x === null)) {
                return <any>(() => {
                })();
            } else if(((typeof x === 'string') || x === null)) {
                return <any>this.println$java_lang_String(x);
            } else if(((typeof x === 'boolean') || x === null)) {
                return <any>this.println$boolean(x);
            } else if(((typeof x === 'string') || x === null)) {
                return <any>this.println$char(x);
            } else if(((typeof x === 'number') || x === null)) {
                return <any>this.println$int(x);
            } else if(((typeof x === 'number') || x === null)) {
                return <any>this.println$long(x);
            } else if(((typeof x === 'number') || x === null)) {
                return <any>this.println$float(x);
            } else if(((typeof x === 'number') || x === null)) {
                return <any>this.println$double(x);
            } else if(((x != null) || x === null)) {
                return <any>this.println$java_lang_Object(x);
            } else if(x === undefined) {
                return <any>this.println$();
            } else throw new Error('invalid overload');
        }

        public println$double(x : number) {
        }

        public println$float(x : number) {
        }

        public println$int(x : number) {
        }

        public println$long(x : number) {
        }

        public println$java_lang_Object(x : any) {
        }

        public println$java_lang_String(s : string) {
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * General-purpose low-level utility methods. GWT only supports a limited subset
     * of these methods due to browser limitations. Only the documented methods are
     * available.
     */
    export class System {
        /**
         * Does nothing in web mode. To get output in web mode, subclass PrintStream
         * and call {@link #setErr(PrintStream)}.
         */
        public static err : java.io.PrintStream; public static err_$LI$() : java.io.PrintStream { if(System.err == null) System.err = new java.io.PrintStream(null); return System.err; };

        /**
         * Does nothing in web mode. To get output in web mode, subclass
         * {@link PrintStream} and call {@link #setOut(PrintStream)}.
         */
        public static out : java.io.PrintStream; public static out_$LI$() : java.io.PrintStream { if(System.out == null) System.out = new java.io.PrintStream(null); return System.out; };

        public static arraycopy(src : any, srcOfs : number, dest : any, destOfs : number, len : number) {
            javaemul.internal.InternalPreconditions.checkNotNull(src, "src");
            javaemul.internal.InternalPreconditions.checkNotNull(dest, "dest");
            var srcType : any = src.getClass();
            var destType : any = dest.getClass();
            javaemul.internal.InternalPreconditions.checkArrayType(srcType.isArray(), "srcType is not an array");
            javaemul.internal.InternalPreconditions.checkArrayType(destType.isArray(), "destType is not an array");
            var srcComp : any = srcType.getComponentType();
            var destComp : any = destType.getComponentType();
            javaemul.internal.InternalPreconditions.checkArrayType(System.arrayTypeMatch(srcComp, destComp), "Array types don\'t match");
            var srclen : number = javaemul.internal.ArrayHelper.getLength(src);
            var destlen : number = javaemul.internal.ArrayHelper.getLength(dest);
            if(srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
                throw new java.lang.IndexOutOfBoundsException();
            }
            if((!srcComp.isPrimitive() || srcComp.isArray()) && !srcType.equals(destType)) {
                var srcArray : any[] = <any[]>src;
                var destArray : any[] = <any[]>dest;
                if(src === dest && srcOfs < destOfs) {
                    srcOfs += len;
                    for(var destEnd : number = destOfs + len; destEnd-- > destOfs; ) {
                        destArray[destEnd] = srcArray[--srcOfs];
                    }
                } else {
                    for(var destEnd : number = destOfs + len; destOfs < destEnd; ) {
                        destArray[destOfs++] = srcArray[srcOfs++];
                    }
                }
            } else if(len > 0) {
                javaemul.internal.ArrayHelper.copy(src, srcOfs, dest, destOfs, len);
            }
        }

        public static currentTimeMillis() : number {
            return Math.round(<number>javaemul.internal.DateUtil.now());
        }

        /**
         * Has no effect; just here for source compatibility.
         * 
         * @skip
         */
        public static gc() {
        }

        /**
         * The compiler replaces getProperty by the actual value of the property.
         */
        public static getProperty$java_lang_String(key : string) : string {
            return null;
        }

        /**
         * The compiler replaces getProperty by the actual value of the property.
         */
        public static getProperty(key? : any, def? : any) : any {
            if(((typeof key === 'string') || key === null) && ((typeof def === 'string') || def === null)) {
                return <any>(() => {
                    return def;
                })();
            } else if(((typeof key === 'string') || key === null) && def === undefined) {
                return <any>java.lang.System.getProperty$java_lang_String(key);
            } else throw new Error('invalid overload');
        }

        public static identityHashCode(o : any) : number {
            return javaemul.internal.HashCodes.getIdentityHashCode(o);
        }

        public static setErr(err : java.io.PrintStream) {
            java.lang.System.err = err;
        }

        public static setOut(out : java.io.PrintStream) {
            java.lang.System.out = out;
        }

        private static arrayTypeMatch(srcComp : any, destComp : any) : boolean {
            if(srcComp.isPrimitive()) {
                return srcComp.equals(destComp);
            } else {
                return !destComp.isPrimitive();
            }
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util.logging {
    /**
     * An emulation of the java.util.logging.Logger class. See
     * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/Logger.html">
     * The Java API doc for details</a>
     */
    export class Logger {
        static __static_initialized : boolean = false;
        static __static_initialize() { if(!Logger.__static_initialized) { Logger.__static_initialized = true; Logger.__static_initializer_0(); } }

        public static GLOBAL_LOGGER_NAME : string = "global";

        private static LOGGING_ENABLED : string; public static LOGGING_ENABLED_$LI$() : string { Logger.__static_initialize(); if(Logger.LOGGING_ENABLED == null) Logger.LOGGING_ENABLED = java.lang.System.getProperty("gwt.logging.enabled", "TRUE"); return Logger.LOGGING_ENABLED; };

        private static LOGGING_WARNING : boolean; public static LOGGING_WARNING_$LI$() : boolean { Logger.__static_initialize(); if(Logger.LOGGING_WARNING == null) Logger.LOGGING_WARNING = (Logger.LOGGING_ENABLED_$LI$() === "WARNING"); return Logger.LOGGING_WARNING; };

        private static LOGGING_SEVERE : boolean; public static LOGGING_SEVERE_$LI$() : boolean { Logger.__static_initialize(); if(Logger.LOGGING_SEVERE == null) Logger.LOGGING_SEVERE = (Logger.LOGGING_ENABLED_$LI$() === "SEVERE"); return Logger.LOGGING_SEVERE; };

        private static LOGGING_FALSE : boolean; public static LOGGING_FALSE_$LI$() : boolean { Logger.__static_initialize(); if(Logger.LOGGING_FALSE == null) Logger.LOGGING_FALSE = (Logger.LOGGING_ENABLED_$LI$() === "FALSE"); return Logger.LOGGING_FALSE; };

        static __static_initializer_0() {
            Logger.assertLoggingValues();
        }

        public static getGlobal() : Logger {
            return Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
        }

        public static getLogger(name : string) : Logger {
            if(Logger.LOGGING_FALSE_$LI$()) {
                return new Logger(name, null);
            }
            return java.util.logging.LogManager.getLogManager().ensureLogger(name);
        }

        static assertLoggingValues() {
            if((Logger.LOGGING_ENABLED_$LI$() === "FALSE") || (Logger.LOGGING_ENABLED_$LI$() === "TRUE") || (Logger.LOGGING_ENABLED_$LI$() === "SEVERE") || (Logger.LOGGING_ENABLED_$LI$() === "WARNING")) {
                return;
            }
            throw new Error("Undefined value for gwt.logging.enabled: \'" + Logger.LOGGING_ENABLED_$LI$() + "\'. Allowed values are TRUE, FALSE, SEVERE, WARNING");
        }

        private handlers : java.util.List<java.util.logging.Handler>;

        private level : java.util.logging.Level = null;

        private name : string;

        private parent : Logger;

        private useParentHandlers : boolean;

        constructor(name : string, resourceName : string) {
            this.useParentHandlers = false;
            if(Logger.LOGGING_FALSE_$LI$()) {
                return;
            }
            this.name = name;
            this.useParentHandlers = true;
            this.handlers = new java.util.ArrayList<java.util.logging.Handler>();
        }

        public addHandler(handler : java.util.logging.Handler) {
            if(Logger.LOGGING_FALSE_$LI$()) {
                return;
            }
            this.handlers.add(handler);
        }

        public config(msg : string) {
            if(Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$() || Logger.LOGGING_WARNING_$LI$()) {
                return;
            }
            this.log(java.util.logging.Level.CONFIG_$LI$(), msg);
        }

        public fine(msg : string) {
            if(Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$() || Logger.LOGGING_WARNING_$LI$()) {
                return;
            }
            this.log(java.util.logging.Level.FINE_$LI$(), msg);
        }

        public finer(msg : string) {
            if(Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$() || Logger.LOGGING_WARNING_$LI$()) {
                return;
            }
            this.log(java.util.logging.Level.FINER_$LI$(), msg);
        }

        public finest(msg : string) {
            if(Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$() || Logger.LOGGING_WARNING_$LI$()) {
                return;
            }
            this.log(java.util.logging.Level.FINEST_$LI$(), msg);
        }

        public info(msg : string) {
            if(Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$() || Logger.LOGGING_WARNING_$LI$()) {
                return;
            }
            this.log(java.util.logging.Level.INFO_$LI$(), msg);
        }

        public warning(msg : string) {
            if(Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$()) {
                return;
            }
            this.log(java.util.logging.Level.WARNING_$LI$(), msg);
        }

        public severe(msg : string) {
            if(Logger.LOGGING_FALSE_$LI$()) {
                return;
            }
            this.log(java.util.logging.Level.SEVERE_$LI$(), msg);
        }

        public getHandlers() : java.util.logging.Handler[] {
            if(Logger.LOGGING_FALSE_$LI$()) {
                return new Array(0);
            }
            return this.handlers.toArray(new Array(this.handlers.size()));
        }

        public getLevel() : java.util.logging.Level {
            return Logger.LOGGING_FALSE_$LI$()?null:this.level;
        }

        public getName() : string {
            return Logger.LOGGING_FALSE_$LI$()?null:this.name;
        }

        public getParent() : Logger {
            return Logger.LOGGING_FALSE_$LI$()?null:this.parent;
        }

        public getUseParentHandlers() : boolean {
            return Logger.LOGGING_FALSE_$LI$()?false:this.useParentHandlers;
        }

        public isLoggable(messageLevel : java.util.logging.Level) : boolean {
            return Logger.LOGGING_FALSE_$LI$()?false:this.getEffectiveLevel().intValue() <= messageLevel.intValue();
        }

        public log$java_util_logging_Level$java_lang_String(level : java.util.logging.Level, msg : string) {
            this.log(level, msg, null);
        }

        public log(level? : any, msg? : any, thrown? : any) : any {
            if(((level != null && level instanceof java.util.logging.Level) || level === null) && ((typeof msg === 'string') || msg === null) && ((thrown != null && thrown instanceof Error) || thrown === null)) {
                return <any>(() => {
                    if(Logger.LOGGING_FALSE_$LI$()) {
                        return;
                    }
                    if(Logger.LOGGING_SEVERE_$LI$()) {
                        if(level.intValue() >= 1000) {
                            this.actuallyLog(level, msg, thrown);
                        }
                    } else if(Logger.LOGGING_WARNING_$LI$()) {
                        if(level.intValue() >= java.util.logging.Level.WARNING_$LI$().intValue()) {
                            this.actuallyLog(level, msg, thrown);
                        }
                    } else {
                        this.actuallyLog(level, msg, thrown);
                    }
                })();
            } else if(((level != null && level instanceof java.util.logging.Level) || level === null) && ((typeof msg === 'string') || msg === null) && thrown === undefined) {
                return <any>this.log$java_util_logging_Level$java_lang_String(level, msg);
            } else if(((level != null && level instanceof java.util.logging.LogRecord) || level === null) && msg === undefined && thrown === undefined) {
                return <any>this.log$java_util_logging_LogRecord(level);
            } else throw new Error('invalid overload');
        }

        public log$java_util_logging_LogRecord(record : java.util.logging.LogRecord) {
            if(Logger.LOGGING_FALSE_$LI$()) {
                return;
            }
            if(Logger.LOGGING_SEVERE_$LI$()) {
                if(record.getLevel().intValue() >= 1000) {
                    this.actuallyLog(record);
                }
            } else if(Logger.LOGGING_WARNING_$LI$()) {
                if(record.getLevel().intValue() >= java.util.logging.Level.WARNING_$LI$().intValue()) {
                    this.actuallyLog(record);
                }
            } else {
                this.actuallyLog(record);
            }
        }

        public removeHandler(handler : java.util.logging.Handler) {
            if(Logger.LOGGING_FALSE_$LI$()) {
                return;
            }
            this.handlers.remove(handler);
        }

        public setLevel(newLevel : java.util.logging.Level) {
            if(Logger.LOGGING_FALSE_$LI$()) {
                return;
            }
            this.level = newLevel;
        }

        public setParent(newParent : Logger) {
            if(Logger.LOGGING_FALSE_$LI$()) {
                return;
            }
            if(newParent != null) {
                this.parent = newParent;
            }
        }

        public setUseParentHandlers(newUseParentHandlers : boolean) {
            if(Logger.LOGGING_FALSE_$LI$()) {
                return;
            }
            this.useParentHandlers = newUseParentHandlers;
        }

        private getEffectiveLevel() : java.util.logging.Level {
            if(this.level != null) {
                return this.level;
            }
            var logger : Logger = this.getParent();
            while((logger != null)){
                var effectiveLevel : java.util.logging.Level = logger.getLevel();
                if(effectiveLevel != null) {
                    return effectiveLevel;
                }
                logger = logger.getParent();
            };
            return java.util.logging.Level.INFO_$LI$();
        }

        public actuallyLog(level? : any, msg? : any, thrown? : any) : any {
            if(((level != null && level instanceof java.util.logging.Level) || level === null) && ((typeof msg === 'string') || msg === null) && ((thrown != null && thrown instanceof Error) || thrown === null)) {
                return <any>(() => {
                    if(this.isLoggable(level)) {
                        var record : java.util.logging.LogRecord = new java.util.logging.LogRecord(level, msg);
                        record.setThrown(thrown);
                        record.setLoggerName(this.getName());
                        this.actuallyLog(record);
                    }
                })();
            } else if(((level != null && level instanceof java.util.logging.LogRecord) || level === null) && msg === undefined && thrown === undefined) {
                return <any>this.actuallyLog$java_util_logging_LogRecord(level);
            } else throw new Error('invalid overload');
        }

        private actuallyLog$java_util_logging_LogRecord(record : java.util.logging.LogRecord) {
            if(this.isLoggable(record.getLevel())) {
                {
                    var array125 = this.getHandlers();
                    for(var index124=0; index124 < array125.length; index124++) {
                        var handler = array125[index124];
                        {
                            handler.publish(record);
                        }
                    }
                }
                var logger : Logger = this.getUseParentHandlers()?this.getParent():null;
                while((logger != null)){
                    {
                        var array127 = logger.getHandlers();
                        for(var index126=0; index126 < array127.length; index126++) {
                            var handler = array127[index126];
                            {
                                handler.publish(record);
                            }
                        }
                    }
                    logger = logger.getUseParentHandlers()?logger.getParent():null;
                };
            }
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * A utility class that provides utility functions to do precondition checks inside GWT-SDK.
     */
    export class InternalPreconditions {
        private static CHECKED_MODE : boolean; public static CHECKED_MODE_$LI$() : boolean { if(InternalPreconditions.CHECKED_MODE == null) InternalPreconditions.CHECKED_MODE = (java.lang.System.getProperty("jre.checkedMode", "ENABLED") === "ENABLED"); return InternalPreconditions.CHECKED_MODE; };

        private static TYPE_CHECK : boolean; public static TYPE_CHECK_$LI$() : boolean { if(InternalPreconditions.TYPE_CHECK == null) InternalPreconditions.TYPE_CHECK = (java.lang.System.getProperty("jre.checks.type", "ENABLED") === "ENABLED"); return InternalPreconditions.TYPE_CHECK; };

        private static API_CHECK : boolean; public static API_CHECK_$LI$() : boolean { if(InternalPreconditions.API_CHECK == null) InternalPreconditions.API_CHECK = (java.lang.System.getProperty("jre.checks.api", "ENABLED") === "ENABLED"); return InternalPreconditions.API_CHECK; };

        private static BOUND_CHECK : boolean; public static BOUND_CHECK_$LI$() : boolean { if(InternalPreconditions.BOUND_CHECK == null) InternalPreconditions.BOUND_CHECK = (java.lang.System.getProperty("jre.checks.bounds", "ENABLED") === "ENABLED"); return InternalPreconditions.BOUND_CHECK; };

        public static checkType(expression : boolean) {
            if(InternalPreconditions.TYPE_CHECK_$LI$()) {
                InternalPreconditions.checkCriticalType(expression);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCriticalType(expression);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
        }

        public static checkCriticalType(expression : boolean) {
            if(!expression) {
                throw new java.lang.ClassCastException();
            }
        }

        /**
         * Ensures the truth of an expression that verifies array type.
         */
        public static checkArrayType$boolean(expression : boolean) {
            if(InternalPreconditions.TYPE_CHECK_$LI$()) {
                InternalPreconditions.checkCriticalArrayType(expression);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCriticalArrayType(expression);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
        }

        public static checkCriticalArrayType$boolean(expression : boolean) {
            if(!expression) {
                throw new java.lang.ArrayStoreException();
            }
        }

        /**
         * Ensures the truth of an expression that verifies array type.
         */
        public static checkArrayType(expression? : any, errorMessage? : any) : any {
            if(((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                return <any>(() => {
                    if(InternalPreconditions.TYPE_CHECK_$LI$()) {
                        InternalPreconditions.checkCriticalArrayType(expression, errorMessage);
                    } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                        try {
                            InternalPreconditions.checkCriticalArrayType(expression, errorMessage);
                        } catch(e) {
                            throw new java.lang.AssertionError(e);
                        };
                    }
                })();
            } else if(((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkArrayType$boolean(expression);
            } else throw new Error('invalid overload');
        }

        public static checkCriticalArrayType(expression? : any, errorMessage? : any) : any {
            if(((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                return <any>(() => {
                    if(!expression) {
                        throw new java.lang.ArrayStoreException(/* valueOf */new String(errorMessage).toString());
                    }
                })();
            } else if(((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkCriticalArrayType$boolean(expression);
            } else throw new Error('invalid overload');
        }

        /**
         * Ensures the truth of an expression involving existence of an element.
         */
        public static checkElement$boolean(expression : boolean) {
            if(InternalPreconditions.API_CHECK_$LI$()) {
                InternalPreconditions.checkCriticalElement(expression);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCriticalElement(expression);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
        }

        /**
         * Ensures the truth of an expression involving existence of an element.
         * <p>
         * For cases where failing fast is pretty important and not failing early could cause bugs that
         * are much harder to debug.
         */
        public static checkCriticalElement$boolean(expression : boolean) {
            if(!expression) {
                throw new java.util.NoSuchElementException();
            }
        }

        /**
         * Ensures the truth of an expression involving existence of an element.
         */
        public static checkElement(expression? : any, errorMessage? : any) : any {
            if(((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                return <any>(() => {
                    if(InternalPreconditions.API_CHECK_$LI$()) {
                        InternalPreconditions.checkCriticalElement(expression, errorMessage);
                    } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                        try {
                            InternalPreconditions.checkCriticalElement(expression, errorMessage);
                        } catch(e) {
                            throw new java.lang.AssertionError(e);
                        };
                    }
                })();
            } else if(((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkElement$boolean(expression);
            } else throw new Error('invalid overload');
        }

        /**
         * Ensures the truth of an expression involving existence of an element.
         * <p>
         * For cases where failing fast is pretty important and not failing early could cause bugs that
         * are much harder to debug.
         */
        public static checkCriticalElement(expression? : any, errorMessage? : any) : any {
            if(((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                return <any>(() => {
                    if(!expression) {
                        throw new java.util.NoSuchElementException(/* valueOf */new String(errorMessage).toString());
                    }
                })();
            } else if(((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkCriticalElement$boolean(expression);
            } else throw new Error('invalid overload');
        }

        /**
         * Ensures the truth of an expression involving one or more parameters to the calling method.
         */
        public static checkArgument$boolean(expression : boolean) {
            if(InternalPreconditions.API_CHECK_$LI$()) {
                InternalPreconditions.checkCriticalArgument(expression);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCriticalArgument(expression);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
        }

        /**
         * Ensures the truth of an expression involving one or more parameters to the calling method.
         * <p>
         * For cases where failing fast is pretty important and not failing early could cause bugs that
         * are much harder to debug.
         */
        public static checkCriticalArgument$boolean(expression : boolean) {
            if(!expression) {
                throw new java.lang.IllegalArgumentException();
            }
        }

        /**
         * Ensures the truth of an expression involving one or more parameters to the calling method.
         */
        public static checkArgument$boolean$java_lang_Object(expression : boolean, errorMessage : any) {
            if(InternalPreconditions.API_CHECK_$LI$()) {
                InternalPreconditions.checkCriticalArgument(expression, errorMessage);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCriticalArgument(expression, errorMessage);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
        }

        /**
         * Ensures the truth of an expression involving one or more parameters to the calling method.
         * <p>
         * For cases where failing fast is pretty important and not failing early could cause bugs that
         * are much harder to debug.
         */
        public static checkCriticalArgument$boolean$java_lang_Object(expression : boolean, errorMessage : any) {
            if(!expression) {
                throw new java.lang.IllegalArgumentException(/* valueOf */new String(errorMessage).toString());
            }
        }

        /**
         * Ensures the truth of an expression involving one or more parameters to the calling method.
         */
        public static checkArgument(expression? : any, errorMessageTemplate? : any, ...errorMessageArgs : any[]) : any {
            if(((typeof expression === 'boolean') || expression === null) && ((typeof errorMessageTemplate === 'string') || errorMessageTemplate === null) && ((errorMessageArgs != null && errorMessageArgs instanceof Array) || errorMessageArgs === null)) {
                return <any>(() => {
                    if(InternalPreconditions.API_CHECK_$LI$()) {
                        InternalPreconditions.checkCriticalArgument.apply(this, [expression, errorMessageTemplate].concat(<any[]>errorMessageArgs));
                    } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                        try {
                            InternalPreconditions.checkCriticalArgument.apply(this, [expression, errorMessageTemplate].concat(<any[]>errorMessageArgs));
                        } catch(e) {
                            throw new java.lang.AssertionError(e);
                        };
                    }
                })();
            } else if(((typeof expression === 'boolean') || expression === null) && ((errorMessageTemplate != null) || errorMessageTemplate === null) && errorMessageArgs === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkArgument$boolean$java_lang_Object(expression, errorMessageTemplate);
            } else if(((typeof expression === 'boolean') || expression === null) && errorMessageTemplate === undefined && errorMessageArgs === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkArgument$boolean(expression);
            } else throw new Error('invalid overload');
        }

        /**
         * Ensures the truth of an expression involving one or more parameters to the calling method.
         * <p>
         * For cases where failing fast is pretty important and not failing early could cause bugs that
         * are much harder to debug.
         */
        public static checkCriticalArgument(expression? : any, errorMessageTemplate? : any, ...errorMessageArgs : any[]) : any {
            if(((typeof expression === 'boolean') || expression === null) && ((typeof errorMessageTemplate === 'string') || errorMessageTemplate === null) && ((errorMessageArgs != null && errorMessageArgs instanceof Array) || errorMessageArgs === null)) {
                return <any>(() => {
                    if(!expression) {
                        throw new java.lang.IllegalArgumentException(InternalPreconditions.format.apply(this, [errorMessageTemplate].concat(<any[]>errorMessageArgs)));
                    }
                })();
            } else if(((typeof expression === 'boolean') || expression === null) && ((errorMessageTemplate != null) || errorMessageTemplate === null) && errorMessageArgs === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkCriticalArgument$boolean$java_lang_Object(expression, errorMessageTemplate);
            } else if(((typeof expression === 'boolean') || expression === null) && errorMessageTemplate === undefined && errorMessageArgs === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkCriticalArgument$boolean(expression);
            } else throw new Error('invalid overload');
        }

        /**
         * Ensures the truth of an expression involving the state of the calling instance, but not
         * involving any parameters to the calling method.
         * 
         * @param expression a boolean expression
         * @throws IllegalStateException if {@code expression} is false
         */
        public static checkState$boolean(expression : boolean) {
            if(InternalPreconditions.API_CHECK_$LI$()) {
                InternalPreconditions.checkCritcalState(expression);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCritcalState(expression);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
        }

        /**
         * Ensures the truth of an expression involving the state of the calling instance, but not
         * involving any parameters to the calling method.
         * <p>
         * For cases where failing fast is pretty important and not failing early could cause bugs that
         * are much harder to debug.
         */
        public static checkCritcalState(expression : boolean) {
            if(!expression) {
                throw new java.lang.IllegalStateException();
            }
        }

        /**
         * Ensures the truth of an expression involving the state of the calling instance, but not
         * involving any parameters to the calling method.
         */
        public static checkState(expression? : any, errorMessage? : any) : any {
            if(((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                return <any>(() => {
                    if(InternalPreconditions.API_CHECK_$LI$()) {
                        InternalPreconditions.checkCriticalState(expression, errorMessage);
                    } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                        try {
                            InternalPreconditions.checkCriticalState(expression, errorMessage);
                        } catch(e) {
                            throw new java.lang.AssertionError(e);
                        };
                    }
                })();
            } else if(((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkState$boolean(expression);
            } else throw new Error('invalid overload');
        }

        /**
         * Ensures the truth of an expression involving the state of the calling instance, but not
         * involving any parameters to the calling method.
         */
        public static checkCriticalState(expression : boolean, errorMessage : any) {
            if(!expression) {
                throw new java.lang.IllegalStateException(/* valueOf */new String(errorMessage).toString());
            }
        }

        /**
         * Ensures that an object reference passed as a parameter to the calling method is not null.
         */
        public static checkNotNull$java_lang_Object<T>(reference : T) : T {
            if(InternalPreconditions.API_CHECK_$LI$()) {
                InternalPreconditions.checkCriticalNotNull(reference);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCriticalNotNull(reference);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
            return reference;
        }

        public static checkCriticalNotNull$java_lang_Object<T>(reference : T) : T {
            if(reference == null) {
                throw new java.lang.NullPointerException();
            }
            return reference;
        }

        /**
         * Ensures that an object reference passed as a parameter to the calling method is not null.
         */
        public static checkNotNull(reference? : any, errorMessage? : any) : any {
            if(((reference != null) || reference === null) && ((errorMessage != null) || errorMessage === null)) {
                return <any>(() => {
                    if(InternalPreconditions.API_CHECK_$LI$()) {
                        InternalPreconditions.checkCriticalNotNull(reference, errorMessage);
                    } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                        try {
                            InternalPreconditions.checkCriticalNotNull(reference, errorMessage);
                        } catch(e) {
                            throw new java.lang.AssertionError(e);
                        };
                    }
                })();
            } else if(((reference != null) || reference === null) && errorMessage === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkNotNull$java_lang_Object(reference);
            } else throw new Error('invalid overload');
        }

        public static checkCriticalNotNull(reference? : any, errorMessage? : any) : any {
            if(((reference != null) || reference === null) && ((errorMessage != null) || errorMessage === null)) {
                return <any>(() => {
                    if(reference == null) {
                        throw new java.lang.NullPointerException(/* valueOf */new String(errorMessage).toString());
                    }
                })();
            } else if(((reference != null) || reference === null) && errorMessage === undefined) {
                return <any>javaemul.internal.InternalPreconditions.checkCriticalNotNull$java_lang_Object(reference);
            } else throw new Error('invalid overload');
        }

        /**
         * Ensures that {@code size} specifies a valid array size (i.e. non-negative).
         */
        public static checkArraySize(size : number) {
            if(InternalPreconditions.API_CHECK_$LI$()) {
                InternalPreconditions.checkCriticalArraySize(size);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCriticalArraySize(size);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
        }

        public static checkCriticalArraySize(size : number) {
            if(size < 0) {
                throw new java.lang.NegativeArraySizeException("Negative array size: " + size);
            }
        }

        /**
         * Ensures that {@code index} specifies a valid <i>element</i> in an array, list or string of size
         * {@code size}. An element index may range from zero, inclusive, to {@code size}, exclusive.
         */
        public static checkElementIndex(index : number, size : number) {
            if(InternalPreconditions.BOUND_CHECK_$LI$()) {
                InternalPreconditions.checkCriticalElementIndex(index, size);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCriticalElementIndex(index, size);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
        }

        public static checkCriticalElementIndex(index : number, size : number) {
            if(index < 0 || index >= size) {
                throw new java.lang.IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
            }
        }

        /**
         * Ensures that {@code index} specifies a valid <i>position</i> in an array, list or string of
         * size {@code size}. A position index may range from zero to {@code size}, inclusive.
         */
        public static checkPositionIndex(index : number, size : number) {
            if(InternalPreconditions.BOUND_CHECK_$LI$()) {
                InternalPreconditions.checkCriticalPositionIndex(index, size);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCriticalPositionIndex(index, size);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
        }

        public static checkCriticalPositionIndex(index : number, size : number) {
            if(index < 0 || index > size) {
                throw new java.lang.IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
            }
        }

        /**
         * Ensures that {@code start} and {@code end} specify a valid <i>positions</i> in an array, list
         * or string of size {@code size}, and are in order. A position index may range from zero to
         * {@code size}, inclusive.
         */
        public static checkPositionIndexes(start : number, end : number, size : number) {
            if(InternalPreconditions.BOUND_CHECK_$LI$()) {
                InternalPreconditions.checkCriticalPositionIndexes(start, end, size);
            } else if(InternalPreconditions.CHECKED_MODE_$LI$()) {
                try {
                    InternalPreconditions.checkCriticalPositionIndexes(start, end, size);
                } catch(e) {
                    throw new java.lang.AssertionError(e);
                };
            }
        }

        /**
         * Ensures that {@code start} and {@code end} specify a valid <i>positions</i> in an array, list
         * or string of size {@code size}, and are in order. A position index may range from zero to
         * {@code size}, inclusive.
         */
        public static checkCriticalPositionIndexes(start : number, end : number, size : number) {
            if(start < 0) {
                throw new java.lang.IndexOutOfBoundsException("fromIndex: " + start + " < 0");
            }
            if(end > size) {
                throw new java.lang.IndexOutOfBoundsException("toIndex: " + end + " > size " + size);
            }
            if(start > end) {
                throw new java.lang.IllegalArgumentException("fromIndex: " + start + " > toIndex: " + end);
            }
        }

        /**
         * Checks that bounds are correct.
         * 
         * @throw StringIndexOutOfBoundsException if the range is not legal
         */
        public static checkStringBounds(start : number, end : number, size : number) {
            if(start < 0) {
                throw new java.lang.StringIndexOutOfBoundsException("fromIndex: " + start + " < 0");
            }
            if(end > size) {
                throw new java.lang.StringIndexOutOfBoundsException("toIndex: " + end + " > size " + size);
            }
            if(end < start) {
                throw new java.lang.StringIndexOutOfBoundsException("fromIndex: " + start + " > toIndex: " + end);
            }
        }

        /**
         * Substitutes each {@code %s} in {@code template} with an argument. These are matched by
         * position: the first {@code %s} gets {@code args[0]}, etc.  If there are more arguments than
         * placeholders, the unmatched arguments will be appended to the end of the formatted message in
         * square braces.
         */
        private static format(template : string, ...args : any[]) : string {
            template = /* valueOf */new String(template).toString();
            var builder : java.lang.StringBuilder = new java.lang.StringBuilder(template.length + 16 * args.length);
            var templateStart : number = 0;
            var i : number = 0;
            while((i < args.length)){
                var placeholderStart : number = template.indexOf("%s", templateStart);
                if(placeholderStart === -1) {
                    break;
                }
                builder.append(template.substring(templateStart, placeholderStart));
                builder.append(args[i++]);
                templateStart = placeholderStart + 2;
            };
            builder.append(template.substring(templateStart));
            if(i < args.length) {
                builder.append(" [");
                builder.append(args[i++]);
                while((i < args.length)){
                    builder.append(", ");
                    builder.append(args[i++]);
                };
                builder.append(']');
            }
            return builder.toString();
        }

        constructor() {
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Indicates that the named compiler warnings should be suppressed in the
     * annotated element (and in all program elements contained in the annotated
     * element). <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/SuppressWarnings.html">[Sun
     * docs]</a>
     */
    export interface SuppressWarnings {
        value() : string[];
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Represents a set of unique objects. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Set.html">[Sun docs]</a>
     * 
     * @param <E> element type.
     */
    export interface Set<E> extends java.util.Collection<E> {
        add(index? : any, element? : any) : any;

        addAll(c : java.util.Collection<any>) : boolean;

        clear();

        contains(o : any) : boolean;

        containsAll(c : java.util.Collection<any>) : boolean;

        equals(o : any) : boolean;

        hashCode() : number;

        isEmpty() : boolean;

        iterator() : java.util.Iterator<E>;

        remove(index? : any) : any;

        removeAll(c : java.util.Collection<any>) : boolean;

        retainAll(c : java.util.Collection<any>) : boolean;

        size() : number;

        toArray<T>(a? : any) : any;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://docs.oracle.com/javase/7/docs/api/java/lang/AutoCloseable.html">the
     * official Java API doc</a> for details.
     */
    export interface AutoCloseable {
        /**
         * Closes this resource.
         */
        close();
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * Provides a series of utilities to be reused between IO classes.
     * 
     * TODO(chehayeb): move these checks to InternalPreconditions.
     */
    export class IOUtils {
        /**
         * Validates the offset and the byte count for the given array of bytes.
         * 
         * @param buffer Array of bytes to be checked.
         * @param byteOffset Starting offset in the array.
         * @param byteCount Total number of bytes to be accessed.
         * @throws NullPointerException if the given reference to the buffer is null.
         * @throws IndexOutOfBoundsException if {@code byteOffset} is negative, {@code byteCount} is
         * negative or their sum exceeds the buffer length.
         */
        public static checkOffsetAndCount(buffer? : any, byteOffset? : any, byteCount? : any) : any {
            if(((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                return <any>(() => {
                    javaemul.internal.InternalPreconditions.checkNotNull(buffer);
                    IOUtils.checkOffsetAndCount(buffer.length, byteOffset, byteCount);
                })();
            } else if(((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                return <any>java.io.IOUtils.checkOffsetAndCount$char_A$int$int(buffer, byteOffset, byteCount);
            } else if(((typeof buffer === 'number') || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                return <any>java.io.IOUtils.checkOffsetAndCount$int$int$int(buffer, byteOffset, byteCount);
            } else throw new Error('invalid overload');
        }

        /**
         * Validates the offset and the byte count for the given array of characters.
         * 
         * @param buffer Array of characters to be checked.
         * @param charOffset Starting offset in the array.
         * @param charCount Total number of characters to be accessed.
         * @throws NullPointerException if the given reference to the buffer is null.
         * @throws IndexOutOfBoundsException if {@code charOffset} is negative, {@code charCount} is
         * negative or their sum exceeds the buffer length.
         */
        public static checkOffsetAndCount$char_A$int$int(buffer : string[], charOffset : number, charCount : number) {
            javaemul.internal.InternalPreconditions.checkNotNull(buffer);
            IOUtils.checkOffsetAndCount(buffer.length, charOffset, charCount);
        }

        /**
         * Validates the offset and the byte count for the given array length.
         * 
         * @param length Length of the array to be checked.
         * @param offset Starting offset in the array.
         * @param count Total number of elements to be accessed.
         * @throws IndexOutOfBoundsException if {@code offset} is negative, {@code count} is negative or
         * their sum exceeds the given {@code length}.
         */
        private static checkOffsetAndCount$int$int$int(length : number, offset : number, count : number) {
            if((offset < 0) || (count < 0) || ((offset + count) > length)) {
                throw new java.lang.IndexOutOfBoundsException();
            }
        }

        constructor() {
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A map with ordering. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/SortedMap.html">[Sun
     * docs]</a>
     * 
     * @param <K> key type.
     * @param <V> value type.
     */
    export interface SortedMap<K, V> extends java.util.Map<K, V> {
        comparator() : java.util.Comparator<any>;

        firstKey() : K;

        headMap(toKey? : any, inclusive? : any) : any;

        lastKey() : K;

        subMap(fromKey? : any, fromInclusive? : any, toKey? : any, toInclusive? : any) : any;

        tailMap(fromKey? : any, inclusive? : any) : any;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.annotation {
    /**
     * Indicates the annotation parser determined the annotation was malformed when
     * reading from the class file <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/AnnotationFormatError.html">[Sun
     * docs]</a>.
     */
    export class AnnotationFormatError extends Error {
        constructor() {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal.annotations {
    /**
     * An annotation to mark a given method as side-effect free.
     * <p>
     * Internal SDK use only, might change or disappear at any time.
     */
    export interface HasNoSideEffects {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util.logging {
    /**
     * An emulation of the java.util.logging.Level class. See
     * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/Level.html">
     * The Java API doc for details</a>
     */
    export class Level implements java.io.Serializable {
        public static ALL : Level; public static ALL_$LI$() : Level { if(Level.ALL == null) Level.ALL = new Level.LevelAll(); return Level.ALL; };

        public static CONFIG : Level; public static CONFIG_$LI$() : Level { if(Level.CONFIG == null) Level.CONFIG = new Level.LevelConfig(); return Level.CONFIG; };

        public static FINE : Level; public static FINE_$LI$() : Level { if(Level.FINE == null) Level.FINE = new Level.LevelFine(); return Level.FINE; };

        public static FINER : Level; public static FINER_$LI$() : Level { if(Level.FINER == null) Level.FINER = new Level.LevelFiner(); return Level.FINER; };

        public static FINEST : Level; public static FINEST_$LI$() : Level { if(Level.FINEST == null) Level.FINEST = new Level.LevelFinest(); return Level.FINEST; };

        public static INFO : Level; public static INFO_$LI$() : Level { if(Level.INFO == null) Level.INFO = new Level.LevelInfo(); return Level.INFO; };

        public static OFF : Level; public static OFF_$LI$() : Level { if(Level.OFF == null) Level.OFF = new Level.LevelOff(); return Level.OFF; };

        public static SEVERE : Level; public static SEVERE_$LI$() : Level { if(Level.SEVERE == null) Level.SEVERE = new Level.LevelSevere(); return Level.SEVERE; };

        public static WARNING : Level; public static WARNING_$LI$() : Level { if(Level.WARNING == null) Level.WARNING = new Level.LevelWarning(); return Level.WARNING; };

        public static parse(name : string) : Level {
            java.util.logging.Logger.assertLoggingValues();
            var loggingDisabled : boolean = (java.lang.System.getProperty("gwt.logging.enabled", "FALSE") === "FALSE");
            if(loggingDisabled) {
                return null;
            }
            var value : string = name.toUpperCase();
            switch((value)) {
            case "ALL":
                return Level.ALL_$LI$();
            case "CONFIG":
                return Level.CONFIG_$LI$();
            case "FINE":
                return Level.FINE_$LI$();
            case "FINER":
                return Level.FINER_$LI$();
            case "FINEST":
                return Level.FINEST_$LI$();
            case "INFO":
                return Level.INFO_$LI$();
            case "OFF":
                return Level.OFF_$LI$();
            case "SEVERE":
                return Level.SEVERE_$LI$();
            case "WARNING":
                return Level.WARNING_$LI$();
            default:
                throw new java.lang.IllegalArgumentException("Invalid level \"" + name + "\"");
            }
        }

        constructor() {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
        }

        public getName() : string {
            return "DUMMY";
        }

        public intValue() : number {
            return -1;
        }

        public toString() : string {
            return this.getName();
        }
    }

    export namespace Level {

        export class LevelAll extends java.util.logging.Level {
            public getName() : string {
                return "ALL";
            }

            public intValue() : number {
                return javaemul.internal.IntegerHelper.MIN_VALUE;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
        }

        export class LevelConfig extends java.util.logging.Level {
            public getName() : string {
                return "CONFIG";
            }

            public intValue() : number {
                return 700;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
        }

        export class LevelFine extends java.util.logging.Level {
            public getName() : string {
                return "FINE";
            }

            public intValue() : number {
                return 500;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
        }

        export class LevelFiner extends java.util.logging.Level {
            public getName() : string {
                return "FINER";
            }

            public intValue() : number {
                return 400;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
        }

        export class LevelFinest extends java.util.logging.Level {
            public getName() : string {
                return "FINEST";
            }

            public intValue() : number {
                return 300;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
        }

        export class LevelInfo extends java.util.logging.Level {
            public getName() : string {
                return "INFO";
            }

            public intValue() : number {
                return 800;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
        }

        export class LevelOff extends java.util.logging.Level {
            public getName() : string {
                return "OFF";
            }

            public intValue() : number {
                return javaemul.internal.IntegerHelper.MAX_VALUE;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
        }

        export class LevelSevere extends java.util.logging.Level {
            public getName() : string {
                return "SEVERE";
            }

            public intValue() : number {
                return 1000;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
        }

        export class LevelWarning extends java.util.logging.Level {
            public getName() : string {
                return "WARNING";
            }

            public intValue() : number {
                return 900;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.reflect {
    /**
     * This interface makes {@link java.lang.reflect.Type} available to GWT clients.
     * 
     * @see java.lang.reflect.Type
     */
    export interface Type {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Generally unsupported. This class is provided so that the GWT compiler can
     * choke down class literal references.
     * <p>
     * NOTE: The code in this class is very sensitive and should keep its
     * dependencies upon other classes to a minimum.
     * 
     * @param <T>
     * the type of the object
     */
    export class Class<T> implements java.lang.reflect.Type {
        private static constructors : Array<Function>; public static constructors_$LI$() : Array<Function> { if(Class.constructors == null) Class.constructors = new Array<Function>(); return Class.constructors; };

        private static classes : Array<any>; public static classes_$LI$() : Array<any> { if(Class.classes == null) Class.classes = new Array<any>(); return Class.classes; };

        static getConstructorForClass(clazz : any) : Function {
            var index : number = (<number>Class.classes_$LI$().indexOf(clazz)|0);
            return index === -1?null:Class.constructors_$LI$()[index];
        }

        static getClassForConstructor(constructor : Function) : any {
            var index : number = (<number>Class.constructors_$LI$().indexOf(constructor)|0);
            return index === -1?null:Class.classes_$LI$()[index];
        }

        static mapConstructorToClass(constructor : Function, clazz : any) {
            Class.constructors_$LI$().push(constructor);
            Class.classes_$LI$().push(clazz);
        }

        private static PRIMITIVE : number = 1;

        private static INTERFACE : number = 2;

        private static ARRAY : number = 4;

        private static ENUM : number = 8;

        /**
         * Create a Class object for an array.
         * <p>
         * 
         * Arrays are not registered in the prototype table and get the class
         * literal explicitly at construction.
         * <p>
         */
        private static getClassLiteralForArray<T>(leafClass : any, dimensions : number) : any {
            var arrayLiterals : any[] = leafClass.arrayLiterals = leafClass.arrayLiterals == null?new Array(0):leafClass.arrayLiterals;
            return arrayLiterals[dimensions] != null?arrayLiterals[dimensions]:(arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
        }

        private createClassLiteralForArray(dimensions : number) : any {
            var clazz : any = new java.lang.Class<any>();
            clazz.modifiers = Class.ARRAY;
            clazz.superclass = Object;
            if(dimensions > 1) {
                clazz.componentType = Class.getClassLiteralForArray<any>(this, dimensions - 1);
            } else {
                clazz.componentType = this;
            }
            return clazz;
        }

        /**
         * Create a Class object for a class.
         * 
         * @skip
         */
        static createForClass<T>(packageName : string, compoundClassName : string, typeId : string, superclass : any) : any {
            var clazz : any = Class.createClassObject<any>(packageName, compoundClassName, typeId);
            clazz.superclass = superclass;
            return clazz;
        }

        /**
         * Create a Class object for an enum.
         * 
         * @skip
         */
        static createForEnum<T>(packageName : string, compoundClassName : string, typeId : string, superclass : any, enumConstantsFunc : Function, enumValueOfFunc : Function) : any {
            var clazz : any = Class.createClassObject<any>(packageName, compoundClassName, typeId);
            clazz.modifiers = (enumConstantsFunc != null)?Class.ENUM:0;
            clazz.superclass = clazz.enumSuperclass = superclass;
            clazz.enumConstantsFunc = enumConstantsFunc;
            clazz.enumValueOfFunc = enumValueOfFunc;
            return clazz;
        }

        /**
         * Create a Class object for an interface.
         * 
         * @skip
         */
        static createForInterface<T>(packageName : string, compoundClassName : string) : any {
            var clazz : any = Class.createClassObject<any>(packageName, compoundClassName, null);
            clazz.modifiers = Class.INTERFACE;
            return clazz;
        }

        /**
         * Create a Class object for a primitive.
         * 
         * @skip
         */
        static createForPrimitive(className : string, primitiveTypeId : string) : any {
            var clazz : any = Class.createClassObject<any>("", className, primitiveTypeId);
            clazz.modifiers = Class.PRIMITIVE;
            return clazz;
        }

        /**
         * Used by {@link WebModePayloadSink} to create uninitialized instances.
         */
        static getPrototypeForClass(clazz : any) : any {
            if(clazz.isPrimitive()) {
                return null;
            }
            return Class.getConstructorForClass(clazz).prototype;
        }

        /**
         * Creates the class object for a type and initiliazes its fields.
         */
        private static createClassObject<T>(packageName : string, compoundClassName : string, typeId : string) : any {
            var clazz : any = new java.lang.Class<T>();
            clazz.packageName = packageName;
            clazz.compoundName = compoundClassName;
            return clazz;
        }

        /**
         * Initiliazes {@code clazz} names from metadata.
         * <p>
         * Written in JSNI to minimize dependencies (on String.+).
         */
        private static initializeNames(clazz : any) {
            if(clazz.isArray()) {
                var componentType : any = clazz.componentType;
                if(componentType.isPrimitive()) {
                    clazz.typeName = "[" + componentType.typeId;
                } else if(!componentType.isArray()) {
                    clazz.typeName = "[L" + componentType.getName() + ";";
                } else {
                    clazz.typeName = "[" + componentType.getName();
                }
                clazz.canonicalName = componentType.getCanonicalName() + "[]";
                clazz.simpleName = componentType.getSimpleName() + "[]";
                return;
            }
            var packageName : string = clazz.packageName;
            var compoundName : string[] = clazz.compoundName.split("/");
            clazz.typeName = ([packageName, (compoundName).join("$")]).join(".");
            clazz.canonicalName = ([packageName, (compoundName).join(".")]).join(".");
            clazz.simpleName = compoundName[compoundName.length - 1];
        }

        /**
         * Sets the class object for primitives.
         * <p>
         * Written in JSNI to minimize dependencies (on (String)+).
         */
        static synthesizePrimitiveNamesFromTypeId(clazz : any, primitiveTypeId : Object) {
            clazz.typeName = "Class$" + primitiveTypeId;
            clazz.canonicalName = clazz.typeName;
            clazz.simpleName = clazz.typeName;
        }

        enumValueOfFunc : Function;

        modifiers : number;

        private componentType : any;

        private enumConstantsFunc : Function;

        private enumSuperclass : any;

        private superclass : any;

        private simpleName : string;

        private typeName : string;

        private canonicalName : string;

        private packageName : string;

        private compoundName : string;

        private typeId : string;

        private arrayLiterals : any[];

        private sequentialId : number = Class.nextSequentialId++;

        private static nextSequentialId : number = 1;

        /**
         * Not publicly instantiable.
         * 
         * @skip
         */
        constructor() {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.reflect.Type"] });
            this.modifiers = 0;
            this.typeName = null;
            this.simpleName = null;
            this.packageName = null;
            this.compoundName = null;
            this.canonicalName = null;
            this.typeId = null;
            this.arrayLiterals = null;
        }

        public desiredAssertionStatus() : boolean {
            return false;
        }

        private ensureNamesAreInitialized() {
            if(this.typeName != null) {
                return;
            }
            Class.initializeNames(this);
        }

        public getCanonicalName() : string {
            this.ensureNamesAreInitialized();
            return this.canonicalName;
        }

        public getComponentType() : any {
            return this.componentType;
        }

        public getEnumConstants() : T[] {
            return this.enumConstantsFunc
            && (this.enumConstantsFunc)();
        }

        public getName() : string {
            this.ensureNamesAreInitialized();
            return this.typeName;
        }

        public getSimpleName() : string {
            this.ensureNamesAreInitialized();
            return this.simpleName;
        }

        public getSuperclass() : any {
            return this.superclass;
        }

        public isArray() : boolean {
            return (this.modifiers & Class.ARRAY) !== 0;
        }

        public isEnum() : boolean {
            return (this.modifiers & Class.ENUM) !== 0;
        }

        public isInterface() : boolean {
            return (this.modifiers & Class.INTERFACE) !== 0;
        }

        public isPrimitive() : boolean {
            return (this.modifiers & Class.PRIMITIVE) !== 0;
        }

        public toString() : string {
            return (this.isInterface()?"interface ":(this.isPrimitive()?"":"class ")) + this.getName();
        }

        /**
         * Used by Enum to allow getSuperclass() to be pruned.
         */
        getEnumSuperclass() : any {
            return this.enumSuperclass;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.annotation {
    /**
     * Annotation which indicates an annotation type is automatically inherited <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/Inherited.html">[Sun
     * docs]</a>.
     */
    export interface Inherited {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util.logging {
    /**
     * An emulation of the java.util.logging.Formatter class. See
     * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/Formatter.html">
     * The Java API doc for details</a>
     */
    export abstract class Formatter {
        public abstract format(record : java.util.logging.LogRecord) : string;

        public formatMessage(record : java.util.logging.LogRecord) : string {
            return this.format(record);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Skeletal implementation of the Collection interface. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractCollection.html">[Sun
     * docs]</a>
     * 
     * @param <E> the element type.
     */
    export abstract class AbstractCollection<E> implements java.util.Collection<E> {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index128=this.iterator();index128.hasNext();) {
                var t = index128.next();
                {
                    action(t);
                }
            }
        }
        constructor() {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.lang.Iterable"] });
        }

        public add(index? : any, element? : any) : any {
            if(((index != null) || index === null) && element === undefined) {
                return <any>this.add$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public add$java_lang_Object(o : E) : boolean {
            throw new java.lang.UnsupportedOperationException("Add not supported on this collection");
        }

        public addAll(index? : any, c? : any) : any {
            if(((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                return <any>this.addAll$java_util_Collection(index);
            } else throw new Error('invalid overload');
        }

        public addAll$java_util_Collection(c : java.util.Collection<any>) : boolean {
            javaemul.internal.InternalPreconditions.checkNotNull(c);
            var changed : boolean = false;
            for(var index129=c.iterator();index129.hasNext();) {
                var e = index129.next();
                {
                    changed = changed || this.add(e);
                }
            }
            return changed;
        }

        public clear() {
            for(var iter : java.util.Iterator<E> = this.iterator(); iter.hasNext(); ) {
                iter.next();
                iter.remove();
            }
        }

        public contains(o : any) : boolean {
            return this.advanceToFind(o, false);
        }

        public containsAll(c : java.util.Collection<any>) : boolean {
            javaemul.internal.InternalPreconditions.checkNotNull(c);
            for(var index130=c.iterator();index130.hasNext();) {
                var e = index130.next();
                {
                    if(!this.contains(e)) {
                        return false;
                    }
                }
            }
            return true;
        }

        public isEmpty() : boolean {
            return this.size() === 0;
        }

        public abstract iterator() : java.util.Iterator<E>;

        public remove(index? : any) : any {
            if(((index != null) || index === null)) {
                return <any>this.remove$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public remove$java_lang_Object(o : any) : boolean {
            return this.advanceToFind(o, true);
        }

        public removeAll(c : java.util.Collection<any>) : boolean {
            javaemul.internal.InternalPreconditions.checkNotNull(c);
            var changed : boolean = false;
            for(var iter : java.util.Iterator<any> = this.iterator(); iter.hasNext(); ) {
                var o : any = iter.next();
                if(c.contains(o)) {
                    iter.remove();
                    changed = true;
                }
            }
            return changed;
        }

        public retainAll(c : java.util.Collection<any>) : boolean {
            javaemul.internal.InternalPreconditions.checkNotNull(c);
            var changed : boolean = false;
            for(var iter : java.util.Iterator<any> = this.iterator(); iter.hasNext(); ) {
                var o : any = iter.next();
                if(!c.contains(o)) {
                    iter.remove();
                    changed = true;
                }
            }
            return changed;
        }

        public abstract size() : number;

        public toArray$() : any[] {
            return this.toArray(new Array(this.size()));
        }

        public toArray<T>(a? : any) : any {
            if(((a != null && a instanceof Array) || a === null)) {
                return <any>(() => {
                    var size : number = this.size();
                    if(a.length < size) {
                        a = javaemul.internal.ArrayHelper.createFrom<any>(a, size);
                    }
                    var result : any[] = a;
                    var it : java.util.Iterator<E> = this.iterator();
                    for(var i : number = 0; i < size; ++i) {
                        result[i] = it.next();
                    }
                    if(a.length > size) {
                        a[size] = null;
                    }
                    return a;
                })();
            } else if(a === undefined) {
                return <any>this.toArray$();
            } else throw new Error('invalid overload');
        }

        public toString() : string {
            var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "[", "]");
            for(var index131=this.iterator();index131.hasNext();) {
                var e = index131.next();
                {
                    joiner.add((<any>e) === this?"(this Collection)":/* valueOf */new String(e).toString());
                }
            }
            return joiner.toString();
        }

        private advanceToFind(o : any, remove : boolean) : boolean {
            for(var iter : java.util.Iterator<E> = this.iterator(); iter.hasNext(); ) {
                var e : E = iter.next();
                if(java.util.Objects.equals(o, e)) {
                    if(remove) {
                        iter.remove();
                    }
                    return true;
                }
            }
            return false;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * An interface to generate a series of elements, one at a time. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Enumeration.html">[Sun
     * docs]</a>
     * 
     * @param <E> the type being enumerated.
     */
    export interface Enumeration<E> {
        hasMoreElements() : boolean;

        nextElement() : E;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal.annotations {
    /**
     * An annotation to mark another annotation as a compiler hint.
     */
    export interface CompilerHint {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Skeletal implementation of the List interface. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractList.html">[Sun
     * docs]</a>
     * 
     * @param <E> the element type.
     */
    export abstract class AbstractList<E> extends java.util.AbstractCollection<E> implements java.util.List<E> {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index132=this.iterator();index132.hasNext();) {
                var t = index132.next();
                {
                    action(t);
                }
            }
        }
        public abstract size(): any;
        modCount : number;

        constructor() {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.List","java.util.Collection","java.lang.Iterable"] });
            this.modCount = 0;
        }

        public add$java_lang_Object(obj : E) : boolean {
            this.add(this.size(), obj);
            return true;
        }

        public add(index? : any, element? : any) : any {
            if(((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                return <any>(() => {
                    throw new java.lang.UnsupportedOperationException("Add not supported on this list");
                })();
            } else if(((index != null) || index === null) && element === undefined) {
                return <any>this.add$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public addAll(index? : any, c? : any) : any {
            if(((typeof index === 'number') || index === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                return <any>(() => {
                    javaemul.internal.InternalPreconditions.checkNotNull(c);
                    var changed : boolean = false;
                    for(var index133=c.iterator();index133.hasNext();) {
                        var e = index133.next();
                        {
                            this.add(index++, e);
                            changed = true;
                        }
                    }
                    return changed;
                })();
            } else if(((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                return <any>this.addAll$java_util_Collection(index);
            } else throw new Error('invalid overload');
        }

        public clear() {
            this.removeRange(0, this.size());
        }

        public equals(o : any) : boolean {
            if(o === this) {
                return true;
            }
            if(!(o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.List") >= 0)) {
                return false;
            }
            var other : java.util.List<any> = <java.util.List<any>>o;
            if(this.size() !== other.size()) {
                return false;
            }
            var iterOther : java.util.Iterator<any> = other.iterator();
            for(var index134=this.iterator();index134.hasNext();) {
                var elem = index134.next();
                {
                    var elemOther : any = iterOther.next();
                    if(!java.util.Objects.equals(elem, elemOther)) {
                        return false;
                    }
                }
            }
            return true;
        }

        public abstract get(index : number) : E;

        public hashCode() : number {
            return java.util.Collections.hashCode(this);
        }

        public indexOf(o? : any, index? : any) : any {
            if(((o != null) || o === null) && index === undefined) {
                return <any>this.indexOf$java_lang_Object(o);
            } else throw new Error('invalid overload');
        }

        public indexOf$java_lang_Object(toFind : any) : number {
            for(var i : number = 0, n : number = this.size(); i < n; ++i) {
                if(java.util.Objects.equals(toFind, this.get(i))) {
                    return i;
                }
            }
            return -1;
        }

        public iterator() : java.util.Iterator<E> {
            return new AbstractList.IteratorImpl(this);
        }

        public lastIndexOf(o? : any, index? : any) : any {
            if(((o != null) || o === null) && index === undefined) {
                return <any>this.lastIndexOf$java_lang_Object(o);
            } else throw new Error('invalid overload');
        }

        public lastIndexOf$java_lang_Object(toFind : any) : number {
            for(var i : number = this.size() - 1; i > -1; --i) {
                if(java.util.Objects.equals(toFind, this.get(i))) {
                    return i;
                }
            }
            return -1;
        }

        public listIterator$() : java.util.ListIterator<E> {
            return this.listIterator(0);
        }

        public listIterator(from? : any) : any {
            if(((typeof from === 'number') || from === null)) {
                return <any>(() => {
                    return new AbstractList.ListIteratorImpl(this, from);
                })();
            } else if(from === undefined) {
                return <any>this.listIterator$();
            } else throw new Error('invalid overload');
        }

        public remove(index? : any) : any {
            if(((typeof index === 'number') || index === null)) {
                return <any>(() => {
                    throw new java.lang.UnsupportedOperationException("Remove not supported on this list");
                })();
            } else if(((index != null) || index === null)) {
                return <any>this.remove$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public set(index : number, o : E) : E {
            throw new java.lang.UnsupportedOperationException("Set not supported on this list");
        }

        public subList(fromIndex : number, toIndex : number) : java.util.List<E> {
            return new AbstractList.SubList<E>(this, fromIndex, toIndex);
        }

        removeRange(fromIndex : number, endIndex : number) {
            var iter : java.util.ListIterator<E> = this.listIterator(fromIndex);
            for(var i : number = fromIndex; i < endIndex; ++i) {
                iter.next();
                iter.remove();
            }
        }
    }

    export namespace AbstractList {

        export class IteratorImpl implements java.util.Iterator<any> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            i : number;

            last : number;

            public constructor(__parent: any) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                this.__parent = __parent;
                this.i = 0;
                this.last = 0;
                this.i = 0;
                this.last = -1;
            }

            public hasNext() : boolean {
                return this.i < this.__parent.size();
            }

            public next() : any {
                javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                return this.__parent.get(this.last = this.i++);
            }

            public remove() {
                javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                this.__parent.remove(this.last);
                this.i = this.last;
                this.last = -1;
            }
        }

        /**
         * Implementation of <code>ListIterator</code> for abstract lists.
         */
        export class ListIteratorImpl extends AbstractList.IteratorImpl implements java.util.ListIterator<any> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            public constructor(__parent: any, start? : any) {
                if(((typeof start === 'number') || start === null)) {
                    super(__parent);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator","java.util.ListIterator"] });
                    this.__parent = __parent;
                    (() => {
                        javaemul.internal.InternalPreconditions.checkPositionIndex(start, this.__parent.size());
                        this.i = start;
                    })();
                } else if(start === undefined) {
                    super(__parent);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator","java.util.ListIterator"] });
                    this.__parent = __parent;
                    (() => {
                    })();
                } else throw new Error('invalid overload');
            }

            public add(o : any) {
                this.__parent.add(this.i, o);
                this.i++;
                this.last = -1;
            }

            public hasPrevious() : boolean {
                return this.i > 0;
            }

            public nextIndex() : number {
                return this.i;
            }

            public previous() : any {
                javaemul.internal.InternalPreconditions.checkElement(this.hasPrevious());
                return this.__parent.get(this.last = --this.i);
            }

            public previousIndex() : number {
                return this.i - 1;
            }

            public set(o : any) {
                javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                this.__parent.set(this.last, o);
            }
        }

        export class SubList<E> extends java.util.AbstractList<E> {
            wrapped : java.util.List<E>;

            fromIndex : number;

            __size : number;

            public constructor(wrapped : java.util.List<E>, fromIndex : number, toIndex : number) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.List","java.util.Collection","java.lang.Iterable"] });
                this.fromIndex = 0;
                this.__size = 0;
                javaemul.internal.InternalPreconditions.checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.size());
                this.wrapped = wrapped;
                this.fromIndex = fromIndex;
                this.__size = toIndex - fromIndex;
            }

            public add(index? : any, element? : any) : any {
                if(((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                    return <any>(() => {
                        javaemul.internal.InternalPreconditions.checkPositionIndex(index, this.__size);
                        this.wrapped.add(this.fromIndex + index, element);
                        this.__size++;
                    })();
                } else if(((index != null) || index === null) && element === undefined) {
                    return <any>this.add$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public get(index : number) : E {
                javaemul.internal.InternalPreconditions.checkElementIndex(index, this.__size);
                return this.wrapped.get(this.fromIndex + index);
            }

            public remove(index? : any) : any {
                if(((typeof index === 'number') || index === null)) {
                    return <any>(() => {
                        javaemul.internal.InternalPreconditions.checkElementIndex(index, this.__size);
                        var result : E = this.wrapped.remove(this.fromIndex + index);
                        this.__size--;
                        return result;
                    })();
                } else if(((index != null) || index === null)) {
                    return <any>this.remove$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public set(index : number, element : E) : E {
                javaemul.internal.InternalPreconditions.checkElementIndex(index, this.__size);
                return this.wrapped.set(this.fromIndex + index, element);
            }

            public size() : number {
                return this.__size;
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Resizeable array implementation of the List interface. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/ArrayList.html">[Sun
     * docs]</a>
     * 
     * <p>
     * This implementation differs from JDK 1.5 <code>ArrayList</code> in terms of
     * capacity management. There is no speed advantage to pre-allocating array
     * sizes in JavaScript, so this implementation does not include any of the
     * capacity and "growth increment" concepts in the standard ArrayList class.
     * Although <code>ArrayList(int)</code> accepts a value for the initial
     * capacity of the array, this constructor simply delegates to
     * <code>ArrayList()</code>. It is only present for compatibility with JDK
     * 1.5's API.
     * </p>
     * 
     * @param <E> the element type.
     */
    export class ArrayList<E> extends java.util.AbstractList<E> implements java.util.List<E>, java.lang.Cloneable, java.util.RandomAccess, java.io.Serializable {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index135=this.iterator();index135.hasNext();) {
                var t = index135.next();
                {
                    action(t);
                }
            }
        }
        /**
         * This field holds a JavaScript array.
         */
        private array : E[];

        /**
         * Ensures that RPC will consider type parameter E to be exposed. It will be
         * pruned by dead code elimination.
         */
        private exposeElement : E;

        public constructor(c? : any) {
            if(((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.lang.Cloneable","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.array = <E[]>new Array(0);
                    javaemul.internal.ArrayHelper.insertTo(this.array, 0, c.toArray());
                })();
            } else if(((typeof c === 'number') || c === null)) {
                var initialCapacity : any = c;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.lang.Cloneable","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    javaemul.internal.InternalPreconditions.checkArgument(initialCapacity >= 0, "Initial capacity must not be negative");
                    this.array = <E[]>new Array(0);
                })();
            } else if(c === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.lang.Cloneable","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.array = <E[]>new Array(0);
                })();
            } else throw new Error('invalid overload');
        }

        public add$java_lang_Object(o : E) : boolean {
            this.array[this.array.length] = o;
            return true;
        }

        public add(index? : any, o? : any) : any {
            if(((typeof index === 'number') || index === null) && ((o != null) || o === null)) {
                return <any>(() => {
                    javaemul.internal.InternalPreconditions.checkPositionIndex(index, this.array.length);
                    javaemul.internal.ArrayHelper.insertTo(this.array, index, o);
                })();
            } else if(((index != null) || index === null) && o === undefined) {
                return <any>this.add$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public addAll$java_util_Collection(c : java.util.Collection<any>) : boolean {
            var cArray : any[] = c.toArray();
            var len : number = cArray.length;
            if(len === 0) {
                return false;
            }
            javaemul.internal.ArrayHelper.insertTo(this.array, this.array.length, cArray);
            return true;
        }

        public addAll(index? : any, c? : any) : any {
            if(((typeof index === 'number') || index === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                return <any>(() => {
                    javaemul.internal.InternalPreconditions.checkPositionIndex(index, this.array.length);
                    var cArray : any[] = c.toArray();
                    var len : number = cArray.length;
                    if(len === 0) {
                        return false;
                    }
                    javaemul.internal.ArrayHelper.insertTo(this.array, index, cArray);
                    return true;
                })();
            } else if(((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                return <any>this.addAll$java_util_Collection(index);
            } else throw new Error('invalid overload');
        }

        public clear() {
            this.array = <E[]>new Array(0);
        }

        public clone() : any {
            return new ArrayList<E>(this);
        }

        public contains(o : any) : boolean {
            return (this.indexOf(o) !== -1);
        }

        public ensureCapacity(ignored : number) {
        }

        public get(index : number) : E {
            javaemul.internal.InternalPreconditions.checkElementIndex(index, this.array.length);
            return this.array[index];
        }

        public indexOf$java_lang_Object(o : any) : number {
            return this.indexOf(o, 0);
        }

        public iterator() : java.util.Iterator<E> {
            return new ArrayList.ArrayList$0(this);
        }

        public isEmpty() : boolean {
            return this.array.length === 0;
        }

        public lastIndexOf$java_lang_Object(o : any) : number {
            return this.lastIndexOf(o, this.size() - 1);
        }

        public remove(index? : any) : any {
            if(((typeof index === 'number') || index === null)) {
                return <any>(() => {
                    var previous : E = this.get(index);
                    javaemul.internal.ArrayHelper.removeFrom(this.array, index, 1);
                    return previous;
                })();
            } else if(((index != null) || index === null)) {
                return <any>this.remove$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public remove$java_lang_Object(o : any) : boolean {
            var i : number = this.indexOf(o);
            if(i === -1) {
                return false;
            }
            this.remove(i);
            return true;
        }

        public set(index : number, o : E) : E {
            var previous : E = this.get(index);
            this.array[index] = o;
            return previous;
        }

        public size() : number {
            return this.array.length;
        }

        public toArray$() : any[] {
            return javaemul.internal.ArrayHelper.clone<any>(this.array, 0, this.array.length);
        }

        public toArray<T>(out? : any) : any {
            if(((out != null && out instanceof Array) || out === null)) {
                return <any>(() => {
                    var size : number = this.array.length;
                    if(out.length < size) {
                        out = javaemul.internal.ArrayHelper.createFrom<any>(out, size);
                    }
                    for(var i : number = 0; i < size; ++i) {
                        out[i] = (<any>this.array[i]);
                    }
                    if(out.length > size) {
                        out[size] = null;
                    }
                    return out;
                })();
            } else if(out === undefined) {
                return <any>this.toArray$();
            } else throw new Error('invalid overload');
        }

        public trimToSize() {
        }

        removeRange(fromIndex : number, endIndex : number) {
            javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, endIndex, this.array.length);
            var count : number = endIndex - fromIndex;
            javaemul.internal.ArrayHelper.removeFrom(this.array, fromIndex, count);
        }

        /**
         * Used by Vector.
         */
        public indexOf(o? : any, index? : any) : any {
            if(((o != null) || o === null) && ((typeof index === 'number') || index === null)) {
                return <any>(() => {
                    for(; index < this.array.length; ++index) {
                        if(java.util.Objects.equals(o, this.array[index])) {
                            return index;
                        }
                    }
                    return -1;
                })();
            } else if(((o != null) || o === null) && index === undefined) {
                return <any>this.indexOf$java_lang_Object(o);
            } else throw new Error('invalid overload');
        }

        /**
         * Used by Vector.
         */
        public lastIndexOf(o? : any, index? : any) : any {
            if(((o != null) || o === null) && ((typeof index === 'number') || index === null)) {
                return <any>(() => {
                    for(; index >= 0; --index) {
                        if(java.util.Objects.equals(o, this.array[index])) {
                            return index;
                        }
                    }
                    return -1;
                })();
            } else if(((o != null) || o === null) && index === undefined) {
                return <any>this.lastIndexOf$java_lang_Object(o);
            } else throw new Error('invalid overload');
        }

        setSize(newSize : number) {
            javaemul.internal.ArrayHelper.setLength(this.array, newSize);
        }
    }

    export namespace ArrayList {

        export class ArrayList$0 implements java.util.Iterator<any> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            i : number;

            last : number;

            public hasNext() : boolean {
                return this.i < this.__parent.array.length;
            }

            public next() : any {
                javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                this.last = this.i++;
                return this.__parent.array[this.last];
            }

            public remove() {
                javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                this.__parent.remove(this.i = this.last);
                this.last = -1;
            }

            constructor(__parent: any) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                this.__parent = __parent;
                this.i = 0;
                this.last = -1;
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * To keep performance characteristics in line with Java community expectations,
     * <code>Vector</code> is a wrapper around <code>ArrayList</code>. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Vector.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export class Vector<E> extends java.util.AbstractList<E> implements java.util.List<E>, java.util.RandomAccess, java.lang.Cloneable, java.io.Serializable {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index136=this.iterator();index136.hasNext();) {
                var t = index136.next();
                {
                    action(t);
                }
            }
        }
        private arrayList : java.util.ArrayList<E>;

        /**
         * Ensures that RPC will consider type parameter E to be exposed. It will be
         * pruned by dead code elimination.
         */
        private exposeElement : E;

        /**
         * Capacity increment is ignored.
         */
        public constructor(initialCapacity? : any, ignoredCapacityIncrement? : any) {
            if(((typeof initialCapacity === 'number') || initialCapacity === null) && ((typeof ignoredCapacityIncrement === 'number') || ignoredCapacityIncrement === null)) {
                {
                    super();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.lang.Cloneable","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
                    (() => {
                        this.arrayList = new java.util.ArrayList<E>(initialCapacity);
                    })();
                }
                (() => {
                })();
            } else if(((initialCapacity != null && initialCapacity["__interfaces"] != null && initialCapacity["__interfaces"].indexOf("java.util.Collection") >= 0) || initialCapacity === null) && ignoredCapacityIncrement === undefined) {
                var c : any = initialCapacity;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.lang.Cloneable","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.arrayList = new java.util.ArrayList<E>();
                    this.addAll(c);
                })();
            } else if(((typeof initialCapacity === 'number') || initialCapacity === null) && ignoredCapacityIncrement === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.lang.Cloneable","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.arrayList = new java.util.ArrayList<E>(initialCapacity);
                })();
            } else if(initialCapacity === undefined && ignoredCapacityIncrement === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.lang.Cloneable","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.arrayList = new java.util.ArrayList<E>();
                })();
            } else throw new Error('invalid overload');
        }

        public add$java_lang_Object(o : E) : boolean {
            return this.arrayList.add(o);
        }

        public add(index? : any, o? : any) : any {
            if(((typeof index === 'number') || index === null) && ((o != null) || o === null)) {
                return <any>(() => {
                    Vector.checkArrayElementIndex(index, this.size() + 1);
                    this.arrayList.add(index, o);
                })();
            } else if(((index != null) || index === null) && o === undefined) {
                return <any>this.add$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public addAll$java_util_Collection(c : java.util.Collection<any>) : boolean {
            return this.arrayList.addAll(c);
        }

        public addAll(index? : any, c? : any) : any {
            if(((typeof index === 'number') || index === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                return <any>(() => {
                    return this.arrayList.addAll(index, c);
                })();
            } else if(((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                return <any>this.addAll$java_util_Collection(index);
            } else throw new Error('invalid overload');
        }

        public addElement(o : E) {
            this.add(o);
        }

        public capacity() : number {
            return this.arrayList.size();
        }

        public clear() {
            this.arrayList.clear();
        }

        public clone() : any {
            return new Vector<E>(this);
        }

        public contains(elem : any) : boolean {
            return this.arrayList.contains(elem);
        }

        public containsAll(c : java.util.Collection<any>) : boolean {
            return this.arrayList.containsAll(c);
        }

        public copyInto(objs : any[]) {
            var i : number = -1;
            var n : number = this.size();
            while((++i < n)){
                objs[i] = this.get(i);
            };
        }

        public elementAt(index : number) : E {
            return this.get(index);
        }

        public elements() : java.util.Enumeration<E> {
            return java.util.Collections.enumeration<any>(this.arrayList);
        }

        public ensureCapacity(capacity : number) {
            this.arrayList.ensureCapacity(capacity);
        }

        public firstElement() : E {
            javaemul.internal.InternalPreconditions.checkElement(!this.isEmpty());
            return this.get(0);
        }

        public get(index : number) : E {
            Vector.checkArrayElementIndex(index, this.size());
            return this.arrayList.get(index);
        }

        public indexOf$java_lang_Object(elem : any) : number {
            return this.arrayList.indexOf(elem);
        }

        public indexOf(elem? : any, index? : any) : any {
            if(((elem != null) || elem === null) && ((typeof index === 'number') || index === null)) {
                return <any>(() => {
                    Vector.checkArrayIndexOutOfBounds(index >= 0, index);
                    return this.arrayList.indexOf(elem, index);
                })();
            } else if(((elem != null) || elem === null) && index === undefined) {
                return <any>this.indexOf$java_lang_Object(elem);
            } else throw new Error('invalid overload');
        }

        public insertElementAt(o : E, index : number) {
            this.add(index, o);
        }

        public isEmpty() : boolean {
            return (this.arrayList.size() === 0);
        }

        public iterator() : java.util.Iterator<E> {
            return this.arrayList.iterator();
        }

        public lastElement() : E {
            javaemul.internal.InternalPreconditions.checkElement(!this.isEmpty());
            return this.get(this.size() - 1);
        }

        public lastIndexOf$java_lang_Object(o : any) : number {
            return this.arrayList.lastIndexOf(o);
        }

        public lastIndexOf(o? : any, index? : any) : any {
            if(((o != null) || o === null) && ((typeof index === 'number') || index === null)) {
                return <any>(() => {
                    Vector.checkArrayIndexOutOfBounds(index < this.size(), index);
                    return this.arrayList.lastIndexOf(o, index);
                })();
            } else if(((o != null) || o === null) && index === undefined) {
                return <any>this.lastIndexOf$java_lang_Object(o);
            } else throw new Error('invalid overload');
        }

        public remove(index? : any) : any {
            if(((typeof index === 'number') || index === null)) {
                return <any>(() => {
                    Vector.checkArrayElementIndex(index, this.size());
                    return this.arrayList.remove(index);
                })();
            } else if(((index != null) || index === null)) {
                return <any>this.remove$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public removeAll(c : java.util.Collection<any>) : boolean {
            return this.arrayList.removeAll(c);
        }

        public removeAllElements() {
            this.clear();
        }

        public removeElement(o : any) : boolean {
            return this.remove(o);
        }

        public removeElementAt(index : number) {
            this.remove(index);
        }

        public set(index : number, elem : E) : E {
            Vector.checkArrayElementIndex(index, this.size());
            return this.arrayList.set(index, elem);
        }

        public setElementAt(o : E, index : number) {
            this.set(index, o);
        }

        public setSize(size : number) {
            Vector.checkArrayIndexOutOfBounds(size >= 0, size);
            this.arrayList.setSize(size);
        }

        public size() : number {
            return this.arrayList.size();
        }

        public subList(fromIndex : number, toIndex : number) : java.util.List<E> {
            return this.arrayList.subList(fromIndex, toIndex);
        }

        public toArray$() : any[] {
            return this.arrayList.toArray();
        }

        public toArray<T>(a? : any) : any {
            if(((a != null && a instanceof Array) || a === null)) {
                return <any>(() => {
                    return this.arrayList.toArray(a);
                })();
            } else if(a === undefined) {
                return <any>this.toArray$();
            } else throw new Error('invalid overload');
        }

        public toString() : string {
            return this.arrayList.toString();
        }

        public trimToSize() {
            this.arrayList.trimToSize();
        }

        removeRange(fromIndex : number, endIndex : number) {
            this.arrayList.removeRange(fromIndex, endIndex);
        }

        private static checkArrayElementIndex(index : number, size : number) {
            if(index < 0 || index >= size) {
                throw new java.lang.ArrayIndexOutOfBoundsException();
            }
        }

        private static checkArrayIndexOutOfBounds(expression : boolean, index : number) {
            if(!expression) {
                throw new java.lang.ArrayIndexOutOfBoundsException(/* valueOf */new String(index).toString());
            }
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Maintains a last-in, first-out collection of objects. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Stack.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export class Stack<E> extends java.util.Vector<E> {
        public clone() : any {
            var s : Stack<E> = new Stack<E>();
            s.addAll(this);
            return s;
        }

        public empty() : boolean {
            return this.isEmpty();
        }

        public peek() : E {
            var sz : number = this.size();
            if(sz > 0) {
                return this.get(sz - 1);
            } else {
                throw new java.util.EmptyStackException();
            }
        }

        public pop() : E {
            var sz : number = this.size();
            if(sz > 0) {
                return this.remove(sz - 1);
            } else {
                throw new java.util.EmptyStackException();
            }
        }

        public push(o : E) : E {
            this.add(o);
            return o;
        }

        public search(o : any) : number {
            var pos : number = this.lastIndexOf(o);
            if(pos >= 0) {
                return this.size() - pos;
            }
            return -1;
        }

        constructor() {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.lang.Cloneable","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Skeletal implementation of the List interface. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractSequentialList.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export abstract class AbstractSequentialList<E> extends java.util.AbstractList<E> {
        constructor() {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.List","java.util.Collection","java.lang.Iterable"] });
        }

        public add(index? : any, element? : any) : any {
            if(((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                return <any>(() => {
                    var iter : java.util.ListIterator<E> = this.listIterator(index);
                    iter.add(element);
                })();
            } else if(((index != null) || index === null) && element === undefined) {
                return <any>this.add$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public addAll(index? : any, c? : any) : any {
            if(((typeof index === 'number') || index === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                return <any>(() => {
                    javaemul.internal.InternalPreconditions.checkNotNull(c);
                    var modified : boolean = false;
                    var iter : java.util.ListIterator<E> = this.listIterator(index);
                    for(var index137=c.iterator();index137.hasNext();) {
                        var e = index137.next();
                        {
                            iter.add(e);
                            modified = true;
                        }
                    }
                    return modified;
                })();
            } else if(((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                return <any>this.addAll$java_util_Collection(index);
            } else throw new Error('invalid overload');
        }

        public get(index : number) : E {
            var iter : java.util.ListIterator<E> = this.listIterator(index);
            try {
                return iter.next();
            } catch(e) {
                throw new java.lang.IndexOutOfBoundsException("Can\'t get element " + index);
            };
        }

        public iterator() : java.util.Iterator<E> {
            return this.listIterator();
        }

        public listIterator(index? : any) : any {
            if(((typeof index === 'number') || index === null)) {
 return null;             } else if(index === undefined) {
                return <any>this.listIterator$();
            } else throw new Error('invalid overload');
        }

        public remove(index? : any) : any {
            if(((typeof index === 'number') || index === null)) {
                return <any>(() => {
                    var iter : java.util.ListIterator<E> = this.listIterator(index);
                    try {
                        var old : E = iter.next();
                        iter.remove();
                        return old;
                    } catch(e) {
                        throw new java.lang.IndexOutOfBoundsException("Can\'t remove element " + index);
                    };
                })();
            } else if(((index != null) || index === null)) {
                return <any>this.remove$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public set(index : number, element : E) : E {
            var iter : java.util.ListIterator<E> = this.listIterator(index);
            try {
                var old : E = iter.next();
                iter.set(element);
                return old;
            } catch(e) {
                throw new java.lang.IndexOutOfBoundsException("Can\'t set element " + index);
            };
        }

        public abstract size() : number;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Utility methods related to native arrays. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Arrays.html">[Sun
     * docs]</a>
     */
    export class Arrays {
        public static asList<T>(...array : T[]) : java.util.List<T> {
            return new Arrays.ArrayList<T>(array);
        }

        /**
         * Perform a binary search on a sorted byte array.
         * 
         * @param sortedArray byte array to search
         * @param key value to search for
         * @return the index of an element with a matching value, or a negative number
         * which is the index of the next larger value (or just past the end
         * of the array if the searched value is larger than all elements in
         * the array) minus 1 (to ensure error returns are negative)
         */
        public static binarySearch$byte_A$byte(sortedArray : number[], key : number) : number {
            var low : number = 0;
            var high : number = sortedArray.length - 1;
            while((low <= high)){
                var mid : number = low + ((high - low) >> 1);
                var midVal : number = sortedArray[mid];
                if(midVal < key) {
                    low = mid + 1;
                } else if(midVal > key) {
                    high = mid - 1;
                } else {
                    return mid;
                }
            };
            return -low - 1;
        }

        /**
         * Perform a binary search on a sorted char array.
         * 
         * @param a char array to search
         * @param key value to search for
         * @return the index of an element with a matching value, or a negative number
         * which is the index of the next larger value (or just past the end
         * of the array if the searched value is larger than all elements in
         * the array) minus 1 (to ensure error returns are negative)
         */
        public static binarySearch$char_A$char(a : string[], key : string) : number {
            var low : number = 0;
            var high : number = a.length - 1;
            while((low <= high)){
                var mid : number = low + ((high - low) >> 1);
                var midVal : string = a[mid];
                if((midVal).charCodeAt(0) < (key).charCodeAt(0)) {
                    low = mid + 1;
                } else if((midVal).charCodeAt(0) > (key).charCodeAt(0)) {
                    high = mid - 1;
                } else {
                    return mid;
                }
            };
            return -low - 1;
        }

        /**
         * Perform a binary search on a sorted double array.
         * 
         * @param sortedArray double array to search
         * @param key value to search for
         * @return the index of an element with a matching value, or a negative number
         * which is the index of the next larger value (or just past the end
         * of the array if the searched value is larger than all elements in
         * the array) minus 1 (to ensure error returns are negative)
         */
        public static binarySearch$double_A$double(sortedArray : number[], key : number) : number {
            var low : number = 0;
            var high : number = sortedArray.length - 1;
            while((low <= high)){
                var mid : number = low + ((high - low) >> 1);
                var midVal : number = sortedArray[mid];
                if(midVal < key) {
                    low = mid + 1;
                } else if(midVal > key) {
                    high = mid - 1;
                } else {
                    return mid;
                }
            };
            return -low - 1;
        }

        /**
         * Perform a binary search on a sorted float array.
         * 
         * Note that some underlying JavaScript interpreters do not actually implement
         * floats (using double instead), so you may get slightly different behavior
         * regarding values that are very close (or equal) since conversion errors
         * to/from double may change the values slightly.
         * 
         * @param sortedArray float array to search
         * @param key value to search for
         * @return the index of an element with a matching value, or a negative number
         * which is the index of the next larger value (or just past the end
         * of the array if the searched value is larger than all elements in
         * the array) minus 1 (to ensure error returns are negative)
         */
        public static binarySearch$float_A$float(sortedArray : number[], key : number) : number {
            var low : number = 0;
            var high : number = sortedArray.length - 1;
            while((low <= high)){
                var mid : number = low + ((high - low) >> 1);
                var midVal : number = sortedArray[mid];
                if(midVal < key) {
                    low = mid + 1;
                } else if(midVal > key) {
                    high = mid - 1;
                } else {
                    return mid;
                }
            };
            return -low - 1;
        }

        /**
         * Perform a binary search on a sorted int array.
         * 
         * @param sortedArray int array to search
         * @param key value to search for
         * @return the index of an element with a matching value, or a negative number
         * which is the index of the next larger value (or just past the end
         * of the array if the searched value is larger than all elements in
         * the array) minus 1 (to ensure error returns are negative)
         */
        public static binarySearch$int_A$int(sortedArray : number[], key : number) : number {
            var low : number = 0;
            var high : number = sortedArray.length - 1;
            while((low <= high)){
                var mid : number = low + ((high - low) >> 1);
                var midVal : number = sortedArray[mid];
                if(midVal < key) {
                    low = mid + 1;
                } else if(midVal > key) {
                    high = mid - 1;
                } else {
                    return mid;
                }
            };
            return -low - 1;
        }

        /**
         * Perform a binary search on a sorted long array.
         * 
         * Note that most underlying JavaScript interpreters do not actually implement
         * longs, so the values must be stored in doubles instead. This means that
         * certain legal values cannot be represented, and comparison of two unequal
         * long values may result in unexpected results if they are not also
         * representable as doubles.
         * 
         * @param sortedArray long array to search
         * @param key value to search for
         * @return the index of an element with a matching value, or a negative number
         * which is the index of the next larger value (or just past the end
         * of the array if the searched value is larger than all elements in
         * the array) minus 1 (to ensure error returns are negative)
         */
        public static binarySearch$long_A$long(sortedArray : number[], key : number) : number {
            var low : number = 0;
            var high : number = sortedArray.length - 1;
            while((low <= high)){
                var mid : number = low + ((high - low) >> 1);
                var midVal : number = sortedArray[mid];
                if(midVal < key) {
                    low = mid + 1;
                } else if(midVal > key) {
                    high = mid - 1;
                } else {
                    return mid;
                }
            };
            return -low - 1;
        }

        /**
         * Perform a binary search on a sorted object array, using natural ordering.
         * 
         * @param sortedArray object array to search
         * @param key value to search for
         * @return the index of an element with a matching value, or a negative number
         * which is the index of the next larger value (or just past the end
         * of the array if the searched value is larger than all elements in
         * the array) minus 1 (to ensure error returns are negative)
         * @throws ClassCastException if <code>key</code> is not comparable to
         * <code>sortedArray</code>'s elements.
         */
        public static binarySearch$java_lang_Object_A$java_lang_Object(sortedArray : any[], key : any) : number {
            return Arrays.binarySearch(sortedArray, key, java.util.Comparators.natural<any>());
        }

        /**
         * Perform a binary search on a sorted short array.
         * 
         * @param sortedArray short array to search
         * @param key value to search for
         * @return the index of an element with a matching value, or a negative number
         * which is the index of the next larger value (or just past the end
         * of the array if the searched value is larger than all elements in
         * the array) minus 1 (to ensure error returns are negative)
         */
        public static binarySearch$short_A$short(sortedArray : number[], key : number) : number {
            var low : number = 0;
            var high : number = sortedArray.length - 1;
            while((low <= high)){
                var mid : number = low + ((high - low) >> 1);
                var midVal : number = sortedArray[mid];
                if(midVal < key) {
                    low = mid + 1;
                } else if(midVal > key) {
                    high = mid - 1;
                } else {
                    return mid;
                }
            };
            return -low - 1;
        }

        /**
         * Perform a binary search on a sorted object array, using a user-specified
         * comparison function.
         * 
         * @param sortedArray object array to search
         * @param key value to search for
         * @param comparator comparision function, <code>null</code> indicates
         * <i>natural ordering</i> should be used.
         * @return the index of an element with a matching value, or a negative number
         * which is the index of the next larger value (or just past the end
         * of the array if the searched value is larger than all elements in
         * the array) minus 1 (to ensure error returns are negative)
         * @throws ClassCastException if <code>key</code> and
         * <code>sortedArray</code>'s elements cannot be compared by
         * <code>comparator</code>.
         */
        public static binarySearch<T>(sortedArray? : any, key? : any, comparator? : any) : any {
            if(((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((key != null) || key === null) && ((comparator != null && comparator["__interfaces"] != null && comparator["__interfaces"].indexOf("java.util.Comparator") >= 0) || comparator === null)) {
                return <any>(() => {
                    if(comparator == null) {
                        comparator = java.util.Comparators.natural<any>();
                    }
                    var low : number = 0;
                    var high : number = sortedArray.length - 1;
                    while((low <= high)){
                        var mid : number = low + ((high - low) >> 1);
                        var midVal : T = sortedArray[mid];
                        var compareResult : number = comparator.compare(midVal, key);
                        if(compareResult < 0) {
                            low = mid + 1;
                        } else if(compareResult > 0) {
                            high = mid - 1;
                        } else {
                            return mid;
                        }
                    };
                    return -low - 1;
                })();
            } else if(((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                return <any>java.util.Arrays.binarySearch$byte_A$byte(sortedArray, key);
            } else if(((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'string') || key === null) && comparator === undefined) {
                return <any>java.util.Arrays.binarySearch$char_A$char(sortedArray, key);
            } else if(((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                return <any>java.util.Arrays.binarySearch$short_A$short(sortedArray, key);
            } else if(((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                return <any>java.util.Arrays.binarySearch$int_A$int(sortedArray, key);
            } else if(((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                return <any>java.util.Arrays.binarySearch$long_A$long(sortedArray, key);
            } else if(((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                return <any>java.util.Arrays.binarySearch$float_A$float(sortedArray, key);
            } else if(((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                return <any>java.util.Arrays.binarySearch$double_A$double(sortedArray, key);
            } else if(((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((key != null) || key === null) && comparator === undefined) {
                return <any>java.util.Arrays.binarySearch$java_lang_Object_A$java_lang_Object(sortedArray, key);
            } else throw new Error('invalid overload');
        }

        public static copyOf(original? : any, newLength? : any) : any {
            if(((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                return <any>(() => {
                    javaemul.internal.InternalPreconditions.checkArraySize(newLength);
                    return Arrays.copyOfRange(original, 0, newLength);
                })();
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                return <any>java.util.Arrays.copyOf$byte_A$int(original, newLength);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                return <any>java.util.Arrays.copyOf$char_A$int(original, newLength);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                return <any>java.util.Arrays.copyOf$double_A$int(original, newLength);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                return <any>java.util.Arrays.copyOf$float_A$int(original, newLength);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                return <any>java.util.Arrays.copyOf$int_A$int(original, newLength);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                return <any>java.util.Arrays.copyOf$long_A$int(original, newLength);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                return <any>java.util.Arrays.copyOf$short_A$int(original, newLength);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                return <any>java.util.Arrays.copyOf$java_lang_Object_A$int(original, newLength);
            } else throw new Error('invalid overload');
        }

        public static copyOf$byte_A$int(original : number[], newLength : number) : number[] {
            javaemul.internal.InternalPreconditions.checkArraySize(newLength);
            return Arrays.copyOfRange(original, 0, newLength);
        }

        public static copyOf$char_A$int(original : string[], newLength : number) : string[] {
            javaemul.internal.InternalPreconditions.checkArraySize(newLength);
            return Arrays.copyOfRange(original, 0, newLength);
        }

        public static copyOf$double_A$int(original : number[], newLength : number) : number[] {
            javaemul.internal.InternalPreconditions.checkArraySize(newLength);
            return Arrays.copyOfRange(original, 0, newLength);
        }

        public static copyOf$float_A$int(original : number[], newLength : number) : number[] {
            javaemul.internal.InternalPreconditions.checkArraySize(newLength);
            return Arrays.copyOfRange(original, 0, newLength);
        }

        public static copyOf$int_A$int(original : number[], newLength : number) : number[] {
            javaemul.internal.InternalPreconditions.checkArraySize(newLength);
            return Arrays.copyOfRange(original, 0, newLength);
        }

        public static copyOf$long_A$int(original : number[], newLength : number) : number[] {
            javaemul.internal.InternalPreconditions.checkArraySize(newLength);
            return Arrays.copyOfRange(original, 0, newLength);
        }

        public static copyOf$short_A$int(original : number[], newLength : number) : number[] {
            javaemul.internal.InternalPreconditions.checkArraySize(newLength);
            return Arrays.copyOfRange(original, 0, newLength);
        }

        public static copyOf$java_lang_Object_A$int<T>(original : T[], newLength : number) : T[] {
            javaemul.internal.InternalPreconditions.checkArraySize(newLength);
            javaemul.internal.InternalPreconditions.checkNotNull(original, "original");
            var clone : T[] = javaemul.internal.ArrayHelper.clone<any>(original, 0, newLength);
            javaemul.internal.ArrayHelper.setLength(clone, newLength);
            return clone;
        }

        public static copyOfRange(original? : any, from? : any, to? : any) : any {
            if(((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                return <any>(() => {
                    var len : number = Arrays.getCopyLength(original, from, to);
                    var copy : boolean[] = new Array(to - from);
                    javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
                    return copy;
                })();
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                return <any>java.util.Arrays.copyOfRange$byte_A$int$int(original, from, to);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                return <any>java.util.Arrays.copyOfRange$char_A$int$int(original, from, to);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                return <any>java.util.Arrays.copyOfRange$double_A$int$int(original, from, to);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                return <any>java.util.Arrays.copyOfRange$float_A$int$int(original, from, to);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                return <any>java.util.Arrays.copyOfRange$int_A$int$int(original, from, to);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                return <any>java.util.Arrays.copyOfRange$long_A$int$int(original, from, to);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                return <any>java.util.Arrays.copyOfRange$short_A$int$int(original, from, to);
            } else if(((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                return <any>java.util.Arrays.copyOfRange$java_lang_Object_A$int$int(original, from, to);
            } else throw new Error('invalid overload');
        }

        public static copyOfRange$byte_A$int$int(original : number[], from : number, to : number) : number[] {
            var len : number = Arrays.getCopyLength(original, from, to);
            var copy : number[] = new Array(to - from);
            javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
            return copy;
        }

        public static copyOfRange$char_A$int$int(original : string[], from : number, to : number) : string[] {
            var len : number = Arrays.getCopyLength(original, from, to);
            var copy : string[] = new Array(to - from);
            javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
            return copy;
        }

        public static copyOfRange$double_A$int$int(original : number[], from : number, to : number) : number[] {
            var len : number = Arrays.getCopyLength(original, from, to);
            var copy : number[] = new Array(to - from);
            javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
            return copy;
        }

        public static copyOfRange$float_A$int$int(original : number[], from : number, to : number) : number[] {
            var len : number = Arrays.getCopyLength(original, from, to);
            var copy : number[] = new Array(to - from);
            javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
            return copy;
        }

        public static copyOfRange$int_A$int$int(original : number[], from : number, to : number) : number[] {
            var len : number = Arrays.getCopyLength(original, from, to);
            var copy : number[] = new Array(to - from);
            javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
            return copy;
        }

        public static copyOfRange$long_A$int$int(original : number[], from : number, to : number) : number[] {
            var len : number = Arrays.getCopyLength(original, from, to);
            var copy : number[] = new Array(to - from);
            javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
            return copy;
        }

        public static copyOfRange$short_A$int$int(original : number[], from : number, to : number) : number[] {
            var len : number = Arrays.getCopyLength(original, from, to);
            var copy : number[] = new Array(to - from);
            javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
            return copy;
        }

        public static copyOfRange$java_lang_Object_A$int$int<T>(original : T[], from : number, to : number) : T[] {
            var len : number = Arrays.getCopyLength(original, from, to);
            var copy : T[] = javaemul.internal.ArrayHelper.createFrom<any>(original, to - from);
            javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
            return copy;
        }

        public static deepEquals(a1 : any[], a2 : any[]) : boolean {
            if(a1 === a2) {
                return true;
            }
            if(a1 == null || a2 == null) {
                return false;
            }
            if(a1.length !== a2.length) {
                return false;
            }
            for(var i : number = 0, n : number = a1.length; i < n; ++i) {
                if(!java.util.Objects.deepEquals(a1[i], a2[i])) {
                    return false;
                }
            }
            return true;
        }

        public static deepHashCode(a : any[]) : number {
            if(a == null) {
                return 0;
            }
            var hashCode : number = 1;
            for(var index138=0; index138 < a.length; index138++) {
                var obj = a[index138];
                {
                    var hash : number;
                    if(obj != null && obj instanceof Array) {
                        hash = Arrays.deepHashCode(<any[]>obj);
                    } else if(obj != null && obj instanceof Array) {
                        hash = Arrays.hashCode(<boolean[]>obj);
                    } else if(obj != null && obj instanceof Array) {
                        hash = Arrays.hashCode(<number[]>obj);
                    } else if(obj != null && obj instanceof Array) {
                        hash = Arrays.hashCode(<string[]>obj);
                    } else if(obj != null && obj instanceof Array) {
                        hash = Arrays.hashCode(<number[]>obj);
                    } else if(obj != null && obj instanceof Array) {
                        hash = Arrays.hashCode(<number[]>obj);
                    } else if(obj != null && obj instanceof Array) {
                        hash = Arrays.hashCode(<number[]>obj);
                    } else if(obj != null && obj instanceof Array) {
                        hash = Arrays.hashCode(<number[]>obj);
                    } else if(obj != null && obj instanceof Array) {
                        hash = Arrays.hashCode(<number[]>obj);
                    } else {
                        hash = java.util.Objects.hashCode(obj);
                    }
                    hashCode = 31 * hashCode + hash;
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                }
            }
            return hashCode;
        }

        public static deepToString$java_lang_Object_A(a : any[]) : string {
            return Arrays.deepToString(a, new java.util.HashSet<any[]>());
        }

        public static equals(array1? : any, array2? : any) : any {
            if(((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                return <any>(() => {
                    if(array1 === array2) {
                        return true;
                    }
                    if(array1 == null || array2 == null) {
                        return false;
                    }
                    if(array1.length !== array2.length) {
                        return false;
                    }
                    for(var i : number = 0; i < array1.length; ++i) {
                        if(array1[i] !== array2[i]) {
                            return false;
                        }
                    }
                    return true;
                })();
            } else if(((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                return <any>java.util.Arrays.equals$byte_A$byte_A(array1, array2);
            } else if(((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                return <any>java.util.Arrays.equals$char_A$char_A(array1, array2);
            } else if(((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                return <any>java.util.Arrays.equals$double_A$double_A(array1, array2);
            } else if(((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                return <any>java.util.Arrays.equals$float_A$float_A(array1, array2);
            } else if(((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                return <any>java.util.Arrays.equals$int_A$int_A(array1, array2);
            } else if(((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                return <any>java.util.Arrays.equals$long_A$long_A(array1, array2);
            } else if(((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                return <any>java.util.Arrays.equals$java_lang_Object_A$java_lang_Object_A(array1, array2);
            } else if(((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                return <any>java.util.Arrays.equals$short_A$short_A(array1, array2);
            } else throw new Error('invalid overload');
        }

        public static equals$byte_A$byte_A(array1 : number[], array2 : number[]) : boolean {
            if(array1 === array2) {
                return true;
            }
            if(array1 == null || array2 == null) {
                return false;
            }
            if(array1.length !== array2.length) {
                return false;
            }
            for(var i : number = 0; i < array1.length; ++i) {
                if(array1[i] !== array2[i]) {
                    return false;
                }
            }
            return true;
        }

        public static equals$char_A$char_A(array1 : string[], array2 : string[]) : boolean {
            if(array1 === array2) {
                return true;
            }
            if(array1 == null || array2 == null) {
                return false;
            }
            if(array1.length !== array2.length) {
                return false;
            }
            for(var i : number = 0; i < array1.length; ++i) {
                if(array1[i] !== array2[i]) {
                    return false;
                }
            }
            return true;
        }

        public static equals$double_A$double_A(array1 : number[], array2 : number[]) : boolean {
            if(array1 === array2) {
                return true;
            }
            if(array1 == null || array2 == null) {
                return false;
            }
            if(array1.length !== array2.length) {
                return false;
            }
            for(var i : number = 0; i < array1.length; ++i) {
                if(array1[i] !== array2[i]) {
                    return false;
                }
            }
            return true;
        }

        public static equals$float_A$float_A(array1 : number[], array2 : number[]) : boolean {
            if(array1 === array2) {
                return true;
            }
            if(array1 == null || array2 == null) {
                return false;
            }
            if(array1.length !== array2.length) {
                return false;
            }
            for(var i : number = 0; i < array1.length; ++i) {
                if(array1[i] !== array2[i]) {
                    return false;
                }
            }
            return true;
        }

        public static equals$int_A$int_A(array1 : number[], array2 : number[]) : boolean {
            if(array1 === array2) {
                return true;
            }
            if(array1 == null || array2 == null) {
                return false;
            }
            if(array1.length !== array2.length) {
                return false;
            }
            for(var i : number = 0; i < array1.length; ++i) {
                if(array1[i] !== array2[i]) {
                    return false;
                }
            }
            return true;
        }

        public static equals$long_A$long_A(array1 : number[], array2 : number[]) : boolean {
            if(array1 === array2) {
                return true;
            }
            if(array1 == null || array2 == null) {
                return false;
            }
            if(array1.length !== array2.length) {
                return false;
            }
            for(var i : number = 0; i < array1.length; ++i) {
                if(array1[i] !== array2[i]) {
                    return false;
                }
            }
            return true;
        }

        public static equals$java_lang_Object_A$java_lang_Object_A(array1 : any[], array2 : any[]) : boolean {
            if(array1 === array2) {
                return true;
            }
            if(array1 == null || array2 == null) {
                return false;
            }
            if(array1.length !== array2.length) {
                return false;
            }
            for(var i : number = 0; i < array1.length; ++i) {
                var val1 : any = array1[i];
                var val2 : any = array2[i];
                if(!java.util.Objects.equals(val1, val2)) {
                    return false;
                }
            }
            return true;
        }

        public static equals$short_A$short_A(array1 : number[], array2 : number[]) : boolean {
            if(array1 === array2) {
                return true;
            }
            if(array1 == null || array2 == null) {
                return false;
            }
            if(array1.length !== array2.length) {
                return false;
            }
            for(var i : number = 0; i < array1.length; ++i) {
                if(array1[i] !== array2[i]) {
                    return false;
                }
            }
            return true;
        }

        public static fill$boolean_A$boolean(a : boolean[], val : boolean) {
            Arrays.fill(a, 0, a.length, val);
        }

        public static fill(a? : any, fromIndex? : any, toIndex? : any, val? : any) : any {
            if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'boolean') || val === null)) {
                return <any>(() => {
                    for(var i : number = fromIndex; i < toIndex; ++i) {
                        a[i] = val;
                    }
                })();
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                return <any>java.util.Arrays.fill$byte_A$int$int$byte(a, fromIndex, toIndex, val);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'string') || val === null)) {
                return <any>java.util.Arrays.fill$char_A$int$int$char(a, fromIndex, toIndex, val);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                return <any>java.util.Arrays.fill$short_A$int$int$short(a, fromIndex, toIndex, val);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                return <any>java.util.Arrays.fill$int_A$int$int$int(a, fromIndex, toIndex, val);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                return <any>java.util.Arrays.fill$long_A$int$int$long(a, fromIndex, toIndex, val);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                return <any>java.util.Arrays.fill$float_A$int$int$float(a, fromIndex, toIndex, val);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                return <any>java.util.Arrays.fill$double_A$int$int$double(a, fromIndex, toIndex, val);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((val != null) || val === null)) {
                return <any>java.util.Arrays.fill$java_lang_Object_A$int$int$java_lang_Object(a, fromIndex, toIndex, val);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'boolean') || fromIndex === null) && toIndex === undefined && val === undefined) {
                return <any>java.util.Arrays.fill$boolean_A$boolean(a, fromIndex);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                return <any>java.util.Arrays.fill$byte_A$byte(a, fromIndex);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'string') || fromIndex === null) && toIndex === undefined && val === undefined) {
                return <any>java.util.Arrays.fill$char_A$char(a, fromIndex);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                return <any>java.util.Arrays.fill$short_A$short(a, fromIndex);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                return <any>java.util.Arrays.fill$int_A$int(a, fromIndex);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                return <any>java.util.Arrays.fill$long_A$long(a, fromIndex);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                return <any>java.util.Arrays.fill$float_A$float(a, fromIndex);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                return <any>java.util.Arrays.fill$double_A$double(a, fromIndex);
            } else if(((a != null && a instanceof Array) || a === null) && ((fromIndex != null) || fromIndex === null) && toIndex === undefined && val === undefined) {
                return <any>java.util.Arrays.fill$java_lang_Object_A$java_lang_Object(a, fromIndex);
            } else throw new Error('invalid overload');
        }

        public static fill$byte_A$byte(a : number[], val : number) {
            Arrays.fill(a, 0, a.length, val);
        }

        public static fill$byte_A$int$int$byte(a : number[], fromIndex : number, toIndex : number, val : number) {
            for(var i : number = fromIndex; i < toIndex; ++i) {
                a[i] = val;
            }
        }

        public static fill$char_A$char(a : string[], val : string) {
            Arrays.fill(a, 0, a.length, val);
        }

        public static fill$char_A$int$int$char(a : string[], fromIndex : number, toIndex : number, val : string) {
            for(var i : number = fromIndex; i < toIndex; ++i) {
                a[i] = val;
            }
        }

        public static fill$double_A$double(a : number[], val : number) {
            Arrays.fill(a, 0, a.length, val);
        }

        public static fill$double_A$int$int$double(a : number[], fromIndex : number, toIndex : number, val : number) {
            for(var i : number = fromIndex; i < toIndex; ++i) {
                a[i] = val;
            }
        }

        public static fill$float_A$float(a : number[], val : number) {
            Arrays.fill(a, 0, a.length, val);
        }

        public static fill$float_A$int$int$float(a : number[], fromIndex : number, toIndex : number, val : number) {
            for(var i : number = fromIndex; i < toIndex; ++i) {
                a[i] = val;
            }
        }

        public static fill$int_A$int(a : number[], val : number) {
            Arrays.fill(a, 0, a.length, val);
        }

        public static fill$int_A$int$int$int(a : number[], fromIndex : number, toIndex : number, val : number) {
            for(var i : number = fromIndex; i < toIndex; ++i) {
                a[i] = val;
            }
        }

        public static fill$long_A$int$int$long(a : number[], fromIndex : number, toIndex : number, val : number) {
            for(var i : number = fromIndex; i < toIndex; ++i) {
                a[i] = val;
            }
        }

        public static fill$long_A$long(a : number[], val : number) {
            Arrays.fill(a, 0, a.length, val);
        }

        public static fill$java_lang_Object_A$int$int$java_lang_Object(a : any[], fromIndex : number, toIndex : number, val : any) {
            for(var i : number = fromIndex; i < toIndex; ++i) {
                a[i] = val;
            }
        }

        public static fill$java_lang_Object_A$java_lang_Object(a : any[], val : any) {
            Arrays.fill(a, 0, a.length, val);
        }

        public static fill$short_A$int$int$short(a : number[], fromIndex : number, toIndex : number, val : number) {
            for(var i : number = fromIndex; i < toIndex; ++i) {
                a[i] = val;
            }
        }

        public static fill$short_A$short(a : number[], val : number) {
            Arrays.fill(a, 0, a.length, val);
        }

        public static hashCode(a? : any) : any {
            if(((a != null && a instanceof Array) || a === null)) {
                return <any>(() => {
                    if(a == null) {
                        return 0;
                    }
                    var hashCode : number = 1;
                    for(var index139=0; index139 < a.length; index139++) {
                        var e = a[index139];
                        {
                            hashCode = 31 * hashCode + javaemul.internal.BooleanHelper.hashCode(e);
                            hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                        }
                    }
                    return hashCode;
                })();
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.hashCode$byte_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.hashCode$char_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.hashCode$double_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.hashCode$float_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.hashCode$int_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.hashCode$long_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.hashCode$java_lang_Object_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.hashCode$short_A(a);
            } else throw new Error('invalid overload');
        }

        public static hashCode$byte_A(a : number[]) : number {
            if(a == null) {
                return 0;
            }
            var hashCode : number = 1;
            for(var index140=0; index140 < a.length; index140++) {
                var e = a[index140];
                {
                    hashCode = 31 * hashCode + javaemul.internal.ByteHelper.hashCode(e);
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                }
            }
            return hashCode;
        }

        public static hashCode$char_A(a : string[]) : number {
            if(a == null) {
                return 0;
            }
            var hashCode : number = 1;
            for(var index141=0; index141 < a.length; index141++) {
                var e = a[index141];
                {
                    hashCode = 31 * hashCode + javaemul.internal.CharacterHelper.hashCode(e);
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                }
            }
            return hashCode;
        }

        public static hashCode$double_A(a : number[]) : number {
            if(a == null) {
                return 0;
            }
            var hashCode : number = 1;
            for(var index142=0; index142 < a.length; index142++) {
                var e = a[index142];
                {
                    hashCode = 31 * hashCode + javaemul.internal.DoubleHelper.hashCode(e);
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                }
            }
            return hashCode;
        }

        public static hashCode$float_A(a : number[]) : number {
            if(a == null) {
                return 0;
            }
            var hashCode : number = 1;
            for(var index143=0; index143 < a.length; index143++) {
                var e = a[index143];
                {
                    hashCode = 31 * hashCode + javaemul.internal.FloatHelper.hashCode(e);
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                }
            }
            return hashCode;
        }

        public static hashCode$int_A(a : number[]) : number {
            if(a == null) {
                return 0;
            }
            var hashCode : number = 1;
            for(var index144=0; index144 < a.length; index144++) {
                var e = a[index144];
                {
                    hashCode = 31 * hashCode + javaemul.internal.IntegerHelper.hashCode(e);
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                }
            }
            return hashCode;
        }

        public static hashCode$long_A(a : number[]) : number {
            if(a == null) {
                return 0;
            }
            var hashCode : number = 1;
            for(var index145=0; index145 < a.length; index145++) {
                var e = a[index145];
                {
                    hashCode = 31 * hashCode + javaemul.internal.LongHelper.hashCode(e);
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                }
            }
            return hashCode;
        }

        public static hashCode$java_lang_Object_A(a : any[]) : number {
            if(a == null) {
                return 0;
            }
            var hashCode : number = 1;
            for(var index146=0; index146 < a.length; index146++) {
                var e = a[index146];
                {
                    hashCode = 31 * hashCode + java.util.Objects.hashCode(e);
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                }
            }
            return hashCode;
        }

        public static hashCode$short_A(a : number[]) : number {
            if(a == null) {
                return 0;
            }
            var hashCode : number = 1;
            for(var index147=0; index147 < a.length; index147++) {
                var e = a[index147];
                {
                    hashCode = 31 * hashCode + javaemul.internal.ShortHelper.hashCode(e);
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                }
            }
            return hashCode;
        }

        public static sort$byte_A(array : number[]) {
            Arrays.nativeNumberSort(array);
        }

        public static sort$byte_A$int$int(array : number[], fromIndex : number, toIndex : number) {
            javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
            Arrays.nativeNumberSort(array, fromIndex, toIndex);
        }

        public static sort$char_A(array : string[]) {
            Arrays.nativeNumberSort(array);
        }

        public static sort$char_A$int$int(array : string[], fromIndex : number, toIndex : number) {
            javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
            Arrays.nativeNumberSort(array, fromIndex, toIndex);
        }

        public static sort$double_A(array : number[]) {
            Arrays.nativeNumberSort(array);
        }

        public static sort$double_A$int$int(array : number[], fromIndex : number, toIndex : number) {
            javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
            Arrays.nativeNumberSort(array, fromIndex, toIndex);
        }

        public static sort$float_A(array : number[]) {
            Arrays.nativeNumberSort(array);
        }

        public static sort$float_A$int$int(array : number[], fromIndex : number, toIndex : number) {
            javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
            Arrays.nativeNumberSort(array, fromIndex, toIndex);
        }

        public static sort$int_A(array : number[]) {
            Arrays.nativeNumberSort(array);
        }

        public static sort$int_A$int$int(array : number[], fromIndex : number, toIndex : number) {
            javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
            Arrays.nativeNumberSort(array, fromIndex, toIndex);
        }

        public static sort$long_A(array : number[]) {
            Arrays.nativeLongSort(array, javaemul.internal.LongCompareHolder.getLongComparator());
        }

        public static sort$long_A$int$int(array : number[], fromIndex : number, toIndex : number) {
            javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
            Arrays.nativeLongSort(array, fromIndex, toIndex);
        }

        public static sort$java_lang_Object_A(array : any[]) {
            Arrays.mergeSort(array, 0, array.length, java.util.Comparators.natural<any>());
        }

        public static sort$java_lang_Object_A$int$int(x : any[], fromIndex : number, toIndex : number) {
            Arrays.mergeSort(x, fromIndex, toIndex, java.util.Comparators.natural<any>());
        }

        public static sort$short_A(array : number[]) {
            Arrays.nativeNumberSort(array);
        }

        public static sort$short_A$int$int(array : number[], fromIndex : number, toIndex : number) {
            javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
            Arrays.nativeNumberSort(array, fromIndex, toIndex);
        }

        public static sort$java_lang_Object_A$java_util_Comparator<T>(x : T[], c : java.util.Comparator<any>) {
            Arrays.mergeSort(x, 0, x.length, c);
        }

        public static sort<T>(x? : any, fromIndex? : any, toIndex? : any, c? : any) : any {
            if(((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Comparator") >= 0) || c === null)) {
                return <any>(() => {
                    javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, x.length);
                    Arrays.mergeSort(x, fromIndex, toIndex, c);
                })();
            } else if(((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                return <any>java.util.Arrays.sort$byte_A$int$int(x, fromIndex, toIndex);
            } else if(((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                return <any>java.util.Arrays.sort$char_A$int$int(x, fromIndex, toIndex);
            } else if(((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                return <any>java.util.Arrays.sort$double_A$int$int(x, fromIndex, toIndex);
            } else if(((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                return <any>java.util.Arrays.sort$float_A$int$int(x, fromIndex, toIndex);
            } else if(((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                return <any>java.util.Arrays.sort$int_A$int$int(x, fromIndex, toIndex);
            } else if(((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                return <any>java.util.Arrays.sort$long_A$int$int(x, fromIndex, toIndex);
            } else if(((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                return <any>java.util.Arrays.sort$java_lang_Object_A$int$int(x, fromIndex, toIndex);
            } else if(((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                return <any>java.util.Arrays.sort$short_A$int$int(x, fromIndex, toIndex);
            } else if(((x != null && x instanceof Array) || x === null) && ((fromIndex != null && fromIndex["__interfaces"] != null && fromIndex["__interfaces"].indexOf("java.util.Comparator") >= 0) || fromIndex === null) && toIndex === undefined && c === undefined) {
                return <any>java.util.Arrays.sort$java_lang_Object_A$java_util_Comparator(x, fromIndex);
            } else if(((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                return <any>java.util.Arrays.sort$byte_A(x);
            } else if(((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                return <any>java.util.Arrays.sort$char_A(x);
            } else if(((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                return <any>java.util.Arrays.sort$double_A(x);
            } else if(((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                return <any>java.util.Arrays.sort$float_A(x);
            } else if(((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                return <any>java.util.Arrays.sort$int_A(x);
            } else if(((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                return <any>java.util.Arrays.sort$long_A(x);
            } else if(((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                return <any>java.util.Arrays.sort$java_lang_Object_A(x);
            } else if(((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                return <any>java.util.Arrays.sort$short_A(x);
            } else throw new Error('invalid overload');
        }

        public static toString(a? : any) : any {
            if(((a != null && a instanceof Array) || a === null)) {
                return <any>(() => {
                    if(a == null) {
                        return "null";
                    }
                    var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "[", "]");
                    for(var index148=0; index148 < a.length; index148++) {
                        var element = a[index148];
                        {
                            joiner.add(/* valueOf */new String(element).toString());
                        }
                    }
                    return joiner.toString();
                })();
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.toString$byte_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.toString$char_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.toString$double_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.toString$float_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.toString$int_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.toString$long_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.toString$java_lang_Object_A(a);
            } else if(((a != null && a instanceof Array) || a === null)) {
                return <any>java.util.Arrays.toString$short_A(a);
            } else throw new Error('invalid overload');
        }

        public static toString$byte_A(a : number[]) : string {
            if(a == null) {
                return "null";
            }
            var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "[", "]");
            for(var index149=0; index149 < a.length; index149++) {
                var element = a[index149];
                {
                    joiner.add(/* valueOf */new String(element).toString());
                }
            }
            return joiner.toString();
        }

        public static toString$char_A(a : string[]) : string {
            if(a == null) {
                return "null";
            }
            var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "[", "]");
            for(var index150=0; index150 < a.length; index150++) {
                var element = a[index150];
                {
                    joiner.add(/* valueOf */new String(element).toString());
                }
            }
            return joiner.toString();
        }

        public static toString$double_A(a : number[]) : string {
            if(a == null) {
                return "null";
            }
            var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "[", "]");
            for(var index151=0; index151 < a.length; index151++) {
                var element = a[index151];
                {
                    joiner.add(/* valueOf */new String(element).toString());
                }
            }
            return joiner.toString();
        }

        public static toString$float_A(a : number[]) : string {
            if(a == null) {
                return "null";
            }
            var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "[", "]");
            for(var index152=0; index152 < a.length; index152++) {
                var element = a[index152];
                {
                    joiner.add(/* valueOf */new String(element).toString());
                }
            }
            return joiner.toString();
        }

        public static toString$int_A(a : number[]) : string {
            if(a == null) {
                return "null";
            }
            var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "[", "]");
            for(var index153=0; index153 < a.length; index153++) {
                var element = a[index153];
                {
                    joiner.add(/* valueOf */new String(element).toString());
                }
            }
            return joiner.toString();
        }

        public static toString$long_A(a : number[]) : string {
            if(a == null) {
                return "null";
            }
            var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "[", "]");
            for(var index154=0; index154 < a.length; index154++) {
                var element = a[index154];
                {
                    joiner.add(/* valueOf */new String(element).toString());
                }
            }
            return joiner.toString();
        }

        public static toString$java_lang_Object_A(x : any[]) : string {
            if(x == null) {
                return "null";
            }
            return Arrays.asList<any>(x).toString();
        }

        public static toString$short_A(a : number[]) : string {
            if(a == null) {
                return "null";
            }
            var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "[", "]");
            for(var index155=0; index155 < a.length; index155++) {
                var element = a[index155];
                {
                    joiner.add(/* valueOf */new String(element).toString());
                }
            }
            return joiner.toString();
        }

        /**
         * Recursive helper function for {@link Arrays#deepToString(Object[])}.
         */
        public static deepToString(a? : any, arraysIveSeen? : any) : any {
            if(((a != null && a instanceof Array) || a === null) && ((arraysIveSeen != null && arraysIveSeen["__interfaces"] != null && arraysIveSeen["__interfaces"].indexOf("java.util.Set") >= 0) || arraysIveSeen === null)) {
                return <any>(() => {
                    if(a == null) {
                        return "null";
                    }
                    if(!arraysIveSeen.add(a)) {
                        return "[...]";
                    }
                    var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "[", "]");
                    for(var index156=0; index156 < a.length; index156++) {
                        var obj = a[index156];
                        {
                            if(obj != null && obj.getClass().isArray()) {
                                if(obj != null && obj instanceof Array) {
                                    if(arraysIveSeen.contains(obj)) {
                                        joiner.add("[...]");
                                    } else {
                                        var objArray : any[] = <any[]>obj;
                                        var tempSet : java.util.HashSet<any[]> = new java.util.HashSet<any[]>(arraysIveSeen);
                                        joiner.add(Arrays.deepToString(objArray, tempSet));
                                    }
                                } else if(obj != null && obj instanceof Array) {
                                    joiner.add(Arrays.toString(<boolean[]>obj));
                                } else if(obj != null && obj instanceof Array) {
                                    joiner.add(Arrays.toString(<number[]>obj));
                                } else if(obj != null && obj instanceof Array) {
                                    joiner.add(Arrays.toString(<string[]>obj));
                                } else if(obj != null && obj instanceof Array) {
                                    joiner.add(Arrays.toString(<number[]>obj));
                                } else if(obj != null && obj instanceof Array) {
                                    joiner.add(Arrays.toString(<number[]>obj));
                                } else if(obj != null && obj instanceof Array) {
                                    joiner.add(Arrays.toString(<number[]>obj));
                                } else if(obj != null && obj instanceof Array) {
                                    joiner.add(Arrays.toString(<number[]>obj));
                                } else if(obj != null && obj instanceof Array) {
                                    joiner.add(Arrays.toString(<number[]>obj));
                                } else {
                                }
                            } else {
                                joiner.add(/* valueOf */new String(obj).toString());
                            }
                        }
                    }
                    return joiner.toString();
                })();
            } else if(((a != null && a instanceof Array) || a === null) && arraysIveSeen === undefined) {
                return <any>java.util.Arrays.deepToString$java_lang_Object_A(a);
            } else throw new Error('invalid overload');
        }

        static getCopyLength(array : any, from : number, to : number) : number {
            javaemul.internal.InternalPreconditions.checkArgument(from <= to, "%s > %s", from, to);
            var len : number = javaemul.internal.ArrayHelper.getLength(array);
            to = Math.min(to, len);
            javaemul.internal.InternalPreconditions.checkCriticalPositionIndexes(from, to, len);
            return to - from;
        }

        /**
         * Sort a small subsection of an array by insertion sort.
         * 
         * @param array array to sort
         * @param low lower bound of range to sort
         * @param high upper bound of range to sort
         * @param comp comparator to use
         */
        static insertionSort(array : any[], low : number, high : number, comp : java.util.Comparator<any>) {
            for(var i : number = low + 1; i < high; ++i) {
                for(var j : number = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
                    var t : any = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = t;
                }
            }
        }

        /**
         * Merge the two sorted subarrays (srcLow,srcMid] and (srcMid,srcHigh] into
         * dest.
         * 
         * @param src source array for merge
         * @param srcLow lower bound of bottom sorted half
         * @param srcMid upper bound of bottom sorted half & lower bound of top sorted
         * half
         * @param srcHigh upper bound of top sorted half
         * @param dest destination array for merge
         * @param destLow lower bound of destination
         * @param destHigh upper bound of destination
         * @param comp comparator to use
         */
        static merge(src : any[], srcLow : number, srcMid : number, srcHigh : number, dest : any[], destLow : number, destHigh : number, comp : java.util.Comparator<any>) {
            var topIdx : number = srcMid;
            while((destLow < destHigh)){
                if(topIdx >= srcHigh || (srcLow < srcMid && comp.compare(src[srcLow], src[topIdx]) <= 0)) {
                    dest[destLow++] = src[srcLow++];
                } else {
                    dest[destLow++] = src[topIdx++];
                }
            };
        }

        /**
         * Performs a merge sort on the specified portion of an object array.
         * 
         * Uses O(n) temporary space to perform the merge, but is stable.
         */
        static mergeSort$java_lang_Object_A$int$int$java_util_Comparator(x : any[], fromIndex : number, toIndex : number, comp : java.util.Comparator<any>) {
            if(comp == null) {
                comp = java.util.Comparators.natural<any>();
            }
            var temp : any[] = Arrays.copyOfRange(x, fromIndex, toIndex);
            Arrays.mergeSort(temp, x, fromIndex, toIndex, -fromIndex, <java.util.Comparator<any>>comp);
        }

        /**
         * Recursive helper function for
         * {@link Arrays#mergeSort(Object[], int, int, Comparator)}.
         * 
         * @param temp temporary space, as large as the range of elements being
         * sorted. On entry, temp should contain a copy of the sort range
         * from array.
         * @param array array to sort
         * @param low lower bound of range to sort
         * @param high upper bound of range to sort
         * @param ofs offset to convert an array index into a temp index
         * @param comp comparison function
         */
        public static mergeSort(temp? : any, array? : any, low? : any, high? : any, ofs? : any, comp? : any) : any {
            if(((temp != null && temp instanceof Array) || temp === null) && ((array != null && array instanceof Array) || array === null) && ((typeof low === 'number') || low === null) && ((typeof high === 'number') || high === null) && ((typeof ofs === 'number') || ofs === null) && ((comp != null && comp["__interfaces"] != null && comp["__interfaces"].indexOf("java.util.Comparator") >= 0) || comp === null)) {
                return <any>(() => {
                    var length : number = high - low;
                    if(length < 7) {
                        Arrays.insertionSort(array, low, high, comp);
                        return;
                    }
                    var tempLow : number = low + ofs;
                    var tempHigh : number = high + ofs;
                    var tempMid : number = tempLow + ((tempHigh - tempLow) >> 1);
                    Arrays.mergeSort(array, temp, tempLow, tempMid, -ofs, comp);
                    Arrays.mergeSort(array, temp, tempMid, tempHigh, -ofs, comp);
                    if(comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
                        while((low < high)){
                            array[low++] = temp[tempLow++];
                        };
                        return;
                    }
                    Arrays.merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
                })();
            } else if(((temp != null && temp instanceof Array) || temp === null) && ((typeof array === 'number') || array === null) && ((typeof low === 'number') || low === null) && ((high != null && high["__interfaces"] != null && high["__interfaces"].indexOf("java.util.Comparator") >= 0) || high === null) && ofs === undefined && comp === undefined) {
                return <any>java.util.Arrays.mergeSort$java_lang_Object_A$int$int$java_util_Comparator(temp, array, low, high);
            } else throw new Error('invalid overload');
        }

        /**
         * Sort an entire array of number primitives.
         */
        static nativeLongSort$java_lang_Object$java_lang_Object(array : any, compareFunction : any) {
            array.sort(compareFunction);
        }

        /**
         * Sort a subset of an array of number primitives.
         */
        public static nativeLongSort(array? : any, fromIndex? : any, toIndex? : any) : any {
            if(((array != null) || array === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null)) {
                return <any>(() => {
                    var temp : any = javaemul.internal.ArrayHelper.unsafeClone(array, fromIndex, toIndex);
                    Arrays.nativeLongSort(temp, javaemul.internal.LongCompareHolder.getLongComparator());
                    javaemul.internal.ArrayHelper.copy(temp, 0, array, fromIndex, toIndex - fromIndex);
                })();
            } else if(((array != null) || array === null) && ((fromIndex != null) || fromIndex === null) && toIndex === undefined) {
                return <any>java.util.Arrays.nativeLongSort$java_lang_Object$java_lang_Object(array, fromIndex);
            } else throw new Error('invalid overload');
        }

        /**
         * Sort an entire array of number primitives.
         */
        static nativeNumberSort$java_lang_Object(array : any) {
            array.sort(function(a, b) {
            return a - b;
            });
        }

        /**
         * Sort a subset of an array of number primitives.
         */
        public static nativeNumberSort(array? : any, fromIndex? : any, toIndex? : any) : any {
            if(((array != null) || array === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null)) {
                return <any>(() => {
                    var temp : any = javaemul.internal.ArrayHelper.unsafeClone(array, fromIndex, toIndex);
                    Arrays.nativeNumberSort(temp);
                    javaemul.internal.ArrayHelper.copy(temp, 0, array, fromIndex, toIndex - fromIndex);
                })();
            } else if(((array != null) || array === null) && fromIndex === undefined && toIndex === undefined) {
                return <any>java.util.Arrays.nativeNumberSort$java_lang_Object(array);
            } else throw new Error('invalid overload');
        }
    }

    export namespace Arrays {

        export class ArrayList<E> extends java.util.AbstractList<E> implements java.util.RandomAccess, java.io.Serializable {
            /**
             * The only reason this is non-final is so that E[] (and E) will be exposed
             * for serialization.
             */
            array : E[];

            constructor(array : E[]) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
                this.array = array;
            }

            public contains(o : any) : boolean {
                return (this.indexOf(o) !== -1);
            }

            public get(index : number) : E {
                javaemul.internal.InternalPreconditions.checkElementIndex(index, this.size());
                return this.array[index];
            }

            public set(index : number, value : E) : E {
                var was : E = this.get(index);
                this.array[index] = value;
                return was;
            }

            public size() : number {
                return this.array.length;
            }

            public toArray$() : any[] {
                return this.toArray(new Array(this.array.length));
            }

            public toArray<T>(out? : any) : any {
                if(((out != null && out instanceof Array) || out === null)) {
                    return <any>(() => {
                        var size : number = this.size();
                        if(out.length < size) {
                            out = javaemul.internal.ArrayHelper.createFrom<any>(out, size);
                        }
                        for(var i : number = 0; i < size; ++i) {
                            out[i] = (<any>this.array[i]);
                        }
                        if(out.length > size) {
                            out[size] = null;
                        }
                        return out;
                    })();
                } else if(out === undefined) {
                    return <any>this.toArray$();
                } else throw new Error('invalid overload');
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Wraps a primitive <code>float</code> as an object.
     */
    export class FloatHelper extends javaemul.internal.NumberHelper implements java.lang.Comparable<FloatHelper> {
        public static MAX_VALUE : number = 3.4028235E38;

        public static MIN_VALUE : number = 1.4E-45;

        public static MAX_EXPONENT : number = 127;

        public static MIN_EXPONENT : number = -126;

        public static MIN_NORMAL : number = 1.17549435E-38;

        public static NaN : number; public static NaN_$LI$() : number { if(FloatHelper.NaN == null) FloatHelper.NaN = 0.0 / 0.0; return FloatHelper.NaN; };

        public static NEGATIVE_INFINITY : number; public static NEGATIVE_INFINITY_$LI$() : number { if(FloatHelper.NEGATIVE_INFINITY == null) FloatHelper.NEGATIVE_INFINITY = -1.0 / 0.0; return FloatHelper.NEGATIVE_INFINITY; };

        public static POSITIVE_INFINITY : number; public static POSITIVE_INFINITY_$LI$() : number { if(FloatHelper.POSITIVE_INFINITY == null) FloatHelper.POSITIVE_INFINITY = 1.0 / 0.0; return FloatHelper.POSITIVE_INFINITY; };

        public static SIZE : number = 32;

        private static POWER_31_INT : number = 2147483648;

        public static compare(x : number, y : number) : number {
            return javaemul.internal.DoubleHelper.compare(x, y);
        }

        public static floatToIntBits(value : number) : number {
            if(FloatHelper.isNaN(value)) {
                return 2143289344;
            }
            if(value === 0.0) {
                if(1.0 / value === FloatHelper.NEGATIVE_INFINITY_$LI$()) {
                    return -2147483648;
                } else {
                    return 0;
                }
            }
            var negative : boolean = false;
            if(value < 0.0) {
                negative = true;
                value = -value;
            }
            if(FloatHelper.isInfinite(value)) {
                if(negative) {
                    return -8388608;
                } else {
                    return 2139095040;
                }
            }
            var l : number = javaemul.internal.DoubleHelper.doubleToLongBits(<number>value);
            var exp : number = (<number>(((l >> 52) & 2047) - 1023)|0);
            var mantissa : number = (<number>((l & 4503599627370495) >> 29)|0);
            if(exp <= -127) {
                mantissa = (8388608 | mantissa) >> (-127 - exp + 1);
                exp = -127;
            }
            var bits : number = negative?FloatHelper.POWER_31_INT:0;
            bits |= (exp + 127) << 23;
            bits |= mantissa;
            return (<number>bits|0);
        }

        /**
         * @skip Here for shared implementation with Arrays.hashCode.
         * @param f
         * @return hash value of float (currently just truncated to int)
         */
        public static hashCode(f : number) : number {
            return (<number>f|0);
        }

        public static intBitsToFloat(bits : number) : number {
            var negative : boolean = (bits & -2147483648) !== 0;
            var exp : number = (bits >> 23) & 255;
            bits &= 8388607;
            if(exp === 0) {
                if(bits === 0) {
                    return negative?-0.0:0.0;
                }
            } else if(exp === 255) {
                if(bits === 0) {
                    return negative?FloatHelper.NEGATIVE_INFINITY_$LI$():FloatHelper.POSITIVE_INFINITY_$LI$();
                } else {
                    return FloatHelper.NaN_$LI$();
                }
            }
            if(exp === 0) {
                exp = 1;
                while(((bits & 8388608) === 0)){
                    bits <<= 1;
                    exp--;
                };
                bits &= 8388607;
            }
            var bits64 : number = negative?-9223372036854775808:0;
            bits64 |= (Math.round(<number>(exp + 896))) << 52;
            bits64 |= (Math.round(<number>bits)) << 29;
            return <number>javaemul.internal.DoubleHelper.longBitsToDouble(bits64);
        }

        public static isInfinite(x : number) : boolean {
            return javaemul.internal.DoubleHelper.isInfinite(x);
        }

        public static isNaN(x : number) : boolean {
            return javaemul.internal.DoubleHelper.isNaN(x);
        }

        public static parseFloat(s : string) : number {
            var doubleValue : number = NumberHelper.__parseAndValidateDouble(s);
            if(doubleValue > FloatHelper.MAX_VALUE) {
                return FloatHelper.POSITIVE_INFINITY_$LI$();
            } else if(doubleValue < -FloatHelper.MAX_VALUE) {
                return FloatHelper.NEGATIVE_INFINITY_$LI$();
            }
            return <number>doubleValue;
        }

        public static toString(b : number) : string {
            return /* valueOf */new String(b).toString();
        }

        public static valueOf$float(f : number) : FloatHelper {
            return new FloatHelper(f);
        }

        public static valueOf(s? : any) : any {
            if(((typeof s === 'string') || s === null)) {
                return <any>(() => {
                    return new FloatHelper(s);
                })();
            } else if(((typeof s === 'number') || s === null)) {
                return <any>javaemul.internal.FloatHelper.valueOf$float(s);
            } else throw new Error('invalid overload');
        }

        private value : number;

        public constructor(s? : any) {
            if(((typeof s === 'string') || s === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = FloatHelper.parseFloat(s);
                })();
            } else if(((typeof s === 'number') || s === null)) {
                var value : any = s;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = value;
                })();
            } else if(((typeof s === 'number') || s === null)) {
                var value : any = s;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = <number>value;
                })();
            } else throw new Error('invalid overload');
        }

        public byteValue() : number {
            return (<number>this.value|0);
        }

        public compareTo(b? : any) : any {
            if(((b != null && b instanceof javaemul.internal.FloatHelper) || b === null)) {
                return <any>(() => {
                    return FloatHelper.compare(this.value, b.value);
                })();
            } else throw new Error('invalid overload');
        }

        public doubleValue() : number {
            return this.value;
        }

        public equals(o : any) : boolean {
            return (o != null && o instanceof javaemul.internal.FloatHelper) && ((<FloatHelper>o).value === this.value);
        }

        public floatValue() : number {
            return this.value;
        }

        /**
         * Performance caution: using Float objects as map keys is not recommended.
         * Using floating point values as keys is generally a bad idea due to
         * difficulty determining exact equality. In addition, there is no efficient
         * JavaScript equivalent of <code>floatToIntBits</code>. As a result, this
         * method computes a hash code by truncating the whole number portion of the
         * float, which may lead to poor performance for certain value sets if
         * Floats are used as keys in a {@link java.util.HashMap}.
         */
        public hashCode() : number {
            return FloatHelper.hashCode(this.value);
        }

        public intValue() : number {
            return (<number>this.value|0);
        }

        public isInfinite() : boolean {
            return FloatHelper.isInfinite(this.value);
        }

        public isNaN() : boolean {
            return FloatHelper.isNaN(this.value);
        }

        public longValue() : number {
            return Math.round(<number>this.value);
        }

        public shortValue() : number {
            return (<number>this.value|0);
        }

        public toString() : string {
            return FloatHelper.toString(this.value);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Provides utilities to perform operations on Arrays.
     */
    export class ArrayHelper {
        public static ARRAY_PROCESS_BATCH_SIZE : number = 10000;

        public static clone<T>(array : T[], fromIndex : number, toIndex : number) : T[] {
            var result : any = ArrayHelper.unsafeClone(array, fromIndex, toIndex);
            return javaemul.internal.ArrayStamper.stampJavaTypeInfo<any>(result, array);
        }

        /**
         * Unlike clone, this method returns a copy of the array that is not type
         * marked. This is only safe for temp arrays as returned array will not do
         * any type checks.
         */
        public static unsafeClone(array : any, fromIndex : number, toIndex : number) : any[] {
            return (<Array<any>>array).slice(fromIndex, toIndex);
        }

        public static createFrom<T>(array : T[], length : number) : T[] {
            var result : any = ArrayHelper.createNativeArray(length);
            return javaemul.internal.ArrayStamper.stampJavaTypeInfo<any>(result, array);
        }

        private static createNativeArray(length : number) : any {
            return new Array<any>(length);
        }

        public static getLength(array : any) : number {
            return (<number>(<Array<any>>array).length|0);
        }

        public static setLength(array : any, length : number) {
            (<Array<any>>array).length = length;
        }

        public static removeFrom(array : any, index : number, deleteCount : number) {
            (<Array<any>>array).splice(index, deleteCount);
        }

        public static insertTo$java_lang_Object$int$java_lang_Object(array : any, index : number, value : any) {
            (<Array<any>>array).splice(index, 0, value);
        }

        public static insertTo(array? : any, index? : any, values? : any) : any {
            if(((array != null) || array === null) && ((typeof index === 'number') || index === null) && ((values != null && values instanceof Array) || values === null)) {
                return <any>(() => {
                    ArrayHelper.copy(values, 0, array, index, values.length, false);
                })();
            } else if(((array != null) || array === null) && ((typeof index === 'number') || index === null) && ((values != null) || values === null)) {
                return <any>javaemul.internal.ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object(array, index, values);
            } else throw new Error('invalid overload');
        }

        public static copy(src : any, srcOfs : number, dest : any, destOfs : number, len : number, overwrite : boolean = true) {
            if(src === dest) {
                src = ArrayHelper.unsafeClone(src, srcOfs, srcOfs + len);
                srcOfs = 0;
            }
            for(var batchStart : number = srcOfs, end : number = srcOfs + len; batchStart < end; ) {
                var batchEnd : number = Math.min(batchStart + ArrayHelper.ARRAY_PROCESS_BATCH_SIZE, end);
                len = batchEnd - batchStart;
                batchStart = batchEnd;
                destOfs += len;
            }
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.sql {
    /**
     * An implementation of java.sql.Date. Derived from
     * http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html
     */
    export class Date extends java.util.Date {
        public static valueOf(s : string) : Date {
            var split : string[] = s.split("-");
            if(split.length !== 3) {
                throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
            }
            try {
                var y : number = javaemul.internal.IntegerHelper.parseInt(split[0]) - 1900;
                var m : number = javaemul.internal.IntegerHelper.parseInt(split[1]) - 1;
                var d : number = javaemul.internal.IntegerHelper.parseInt(split[2]);
                return new Date(y, m, d);
            } catch(e) {
                throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
            };
        }

        public constructor(year? : any, month? : any, day? : any) {
            if(((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null)) {
                super(year, month, day);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof year === 'number') || year === null) && month === undefined && day === undefined) {
                var date : any = year;
                super(date);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.lang.Comparable","java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public getHours() : number {
            throw new java.lang.IllegalArgumentException();
        }

        public getMinutes() : number {
            throw new java.lang.IllegalArgumentException();
        }

        public getSeconds() : number {
            throw new java.lang.IllegalArgumentException();
        }

        public setHours(i : number) {
            throw new java.lang.IllegalArgumentException();
        }

        public setMinutes(i : number) {
            throw new java.lang.IllegalArgumentException();
        }

        public setSeconds(i : number) {
            throw new java.lang.IllegalArgumentException();
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal.annotations {
    /**
     * A simple of a GwtIncompatible annotation for internal emulation use.
     */
    export interface GwtIncompatible {
        value() : string;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * A program element annotated &#64;Deprecated is one that programmers are
     * discouraged from using, typically because it is dangerous, or because a
     * better alternative exists. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Deprecated.html">[Sun
     * docs]</a>
     */
    export interface Deprecated {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.annotation {
    /**
     * Enumerates types of declared elements in a Java program <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/ElementType.html">[Sun
     * docs]</a>.
     */
    export enum ElementType {
        ANNOTATION_TYPE, CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Represents a sequence of objects. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html">[Sun docs]</a>
     * 
     * @param <E> element type
     */
    export interface List<E> extends java.util.Collection<E> {
        add(index? : any, element? : any) : any;

        addAll(index? : any, c? : any) : any;

        clear();

        contains(o : any) : boolean;

        containsAll(c : java.util.Collection<any>) : boolean;

        equals(o : any) : boolean;

        get(index : number) : E;

        hashCode() : number;

        indexOf(o? : any, index? : any) : any;

        isEmpty() : boolean;

        iterator() : java.util.Iterator<E>;

        lastIndexOf(o? : any, index? : any) : any;

        listIterator(from? : any) : any;

        remove(index? : any) : any;

        removeAll(c : java.util.Collection<any>) : boolean;

        retainAll(c : java.util.Collection<any>) : boolean;

        set(index : number, element : E) : E;

        size() : number;

        subList(fromIndex : number, toIndex : number) : List<E>;

        toArray<T>(array? : any) : any;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Linked list implementation.
     * <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/LinkedList.html">
     * [Sun docs]</a>
     * 
     * @param <E>
     * element type.
     */
    export class LinkedList<E> extends java.util.AbstractSequentialList<E> implements java.lang.Cloneable, java.util.List<E>, java.util.Deque<E>, java.io.Serializable {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index157=this.iterator();index157.hasNext();) {
                var t = index157.next();
                {
                    action(t);
                }
            }
        }
        /**
         * Ensures that RPC will consider type parameter E to be exposed. It will be
         * pruned by dead code elimination.
         */
        private exposeElement : E;

        /**
         * Header node - header.next is the first element of the list.
         */
        private header : LinkedList.Node<E>;

        /**
         * Tail node - tail.prev is the last element of the list.
         */
        private tail : LinkedList.Node<E>;

        /**
         * Number of nodes currently present in the list.
         */
        private __size : number;

        public constructor(c? : any) {
            if(((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.List","java.util.Collection","java.util.Queue","java.util.Deque","java.lang.Iterable","java.io.Serializable"] });
                this.__size = 0;
                (() => {
                    this.header = new LinkedList.Node<E>();
                    this.tail = new LinkedList.Node<E>();
                    this.reset();
                    this.addAll(c);
                })();
            } else if(c === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.List","java.util.Collection","java.util.Queue","java.util.Deque","java.lang.Iterable","java.io.Serializable"] });
                this.__size = 0;
                (() => {
                    this.header = new LinkedList.Node<E>();
                    this.tail = new LinkedList.Node<E>();
                    this.reset();
                })();
            } else throw new Error('invalid overload');
        }

        public add$java_lang_Object(o : E) : boolean {
            this.addLast(o);
            return true;
        }

        public addFirst(o : E) {
            this.addNode(o, this.header, this.header.next);
        }

        public addLast(o : E) {
            this.addNode(o, this.tail.prev, this.tail);
        }

        public clear() {
            this.reset();
        }

        reset() {
            this.header.next = this.tail;
            this.tail.prev = this.header;
            this.header.prev = this.tail.next = null;
            this.__size = 0;
        }

        public clone() : any {
            return new LinkedList<E>(this);
        }

        public descendingIterator() : java.util.Iterator<E> {
            return new LinkedList.DescendingIteratorImpl(this);
        }

        public element() : E {
            return this.getFirst();
        }

        public getFirst() : E {
            javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
            return this.header.next.value;
        }

        public getLast() : E {
            javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
            return this.tail.prev.value;
        }

        public listIterator(index? : any) : any {
            if(((typeof index === 'number') || index === null)) {
                return <any>(() => {
                    javaemul.internal.InternalPreconditions.checkPositionIndex(index, this.__size);
                    var node : LinkedList.Node<E>;
                    if(index >= this.__size >> 1) {
                        node = this.tail;
                        for(var i : number = this.__size; i > index; --i) {
                            node = node.prev;
                        }
                    } else {
                        node = this.header.next;
                        for(var i : number = 0; i < index; ++i) {
                            node = node.next;
                        }
                    }
                    return new LinkedList.ListIteratorImpl2(this, index, node);
                })();
            } else if(index === undefined) {
                return <any>this.listIterator$();
            } else throw new Error('invalid overload');
        }

        public offer(o : E) : boolean {
            return this.offerLast(o);
        }

        public offerFirst(e : E) : boolean {
            this.addFirst(e);
            return true;
        }

        public offerLast(e : E) : boolean {
            this.addLast(e);
            return true;
        }

        public peek() : E {
            return this.peekFirst();
        }

        public peekFirst() : E {
            return this.__size === 0?null:this.getFirst();
        }

        public peekLast() : E {
            return this.__size === 0?null:this.getLast();
        }

        public poll() : E {
            return this.pollFirst();
        }

        public pollFirst() : E {
            return this.__size === 0?null:this.removeFirst();
        }

        public pollLast() : E {
            return this.__size === 0?null:this.removeLast();
        }

        public pop() : E {
            return this.removeFirst();
        }

        public push(e : E) {
            this.addFirst(e);
        }

        public remove$() : E {
            return this.removeFirst();
        }

        public removeFirst() : E {
            javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
            return this.removeNode(this.header.next);
        }

        public removeFirstOccurrence(o : any) : boolean {
            return this.remove(o);
        }

        public removeLast() : E {
            javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
            return this.removeNode(this.tail.prev);
        }

        public removeLastOccurrence(o : any) : boolean {
            for(var e : LinkedList.Node<E> = this.tail.prev; e !== this.header; e = e.prev) {
                if(java.util.Objects.equals(e.value, o)) {
                    this.removeNode(e);
                    return true;
                }
            }
            return false;
        }

        public size() : number {
            return this.__size;
        }

        addNode(o : E, prev : LinkedList.Node<E>, next : LinkedList.Node<E>) {
            var node : LinkedList.Node<E> = new LinkedList.Node<E>();
            node.value = o;
            node.prev = prev;
            node.next = next;
            next.prev = prev.next = node;
            ++this.__size;
        }

        removeNode(node : LinkedList.Node<E>) : E {
            var oldValue : E = node.value;
            node.next.prev = node.prev;
            node.prev.next = node.next;
            node.next = node.prev = null;
            node.value = null;
            --this.__size;
            return oldValue;
        }
    }

    export namespace LinkedList {

        export class DescendingIteratorImpl implements java.util.Iterator<any> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            itr : java.util.ListIterator<any>;

            public hasNext() : boolean {
                return this.itr.hasPrevious();
            }

            public next() : any {
                return this.itr.previous();
            }

            public remove() {
                this.itr.remove();
            }

            constructor(__parent: any) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                this.__parent = __parent;
                this.itr = new LinkedList.ListIteratorImpl2(this.__parent, this.__parent.__size, this.__parent.tail);
            }
        }

        /**
         * Implementation of ListIterator for linked lists.
         */
        export class ListIteratorImpl2 implements java.util.ListIterator<any> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            /**
             * The index to the current position.
             */
            currentIndex : number;

            /**
             * Current node, to be returned from next.
             */
            currentNode : LinkedList.Node<any>;

            /**
             * The last node returned from next/previous, or null if deleted or
             * never called.
             */
            lastNode : LinkedList.Node<any>;

            /**
             * @param index
             * from the beginning of the list (0 = first node)
             * @param startNode
             * the initial current node
             */
            public constructor(__parent: any, index : number, startNode : LinkedList.Node<any>) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator","java.util.ListIterator"] });
                this.__parent = __parent;
                this.currentIndex = 0;
                this.lastNode = null;
                this.currentNode = startNode;
                this.currentIndex = index;
            }

            public add(o : any) {
                this.__parent.addNode(o, this.currentNode.prev, this.currentNode);
                ++this.currentIndex;
                this.lastNode = null;
            }

            public hasNext() : boolean {
                return this.currentNode !== this.__parent.tail;
            }

            public hasPrevious() : boolean {
                return this.currentNode.prev !== this.__parent.header;
            }

            public next() : any {
                javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                this.lastNode = this.currentNode;
                this.currentNode = this.currentNode.next;
                ++this.currentIndex;
                return this.lastNode.value;
            }

            public nextIndex() : number {
                return this.currentIndex;
            }

            public previous() : any {
                javaemul.internal.InternalPreconditions.checkElement(this.hasPrevious());
                this.lastNode = this.currentNode = this.currentNode.prev;
                --this.currentIndex;
                return this.lastNode.value;
            }

            public previousIndex() : number {
                return this.currentIndex - 1;
            }

            public remove() {
                javaemul.internal.InternalPreconditions.checkState(this.lastNode != null);
                var nextNode : LinkedList.Node<any> = this.lastNode.next;
                this.__parent.removeNode(this.lastNode);
                if(this.currentNode === this.lastNode) {
                    this.currentNode = nextNode;
                } else {
                    --this.currentIndex;
                }
                this.lastNode = null;
            }

            public set(o : any) {
                javaemul.internal.InternalPreconditions.checkState(this.lastNode != null);
                this.lastNode.value = o;
            }
        }

        /**
         * Internal class representing a doubly-linked list node.
         * 
         * @param <E>
         * element type
         */
        export class Node<E> {
            public next : LinkedList.Node<E>;

            public prev : LinkedList.Node<E>;

            public value : E;

            constructor() {
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace test {
    export class Test {
        public static assertEquals(o1 : any, o2 : any) {
            if(!(o1 === o2)) {
                throw new Error("invalid assertion: " + o1 + "!=" + o2);
            }
        }

        public static assertTrue(b : boolean) {
            if(!b) {
                throw new Error("invalid assertion");
            }
        }

        public static assertFalse(b : boolean) {
            if(b) {
                throw new Error("invalid assertion");
            }
        }

        public static test() {
            try {
                Test.testList();
                Test.testMap();
                Test.testSet();
                Test.testString();
                Test.testIO();
                var result : HTMLElement = document.getElementById("result");
                if(result != null) {
                    result.innerHTML = "Success!";
                }
            } catch(e) {
                var result : HTMLElement = document.getElementById("result");
                if(result != null) {
                    result.innerHTML = "Failure: " + e.message;
                }
            };
        }

        public static testList() {
            console.info("testing lists");
            var l : java.util.List<string> = new java.util.ArrayList<string>();
            l.add("a");
            l.add("b");
            l.add("c");
            Test.assertEquals(l.toString(), "[a, b, c]");
            Test.assertEquals(l.subList(1, 3).toString(), "[b, c]");
            Test.assertEquals(l.remove("b"), true);
            Test.assertEquals(l.remove("d"), false);
            Test.assertEquals(l.remove(1), "c");
            l.add("c");
            Test.assertEquals(l.toString(), "[a, c]");
            Test.assertEquals(l.size(), 2);
            Test.assertEquals(l.get(1), "c");
            Test.assertEquals(l.indexOf("a"), 0);
            var res : string = "";
            for(var index158=l.iterator();index158.hasNext();) {
                var s = index158.next();
                {
                    res += s;
                }
            }
            Test.assertEquals("ac", res);
            var it : java.util.Iterator<string> = l.iterator();
            Test.assertTrue(it.hasNext());
            Test.assertEquals("a", it.next());
            Test.assertTrue(it.hasNext());
            Test.assertEquals("c", it.next());
            Test.assertFalse(it.hasNext());
            console.info("end testing lists");
        }

        public static testSet() {
            console.info("testing sets");
            var s : java.util.Set<string> = new java.util.HashSet<string>();
            s.add("a");
            s.add("a");
            s.add("b");
            s.add("c");
            s.add("c");
            Test.assertEquals(s.toString(), "[a, b, c]");
            s.remove("b");
            Test.assertTrue(s.contains("a"));
            Test.assertTrue(s.contains("c"));
            Test.assertFalse(s.contains("b"));
            Test.assertEquals(s.size(), 2);
            console.info("end testing sets");
        }

        public static testMap() {
            console.info("testing maps");
            var m : java.util.Map<string, string> = new java.util.HashMap<string, string>();
            m.put("a", "aa");
            m.put("b", "bb");
            m.put("c", "cc");
            Test.assertEquals(m.size(), 3);
            Test.assertEquals("bb", m.get("b"));
            m.remove("aa");
            Test.assertEquals(m.size(), 3);
            m.remove("a");
            Test.assertEquals(m.size(), 2);
            console.info("end testing maps");
        }

        public static testString() {
            console.info("testing strings");
            var sb : java.lang.StringBuilder = new java.lang.StringBuilder();
            sb.append(true);
            sb.append('c');
            sb.append("test");
            sb.deleteCharAt(sb.length() - 1);
            Test.assertEquals("truectes", sb.toString());
            sb.append("abc", 0, 1);
            Test.assertEquals("truectesa", sb.toString());
            var sb2 : java.lang.StringBuffer = new java.lang.StringBuffer();
            sb2.append(true);
            sb2.append('c');
            sb2.append("test");
            sb2.deleteCharAt(sb2.length() - 1);
            Test.assertEquals("truectes", sb2.toString());
            console.info("end testing strings");
        }

        public static testIO() {
            console.info("testing io");
            var s : java.io.ByteArrayInputStream = new java.io.ByteArrayInputStream(/* getBytes */("abc").split('').map(s => s.charCodeAt(0)));
            Test.assertEquals(javaemul.internal.CharacterHelper.getNumericValue('a'), s.read());
            console.info("end testing io");
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * A fast way to create strings using multiple appends.
     * 
     * This class is an exact clone of {@link StringBuilder} except for the name.
     * Any change made to one should be mirrored in the other.
     */
    export class StringBuffer extends java.lang.AbstractStringBuilder implements java.lang.CharSequence, java.lang.Appendable {
        public constructor(s? : any) {
            if(((typeof s === 'string') || s === null)) {
                super(s);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence","java.lang.Appendable"] });
                (() => {
                })();
            } else if(((s != null && (s["__interfaces"] != null && s["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof s === "string")) || s === null)) {
                super(/* valueOf */new String(s).toString());
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence","java.lang.Appendable"] });
                (() => {
                })();
            } else if(((typeof s === 'number') || s === null)) {
                var ignoredCapacity : any = s;
                super("");
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence","java.lang.Appendable"] });
                (() => {
                })();
            } else if(s === undefined) {
                super("");
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence","java.lang.Appendable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public append$boolean(x : boolean) : java.lang.StringBuffer {
            this.string += x;
            return this;
        }

        public append$char(x : string) : java.lang.StringBuffer {
            this.string += x;
            return this;
        }

        public append$char_A(x : string[]) : java.lang.StringBuffer {
            this.string += /* valueOf */new String(x).toString();
            return this;
        }

        public append(x? : any, start? : any, len? : any) : any {
            if(((x != null && x instanceof Array) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
                return <any>(() => {
                    this.string += /* valueOf */((str, index, len) => str.join('').substring(index, index + len))(x, start, len);
                    return this;
                })();
            } else if(((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
                return <any>this.append$java_lang_CharSequence$int$int(x, start, len);
            } else if(((x != null && x instanceof Array) || x === null) && start === undefined && len === undefined) {
                return <any>this.append$char_A(x);
            } else if(((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$java_lang_String(x);
            } else if(((x != null && x instanceof java.lang.StringBuffer) || x === null) && start === undefined && len === undefined) {
                return <any>this.append$java_lang_StringBuffer(x);
            } else if(((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && start === undefined && len === undefined) {
                return <any>this.append$java_lang_CharSequence(x);
            } else if(((typeof x === 'boolean') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$boolean(x);
            } else if(((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$char(x);
            } else if(((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$int(x);
            } else if(((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$long(x);
            } else if(((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$float(x);
            } else if(((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                return <any>this.append$double(x);
            } else if(((x != null) || x === null) && start === undefined && len === undefined) {
                return <any>this.append$java_lang_Object(x);
            } else throw new Error('invalid overload');
        }

        public append$java_lang_CharSequence(x : string) : java.lang.StringBuffer {
            this.string += x;
            return this;
        }

        public append$java_lang_CharSequence$int$int(x : string, start : number, end : number) : java.lang.StringBuffer {
            this.append0(x, start, end);
            return this;
        }

        public append$double(x : number) : java.lang.StringBuffer {
            this.string += x;
            return this;
        }

        public append$float(x : number) : java.lang.StringBuffer {
            this.string += x;
            return this;
        }

        public append$int(x : number) : java.lang.StringBuffer {
            this.string += x;
            return this;
        }

        public append$long(x : number) : java.lang.StringBuffer {
            this.string += x;
            return this;
        }

        public append$java_lang_Object(x : any) : java.lang.StringBuffer {
            this.string += x;
            return this;
        }

        public append$java_lang_String(x : string) : java.lang.StringBuffer {
            this.string += x;
            return this;
        }

        public append$java_lang_StringBuffer(x : java.lang.StringBuffer) : java.lang.StringBuffer {
            this.string += x;
            return this;
        }

        public appendCodePoint(x : number) : java.lang.StringBuffer {
            this.appendCodePoint0(x);
            return this;
        }

        public delete(start : number, end : number) : java.lang.StringBuffer {
            this.replace0(start, end, "");
            return this;
        }

        public deleteCharAt(start : number) : java.lang.StringBuffer {
            this.replace0(start, start + 1, "");
            return this;
        }

        public insert$int$boolean(index : number, x : boolean) : java.lang.StringBuffer {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$char(index : number, x : string) : java.lang.StringBuffer {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$char_A(index : number, x : string[]) : java.lang.StringBuffer {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert(index? : any, x? : any, offset? : any, len? : any) : any {
            if(((typeof index === 'number') || index === null) && ((x != null && x instanceof Array) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                return <any>(() => {
                    return this.insert(index, /* valueOf */((str, index, len) => str.join('').substring(index, index + len))(x, offset, len));
                })();
            } else if(((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                return <any>this.insert$int$java_lang_CharSequence$int$int(index, x, offset, len);
            } else if(((typeof index === 'number') || index === null) && ((x != null && x instanceof Array) || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$char_A(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$java_lang_String(index, x);
            } else if(((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$java_lang_CharSequence(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'boolean') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$boolean(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$char(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$int(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$long(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$float(index, x);
            } else if(((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$double(index, x);
            } else if(((typeof index === 'number') || index === null) && ((x != null) || x === null) && offset === undefined && len === undefined) {
                return <any>this.insert$int$java_lang_Object(index, x);
            } else throw new Error('invalid overload');
        }

        public insert$int$java_lang_CharSequence(index : number, chars : string) : java.lang.StringBuffer {
            return this.insert(index, chars.toString());
        }

        public insert$int$java_lang_CharSequence$int$int(index : number, chars : string, start : number, end : number) : java.lang.StringBuffer {
            return this.insert(index, /* subSequence */chars.substring(start, end).toString());
        }

        public insert$int$double(index : number, x : number) : java.lang.StringBuffer {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$float(index : number, x : number) : java.lang.StringBuffer {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$int(index : number, x : number) : java.lang.StringBuffer {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$long(index : number, x : number) : java.lang.StringBuffer {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$java_lang_Object(index : number, x : any) : java.lang.StringBuffer {
            return this.insert(index, /* valueOf */new String(x).toString());
        }

        public insert$int$java_lang_String(index : number, x : string) : java.lang.StringBuffer {
            this.replace0(index, index, x);
            return this;
        }

        public replace(start : number, end : number, toInsert : string) : java.lang.StringBuffer {
            this.replace0(start, end, toInsert);
            return this;
        }

        public reverse() : java.lang.StringBuffer {
            this.reverse0();
            return this;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Skeletal implementation of the Set interface. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractSet.html">[Sun
     * docs]</a>
     * 
     * @param <E> the element type.
     */
    export abstract class AbstractSet<E> extends java.util.AbstractCollection<E> implements java.util.Set<E> {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index159=this.iterator();index159.hasNext();) {
                var t = index159.next();
                {
                    action(t);
                }
            }
        }
        public abstract iterator(): any;
        public abstract size(): any;
        public equals(o : any) : boolean {
            if(o === this) {
                return true;
            }
            if(!(o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Set") >= 0)) {
                return false;
            }
            var other : java.util.Set<any> = <java.util.Set<any>>o;
            if(other.size() !== this.size()) {
                return false;
            }
            return this.containsAll(other);
        }

        public hashCode() : number {
            return java.util.Collections.hashCode(this);
        }

        public removeAll(c : java.util.Collection<any>) : boolean {
            javaemul.internal.InternalPreconditions.checkNotNull(c);
            var size : number = this.size();
            if(size < c.size()) {
                for(var iter : java.util.Iterator<E> = this.iterator(); iter.hasNext(); ) {
                    var o : E = iter.next();
                    if(c.contains(o)) {
                        iter.remove();
                    }
                }
            } else {
                for(var index160=c.iterator();index160.hasNext();) {
                    var o1 = index160.next();
                    {
                        this.remove(o1);
                    }
                }
            }
            return (size !== this.size());
        }

        constructor() {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Implements a set using a TreeMap. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/TreeSet.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export class TreeSet<E> extends java.util.AbstractSet<E> implements java.util.NavigableSet<E>, java.io.Serializable {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index161=this.iterator();index161.hasNext();) {
                var t = index161.next();
                {
                    action(t);
                }
            }
        }
        /**
         * TreeSet is stored as a TreeMap of the requested type to a constant Boolean.
         */
        private map : java.util.NavigableMap<E, boolean>;

        public constructor(c? : any) {
            if(((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                {
                    super();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet","java.util.Collection","java.util.Set","java.util.NavigableSet","java.lang.Iterable","java.io.Serializable"] });
                    (() => {
                        this.map = new java.util.TreeMap<E, boolean>();
                    })();
                }
                (() => {
                    this.addAll(c);
                })();
            } else if(((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Comparator") >= 0) || c === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet","java.util.Collection","java.util.Set","java.util.NavigableSet","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.map = new java.util.TreeMap<E, boolean>(c);
                })();
            } else if(((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.SortedSet") >= 0) || c === null)) {
                var s : any = c;
                {
                    var c : any = javaemul.internal.InternalPreconditions.checkNotNull(s).comparator();
                    super();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet","java.util.Collection","java.util.Set","java.util.NavigableSet","java.lang.Iterable","java.io.Serializable"] });
                    (() => {
                        this.map = new java.util.TreeMap<E, boolean>(c);
                    })();
                }
                (() => {
                    this.addAll(s);
                })();
            } else if(((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.NavigableMap") >= 0) || c === null)) {
                var map : any = c;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet","java.util.Collection","java.util.Set","java.util.NavigableSet","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.map = map;
                })();
            } else if(c === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet","java.util.Collection","java.util.Set","java.util.NavigableSet","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.map = new java.util.TreeMap<E, boolean>();
                })();
            } else throw new Error('invalid overload');
        }

        public add(index? : any, element? : any) : any {
            if(((index != null) || index === null) && element === undefined) {
                return <any>this.add$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public add$java_lang_Object(o : E) : boolean {
            return this.map.put(o, javaemul.internal.BooleanHelper.FALSE) == null;
        }

        public ceiling(e : E) : E {
            return this.map.ceilingKey(e);
        }

        public clear() {
            this.map.clear();
        }

        public comparator() : java.util.Comparator<any> {
            return this.map.comparator();
        }

        public contains(o : any) : boolean {
            return this.map.containsKey(o);
        }

        public descendingIterator() : java.util.Iterator<E> {
            return this.descendingSet().iterator();
        }

        public descendingSet() : java.util.NavigableSet<E> {
            return new TreeSet<E>(this.map.descendingMap());
        }

        public first() : E {
            return this.map.firstKey();
        }

        public floor(e : E) : E {
            return this.map.floorKey(e);
        }

        public headSet$java_lang_Object(toElement : E) : java.util.SortedSet<E> {
            return this.headSet(toElement, false);
        }

        public headSet(toElement? : any, inclusive? : any) : any {
            if(((toElement != null) || toElement === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                return <any>(() => {
                    return new TreeSet<E>(this.map.headMap(toElement, inclusive));
                })();
            } else if(((toElement != null) || toElement === null) && inclusive === undefined) {
                return <any>this.headSet$java_lang_Object(toElement);
            } else throw new Error('invalid overload');
        }

        public higher(e : E) : E {
            return this.map.higherKey(e);
        }

        public iterator() : java.util.Iterator<E> {
            return this.map.keySet().iterator();
        }

        public last() : E {
            return this.map.lastKey();
        }

        public lower(e : E) : E {
            return this.map.lowerKey(e);
        }

        public pollFirst() : E {
            return java.util.AbstractMap.getEntryKeyOrNull<any, any>(this.map.pollFirstEntry());
        }

        public pollLast() : E {
            return java.util.AbstractMap.getEntryKeyOrNull<any, any>(this.map.pollLastEntry());
        }

        public remove(index? : any) : any {
            if(((index != null) || index === null)) {
                return <any>this.remove$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public remove$java_lang_Object(o : any) : boolean {
            return this.map.remove(o) != null;
        }

        public size() : number {
            return this.map.size();
        }

        public subSet(fromElement? : any, fromInclusive? : any, toElement? : any, toInclusive? : any) : any {
            if(((fromElement != null) || fromElement === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null) && ((toElement != null) || toElement === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                return <any>(() => {
                    return new TreeSet<E>(this.map.subMap(fromElement, fromInclusive, toElement, toInclusive));
                })();
            } else if(((fromElement != null) || fromElement === null) && ((fromInclusive != null) || fromInclusive === null) && toElement === undefined && toInclusive === undefined) {
                return <any>this.subSet$java_lang_Object$java_lang_Object(fromElement, fromInclusive);
            } else throw new Error('invalid overload');
        }

        public subSet$java_lang_Object$java_lang_Object(fromElement : E, toElement : E) : java.util.SortedSet<E> {
            return this.subSet(fromElement, true, toElement, false);
        }

        public tailSet$java_lang_Object(fromElement : E) : java.util.SortedSet<E> {
            return this.tailSet(fromElement, true);
        }

        public tailSet(fromElement? : any, inclusive? : any) : any {
            if(((fromElement != null) || fromElement === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                return <any>(() => {
                    return new TreeSet<E>(this.map.tailMap(fromElement, inclusive));
                })();
            } else if(((fromElement != null) || fromElement === null) && inclusive === undefined) {
                return <any>this.tailSet$java_lang_Object(fromElement);
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Skeletal implementation of the Map interface.
     * <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractMap.html">
     * [Sun docs]</a>
     * 
     * @param <K>
     * the key type.
     * @param <V>
     * the value type.
     */
    export abstract class AbstractMap<K, V> implements java.util.Map<K, V> {
        constructor() {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
        }

        public clear() {
            this.entrySet().clear();
        }

        public containsKey(key : any) : boolean {
            return this.implFindEntry(key, false) != null;
        }

        public containsValue(value : any) : boolean {
            for(var index162=this.entrySet().iterator();index162.hasNext();) {
                var entry = index162.next();
                {
                    var v : V = entry.getValue();
                    if(java.util.Objects.equals(value, v)) {
                        return true;
                    }
                }
            }
            return false;
        }

        containsEntry(entry : Map.Entry<any, any>) : boolean {
            var key : any = entry.getKey();
            var value : any = entry.getValue();
            var ourValue : any = this.get(key);
            if(!java.util.Objects.equals(value, ourValue)) {
                return false;
            }
            if(ourValue == null && !this.containsKey(key)) {
                return false;
            }
            return true;
        }

        public abstract entrySet() : java.util.Set<Map.Entry<K, V>>;

        public equals(obj : any) : boolean {
            if(obj === this) {
                return true;
            }
            if(!(obj != null && obj["__interfaces"] != null && obj["__interfaces"].indexOf("java.util.Map") >= 0)) {
                return false;
            }
            var otherMap : java.util.Map<any, any> = <java.util.Map<any, any>>obj;
            if(this.size() !== otherMap.size()) {
                return false;
            }
            for(var index163=otherMap.entrySet().iterator();index163.hasNext();) {
                var entry = index163.next();
                {
                    if(!this.containsEntry(entry)) {
                        return false;
                    }
                }
            }
            return true;
        }

        public get(key : any) : V {
            return AbstractMap.getEntryValueOrNull<any, any>(this.implFindEntry(key, false));
        }

        public hashCode() : number {
            return java.util.Collections.hashCode(this.entrySet());
        }

        public isEmpty() : boolean {
            return this.size() === 0;
        }

        public keySet() : java.util.Set<K> {
            return new AbstractMap.AbstractMap$0(this);
        }

        public put(key? : any, value? : any) : any {
            if(((key != null) || key === null) && ((value != null) || value === null)) {
                return <any>this.put$java_lang_Object$java_lang_Object(key, value);
            } else throw new Error('invalid overload');
        }

        public put$java_lang_Object$java_lang_Object(key : K, value : V) : V {
            throw new java.lang.UnsupportedOperationException("Put not supported on this map");
        }

        public putAll(map : java.util.Map<any, any>) {
            javaemul.internal.InternalPreconditions.checkNotNull(map);
            for(var index164=map.entrySet().iterator();index164.hasNext();) {
                var e = index164.next();
                {
                    this.put(e.getKey(), e.getValue());
                }
            }
        }

        public remove(key : any) : V {
            return AbstractMap.getEntryValueOrNull<any, any>(this.implFindEntry(key, true));
        }

        public size() : number {
            return this.entrySet().size();
        }

        public toString$() : string {
            var joiner : java.util.StringJoiner = new java.util.StringJoiner(", ", "{", "}");
            for(var index165=this.entrySet().iterator();index165.hasNext();) {
                var entry = index165.next();
                {
                    joiner.add(this.toString(entry));
                }
            }
            return joiner.toString();
        }

        public toString(entry? : any) : any {
            if(((entry != null && entry["__interfaces"] != null && entry["__interfaces"].indexOf("java.util.Map.Entry") >= 0) || entry === null)) {
                return <any>(() => {
                    return this.toString(entry.getKey()) + "=" + this.toString(entry.getValue());
                })();
            } else if(((entry != null) || entry === null)) {
                return <any>this.toString$java_lang_Object(entry);
            } else if(entry === undefined) {
                return <any>this.toString$();
            } else throw new Error('invalid overload');
        }

        toString$java_lang_Object(o : any) : string {
            return o === this?"(this Map)":/* valueOf */new String(o).toString();
        }

        public values() : java.util.Collection<V> {
            return new AbstractMap.AbstractMap$1(this);
        }

        static getEntryKeyOrNull<K, V>(entry : Map.Entry<K, V>) : K {
            return entry == null?null:entry.getKey();
        }

        static getEntryValueOrNull<K, V>(entry : Map.Entry<K, V>) : V {
            return entry == null?null:entry.getValue();
        }

        implFindEntry(key : any, remove : boolean) : Map.Entry<K, V> {
            for(var iter : java.util.Iterator<Map.Entry<K, V>> = this.entrySet().iterator(); iter.hasNext(); ) {
                var entry : Map.Entry<K, V> = iter.next();
                var k : K = entry.getKey();
                if(java.util.Objects.equals(key, k)) {
                    if(remove) {
                        entry = new AbstractMap.SimpleEntry<K, V>(entry.getKey(), entry.getValue());
                        iter.remove();
                    }
                    return entry;
                }
            }
            return null;
        }
    }

    export namespace AbstractMap {

        /**
         * Basic {@link Map.Entry} implementation used by {@link SimpleEntry} and
         * {@link SimpleImmutableEntry}.
         */
        export abstract class AbstractEntry<K, V> implements Map.Entry<K, V> {
            key : K;

            value : V;

            constructor(key : K, value : V) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                this.key = key;
                this.value = value;
            }

            public getKey() : K {
                return this.key;
            }

            public getValue() : V {
                return this.value;
            }

            public setValue(value : V) : V {
                var oldValue : V = this.value;
                this.value = value;
                return oldValue;
            }

            public equals(other : any) : boolean {
                if(!(other != null && other["__interfaces"] != null && other["__interfaces"].indexOf("java.util.Map.Entry") >= 0)) {
                    return false;
                }
                var entry : Map.Entry<any, any> = <Map.Entry<any, any>>other;
                return java.util.Objects.equals(this.key, entry.getKey()) && java.util.Objects.equals(this.value, entry.getValue());
            }

            /**
             * Calculate the hash code using Sun's specified algorithm.
             */
            public hashCode() : number {
                return java.util.Objects.hashCode(this.key) ^ java.util.Objects.hashCode(this.value);
            }

            public toString() : string {
                return this.key + "=" + this.value;
            }
        }

        /**
         * A mutable {@link Map.Entry} shared by several {@link Map}
         * implementations.
         */
        export class SimpleEntry<K, V> extends AbstractMap.AbstractEntry<K, V> {
            public constructor(key? : any, value? : any) {
                if(((key != null) || key === null) && ((value != null) || value === null)) {
                    super(key, value);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                    (() => {
                    })();
                } else if(((key != null && key["__interfaces"] != null && key["__interfaces"].indexOf("java.util.Map.Entry") >= 0) || key === null) && value === undefined) {
                    var entry : any = key;
                    super(entry.getKey(), entry.getValue());
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                    (() => {
                    })();
                } else throw new Error('invalid overload');
            }
        }

        /**
         * An immutable {@link Map.Entry} shared by several {@link Map}
         * implementations.
         */
        export class SimpleImmutableEntry<K, V> extends AbstractMap.AbstractEntry<K, V> {
            public constructor(key? : any, value? : any) {
                if(((key != null) || key === null) && ((value != null) || value === null)) {
                    super(key, value);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                    (() => {
                    })();
                } else if(((key != null && key["__interfaces"] != null && key["__interfaces"].indexOf("java.util.Map.Entry") >= 0) || key === null) && value === undefined) {
                    var entry : any = key;
                    super(entry.getKey(), entry.getValue());
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                    (() => {
                    })();
                } else throw new Error('invalid overload');
            }

            public setValue(value : V) : V {
                throw new java.lang.UnsupportedOperationException();
            }
        }

        export class AbstractMap$0 extends java.util.AbstractSet<any> {
            public __parent: any;
            public clear() {
                this.__parent.clear();
            }

            public contains(key : any) : boolean {
                return this.__parent.containsKey(key);
            }

            public iterator() : java.util.Iterator<any> {
                var outerIter : java.util.Iterator<Map.Entry<any, any>> = this.__parent.entrySet().iterator();
                return new AbstractMap$0.AbstractMap$0$0(this, outerIter);
            }

            public remove(key : any) : boolean {
                if(this.__parent.containsKey(key)) {
                    this.__parent.remove(key);
                    return true;
                }
                return false;
            }

            public size() : number {
                return this.__parent.size();
            }

            constructor(__parent: any) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
                this.__parent = __parent;
            }
        }

        export namespace AbstractMap$0 {

            export class AbstractMap$0$0 implements java.util.Iterator<any> {
                public __parent: any;
                forEachRemaining(consumer : (p1: any) => void) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while((this.hasNext())){
                        consumer(this.next());
                    };
                }
                public hasNext() : boolean {
                    return this.outerIter.hasNext();
                }

                public next() : any {
                    var entry : Map.Entry<any, any> = this.outerIter.next();
                    return entry.getKey();
                }

                public remove() {
                    this.outerIter.remove();
                }

                constructor(__parent: any, private outerIter: any) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                }
            }
        }


        export class AbstractMap$1 extends java.util.AbstractCollection<any> {
            public __parent: any;
            public clear() {
                this.__parent.clear();
            }

            public contains(value : any) : boolean {
                return this.__parent.containsValue(value);
            }

            public iterator() : java.util.Iterator<any> {
                var outerIter : java.util.Iterator<Map.Entry<any, any>> = this.__parent.entrySet().iterator();
                return new AbstractMap$1.AbstractMap$1$0(this, outerIter);
            }

            public size() : number {
                return this.__parent.size();
            }

            constructor(__parent: any) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.lang.Iterable"] });
                this.__parent = __parent;
            }
        }

        export namespace AbstractMap$1 {

            export class AbstractMap$1$0 implements java.util.Iterator<any> {
                public __parent: any;
                forEachRemaining(consumer : (p1: any) => void) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while((this.hasNext())){
                        consumer(this.next());
                    };
                }
                public hasNext() : boolean {
                    return this.outerIter.hasNext();
                }

                public next() : any {
                    var entry : Map.Entry<any, any> = this.outerIter.next();
                    return entry.getValue();
                }

                public remove() {
                    this.outerIter.remove();
                }

                constructor(__parent: any, private outerIter: any) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                }
            }
        }

    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A {@link java.util.Map} of {@link Enum}s. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/EnumMap.html">[Sun
     * docs]</a>
     * 
     * @param <K> key type
     * @param <V> value type
     */
    export class EnumMap<K extends java.lang.Enum<K>, V> extends java.util.AbstractMap<K, V> {
        private __keySet : java.util.EnumSet<K>;

        private __values : V[];

        public constructor(type? : any) {
            if(((type != null && type instanceof java.lang.Class) || type === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                (() => {
                    this.init(type);
                })();
            } else if(((type != null && type instanceof java.util.EnumMap) || type === null)) {
                var m : any = type;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                (() => {
                    this.init(m);
                })();
            } else if(((type != null && type["__interfaces"] != null && type["__interfaces"].indexOf("java.util.Map") >= 0) || type === null)) {
                var m : any = type;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                (() => {
                    if(m != null && m instanceof java.util.EnumMap) {
                        this.init(<EnumMap<K, any>>m);
                    } else {
                        javaemul.internal.InternalPreconditions.checkArgument(!m.isEmpty(), "Specified map is empty");
                        this.init(m.keySet().iterator().next().getDeclaringClass());
                        this.putAll(m);
                    }
                })();
            } else throw new Error('invalid overload');
        }

        public clear() {
            this.__keySet.clear();
            this.__values = <V[]>new Array(this.__values.length);
        }

        public clone() : EnumMap<K, V> {
            return new EnumMap<K, V>(this);
        }

        public containsKey(key : any) : boolean {
            return this.__keySet.contains(key);
        }

        public containsValue(value : any) : boolean {
            for(var index166=this.__keySet.iterator();index166.hasNext();) {
                var key = index166.next();
                {
                    if(java.util.Objects.equals(value, this.__values[key.ordinal()])) {
                        return true;
                    }
                }
            }
            return false;
        }

        public entrySet() : java.util.Set<java.util.Map.Entry<K, V>> {
            return new EnumMap.EntrySet(this);
        }

        public get(k : any) : V {
            return this.__keySet.contains(k)?this.__values[this.asOrdinal(k)]:null;
        }

        public put(key? : any, value? : any) : any {
            if(((key != null) || key === null) && ((value != null) || value === null)) {
                return <any>(() => {
                    this.__keySet.add(key);
                    return this.set(key.ordinal(), value);
                })();
            } else if(((key != null) || key === null) && ((value != null) || value === null)) {
                return <any>this.put$java_lang_Object$java_lang_Object(key, value);
            } else throw new Error('invalid overload');
        }

        public remove(key : any) : V {
            return this.__keySet.remove(key)?this.set(this.asOrdinal(key), null):null;
        }

        public size() : number {
            return this.__keySet.size();
        }

        /**
         * Returns <code>key</code> as <code>K</code>. Only runtime checks that
         * key is an Enum, not that it's the particular Enum K. Should only be called
         * when you are sure <code>key</code> is of type <code>K</code>.
         */
        asKey(key : any) : K {
            return <K>key;
        }

        asOrdinal(key : any) : number {
            return this.asKey(key).ordinal();
        }

        public init(type? : any) : any {
            if(((type != null && type instanceof java.lang.Class) || type === null)) {
                return <any>(() => {
                    this.__keySet = java.util.EnumSet.noneOf<any>(type);
                    this.__values = <V[]>new Array(this.__keySet.capacity());
                })();
            } else if(((type != null && type instanceof java.util.EnumMap) || type === null)) {
                return <any>this.init$java_util_EnumMap(type);
            } else throw new Error('invalid overload');
        }

        init$java_util_EnumMap(m : EnumMap<K, any>) {
            this.__keySet = m.__keySet.clone();
            this.__values = javaemul.internal.ArrayHelper.clone<any>(m.__values, 0, m.__values.length);
        }

        set(ordinal : number, value : V) : V {
            var was : V = this.__values[ordinal];
            this.__values[ordinal] = value;
            return was;
        }
    }

    export namespace EnumMap {

        export class EntrySet extends java.util.AbstractSet<Map.Entry<any, any>> {
            public __parent: any;
            public clear() {
                this.__parent.clear();
            }

            public contains(o : any) : boolean {
                if(o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0) {
                    return this.__parent.containsEntry(<java.util.Map.Entry<any, any>>o);
                }
                return false;
            }

            public iterator() : java.util.Iterator<Map.Entry<any, any>> {
                return new EnumMap.EntrySetIterator(this.__parent);
            }

            public remove(index? : any) : any {
                if(((index != null) || index === null)) {
                    return <any>this.remove$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public remove$java_lang_Object(entry : any) : boolean {
                if(this.contains(entry)) {
                    var key : any = (<java.util.Map.Entry<any, any>>entry).getKey();
                    this.__parent.remove(key);
                    return true;
                }
                return false;
            }

            public size() : number {
                return this.__parent.size();
            }

            constructor(__parent: any) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
                this.__parent = __parent;
            }
        }

        export class EntrySetIterator implements java.util.Iterator<Map.Entry<any, any>> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            it : java.util.Iterator<any>;

            key : any;

            public hasNext() : boolean {
                return this.it.hasNext();
            }

            public next() : Map.Entry<any, any> {
                this.key = this.it.next();
                return new EnumMap.MapEntry(this.__parent, this.key);
            }

            public remove() {
                javaemul.internal.InternalPreconditions.checkState(this.key != null);
                this.__parent.remove(this.key);
                this.key = null;
            }

            constructor(__parent: any) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                this.__parent = __parent;
                this.it = this.__parent.__keySet.iterator();
            }
        }

        export class MapEntry extends java.util.AbstractMapEntry<any, any> {
            public __parent: any;
            key : any;

            public constructor(__parent: any, key : any) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                this.__parent = __parent;
                this.key = key;
            }

            public getKey() : any {
                return this.key;
            }

            public getValue() : any {
                return this.__parent.__values[this.key.ordinal()];
            }

            public setValue(value : any) : any {
                return this.__parent.set(this.key.ordinal(), value);
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Skeletal implementation of a NavigableMap.
     */
    export abstract class AbstractNavigableMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.NavigableMap<K, V> {
        public abstract comparator(): any;
        static copyOf<K, V>(entry : Map.Entry<K, V>) : Map.Entry<K, V> {
            return entry == null?null:new AbstractMap.SimpleImmutableEntry<K, V>(entry);
        }

        static getKeyOrNSE<K, V>(entry : Map.Entry<K, V>) : K {
            if(entry == null) {
                throw new java.util.NoSuchElementException();
            }
            return entry.getKey();
        }

        public ceilingEntry(key : K) : Map.Entry<K, V> {
            return AbstractNavigableMap.copyOf<any, any>(this.getCeilingEntry(key));
        }

        public ceilingKey(key : K) : K {
            return AbstractMap.getEntryKeyOrNull<any, any>(this.getCeilingEntry(key));
        }

        public containsKey(k : any) : boolean {
            var key : K = <K>k;
            return this.getEntry(key) != null;
        }

        public descendingKeySet() : java.util.NavigableSet<K> {
            return this.descendingMap().navigableKeySet();
        }

        public descendingMap() : java.util.NavigableMap<K, V> {
            return new AbstractNavigableMap.DescendingMap(this);
        }

        public entrySet() : java.util.Set<Map.Entry<K, V>> {
            return new AbstractNavigableMap.EntrySet(this);
        }

        public firstEntry() : Map.Entry<K, V> {
            return AbstractNavigableMap.copyOf<any, any>(this.getFirstEntry());
        }

        public firstKey() : K {
            return AbstractNavigableMap.getKeyOrNSE<any, any>(this.getFirstEntry());
        }

        public floorEntry(key : K) : Map.Entry<K, V> {
            return AbstractNavigableMap.copyOf<any, any>(this.getFloorEntry(key));
        }

        public floorKey(key : K) : K {
            return AbstractMap.getEntryKeyOrNull<any, any>(this.getFloorEntry(key));
        }

        public get(k : any) : V {
            var key : K = <K>k;
            return AbstractMap.getEntryValueOrNull<any, any>(this.getEntry(key));
        }

        public headMap(toKey? : any, inclusive? : any) : any {
            if(((toKey != null) || toKey === null) && inclusive === undefined) {
                return <any>this.headMap$java_lang_Object(toKey);
            } else throw new Error('invalid overload');
        }

        public headMap$java_lang_Object(toKey : K) : java.util.SortedMap<K, V> {
            return this.headMap(toKey, false);
        }

        public higherEntry(key : K) : Map.Entry<K, V> {
            return AbstractNavigableMap.copyOf<any, any>(this.getHigherEntry(key));
        }

        public higherKey(key : K) : K {
            return AbstractMap.getEntryKeyOrNull<any, any>(this.getHigherEntry(key));
        }

        public keySet() : java.util.Set<K> {
            return this.navigableKeySet();
        }

        public lastEntry() : Map.Entry<K, V> {
            return AbstractNavigableMap.copyOf<any, any>(this.getLastEntry());
        }

        public lastKey() : K {
            return AbstractNavigableMap.getKeyOrNSE<any, any>(this.getLastEntry());
        }

        public lowerEntry(key : K) : Map.Entry<K, V> {
            return AbstractNavigableMap.copyOf<any, any>(this.getLowerEntry(key));
        }

        public lowerKey(key : K) : K {
            return AbstractMap.getEntryKeyOrNull<any, any>(this.getLowerEntry(key));
        }

        public navigableKeySet() : java.util.NavigableSet<K> {
            return new AbstractNavigableMap.NavigableKeySet<K, V>(this);
        }

        public pollFirstEntry() : Map.Entry<K, V> {
            return this.pollEntry(this.getFirstEntry());
        }

        public pollLastEntry() : Map.Entry<K, V> {
            return this.pollEntry(this.getLastEntry());
        }

        public subMap(fromKey? : any, fromInclusive? : any, toKey? : any, toInclusive? : any) : any {
            if(((fromKey != null) || fromKey === null) && ((fromInclusive != null) || fromInclusive === null) && toKey === undefined && toInclusive === undefined) {
                return <any>this.subMap$java_lang_Object$java_lang_Object(fromKey, fromInclusive);
            } else throw new Error('invalid overload');
        }

        public subMap$java_lang_Object$java_lang_Object(fromKey : K, toKey : K) : java.util.SortedMap<K, V> {
            return this.subMap(fromKey, true, toKey, false);
        }

        public tailMap(fromKey? : any, inclusive? : any) : any {
            if(((fromKey != null) || fromKey === null) && inclusive === undefined) {
                return <any>this.tailMap$java_lang_Object(fromKey);
            } else throw new Error('invalid overload');
        }

        public tailMap$java_lang_Object(fromKey : K) : java.util.SortedMap<K, V> {
            return this.tailMap(fromKey, true);
        }

        containsEntry(entry : Map.Entry<any, any>) : boolean {
            var key : K = <K>entry.getKey();
            var lookupEntry : Map.Entry<K, V> = this.getEntry(key);
            return lookupEntry != null && java.util.Objects.equals(lookupEntry.getValue(), entry.getValue());
        }

        /**
         * Returns an iterator over the entries in this map in descending order.
         */
        abstract descendingEntryIterator() : java.util.Iterator<Map.Entry<K, V>>;

        /**
         * Returns an iterator over the entries in this map in ascending order.
         */
        abstract entryIterator() : java.util.Iterator<Map.Entry<K, V>>;

        /**
         * Returns the entry corresponding to the specified key. If no such entry exists returns
         * {@code null}.
         */
        abstract getEntry(key : K) : Map.Entry<K, V>;

        /**
         * Returns the first entry or {@code null} if map is empty.
         */
        abstract getFirstEntry() : Map.Entry<K, V>;

        /**
         * Returns the last entry or {@code null} if map is empty.
         */
        abstract getLastEntry() : Map.Entry<K, V>;

        /**
         * Gets the entry corresponding to the specified key or the entry for the least key greater than
         * the specified key. If no such entry exists returns {@code null}.
         */
        abstract getCeilingEntry(key : K) : Map.Entry<K, V>;

        /**
         * Gets the entry corresponding to the specified key or the entry for the greatest key less than
         * the specified key. If no such entry exists returns {@code null}.
         */
        abstract getFloorEntry(key : K) : Map.Entry<K, V>;

        /**
         * Gets the entry for the least key greater than the specified key. If no such entry exists
         * returns {@code null}.
         */
        abstract getHigherEntry(key : K) : Map.Entry<K, V>;

        /**
         * Returns the entry for the greatest key less than the specified key. If no such entry exists
         * returns {@code null}.
         */
        abstract getLowerEntry(key : K) : Map.Entry<K, V>;

        /**
         * Remove an entry from the tree, returning whether it was found.
         */
        abstract removeEntry(entry : Map.Entry<K, V>) : boolean;

        pollEntry(entry : Map.Entry<K, V>) : Map.Entry<K, V> {
            if(entry != null) {
                this.removeEntry(entry);
            }
            return AbstractNavigableMap.copyOf<any, any>(entry);
        }

        constructor() {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map","java.util.NavigableMap","java.util.SortedMap"] });
        }
    }

    export namespace AbstractNavigableMap {

        export class DescendingMap extends java.util.AbstractNavigableMap<any, any> {
            public __parent: any;
            public clear() {
                this.ascendingMap().clear();
            }

            public comparator() : java.util.Comparator<any> {
                return java.util.Collections.reverseOrder(this.ascendingMap().comparator());
            }

            public descendingMap() : java.util.NavigableMap<any, any> {
                return this.ascendingMap();
            }

            public headMap(toKey? : any, inclusive? : any) : any {
                if(((toKey != null) || toKey === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                    return <any>(() => {
                        return this.ascendingMap().tailMap(toKey, inclusive).descendingMap();
                    })();
                } else if(((toKey != null) || toKey === null) && inclusive === undefined) {
                    return <any>this.headMap$java_lang_Object(toKey);
                } else throw new Error('invalid overload');
            }

            public put(key? : any, value? : any) : any {
                if(((key != null) || key === null) && ((value != null) || value === null)) {
                    return <any>this.put$java_lang_Object$java_lang_Object(key, value);
                } else throw new Error('invalid overload');
            }

            public put$java_lang_Object$java_lang_Object(key : any, value : any) : any {
                return this.ascendingMap().put(key, value);
            }

            public remove(key : any) : any {
                return this.ascendingMap().remove(key);
            }

            public size() : number {
                return this.ascendingMap().size();
            }

            public subMap(fromKey? : any, fromInclusive? : any, toKey? : any, toInclusive? : any) : any {
                if(((fromKey != null) || fromKey === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null) && ((toKey != null) || toKey === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                    return <any>(() => {
                        return this.ascendingMap().subMap(toKey, toInclusive, fromKey, fromInclusive).descendingMap();
                    })();
                } else if(((fromKey != null) || fromKey === null) && ((fromInclusive != null) || fromInclusive === null) && toKey === undefined && toInclusive === undefined) {
                    return <any>this.subMap$java_lang_Object$java_lang_Object(fromKey, fromInclusive);
                } else throw new Error('invalid overload');
            }

            public tailMap(fromKey? : any, inclusive? : any) : any {
                if(((fromKey != null) || fromKey === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                    return <any>(() => {
                        return this.ascendingMap().headMap(fromKey, inclusive).descendingMap();
                    })();
                } else if(((fromKey != null) || fromKey === null) && inclusive === undefined) {
                    return <any>this.tailMap$java_lang_Object(fromKey);
                } else throw new Error('invalid overload');
            }

            ascendingMap() : java.util.AbstractNavigableMap<any, any> {
                return this.__parent;
            }

            descendingEntryIterator() : java.util.Iterator<Map.Entry<any, any>> {
                return this.ascendingMap().entryIterator();
            }

            entryIterator() : java.util.Iterator<Map.Entry<any, any>> {
                return this.ascendingMap().descendingEntryIterator();
            }

            getEntry(key : any) : Map.Entry<any, any> {
                return this.ascendingMap().getEntry(key);
            }

            getFirstEntry() : Map.Entry<any, any> {
                return this.ascendingMap().getLastEntry();
            }

            getLastEntry() : Map.Entry<any, any> {
                return this.ascendingMap().getFirstEntry();
            }

            getCeilingEntry(key : any) : Map.Entry<any, any> {
                return this.ascendingMap().getFloorEntry(key);
            }

            getFloorEntry(key : any) : Map.Entry<any, any> {
                return this.ascendingMap().getCeilingEntry(key);
            }

            getHigherEntry(key : any) : Map.Entry<any, any> {
                return this.ascendingMap().getLowerEntry(key);
            }

            getLowerEntry(key : any) : Map.Entry<any, any> {
                return this.ascendingMap().getHigherEntry(key);
            }

            removeEntry(entry : Map.Entry<any, any>) : boolean {
                return this.ascendingMap().removeEntry(entry);
            }

            constructor(__parent: any) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map","java.util.NavigableMap","java.util.SortedMap"] });
                this.__parent = __parent;
            }
        }

        export class EntrySet extends java.util.AbstractSet<Map.Entry<any, any>> {
            public __parent: any;
            public contains(o : any) : boolean {
                return (o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0) && this.__parent.containsEntry(<Map.Entry<any, any>>o);
            }

            public iterator() : java.util.Iterator<Map.Entry<any, any>> {
                return this.__parent.entryIterator();
            }

            public remove(index? : any) : any {
                if(((index != null) || index === null)) {
                    return <any>this.remove$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public remove$java_lang_Object(o : any) : boolean {
                if(o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0) {
                    var entry : Map.Entry<any, any> = <Map.Entry<any, any>>o;
                    return this.__parent.removeEntry(entry);
                }
                return false;
            }

            public size() : number {
                return this.__parent.size();
            }

            constructor(__parent: any) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
                this.__parent = __parent;
            }
        }

        export class NavigableKeySet<K, V> extends java.util.AbstractSet<K> implements java.util.NavigableSet<K> {
            forEach(action : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for(var index167=this.iterator();index167.hasNext();) {
                    var t = index167.next();
                    {
                        action(t);
                    }
                }
            }
            map : java.util.NavigableMap<K, V>;

            constructor(map : java.util.NavigableMap<K, V>) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet","java.util.Collection","java.util.Set","java.util.NavigableSet","java.lang.Iterable"] });
                this.map = map;
            }

            public ceiling(k : K) : K {
                return this.map.ceilingKey(k);
            }

            public clear() {
                this.map.clear();
            }

            public comparator() : java.util.Comparator<any> {
                return this.map.comparator();
            }

            public contains(o : any) : boolean {
                return this.map.containsKey(o);
            }

            public descendingIterator() : java.util.Iterator<K> {
                return this.descendingSet().iterator();
            }

            public descendingSet() : java.util.NavigableSet<K> {
                return this.map.descendingMap().navigableKeySet();
            }

            public first() : K {
                return this.map.firstKey();
            }

            public floor(k : K) : K {
                return this.map.floorKey(k);
            }

            public headSet$java_lang_Object(toElement : K) : java.util.SortedSet<K> {
                return this.headSet(toElement, false);
            }

            public headSet(toElement? : any, inclusive? : any) : any {
                if(((toElement != null) || toElement === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                    return <any>(() => {
                        return this.map.headMap(toElement, inclusive).navigableKeySet();
                    })();
                } else if(((toElement != null) || toElement === null) && inclusive === undefined) {
                    return <any>this.headSet$java_lang_Object(toElement);
                } else throw new Error('invalid overload');
            }

            public higher(k : K) : K {
                return this.map.higherKey(k);
            }

            public iterator() : java.util.Iterator<K> {
                var entryIterator : java.util.Iterator<Map.Entry<K, V>> = this.map.entrySet().iterator();
                return new NavigableKeySet.NavigableKeySet$0(this, entryIterator);
            }

            public last() : K {
                return this.map.lastKey();
            }

            public lower(k : K) : K {
                return this.map.lowerKey(k);
            }

            public pollFirst() : K {
                return AbstractMap.getEntryKeyOrNull(this.map.pollFirstEntry());
            }

            public pollLast() : K {
                return AbstractMap.getEntryKeyOrNull(this.map.pollLastEntry());
            }

            public remove(index? : any) : any {
                if(((index != null) || index === null)) {
                    return <any>this.remove$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public remove$java_lang_Object(o : any) : boolean {
                if(this.map.containsKey(o)) {
                    this.map.remove(o);
                    return true;
                }
                return false;
            }

            public size() : number {
                return this.map.size();
            }

            public subSet(fromElement? : any, fromInclusive? : any, toElement? : any, toInclusive? : any) : any {
                if(((fromElement != null) || fromElement === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null) && ((toElement != null) || toElement === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                    return <any>(() => {
                        return this.map.subMap(fromElement, fromInclusive, toElement, toInclusive).navigableKeySet();
                    })();
                } else if(((fromElement != null) || fromElement === null) && ((fromInclusive != null) || fromInclusive === null) && toElement === undefined && toInclusive === undefined) {
                    return <any>this.subSet$java_lang_Object$java_lang_Object(fromElement, fromInclusive);
                } else throw new Error('invalid overload');
            }

            public subSet$java_lang_Object$java_lang_Object(fromElement : K, toElement : K) : java.util.SortedSet<K> {
                return this.subSet(fromElement, true, toElement, false);
            }

            public tailSet$java_lang_Object(fromElement : K) : java.util.SortedSet<K> {
                return this.tailSet(fromElement, true);
            }

            public tailSet(fromElement? : any, inclusive? : any) : any {
                if(((fromElement != null) || fromElement === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                    return <any>(() => {
                        return this.map.tailMap(fromElement, inclusive).navigableKeySet();
                    })();
                } else if(((fromElement != null) || fromElement === null) && inclusive === undefined) {
                    return <any>this.tailSet$java_lang_Object(fromElement);
                } else throw new Error('invalid overload');
            }
        }

        export namespace NavigableKeySet {

            export class NavigableKeySet$0 implements java.util.Iterator<any> {
                public __parent: any;
                forEachRemaining(consumer : (p1: any) => void) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while((this.hasNext())){
                        consumer(this.next());
                    };
                }
                public hasNext() : boolean {
                    return this.entryIterator.hasNext();
                }

                public next() : any {
                    var entry : Map.Entry<any, any> = this.entryIterator.next();
                    return entry.getKey();
                }

                public remove() {
                    this.entryIterator.remove();
                }

                constructor(__parent: any, private entryIterator: any) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                }
            }
        }

    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Implements a TreeMap using a red-black tree. This guarantees O(log n)
     * performance on lookups, inserts, and deletes while maintaining linear
     * in-order traversal time. Null keys and values are fully supported if the
     * comparator supports them (the default comparator does not).
     * 
     * @param <K> key type
     * @param <V> value type
     */
    export class TreeMap<K, V> extends java.util.AbstractNavigableMap<K, V> implements java.io.Serializable {
        static SubMapType_All : TreeMap.SubMapType; public static SubMapType_All_$LI$() : TreeMap.SubMapType { if(TreeMap.SubMapType_All == null) TreeMap.SubMapType_All = new TreeMap.SubMapType(); return TreeMap.SubMapType_All; };

        static SubMapType_Head : TreeMap.SubMapType; public static SubMapType_Head_$LI$() : TreeMap.SubMapType { if(TreeMap.SubMapType_Head == null) TreeMap.SubMapType_Head = new TreeMap.SubMapTypeHead(); return TreeMap.SubMapType_Head; };

        static SubMapType_Range : TreeMap.SubMapType; public static SubMapType_Range_$LI$() : TreeMap.SubMapType { if(TreeMap.SubMapType_Range == null) TreeMap.SubMapType_Range = new TreeMap.SubMapTypeRange(); return TreeMap.SubMapType_Range; };

        static SubMapType_Tail : TreeMap.SubMapType; public static SubMapType_Tail_$LI$() : TreeMap.SubMapType { if(TreeMap.SubMapType_Tail == null) TreeMap.SubMapType_Tail = new TreeMap.SubMapTypeTail(); return TreeMap.SubMapType_Tail; };

        private static LEFT : number = 0;

        private static RIGHT : number = 1;

        static otherChild(child : number) : number {
            return 1 - child;
        }

        private cmp : java.util.Comparator<any>;

        private exposeKeyType : K;

        private exposeValueType : V;

        private root : TreeMap.Node<K, V>;

        private __size : number;

        public constructor(c? : any) {
            if(((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Comparator") >= 0) || c === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map","java.util.NavigableMap","java.util.SortedMap","java.io.Serializable"] });
                this.__size = 0;
                (() => {
                    this.root = null;
                    if(c == null) {
                        c = java.util.Comparators.natural<any>();
                    }
                    this.cmp = c;
                })();
            } else if(((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.SortedMap") >= 0) || c === null)) {
                var map : any = c;
                {
                    var c : any = javaemul.internal.InternalPreconditions.checkNotNull(map).comparator();
                    super();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map","java.util.NavigableMap","java.util.SortedMap","java.io.Serializable"] });
                    this.__size = 0;
                    (() => {
                        this.root = null;
                        if(c == null) {
                            c = java.util.Comparators.natural<any>();
                        }
                        this.cmp = c;
                    })();
                }
                (() => {
                    this.putAll(map);
                })();
            } else if(((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Map") >= 0) || c === null)) {
                var map : any = c;
                {
                    {
                        var c : any = <java.util.Comparator<any>>null;
                        super();
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map","java.util.NavigableMap","java.util.SortedMap","java.io.Serializable"] });
                        this.__size = 0;
                        (() => {
                            this.root = null;
                            if(c == null) {
                                c = java.util.Comparators.natural<any>();
                            }
                            this.cmp = c;
                        })();
                    }
                    (() => {
                    })();
                }
                (() => {
                    this.putAll(map);
                })();
            } else if(c === undefined) {
                {
                    var c : any = <java.util.Comparator<any>>null;
                    super();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map","java.util.NavigableMap","java.util.SortedMap","java.io.Serializable"] });
                    this.__size = 0;
                    (() => {
                        this.root = null;
                        if(c == null) {
                            c = java.util.Comparators.natural<any>();
                        }
                        this.cmp = c;
                    })();
                }
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public clear() {
            this.root = null;
            this.__size = 0;
        }

        public comparator() : java.util.Comparator<any> {
            if(this.cmp === java.util.Comparators.natural<any>()) {
                return null;
            }
            return this.cmp;
        }

        public entrySet() : java.util.Set<Map.Entry<K, V>> {
            return new TreeMap.EntrySet(this);
        }

        public headMap(toKey? : any, inclusive? : any) : any {
            if(((toKey != null) || toKey === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                return <any>(() => {
                    return new TreeMap.SubMap(this, TreeMap.SubMapType_Head_$LI$(), null, false, toKey, inclusive);
                })();
            } else if(((toKey != null) || toKey === null) && inclusive === undefined) {
                return <any>this.headMap$java_lang_Object(toKey);
            } else throw new Error('invalid overload');
        }

        public put(key? : any, value? : any) : any {
            if(((key != null) || key === null) && ((value != null) || value === null)) {
                return <any>this.put$java_lang_Object$java_lang_Object(key, value);
            } else throw new Error('invalid overload');
        }

        public put$java_lang_Object$java_lang_Object(key : K, value : V) : V {
            var node : TreeMap.Node<K, V> = new TreeMap.Node<K, V>(key, value);
            var state : TreeMap.State<V> = new TreeMap.State<V>();
            this.root = this.insert(this.root, node, state);
            if(!state.found) {
                ++this.__size;
            }
            this.root.isRed = false;
            return state.value;
        }

        public remove(k : any) : V {
            var key : K = <K>k;
            var state : TreeMap.State<V> = new TreeMap.State<V>();
            this.removeWithState(key, state);
            return state.value;
        }

        public size() : number {
            return this.__size;
        }

        public subMap(fromKey? : any, fromInclusive? : any, toKey? : any, toInclusive? : any) : any {
            if(((fromKey != null) || fromKey === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null) && ((toKey != null) || toKey === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                return <any>(() => {
                    return new TreeMap.SubMap(this, TreeMap.SubMapType_Range_$LI$(), fromKey, fromInclusive, toKey, toInclusive);
                })();
            } else if(((fromKey != null) || fromKey === null) && ((fromInclusive != null) || fromInclusive === null) && toKey === undefined && toInclusive === undefined) {
                return <any>this.subMap$java_lang_Object$java_lang_Object(fromKey, fromInclusive);
            } else throw new Error('invalid overload');
        }

        public tailMap(fromKey? : any, inclusive? : any) : any {
            if(((fromKey != null) || fromKey === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                return <any>(() => {
                    return new TreeMap.SubMap(this, TreeMap.SubMapType_Tail_$LI$(), fromKey, inclusive, null, false);
                })();
            } else if(((fromKey != null) || fromKey === null) && inclusive === undefined) {
                return <any>this.tailMap$java_lang_Object(fromKey);
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the first node which compares greater than the given key.
         * 
         * @param key the key to search for
         * @return the next node, or null if there is none
         */
        getNodeAfter(key : K, inclusive : boolean) : TreeMap.Node<K, V> {
            var foundNode : TreeMap.Node<K, V> = null;
            var node : TreeMap.Node<K, V> = this.root;
            while((node != null)){
                var c : number = this.cmp.compare(key, node.getKey());
                if(inclusive && c === 0) {
                    return node;
                }
                if(c >= 0) {
                    node = node.child[TreeMap.RIGHT];
                } else {
                    foundNode = node;
                    node = node.child[TreeMap.LEFT];
                }
            };
            return foundNode;
        }

        /**
         * Returns the last node which is strictly less than the given key.
         * 
         * @param key the key to search for
         * @return the previous node, or null if there is none
         */
        getNodeBefore(key : K, inclusive : boolean) : TreeMap.Node<K, V> {
            var foundNode : TreeMap.Node<K, V> = null;
            var node : TreeMap.Node<K, V> = this.root;
            while((node != null)){
                var c : number = this.cmp.compare(key, node.getKey());
                if(inclusive && c === 0) {
                    return node;
                }
                if(c <= 0) {
                    node = node.child[TreeMap.LEFT];
                } else {
                    foundNode = node;
                    node = node.child[TreeMap.RIGHT];
                }
            };
            return foundNode;
        }

        /**
         * Used for testing. Validate that the tree meets all red-black correctness
         * requirements. These include:
         * 
         * <pre>
         * - root is black
         * - no children of a red node may be red
         * - the black height of every path through the three to a leaf is exactly the same
         * </pre>
         * 
         * @throws RuntimeException if any correctness errors are detected.
         */
        assertCorrectness$() {
            this.assertCorrectness(this.root, true);
        }

        descendingEntryIterator() : java.util.Iterator<Map.Entry<K, V>> {
            return new TreeMap.DescendingEntryIterator(this);
        }

        entryIterator() : java.util.Iterator<Map.Entry<K, V>> {
            return new TreeMap.EntryIterator(this);
        }

        /**
         * Internal helper function for public {@link #assertCorrectness()}.
         * 
         * @param tree the subtree to validate.
         * @param isRed true if the parent of this node is red.
         * @return the black height of this subtree.
         * @throws RuntimeException if this RB-tree is not valid.
         */
        public assertCorrectness(tree? : any, isRed? : any) : any {
            if(((tree != null && tree instanceof java.util.TreeMap.Node) || tree === null) && ((typeof isRed === 'boolean') || isRed === null)) {
                return <any>(() => {
                    if(tree == null) {
                        return 0;
                    }
                    if(isRed && tree.isRed) {
                        throw new Error("Two red nodes adjacent");
                    }
                    var leftNode : TreeMap.Node<K, V> = tree.child[TreeMap.LEFT];
                    if(leftNode != null && this.cmp.compare(leftNode.getKey(), tree.getKey()) > 0) {
                        throw new Error("Left child " + leftNode + " larger than " + tree);
                    }
                    var rightNode : TreeMap.Node<K, V> = tree.child[TreeMap.RIGHT];
                    if(rightNode != null && this.cmp.compare(rightNode.getKey(), tree.getKey()) < 0) {
                        throw new Error("Right child " + rightNode + " smaller than " + tree);
                    }
                    var leftHeight : number = this.assertCorrectness(leftNode, tree.isRed);
                    var rightHeight : number = this.assertCorrectness(rightNode, tree.isRed);
                    if(leftHeight !== 0 && rightHeight !== 0 && leftHeight !== rightHeight) {
                        throw new Error("Black heights don\'t match");
                    }
                    return tree.isRed?leftHeight:leftHeight + 1;
                })();
            } else if(tree === undefined && isRed === undefined) {
                return <any>this.assertCorrectness$();
            } else throw new Error('invalid overload');
        }

        /**
         * Finds an entry given a key and returns the node.
         * 
         * @param key the search key
         * @return the node matching the key or null
         */
        getEntry(key : K) : Map.Entry<K, V> {
            var tree : TreeMap.Node<K, V> = this.root;
            while((tree != null)){
                var c : number = this.cmp.compare(key, tree.getKey());
                if(c === 0) {
                    return tree;
                }
                var childNum : number = c < 0?TreeMap.LEFT:TreeMap.RIGHT;
                tree = tree.child[childNum];
            };
            return null;
        }

        /**
         * Returns the left-most node of the tree, or null if empty.
         */
        getFirstEntry() : Map.Entry<K, V> {
            if(this.root == null) {
                return null;
            }
            var node : TreeMap.Node<K, V> = this.root;
            var nextNode : TreeMap.Node<K, V>;
            while(((nextNode = node.child[TreeMap.LEFT]) != null)){
                node = nextNode;
            };
            return node;
        }

        /**
         * Returns the right-most node of the tree, or null if empty.
         */
        getLastEntry() : Map.Entry<K, V> {
            if(this.root == null) {
                return null;
            }
            var node : TreeMap.Node<K, V> = this.root;
            var nextNode : TreeMap.Node<K, V>;
            while(((nextNode = node.child[TreeMap.RIGHT]) != null)){
                node = nextNode;
            };
            return node;
        }

        getCeilingEntry(key : K) : Map.Entry<K, V> {
            return this.getNodeAfter(key, true);
        }

        getFloorEntry(key : K) : Map.Entry<K, V> {
            return this.getNodeBefore(key, true);
        }

        getHigherEntry(key : K) : Map.Entry<K, V> {
            return this.getNodeAfter(key, false);
        }

        getLowerEntry(key : K) : Map.Entry<K, V> {
            return this.getNodeBefore(key, false);
        }

        removeEntry(entry : Map.Entry<K, V>) : boolean {
            var state : TreeMap.State<V> = new TreeMap.State<V>();
            state.matchValue = true;
            state.value = entry.getValue();
            return this.removeWithState(entry.getKey(), state);
        }

        inOrderAdd(list : java.util.List<Map.Entry<K, V>>, type : TreeMap.SubMapType, current : TreeMap.Node<K, V>, fromKey : K, fromInclusive : boolean, toKey : K, toInclusive : boolean) {
            if(current == null) {
                return;
            }
            var leftNode : TreeMap.Node<K, V> = current.child[TreeMap.LEFT];
            if(leftNode != null) {
                this.inOrderAdd(list, type, leftNode, fromKey, fromInclusive, toKey, toInclusive);
            }
            if(this.inRange(type, current.getKey(), fromKey, fromInclusive, toKey, toInclusive)) {
                list.add(current);
            }
            var rightNode : TreeMap.Node<K, V> = current.child[TreeMap.RIGHT];
            if(rightNode != null) {
                this.inOrderAdd(list, type, rightNode, fromKey, fromInclusive, toKey, toInclusive);
            }
        }

        inRange(type : TreeMap.SubMapType, key : K, fromKey : K, fromInclusive : boolean, toKey : K, toInclusive : boolean) : boolean {
            if(type.fromKeyValid() && this.smaller(key, fromKey, !fromInclusive)) {
                return false;
            }
            if(type.toKeyValid() && this.larger(key, toKey, !toInclusive)) {
                return false;
            }
            return true;
        }

        /**
         * Insert a node into a subtree, collecting state about the insertion.
         * 
         * If the same key already exists, the value of the node is overwritten with
         * the value from the new node instead.
         * 
         * @param tree subtree to insert into
         * @param newNode new node to insert
         * @param state result of the insertion: state.found true if the key already
         * existed in the tree state.value the old value if the key existed
         * @return the new subtree root
         */
        insert(tree : TreeMap.Node<K, V>, newNode : TreeMap.Node<K, V>, state : TreeMap.State<V>) : TreeMap.Node<K, V> {
            if(tree == null) {
                return newNode;
            } else {
                var c : number = this.cmp.compare(newNode.getKey(), tree.getKey());
                if(c === 0) {
                    state.value = tree.setValue(newNode.getValue());
                    state.found = true;
                    return tree;
                }
                var childNum : number = c < 0?TreeMap.LEFT:TreeMap.RIGHT;
                tree.child[childNum] = this.insert(tree.child[childNum], newNode, state);
                if(this.isRed(tree.child[childNum])) {
                    if(this.isRed(tree.child[TreeMap.otherChild(childNum)])) {
                        tree.isRed = true;
                        tree.child[TreeMap.LEFT].isRed = false;
                        tree.child[TreeMap.RIGHT].isRed = false;
                    } else {
                        if(this.isRed(tree.child[childNum].child[childNum])) {
                            tree = this.rotateSingle(tree, TreeMap.otherChild(childNum));
                        } else if(this.isRed(tree.child[childNum].child[TreeMap.otherChild(childNum)])) {
                            tree = this.rotateDouble(tree, TreeMap.otherChild(childNum));
                        }
                    }
                }
            }
            return tree;
        }

        /**
         * Returns true if <code>node</code> is red. Note that null pointers are
         * considered black.
         */
        isRed(node : TreeMap.Node<K, V>) : boolean {
            return node != null && node.isRed;
        }

        /**
         * Returns true if <code>a</code> is greater than or equal to <code>b</code>.
         */
        larger(a : K, b : K, orEqual : boolean) : boolean {
            var compare : number = this.cmp.compare(a, b);
            return compare > 0 || (orEqual && compare === 0);
        }

        /**
         * Returns true if <code>a</code> is less than or equal to <code>b</code>.
         */
        smaller(a : K, b : K, orEqual : boolean) : boolean {
            var compare : number = this.cmp.compare(a, b);
            return compare < 0 || (orEqual && compare === 0);
        }

        /**
         * Remove a key from the tree, returning whether it was found and its value.
         * 
         * @param key key to remove
         * @param state return state, not null
         * @return true if the value was found
         */
        removeWithState(key : K, state : TreeMap.State<V>) : boolean {
            if(this.root == null) {
                return false;
            }
            var found : TreeMap.Node<K, V> = null;
            var parent : TreeMap.Node<K, V> = null;
            var head : TreeMap.Node<K, V> = new TreeMap.Node<K, V>(null, null);
            var dir : number = TreeMap.RIGHT;
            head.child[TreeMap.RIGHT] = this.root;
            var node : TreeMap.Node<K, V> = head;
            while((node.child[dir] != null)){
                var last : number = dir;
                var grandparent : TreeMap.Node<K, V> = parent;
                parent = node;
                node = node.child[dir];
                var c : number = this.cmp.compare(key, node.getKey());
                dir = c < 0?TreeMap.LEFT:TreeMap.RIGHT;
                if(c === 0 && (!state.matchValue || java.util.Objects.equals(node.getValue(), state.value))) {
                    found = node;
                }
                if(!this.isRed(node) && !this.isRed(node.child[dir])) {
                    if(this.isRed(node.child[TreeMap.otherChild(dir)])) {
                        parent = parent.child[last] = this.rotateSingle(node, dir);
                    } else if(!this.isRed(node.child[TreeMap.otherChild(dir)])) {
                        var sibling : TreeMap.Node<K, V> = parent.child[TreeMap.otherChild(last)];
                        if(sibling != null) {
                            if(!this.isRed(sibling.child[TreeMap.otherChild(last)]) && !this.isRed(sibling.child[last])) {
                                parent.isRed = false;
                                sibling.isRed = true;
                                node.isRed = true;
                            } else {
                                var dir2 : number = grandparent.child[TreeMap.RIGHT] === parent?TreeMap.RIGHT:TreeMap.LEFT;
                                if(this.isRed(sibling.child[last])) {
                                    grandparent.child[dir2] = this.rotateDouble(parent, last);
                                } else if(this.isRed(sibling.child[TreeMap.otherChild(last)])) {
                                    grandparent.child[dir2] = this.rotateSingle(parent, last);
                                }
                                node.isRed = grandparent.child[dir2].isRed = true;
                                grandparent.child[dir2].child[TreeMap.LEFT].isRed = false;
                                grandparent.child[dir2].child[TreeMap.RIGHT].isRed = false;
                            }
                        }
                    }
                }
            };
            if(found != null) {
                state.found = true;
                state.value = found.getValue();
                if(node !== found) {
                    var newNode : TreeMap.Node<K, V> = new TreeMap.Node<K, V>(node.getKey(), node.getValue());
                    this.replaceNode(head, found, newNode);
                    if(parent === found) {
                        parent = newNode;
                    }
                }
                parent.child[parent.child[TreeMap.RIGHT] === node?TreeMap.RIGHT:TreeMap.LEFT] = node.child[node.child[TreeMap.LEFT] == null?TreeMap.RIGHT:TreeMap.LEFT];
                this.__size--;
            }
            this.root = head.child[TreeMap.RIGHT];
            if(this.root != null) {
                this.root.isRed = false;
            }
            return state.found;
        }

        /**
         * replace 'node' with 'newNode' in the tree rooted at 'head'. Could have
         * avoided this traversal if each node maintained a parent pointer.
         */
        replaceNode(head : TreeMap.Node<K, V>, node : TreeMap.Node<K, V>, newNode : TreeMap.Node<K, V>) {
            var parent : TreeMap.Node<K, V> = head;
            var direction : number = (parent.getKey() == null || this.cmp.compare(node.getKey(), parent.getKey()) > 0)?TreeMap.RIGHT:TreeMap.LEFT;
            while((parent.child[direction] !== node)){
                parent = parent.child[direction];
                direction = this.cmp.compare(node.getKey(), parent.getKey()) > 0?TreeMap.RIGHT:TreeMap.LEFT;
            };
            parent.child[direction] = newNode;
            newNode.isRed = node.isRed;
            newNode.child[TreeMap.LEFT] = node.child[TreeMap.LEFT];
            newNode.child[TreeMap.RIGHT] = node.child[TreeMap.RIGHT];
            node.child[TreeMap.LEFT] = null;
            node.child[TreeMap.RIGHT] = null;
        }

        /**
         * Perform a double rotation, first rotating the child which will become the
         * root in the opposite direction, then rotating the root in the specified
         * direction.
         * 
         * <pre>
         * A                                               F
         * B   C    becomes (with rotateDirection=0)       A   C
         * D E F G                                         B E   G
         * D
         * </pre>
         * 
         * @param tree root of the subtree to rotate
         * @param rotateDirection the direction to rotate: 0=left, 1=right
         * @return the new root of the rotated subtree
         */
        rotateDouble(tree : TreeMap.Node<K, V>, rotateDirection : number) : TreeMap.Node<K, V> {
            var otherChildDir : number = TreeMap.otherChild(rotateDirection);
            tree.child[otherChildDir] = this.rotateSingle(tree.child[otherChildDir], otherChildDir);
            return this.rotateSingle(tree, rotateDirection);
        }

        /**
         * Perform a single rotation, pushing the root of the subtree to the specified
         * direction.
         * 
         * <pre>
         * A                                              B
         * B   C     becomes (with rotateDirection=1)     D   A
         * D E                                              E   C
         * </pre>
         * 
         * @param tree the root of the subtree to rotate
         * @param rotateDirection the direction to rotate: 0=left rotation, 1=right
         * @return the new root of the rotated subtree
         */
        rotateSingle(tree : TreeMap.Node<K, V>, rotateDirection : number) : TreeMap.Node<K, V> {
            var otherChildDir : number = TreeMap.otherChild(rotateDirection);
            var save : TreeMap.Node<K, V> = tree.child[otherChildDir];
            tree.child[otherChildDir] = save.child[rotateDirection];
            save.child[rotateDirection] = tree;
            tree.isRed = true;
            save.isRed = false;
            return save;
        }
    }

    export namespace TreeMap {

        /**
         * Iterator for <code>descendingMap().entrySet()</code>.
         */
        export class DescendingEntryIterator implements java.util.Iterator<Map.Entry<any, any>> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            iter : java.util.ListIterator<Map.Entry<any, any>>;

            last : Map.Entry<any, any>;

            /**
             * Create an iterator which may return only a restricted range.
             * 
             * @param fromKey the first key to return in the iterator.
             * @param toKey the upper bound of keys to return.
             */
            public constructor(__parent: any, type : TreeMap.SubMapType = java.util.TreeMap.SubMapType_All_$LI$(), fromKey : any = null, fromInclusive : boolean = false, toKey : any = null, toInclusive : boolean = false) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                this.__parent = __parent;
                var list : java.util.List<Map.Entry<any, any>> = new java.util.ArrayList<Map.Entry<any, any>>();
                this.__parent.inOrderAdd(list, type, this.__parent.root, fromKey, fromInclusive, toKey, toInclusive);
                this.iter = list.listIterator(list.size());
            }

            public hasNext() : boolean {
                return this.iter.hasPrevious();
            }

            public next() : Map.Entry<any, any> {
                return this.last = this.iter.previous();
            }

            public remove() {
                this.iter.remove();
                this.__parent.removeEntry(this.last);
                this.last = null;
            }
        }

        /**
         * Iterator for <code>EntrySet</code>.
         */
        export class EntryIterator implements java.util.Iterator<Map.Entry<any, any>> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            iter : java.util.ListIterator<Map.Entry<any, any>>;

            last : Map.Entry<any, any>;

            /**
             * Create an iterator which may return only a restricted range.
             * 
             * @param fromKey the first key to return in the iterator.
             * @param toKey the upper bound of keys to return.
             */
            public constructor(__parent: any, type : TreeMap.SubMapType = java.util.TreeMap.SubMapType_All_$LI$(), fromKey : any = null, fromInclusive : boolean = false, toKey : any = null, toInclusive : boolean = false) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                this.__parent = __parent;
                var list : java.util.List<Map.Entry<any, any>> = new java.util.ArrayList<Map.Entry<any, any>>();
                this.__parent.inOrderAdd(list, type, this.__parent.root, fromKey, fromInclusive, toKey, toInclusive);
                this.iter = list.listIterator();
            }

            public hasNext() : boolean {
                return this.iter.hasNext();
            }

            public next() : Map.Entry<any, any> {
                return this.last = this.iter.next();
            }

            public remove() {
                this.iter.remove();
                this.__parent.removeEntry(this.last);
                this.last = null;
            }
        }

        export class EntrySet extends java.util.AbstractNavigableMap.EntrySet {
            public __parent: any;
            public clear() {
                this.__parent.clear();
            }

            constructor(__parent: any) {
                super(__parent);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
                this.__parent = __parent;
            }
        }

        /**
         * Tree node.
         * 
         * @param <K> key type
         * @param <V> value type
         */
        export class Node<K, V> extends AbstractMap.SimpleEntry<K, V> {
            child : TreeMap.Node<K, V>[] = new Array(2);

            isRed : boolean;

            /**
             * Create a node of the specified color.
             * 
             * @param key
             * @param value
             * @param isRed true if this should be a red node, false for black
             */
            public constructor(key : K, value : V, isRed : boolean = true) {
                super(key, value);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                this.isRed = false;
                this.isRed = isRed;
            }
        }

        /**
         * A state object which is passed down the tree for both insert and remove.
         * All uses make use of the done flag to indicate when no further rebalancing
         * of the tree is required. Remove methods use the found flag to indicate when
         * the desired key has been found. value is used both to return the value of a
         * removed node as well as to pass in a value which must match (used for
         * entrySet().remove(entry)), and the matchValue flag is used to request this
         * behavior.
         * 
         * @param <V> value type
         */
        export class State<V> {
            public done : boolean;

            public found : boolean;

            public matchValue : boolean;

            public value : V;

            public toString() : string {
                return "State: mv=" + this.matchValue + " value=" + this.value + " done=" + this.done + " found=" + this.found;
            }

            constructor() {
                this.done = false;
                this.found = false;
                this.matchValue = false;
            }
        }

        export class SubMap extends java.util.AbstractNavigableMap<any, any> {
            public __parent: any;
            fromInclusive : boolean;

            fromKey : any;

            toInclusive : boolean;

            toKey : any;

            type : TreeMap.SubMapType;

            constructor(__parent: any, type : TreeMap.SubMapType, fromKey : any, fromInclusive : boolean, toKey : any, toInclusive : boolean) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map","java.util.NavigableMap","java.util.SortedMap"] });
                this.__parent = __parent;
                this.fromInclusive = false;
                this.toInclusive = false;
                if(type === java.util.TreeMap.SubMapType_Range_$LI$()) {
                    if(this.__parent.cmp.compare(toKey, fromKey) < 0) {
                        throw new java.lang.IllegalArgumentException("subMap: " + toKey + " less than " + fromKey);
                    }
                }
                if(type === java.util.TreeMap.SubMapType_Head_$LI$()) {
                    this.__parent.cmp.compare(toKey, toKey);
                }
                if(type === java.util.TreeMap.SubMapType_Tail_$LI$()) {
                    this.__parent.cmp.compare(fromKey, fromKey);
                }
                if(type === java.util.TreeMap.SubMapType_All_$LI$()) {
                }
                this.type = type;
                this.fromKey = fromKey;
                this.fromInclusive = fromInclusive;
                this.toKey = toKey;
                this.toInclusive = toInclusive;
            }

            public comparator() : java.util.Comparator<any> {
                return this.__parent.comparator();
            }

            public entrySet() : java.util.Set<Map.Entry<any, any>> {
                return new SubMap.SubMap$0(this);
            }

            public headMap(toKey? : any, toInclusive? : any) : any {
                if(((toKey != null) || toKey === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                    return <any>(() => {
                        if(this.type.toKeyValid() && this.__parent.cmp.compare(toKey, this.toKey) > 0) {
                            throw new java.lang.IllegalArgumentException("subMap: " + toKey + " greater than " + this.toKey);
                        }
                        if(this.type.fromKeyValid()) {
                            return this.__parent.subMap(this.fromKey, this.fromInclusive, toKey, toInclusive);
                        } else {
                            return this.__parent.headMap(toKey, toInclusive);
                        }
                    })();
                } else if(((toKey != null) || toKey === null) && toInclusive === undefined) {
                    return <any>this.headMap$java_lang_Object(toKey);
                } else throw new Error('invalid overload');
            }

            public isEmpty() : boolean {
                return this.getFirstEntry() == null;
            }

            public put(key? : any, value? : any) : any {
                if(((key != null) || key === null) && ((value != null) || value === null)) {
                    return <any>this.put$java_lang_Object$java_lang_Object(key, value);
                } else throw new Error('invalid overload');
            }

            public put$java_lang_Object$java_lang_Object(key : any, value : any) : any {
                if(!this.inRange(key)) {
                    throw new java.lang.IllegalArgumentException(key + " outside the range " + this.fromKey + " to " + this.toKey);
                }
                return this.__parent.put(key, value);
            }

            public remove(k : any) : any {
                var key : any = <any>k;
                if(!this.inRange(key)) {
                    return null;
                }
                return this.__parent.remove(key);
            }

            public size() : number {
                var count : number = 0;
                for(var it : java.util.Iterator<Map.Entry<any, any>> = this.entryIterator(); it.hasNext(); it.next()) {
                    count++;
                }
                return count;
            }

            public subMap(newFromKey? : any, newFromInclusive? : any, newToKey? : any, newToInclusive? : any) : any {
                if(((newFromKey != null) || newFromKey === null) && ((typeof newFromInclusive === 'boolean') || newFromInclusive === null) && ((newToKey != null) || newToKey === null) && ((typeof newToInclusive === 'boolean') || newToInclusive === null)) {
                    return <any>(() => {
                        if(this.type.fromKeyValid() && this.__parent.cmp.compare(newFromKey, this.fromKey) < 0) {
                            throw new java.lang.IllegalArgumentException("subMap: " + newFromKey + " less than " + this.fromKey);
                        }
                        if(this.type.toKeyValid() && this.__parent.cmp.compare(newToKey, this.toKey) > 0) {
                            throw new java.lang.IllegalArgumentException("subMap: " + newToKey + " greater than " + this.toKey);
                        }
                        return this.__parent.subMap(newFromKey, newFromInclusive, newToKey, newToInclusive);
                    })();
                } else if(((newFromKey != null) || newFromKey === null) && ((newFromInclusive != null) || newFromInclusive === null) && newToKey === undefined && newToInclusive === undefined) {
                    return <any>this.subMap$java_lang_Object$java_lang_Object(newFromKey, newFromInclusive);
                } else throw new Error('invalid overload');
            }

            public tailMap(fromKey? : any, fromInclusive? : any) : any {
                if(((fromKey != null) || fromKey === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null)) {
                    return <any>(() => {
                        if(this.type.fromKeyValid() && this.__parent.cmp.compare(fromKey, this.fromKey) < 0) {
                            throw new java.lang.IllegalArgumentException("subMap: " + fromKey + " less than " + this.fromKey);
                        }
                        if(this.type.toKeyValid()) {
                            return this.__parent.subMap(fromKey, fromInclusive, this.toKey, this.toInclusive);
                        } else {
                            return this.__parent.tailMap(fromKey, fromInclusive);
                        }
                    })();
                } else if(((fromKey != null) || fromKey === null) && fromInclusive === undefined) {
                    return <any>this.tailMap$java_lang_Object(fromKey);
                } else throw new Error('invalid overload');
            }

            descendingEntryIterator() : java.util.Iterator<Map.Entry<any, any>> {
                return new TreeMap.DescendingEntryIterator(this.__parent, this.type, this.fromKey, this.fromInclusive, this.toKey, this.toInclusive);
            }

            entryIterator() : java.util.Iterator<Map.Entry<any, any>> {
                return new TreeMap.EntryIterator(this.__parent, this.type, this.fromKey, this.fromInclusive, this.toKey, this.toInclusive);
            }

            getEntry(key : any) : Map.Entry<any, any> {
                return this.guardInRange(this.__parent.getEntry(key));
            }

            getFirstEntry() : Map.Entry<any, any> {
                var entry : Map.Entry<any, any>;
                if(this.type.fromKeyValid()) {
                    if(this.fromInclusive) {
                        entry = this.__parent.getCeilingEntry(this.fromKey);
                    } else {
                        entry = this.__parent.getHigherEntry(this.fromKey);
                    }
                } else {
                    entry = this.__parent.getFirstEntry();
                }
                return this.guardInRange(entry);
            }

            getLastEntry() : Map.Entry<any, any> {
                var entry : Map.Entry<any, any>;
                if(this.type.toKeyValid()) {
                    if(this.toInclusive) {
                        entry = this.__parent.getFloorEntry(this.toKey);
                    } else {
                        entry = this.__parent.getLowerEntry(this.toKey);
                    }
                } else {
                    entry = this.__parent.getLastEntry();
                }
                return this.guardInRange(entry);
            }

            getCeilingEntry(key : any) : Map.Entry<any, any> {
                return this.guardInRange(this.__parent.getCeilingEntry(key));
            }

            getFloorEntry(key : any) : Map.Entry<any, any> {
                return this.guardInRange(this.__parent.getFloorEntry(key));
            }

            getHigherEntry(key : any) : Map.Entry<any, any> {
                return this.guardInRange(this.__parent.getHigherEntry(key));
            }

            getLowerEntry(key : any) : Map.Entry<any, any> {
                return this.guardInRange(this.__parent.getLowerEntry(key));
            }

            removeEntry(entry : Map.Entry<any, any>) : boolean {
                return this.inRange(entry.getKey()) && this.__parent.removeEntry(entry);
            }

            guardInRange(entry : Map.Entry<any, any>) : Map.Entry<any, any> {
                return entry != null && this.inRange(entry.getKey())?entry:null;
            }

            inRange(key : any) : boolean {
                return this.__parent.inRange(this.type, key, this.fromKey, this.fromInclusive, this.toKey, this.toInclusive);
            }
        }

        export namespace SubMap {

            export class SubMap$0 extends TreeMap.SubMap.EntrySet {
                public __parent: any;
                public isEmpty() : boolean {
                    return this.__parent.isEmpty();
                }

                constructor(__parent: any) {
                    super(__parent);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
                    this.__parent = __parent;
                }
            }
        }


        export class SubMapType {
            /**
             * Returns true if this submap type uses a from-key.
             */
            public fromKeyValid() : boolean {
                return false;
            }

            /**
             * Returns true if this submap type uses a to-key.
             */
            public toKeyValid() : boolean {
                return false;
            }
        }

        export class SubMapTypeHead extends TreeMap.SubMapType {
            public toKeyValid() : boolean {
                return true;
            }
        }

        export class SubMapTypeRange extends TreeMap.SubMapType {
            public fromKeyValid() : boolean {
                return true;
            }

            public toKeyValid() : boolean {
                return true;
            }
        }

        export class SubMapTypeTail extends TreeMap.SubMapType {
            public fromKeyValid() : boolean {
                return true;
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A {@link java.util.Set} of {@link Enum}s. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/EnumSet.html">[Sun
     * docs]</a>
     * 
     * @param <E> enumeration type
     */
    export abstract class EnumSet<E extends java.lang.Enum<E>> extends java.util.AbstractSet<E> {
        public static allOf<E extends java.lang.Enum<E>>(elementType : any) : EnumSet<E> {
            var all : E[] = elementType.getEnumConstants();
            var set : E[] = javaemul.internal.ArrayHelper.clone<any>(all, 0, all.length);
            return new EnumSet.EnumSetImpl<E>(all, set, all.length);
        }

        public static complementOf<E extends java.lang.Enum<E>>(other : EnumSet<E>) : EnumSet<E> {
            var s : EnumSet.EnumSetImpl<E> = <EnumSet.EnumSetImpl<E>>other;
            var all : E[] = s.all;
            var oldSet : E[] = s.set;
            var newSet : E[] = javaemul.internal.ArrayHelper.createFrom<any>(oldSet, oldSet.length);
            for(var i : number = 0, c : number = oldSet.length; i < c; ++i) {
                if(oldSet[i] == null) {
                    newSet[i] = all[i];
                }
            }
            return new EnumSet.EnumSetImpl<E>(all, newSet, all.length - s.__size);
        }

        public static copyOf$java_util_Collection<E extends java.lang.Enum<E>>(c : java.util.Collection<E>) : EnumSet<E> {
            if(c != null && c instanceof java.util.EnumSet) {
                return EnumSet.copyOf(<EnumSet<E>>c);
            }
            javaemul.internal.InternalPreconditions.checkArgument(!c.isEmpty(), "Collection is empty");
            var iterator : java.util.Iterator<E> = c.iterator();
            var first : E = iterator.next();
            var set : EnumSet<E> = EnumSet.of(first);
            while((iterator.hasNext())){
                var e : E = iterator.next();
                set.add(e);
            };
            return set;
        }

        public static copyOf<E extends java.lang.Enum<E>>(s? : any) : any {
            if(((s != null && s instanceof java.util.EnumSet) || s === null)) {
                return <any>(() => {
                    return s.clone();
                })();
            } else if(((s != null && s["__interfaces"] != null && s["__interfaces"].indexOf("java.util.Collection") >= 0) || s === null)) {
                return <any>java.util.EnumSet.copyOf$java_util_Collection(s);
            } else throw new Error('invalid overload');
        }

        public static noneOf<E extends java.lang.Enum<E>>(elementType : any) : EnumSet<E> {
            var all : E[] = elementType.getEnumConstants();
            return new EnumSet.EnumSetImpl<E>(all, javaemul.internal.ArrayHelper.createFrom<any>(all, all.length), 0);
        }

        public static of$java_lang_Enum<E extends java.lang.Enum<E>>(first : E) : EnumSet<E> {
            var set : EnumSet<E> = EnumSet.noneOf<any>(first.getDeclaringClass());
            set.add(first);
            return set;
        }

        public static of<E extends java.lang.Enum<E>>(first? : any, ...rest : any[]) : any {
            if(((first != null) || first === null) && ((rest != null && rest instanceof Array) || rest === null)) {
                return <any>(() => {
                    var set : EnumSet<E> = EnumSet.of(first);
                    java.util.Collections.addAll<any>(set, rest);
                    return set;
                })();
            } else if(((first != null) || first === null) && rest === undefined) {
                return <any>java.util.EnumSet.of$java_lang_Enum(first);
            } else throw new Error('invalid overload');
        }

        public static range<E extends java.lang.Enum<E>>(from : E, to : E) : EnumSet<E> {
            javaemul.internal.InternalPreconditions.checkArgument(from.compareTo(to) <= 0, "%s > %s", from, to);
            var all : E[] = from.getDeclaringClass().getEnumConstants();
            var set : E[] = javaemul.internal.ArrayHelper.createFrom<any>(all, all.length);
            var start : number = from.ordinal();
            var end : number = to.ordinal() + 1;
            for(var i : number = start; i < end; ++i) {
                set[i] = all[i];
            }
            return new EnumSet.EnumSetImpl<E>(all, set, end - start);
        }

        /**
         * Single implementation only.
         */
        constructor() {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
        }

        public abstract clone() : EnumSet<E>;

        abstract capacity() : number;
    }

    export namespace EnumSet {

        /**
         * Implemented via sparse array since the set size is finite. Iteration takes
         * linear time with respect to the set of the enum rather than the number of
         * items in the set.
         * 
         * Note: Implemented as a subclass instead of a concrete final EnumSet class.
         * This is because declaring an EnumSet.add(E) causes hosted mode to bind to
         * the tighter method rather than the bridge method; but the tighter method
         * isn't available in the real JRE.
         */
        export class EnumSetImpl<E extends java.lang.Enum<E>> extends java.util.EnumSet<E> {
            /**
             * All enums; reference to the class's copy; must not be modified.
             */
            all : E[];

            /**
             * Live enums in the set.
             */
            set : E[];

            /**
             * Count of enums in the set.
             */
            __size : number;

            /**
             * Constructs a set taking ownership of the specified set. The size must
             * accurately reflect the number of non-null items in set.
             */
            public constructor(all : E[], set : E[], size : number) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
                this.__size = 0;
                this.all = all;
                this.set = set;
                this.__size = size;
            }

            public add(index? : any, element? : any) : any {
                if(((index != null) || index === null) && element === undefined) {
                    return <any>this.add$java_lang_Enum(index);
                } else if(((index != null) || index === null) && element === undefined) {
                    return <any>this.add$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public add$java_lang_Enum(e : E) : boolean {
                javaemul.internal.InternalPreconditions.checkNotNull(e);
                var ordinal : number = e.ordinal();
                if(this.set[ordinal] == null) {
                    this.set[ordinal] = e;
                    ++this.__size;
                    return true;
                }
                return false;
            }

            public clone() : java.util.EnumSet<E> {
                var clonedSet : E[] = javaemul.internal.ArrayHelper.clone<any>(this.set, 0, this.set.length);
                return new EnumSet.EnumSetImpl<E>(this.all, clonedSet, this.__size);
            }

            public contains(o : any) : boolean {
                return (o != null && o instanceof java.lang.Enum) && this.containsEnum(<java.lang.Enum<any>>o);
            }

            containsEnum(e : java.lang.Enum<any>) : boolean {
                return e != null && this.set[e.ordinal()] === e;
            }

            public iterator() : java.util.Iterator<E> {
                return new EnumSetImpl.IteratorImpl(this);
            }

            public remove(index? : any) : any {
                if(((index != null) || index === null)) {
                    return <any>this.remove$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public remove$java_lang_Object(o : any) : boolean {
                return (o != null && o instanceof java.lang.Enum) && this.removeEnum(<java.lang.Enum<any>>o);
            }

            removeEnum(e : java.lang.Enum<any>) : boolean {
                if(e != null && this.set[e.ordinal()] === e) {
                    this.set[e.ordinal()] = null;
                    --this.__size;
                    return true;
                }
                return false;
            }

            public size() : number {
                return this.__size;
            }

            capacity() : number {
                return this.all.length;
            }
        }

        export namespace EnumSetImpl {

            export class IteratorImpl implements java.util.Iterator<any> {
                public __parent: any;
                forEachRemaining(consumer : (p1: any) => void) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while((this.hasNext())){
                        consumer(this.next());
                    };
                }
                i : number;

                last : number;

                constructor(__parent: any) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    this.i = -1;
                    this.last = -1;
                    this.findNext();
                }

                public hasNext() : boolean {
                    return this.i < this.__parent.capacity();
                }

                public next() : any {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                    this.last = this.i;
                    this.findNext();
                    return this.__parent.set[this.last];
                }

                public remove() {
                    javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                    this.__parent.set[this.last] = null;
                    --this.__parent.__size;
                    this.last = -1;
                }

                findNext() {
                    ++this.i;
                    for(var c : number = this.__parent.capacity(); this.i < c; ++this.i) {
                        if(this.__parent.set[this.i] != null) {
                            return;
                        }
                    }
                }
            }
        }

    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Implements a set in terms of a hash table. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/HashSet.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export class HashSet<E> extends java.util.AbstractSet<E> implements java.util.Set<E>, java.lang.Cloneable, java.io.Serializable {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index168=this.iterator();index168.hasNext();) {
                var t = index168.next();
                {
                    action(t);
                }
            }
        }
        private map : java.util.HashMap<E, any>;

        /**
         * Ensures that RPC will consider type parameter E to be exposed. It will be
         * pruned by dead code elimination.
         */
        private exposeElement : E;

        public constructor(initialCapacity? : any, loadFactor? : any) {
            if(((typeof initialCapacity === 'number') || initialCapacity === null) && ((typeof loadFactor === 'number') || loadFactor === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.map = new java.util.HashMap<E, any>(initialCapacity, loadFactor);
                })();
            } else if(((initialCapacity != null && initialCapacity["__interfaces"] != null && initialCapacity["__interfaces"].indexOf("java.util.Collection") >= 0) || initialCapacity === null) && loadFactor === undefined) {
                var c : any = initialCapacity;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.map = new java.util.HashMap<E, any>(c.size());
                    this.addAll(c);
                })();
            } else if(((initialCapacity != null && initialCapacity instanceof java.util.HashMap) || initialCapacity === null) && loadFactor === undefined) {
                var map : any = initialCapacity;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.map = map;
                })();
            } else if(((typeof initialCapacity === 'number') || initialCapacity === null) && loadFactor === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.map = new java.util.HashMap<E, any>(initialCapacity);
                })();
            } else if(initialCapacity === undefined && loadFactor === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.map = new java.util.HashMap<E, any>();
                })();
            } else throw new Error('invalid overload');
        }

        public add(index? : any, element? : any) : any {
            if(((index != null) || index === null) && element === undefined) {
                return <any>this.add$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public add$java_lang_Object(o : E) : boolean {
            var old : any = this.map.put(o, this);
            return (old == null);
        }

        public clear() {
            this.map.clear();
        }

        public clone() : any {
            return new HashSet<E>(this);
        }

        public contains(o : any) : boolean {
            return this.map.containsKey(o);
        }

        public isEmpty() : boolean {
            return this.map.isEmpty();
        }

        public iterator() : java.util.Iterator<E> {
            return this.map.keySet().iterator();
        }

        public remove(index? : any) : any {
            if(((index != null) || index === null)) {
                return <any>this.remove$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public remove$java_lang_Object(o : any) : boolean {
            return (this.map.remove(o) != null);
        }

        public size() : number {
            return this.map.size();
        }

        public toString() : string {
            return this.map.keySet().toString();
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Hash table and linked-list implementation of the Set interface with
     * predictable iteration order. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/LinkedHashSet.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export class LinkedHashSet<E> extends java.util.HashSet<E> implements java.util.Set<E>, java.lang.Cloneable {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index169=this.iterator();index169.hasNext();) {
                var t = index169.next();
                {
                    action(t);
                }
            }
        }
        public constructor(ignored? : any, alsoIgnored? : any) {
            if(((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null)) {
                super(new java.util.LinkedHashMap<E, any>(ignored, alsoIgnored));
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                })();
            } else if(((ignored != null && ignored["__interfaces"] != null && ignored["__interfaces"].indexOf("java.util.Collection") >= 0) || ignored === null) && alsoIgnored === undefined) {
                var c : any = ignored;
                super(new java.util.LinkedHashMap<E, any>());
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                    this.addAll(c);
                })();
            } else if(((typeof ignored === 'number') || ignored === null) && alsoIgnored === undefined) {
                super(new java.util.LinkedHashMap<E, any>(ignored));
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                })();
            } else if(ignored === undefined && alsoIgnored === undefined) {
                super(new java.util.LinkedHashMap<E, any>());
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public clone() : any {
            return new LinkedHashSet<E>(this);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * Wraps an existing {@link InputStream} and performs some transformation on
     * the input data while it is being read. Transformations can be anything from a
     * simple byte-wise filtering input data to an on-the-fly compression or
     * decompression of the underlying stream. Input streams that wrap another input
     * stream and provide some additional functionality on top of it usually inherit
     * from this class.
     * 
     * @see FilterOutputStream
     */
    export class FilterInputStream extends java.io.InputStream {
        /**
         * The source input stream that is filtered.
         */
        in : java.io.InputStream;

        /**
         * Constructs a new {@code FilterInputStream} with the specified input
         * stream as source.
         * 
         * <p><strong>Warning:</strong> passing a null source creates an invalid
         * {@code FilterInputStream}, that fails on every method that is not
         * overridden. Subclasses should check for null in their constructors.
         * 
         * @param in the input stream to filter reads on.
         */
        constructor(__in : java.io.InputStream) {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable","java.lang.AutoCloseable"] });
            this.in = __in;
        }

        public available() : number {
            return this.in.available();
        }

        /**
         * Closes this stream. This implementation closes the filtered stream.
         * 
         * @throws IOException
         * if an error occurs while closing this stream.
         */
        public close() {
            this.in.close();
        }

        /**
         * Sets a mark position in this stream. The parameter {@code readlimit}
         * indicates how many bytes can be read before the mark is invalidated.
         * Sending {@code reset()} will reposition this stream back to the marked
         * position, provided that {@code readlimit} has not been surpassed.
         * <p>
         * This implementation sets a mark in the filtered stream.
         * 
         * @param readlimit
         * the number of bytes that can be read from this stream before
         * the mark is invalidated.
         * @see #markSupported()
         * @see #reset()
         */
        public mark(readlimit : number) {
            this.in.mark(readlimit);
        }

        /**
         * Indicates whether this stream supports {@code mark()} and {@code reset()}.
         * This implementation returns whether or not the filtered stream supports
         * marking.
         * 
         * @return {@code true} if {@code mark()} and {@code reset()} are supported,
         * {@code false} otherwise.
         * @see #mark(int)
         * @see #reset()
         * @see #skip(long)
         */
        public markSupported() : boolean {
            return this.in.markSupported();
        }

        /**
         * Reads a single byte from the filtered stream and returns it as an integer
         * in the range from 0 to 255. Returns -1 if the end of this stream has been
         * reached.
         * 
         * @return the byte read or -1 if the end of the filtered stream has been
         * reached.
         * @throws IOException
         * if the stream is closed or another IOException occurs.
         */
        public read$() : number {
            return this.in.read();
        }

        public read(buffer? : any, byteOffset? : any, byteCount? : any) : any {
            if(((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                return <any>(() => {
                    return this.in.read(buffer, byteOffset, byteCount);
                })();
            } else if(((buffer != null && buffer instanceof Array) || buffer === null) && byteOffset === undefined && byteCount === undefined) {
                return <any>this.read$byte_A(buffer);
            } else if(buffer === undefined && byteOffset === undefined && byteCount === undefined) {
                return <any>this.read$();
            } else throw new Error('invalid overload');
        }

        /**
         * Resets this stream to the last marked location. This implementation
         * resets the target stream.
         * 
         * @throws IOException
         * if this stream is already closed, no mark has been set or the
         * mark is no longer valid because more than {@code readlimit}
         * bytes have been read since setting the mark.
         * @see #mark(int)
         * @see #markSupported()
         */
        public reset() {
            this.in.reset();
        }

        /**
         * Skips {@code byteCount} bytes in this stream. Subsequent
         * calls to {@code read} will not return these bytes unless {@code reset} is
         * used. This implementation skips {@code byteCount} bytes in the
         * filtered stream.
         * 
         * @return the number of bytes actually skipped.
         * @throws IOException
         * if this stream is closed or another IOException occurs.
         * @see #mark(int)
         * @see #reset()
         */
        public skip(byteCount : number) : number {
            return this.in.skip(byteCount);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util.logging {
    /**
     * An emulation of the java.util.logging.LogManager class. See
     * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/LogManger.html">
     * The Java API doc for details</a>
     */
    export class LogManager {
        private static singleton : LogManager;

        public static getLogManager() : LogManager {
            if(LogManager.singleton == null) {
                LogManager.singleton = new LogManager();
                var rootLogger : java.util.logging.Logger = new java.util.logging.Logger("", null);
                rootLogger.setLevel(java.util.logging.Level.INFO_$LI$());
                LogManager.singleton.addLoggerImpl(rootLogger);
            }
            return LogManager.singleton;
        }

        private loggerMap : java.util.HashMap<string, java.util.logging.Logger> = new java.util.HashMap<string, java.util.logging.Logger>();

        constructor() {
        }

        public addLogger(logger : java.util.logging.Logger) : boolean {
            if(this.getLogger(logger.getName()) != null) {
                return false;
            }
            this.addLoggerAndEnsureParents(logger);
            return true;
        }

        public getLogger(name : string) : java.util.logging.Logger {
            return this.loggerMap.get(name);
        }

        public getLoggerNames() : java.util.Enumeration<string> {
            return java.util.Collections.enumeration<any>(this.loggerMap.keySet());
        }

        /**
         * Helper function to add a logger when we have already determined that it
         * does not exist.  When we add a logger, we recursively add all of it's
         * ancestors. Since loggers do not get removed, logger creation is cheap,
         * and there are not usually too many loggers in an ancestry chain,
         * this is a simple way to ensure that the parent/child relationships are
         * always correctly set up.
         */
        private addLoggerAndEnsureParents(logger : java.util.logging.Logger) {
            var name : string = logger.getName();
            var parentName : string = name.substring(0, Math.max(0, name.lastIndexOf('.')));
            logger.setParent(this.ensureLogger(parentName));
            this.addLoggerImpl(logger);
        }

        private addLoggerImpl(logger : java.util.logging.Logger) {
            if((java.lang.System.getProperty("gwt.logging.simpleConsoleHandler", "ENABLED") === "ENABLED")) {
                if(/* isEmpty */(logger.getName().length === 0)) {
                    logger.addHandler(new java.util.logging.SimpleConsoleLogHandler());
                }
            }
            this.loggerMap.put(logger.getName(), logger);
        }

        /**
         * Helper function to create a logger if it does not exist since the public
         * APIs for getLogger and addLogger make it difficult to use those functions
         * for this.
         */
        ensureLogger(name : string) : java.util.logging.Logger {
            var logger : java.util.logging.Logger = this.getLogger(name);
            if(logger == null) {
                var newLogger : java.util.logging.Logger = new java.util.logging.Logger(name, null);
                this.addLoggerAndEnsureParents(newLogger);
                return newLogger;
            }
            return logger;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Implementation of Map interface based on a hash table. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/HashMap.html">[Sun
     * docs]</a>
     * 
     * @param <K> key type
     * @param <V> value type
     */
    export abstract class AbstractHashMap<K, V> extends java.util.AbstractMap<K, V> {
        /**
         * A map of integral hashCodes onto entries.
         */
        private hashCodeMap : java.util.InternalHashCodeMap<K, V>;

        /**
         * A map of Strings onto values.
         */
        private stringMap : java.util.InternalStringMap<K, V>;

        public constructor(ignored? : any, alsoIgnored? : any) {
            if(((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                (() => {
                    javaemul.internal.InternalPreconditions.checkArgument(ignored >= 0, "Negative initial capacity");
                    javaemul.internal.InternalPreconditions.checkArgument(alsoIgnored >= 0, "Non-positive load factor");
                    this.reset();
                })();
            } else if(((ignored != null && ignored["__interfaces"] != null && ignored["__interfaces"].indexOf("java.util.Map") >= 0) || ignored === null) && alsoIgnored === undefined) {
                var toBeCopied : any = ignored;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                (() => {
                    this.reset();
                    this.putAll(toBeCopied);
                })();
            } else if(((typeof ignored === 'number') || ignored === null) && alsoIgnored === undefined) {
                {
                    var alsoIgnored : any = 0;
                    super();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                    (() => {
                        javaemul.internal.InternalPreconditions.checkArgument(ignored >= 0, "Negative initial capacity");
                        javaemul.internal.InternalPreconditions.checkArgument(alsoIgnored >= 0, "Non-positive load factor");
                        this.reset();
                    })();
                }
                (() => {
                })();
            } else if(ignored === undefined && alsoIgnored === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                (() => {
                    this.reset();
                })();
            } else throw new Error('invalid overload');
        }

        public clear() {
            this.reset();
        }

        reset() {
            this.hashCodeMap = new java.util.InternalHashCodeMap<K, V>(this);
            this.stringMap = new java.util.InternalStringMap<K, V>(this);
            java.util.ConcurrentModificationDetector.structureChanged(this);
        }

        public containsKey(key : any) : boolean {
            return (typeof key === 'string')?this.hasStringValue(javaemul.internal.JsUtils.unsafeCastToString(key)):this.hasHashValue(key);
        }

        public containsValue(value : any) : boolean {
            return this._containsValue(value, this.stringMap) || this._containsValue(value, this.hashCodeMap);
        }

        _containsValue(value : any, entries : java.lang.Iterable<Map.Entry<K, V>>) : boolean {
            for(var index170=entries.iterator();index170.hasNext();) {
                var entry = index170.next();
                {
                    if(this._equals(value, entry.getValue())) {
                        return true;
                    }
                }
            }
            return false;
        }

        public entrySet() : java.util.Set<java.util.Map.Entry<K, V>> {
            return new AbstractHashMap.EntrySet(this);
        }

        public get(key : any) : V {
            return (typeof key === 'string')?this.getStringValue(javaemul.internal.JsUtils.unsafeCastToString(key)):this.getHashValue(key);
        }

        public put(key? : any, value? : any) : any {
            if(((key != null) || key === null) && ((value != null) || value === null)) {
                return <any>this.put$java_lang_Object$java_lang_Object(key, value);
            } else throw new Error('invalid overload');
        }

        public put$java_lang_Object$java_lang_Object(key : K, value : V) : V {
            return (typeof key === 'string')?this.putStringValue(javaemul.internal.JsUtils.unsafeCastToString(key), value):this.putHashValue(key, value);
        }

        public remove(key : any) : V {
            return (typeof key === 'string')?this.removeStringValue(javaemul.internal.JsUtils.unsafeCastToString(key)):this.removeHashValue(key);
        }

        public size() : number {
            return this.hashCodeMap.size() + this.stringMap.getSize();
        }

        /**
         * Subclasses must override to return a whether or not two keys or values are
         * equal.
         */
        abstract _equals(value1 : any, value2 : any) : boolean;

        /**
         * Subclasses must override to return a hash code for a given key. The key is
         * guaranteed to be non-null and not a String.
         */
        abstract getHashCode(key : any) : number;

        /**
         * Returns the Map.Entry whose key is Object equal to <code>key</code>,
         * provided that <code>key</code>'s hash code is <code>hashCode</code>;
         * or <code>null</code> if no such Map.Entry exists at the specified
         * hashCode.
         */
        getHashValue(key : any) : V {
            return AbstractMap.getEntryValueOrNull<any, any>(this.hashCodeMap.getEntry(key));
        }

        /**
         * Returns the value for the given key in the stringMap. Returns
         * <code>null</code> if the specified key does not exist.
         */
        getStringValue(key : string) : V {
            return key == null?this.getHashValue(null):this.stringMap.get(key);
        }

        /**
         * Returns true if the a key exists in the hashCodeMap that is Object equal to
         * <code>key</code>, provided that <code>key</code>'s hash code is
         * <code>hashCode</code>.
         */
        hasHashValue(key : any) : boolean {
            return this.hashCodeMap.getEntry(key) != null;
        }

        /**
         * Returns true if the given key exists in the stringMap.
         */
        hasStringValue(key : string) : boolean {
            return key == null?this.hasHashValue(null):this.stringMap.contains(key);
        }

        /**
         * Sets the specified key to the specified value in the hashCodeMap. Returns
         * the value previously at that key. Returns <code>null</code> if the
         * specified key did not exist.
         */
        putHashValue(key : K, value : V) : V {
            return this.hashCodeMap.put(key, value);
        }

        /**
         * Sets the specified key to the specified value in the stringMap. Returns the
         * value previously at that key. Returns <code>null</code> if the specified
         * key did not exist.
         */
        putStringValue(key : string, value : V) : V {
            return key == null?this.putHashValue(null, value):this.stringMap.put(key, value);
        }

        /**
         * Removes the pair whose key is Object equal to <code>key</code> from
         * <code>hashCodeMap</code>, provided that <code>key</code>'s hash code
         * is <code>hashCode</code>. Returns the value that was associated with the
         * removed key, or null if no such key existed.
         */
        removeHashValue(key : any) : V {
            return this.hashCodeMap.remove(key);
        }

        /**
         * Removes the specified key from the stringMap and returns the value that was
         * previously there. Returns <code>null</code> if the specified key does not
         * exist.
         */
        removeStringValue(key : string) : V {
            return key == null?this.removeHashValue(null):this.stringMap.remove(key);
        }
    }

    export namespace AbstractHashMap {

        export class EntrySet extends java.util.AbstractSet<Map.Entry<any, any>> {
            public __parent: any;
            public clear() {
                this.__parent.clear();
            }

            public contains(o : any) : boolean {
                if(o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0) {
                    return this.__parent.containsEntry(<java.util.Map.Entry<any, any>>o);
                }
                return false;
            }

            public iterator() : java.util.Iterator<Map.Entry<any, any>> {
                return new AbstractHashMap.EntrySetIterator(this.__parent);
            }

            public remove(index? : any) : any {
                if(((index != null) || index === null)) {
                    return <any>this.remove$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public remove$java_lang_Object(entry : any) : boolean {
                if(this.contains(entry)) {
                    var key : any = (<java.util.Map.Entry<any, any>>entry).getKey();
                    this.__parent.remove(key);
                    return true;
                }
                return false;
            }

            public size() : number {
                return this.__parent.size();
            }

            constructor(__parent: any) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
                this.__parent = __parent;
            }
        }

        /**
         * Iterator for <code>EntrySet</code>.
         */
        export class EntrySetIterator implements java.util.Iterator<Map.Entry<any, any>> {
            public __parent: any;
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            stringMapEntries : java.util.Iterator<Map.Entry<any, any>>;

            current : java.util.Iterator<Map.Entry<any, any>>;

            last : java.util.Iterator<Map.Entry<any, any>>;

            __hasNext : boolean;

            public constructor(__parent: any) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                this.__parent = __parent;
                this.__hasNext = false;
                this.stringMapEntries = this.__parent.stringMap.iterator();
                this.current = this.stringMapEntries;
                this.__hasNext = this.computeHasNext();
                java.util.ConcurrentModificationDetector.recordLastKnownStructure(this.__parent, this);
            }

            public hasNext() : boolean {
                return this.__hasNext;
            }

            computeHasNext() : boolean {
                if(this.current.hasNext()) {
                    return true;
                }
                if(this.current !== this.stringMapEntries) {
                    return false;
                }
                this.current = this.__parent.hashCodeMap.iterator();
                return this.current.hasNext();
            }

            public next() : Map.Entry<any, any> {
                java.util.ConcurrentModificationDetector.checkStructuralChange(this.__parent, this);
                javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                this.last = this.current;
                var rv : Map.Entry<any, any> = this.current.next();
                this.__hasNext = this.computeHasNext();
                return rv;
            }

            public remove() {
                javaemul.internal.InternalPreconditions.checkState(this.last != null);
                java.util.ConcurrentModificationDetector.checkStructuralChange(this.__parent, this);
                this.last.remove();
                this.last = null;
                this.__hasNext = this.computeHasNext();
                java.util.ConcurrentModificationDetector.recordLastKnownStructure(this.__parent, this);
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Implementation of Map interface based on a hash table. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/HashMap.html">[Sun
     * docs]</a>
     * 
     * @param <K> key type
     * @param <V> value type
     */
    export class HashMap<K, V> extends java.util.AbstractHashMap<K, V> implements java.lang.Cloneable, java.io.Serializable {
        /**
         * Ensures that RPC will consider type parameter K to be exposed. It will be
         * pruned by dead code elimination.
         */
        private exposeKey : K;

        /**
         * Ensures that RPC will consider type parameter V to be exposed. It will be
         * pruned by dead code elimination.
         */
        private exposeValue : V;

        public constructor(ignored? : any, alsoIgnored? : any) {
            if(((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null)) {
                super(ignored, alsoIgnored);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                (() => {
                })();
            } else if(((ignored != null && ignored["__interfaces"] != null && ignored["__interfaces"].indexOf("java.util.Map") >= 0) || ignored === null) && alsoIgnored === undefined) {
                var toBeCopied : any = ignored;
                super(toBeCopied);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof ignored === 'number') || ignored === null) && alsoIgnored === undefined) {
                super(ignored);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                (() => {
                })();
            } else if(ignored === undefined && alsoIgnored === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public clone() : any {
            return new HashMap<K, V>(this);
        }

        _equals(value1 : any, value2 : any) : boolean {
            return java.util.Objects.equals(value1, value2);
        }

        getHashCode(key : any) : number {
            var hashCode : number = (<any>key.toString());
            return javaemul.internal.Coercions.ensureInt(hashCode);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Hash table implementation of the Map interface with predictable iteration
     * order. <a href=
     * "http://java.sun.com/j2se/1.5.0/docs/api/java/util/LinkedHashMap.html">[Sun
     * docs]</a>
     * 
     * @param <K>
     * key type.
     * @param <V>
     * value type.
     */
    export class LinkedHashMap<K, V> extends java.util.HashMap<K, V> implements java.util.Map<K, V> {
        private accessOrder : boolean;

        private head : LinkedHashMap.ChainEntry;

        private map : java.util.HashMap<K, LinkedHashMap.ChainEntry>;

        public constructor(ignored? : any, alsoIgnored? : any, accessOrder? : any) {
            if(((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null) && ((typeof accessOrder === 'boolean') || accessOrder === null)) {
                super(ignored, alsoIgnored);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                this.accessOrder = false;
                (() => {
                    this.head = new LinkedHashMap.ChainEntry(this);
                    this.map = new java.util.HashMap<K, LinkedHashMap.ChainEntry>();
                    this.accessOrder = accessOrder;
                    this.resetChainEntries();
                })();
            } else if(((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null) && accessOrder === undefined) {
                super(ignored, alsoIgnored);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                this.accessOrder = false;
                (() => {
                    this.head = new LinkedHashMap.ChainEntry(this);
                    this.map = new java.util.HashMap<K, LinkedHashMap.ChainEntry>();
                    this.resetChainEntries();
                })();
            } else if(((ignored != null && ignored["__interfaces"] != null && ignored["__interfaces"].indexOf("java.util.Map") >= 0) || ignored === null) && alsoIgnored === undefined && accessOrder === undefined) {
                var toBeCopied : any = ignored;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                this.accessOrder = false;
                (() => {
                    this.head = new LinkedHashMap.ChainEntry(this);
                    this.map = new java.util.HashMap<K, LinkedHashMap.ChainEntry>();
                    this.resetChainEntries();
                    this.putAll(toBeCopied);
                })();
            } else if(((typeof ignored === 'number') || ignored === null) && alsoIgnored === undefined && accessOrder === undefined) {
                {
                    var alsoIgnored : any = 0;
                    super(ignored, alsoIgnored);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                    this.accessOrder = false;
                    (() => {
                        this.head = new LinkedHashMap.ChainEntry(this);
                        this.map = new java.util.HashMap<K, LinkedHashMap.ChainEntry>();
                        this.resetChainEntries();
                    })();
                }
                (() => {
                })();
            } else if(ignored === undefined && alsoIgnored === undefined && accessOrder === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                this.accessOrder = false;
                (() => {
                    this.head = new LinkedHashMap.ChainEntry(this);
                    this.map = new java.util.HashMap<K, LinkedHashMap.ChainEntry>();
                    this.resetChainEntries();
                })();
            } else throw new Error('invalid overload');
        }

        public clear() {
            this.map.clear();
            this.resetChainEntries();
        }

        resetChainEntries() {
            this.head.prev = this.head;
            this.head.next = this.head;
        }

        public clone() : any {
            return new LinkedHashMap<K, V>(this);
        }

        public containsKey(key : any) : boolean {
            return this.map.containsKey(key);
        }

        public containsValue(value : any) : boolean {
            var node : LinkedHashMap.ChainEntry = this.head.next;
            while((node !== this.head)){
                if(java.util.Objects.equals(node.getValue(), value)) {
                    return true;
                }
                node = node.next;
            };
            return false;
        }

        public entrySet() : java.util.Set<java.util.Map.Entry<K, V>> {
            return new LinkedHashMap.EntrySet(this);
        }

        public get(key : any) : V {
            var entry : LinkedHashMap.ChainEntry = this.map.get(key);
            if(entry != null) {
                this.recordAccess(entry);
                return entry.getValue();
            }
            return null;
        }

        public put(key? : any, value? : any) : any {
            if(((key != null) || key === null) && ((value != null) || value === null)) {
                return <any>this.put$java_lang_Object$java_lang_Object(key, value);
            } else throw new Error('invalid overload');
        }

        public put$java_lang_Object$java_lang_Object(key : K, value : V) : V {
            var old : LinkedHashMap.ChainEntry = this.map.get(key);
            if(old == null) {
                var newEntry : LinkedHashMap.ChainEntry = new LinkedHashMap.ChainEntry(this, key, value);
                this.map.put(key, newEntry);
                newEntry.addToEnd();
                var eldest : LinkedHashMap.ChainEntry = this.head.next;
                if(this.removeEldestEntry(eldest)) {
                    eldest.remove();
                    this.map.remove(eldest.getKey());
                }
                return null;
            } else {
                var oldValue : V = old.setValue(value);
                this.recordAccess(old);
                return oldValue;
            }
        }

        public remove(key : any) : V {
            var entry : LinkedHashMap.ChainEntry = this.map.remove(key);
            if(entry != null) {
                entry.remove();
                return entry.getValue();
            }
            return null;
        }

        public size() : number {
            return this.map.size();
        }

        removeEldestEntry(eldest : java.util.Map.Entry<K, V>) : boolean {
            return false;
        }

        recordAccess(entry : LinkedHashMap.ChainEntry) {
            if(this.accessOrder) {
                entry.remove();
                entry.addToEnd();
            }
        }
    }

    export namespace LinkedHashMap {

        /**
         * The entry we use includes next/prev pointers for a doubly-linked circular
         * list with a head node. This reduces the special cases we have to deal
         * with in the list operations.
         * 
         * Note that we duplicate the key from the underlying hash map so we can
         * find the eldest entry. The alternative would have been to modify HashMap
         * so more of the code was directly usable here, but this would have added
         * some overhead to HashMap, or to reimplement most of the HashMap code here
         * with small modifications. Paying a small storage cost only if you use
         * LinkedHashMap and minimizing code size seemed like a better tradeoff
         */
        export class ChainEntry extends AbstractMap.SimpleEntry<any, any> {
            public __parent: any;
            next : LinkedHashMap.ChainEntry;

            prev : LinkedHashMap.ChainEntry;

            public constructor(__parent: any, key : any = null, value : any = null) {
                super(key, value);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                this.__parent = __parent;
            }

            /**
             * Add this node to the end of the chain.
             */
            public addToEnd() {
                var tail : LinkedHashMap.ChainEntry = this.__parent.head.prev;
                this.prev = tail;
                this.next = this.__parent.head;
                tail.next = this.__parent.head.prev = this;
            }

            /**
             * Remove this node from any list it may be a part of.
             */
            public remove() {
                this.next.prev = this.prev;
                this.prev.next = this.next;
                this.next = this.prev = null;
            }
        }

        export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any, any>> {
            public __parent: any;
            public clear() {
                this.__parent.clear();
            }

            public contains(o : any) : boolean {
                if(o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0) {
                    return this.__parent.containsEntry(<java.util.Map.Entry<any, any>>o);
                }
                return false;
            }

            public iterator() : java.util.Iterator<java.util.Map.Entry<any, any>> {
                return new EntrySet.EntryIterator(this);
            }

            public remove(index? : any) : any {
                if(((index != null) || index === null)) {
                    return <any>this.remove$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public remove$java_lang_Object(entry : any) : boolean {
                if(this.contains(entry)) {
                    var key : any = (<java.util.Map.Entry<any, any>>entry).getKey();
                    this.__parent.remove(key);
                    return true;
                }
                return false;
            }

            public size() : number {
                return this.__parent.size();
            }

            constructor(__parent: any) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
                this.__parent = __parent;
            }
        }

        export namespace EntrySet {

            export class EntryIterator implements java.util.Iterator<java.util.Map.Entry<any, any>> {
                public __parent: any;
                forEachRemaining(consumer : (p1: any) => void) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while((this.hasNext())){
                        consumer(this.next());
                    };
                }
                last : LinkedHashMap.ChainEntry;

                __next : LinkedHashMap.ChainEntry;

                public constructor(__parent: any) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    this.__next = this.__parent.__parent.head.next;
                    java.util.ConcurrentModificationDetector.recordLastKnownStructure(this.__parent.__parent.map, this);
                }

                public hasNext() : boolean {
                    return this.__next !== this.__parent.__parent.head;
                }

                public next() : java.util.Map.Entry<any, any> {
                    java.util.ConcurrentModificationDetector.checkStructuralChange(this.__parent.__parent.map, this);
                    javaemul.internal.InternalPreconditions.checkCriticalElement(this.hasNext());
                    this.last = this.__next;
                    this.__next = this.__next.next;
                    return this.last;
                }

                public remove() {
                    javaemul.internal.InternalPreconditions.checkState(this.last != null);
                    java.util.ConcurrentModificationDetector.checkStructuralChange(this.__parent.__parent.map, this);
                    this.last.remove();
                    this.__parent.__parent.map.remove(this.last.getKey());
                    java.util.ConcurrentModificationDetector.recordLastKnownStructure(this.__parent.__parent.map, this);
                    this.last = null;
                }
            }
        }

    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.nio.charset {
    /**
     * A minimal emulation of {@link Charset}.
     */
    export abstract class Charset implements java.lang.Comparable<Charset> {
        public static availableCharsets() : java.util.SortedMap<string, Charset> {
            if(Charset.AvailableCharsets.CHARSETS == null) {
                var map : java.util.SortedMap<string, Charset> = new java.util.TreeMap<any, any>();
                map.put(javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$().name(), javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$());
                map.put(javaemul.internal.EmulatedCharset.ISO_LATIN_1_$LI$().name(), javaemul.internal.EmulatedCharset.ISO_LATIN_1_$LI$());
                map.put(javaemul.internal.EmulatedCharset.UTF_8_$LI$().name(), javaemul.internal.EmulatedCharset.UTF_8_$LI$());
                Charset.AvailableCharsets.CHARSETS = java.util.Collections.unmodifiableSortedMap<any, any>(map);
            }
            return Charset.AvailableCharsets.CHARSETS;
        }

        public static forName(charsetName : string) : Charset {
            javaemul.internal.InternalPreconditions.checkArgument(charsetName != null, "Null charset name");
            charsetName = charsetName.toUpperCase();
            if((javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$().name() === charsetName)) {
                return javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$();
            } else if((javaemul.internal.EmulatedCharset.ISO_LATIN_1_$LI$().name() === charsetName)) {
                return javaemul.internal.EmulatedCharset.ISO_LATIN_1_$LI$();
            } else if((javaemul.internal.EmulatedCharset.UTF_8_$LI$().name() === charsetName)) {
                return javaemul.internal.EmulatedCharset.UTF_8_$LI$();
            }
            if(!Charset.createLegalCharsetNameRegex().test(charsetName)) {
                throw new java.nio.charset.IllegalCharsetNameException(charsetName);
            } else {
                throw new java.nio.charset.UnsupportedCharsetException(charsetName);
            }
        }

        static createLegalCharsetNameRegex() : RegExp {
            return new RegExp("^[A-Za-z0-9][\\w-:\\.\\+]*$");
        }

        private __name : string;

        constructor(name : string, aliasesIgnored : string[]) {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable"] });
            this.__name = name;
        }

        public name() : string {
            return this.__name;
        }

        public compareTo(that? : any) : any {
            if(((that != null && that instanceof java.nio.charset.Charset) || that === null)) {
                return <any>(() => {
                    return /* compareToIgnoreCase */this.__name.toUpperCase().localeCompare(that.__name.toUpperCase());
                })();
            } else throw new Error('invalid overload');
        }

        public hashCode() : number {
            return (<any>this.__name.toString());
        }

        public equals(o : any) : boolean {
            if(o === this) {
                return true;
            }
            if(!(o != null && o instanceof java.nio.charset.Charset)) {
                return false;
            }
            var that : Charset = <Charset>o;
            return (this.__name === that.__name);
        }

        public toString() : string {
            return this.__name;
        }
    }

    export namespace Charset {

        export class AvailableCharsets {
            static CHARSETS : java.util.SortedMap<string, java.nio.charset.Charset>;
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Provides Charset implementations.
     */
    export abstract class EmulatedCharset extends java.nio.charset.Charset {
        public static UTF_8 : EmulatedCharset; public static UTF_8_$LI$() : EmulatedCharset { if(EmulatedCharset.UTF_8 == null) EmulatedCharset.UTF_8 = new EmulatedCharset.UtfCharset("UTF-8"); return EmulatedCharset.UTF_8; };

        public static ISO_LATIN_1 : EmulatedCharset; public static ISO_LATIN_1_$LI$() : EmulatedCharset { if(EmulatedCharset.ISO_LATIN_1 == null) EmulatedCharset.ISO_LATIN_1 = new EmulatedCharset.LatinCharset("ISO-LATIN-1"); return EmulatedCharset.ISO_LATIN_1; };

        public static ISO_8859_1 : EmulatedCharset; public static ISO_8859_1_$LI$() : EmulatedCharset { if(EmulatedCharset.ISO_8859_1 == null) EmulatedCharset.ISO_8859_1 = new EmulatedCharset.LatinCharset("ISO-8859-1"); return EmulatedCharset.ISO_8859_1; };

        public constructor(name : string) {
            super(name, null);
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable"] });
        }

        public abstract getBytes(string : string) : number[];

        public abstract decodeString(bytes : number[], ofs : number, len : number) : string[];
    }

    export namespace EmulatedCharset {

        export class LatinCharset extends javaemul.internal.EmulatedCharset {
            public constructor(name : string) {
                super(name);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable"] });
            }

            public getBytes(str : string) : number[] {
                var n : number = str.length;
                var bytes : number[] = new Array(n);
                for(var i : number = 0; i < n; ++i) {
                    bytes[i] = (<number>((str.charAt(i)).charCodeAt(0) & 255)|0);
                }
                return bytes;
            }

            public decodeString(bytes : number[], ofs : number, len : number) : string[] {
                var chars : string[] = new Array(len);
                for(var i : number = 0; i < len; ++i) {
                    chars[i] = String.fromCharCode((bytes[ofs + i] & 255));
                }
                return chars;
            }
        }

        export class UtfCharset extends javaemul.internal.EmulatedCharset {
            public constructor(name : string) {
                super(name);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable"] });
            }

            public decodeString(bytes : number[], ofs : number, len : number) : string[] {
                var charCount : number = 0;
                for(var i : number = 0; i < len; ) {
                    ++charCount;
                    var ch : number = bytes[ofs + i];
                    if((ch & 192) === 128) {
                        throw new java.lang.IllegalArgumentException("Invalid UTF8 sequence");
                    } else if((ch & 128) === 0) {
                        ++i;
                    } else if((ch & 224) === 192) {
                        i += 2;
                    } else if((ch & 240) === 224) {
                        i += 3;
                    } else if((ch & 248) === 240) {
                        i += 4;
                    } else {
                        throw new java.lang.IllegalArgumentException("Invalid UTF8 sequence");
                    }
                    if(i > len) {
                        throw new java.lang.IndexOutOfBoundsException("Invalid UTF8 sequence");
                    }
                }
                var chars : string[] = new Array(charCount);
                var outIdx : number = 0;
                var count : number = 0;
                for(var i : number = 0; i < len; ) {
                    var ch : number = bytes[ofs + i++];
                    if((ch & 128) === 0) {
                        count = 1;
                        ch &= 127;
                    } else if((ch & 224) === 192) {
                        count = 2;
                        ch &= 31;
                    } else if((ch & 240) === 224) {
                        count = 3;
                        ch &= 15;
                    } else if((ch & 248) === 240) {
                        count = 4;
                        ch &= 7;
                    } else if((ch & 252) === 248) {
                        count = 5;
                        ch &= 3;
                    }
                    while((--count > 0)){
                        var b : number = bytes[ofs + i++];
                        if((b & 192) !== 128) {
                            throw new java.lang.IllegalArgumentException("Invalid UTF8 sequence at " + (ofs + i - 1) + ", byte=" + javaemul.internal.IntegerHelper.toHexString(b));
                        }
                        ch = (ch << 6) | (b & 63);
                    };
                    outIdx += javaemul.internal.CharacterHelper.toChars(ch, chars, outIdx);
                }
                return chars;
            }

            public getBytes(str : string) : number[] {
                var n : number = str.length;
                var byteCount : number = 0;
                for(var i : number = 0; i < n; ) {
                    var ch : number = /* codePointAt */str.charCodeAt(i);
                    i += javaemul.internal.CharacterHelper.charCount(ch);
                    if(ch < (1 << 7)) {
                        byteCount++;
                    } else if(ch < (1 << 11)) {
                        byteCount += 2;
                    } else if(ch < (1 << 16)) {
                        byteCount += 3;
                    } else if(ch < (1 << 21)) {
                        byteCount += 4;
                    } else if(ch < (1 << 26)) {
                        byteCount += 5;
                    }
                }
                var bytes : number[] = new Array(byteCount);
                var out : number = 0;
                for(var i : number = 0; i < n; ) {
                    var ch : number = /* codePointAt */str.charCodeAt(i);
                    i += javaemul.internal.CharacterHelper.charCount(ch);
                    out += this.encodeUtf8(bytes, out, ch);
                }
                return bytes;
            }

            /**
             * Encode a single character in UTF8.
             * 
             * @param bytes byte array to store character in
             * @param ofs offset into byte array to store first byte
             * @param codePoint character to encode
             * @return number of bytes consumed by encoding the character
             * @throws IllegalArgumentException if codepoint >= 2^26
             */
            encodeUtf8(bytes : number[], ofs : number, codePoint : number) : number {
                if(codePoint < (1 << 7)) {
                    bytes[ofs] = (<number>(codePoint & 127)|0);
                    return 1;
                } else if(codePoint < (1 << 11)) {
                    bytes[ofs++] = (<number>(((codePoint >> 6) & 31) | 192)|0);
                    bytes[ofs] = (<number>((codePoint & 63) | 128)|0);
                    return 2;
                } else if(codePoint < (1 << 16)) {
                    bytes[ofs++] = (<number>(((codePoint >> 12) & 15) | 224)|0);
                    bytes[ofs++] = (<number>(((codePoint >> 6) & 63) | 128)|0);
                    bytes[ofs] = (<number>((codePoint & 63) | 128)|0);
                    return 3;
                } else if(codePoint < (1 << 21)) {
                    bytes[ofs++] = (<number>(((codePoint >> 18) & 7) | 240)|0);
                    bytes[ofs++] = (<number>(((codePoint >> 12) & 63) | 128)|0);
                    bytes[ofs++] = (<number>(((codePoint >> 6) & 63) | 128)|0);
                    bytes[ofs] = (<number>((codePoint & 63) | 128)|0);
                    return 4;
                } else if(codePoint < (1 << 26)) {
                    bytes[ofs++] = (<number>(((codePoint >> 24) & 3) | 248)|0);
                    bytes[ofs++] = (<number>(((codePoint >> 18) & 63) | 128)|0);
                    bytes[ofs++] = (<number>(((codePoint >> 12) & 63) | 128)|0);
                    bytes[ofs++] = (<number>(((codePoint >> 6) & 63) | 128)|0);
                    bytes[ofs] = (<number>((codePoint & 63) | 128)|0);
                    return 5;
                }
                throw new java.lang.IllegalArgumentException("Character out of range: " + codePoint);
            }
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Represents an error caused by an assertion failure.
     */
    export class AssertionError extends Error {
        public constructor(message? : any, cause? : any) {
            if(((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'string') || message === null) && cause === undefined) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'boolean') || message === null) && cause === undefined) {
                {
                    var message : any = /* valueOf */new String(message).toString();
                    super(/* valueOf */new String(message).toString()); this.message=/* valueOf */new String(message).toString();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (() => {
                    })();
                }
                (() => {
                })();
            } else if(((typeof message === 'string') || message === null) && cause === undefined) {
                {
                    var message : any = /* valueOf */new String(message).toString();
                    super(/* valueOf */new String(message).toString()); this.message=/* valueOf */new String(message).toString();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (() => {
                    })();
                }
                (() => {
                })();
            } else if(((typeof message === 'number') || message === null) && cause === undefined) {
                {
                    var message : any = /* valueOf */new String(message).toString();
                    super(/* valueOf */new String(message).toString()); this.message=/* valueOf */new String(message).toString();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (() => {
                    })();
                }
                (() => {
                })();
            } else if(((typeof message === 'number') || message === null) && cause === undefined) {
                {
                    var message : any = /* valueOf */new String(message).toString();
                    super(/* valueOf */new String(message).toString()); this.message=/* valueOf */new String(message).toString();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (() => {
                    })();
                }
                (() => {
                })();
            } else if(((typeof message === 'number') || message === null) && cause === undefined) {
                {
                    var message : any = /* valueOf */new String(message).toString();
                    super(/* valueOf */new String(message).toString()); this.message=/* valueOf */new String(message).toString();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (() => {
                    })();
                }
                (() => {
                })();
            } else if(((typeof message === 'number') || message === null) && cause === undefined) {
                {
                    var message : any = /* valueOf */new String(message).toString();
                    super(/* valueOf */new String(message).toString()); this.message=/* valueOf */new String(message).toString();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (() => {
                    })();
                }
                (() => {
                })();
            } else if(((message != null) || message === null) && cause === undefined) {
                super(/* valueOf */new String(message).toString()); this.message=/* valueOf */new String(message).toString();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined && cause === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Used to declare interfaces which must have a single abstract method.
     */
    export interface FunctionalInterface {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A tag interface that other "listener" interfaces can extend to indicate their
     * adherence to the observer pattern.
     */
    export interface EventListener {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Encapsulates an action for later execution. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html">[Sun
     * docs]</a>
     * 
     * <p>
     * This interface is provided only for JRE compatibility. GWT does not support
     * multithreading.
     * </p>
     */
    export interface Runnable {
        run();
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util.logging {
    /**
     * An emulation of the java.util.logging.Handler class. See
     * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/Handler.html">
     * The Java API doc for details</a>
     */
    export abstract class Handler {
        private formatter : java.util.logging.Formatter;

        private level : java.util.logging.Level;

        public abstract close();

        public abstract flush();

        public getFormatter() : java.util.logging.Formatter {
            return this.formatter;
        }

        public getLevel() : java.util.logging.Level {
            if(this.level != null) {
                return this.level;
            }
            return java.util.logging.Level.ALL_$LI$();
        }

        public isLoggable(record : java.util.logging.LogRecord) : boolean {
            return this.getLevel().intValue() <= record.getLevel().intValue();
        }

        public abstract publish(record : java.util.logging.LogRecord);

        public setFormatter(newFormatter : java.util.logging.Formatter) {
            this.formatter = newFormatter;
        }

        public setLevel(newLevel : java.util.logging.Level) {
            this.level = newLevel;
        }

        constructor() {
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util.logging {
    /**
     * A simple console logger used in super dev mode.
     */
    export class SimpleConsoleLogHandler extends java.util.logging.Handler {
        public publish(record : java.util.logging.LogRecord) {
            if(!this.isLoggable(record)) {
                return;
            }
            var level : string = this.toConsoleLogLevel(record.getLevel());
            console.log(level, record.getMessage());
            if(record.getThrown() != null) {
                console.log(level, record.getThrown());
            }
        }

        private toConsoleLogLevel(level : java.util.logging.Level) : string {
            var val : number = level.intValue();
            if(val >= java.util.logging.Level.SEVERE_$LI$().intValue()) {
                return "error";
            } else if(val >= java.util.logging.Level.WARNING_$LI$().intValue()) {
                return "warn";
            } else if(val >= java.util.logging.Level.INFO_$LI$().intValue()) {
                return "info";
            } else {
                return "log";
            }
        }

        public close() {
        }

        public flush() {
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Map using reference equality on keys. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/IdentityHashMap.html">[Sun
     * docs]</a>
     * 
     * @param <K> key type
     * @param <V> value type
     */
    export class IdentityHashMap<K, V> extends java.util.AbstractHashMap<K, V> implements java.util.Map<K, V>, java.lang.Cloneable, java.io.Serializable {
        /**
         * Ensures that RPC will consider type parameter K to be exposed. It will be
         * pruned by dead code elimination.
         */
        private exposeKey : K;

        /**
         * Ensures that RPC will consider type parameter V to be exposed. It will be
         * pruned by dead code elimination.
         */
        private exposeValue : V;

        public constructor(toBeCopied? : any) {
            if(((toBeCopied != null && toBeCopied["__interfaces"] != null && toBeCopied["__interfaces"].indexOf("java.util.Map") >= 0) || toBeCopied === null)) {
                super(toBeCopied);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof toBeCopied === 'number') || toBeCopied === null)) {
                var ignored : any = toBeCopied;
                super(ignored);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                (() => {
                })();
            } else if(toBeCopied === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable","java.util.Map","java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public clone() : any {
            return new IdentityHashMap<K, V>(this);
        }

        public equals(obj : any) : boolean {
            if(obj === this) {
                return true;
            }
            if(!(obj != null && obj["__interfaces"] != null && obj["__interfaces"].indexOf("java.util.Map") >= 0)) {
                return false;
            }
            var otherMap : java.util.Map<any, any> = <java.util.Map<any, any>>obj;
            if(this.size() !== otherMap.size()) {
                return false;
            }
            for(var index171=otherMap.entrySet().iterator();index171.hasNext();) {
                var entry = index171.next();
                {
                    var otherKey : any = entry.getKey();
                    var otherValue : any = entry.getValue();
                    if(!this.containsKey(otherKey)) {
                        return false;
                    }
                    if(otherValue !== this.get(otherKey)) {
                        return false;
                    }
                }
            }
            return true;
        }

        public hashCode() : number {
            var hashCode : number = 0;
            for(var index172=this.entrySet().iterator();index172.hasNext();) {
                var entry = index172.next();
                {
                    hashCode += java.lang.System.identityHashCode(entry.getKey());
                    hashCode += java.lang.System.identityHashCode(entry.getValue());
                }
            }
            return hashCode;
        }

        _equals(value1 : any, value2 : any) : boolean {
            return value1 === value2;
        }

        getHashCode(key : any) : number {
            return javaemul.internal.HashCodes.getObjectIdentityHashCode(key);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.nio.charset {
    /**
     * Constant definitions for the standard Charsets.
     */
    export class StandardCharsets {
        public static ISO_8859_1 : java.nio.charset.Charset; public static ISO_8859_1_$LI$() : java.nio.charset.Charset { if(StandardCharsets.ISO_8859_1 == null) StandardCharsets.ISO_8859_1 = javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$(); return StandardCharsets.ISO_8859_1; };

        public static UTF_8 : java.nio.charset.Charset; public static UTF_8_$LI$() : java.nio.charset.Charset { if(StandardCharsets.UTF_8 == null) StandardCharsets.UTF_8 = javaemul.internal.EmulatedCharset.UTF_8_$LI$(); return StandardCharsets.UTF_8; };

        constructor() {
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.annotation {
    /**
     * Annotation which indicates annotations should be documented by javadoc/etc <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/Documented.html">[Sun
     * docs]</a>.
     */
    export interface Documented {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Skeletal implementation of the Queue interface. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractQueue.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export abstract class AbstractQueue<E> extends java.util.AbstractCollection<E> implements java.util.Queue<E> {
        forEach(action : (p1: any) => void) {
            javaemul.internal.InternalPreconditions.checkNotNull(action);
            for(var index173=this.iterator();index173.hasNext();) {
                var t = index173.next();
                {
                    action(t);
                }
            }
        }
        public abstract iterator(): any;
        public abstract size(): any;
        constructor() {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Queue","java.lang.Iterable"] });
        }

        public add(index? : any, element? : any) : any {
            if(((index != null) || index === null) && element === undefined) {
                return <any>this.add$java_lang_Object(index);
            } else throw new Error('invalid overload');
        }

        public add$java_lang_Object(o : E) : boolean {
            javaemul.internal.InternalPreconditions.checkState(this.offer(o), "Unable to add element to queue");
            return true;
        }

        public addAll(index? : any, c? : any) : any {
            if(((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                return <any>this.addAll$java_util_Collection(index);
            } else throw new Error('invalid overload');
        }

        public addAll$java_util_Collection(c : java.util.Collection<any>) : boolean {
            javaemul.internal.InternalPreconditions.checkNotNull(c);
            javaemul.internal.InternalPreconditions.checkArgument(c !== this, "Can\'t add a queue to itself");
            return super.addAll(c);
        }

        public clear() {
            while((this.poll() != null)){
            };
        }

        public element() : E {
            var e : E = this.peek();
            javaemul.internal.InternalPreconditions.checkElement(e != null, "Queue is empty");
            return e;
        }

        public abstract offer(o : E) : boolean;

        public abstract peek() : E;

        public abstract poll() : E;

        public remove(index? : any) : any {
            if(((index != null) || index === null)) {
                return <any>this.remove$java_lang_Object(index);
            } else if(index === undefined) {
                return <any>this.remove$();
            } else throw new Error('invalid overload');
        }

        public remove$() : E {
            var e : E = this.poll();
            javaemul.internal.InternalPreconditions.checkElement(e != null, "Queue is empty");
            return e;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * An unbounded priority queue based on a priority heap. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/PriorityQueue.html">[Sun
     * docs]</a>
     * 
     * @param <E> element type.
     */
    export class PriorityQueue<E> extends java.util.AbstractQueue<E> {
        private static getLeftChild(node : number) : number {
            return 2 * node + 1;
        }

        private static getParent(node : number) : number {
            return ((node - 1) / 2|0);
        }

        private static getRightChild(node : number) : number {
            return 2 * node + 2;
        }

        private static isLeaf(node : number, size : number) : boolean {
            return node * 2 + 1 >= size;
        }

        private cmp : java.util.Comparator<any>;

        /**
         * A heap held in an array. heap[0] is the root of the heap (the smallest
         * element), the subtrees of node i are 2*i+1 (left) and 2*i+2 (right). Node i
         * is a leaf node if 2*i>=n. Node i's parent, if i>0, is floor((i-1)/2).
         */
        private heap : java.util.ArrayList<E>;

        public constructor(initialCapacity? : any, cmp? : any) {
            if(((typeof initialCapacity === 'number') || initialCapacity === null) && ((cmp != null && cmp["__interfaces"] != null && cmp["__interfaces"].indexOf("java.util.Comparator") >= 0) || cmp === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Queue","java.lang.Iterable"] });
                (() => {
                    this.heap = new java.util.ArrayList<E>(initialCapacity);
                    if(cmp == null) {
                        cmp = java.util.Comparators.natural<any>();
                    }
                    this.cmp = cmp;
                })();
            } else if(((initialCapacity != null && initialCapacity instanceof java.util.PriorityQueue) || initialCapacity === null) && cmp === undefined) {
                var c : any = initialCapacity;
                {
                    var initialCapacity : any = c.size();
                    var cmp : any = <java.util.Comparator<any>>c.comparator();
                    super();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Queue","java.lang.Iterable"] });
                    (() => {
                        this.heap = new java.util.ArrayList<E>(initialCapacity);
                        if(cmp == null) {
                            cmp = java.util.Comparators.natural<any>();
                        }
                        this.cmp = cmp;
                    })();
                }
                (() => {
                    this.addAll(c);
                })();
            } else if(((initialCapacity != null && initialCapacity["__interfaces"] != null && initialCapacity["__interfaces"].indexOf("java.util.SortedSet") >= 0) || initialCapacity === null) && cmp === undefined) {
                var c : any = initialCapacity;
                {
                    var initialCapacity : any = c.size();
                    var cmp : any = <java.util.Comparator<any>>c.comparator();
                    super();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Queue","java.lang.Iterable"] });
                    (() => {
                        this.heap = new java.util.ArrayList<E>(initialCapacity);
                        if(cmp == null) {
                            cmp = java.util.Comparators.natural<any>();
                        }
                        this.cmp = cmp;
                    })();
                }
                (() => {
                    this.addAll(c);
                })();
            } else if(((initialCapacity != null && initialCapacity["__interfaces"] != null && initialCapacity["__interfaces"].indexOf("java.util.Collection") >= 0) || initialCapacity === null) && cmp === undefined) {
                var c : any = initialCapacity;
                {
                    var initialCapacity : any = c.size();
                    {
                        var cmp : any = null;
                        super();
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Queue","java.lang.Iterable"] });
                        (() => {
                            this.heap = new java.util.ArrayList<E>(initialCapacity);
                            if(cmp == null) {
                                cmp = java.util.Comparators.natural<any>();
                            }
                            this.cmp = cmp;
                        })();
                    }
                    (() => {
                    })();
                }
                (() => {
                    this.addAll(c);
                })();
            } else if(((typeof initialCapacity === 'number') || initialCapacity === null) && cmp === undefined) {
                {
                    var cmp : any = null;
                    super();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Queue","java.lang.Iterable"] });
                    (() => {
                        this.heap = new java.util.ArrayList<E>(initialCapacity);
                        if(cmp == null) {
                            cmp = java.util.Comparators.natural<any>();
                        }
                        this.cmp = cmp;
                    })();
                }
                (() => {
                })();
            } else if(initialCapacity === undefined && cmp === undefined) {
                {
                    var initialCapacity : any = 11;
                    {
                        var cmp : any = null;
                        super();
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Queue","java.lang.Iterable"] });
                        (() => {
                            this.heap = new java.util.ArrayList<E>(initialCapacity);
                            if(cmp == null) {
                                cmp = java.util.Comparators.natural<any>();
                            }
                            this.cmp = cmp;
                        })();
                    }
                    (() => {
                    })();
                }
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public addAll(index? : any, c? : any) : any {
            if(((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                return <any>this.addAll$java_util_Collection(index);
            } else throw new Error('invalid overload');
        }

        public addAll$java_util_Collection(c : java.util.Collection<any>) : boolean {
            if(this.heap.addAll(c)) {
                this.makeHeap(0);
                return true;
            }
            return false;
        }

        public clear() {
            this.heap.clear();
        }

        public comparator() : java.util.Comparator<any> {
            return this.cmp === java.util.Comparators.natural<any>()?null:this.cmp;
        }

        public contains(o : any) : boolean {
            return this.heap.contains(o);
        }

        public containsAll(c : java.util.Collection<any>) : boolean {
            return this.heap.containsAll(c);
        }

        public isEmpty() : boolean {
            return this.heap.isEmpty();
        }

        public iterator() : java.util.Iterator<E> {
            return java.util.Collections.unmodifiableList<any>(this.heap).iterator();
        }

        public offer(e : E) : boolean {
            var node : number = this.heap.size();
            this.heap.add(e);
            while((node > 0)){
                var childNode : number = node;
                node = PriorityQueue.getParent(node);
                if(this.cmp.compare(this.heap.get(node), e) <= 0) {
                    this.heap.set(childNode, e);
                    return true;
                }
                this.heap.set(childNode, this.heap.get(node));
            };
            this.heap.set(node, e);
            return true;
        }

        public peek() : E {
            if(this.heap.size() === 0) {
                return null;
            }
            return this.heap.get(0);
        }

        public poll() : E {
            if(this.heap.size() === 0) {
                return null;
            }
            var value : E = this.heap.get(0);
            this.removeAtIndex(0);
            return value;
        }

        public remove(index? : any) : any {
            if(((index != null) || index === null)) {
                return <any>this.remove$java_lang_Object(index);
            } else if(index === undefined) {
                return <any>this.remove$();
            } else throw new Error('invalid overload');
        }

        public remove$java_lang_Object(o : any) : boolean {
            var index : number = this.heap.indexOf(o);
            if(index < 0) {
                return false;
            }
            this.removeAtIndex(index);
            return true;
        }

        public removeAll(c : java.util.Collection<any>) : boolean {
            if(this.heap.removeAll(c)) {
                this.makeHeap(0);
                return true;
            }
            return false;
        }

        public retainAll(c : java.util.Collection<any>) : boolean {
            if(this.heap.retainAll(c)) {
                this.makeHeap(0);
                return true;
            }
            return false;
        }

        public size() : number {
            return this.heap.size();
        }

        public toArray$() : any[] {
            return this.heap.toArray();
        }

        public toArray<T>(a? : any) : any {
            if(((a != null && a instanceof Array) || a === null)) {
                return <any>(() => {
                    return this.heap.toArray(a);
                })();
            } else if(a === undefined) {
                return <any>this.toArray$();
            } else throw new Error('invalid overload');
        }

        public toString() : string {
            return this.heap.toString();
        }

        /**
         * Make the subtree rooted at <code>node</code> a valid heap. O(n) time
         * 
         * @param node
         */
        makeHeap(node : number) {
            if(this.isLeaf(node)) {
                return;
            }
            this.makeHeap(PriorityQueue.getLeftChild(node));
            var rightChild : number = PriorityQueue.getRightChild(node);
            if(rightChild < this.heap.size()) {
                this.makeHeap(rightChild);
            }
            this.mergeHeaps(node);
        }

        /**
         * Merge two subheaps into a single heap. O(log n) time
         * 
         * PRECONDITION: both children of <code>node</code> are heaps
         * 
         * @param node the parent of the two subtrees to merge
         */
        mergeHeaps(node : number) {
            var heapSize : number = this.heap.size();
            var value : E = this.heap.get(node);
            while((!PriorityQueue.isLeaf(node, heapSize))){
                var smallestChild : number = this.getSmallestChild(node, heapSize);
                if(this.cmp.compare(value, this.heap.get(smallestChild)) < 0) {
                    break;
                }
                this.heap.set(node, this.heap.get(smallestChild));
                node = smallestChild;
            };
            this.heap.set(node, value);
        }

        private getSmallestChild(node : number, heapSize : number) : number {
            var smallestChild : number;
            var leftChild : number = PriorityQueue.getLeftChild(node);
            var rightChild : number = leftChild + 1;
            smallestChild = leftChild;
            if((rightChild < heapSize) && (this.cmp.compare(this.heap.get(rightChild), this.heap.get(leftChild)) < 0)) {
                smallestChild = rightChild;
            }
            return smallestChild;
        }

        private isLeaf(node : number) : boolean {
            return PriorityQueue.isLeaf(node, this.heap.size());
        }

        private removeAtIndex(index : number) {
            var lastValue : E = this.heap.remove(this.heap.size() - 1);
            if(index < this.heap.size()) {
                this.heap.set(index, lastValue);
                this.mergeHeaps(index);
            }
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal.annotations {
    /**
     * An annotation to mark a given method as being specialized. If the specified
     * parameters and return context match of a JMethodCall, then the call
     * is retargeted at the specialized version.
     */
    export interface SpecializeMethod {
        /**
         * List of parameter types, matched via assignability.
         */
        params() : any[];

        /**
         * List of return types to match, or null if you don't care.
         */
        returns() : any;

        /**
         * The name of the method to target. It must have a signature matching to the {@link #params()}.
         */
        target() : string;
    }

    export namespace SpecializeMethod {

        /**
         * Represents a type that matches any type, even void.
         */
        export interface ANY {        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A collection designed for holding elements prior to processing. <a
     * href="http://docs.oracle.com/javase/6/docs/api/java/util/Deque.html">Deque</a>
     * 
     * @param <E> element type.
     */
    export interface Deque<E> extends java.util.Queue<E> {
        addFirst(e : E);

        addLast(e : E);

        descendingIterator() : java.util.Iterator<E>;

        getFirst() : E;

        getLast() : E;

        offerFirst(e : E) : boolean;

        offerLast(e : E) : boolean;

        peekFirst() : E;

        peekLast() : E;

        pollFirst() : E;

        pollLast() : E;

        pop() : E;

        push(e : E);

        removeFirst() : E;

        removeFirstOccurrence(o : any) : boolean;

        removeLast() : E;

        removeLastOccurrence(o : any) : boolean;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util.logging {
    /**
     * An emulation of the java.util.logging.LogRecord class. See
     * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/LogRecord.html">
     * The Java API doc for details</a>
     */
    export class LogRecord implements java.io.Serializable {
        private level : java.util.logging.Level;

        private loggerName : string = "";

        private msg : string;

        private thrown : Error = null;

        private millis : number;

        public constructor(level? : any, msg? : any) {
            if(((level != null && level instanceof java.util.logging.Level) || level === null) && ((typeof msg === 'string') || msg === null)) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                this.millis = 0;
                (() => {
                    this.level = level;
                    this.msg = msg;
                    this.millis = java.lang.System.currentTimeMillis();
                })();
            } else if(level === undefined && msg === undefined) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                this.millis = 0;
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public getLevel() : java.util.logging.Level {
            return this.level;
        }

        public getLoggerName() : string {
            return this.loggerName;
        }

        public getMessage() : string {
            return this.msg;
        }

        public getMillis() : number {
            return this.millis;
        }

        public getThrown() : Error {
            return this.thrown;
        }

        public setLevel(newLevel : java.util.logging.Level) {
            this.level = newLevel;
        }

        public setLoggerName(newName : string) {
            this.loggerName = newName;
        }

        public setMessage(newMessage : string) {
            this.msg = newMessage;
        }

        public setMillis(newMillis : number) {
            this.millis = newMillis;
        }

        public setThrown(newThrown : Error) {
            this.thrown = newThrown;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * A specialized {@link InputStream } for reading the contents of a byte array.
     * 
     * @see ByteArrayOutputStream
     */
    export class ByteArrayInputStream extends java.io.InputStream {
        /**
         * The {@code byte} array containing the bytes to stream over.
         */
        buf : number[];

        /**
         * The current position within the byte array.
         */
        pos : number;

        /**
         * The current mark position. Initially set to 0 or the <code>offset</code>
         * parameter within the constructor.
         */
        _mark : number;

        /**
         * The total number of bytes initially available in the byte array
         * {@code buf}.
         */
        count : number;

        /**
         * Constructs a new {@code ByteArrayInputStream} on the byte array
         * {@code buf} with the initial position set to {@code offset} and the
         * number of bytes available set to {@code offset} + {@code length}.
         * 
         * @param buf
         * the byte array to stream over.
         * @param offset
         * the initial position in {@code buf} to start streaming from.
         * @param length
         * the number of bytes available for streaming.
         */
        public constructor(buf : number[], offset : number = 0, length : number = -1) {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable","java.lang.AutoCloseable"] });
            this.pos = 0;
            this._mark = 0;
            this.count = 0;
            if(length === -1) {
                length = buf.length;
            }
            this.buf = buf;
            this.pos = offset;
            this._mark = offset;
            this.count = offset + length > buf.length?buf.length:offset + length;
        }

        /**
         * Returns the number of remaining bytes.
         * 
         * @return {@code count - pos}
         */
        public available() : number {
            return this.count - this.pos;
        }

        /**
         * Closes this stream and frees resources associated with this stream.
         * 
         * @throws IOException
         * if an I/O error occurs while closing this stream.
         */
        public close() {
        }

        /**
         * Sets a mark position in this ByteArrayInputStream. The parameter
         * {@code readlimit} is ignored. Sending {@code reset()} will reposition the
         * stream back to the marked position.
         * 
         * @param readlimit
         * ignored.
         * @see #markSupported()
         * @see #reset()
         */
        public mark(readlimit : number) {
            this._mark = this.pos;
        }

        /**
         * Indicates whether this stream supports the {@code mark()} and
         * {@code reset()} methods. Returns {@code true} since this class supports
         * these methods.
         * 
         * @return always {@code true}.
         * @see #mark(int)
         * @see #reset()
         */
        public markSupported() : boolean {
            return true;
        }

        /**
         * Reads a single byte from the source byte array and returns it as an
         * integer in the range from 0 to 255. Returns -1 if the end of the source
         * array has been reached.
         * 
         * @return the byte read or -1 if the end of this stream has been reached.
         */
        public read$() : number {
            return this.read(null, 0, 0);
        }

        public read(buffer? : any, byteOffset? : any, byteCount? : any) : any {
            if(((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                return <any>(() => {
                    if(buffer == null) {
                        return this.pos < this.count?this.buf[this.pos++] & 255:-1;
                    }
                    java.io.IOUtils.checkOffsetAndCount(buffer, byteOffset, byteCount);
                    if(this.pos >= this.count) {
                        return -1;
                    }
                    if(byteCount === 0) {
                        return 0;
                    }
                    var copylen : number = this.count - this.pos < byteCount?this.count - this.pos:byteCount;
                    java.lang.System.arraycopy(this.buf, this.pos, buffer, byteOffset, copylen);
                    this.pos += copylen;
                    return copylen;
                })();
            } else if(((buffer != null && buffer instanceof Array) || buffer === null) && byteOffset === undefined && byteCount === undefined) {
                return <any>this.read$byte_A(buffer);
            } else if(buffer === undefined && byteOffset === undefined && byteCount === undefined) {
                return <any>this.read$();
            } else throw new Error('invalid overload');
        }

        /**
         * Resets this stream to the last marked location. This implementation
         * resets the position to either the marked position, the start position
         * supplied in the constructor or 0 if neither has been provided.
         * 
         * @see #mark(int)
         */
        public reset() {
            this.pos = this._mark;
        }

        /**
         * Skips {@code byteCount} bytes in this InputStream. Subsequent calls to
         * {@code read} will not return these bytes unless {@code reset} is used.
         * This implementation skips {@code byteCount} number of bytes in the target
         * stream. It does nothing and returns 0 if {@code byteCount} is negative.
         * 
         * @return the number of bytes actually skipped.
         */
        public skip(byteCount : number) : number {
            if(byteCount <= 0) {
                return 0;
            }
            var temp : number = this.pos;
            this.pos = this.count - this.pos < byteCount?this.count:(<number>(this.pos + byteCount)|0);
            return this.pos - temp;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Contains logics for calculating hash codes in JavaScript.
     */
    export class HashCodes {
        private static sNextHashId : number = 0;

        private static HASH_CODE_PROPERTY : string = "$H";

        public static hashCodeForString(s : string) : number {
            return javaemul.internal.StringHashCache.getHashCode(s);
        }

        public static getIdentityHashCode(o : any) : number {
            if(o == null) {
                return 0;
            }
            return (typeof o === 'string')?HashCodes.hashCodeForString(javaemul.internal.JsUtils.unsafeCastToString(o)):HashCodes.getObjectIdentityHashCode(o);
        }

        public static getObjectIdentityHashCode(o : any) : number {
            if(o[HashCodes.HASH_CODE_PROPERTY] != null) {
                return o[HashCodes.HASH_CODE_PROPERTY];
            } else {
                return o[HashCodes.HASH_CODE_PROPERTY] = <any>HashCodes.getNextHashId();
            }
        }

        /**
         * Called from JSNI. Do not change this implementation without updating:
         * <ul>
         * <li>{@link com.google.gwt.user.client.rpc.impl.SerializerBase}</li>
         * </ul>
         */
        private static getNextHashId() : number {
            return ++HashCodes.sNextHashId;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Allows an instance of a class implementing this interface to be used in the
     * foreach statement.
     * See <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html">
     * the official Java API doc</a> for details.
     * 
     * @param <T> type of returned iterator
     */
    export interface Iterable<T> {
        iterator() : java.util.Iterator<T>;

        forEach(action : (p1: any) => void);
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * A utility to provide array stamping. Provided as a separate class to simplify
     * super-source.
     */
    export class ArrayStamper {
        public static stampJavaTypeInfo<T>(array : any, referenceType : T[]) : T[] {
            return (<any>array);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Indicates that a data structure supports constant-time random access to its
     * contained objects.
     */
    export interface RandomAccess {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * The first-class representation of an enumeration.
     * 
     * @param <E>
     */
    export abstract class Enum<E extends java.lang.Enum<E>> implements java.lang.Comparable<E>, java.io.Serializable {
        public static valueOf<T extends java.lang.Enum<T>>(enumType? : any, name? : any) : any {
            if(((enumType != null && enumType instanceof java.lang.Class) || enumType === null) && ((typeof name === 'string') || name === null)) {
                return <any>(() => {
                    var enumValueOfFunc : Function = javaemul.internal.InternalPreconditions.checkNotNull(enumType).enumValueOfFunc;
                    javaemul.internal.InternalPreconditions.checkCriticalArgument(enumValueOfFunc != null);
                    javaemul.internal.InternalPreconditions.checkNotNull(name);
                    return Enum.invokeValueOf<any>(enumValueOfFunc, name);
                })();
            } else if(((enumType != null && enumType instanceof Object) || enumType === null) && ((typeof name === 'string') || name === null)) {
                return <any>java.lang.Enum.valueOf$jsweet_lang_Object$java_lang_String(enumType, name);
            } else throw new Error('invalid overload');
        }

        static createValueOfMap<T extends java.lang.Enum<T>>(enumConstants : T[]) : Object {
            var result : Object = <Object>new Object();
            for(var index174=0; index174 < enumConstants.length; index174++) {
                var value = enumConstants[index174];
                {
                    Enum.put0<any>(result, ":" + value.name(), value);
                }
            }
            return result;
        }

        static valueOf$jsweet_lang_Object$java_lang_String<T extends java.lang.Enum<T>>(map : Object, name : string) : T {
            javaemul.internal.InternalPreconditions.checkNotNull(name);
            var result : T = java.lang.Enum.get0<T>(map, ":" + name);
            javaemul.internal.InternalPreconditions.checkCriticalArgument(result != null, "Enum constant undefined: %s", name);
            return result;
        }

        private static get0<T extends java.lang.Enum<T>>(map : Object, name : string) : T {
            return <T>map[name];
        }

        private static invokeValueOf<T extends java.lang.Enum<T>>(enumValueOfFunc : Function, name : string) : T {
            return (<any>enumValueOfFunc)(name);
        }

        private static put0<T extends java.lang.Enum<T>>(map : Object, name : string, value : T) {
            map[name] = value;
        }

        private __name : string;

        private __ordinal : number;

        constructor(name : string, ordinal : number) {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
            this.__ordinal = 0;
            this.__name = name;
            this.__ordinal = ordinal;
        }

        public compareTo(other? : any) : any {
            if(((other != null) || other === null)) {
                return <any>(() => {
                    return this.__ordinal - (<java.lang.Enum<any>>other).__ordinal;
                })();
            } else throw new Error('invalid overload');
        }

        public getDeclaringClass() : any {
            return null;
        }

        public name() : string {
            return this.__name != null?this.__name:"" + this.__ordinal;
        }

        public ordinal() : number {
            return this.__ordinal;
        }

        public toString() : string {
            return this.name();
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * An interface used a basis for implementing custom ordering. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Comparable.html">[Sun
     * docs]</a>
     * 
     * @param <T> the type to compare to.
     */
    export interface Comparable<T> {
        compareTo(b? : any) : any;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Exception.html">the
     * official Java API doc</a> for details.
     */
    export class Exception extends Error {
        public constructor(message? : any, cause? : any, enableSuppression? : any, writableStackTrace? : any) {
            if(((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null) && ((typeof enableSuppression === 'boolean') || enableSuppression === null) && ((typeof writableStackTrace === 'boolean') || writableStackTrace === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null) && enableSuppression === undefined && writableStackTrace === undefined) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'string') || message === null) && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((message != null && message instanceof Error) || message === null) && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                var cause : any = message;
                super(cause); this.message=cause;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/RuntimeException.html">the
     * official Java API doc</a> for details.
     */
    export class RuntimeException extends Error {
        public constructor(message? : any, cause? : any, enableSuppression? : any, writableStackTrace? : any) {
            if(((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null) && ((typeof enableSuppression === 'boolean') || enableSuppression === null) && ((typeof writableStackTrace === 'boolean') || writableStackTrace === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null) && enableSuppression === undefined && writableStackTrace === undefined) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'string') || message === null) && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((message != null && message instanceof Error) || message === null) && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                var cause : any = message;
                super(cause); this.message=cause;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/ConcurrentModificationException.html">the
     * official Java API doc</a> for details.
     */
    export class ConcurrentModificationException extends Error {
        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * See <a
     * href="http://java.sun.com/javase/6/docs/api/java/io/IOException.html">the
     * official Java API doc</a> for details.
     */
    export class IOException extends Error {
        public constructor(message? : any, throwable? : any) {
            if(((typeof message === 'string') || message === null) && ((throwable != null && throwable instanceof Error) || throwable === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'string') || message === null) && throwable === undefined) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((message != null && message instanceof Error) || message === null) && throwable === undefined) {
                var throwable : any = message;
                super(throwable); this.message=throwable;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined && throwable === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * A character encoding is not supported - <a
     * href="http://java.sun.com/javase/6/docs/api/java/io/UnsupportedEncodingException.html">[Sun's
     * docs]</a>.
     */
    export class UnsupportedEncodingException extends java.io.IOException {
        public constructor(msg? : any) {
            if(((typeof msg === 'string') || msg === null)) {
                super(msg);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(msg === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/MissingResourceException.html">the
     * official Java API doc</a> for details.
     */
    export class MissingResourceException extends Error {
        private className : string;

        private key : string;

        public constructor(s : string, className : string, key : string) {
            super(s); this.message=s;
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            this.key = key;
            this.className = className;
        }

        public getClassName() : string {
            return this.className;
        }

        public getKey() : string {
            return this.key;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/NegativeArraySizeException.html">the
     * official Java API doc</a> for details.
     */
    export class NegativeArraySizeException extends Error {
        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.annotation {
    /**
     * Indicates an attempt to access an element of an annotation that was added
     * since it was compiled or serialized <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/IncompleteAnnotationException.html">[Sun
     * docs]</a>.
     */
    export class IncompleteAnnotationException extends Error {
        public __annotationType : any;

        public __elementName : string;

        public constructor(annotationType : any, elementName : string) {
            super("Incomplete annotation: trying to access " + elementName + " on " + annotationType); this.message="Incomplete annotation: trying to access " + elementName + " on " + annotationType;
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            this.__annotationType = annotationType;
            this.__elementName = elementName;
        }

        public annotationType() : any {
            return this.__annotationType;
        }

        public elementName() : string {
            return this.__elementName;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/CloneNotSupportedException.html">
     * the official Java API doc</a> for details.
     */
    export class CloneNotSupportedException extends Error {
        public constructor(msg? : any) {
            if(((typeof msg === 'string') || msg === null)) {
                super(msg); this.message=msg;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(msg === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Indicates that an objet was in an invalid state during an attempted
     * operation.
     */
    export class IllegalStateException extends Error {
        public constructor(message? : any, cause? : any) {
            if(((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'string') || message === null) && cause === undefined) {
                var s : any = message;
                super(s); this.message=s;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((message != null && message instanceof Error) || message === null) && cause === undefined) {
                var cause : any = message;
                super(cause); this.message=cause;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined && cause === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/NoSuchMethodException.html">the
     * official Java API doc</a> for details.
     * 
     * This exception is never thrown by GWT or GWT's libraries, as GWT does not support reflection. It
     * is provided in GWT only for compatibility with user code that explicitly throws or catches it for
     * non-reflection purposes.
     */
    export class NoSuchMethodException extends Error {
        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/NullPointerException.html">the
     * official Java API doc</a> for details.
     */
    export class NullPointerException extends Error {
        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        createError(msg : string) : any {
            return new TypeError(msg);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.security {
    /**
     * A generic security exception type - <a
     * href="http://java.sun.com/j2se/1.4.2/docs/api/java/security/GeneralSecurityException.html">[Sun's
     * docs]</a>.
     */
    export class GeneralSecurityException extends Error {
        public constructor(msg? : any) {
            if(((typeof msg === 'string') || msg === null)) {
                super(msg); this.message=msg;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(msg === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.security {
    /**
     * A generic security exception type - <a
     * href="http://java.sun.com/j2se/1.4.2/docs/api/java/security/DigestException.html">[Sun's
     * docs]</a>.
     */
    export class DigestException extends java.security.GeneralSecurityException {
        public constructor(msg? : any) {
            if(((typeof msg === 'string') || msg === null)) {
                super(msg);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(msg === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.security {
    /**
     * A generic security exception type - <a
     * href="http://java.sun.com/j2se/1.4.2/docs/api/java/security/NoSuchAlgorithmException.html">[Sun's
     * docs]</a>.
     */
    export class NoSuchAlgorithmException extends java.security.GeneralSecurityException {
        public constructor(msg? : any) {
            if(((typeof msg === 'string') || msg === null)) {
                super(msg);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(msg === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/IllegalArgumentException.html">the
     * official Java API doc</a> for details.
     */
    export class IllegalArgumentException extends Error {
        public constructor(message? : any, cause? : any) {
            if(((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'string') || message === null) && cause === undefined) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((message != null && message instanceof Error) || message === null) && cause === undefined) {
                var cause : any = message;
                super(cause); this.message=cause;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined && cause === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/NumberFormatException.html">the
     * official Java API doc</a> for details.
     */
    export class NumberFormatException extends java.lang.IllegalArgumentException {
        public static forInputString(s : string) : java.lang.NumberFormatException {
            return new java.lang.NumberFormatException("For input string: \"" + s + "\"");
        }

        public static forNullInputString() : java.lang.NumberFormatException {
            return new java.lang.NumberFormatException("null");
        }

        public static forRadix(radix : number) : java.lang.NumberFormatException {
            return new java.lang.NumberFormatException("radix " + radix + " out of range");
        }

        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                super(message);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.nio.charset {
    /**
     * GWT emulation of {@link IllegalCharsetNameException}.
     */
    export class IllegalCharsetNameException extends java.lang.IllegalArgumentException {
        private charsetName : string;

        public constructor(charsetName : string) {
            super(/* valueOf */new String(charsetName).toString());
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            this.charsetName = charsetName;
        }

        public getCharsetName() : string {
            return this.charsetName;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.nio.charset {
    /**
     * GWT emulation of {@link UnsupportedCharsetException}.
     */
    export class UnsupportedCharsetException extends java.lang.IllegalArgumentException {
        private charsetName : string;

        public constructor(charsetName : string) {
            super(/* valueOf */new String(charsetName).toString());
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            this.charsetName = charsetName;
        }

        public getCharsetName() : string {
            return this.charsetName;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * Indicates failure to cast one type into another.
     */
    export class ClassCastException extends Error {
        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/UnsupportedOperationException.html">the
     * official Java API doc</a> for details.
     */
    export class UnsupportedOperationException extends Error {
        public constructor(message? : any, cause? : any) {
            if(((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'string') || message === null) && cause === undefined) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((message != null && message instanceof Error) || message === null) && cause === undefined) {
                var cause : any = message;
                super(cause); this.message=cause;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined && cause === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang.annotation {
    /**
     * Indicates an attempt to access an element of an annotation that has changed
     * since it was compiled or serialized <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/AnnotationTypeMismatchException.html">[Sun
     * docs]</a>.
     */
    export class AnnotationTypeMismatchException extends Error {
        constructor() {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/IndexOutOfBoundsException.html">the
     * official Java API doc</a> for details.
     */
    export class IndexOutOfBoundsException extends Error {
        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * NOTE: in GWT this will never be thrown for normal array accesses, only for
     * explicit throws.
     * 
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ArrayIndexOutOfBoundsException.html">the
     * official Java API doc</a> for details.
     */
    export class ArrayIndexOutOfBoundsException extends java.lang.IndexOutOfBoundsException {
        public constructor(msg? : any) {
            if(((typeof msg === 'string') || msg === null)) {
                super(msg);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof msg === 'number') || msg === null)) {
                var index : any = msg;
                super("Array index " + index + " out of range");
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(msg === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/StringIndexOfBoundsException.html">the
     * official Java API doc</a> for details.
     */
    export class StringIndexOutOfBoundsException extends java.lang.IndexOutOfBoundsException {
        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                super(message);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((typeof message === 'number') || message === null)) {
                var index : any = message;
                super("String index out of range: " + index);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ArrayStoreException.html">the
     * official Java API doc</a> for details.
     */
    export class ArrayStoreException extends Error {
        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/NoSuchElementException.html">the
     * official Java API doc</a> for details.
     */
    export class NoSuchElementException extends Error {
        public constructor(s? : any) {
            if(((typeof s === 'string') || s === null)) {
                super(s); this.message=s;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(s === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Thrown when the subject of an observer cannot support additional observers.
     * 
     */
    export class TooManyListenersException extends Error {
        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(message === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * A helper to detect concurrent modifications to collections. This is implemented as a helper
     * utility so that we could remove the checks easily by a flag.
     */
    export class ConcurrentModificationDetector {
        private static API_CHECK : boolean; public static API_CHECK_$LI$() : boolean { if(ConcurrentModificationDetector.API_CHECK == null) ConcurrentModificationDetector.API_CHECK = (java.lang.System.getProperty("jre.checks.api", "ENABLED") === "ENABLED"); return ConcurrentModificationDetector.API_CHECK; };

        private static MOD_COUNT_PROPERTY : string = "_gwt_modCount";

        public static structureChanged(map : any) {
            if(!ConcurrentModificationDetector.API_CHECK_$LI$()) {
                return;
            }
            var modCount : number = javaemul.internal.JsUtils.getIntProperty(map, ConcurrentModificationDetector.MOD_COUNT_PROPERTY) | 0;
            javaemul.internal.JsUtils.setIntProperty(map, ConcurrentModificationDetector.MOD_COUNT_PROPERTY, modCount + 1);
        }

        public static recordLastKnownStructure(host : any, iterator : java.util.Iterator<any>) {
            if(!ConcurrentModificationDetector.API_CHECK_$LI$()) {
                return;
            }
            var modCount : number = javaemul.internal.JsUtils.getIntProperty(host, ConcurrentModificationDetector.MOD_COUNT_PROPERTY);
            javaemul.internal.JsUtils.setIntProperty(iterator, ConcurrentModificationDetector.MOD_COUNT_PROPERTY, modCount);
        }

        public static checkStructuralChange(host : any, iterator : java.util.Iterator<any>) {
            if(!ConcurrentModificationDetector.API_CHECK_$LI$()) {
                return;
            }
            if(javaemul.internal.JsUtils.getIntProperty(iterator, ConcurrentModificationDetector.MOD_COUNT_PROPERTY) !== javaemul.internal.JsUtils.getIntProperty(host, ConcurrentModificationDetector.MOD_COUNT_PROPERTY)) {
                throw new java.util.ConcurrentModificationException();
            }
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.text {
    /**
     * Emulation of {@code java.text.ParseException}.
     */
    export class ParseException extends Error {
        private errorOffset : number;

        public constructor(s : string, errorOffset : number) {
            super(s); this.message=s;
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            this.errorOffset = 0;
            this.errorOffset = errorOffset;
        }

        public getErrorOffset() : number {
            return this.errorOffset;
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/EmptyStackException.html">the
     * official Java API doc</a> for details.
     */
    export class EmptyStackException extends Error {
        constructor() {
            super();
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * See <a
     * href="http://java.sun.com/javase/6/docs/api/java/lang/Appendable.html">the
     * official Java API doc</a> for details.
     */
    export interface Appendable {
        append(x? : any, start? : any, len? : any) : any;
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Wraps a primitive <code>short</code> as an object.
     */
    export class ShortHelper extends javaemul.internal.NumberHelper implements java.lang.Comparable<ShortHelper> {
        public static MIN_VALUE : number; public static MIN_VALUE_$LI$() : number { if(ShortHelper.MIN_VALUE == null) ShortHelper.MIN_VALUE = (<number>32768|0); return ShortHelper.MIN_VALUE; };

        public static MAX_VALUE : number; public static MAX_VALUE_$LI$() : number { if(ShortHelper.MAX_VALUE == null) ShortHelper.MAX_VALUE = (<number>32767|0); return ShortHelper.MAX_VALUE; };

        public static SIZE : number = 16;

        public static TYPE : typeof Number; public static TYPE_$LI$() : typeof Number { if(ShortHelper.TYPE == null) ShortHelper.TYPE = Number; return ShortHelper.TYPE; };

        public static compare(x : number, y : number) : number {
            return x - y;
        }

        public static decode(s : string) : ShortHelper {
            return ShortHelper.valueOf((<number>NumberHelper.__decodeAndValidateInt(s, ShortHelper.MIN_VALUE_$LI$(), ShortHelper.MAX_VALUE_$LI$())|0));
        }

        /**
         * @skip Here for shared implementation with Arrays.hashCode
         */
        public static hashCode(s : number) : number {
            return s;
        }

        public static parseShort(s : string, radix : number = 10) : number {
            return (<number>NumberHelper.__parseAndValidateInt(s, radix, ShortHelper.MIN_VALUE_$LI$(), ShortHelper.MAX_VALUE_$LI$())|0);
        }

        public static reverseBytes(s : number) : number {
            return (<number>(((s & 255) << 8) | ((s & 65280) >> 8))|0);
        }

        public static toString(b : number) : string {
            return /* valueOf */new String(b).toString();
        }

        public static valueOf$short(s : number) : ShortHelper {
            if(s > -129 && s < 128) {
                var rebase : number = s + 128;
                var result : ShortHelper = ShortHelper.BoxedValues.boxedValues_$LI$()[rebase];
                if(result == null) {
                    result = ShortHelper.BoxedValues.boxedValues_$LI$()[rebase] = new ShortHelper(s);
                }
                return result;
            }
            return new ShortHelper(s);
        }

        public static valueOf$java_lang_String(s : string) : ShortHelper {
            return ShortHelper.valueOf(s, 10);
        }

        public static valueOf(s? : any, radix? : any) : any {
            if(((typeof s === 'string') || s === null) && ((typeof radix === 'number') || radix === null)) {
                return <any>(() => {
                    return ShortHelper.valueOf(ShortHelper.parseShort(s, radix));
                })();
            } else if(((typeof s === 'string') || s === null) && radix === undefined) {
                return <any>javaemul.internal.ShortHelper.valueOf$java_lang_String(s);
            } else if(((typeof s === 'number') || s === null) && radix === undefined) {
                return <any>javaemul.internal.ShortHelper.valueOf$short(s);
            } else throw new Error('invalid overload');
        }

        private value : number;

        public constructor(s? : any) {
            if(((typeof s === 'string') || s === null)) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = ShortHelper.parseShort(s);
                })();
            } else if(((typeof s === 'number') || s === null)) {
                var value : any = s;
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
                this.value = 0;
                (() => {
                    this.value = value;
                })();
            } else throw new Error('invalid overload');
        }

        public byteValue() : number {
            return (<number>this.value|0);
        }

        public compareTo(b? : any) : any {
            if(((b != null && b instanceof javaemul.internal.ShortHelper) || b === null)) {
                return <any>(() => {
                    return ShortHelper.compare(this.value, b.value);
                })();
            } else throw new Error('invalid overload');
        }

        public doubleValue() : number {
            return this.value;
        }

        public equals(o : any) : boolean {
            return (o != null && o instanceof javaemul.internal.ShortHelper) && ((<ShortHelper>o).value === this.value);
        }

        public floatValue() : number {
            return this.value;
        }

        public hashCode() : number {
            return ShortHelper.hashCode(this.value);
        }

        public intValue() : number {
            return this.value;
        }

        public longValue() : number {
            return this.value;
        }

        public shortValue() : number {
            return this.value;
        }

        public toString() : string {
            return ShortHelper.toString(this.value);
        }
    }

    export namespace ShortHelper {

        /**
         * Use nested class to avoid clinit on outer.
         */
        export class BoxedValues {
            static boxedValues : javaemul.internal.ShortHelper[]; public static boxedValues_$LI$() : javaemul.internal.ShortHelper[] { if(BoxedValues.boxedValues == null) BoxedValues.boxedValues = new Array(256); return BoxedValues.boxedValues; };
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.lang {
    /**
     * NOTE: in GWT this is only thrown for division by zero on longs and
     * BigInteger/BigDecimal.
     * <p>
     * See <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ArithmeticException.html">the
     * official Java API doc</a> for details.
     */
    export class ArithmeticException extends Error {
        public constructor(explanation? : any) {
            if(((typeof explanation === 'string') || explanation === null)) {
                super(explanation); this.message=explanation;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(explanation === undefined) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal.annotations {
    /**
     * An annotation to mark a given method as not inlineable.
     * <p>
     * Internal SDK use only, might change or disappear at any time.
     */
    export interface ForceInline {    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace javaemul.internal {
    /**
     * Wraps a native <code>char</code> as an object.
     * 
     * TODO(jat): many of the classification methods implemented here are not
     * correct in that they only handle ASCII characters, and many other methods are
     * not currently implemented. I think the proper approach is to introduce * a
     * deferred binding parameter which substitutes an implementation using a
     * fully-correct Unicode character database, at the expense of additional data
     * being downloaded. That way developers that need the functionality can get it
     * without those who don't need it paying for it.
     * 
     * <pre>
     * The following methods are still not implemented -- most would require Unicode
     * character db to be useful:
     * - digit / is* / to*(int codePoint)
     * - isDefined(char)
     * - isIdentifierIgnorable(char)
     * - isJavaIdentifierPart(char)
     * - isJavaIdentifierStart(char)
     * - isJavaLetter(char) -- deprecated, so probably not
     * - isJavaLetterOrDigit(char) -- deprecated, so probably not
     * - isISOControl(char)
     * - isMirrored(char)
     * - isSpaceChar(char)
     * - isTitleCase(char)
     * - isUnicodeIdentifierPart(char)
     * - isUnicodeIdentifierStart(char)
     * - getDirectionality(*)
     * - getNumericValue(*)
     * - getType(*)
     * - reverseBytes(char) -- any use for this at all in the browser?
     * - toTitleCase(*)
     * - all the category constants for classification
     * 
     * The following do not properly handle characters outside of ASCII:
     * - digit(char c, int radix)
     * - isDigit(char c)
     * - isLetter(char c)
     * - isLetterOrDigit(char c)
     * - isLowerCase(char c)
     * - isUpperCase(char c)
     * </pre>
     */
    export class CharacterHelper implements java.lang.Comparable<CharacterHelper>, java.io.Serializable {
        public static TYPE : typeof String; public static TYPE_$LI$() : typeof String { if(CharacterHelper.TYPE == null) CharacterHelper.TYPE = String; return CharacterHelper.TYPE; };

        public static MIN_RADIX : number = 2;

        public static MAX_RADIX : number = 36;

        public static MIN_VALUE : string = '\u0000';

        public static MAX_VALUE : string = '\uffff';

        public static MIN_SURROGATE : string = '\ud800';

        public static MAX_SURROGATE : string = '\udfff';

        public static MIN_LOW_SURROGATE : string = '\udc00';

        public static MAX_LOW_SURROGATE : string = '\udfff';

        public static MIN_HIGH_SURROGATE : string = '\ud800';

        public static MAX_HIGH_SURROGATE : string = '\udbff';

        public static MIN_SUPPLEMENTARY_CODE_POINT : number = 65536;

        public static MIN_CODE_POINT : number = 0;

        public static MAX_CODE_POINT : number = 1114111;

        public static SIZE : number = 16;

        public static charCount(codePoint : number) : number {
            return codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT?2:1;
        }

        public static codePointAt$char_A$int(a : string[], index : number) : number {
            return CharacterHelper.codePointAt(<string>new String(a), index, a.length);
        }

        public static codePointAt(a? : any, index? : any, limit? : any) : any {
            if(((a != null && a instanceof Array) || a === null) && ((typeof index === 'number') || index === null) && ((typeof limit === 'number') || limit === null)) {
                return <any>(() => {
                    return CharacterHelper.codePointAt(<string>new String(a), index, limit);
                })();
            } else if(((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && ((typeof limit === 'number') || limit === null)) {
                return <any>javaemul.internal.CharacterHelper.codePointAt$java_lang_CharSequence$int$int(a, index, limit);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof index === 'number') || index === null) && limit === undefined) {
                return <any>javaemul.internal.CharacterHelper.codePointAt$char_A$int(a, index);
            } else if(((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && limit === undefined) {
                return <any>javaemul.internal.CharacterHelper.codePointAt$java_lang_CharSequence$int(a, index);
            } else throw new Error('invalid overload');
        }

        public static codePointAt$java_lang_CharSequence$int(seq : string, index : number) : number {
            return CharacterHelper.codePointAt(seq, index, seq.length);
        }

        public static codePointBefore$char_A$int(a : string[], index : number) : number {
            return CharacterHelper.codePointBefore(<string>new String(a), index, 0);
        }

        public static codePointBefore(a? : any, index? : any, start? : any) : any {
            if(((a != null && a instanceof Array) || a === null) && ((typeof index === 'number') || index === null) && ((typeof start === 'number') || start === null)) {
                return <any>(() => {
                    return CharacterHelper.codePointBefore(<string>new String(a), index, start);
                })();
            } else if(((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && ((typeof start === 'number') || start === null)) {
                return <any>javaemul.internal.CharacterHelper.codePointBefore$java_lang_CharSequence$int$int(a, index, start);
            } else if(((a != null && a instanceof Array) || a === null) && ((typeof index === 'number') || index === null) && start === undefined) {
                return <any>javaemul.internal.CharacterHelper.codePointBefore$char_A$int(a, index);
            } else if(((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && start === undefined) {
                return <any>javaemul.internal.CharacterHelper.codePointBefore$java_lang_CharSequence$int(a, index);
            } else throw new Error('invalid overload');
        }

        public static codePointBefore$java_lang_CharSequence$int(cs : string, index : number) : number {
            return CharacterHelper.codePointBefore(cs, index, 0);
        }

        public static codePointCount(a? : any, offset? : any, count? : any) : any {
            if(((a != null && a instanceof Array) || a === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
                return <any>(() => {
                    return CharacterHelper.codePointCount(<string>new String(a), offset, offset + count);
                })();
            } else if(((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
                return <any>javaemul.internal.CharacterHelper.codePointCount$java_lang_CharSequence$int$int(a, offset, count);
            } else throw new Error('invalid overload');
        }

        public static codePointCount$java_lang_CharSequence$int$int(seq : string, beginIndex : number, endIndex : number) : number {
            var count : number = 0;
            for(var idx : number = beginIndex; idx < endIndex; ) {
                var ch : string = seq.charAt(idx++);
                if(CharacterHelper.isHighSurrogate(ch) && idx < endIndex && (CharacterHelper.isLowSurrogate(seq.charAt(idx)))) {
                    ++idx;
                }
                ++count;
            }
            return count;
        }

        public static compare(x : string, y : string) : number {
            return (x).charCodeAt(0) - (y).charCodeAt(0);
        }

        public static digit(c : string, radix : number) : number {
            if(radix < CharacterHelper.MIN_RADIX || radix > CharacterHelper.MAX_RADIX) {
                return -1;
            }
            if((c).charCodeAt(0) >= ('0').charCodeAt(0) && (c).charCodeAt(0) < ('0').charCodeAt(0) + Math.min(radix, 10)) {
                return (c).charCodeAt(0) - ('0').charCodeAt(0);
            }
            if((c).charCodeAt(0) >= ('a').charCodeAt(0) && (c).charCodeAt(0) < (radix + ('a').charCodeAt(0) - 10)) {
                return (c).charCodeAt(0) - ('a').charCodeAt(0) + 10;
            }
            if((c).charCodeAt(0) >= ('A').charCodeAt(0) && (c).charCodeAt(0) < (radix + ('A').charCodeAt(0) - 10)) {
                return (c).charCodeAt(0) - ('A').charCodeAt(0) + 10;
            }
            return -1;
        }

        public static getNumericValue(ch : string) : number {
            return (<number>(<string>(<any>ch)).charCodeAt(0)|0);
        }

        public static forDigit(digit? : any, radix? : any) : any {
            if(((typeof digit === 'number') || digit === null) && ((typeof radix === 'number') || radix === null)) {
                return <any>(() => {
                    if(radix < CharacterHelper.MIN_RADIX || radix > CharacterHelper.MAX_RADIX) {
                        return 0;
                    }
                    if(digit < 0 || digit >= radix) {
                        return 0;
                    }
                    return CharacterHelper.forDigit(digit);
                })();
            } else if(((typeof digit === 'number') || digit === null) && radix === undefined) {
                return <any>javaemul.internal.CharacterHelper.forDigit$int(digit);
            } else throw new Error('invalid overload');
        }

        /**
         * @skip
         * 
         * public for shared implementation with Arrays.hashCode
         */
        public static hashCode(c : string) : number {
            return (c).charCodeAt(0);
        }

        public static isDigit(c : string) : boolean {
            return (/* valueOf */new String(c).toString()).match(CharacterHelper.digitRegex()).length > 0;
        }

        static digitRegex() : RegExp {
            return new RegExp("\\d");
        }

        public static isHighSurrogate(ch : string) : boolean {
            return (ch).charCodeAt(0) >= (CharacterHelper.MIN_HIGH_SURROGATE).charCodeAt(0) && (ch).charCodeAt(0) <= (CharacterHelper.MAX_HIGH_SURROGATE).charCodeAt(0);
        }

        public static isLetter(c : string) : boolean {
            return (/* valueOf */new String(c).toString()).match(CharacterHelper.leterRegex()).length > 0;
        }

        static leterRegex() : RegExp {
            return new RegExp("[A-Z]", "i");
        }

        public static isLetterOrDigit(c : string) : boolean {
            return (/* valueOf */new String(c).toString()).match(CharacterHelper.leterOrDigitRegex()).length > 0;
        }

        static leterOrDigitRegex() : RegExp {
            return new RegExp("[A-Z\\d]", "i");
        }

        public static isLowerCase(c : string) : boolean {
            return CharacterHelper.toLowerCase(c) === c && CharacterHelper.isLetter(c);
        }

        public static isLowSurrogate(ch : string) : boolean {
            return (ch).charCodeAt(0) >= (CharacterHelper.MIN_LOW_SURROGATE).charCodeAt(0) && (ch).charCodeAt(0) <= (CharacterHelper.MAX_LOW_SURROGATE).charCodeAt(0);
        }

        /**
         * Deprecated - see isWhitespace(char).
         */
        public static isSpace(c : string) : boolean {
            switch((c)) {
            case ' ':
                return true;
            case '\n':
                return true;
            case '\t':
                return true;
            case '\f':
                return true;
            case '\r':
                return true;
            default:
                return false;
            }
        }

        public static isWhitespace(ch? : any) : any {
            if(((typeof ch === 'string') || ch === null)) {
                return <any>(() => {
                    return (/* valueOf */new String(ch).toString()).match(CharacterHelper.whitespaceRegex()).length > 0;
                })();
            } else if(((typeof ch === 'number') || ch === null)) {
                return <any>javaemul.internal.CharacterHelper.isWhitespace$int(ch);
            } else throw new Error('invalid overload');
        }

        public static isWhitespace$int(codePoint : number) : boolean {
            return (String.fromCharCode(codePoint)).match(CharacterHelper.whitespaceRegex()).length > 0;
        }

        static whitespaceRegex() : RegExp {
            return new RegExp("[\\t-\\r \\u1680\\u180E\\u2000-\\u2006\\u2008-\\u200A\\u2028\\u2029\\u205F\\u3000\\uFEFF]|[\\x1C-\\x1F]");
        }

        public static isSupplementaryCodePoint(codePoint : number) : boolean {
            return codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT && codePoint <= CharacterHelper.MAX_CODE_POINT;
        }

        public static isSurrogatePair(highSurrogate : string, lowSurrogate : string) : boolean {
            return CharacterHelper.isHighSurrogate(highSurrogate) && CharacterHelper.isLowSurrogate(lowSurrogate);
        }

        public static isUpperCase(c : string) : boolean {
            return CharacterHelper.toUpperCase(c) === c && CharacterHelper.isLetter(c);
        }

        public static isValidCodePoint(codePoint : number) : boolean {
            return codePoint >= CharacterHelper.MIN_CODE_POINT && codePoint <= CharacterHelper.MAX_CODE_POINT;
        }

        public static offsetByCodePoints(a? : any, start? : any, count? : any, index? : any, codePointOffset? : any) : any {
            if(((a != null && a instanceof Array) || a === null) && ((typeof start === 'number') || start === null) && ((typeof count === 'number') || count === null) && ((typeof index === 'number') || index === null) && ((typeof codePointOffset === 'number') || codePointOffset === null)) {
                return <any>(() => {
                    return CharacterHelper.offsetByCodePoints(<string>((str, index, len) => str.substring(index, index + len))((a).join(''), start, count), index, codePointOffset);
                })();
            } else if(((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof start === 'number') || start === null) && ((typeof count === 'number') || count === null) && index === undefined && codePointOffset === undefined) {
                return <any>javaemul.internal.CharacterHelper.offsetByCodePoints$java_lang_CharSequence$int$int(a, start, count);
            } else throw new Error('invalid overload');
        }

        public static offsetByCodePoints$java_lang_CharSequence$int$int(seq : string, index : number, codePointOffset : number) : number {
            if(codePointOffset < 0) {
                while((codePointOffset < 0)){
                    --index;
                    if(CharacterHelper.isLowSurrogate(seq.charAt(index)) && CharacterHelper.isHighSurrogate(seq.charAt(index - 1))) {
                        --index;
                    }
                    ++codePointOffset;
                };
            } else {
                while((codePointOffset > 0)){
                    if(CharacterHelper.isHighSurrogate(seq.charAt(index)) && CharacterHelper.isLowSurrogate(seq.charAt(index + 1))) {
                        ++index;
                    }
                    ++index;
                    --codePointOffset;
                };
            }
            return index;
        }

        public static toChars$int(codePoint : number) : string[] {
            javaemul.internal.InternalPreconditions.checkCriticalArgument(codePoint >= 0 && codePoint <= CharacterHelper.MAX_CODE_POINT);
            if(codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) {
                return [CharacterHelper.getHighSurrogate(codePoint), CharacterHelper.getLowSurrogate(codePoint)];
            } else {
                return [String.fromCharCode(codePoint)];
            }
        }

        public static toChars(codePoint? : any, dst? : any, dstIndex? : any) : any {
            if(((typeof codePoint === 'number') || codePoint === null) && ((dst != null && dst instanceof Array) || dst === null) && ((typeof dstIndex === 'number') || dstIndex === null)) {
                return <any>(() => {
                    javaemul.internal.InternalPreconditions.checkCriticalArgument(codePoint >= 0 && codePoint <= CharacterHelper.MAX_CODE_POINT);
                    if(codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) {
                        dst[dstIndex++] = CharacterHelper.getHighSurrogate(codePoint);
                        dst[dstIndex] = CharacterHelper.getLowSurrogate(codePoint);
                        return 2;
                    } else {
                        dst[dstIndex] = String.fromCharCode(codePoint);
                        return 1;
                    }
                })();
            } else if(((typeof codePoint === 'number') || codePoint === null) && dst === undefined && dstIndex === undefined) {
                return <any>javaemul.internal.CharacterHelper.toChars$int(codePoint);
            } else throw new Error('invalid overload');
        }

        public static toCodePoint(highSurrogate : string, lowSurrogate : string) : number {
            return CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT + (((highSurrogate).charCodeAt(0) & 1023) << 10) + ((lowSurrogate).charCodeAt(0) & 1023);
        }

        public static toLowerCase(c : string) : string {
            return /* valueOf */new String(c).toString().toLowerCase().charAt(0);
        }

        public static toString(x : string) : string {
            return /* valueOf */new String(x).toString();
        }

        public static toUpperCase(c : string) : string {
            return /* valueOf */new String(c).toString().toUpperCase().charAt(0);
        }

        public static valueOf(c : string) : CharacterHelper {
            if((c).charCodeAt(0) < 128) {
                var result : CharacterHelper = CharacterHelper.BoxedValues.boxedValues_$LI$()[c];
                if(result == null) {
                    result = CharacterHelper.BoxedValues.boxedValues_$LI$()[c] = new CharacterHelper(c);
                }
                return result;
            }
            return new CharacterHelper(c);
        }

        static codePointAt$java_lang_CharSequence$int$int(cs : string, index : number, limit : number) : number {
            var hiSurrogate : string = cs.charAt(index++);
            var loSurrogate : string;
            if(CharacterHelper.isHighSurrogate(hiSurrogate) && index < limit && CharacterHelper.isLowSurrogate(loSurrogate = cs.charAt(index))) {
                return CharacterHelper.toCodePoint(hiSurrogate, loSurrogate);
            }
            return (hiSurrogate).charCodeAt(0);
        }

        static codePointBefore$java_lang_CharSequence$int$int(cs : string, index : number, start : number) : number {
            var loSurrogate : string = cs.charAt(--index);
            var highSurrogate : string;
            if(CharacterHelper.isLowSurrogate(loSurrogate) && index > start && CharacterHelper.isHighSurrogate(highSurrogate = cs.charAt(index - 1))) {
                return CharacterHelper.toCodePoint(highSurrogate, loSurrogate);
            }
            return (loSurrogate).charCodeAt(0);
        }

        /**
         * Shared implementation with {@link LongHelper#toString}.
         * 
         * @skip
         */
        static forDigit$int(digit : number) : string {
            var overBaseTen : number = digit - 10;
            return String.fromCharCode((overBaseTen < 0?('0').charCodeAt(0) + digit:('a').charCodeAt(0) + overBaseTen));
        }

        /**
         * Computes the high surrogate character of the UTF16 representation of a
         * non-BMP code point. See {@link getLowSurrogate}.
         * 
         * @param codePoint
         * requested codePoint, required to be >=
         * MIN_SUPPLEMENTARY_CODE_POINT
         * @return high surrogate character
         */
        static getHighSurrogate(codePoint : number) : string {
            return String.fromCharCode(((CharacterHelper.MIN_HIGH_SURROGATE).charCodeAt(0) + (((codePoint - CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) >> 10) & 1023)));
        }

        /**
         * Computes the low surrogate character of the UTF16 representation of a
         * non-BMP code point. See {@link getHighSurrogate}.
         * 
         * @param codePoint
         * requested codePoint, required to be >=
         * MIN_SUPPLEMENTARY_CODE_POINT
         * @return low surrogate character
         */
        static getLowSurrogate(codePoint : number) : string {
            return String.fromCharCode(((CharacterHelper.MIN_LOW_SURROGATE).charCodeAt(0) + ((codePoint - CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) & 1023)));
        }

        private value : string;

        public constructor(value : string) {
            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable","java.io.Serializable"] });
            this.value = null;
            this.value = value;
        }

        public charValue() : string {
            return this.value;
        }

        public compareTo(c? : any) : any {
            if(((c != null && c instanceof javaemul.internal.CharacterHelper) || c === null)) {
                return <any>(() => {
                    return CharacterHelper.compare(this.value, c.value);
                })();
            } else throw new Error('invalid overload');
        }

        public equals(o : any) : boolean {
            return (o != null && o instanceof javaemul.internal.CharacterHelper) && ((<CharacterHelper>o).value === this.value);
        }

        public hashCode() : number {
            return CharacterHelper.hashCode(this.value);
        }

        public toString() : string {
            return /* valueOf */new String(this.value).toString();
        }
    }

    export namespace CharacterHelper {

        /**
         * Use nested class to avoid clinit on outer.
         */
        export class BoxedValues {
            static boxedValues : javaemul.internal.CharacterHelper[]; public static boxedValues_$LI$() : javaemul.internal.CharacterHelper[] { if(BoxedValues.boxedValues == null) BoxedValues.boxedValues = new Array(128); return BoxedValues.boxedValues; };
        }
    }

}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.io {
    /**
     * See <a
     * href="https://docs.oracle.com/javase/8/docs/api/java/io/UncheckedIOException.html">the
     * official Java API doc</a> for details.
     */
    export class UncheckedIOException extends Error {
        public constructor(message? : any, cause? : any) {
            if(((typeof message === 'string') || message === null) && ((cause != null && cause instanceof java.io.IOException) || cause === null)) {
                super(message); this.message=message;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else if(((message != null && message instanceof java.io.IOException) || message === null) && cause === undefined) {
                var cause : any = message;
                super(javaemul.internal.InternalPreconditions.checkNotNull(cause)); this.message=javaemul.internal.InternalPreconditions.checkNotNull(cause);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                (() => {
                })();
            } else throw new Error('invalid overload');
        }

        public getCause() : java.io.IOException {
            return <java.io.IOException>(<Error>null);
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * This class provides methods that generates pseudo-random numbers of different
     * types, such as {@code int}, {@code long}, {@code double}, and {@code float}.
     * It follows the algorithms specified in the JRE javadoc.
     * 
     * This emulated version of Random is not serializable.
     */
    export class Random {
        static __static_initialized : boolean = false;
        static __static_initialize() { if(!Random.__static_initialized) { Random.__static_initialized = true; Random.__static_initializer_0(); } }

        private static multiplierHi : number = 1502;

        private static multiplierLo : number = 15525485;

        private static twoToThe24 : number = 1.6777216E7;

        private static twoToThe31 : number = 2.147483648E9;

        private static twoToThe32 : number = 4.294967296E9;

        private static twoToTheMinus24 : number = 5.9604644775390625E-8;

        private static twoToTheMinus26 : number = 1.4901161193847656E-8;

        private static twoToTheMinus31 : number = 4.6566128730773926E-10;

        private static twoToTheMinus53 : number = 1.1102230246251565E-16;

        private static twoToTheXMinus24 : number[]; public static twoToTheXMinus24_$LI$() : number[] { Random.__static_initialize(); if(Random.twoToTheXMinus24 == null) Random.twoToTheXMinus24 = new Array(25); return Random.twoToTheXMinus24; };

        private static twoToTheXMinus48 : number[]; public static twoToTheXMinus48_$LI$() : number[] { Random.__static_initialize(); if(Random.twoToTheXMinus48 == null) Random.twoToTheXMinus48 = new Array(33); return Random.twoToTheXMinus48; };

        /**
         * A value used to avoid two random number generators produced at the same
         * time having the same seed.
         */
        private static uniqueSeed : number = 0;

        static __static_initializer_0() {
            var twoToTheXMinus48Tmp : number = 1.52587890625E-5;
            for(var i : number = 32; i >= 0; i--) {
                Random.twoToTheXMinus48_$LI$()[i] = twoToTheXMinus48Tmp;
                twoToTheXMinus48Tmp *= 0.5;
            }
            var twoToTheXMinus24Tmp : number = 1.0;
            for(var i : number = 24; i >= 0; i--) {
                Random.twoToTheXMinus24_$LI$()[i] = twoToTheXMinus24Tmp;
                twoToTheXMinus24Tmp *= 0.5;
            }
        }

        /**
         * The boolean value indicating if the second Gaussian number is available.
         */
        private haveNextNextGaussian : boolean = false;

        /**
         * The second Gaussian generated number.
         */
        private nextNextGaussian : number;

        /**
         * The high 24 bits of the 48=bit seed value.
         */
        private seedhi : number;

        /**
         * The low 24 bits of the 48=bit seed value.
         */
        private seedlo : number;

        /**
         * Construct a random generator with the given {@code seed} as the initial
         * state.
         * 
         * @param seed the seed that will determine the initial state of this random
         * number generator.
         * @see #setSeed
         */
        public constructor(seed? : any) {
            if(((typeof seed === 'number') || seed === null)) {
                this.nextNextGaussian = 0;
                this.seedhi = 0;
                this.seedlo = 0;
                (() => {
                    this.setSeed(seed);
                })();
            } else if(seed === undefined) {
                this.nextNextGaussian = 0;
                this.seedhi = 0;
                this.seedlo = 0;
                (() => {
                    var seed : number = Random.uniqueSeed++ + javaemul.internal.DateUtil.now();
                    var hi : number = (<number>Math.floor(seed * Random.twoToTheMinus24)|0) & 16777215;
                    var lo : number = (<number>(seed - (hi * Random.twoToThe24))|0);
                    this.setSeed(hi, lo);
                })();
            } else throw new Error('invalid overload');
        }

        /**
         * Returns the next pseudo-random, uniformly distributed {@code boolean} value
         * generated by this generator.
         * 
         * @return a pseudo-random, uniformly distributed boolean value.
         */
        public nextBoolean() : boolean {
            return this.nextInternal(1) !== 0;
        }

        /**
         * Modifies the {@code byte} array by a random sequence of {@code byte}s
         * generated by this random number generator.
         * 
         * @param buf non-null array to contain the new random {@code byte}s.
         * @see #next
         */
        public nextBytes(buf : number[]) {
            javaemul.internal.InternalPreconditions.checkNotNull(buf);
            var rand : number = 0;
            var count : number = 0;
            var loop : number = 0;
            while((count < buf.length)){
                if(loop === 0) {
                    rand = (<number>this.nextInternal(32)|0);
                    loop = 3;
                } else {
                    loop--;
                }
                buf[count++] = (<number>rand|0);
                rand >>= 8;
            };
        }

        /**
         * Generates a normally distributed random {@code double} number between 0.0
         * inclusively and 1.0 exclusively.
         * 
         * @return a random {@code double} in the range [0.0 - 1.0)
         * @see #nextFloat
         */
        public nextDouble() : number {
            return this.nextInternal(26) * Random.twoToTheMinus26 + this.nextInternal(27) * Random.twoToTheMinus53;
        }

        /**
         * Generates a normally distributed random {@code float} number between 0.0
         * inclusively and 1.0 exclusively.
         * 
         * @return float a random {@code float} number between [0.0 and 1.0)
         * @see #nextDouble
         */
        public nextFloat() : number {
            return <number>(this.nextInternal(24) * Random.twoToTheMinus24);
        }

        /**
         * Pseudo-randomly generates (approximately) a normally distributed {@code
         * double} value with mean 0.0 and a standard deviation value of {@code 1.0}
         * using the <i>polar method<i> of G. E. P. Box, M. E. Muller, and G.
         * Marsaglia, as described by Donald E. Knuth in <i>The Art of Computer
         * Programming, Volume 2: Seminumerical Algorithms</i>, section 3.4.1,
         * subsection C, algorithm P.
         * 
         * @return a random {@code double}
         * @see #nextDouble
         */
        public nextGaussian() : number {
            if(this.haveNextNextGaussian) {
                this.haveNextNextGaussian = false;
                return this.nextNextGaussian;
            }
            var v1 : number;
            var v2 : number;
            var s : number;
            do {
                v1 = 2 * this.nextDouble() - 1;
                v2 = 2 * this.nextDouble() - 1;
                s = v1 * v1 + v2 * v2;
            } while((s >= 1));
            var norm : number = (s === 0)?0.0:Math.sqrt(-2.0 * Math.log(s) / s);
            this.nextNextGaussian = v2 * norm;
            this.haveNextNextGaussian = true;
            return v1 * norm;
        }

        /**
         * Generates a uniformly distributed 32-bit {@code int} value from the random
         * number sequence.
         * 
         * @return a uniformly distributed {@code int} value.
         * @see java.lang.Integer#MAX_VALUE
         * @see java.lang.Integer#MIN_VALUE
         * @see #next
         * @see #nextLong
         */
        public nextInt$() : number {
            return (<number>this.nextInternal(32)|0);
        }

        /**
         * Returns a new pseudo-random {@code int} value which is uniformly
         * distributed between 0 (inclusively) and the value of {@code n}
         * (exclusively).
         * 
         * @param n the exclusive upper border of the range [0 - n).
         * @return a random {@code int}.
         */
        public nextInt(n? : any) : any {
            if(((typeof n === 'number') || n === null)) {
                return <any>(() => {
                    javaemul.internal.InternalPreconditions.checkCriticalArgument(n > 0);
                    if((n & -n) === n) {
                        return (<number>((n * this.nextInternal(31)) * Random.twoToTheMinus31)|0);
                    }
                    var bits : number;
                    var val : number;
                    do {
                        bits = this.nextInternal(31);
                        val = bits % n;
                    } while((bits - val + (n - 1) < 0));
                    return (<number>val|0);
                })();
            } else if(n === undefined) {
                return <any>this.nextInt$();
            } else throw new Error('invalid overload');
        }

        /**
         * Generates a uniformly distributed 64-bit integer value from the random
         * number sequence.
         * 
         * @return 64-bit random integer.
         * @see java.lang.Integer#MAX_VALUE
         * @see java.lang.Integer#MIN_VALUE
         * @see #next
         * @see #nextInt()
         * @see #nextInt(int)
         */
        public nextLong() : number {
            return (Math.round(<number>this.nextInternal(32)) << 32) + Math.round(<number>this.nextInternal(32));
        }

        /**
         * Modifies the seed a using linear congruential formula presented in <i>The
         * Art of Computer Programming, Volume 2</i>, Section 3.2.1.
         * 
         * @param seed the seed that alters the state of the random number generator.
         * @see #next
         * @see #Random()
         * @see #Random(long)
         */
        public setSeed$long(seed : number) {
            this.setSeed((<number>((seed >> 24) & 16777215)|0), (<number>(seed & 16777215)|0));
        }

        /**
         * Returns a pseudo-random uniformly distributed {@code int} value of the
         * number of bits specified by the argument {@code bits} as described by
         * Donald E. Knuth in <i>The Art of Computer Programming, Volume 2:
         * Seminumerical Algorithms</i>, section 3.2.1.
         * 
         * @param bits number of bits of the returned value.
         * @return a pseudo-random generated int number.
         * @see #nextBytes
         * @see #nextDouble
         * @see #nextFloat
         * @see #nextInt()
         * @see #nextInt(int)
         * @see #nextGaussian
         * @see #nextLong
         */
        next(bits : number) : number {
            return (<number>this.nextInternal(bits)|0);
        }

        private nextInternal(bits : number) : number {
            var hi : number = this.seedhi * Random.multiplierLo + this.seedlo * Random.multiplierHi;
            var lo : number = this.seedlo * Random.multiplierLo + 11;
            var carry : number = Math.floor(lo * Random.twoToTheMinus24);
            hi += carry;
            lo -= carry * Random.twoToThe24;
            hi %= Random.twoToThe24;
            this.seedhi = hi;
            this.seedlo = lo;
            if(bits <= 24) {
                return Math.floor(this.seedhi * Random.twoToTheXMinus24_$LI$()[bits]);
            } else {
                var h : number = this.seedhi * (1 << (bits - 24));
                var l : number = Math.floor(this.seedlo * Random.twoToTheXMinus48_$LI$()[bits]);
                var dval : number = h + l;
                if(dval >= Random.twoToThe31) {
                    dval -= Random.twoToThe32;
                }
                return dval;
            }
        }

        public setSeed(seedhi? : any, seedlo? : any) : any {
            if(((typeof seedhi === 'number') || seedhi === null) && ((typeof seedlo === 'number') || seedlo === null)) {
                return <any>(() => {
                    this.seedhi = seedhi ^ 1502;
                    this.seedlo = seedlo ^ 15525485;
                    this.haveNextNextGaussian = false;
                })();
            } else if(((typeof seedhi === 'number') || seedhi === null) && seedlo === undefined) {
                return <any>this.setSeed$long(seedhi);
            } else throw new Error('invalid overload');
        }
    }
}
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
namespace java.util {
    /**
     * Utility methods that operate on collections. <a
     * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collections.html">[Sun
     * docs]</a>
     */
    export class Collections {
        public static EMPTY_LIST : java.util.List<any>; public static EMPTY_LIST_$LI$() : java.util.List<any> { if(Collections.EMPTY_LIST == null) Collections.EMPTY_LIST = new Collections.EmptyList(); return Collections.EMPTY_LIST; };

        public static EMPTY_MAP : java.util.Map<any, any>; public static EMPTY_MAP_$LI$() : java.util.Map<any, any> { if(Collections.EMPTY_MAP == null) Collections.EMPTY_MAP = new Collections.EmptyMap(); return Collections.EMPTY_MAP; };

        public static EMPTY_SET : java.util.Set<any>; public static EMPTY_SET_$LI$() : java.util.Set<any> { if(Collections.EMPTY_SET == null) Collections.EMPTY_SET = new Collections.EmptySet(); return Collections.EMPTY_SET; };

        public static addAll<T>(c : java.util.Collection<any>, ...a : T[]) : boolean {
            var result : boolean = false;
            for(var index175=0; index175 < a.length; index175++) {
                var e = a[index175];
                {
                    result = result || c.add(e);
                }
            }
            return result;
        }

        public static asLifoQueue<T>(deque : java.util.Deque<T>) : java.util.Queue<T> {
            return new Collections.LifoQueue<T>(deque);
        }

        /**
         * Perform a binary search on a sorted List, using a user-specified comparison
         * function.
         * 
         * <p>
         * Note: The GWT implementation differs from the JDK implementation in that it
         * does not do an iterator-based binary search for Lists that do not implement
         * RandomAccess.
         * </p>
         * 
         * @param sortedList List to search
         * @param key value to search for
         * @param comparator comparision function, <code>null</code> indicates
         * <i>natural ordering</i> should be used.
         * @return the index of an element with a matching value, or a negative number
         * which is the index of the next larger value (or just past the end
         * of the array if the searched value is larger than all elements in
         * the array) minus 1 (to ensure error returns are negative)
         * @throws ClassCastException if <code>key</code> and
         * <code>sortedList</code>'s elements cannot be compared by
         * <code>comparator</code>.
         */
        public static binarySearch<T>(sortedList : java.util.List<any>, key : T, comparator : java.util.Comparator<any> = null) : number {
            if(comparator == null) {
                comparator = java.util.Comparators.natural<any>();
            }
            var low : number = 0;
            var high : number = sortedList.size() - 1;
            while((low <= high)){
                var mid : number = low + ((high - low) >> 1);
                var midVal : T = sortedList.get(mid);
                var compareResult : number = comparator.compare(midVal, key);
                if(compareResult < 0) {
                    low = mid + 1;
                } else if(compareResult > 0) {
                    high = mid - 1;
                } else {
                    return mid;
                }
            };
            return -low - 1;
        }

        public static copy<T>(dest : java.util.List<any>, src : java.util.List<any>) {
            if(src.size() > dest.size()) {
                throw new java.lang.IndexOutOfBoundsException("src does not fit in dest");
            }
            var destIt : java.util.ListIterator<any> = dest.listIterator();
            for(var index176=src.iterator();index176.hasNext();) {
                var e = index176.next();
                {
                    destIt.next();
                    destIt.set(e);
                }
            }
        }

        public static disjoint(c1 : java.util.Collection<any>, c2 : java.util.Collection<any>) : boolean {
            var iterating : java.util.Collection<any> = c1;
            var testing : java.util.Collection<any> = c2;
            if((c1 != null && c1["__interfaces"] != null && c1["__interfaces"].indexOf("java.util.Set") >= 0) && !(c2 != null && c2["__interfaces"] != null && c2["__interfaces"].indexOf("java.util.Set") >= 0)) {
                iterating = c2;
                testing = c1;
            }
            for(var index177=iterating.iterator();index177.hasNext();) {
                var o = index177.next();
                {
                    if(testing.contains(o)) {
                        return false;
                    }
                }
            }
            return true;
        }

        public static emptyIterator<T>() : java.util.Iterator<T> {
            return <java.util.Iterator<T>>Collections.EmptyListIterator.INSTANCE_$LI$();
        }

        public static emptyList<T>() : java.util.List<T> {
            return <java.util.List<T>>Collections.EMPTY_LIST_$LI$();
        }

        public static emptyListIterator<T>() : java.util.ListIterator<T> {
            return <java.util.ListIterator<T>>Collections.EmptyListIterator.INSTANCE_$LI$();
        }

        public static emptyMap<K, V>() : java.util.Map<K, V> {
            return <java.util.Map<K, V>>Collections.EMPTY_MAP_$LI$();
        }

        public static emptySet<T>() : java.util.Set<T> {
            return <java.util.Set<T>>Collections.EMPTY_SET_$LI$();
        }

        public static enumeration<T>(c : java.util.Collection<T>) : java.util.Enumeration<T> {
            var it : java.util.Iterator<T> = c.iterator();
            return new Collections.Collections$0<T>(it);
        }

        public static fill<T>(list : java.util.List<any>, obj : T) {
            for(var it : java.util.ListIterator<any> = list.listIterator(); it.hasNext(); ) {
                it.next();
                it.set(obj);
            }
        }

        public static frequency(c : java.util.Collection<any>, o : any) : number {
            var count : number = 0;
            for(var index178=c.iterator();index178.hasNext();) {
                var e = index178.next();
                {
                    if(java.util.Objects.equals(o, e)) {
                        ++count;
                    }
                }
            }
            return count;
        }

        public static list<T>(e : java.util.Enumeration<T>) : java.util.ArrayList<T> {
            var arrayList : java.util.ArrayList<T> = new java.util.ArrayList<T>();
            while((e.hasMoreElements())){
                arrayList.add(e.nextElement());
            };
            return arrayList;
        }

        public static max<T>(coll : java.util.Collection<any>, comp : java.util.Comparator<any> = null) : T {
            if(comp == null) {
                comp = java.util.Comparators.natural<any>();
            }
            var it : java.util.Iterator<any> = coll.iterator();
            var max : T = it.next();
            while((it.hasNext())){
                var t : T = it.next();
                if(comp.compare(t, max) > 0) {
                    max = t;
                }
            };
            return max;
        }

        public static min<T>(coll : java.util.Collection<any>, comp : java.util.Comparator<any> = null) : T {
            return Collections.max<any>(coll, Collections.reverseOrder(comp));
        }

        public static newSetFromMap<E>(map : java.util.Map<E, boolean>) : java.util.Set<E> {
            javaemul.internal.InternalPreconditions.checkArgument(map.isEmpty(), "map is not empty");
            return new Collections.SetFromMap<E>(map);
        }

        public static nCopies<T>(n : number, o : T) : java.util.List<T> {
            var list : java.util.ArrayList<T> = new java.util.ArrayList<T>();
            for(var i : number = 0; i < n; ++i) {
                list.add(o);
            }
            return Collections.unmodifiableList<any>(list);
        }

        public static replaceAll<T>(list : java.util.List<T>, oldVal : T, newVal : T) : boolean {
            var modified : boolean = false;
            for(var it : java.util.ListIterator<T> = list.listIterator(); it.hasNext(); ) {
                var t : T = it.next();
                if(java.util.Objects.equals(t, oldVal)) {
                    it.set(newVal);
                    modified = true;
                }
            }
            return modified;
        }

        public static reverse<T>(l : java.util.List<T>) {
            if(l != null && l["__interfaces"] != null && l["__interfaces"].indexOf("java.util.RandomAccess") >= 0) {
                for(var iFront : number = 0, iBack : number = l.size() - 1; iFront < iBack; ++iFront, --iBack) {
                    Collections.swap(l, iFront, iBack);
                }
            } else {
                var head : java.util.ListIterator<T> = l.listIterator();
                var tail : java.util.ListIterator<T> = l.listIterator(l.size());
                while((head.nextIndex() < tail.previousIndex())){
                    var headElem : T = head.next();
                    var tailElem : T = tail.previous();
                    head.set(tailElem);
                    tail.set(headElem);
                };
            }
        }

        public static reverseOrder$<T>() : java.util.Comparator<T> {
            return <java.util.Comparator<T>>(<any>Collections.ReverseComparator.INSTANCE_$LI$());
        }

        public static reverseOrder<T>(cmp? : any) : any {
            if(((cmp != null && cmp["__interfaces"] != null && cmp["__interfaces"].indexOf("java.util.Comparator") >= 0) || cmp === null)) {
                return <any>(() => {
                    if(cmp == null) {
                        return Collections.reverseOrder();
                    }
                    return new Collections.Collections$1<T>(cmp);
                })();
            } else if(cmp === undefined) {
                return <any>java.util.Collections.reverseOrder$();
            } else throw new Error('invalid overload');
        }

        /**
         * Rotates the elements in {@code list} by the distance {@code dist}
         * <p>
         * e.g. for a given list with elements [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], calling rotate(list, 3) or
         * rotate(list, -7) would modify the list to look like this: [8, 9, 0, 1, 2, 3, 4, 5, 6, 7]
         * 
         * @param lst the list whose elements are to be rotated.
         * @param dist is the distance the list is rotated. This can be any valid integer. Negative values
         * rotate the list backwards.
         */
        public static rotate(lst : java.util.List<any>, dist : number) {
            javaemul.internal.InternalPreconditions.checkNotNull(lst);
            var size : number = lst.size();
            if(size === 0) {
                return;
            }
            var normdist : number = dist % size;
            if(normdist === 0) {
                return;
            }
            if(normdist < 0) {
                normdist += size;
            }
            if(lst != null && lst["__interfaces"] != null && lst["__interfaces"].indexOf("java.util.RandomAccess") >= 0) {
                var list : java.util.List<any> = <java.util.List<any>>lst;
                var temp : any = list.get(0);
                var index : number = 0;
                var beginIndex : number = 0;
                for(var i : number = 0; i < size; i++) {
                    index = (index + normdist) % size;
                    temp = list.set(index, temp);
                    if(index === beginIndex) {
                        index = ++beginIndex;
                        temp = list.get(beginIndex);
                    }
                }
            } else {
                var divideIndex : number = size - normdist;
                var sublist1 : java.util.List<any> = lst.subList(0, divideIndex);
                var sublist2 : java.util.List<any> = lst.subList(divideIndex, size);
                Collections.reverse<any>(sublist1);
                Collections.reverse<any>(sublist2);
                Collections.reverse<any>(lst);
            }
        }

        public static shuffle<T>(list : java.util.List<T>, rnd : java.util.Random = Collections.RandomHolder.rnd_$LI$()) {
            if(list != null && list["__interfaces"] != null && list["__interfaces"].indexOf("java.util.RandomAccess") >= 0) {
                for(var i : number = list.size() - 1; i >= 1; i--) {
                    Collections.swapImpl(list, i, rnd.nextInt(i + 1));
                }
            } else {
                var arr : any[] = list.toArray();
                for(var i : number = arr.length - 1; i >= 1; i--) {
                    Collections.swapImpl(arr, i, rnd.nextInt(i + 1));
                }
                var it : java.util.ListIterator<T> = list.listIterator();
                for(var index179=0; index179 < arr.length; index179++) {
                    var e = arr[index179];
                    {
                        it.next();
                        it.set(<T>e);
                    }
                }
            }
        }

        public static singleton<T>(o : T) : java.util.Set<T> {
            var set : java.util.HashSet<T> = new java.util.HashSet<T>(1);
            set.add(o);
            return Collections.unmodifiableSet<any>(set);
        }

        public static singletonList<T>(o : T) : java.util.List<T> {
            return new Collections.SingletonList<T>(o);
        }

        public static singletonMap<K, V>(key : K, value : V) : java.util.Map<K, V> {
            var map : java.util.Map<K, V> = new java.util.HashMap<K, V>(1);
            map.put(key, value);
            return Collections.unmodifiableMap<any, any>(map);
        }

        public static sort<T>(target : java.util.List<T>, c : java.util.Comparator<any> = null) {
            var x : any[] = target.toArray();
            java.util.Arrays.sort(x, <java.util.Comparator<any>>c);
            Collections.replaceContents<any>(target, x);
        }

        public static swap(list : java.util.List<any>, i : number, j : number) {
            Collections.swapImpl(list, i, j);
        }

        public static unmodifiableCollection<T>(coll : java.util.Collection<any>) : java.util.Collection<T> {
            return new Collections.UnmodifiableCollection<T>(coll);
        }

        public static unmodifiableList<T>(list : java.util.List<any>) : java.util.List<T> {
            return (list != null && list["__interfaces"] != null && list["__interfaces"].indexOf("java.util.RandomAccess") >= 0)?new Collections.UnmodifiableRandomAccessList<T>(list):new Collections.UnmodifiableList<T>(list);
        }

        public static unmodifiableMap<K, V>(map : java.util.Map<any, any>) : java.util.Map<K, V> {
            return new Collections.UnmodifiableMap<K, V>(map);
        }

        public static unmodifiableSet<T>(set : java.util.Set<any>) : java.util.Set<T> {
            return new Collections.UnmodifiableSet<T>(set);
        }

        public static unmodifiableSortedMap<K, V>(map : java.util.SortedMap<K, any>) : java.util.SortedMap<K, V> {
            return new Collections.UnmodifiableSortedMap<K, V>(map);
        }

        public static unmodifiableSortedSet<T>(set : java.util.SortedSet<any>) : java.util.SortedSet<T> {
            return new Collections.UnmodifiableSortedSet<T>(set);
        }

        /**
         * Computes hash code without preserving elements order (e.g. HashSet).
         */
        static hashCode$java_lang_Iterable<T>(collection : java.lang.Iterable<T>) : number {
            var hashCode : number = 0;
            for(var index180=collection.iterator();index180.hasNext();) {
                var e = index180.next();
                {
                    hashCode = hashCode + java.util.Objects.hashCode(e);
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                }
            }
            return hashCode;
        }

        /**
         * Computes hash code preserving collection order (e.g. ArrayList).
         */
        public static hashCode<T>(list? : any) : any {
            if(((list != null && list["__interfaces"] != null && list["__interfaces"].indexOf("java.util.List") >= 0) || list === null)) {
                return <any>(() => {
                    var hashCode : number = 1;
                    for(var index181=list.iterator();index181.hasNext();) {
                        var e = index181.next();
                        {
                            hashCode = 31 * hashCode + java.util.Objects.hashCode(e);
                            hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                        }
                    }
                    return hashCode;
                })();
            } else if(((list != null && list["__interfaces"] != null && list["__interfaces"].indexOf("java.lang.Iterable") >= 0) || list === null)) {
                return <any>java.util.Collections.hashCode$java_lang_Iterable(list);
            } else throw new Error('invalid overload');
        }

        /**
         * Replace contents of a list from an array.
         * 
         * @param <T> element type
         * @param target list to replace contents from an array
         * @param x an Object array which can contain only T instances
         */
        static replaceContents<T>(target : java.util.List<T>, x : any[]) {
            var size : number = target.size();
            for(var i : number = 0; i < size; i++) {
                target.set(i, <T>x[i]);
            }
        }

        public static swapImpl<T>(list? : any, i? : any, j? : any) : any {
            if(((list != null && list["__interfaces"] != null && list["__interfaces"].indexOf("java.util.List") >= 0) || list === null) && ((typeof i === 'number') || i === null) && ((typeof j === 'number') || j === null)) {
                return <any>(() => {
                    var t : T = list.get(i);
                    list.set(i, list.get(j));
                    list.set(j, t);
                })();
            } else if(((list != null && list instanceof Array) || list === null) && ((typeof i === 'number') || i === null) && ((typeof j === 'number') || j === null)) {
                return <any>java.util.Collections.swapImpl$java_lang_Object_A$int$int(list, i, j);
            } else throw new Error('invalid overload');
        }

        static swapImpl$java_lang_Object_A$int$int(a : any[], i : number, j : number) {
            var obj : any = a[i];
            a[i] = a[j];
            a[j] = obj;
        }
    }

    export namespace Collections {

        export class LifoQueue<E> extends java.util.AbstractQueue<E> implements java.io.Serializable {
            deque : java.util.Deque<E>;

            constructor(deque : java.util.Deque<E>) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Queue","java.lang.Iterable","java.io.Serializable"] });
                this.deque = deque;
            }

            public iterator() : java.util.Iterator<E> {
                return this.deque.iterator();
            }

            public offer(e : E) : boolean {
                return this.deque.offerFirst(e);
            }

            public peek() : E {
                return this.deque.peekFirst();
            }

            public poll() : E {
                return this.deque.pollFirst();
            }

            public size() : number {
                return this.deque.size();
            }
        }

        export class EmptyList extends java.util.AbstractList<any> implements java.util.RandomAccess, java.io.Serializable {
            public contains(object : any) : boolean {
                return false;
            }

            public get(location : number) : any {
                javaemul.internal.InternalPreconditions.checkElementIndex(location, 0);
                return null;
            }

            public iterator() : java.util.Iterator<any> {
                return Collections.emptyIterator();
            }

            public listIterator$() : java.util.ListIterator<any> {
                return Collections.emptyListIterator();
            }

            public size() : number {
                return 0;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
            }
        }

        export class EmptyListIterator implements java.util.ListIterator<any> {
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            static INSTANCE : Collections.EmptyListIterator; public static INSTANCE_$LI$() : Collections.EmptyListIterator { if(EmptyListIterator.INSTANCE == null) EmptyListIterator.INSTANCE = new Collections.EmptyListIterator(); return EmptyListIterator.INSTANCE; };

            public add(o : any) {
                throw new java.lang.UnsupportedOperationException();
            }

            public hasNext() : boolean {
                return false;
            }

            public hasPrevious() : boolean {
                return false;
            }

            public next() : any {
                throw new java.util.NoSuchElementException();
            }

            public nextIndex() : number {
                return 0;
            }

            public previous() : any {
                throw new java.util.NoSuchElementException();
            }

            public previousIndex() : number {
                return -1;
            }

            public remove() {
                throw new java.lang.IllegalStateException();
            }

            public set(o : any) {
                throw new java.lang.IllegalStateException();
            }

            constructor() {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator","java.util.ListIterator"] });
            }
        }

        export class EmptySet extends java.util.AbstractSet<any> implements java.io.Serializable {
            public contains(object : any) : boolean {
                return false;
            }

            public iterator() : java.util.Iterator<any> {
                return Collections.emptyIterator();
            }

            public size() : number {
                return 0;
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
            }
        }

        export class EmptyMap extends java.util.AbstractMap<any, any> implements java.io.Serializable {
            public containsKey(key : any) : boolean {
                return false;
            }

            public containsValue(value : any) : boolean {
                return false;
            }

            public entrySet() : java.util.Set<any> {
                return java.util.Collections.EMPTY_SET_$LI$();
            }

            public get(key : any) : any {
                return null;
            }

            public keySet() : java.util.Set<any> {
                return java.util.Collections.EMPTY_SET_$LI$();
            }

            public size() : number {
                return 0;
            }

            public values() : java.util.Collection<any> {
                return java.util.Collections.EMPTY_LIST_$LI$();
            }

            constructor() {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map","java.io.Serializable"] });
            }
        }

        export class ReverseComparator implements java.util.Comparator<java.lang.Comparable<any>> {
            static INSTANCE : Collections.ReverseComparator; public static INSTANCE_$LI$() : Collections.ReverseComparator { if(ReverseComparator.INSTANCE == null) ReverseComparator.INSTANCE = new Collections.ReverseComparator(); return ReverseComparator.INSTANCE; };

            public compare(o1? : any, o2? : any) : any {
                if(((o1 != null && o1["__interfaces"] != null && o1["__interfaces"].indexOf("java.lang.Comparable") >= 0) || o1 === null) && ((o2 != null && o2["__interfaces"] != null && o2["__interfaces"].indexOf("java.lang.Comparable") >= 0) || o2 === null)) {
                    return <any>(() => {
                        return o2.compareTo(o1);
                    })();
                } else throw new Error('invalid overload');
            }

            constructor() {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Comparator"] });
            }
        }

        export class SetFromMap<E> extends java.util.AbstractSet<E> implements java.io.Serializable {
            backingMap : java.util.Map<E, boolean>;

            __keySet : java.util.Set<E>;

            constructor(map : java.util.Map<E, boolean>) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable","java.io.Serializable"] });
                this.backingMap = map;
            }

            public add(index? : any, element? : any) : any {
                if(((index != null) || index === null) && element === undefined) {
                    return <any>this.add$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public add$java_lang_Object(e : E) : boolean {
                return this.backingMap.put(e, javaemul.internal.BooleanHelper.TRUE) == null;
            }

            public clear() {
                this.backingMap.clear();
            }

            public contains(o : any) : boolean {
                return this.backingMap.containsKey(o);
            }

            public equals(o : any) : boolean {
                return o === this || this.keySet().equals(o);
            }

            public hashCode() : number {
                return this.keySet().hashCode();
            }

            public iterator() : java.util.Iterator<E> {
                return this.keySet().iterator();
            }

            public remove(index? : any) : any {
                if(((index != null) || index === null)) {
                    return <any>this.remove$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public remove$java_lang_Object(o : any) : boolean {
                return this.backingMap.remove(o) != null;
            }

            public size() : number {
                return this.keySet().size();
            }

            public toString() : string {
                return this.keySet().toString();
            }

            /**
             * Lazy initialize keySet to avoid NPE after deserialization.
             */
            keySet() : java.util.Set<E> {
                if(this.__keySet == null) {
                    this.__keySet = this.backingMap.keySet();
                }
                return this.__keySet;
            }
        }

        export class SingletonList<E> extends java.util.AbstractList<E> implements java.io.Serializable {
            element : E;

            public constructor(element : E) {
                super();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.List","java.util.Collection","java.lang.Iterable","java.io.Serializable"] });
                this.element = element;
            }

            public contains(item : any) : boolean {
                return java.util.Objects.equals(this.element, item);
            }

            public get(index : number) : E {
                javaemul.internal.InternalPreconditions.checkElementIndex(index, 1);
                return this.element;
            }

            public size() : number {
                return 1;
            }
        }

        export class UnmodifiableCollection<T> implements java.util.Collection<T> {
            forEach(action : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for(var index182=this.iterator();index182.hasNext();) {
                    var t = index182.next();
                    {
                        action(t);
                    }
                }
            }
            coll : java.util.Collection<any>;

            public constructor(coll : java.util.Collection<any>) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.lang.Iterable"] });
                this.coll = coll;
            }

            public add(index? : any, element? : any) : any {
                if(((index != null) || index === null) && element === undefined) {
                    return <any>this.add$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public add$java_lang_Object(o : T) : boolean {
                throw new java.lang.UnsupportedOperationException();
            }

            public addAll(index? : any, c? : any) : any {
                if(((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                    return <any>this.addAll$java_util_Collection(index);
                } else throw new Error('invalid overload');
            }

            public addAll$java_util_Collection(c : java.util.Collection<any>) : boolean {
                throw new java.lang.UnsupportedOperationException();
            }

            public clear() {
                throw new java.lang.UnsupportedOperationException();
            }

            public contains(o : any) : boolean {
                return this.coll.contains(o);
            }

            public containsAll(c : java.util.Collection<any>) : boolean {
                return this.coll.containsAll(c);
            }

            public isEmpty() : boolean {
                return this.coll.isEmpty();
            }

            public iterator() : java.util.Iterator<T> {
                return new Collections.UnmodifiableCollectionIterator<T>(this.coll.iterator());
            }

            public remove(index? : any) : any {
                if(((index != null) || index === null)) {
                    return <any>this.remove$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public remove$java_lang_Object(o : any) : boolean {
                throw new java.lang.UnsupportedOperationException();
            }

            public removeAll(c : java.util.Collection<any>) : boolean {
                throw new java.lang.UnsupportedOperationException();
            }

            public retainAll(c : java.util.Collection<any>) : boolean {
                throw new java.lang.UnsupportedOperationException();
            }

            public size() : number {
                return this.coll.size();
            }

            public toArray$() : any[] {
                return this.coll.toArray();
            }

            public toArray<E>(a? : any) : any {
                if(((a != null && a instanceof Array) || a === null)) {
                    return <any>(() => {
                        return this.coll.toArray(a);
                    })();
                } else if(a === undefined) {
                    return <any>this.toArray$();
                } else throw new Error('invalid overload');
            }

            public toString() : string {
                return this.coll.toString();
            }
        }

        export class UnmodifiableList<T> extends Collections.UnmodifiableCollection<T> implements java.util.List<T> {
            forEach(action : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for(var index183=this.iterator();index183.hasNext();) {
                    var t = index183.next();
                    {
                        action(t);
                    }
                }
            }
            list : java.util.List<any>;

            public constructor(list : java.util.List<any>) {
                super(list);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.List","java.util.Collection","java.lang.Iterable"] });
                this.list = list;
            }

            public add(index? : any, element? : any) : any {
                if(((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                    return <any>(() => {
                        throw new java.lang.UnsupportedOperationException();
                    })();
                } else if(((index != null) || index === null) && element === undefined) {
                    return <any>this.add$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public addAll(index? : any, c? : any) : any {
                if(((typeof index === 'number') || index === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                    return <any>(() => {
                        throw new java.lang.UnsupportedOperationException();
                    })();
                } else if(((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                    return <any>this.addAll$java_util_Collection(index);
                } else throw new Error('invalid overload');
            }

            public equals(o : any) : boolean {
                return this.list.equals(o);
            }

            public get(index : number) : T {
                return this.list.get(index);
            }

            public hashCode() : number {
                return this.list.hashCode();
            }

            public indexOf(o? : any, index? : any) : any {
                if(((o != null) || o === null) && index === undefined) {
                    return <any>this.indexOf$java_lang_Object(o);
                } else throw new Error('invalid overload');
            }

            public indexOf$java_lang_Object(o : any) : number {
                return this.list.indexOf(o);
            }

            public isEmpty() : boolean {
                return this.list.isEmpty();
            }

            public lastIndexOf(o? : any, index? : any) : any {
                if(((o != null) || o === null) && index === undefined) {
                    return <any>this.lastIndexOf$java_lang_Object(o);
                } else throw new Error('invalid overload');
            }

            public lastIndexOf$java_lang_Object(o : any) : number {
                return this.list.lastIndexOf(o);
            }

            public listIterator$() : java.util.ListIterator<T> {
                return this.listIterator(0);
            }

            public listIterator(from? : any) : any {
                if(((typeof from === 'number') || from === null)) {
                    return <any>(() => {
                        return new Collections.UnmodifiableListIterator<T>(this.list.listIterator(from));
                    })();
                } else if(from === undefined) {
                    return <any>this.listIterator$();
                } else throw new Error('invalid overload');
            }

            public remove(index? : any) : any {
                if(((typeof index === 'number') || index === null)) {
                    return <any>(() => {
                        throw new java.lang.UnsupportedOperationException();
                    })();
                } else if(((index != null) || index === null)) {
                    return <any>this.remove$java_lang_Object(index);
                } else throw new Error('invalid overload');
            }

            public set(index : number, element : T) : T {
                throw new java.lang.UnsupportedOperationException();
            }

            public subList(fromIndex : number, toIndex : number) : java.util.List<T> {
                return new Collections.UnmodifiableList<T>(this.list.subList(fromIndex, toIndex));
            }
        }

        export class UnmodifiableRandomAccessList<T> extends Collections.UnmodifiableList<T> implements java.util.RandomAccess {
            public constructor(list : java.util.List<any>) {
                super(list);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess","java.util.List","java.util.Collection","java.lang.Iterable"] });
            }
        }

        export class UnmodifiableSet<T> extends Collections.UnmodifiableCollection<T> implements java.util.Set<T> {
            forEach(action : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for(var index184=this.iterator();index184.hasNext();) {
                    var t = index184.next();
                    {
                        action(t);
                    }
                }
            }
            public constructor(set : java.util.Set<any>) {
                super(set);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
            }

            public equals(o : any) : boolean {
                return this.coll.equals(o);
            }

            public hashCode() : number {
                return this.coll.hashCode();
            }
        }

        export class UnmodifiableMap<K, V> implements java.util.Map<K, V> {
            __entrySet : Collections.UnmodifiableSet<java.util.Map.Entry<K, V>>;

            __keySet : Collections.UnmodifiableSet<K>;

            map : java.util.Map<any, any>;

            __values : Collections.UnmodifiableCollection<V>;

            public constructor(map : java.util.Map<any, any>) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                this.map = map;
            }

            public clear() {
                throw new java.lang.UnsupportedOperationException();
            }

            public containsKey(key : any) : boolean {
                return this.map.containsKey(key);
            }

            public containsValue(val : any) : boolean {
                return this.map.containsValue(val);
            }

            public entrySet() : java.util.Set<java.util.Map.Entry<K, V>> {
                if(this.__entrySet == null) {
                    this.__entrySet = new UnmodifiableMap.UnmodifiableEntrySet<K, V>(this.map.entrySet());
                }
                return this.__entrySet;
            }

            public equals(o : any) : boolean {
                return this.map.equals(o);
            }

            public get(key : any) : V {
                return this.map.get(key);
            }

            public hashCode() : number {
                return this.map.hashCode();
            }

            public isEmpty() : boolean {
                return this.map.isEmpty();
            }

            public keySet() : java.util.Set<K> {
                if(this.__keySet == null) {
                    this.__keySet = new Collections.UnmodifiableSet<K>(this.map.keySet());
                }
                return this.__keySet;
            }

            public put(key? : any, value? : any) : any {
                if(((key != null) || key === null) && ((value != null) || value === null)) {
                    return <any>this.put$java_lang_Object$java_lang_Object(key, value);
                } else throw new Error('invalid overload');
            }

            public put$java_lang_Object$java_lang_Object(key : K, value : V) : V {
                throw new java.lang.UnsupportedOperationException();
            }

            public putAll(t : java.util.Map<any, any>) {
                throw new java.lang.UnsupportedOperationException();
            }

            public remove(key : any) : V {
                throw new java.lang.UnsupportedOperationException();
            }

            public size() : number {
                return this.map.size();
            }

            public toString() : string {
                return this.map.toString();
            }

            public values() : java.util.Collection<V> {
                if(this.__values == null) {
                    this.__values = new Collections.UnmodifiableCollection<V>(this.map.values());
                }
                return this.__values;
            }
        }

        export namespace UnmodifiableMap {

            export class UnmodifiableEntrySet<K, V> extends Collections.UnmodifiableSet<java.util.Map.Entry<K, V>> {
                public constructor(s : java.util.Set<any>) {
                    super(<java.util.Set<any>>s);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection","java.util.Set","java.lang.Iterable"] });
                }

                public contains(o : any) : boolean {
                    return this.coll.contains(o);
                }

                public containsAll(o : java.util.Collection<any>) : boolean {
                    return this.coll.containsAll(o);
                }

                public iterator() : java.util.Iterator<java.util.Map.Entry<K, V>> {
                    var it : java.util.Iterator<java.util.Map.Entry<K, V>> = <java.util.Iterator<Map.Entry<K, V>>>this.coll.iterator();
                    return new UnmodifiableEntrySet.UnmodifiableEntrySet$0(this, it);
                }

                public toArray$() : any[] {
                    var array : any[] = super.toArray();
                    this.wrap(array, array.length);
                    return array;
                }

                public toArray<T>(a? : any) : any {
                    if(((a != null && a instanceof Array) || a === null)) {
                        return <any>(() => {
                            var result : any[] = super.toArray(a);
                            this.wrap(result, this.coll.size());
                            return <T[]>result;
                        })();
                    } else if(a === undefined) {
                        return <any>this.toArray$();
                    } else throw new Error('invalid overload');
                }

                /**
                 * Wrap an array of Map.Entries as UnmodifiableEntries.
                 * 
                 * @param array array to wrap
                 * @param size number of entries to wrap
                 */
                wrap(array : any[], size : number) {
                    for(var i : number = 0; i < size; ++i) {
                        array[i] = new UnmodifiableEntrySet.UnmodifiableEntry<K, V>(<java.util.Map.Entry<K, V>>array[i]);
                    }
                }
            }

            export namespace UnmodifiableEntrySet {

                export class UnmodifiableEntry<K, V> implements java.util.Map.Entry<K, V> {
                    entry : java.util.Map.Entry<any, any>;

                    public constructor(entry : java.util.Map.Entry<any, any>) {
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                        this.entry = entry;
                    }

                    public equals(o : any) : boolean {
                        return this.entry.equals(o);
                    }

                    public getKey() : K {
                        return this.entry.getKey();
                    }

                    public getValue() : V {
                        return this.entry.getValue();
                    }

                    public hashCode() : number {
                        return this.entry.hashCode();
                    }

                    public setValue(value : V) : V {
                        throw new java.lang.UnsupportedOperationException();
                    }

                    public toString() : string {
                        return this.entry.toString();
                    }
                }

                export class UnmodifiableEntrySet$0 implements java.util.Iterator<java.util.Map.Entry<any, any>> {
                    public __parent: any;
                    forEachRemaining(consumer : (p1: any) => void) {
                        javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                        while((this.hasNext())){
                            consumer(this.next());
                        };
                    }
                    public hasNext() : boolean {
                        return this.it.hasNext();
                    }

                    public next() : java.util.Map.Entry<any, any> {
                        return new UnmodifiableEntrySet.UnmodifiableEntry<any, any>(this.it.next());
                    }

                    public remove() {
                        throw new java.lang.UnsupportedOperationException();
                    }

                    constructor(__parent: any, private it: any) {
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                        this.__parent = __parent;
                    }
                }
            }

        }


        export class UnmodifiableSortedMap<K, V> extends Collections.UnmodifiableMap<K, V> implements java.util.SortedMap<K, V> {
            sortedMap : java.util.SortedMap<K, any>;

            public constructor(sortedMap : java.util.SortedMap<K, any>) {
                super(sortedMap);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map","java.util.SortedMap"] });
                this.sortedMap = sortedMap;
            }

            public comparator() : java.util.Comparator<any> {
                return this.sortedMap.comparator();
            }

            public equals(o : any) : boolean {
                return this.sortedMap.equals(o);
            }

            public firstKey() : K {
                return this.sortedMap.firstKey();
            }

            public hashCode() : number {
                return this.sortedMap.hashCode();
            }

            public headMap(toKey? : any, inclusive? : any) : any {
                if(((toKey != null) || toKey === null) && inclusive === undefined) {
                    return <any>this.headMap$java_lang_Object(toKey);
                } else throw new Error('invalid overload');
            }

            public headMap$java_lang_Object(toKey : K) : java.util.SortedMap<K, V> {
                return new Collections.UnmodifiableSortedMap<K, V>(this.sortedMap.headMap(toKey));
            }

            public lastKey() : K {
                return this.sortedMap.lastKey();
            }

            public subMap(fromKey? : any, fromInclusive? : any, toKey? : any, toInclusive? : any) : any {
                if(((fromKey != null) || fromKey === null) && ((fromInclusive != null) || fromInclusive === null) && toKey === undefined && toInclusive === undefined) {
                    return <any>this.subMap$java_lang_Object$java_lang_Object(fromKey, fromInclusive);
                } else throw new Error('invalid overload');
            }

            public subMap$java_lang_Object$java_lang_Object(fromKey : K, toKey : K) : java.util.SortedMap<K, V> {
                return new Collections.UnmodifiableSortedMap<K, V>(this.sortedMap.subMap(fromKey, toKey));
            }

            public tailMap(fromKey? : any, inclusive? : any) : any {
                if(((fromKey != null) || fromKey === null) && inclusive === undefined) {
                    return <any>this.tailMap$java_lang_Object(fromKey);
                } else throw new Error('invalid overload');
            }

            public tailMap$java_lang_Object(fromKey : K) : java.util.SortedMap<K, V> {
                return new Collections.UnmodifiableSortedMap<K, V>(this.sortedMap.tailMap(fromKey));
            }
        }

        export class UnmodifiableSortedSet<E> extends Collections.UnmodifiableSet<E> implements java.util.SortedSet<E> {
            forEach(action : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for(var index185=this.iterator();index185.hasNext();) {
                    var t = index185.next();
                    {
                        action(t);
                    }
                }
            }
            sortedSet : java.util.SortedSet<E>;

            public constructor(sortedSet : java.util.SortedSet<any>) {
                super(sortedSet);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet","java.util.Collection","java.util.Set","java.lang.Iterable"] });
                this.sortedSet = <java.util.SortedSet<E>>sortedSet;
            }

            public comparator() : java.util.Comparator<any> {
                return this.sortedSet.comparator();
            }

            public equals(o : any) : boolean {
                return this.sortedSet.equals(o);
            }

            public first() : E {
                return this.sortedSet.first();
            }

            public hashCode() : number {
                return this.sortedSet.hashCode();
            }

            public headSet(toElement? : any, inclusive? : any) : any {
                if(((toElement != null) || toElement === null) && inclusive === undefined) {
                    return <any>this.headSet$java_lang_Object(toElement);
                } else throw new Error('invalid overload');
            }

            public headSet$java_lang_Object(toElement : E) : java.util.SortedSet<E> {
                return new Collections.UnmodifiableSortedSet<E>(this.sortedSet.headSet(toElement));
            }

            public last() : E {
                return this.sortedSet.last();
            }

            public subSet(fromElement? : any, fromInclusive? : any, toElement? : any, toInclusive? : any) : any {
                if(((fromElement != null) || fromElement === null) && ((fromInclusive != null) || fromInclusive === null) && toElement === undefined && toInclusive === undefined) {
                    return <any>this.subSet$java_lang_Object$java_lang_Object(fromElement, fromInclusive);
                } else throw new Error('invalid overload');
            }

            public subSet$java_lang_Object$java_lang_Object(fromElement : E, toElement : E) : java.util.SortedSet<E> {
                return new Collections.UnmodifiableSortedSet<E>(this.sortedSet.subSet(fromElement, toElement));
            }

            public tailSet(fromElement? : any, inclusive? : any) : any {
                if(((fromElement != null) || fromElement === null) && inclusive === undefined) {
                    return <any>this.tailSet$java_lang_Object(fromElement);
                } else throw new Error('invalid overload');
            }

            public tailSet$java_lang_Object(fromElement : E) : java.util.SortedSet<E> {
                return new Collections.UnmodifiableSortedSet<E>(this.sortedSet.tailSet(fromElement));
            }
        }

        export class UnmodifiableCollectionIterator<T> implements java.util.Iterator<T> {
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            it : java.util.Iterator<any>;

            constructor(it : java.util.Iterator<any>) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                this.it = it;
            }

            public hasNext() : boolean {
                return this.it.hasNext();
            }

            public next() : T {
                return this.it.next();
            }

            public remove() {
                throw new java.lang.UnsupportedOperationException();
            }
        }

        export class UnmodifiableListIterator<T> extends Collections.UnmodifiableCollectionIterator<T> implements java.util.ListIterator<T> {
            forEachRemaining(consumer : (p1: any) => void) {
                javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                while((this.hasNext())){
                    consumer(this.next());
                };
            }
            lit : java.util.ListIterator<any>;

            constructor(lit : java.util.ListIterator<any>) {
                super(lit);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator","java.util.ListIterator"] });
                this.lit = lit;
            }

            public add(o : T) {
                throw new java.lang.UnsupportedOperationException();
            }

            public hasPrevious() : boolean {
                return this.lit.hasPrevious();
            }

            public nextIndex() : number {
                return this.lit.nextIndex();
            }

            public previous() : T {
                return this.lit.previous();
            }

            public previousIndex() : number {
                return this.lit.previousIndex();
            }

            public set(o : T) {
                throw new java.lang.UnsupportedOperationException();
            }
        }

        export class RandomHolder {
            static rnd : java.util.Random; public static rnd_$LI$() : java.util.Random { if(RandomHolder.rnd == null) RandomHolder.rnd = new java.util.Random(); return RandomHolder.rnd; };
        }

        export class Collections$0<T> implements java.util.Enumeration<T> {
            public hasMoreElements() : boolean {
                return this.it.hasNext();
            }

            public nextElement() : T {
                return this.it.next();
            }

            constructor(private it: any) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Enumeration"] });
            }
        }

        export class Collections$1<T> implements java.util.Comparator<T> {
            public compare(t1 : T, t2 : T) : number {
                return this.cmp.compare(t2, t1);
            }

            constructor(private cmp: any) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Comparator"] });
            }
        }
    }

}


java.util.Collections.RandomHolder.rnd_$LI$();

java.util.Collections.ReverseComparator.INSTANCE_$LI$();

java.util.Collections.EmptyListIterator.INSTANCE_$LI$();

java.util.Collections.EMPTY_SET_$LI$();

java.util.Collections.EMPTY_MAP_$LI$();

java.util.Collections.EMPTY_LIST_$LI$();

java.util.Random.twoToTheXMinus48_$LI$();

java.util.Random.twoToTheXMinus24_$LI$();

java.util.Random.__static_initialize();

javaemul.internal.CharacterHelper.BoxedValues.boxedValues_$LI$();

javaemul.internal.CharacterHelper.TYPE_$LI$();

javaemul.internal.ShortHelper.BoxedValues.boxedValues_$LI$();

javaemul.internal.ShortHelper.TYPE_$LI$();

javaemul.internal.ShortHelper.MAX_VALUE_$LI$();

javaemul.internal.ShortHelper.MIN_VALUE_$LI$();

java.util.ConcurrentModificationDetector.API_CHECK_$LI$();

java.nio.charset.StandardCharsets.UTF_8_$LI$();

java.nio.charset.StandardCharsets.ISO_8859_1_$LI$();

javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$();

javaemul.internal.EmulatedCharset.ISO_LATIN_1_$LI$();

javaemul.internal.EmulatedCharset.UTF_8_$LI$();

java.util.TreeMap.SubMapType_Tail_$LI$();

java.util.TreeMap.SubMapType_Range_$LI$();

java.util.TreeMap.SubMapType_Head_$LI$();

java.util.TreeMap.SubMapType_All_$LI$();

javaemul.internal.FloatHelper.POSITIVE_INFINITY_$LI$();

javaemul.internal.FloatHelper.NEGATIVE_INFINITY_$LI$();

javaemul.internal.FloatHelper.NaN_$LI$();

java.lang.Class.classes_$LI$();

java.lang.Class.constructors_$LI$();

java.util.logging.Level.WARNING_$LI$();

java.util.logging.Level.SEVERE_$LI$();

java.util.logging.Level.OFF_$LI$();

java.util.logging.Level.INFO_$LI$();

java.util.logging.Level.FINEST_$LI$();

java.util.logging.Level.FINER_$LI$();

java.util.logging.Level.FINE_$LI$();

java.util.logging.Level.CONFIG_$LI$();

java.util.logging.Level.ALL_$LI$();

javaemul.internal.InternalPreconditions.BOUND_CHECK_$LI$();

javaemul.internal.InternalPreconditions.API_CHECK_$LI$();

javaemul.internal.InternalPreconditions.TYPE_CHECK_$LI$();

javaemul.internal.InternalPreconditions.CHECKED_MODE_$LI$();

java.util.logging.Logger.LOGGING_FALSE_$LI$();

java.util.logging.Logger.LOGGING_SEVERE_$LI$();

java.util.logging.Logger.LOGGING_WARNING_$LI$();

java.util.logging.Logger.LOGGING_ENABLED_$LI$();

java.util.logging.Logger.__static_initialize();

java.lang.System.out_$LI$();

java.lang.System.err_$LI$();

java.util.OptionalDouble.EMPTY_$LI$();

javaemul.internal.IntegerHelper.ReverseNibbles.reverseNibbles_$LI$();

javaemul.internal.IntegerHelper.BoxedValues.boxedValues_$LI$();

java.util.Optional.EMPTY_$LI$();

javaemul.internal.BooleanHelper.TYPE_$LI$();

java.util.Date.StringData.MONTHS_$LI$();

java.util.Date.StringData.DAYS_$LI$();

java.util.Date.ONE_HOUR_IN_MILLISECONDS_$LI$();

javaemul.internal.DoubleHelper.PowersTable.invPowers_$LI$();

javaemul.internal.DoubleHelper.PowersTable.powers_$LI$();

javaemul.internal.DoubleHelper.POSITIVE_INFINITY_$LI$();

javaemul.internal.DoubleHelper.NEGATIVE_INFINITY_$LI$();

javaemul.internal.DoubleHelper.NaN_$LI$();

javaemul.internal.ByteHelper.BoxedValues.boxedValues_$LI$();

javaemul.internal.ByteHelper.TYPE_$LI$();

javaemul.internal.ByteHelper.MAX_VALUE_$LI$();

javaemul.internal.ByteHelper.MIN_VALUE_$LI$();

javaemul.internal.LongHelper.BoxedValues.boxedValues_$LI$();

javaemul.internal.NumberHelper.__ParseLong.maxValueForRadix_$LI$();

javaemul.internal.NumberHelper.__ParseLong.maxLengthForRadix_$LI$();

javaemul.internal.NumberHelper.__ParseLong.maxDigitsRadixPower_$LI$();

javaemul.internal.NumberHelper.__ParseLong.maxDigitsForRadix_$LI$();

javaemul.internal.NumberHelper.__ParseLong.__static_initialize();

java.util.Comparators.NATURAL_$LI$();

javaemul.internal.StringHashCache.front_$LI$();

javaemul.internal.StringHashCache.back_$LI$();

java.util.OptionalInt.EMPTY_$LI$();

java.util.OptionalLong.EMPTY_$LI$();

java.util.Locale.defaultLocale_$LI$();

java.util.Locale.US_$LI$();

java.util.Locale.ENGLISH_$LI$();

java.util.Locale.ROOT_$LI$();

java.security.MessageDigest.Md5Digest.padding_$LI$();

javaemul.internal.JreHelper.LOG10E_$LI$();

java.util.InternalJsMapFactory.jsMapCtor_$LI$();
