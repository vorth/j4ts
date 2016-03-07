namespace java.util {

    import equals = j4ts.util.equals;
    import has = j4ts.util.has;
    import arrays = j4ts.util.arrays;

    export class HashSet<T> implements Set<T> {
        private map: HashMap<T, any>;

        constructor(elements?: T[]) {
            this.map = new HashMap<T, any>();
            if (elements != null) {
                arrays.forEach(elements, e => {
                    this.add(e);
                });
            }
        }

        contains(element: T): boolean {
            return this.map.containsKey(element);
        }

        add(element: T): boolean {
            if (element == null || this.contains(element)) {
                return false;
            } else {
                this.map.put(element, element);
                return true;
            }
        }

        remove(element: T): boolean {
            if (!this.contains(element)) {
                return false;
            } else {
                this.map.remove(element);
                return true;
            }
        }

        toArray(param?: any): T[] {
            return this.map.values().toArray([]);
        }

        isEmpty(): boolean {
            return this.map.isEmpty();
        }

        size(): number {
            return this.map.size();
        }

        clear(): void {
            this.map.clear();
        }

        toString(): string {
            return arrays.toString(this.toArray());
        }
    }

}    
