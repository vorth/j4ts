
namespace java.util {

    export interface List<E> extends Collection<E> {
        indexOf(o: Object): number;
        lastIndexOf(o: Object): number;
        //add(index: number, element: E): E;
        //addAll(index: number, element: Collection<E>): E;
        get(index: number): E;
        //remove(index: number): E;
        set(index: number, element: E): E;
        //subList(fromIndex: number, toIndex: number): List<E>;
        
        //spliterator(): Spliterator<E>;
    }

}