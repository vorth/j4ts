var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var j4ts;
(function (j4ts) {
    var util;
    (function (util) {
        function equals(a, b) {
            return a === b;
        }
        util.equals = equals;
        function has(obj, prop) {
            return obj != null && obj.hasOwnProperty(prop);
        }
        util.has = has;
        var arrays;
        (function (arrays) {
            function indexOf(array, item) {
                for (var i = 0; i < array.length; i++) {
                    if (j4ts.util.equals(array[i], item)) {
                        return i;
                    }
                }
                return -1;
            }
            arrays.indexOf = indexOf;
            function contains(array, item) {
                return indexOf(array, item) >= 0;
            }
            arrays.contains = contains;
            function remove(array, item) {
                var index = indexOf(array, item);
                if (index < 0) {
                    return false;
                }
                array.splice(index, 1);
                return true;
            }
            arrays.remove = remove;
            function equals(array1, array2) {
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
            arrays.equals = equals;
            function forEach(array, callback) {
                for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                    var e = array_1[_i];
                    callback(e);
                }
            }
            arrays.forEach = forEach;
            function toString(array) {
                var result = "[";
                if (array.length > 0) {
                    forEach(array, function (e) { result += e.toString() + ", "; });
                    result = result.substr(0, result.length - 2);
                }
                result += "]";
                return result;
            }
            arrays.toString = toString;
        })(arrays = util.arrays || (util.arrays = {}));
    })(util = j4ts.util || (j4ts.util = {}));
})(j4ts || (j4ts = {}));
/// <reference path="../../j4ts/util.ts" />
var java;
(function (java) {
    var util;
    (function (util) {
        var arrays = j4ts.util.arrays;
        var ArrayList = (function () {
            function ArrayList() {
                this.elements = [];
            }
            ArrayList.prototype.iterator = function () {
                throw new Error("unsupported operation");
            };
            ArrayList.prototype.set = function (index, item) {
                this.elements[index] = item;
                return item;
            };
            ArrayList.prototype.add = function (main, extra) {
                var item;
                var index;
                if (extra == null) {
                    item = main;
                }
                else {
                    item = extra;
                    index = main;
                }
                if (item == null) {
                    return;
                }
                if (index == null) {
                    this.elements.push(item);
                }
                else {
                    this.elements.splice(index, 0, item);
                }
                return;
            };
            ArrayList.prototype.get = function (index) {
                return this.elements[index];
            };
            ArrayList.prototype.indexOf = function (item) {
                return this.elements.indexOf(item);
            };
            ArrayList.prototype.lastIndexOf = function (item) {
                return this.elements.lastIndexOf(item);
            };
            ArrayList.prototype.contains = function (item) {
                return (this.indexOf(item) >= 0);
            };
            ArrayList.prototype.remove = function (item) {
                var index;
                if (typeof item === 'number') {
                    index = item;
                }
                else {
                    index = this.elements.indexOf(item);
                }
                if (index > -1) {
                    this.elements.splice(index, 1);
                }
            };
            ArrayList.prototype.clear = function () {
                this.elements = [];
            };
            ArrayList.prototype.equals = function (other) {
                // TODO
                return false;
            };
            ArrayList.prototype.removeElementAtIndex = function (index) {
                var removed = this.elements.splice(index, 1);
                if (removed.length > 0) {
                    return removed[0];
                }
                else {
                    return null;
                }
            };
            ArrayList.prototype.toArray = function () {
                return this.elements;
            };
            ArrayList.prototype.size = function () {
                return this.elements.length;
            };
            ArrayList.prototype.isEmpty = function () {
                return this.elements.length <= 0;
            };
            ArrayList.prototype.toString = function () {
                return arrays.toString(this.elements);
            };
            ArrayList.prototype.subList = function (fromIndex, toIndex) {
                var result = new ArrayList();
                result.elements = this.elements.slice(fromIndex, toIndex);
                return result;
            };
            ArrayList.prototype.sort = function (c) {
                this.elements.sort(c.compare);
            };
            return ArrayList;
        }());
        util.ArrayList = ArrayList;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
/// <reference path="../../j4ts/util.ts" />
var java;
(function (java) {
    var util;
    (function (util) {
        var arrays = j4ts.util.arrays;
        var HashSet = (function () {
            function HashSet(elements) {
                var _this = this;
                this.map = new util.HashMap();
                if (elements != null) {
                    arrays.forEach(elements, function (e) {
                        _this.add(e);
                    });
                }
            }
            HashSet.prototype.contains = function (element) {
                return this.map.containsKey(element);
            };
            HashSet.prototype.add = function (element) {
                if (element == null || this.contains(element)) {
                    return false;
                }
                else {
                    this.map.put(element, element);
                    return true;
                }
            };
            HashSet.prototype.remove = function (element) {
                if (!this.contains(element)) {
                    return false;
                }
                else {
                    this.map.remove(element);
                    return true;
                }
            };
            HashSet.prototype.toArray = function (param) {
                return this.map.values().toArray([]);
            };
            HashSet.prototype.isEmpty = function () {
                return this.map.isEmpty();
            };
            HashSet.prototype.size = function () {
                return this.map.size();
            };
            HashSet.prototype.clear = function () {
                this.map.clear();
            };
            HashSet.prototype.toString = function () {
                return arrays.toString(this.toArray());
            };
            return HashSet;
        }());
        util.HashSet = HashSet;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
/// <reference path="../../j4ts/util.ts" />
/// <reference path="Map.ts" />
var java;
(function (java) {
    var util;
    (function (util) {
        var has = j4ts.util.has;
        var DefaultEntry = (function () {
            function DefaultEntry(key, value) {
                this.key = key;
                this.value = value;
            }
            ;
            DefaultEntry.prototype.getKey = function () {
                return this.key;
            };
            DefaultEntry.prototype.getValue = function () {
                return this.value;
            };
            DefaultEntry.prototype.setKey = function (key) {
                this.key = key;
            };
            DefaultEntry.prototype.setValue = function (value) {
                return this.value = value;
            };
            return DefaultEntry;
        }());
        var HashMap = (function () {
            function HashMap() {
                this.entries = {};
                this.entryCount = 0;
            }
            HashMap.prototype.get = function (key) {
                var entry = this.entries[key.toString()];
                if (entry == null) {
                    return null;
                }
                return entry.getValue();
            };
            HashMap.prototype.put = function (key, value) {
                return this.set(key, value);
            };
            HashMap.prototype.set = function (key, value) {
                if (key == null || value == null) {
                    return undefined;
                }
                var ret;
                var k = key.toString();
                var previousElement = this.entries[k];
                if (previousElement == null) {
                    this.entryCount++;
                    ret = undefined;
                }
                else {
                    ret = previousElement.getValue();
                }
                this.entries[k] = new DefaultEntry(key, value);
                return ret;
            };
            HashMap.prototype.remove = function (key) {
                var k = key.toString();
                var previousElement = this.entries[k];
                if (previousElement != null) {
                    delete this.entries[k];
                    this.entryCount--;
                    return previousElement.getValue();
                }
                return undefined;
            };
            HashMap.prototype.keySet = function () {
                var result = new util.HashSet();
                for (var entry in this.entries) {
                    if (has(this.entries, entry)) {
                        result.add(this.entries[entry].getKey());
                    }
                }
                return result;
            };
            HashMap.prototype.entrySet = function () {
                var result = new util.HashSet();
                for (var entry in this.entries) {
                    if (has(this.entries, entry)) {
                        result.add(this.entries[entry]);
                    }
                }
                return result;
            };
            HashMap.prototype.values = function () {
                var result = new util.ArrayList();
                for (var entry in this.entries) {
                    if (has(this.entries, entry)) {
                        result.add(this.entries[entry].getValue());
                    }
                }
                return result;
            };
            HashMap.prototype.forEach = function (callback) {
                for (var entry in this.entries) {
                    if (has(this.entries, entry)) {
                        var ret = callback(this.entries[entry].getKey(), this.entries[entry].getValue());
                        if (ret === false) {
                            return;
                        }
                    }
                }
            };
            HashMap.prototype.containsKey = function (key) {
                return this.get(key) != null;
            };
            HashMap.prototype.containsValue = function (value) {
                return this.values().contains(value);
            };
            HashMap.prototype.clear = function () {
                this.entries = {};
                this.entryCount = 0;
            };
            HashMap.prototype.size = function () {
                return this.entryCount;
            };
            HashMap.prototype.isEmpty = function () {
                return this.entryCount <= 0;
            };
            HashMap.prototype.toString = function () {
                var result = "{";
                this.forEach(function (k, v) {
                    result += k + " : " + v;
                });
                return result + "\n}";
            };
            return HashMap;
        }());
        util.HashMap = HashMap;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
/// <reference path="../java/util/List.ts" />
/// <reference path="../java/util/ArrayList.ts" />
/// <reference path="../java/util/Set.ts" />
/// <reference path="../java/util/HashSet.ts" />
/// <reference path="../java/util/Map.ts" />
/// <reference path="../java/util/HashMap.ts" />
var j4ts;
(function (j4ts) {
    var test;
    (function (test_1) {
        var ArrayList = java.util.ArrayList;
        var HashSet = java.util.HashSet;
        var HashMap = java.util.HashMap;
        function assertEquals(o1, o2) {
            if (!(o1 === o2)) {
                throw new Error("invalid assertion: " + o1 + "!=" + o2);
            }
        }
        function assertTrue(b) {
            if (!b) {
                throw new Error("invalid assertion");
            }
        }
        function assertFalse(b) {
            if (b) {
                throw new Error("invalid assertion");
            }
        }
        function test() {
            testList();
            testSet();
            testMap();
        }
        test_1.test = test;
        function testList() {
            console.info("testing lists");
            var l = new ArrayList();
            l.add("a");
            l.add("b");
            l.add("c");
            assertEquals(l.toString(), "[a, b, c]");
            assertEquals(l.subList(1, 3).toString(), "[b, c]");
            l.remove("b");
            assertEquals(l.toString(), "[a, c]");
            assertEquals(l.size(), 2);
            assertEquals(l.get(1), "c");
            assertEquals(l.indexOf("a"), 0);
            console.info("end testing lists");
        }
        test_1.testList = testList;
        function testSet() {
            console.info("testing sets");
            var s = new HashSet();
            s.add("a");
            s.add("a");
            s.add("b");
            s.add("c");
            s.add("c");
            assertEquals(s.toString(), "[a, b, c]");
            s.remove("b");
            assertTrue(s.contains("a"));
            assertTrue(s.contains("c"));
            assertFalse(s.contains("b"));
            assertEquals(s.size(), 2);
            console.info("end testing sets");
        }
        test_1.testSet = testSet;
        function testMap() {
            console.info("testing maps");
            var s = new HashMap();
            s.put("a", "aa");
            s.put("b", "bb");
            s.put("c", "cc");
            assertEquals(s.size(), 3);
            assertEquals("bb", s.get("b"));
            s.remove("aa");
            assertEquals(s.size(), 3);
            s.remove("a");
            assertEquals(s.size(), 2);
            console.info("end testing maps");
        }
        test_1.testMap = testMap;
    })(test = j4ts.test || (j4ts.test = {}));
})(j4ts || (j4ts = {}));
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Temporary implementation.
         */
        var LinkedList = (function (_super) {
            __extends(LinkedList, _super);
            function LinkedList() {
                _super.apply(this, arguments);
            }
            return LinkedList;
        }(util.ArrayList));
        util.LinkedList = LinkedList;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
