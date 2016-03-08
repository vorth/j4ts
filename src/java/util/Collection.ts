
namespace java.util {
    
    export interface Collection<E> extends Iterable<E> {
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
        //containsAll(c: Collection<any>): boolean;
        //addAll(main: any, extra?: any): any;
        //removeAll(c: Collection<any>): boolean;
        //removeIf(filter: (E) => boolean): boolean;
        //retainAll(c: Collection<any>): boolean;
        clear(): void;
        //equals(o: Object): boolean;
        //hashCode(): number;
        //spliterator(): Spliterator<E>;
        //stream(): Stream<E>;
        //parallelStream(): Stream<E>;
    }

}