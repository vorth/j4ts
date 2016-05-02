
/// <reference path="../../j4ts/util.ts" />

namespace java.util {

    import equals = j4ts.util.equals;
    import arrays = j4ts.util.arrays;

    interface ILinkedListNode<T> {
        element: T;
        next: ILinkedListNode<T>;
    }

    export class ArrayList<T> implements List<T> {

        elements: T[] = [];

        constructor() {
        }

        iterator(): Iterator<T> {
            throw new Error("unsupported operation");
        }

        set(index: number, item: T): T {
            this.elements[index] = item;
            return item;
        }

        add(main: any, extra?: any): any {
            var item: T;
            var index: number;
            if (extra == null) {
                item = main;
            } else {
                item = extra;
                index = main;
            }
            if (item == null) {
                return;
            }
            if (index == null) {
                this.elements.push(item);
            } else {
                this.elements.splice(index, 0, item)
            }
            return;
        }

        get(index: number): T {
            return this.elements[index];
        }

        indexOf(item: T): number {
            return this.elements.indexOf(item);
        }

        lastIndexOf(item: T): number {
            return this.elements.lastIndexOf(item);
        }

        contains(item: T): boolean {
            return (this.indexOf(item) >= 0);
        }

        remove(item: any): any {
            var index;
            if (typeof item === 'number') {
                index = item;
            } else {
                index = this.elements.indexOf(item);
            }
            if (index > -1) {
                this.elements.splice(index, 1);
            }
        }

        clear(): void {
            this.elements = [];
        }

        equals(other: Object): boolean {
            // TODO
            return false;
        }

        private removeElementAtIndex(index: number): T {
            var removed = this.elements.splice(index, 1);
            if (removed.length > 0) {
                return removed[0];
            } else {
                return null;
            }
        }

        toArray(): T[] {
            return this.elements;
        }

        size(): number {
            return this.elements.length;
        }

        isEmpty(): boolean {
            return this.elements.length <= 0;
        }

        toString(): string {
            return arrays.toString(this.elements);
        }

        subList(fromIndex:number, toIndex:number): List<T> {
            var result: ArrayList<T> = new ArrayList<T>();
            result.elements = this.elements.slice(fromIndex, toIndex);
            return result;
        }

    }

}