
namespace java.util {
    export interface Iterator<E> {
        hasNext(): boolean;
        next(): E;
        remove(): void;
        forEachRemaining(action: (E) => void): void;
    }
}
