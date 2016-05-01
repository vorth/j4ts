declare namespace java.util {
    interface List<E> extends Collection<E> {
        indexOf(o: Object): number;
        lastIndexOf(o: Object): number;
        get(index: number): E;
        set(index: number, element: E): E;
        subList(fromIndex: number, toIndex: number): List<E>;
    }
}
declare namespace j4ts.util {
    function equals<T>(a: T, b: T): boolean;
    function has(obj: Object, prop: any): boolean;
    namespace arrays {
        function indexOf<T>(array: T[], item: T): number;
        function contains<T>(array: T[], item: T): boolean;
        function remove<T>(array: T[], item: T): boolean;
        function equals<T>(array1: T[], array2: T[]): boolean;
        function forEach<T>(array: T[], callback: (T) => void): void;
        function toString(array: Object[]): string;
    }
}
declare namespace java.util {
    class ArrayList<T> implements List<T> {
        elements: T[];
        constructor();
        iterator(): Iterator<T>;
        set(index: number, item: T): T;
        add(main: any, extra?: any): any;
        get(index: number): T;
        indexOf(item: T): number;
        lastIndexOf(item: T): number;
        contains(item: T): boolean;
        remove(item: any): any;
        clear(): void;
        equals(other: Object): boolean;
        private removeElementAtIndex(index);
        toArray(): T[];
        size(): number;
        isEmpty(): boolean;
        toString(): string;
        subList(fromIndex: number, toIndex: number): List<T>;
    }
}
declare namespace java.util {
    interface Set<E> extends Collection<E> {
    }
}
declare namespace java.util {
    class HashSet<T> implements Set<T> {
        private map;
        constructor(elements?: T[]);
        contains(element: T): boolean;
        add(element: T): boolean;
        remove(element: T): boolean;
        toArray(param?: any): T[];
        isEmpty(): boolean;
        size(): number;
        clear(): void;
        toString(): string;
    }
}
declare namespace java.util {
    namespace Map {
        interface Entry<K, V> {
            getKey(): K;
            getValue(): V;
            setValue(value: V): V;
        }
    }
    interface Map<K, V> {
        size(): number;
        isEmpty(): boolean;
        containsKey(key: Object): boolean;
        containsValue(value: Object): boolean;
        get(key: Object): V;
        put(key: K, value: V): V;
        remove(key: Object): V;
        clear(): void;
        keySet(): Set<K>;
        values(): Collection<V>;
        entrySet(): Set<Map.Entry<K, V>>;
    }
}
declare namespace java.util {
    import Entry = java.util.Map.Entry;
    class HashMap<K extends Object, V> implements Map<K, V> {
        protected entries: {
            [key: string]: Entry<K, V>;
        };
        protected entryCount: number;
        constructor();
        get(key: K): V;
        put(key: K, value: V): V;
        set(key: K, value: V): V;
        remove(key: K): V;
        keySet(): Set<K>;
        entrySet(): Set<Entry<K, V>>;
        values(): Collection<V>;
        private forEach(callback);
        containsKey(key: K): boolean;
        containsValue(value: V): boolean;
        clear(): void;
        size(): number;
        isEmpty(): boolean;
        toString(): string;
    }
}
declare namespace j4ts.test {
    function test(): void;
    function testList(): void;
    function testSet(): void;
    function testMap(): void;
}
declare namespace java.util {
    interface Collection<E> extends Iterable<E> {
        size(): number;
        isEmpty(): boolean;
        contains(o: Object): boolean;
        toArray(): Object[];
        toArray<T>(a: T[]): T[];
        /**
         * Add gets overloaded by List in Java, which prevents good typing so far.
         */
        add(main: any, extra?: any): any;
        remove(o: any): any;
        clear(): void;
    }
}
declare namespace java.util {
    interface Iterable<E> {
    }
}
declare namespace java.util {
    interface Iterator<E> {
        hasNext(): boolean;
        next(): E;
        remove(): void;
        forEachRemaining(action: (E) => void): void;
    }
}
declare namespace java.util {
    /**
     * Temporary implementation.
     */
    class LinkedList<T extends Object> extends ArrayList<T> {
    }
}
