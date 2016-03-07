namespace java.util {

    import Entry = java.util.Map.Entry;
    import has = j4ts.util.has;

    class DefaultEntry<K, V> implements Entry<K, V> {
        constructor(
            public key: K,
            public value: V) { };
        getKey(): K {
            return this.key;
        }
        getValue(): V {
            return this.value;
        }
        setKey(key: K) {
            this.key = key;
        }
        setValue(value: V): V {
            return this.value = value;
        }
    }

    export class HashMap<K extends Object, V> implements Map<K, V> {

        protected entries: { [key: string]: Entry<K, V> };
        protected entryCount: number;

        constructor() {
            this.entries = {};
            this.entryCount = 0;
        }


        get(key: K): V {
            var entry: Entry<K, V> = this.entries[key.toString()];
            if (entry == null) {
                return null;
            }
            return entry.getValue();
        }

        put(key: K, value: V): V {
            return this.set(key, value);
        }

        set(key: K, value: V): V {

            if (key == null || value == null) {
                return undefined;
            }

            var ret: V;
            var k = key.toString();
            var previousElement: Entry<K, V> = this.entries[k];
            if (previousElement == null) {
                this.entryCount++;
                ret = undefined;
            } else {
                ret = previousElement.getValue();
            }
            this.entries[k] = new DefaultEntry(key, value);
            return ret;
        }

        remove(key: K): V {
            var k = key.toString();
            var previousElement: Entry<K, V> = this.entries[k];
            if (previousElement != null) {
                delete this.entries[k];
                this.entryCount--;
                return previousElement.getValue();
            }
            return undefined;
        }

        keySet(): Set<K> {
            var result: HashSet<K> = new HashSet<K>();
            for (var entry in this.entries) {
                if (has(this.entries, entry)) {
                    result.add(this.entries[entry].getKey());
                }
            }
            return result;
        }

        entrySet(): Set<Entry<K, V>> {
            var result: HashSet<Entry<K, V>> = new HashSet<Entry<K, V>>();
            for (var entry in this.entries) {
                if (has(this.entries, entry)) {
                    result.add(this.entries[entry]);
                }
            }
            return result;
        }

        values(): Collection<V> {
            var result: ArrayList<V> = new ArrayList<V>();
            for (var entry in this.entries) {
                if (has(this.entries, entry)) {
                    result.add(this.entries[entry].getValue());
                }
            }
            return result;
        }

        private forEach(callback: (key: K, value: V) => any): void {
            for (var entry in this.entries) {
                if (has(this.entries, entry)) {
                    var ret = callback(this.entries[entry].getKey(), this.entries[entry].getValue());
                    if (ret === false) {
                        return;
                    }
                }
            }
        }

        containsKey(key: K): boolean {
            return this.get(key) != null;
        }

        containsValue(value: V): boolean {
            return this.values().contains(value);
        }

        clear() {
            this.entries = {};
            this.entryCount = 0;
        }

        size(): number {
            return this.entryCount;
        }

        isEmpty(): boolean {
            return this.entryCount <= 0;
        }

        toString(): string {
            var result = "{";
            this.forEach((k, v) => {
                result += `${k} : ${v}`;
            });
            return result + "\n}";
        }

    }


}    
