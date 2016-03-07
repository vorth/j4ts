namespace j4ts.util {

    export function equals<T>(a: T, b: T): boolean {
        return a === b;
    }

    export function has(obj: Object, prop: any): boolean {
        return obj != null && obj.hasOwnProperty(prop);
    }

    export namespace arrays {

        export function indexOf<T>(array: T[], item: T): number {
            for (let i = 0; i < array.length; i++) {
                if (j4ts.util.equals(array[i], item)) {
                    return i;
                }
            }
            return -1;
        }

        export function contains<T>(array: T[], item: T): boolean {
            return indexOf(array, item) >= 0;
        }


        export function remove<T>(array: T[], item: T): boolean {
            var index = indexOf(array, item);
            if (index < 0) {
                return false;
            }
            array.splice(index, 1);
            return true;
        }

        export function equals<T>(array1: T[], array2: T[]): boolean {

            if (array1.length !== array2.length) {
                return false;
            }
            for (var i = 0; i < array1.length; i++) {
                if (!j4ts.util.equals(array1[i], array2[i])) {
                    return false;
                }
            }
            return true;
        }

        export function forEach<T>(array: T[], callback: (T) => void): void {
            for (var e of array) {
                callback(e);
            }
        }
        
        export function toString(array: Object[]):string {
            var result: string = "[";
            if (array.length > 0) {
                forEach(array, e => { result += e.toString() + ", "; });
                result = result.substr(0, result.length - 2);
            }
            result += "]";
            return result;
        }
        
    }


}