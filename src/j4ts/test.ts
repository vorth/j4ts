
/// <reference path="../java/util/List.ts" />
/// <reference path="../java/util/ArrayList.ts" />
/// <reference path="../java/util/Set.ts" />
/// <reference path="../java/util/HashSet.ts" />
/// <reference path="../java/util/Map.ts" />
/// <reference path="../java/util/HashMap.ts" />

namespace j4ts.test {

    import List = java.util.List;
    import ArrayList = java.util.ArrayList;
    import Set = java.util.Set;
    import HashSet = java.util.HashSet;
    import Map = java.util.Map;
    import HashMap = java.util.HashMap;

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

    export function test() {
        testList();
        testSet();
        testMap();
    }

    export function testList() {
        console.info("testing lists");
        var l: List<String> = new ArrayList<String>();
        l.add("a");
        l.add("b");
        l.add("c");
        assertEquals(l.toString(), "[a, b, c]");
        l.remove("b");
        assertEquals(l.toString(), "[a, c]");
        assertEquals(l.size(), 2);
        assertEquals(l.get(1), "c");
        assertEquals(l.indexOf("a"), 0);
        console.info("end testing lists");
    }

    export function testSet() {
        console.info("testing sets");
        var s: Set<String> = new HashSet<String>();
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

    export function testMap() {
        console.info("testing maps");
        var s: Map<String, String> = new HashMap<String, String>();
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

}