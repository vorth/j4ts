
namespace java.util {

    export namespace Map {
        export interface Entry<K, V> {
            getKey(): K;
            getValue(): V;
            setValue(value: V): V;
            //equals(o: Object): boolean;
            //hashCode(): number;
        }
    }

    export interface Map<K, V> {
        size(): number;
        isEmpty(): boolean;
        containsKey(key: Object): boolean;
        containsValue(value: Object): boolean;
        get(key: Object): V;
        put(key: K, value: V): V;
        remove(key: Object): V;
        /*putAll(m: Map<K, V>): void;*/
        clear(): void;
        keySet(): Set<K>;
        values(): Collection<V>;
        entrySet(): Set<Map.Entry<K, V>>;
        //equals(o: Object): boolean;
        //hashCode(): number;
    }

}
