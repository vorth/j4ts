# J4TS
Java APIs in TypeScript

The goal of J4TS is to implement some Java APIs in TypeScript when it makes sense. It intends to be usefull for the following cases:

- Programmers used to the Java APIs can be more efficient using J4TS than when having to learn basic JavaScript APIs.
- It can ease code sharing between Java and TypeScript/JavaScript (and also hopefully, ease the understanding and relationships between the Java fans and TypeScript/JavaScript ones).
- Typically, J4TS can be used as a runtime for transpilers, so that you can use the Java APIs in your transpiled Java programs. So far, J4TS main target is the [JSweet transpiler](https://github.com/cincheo/jsweet), but it is not limited to it.

## EXAMPLES
```TypeScript
var l: List<String> = new ArrayList<String>();
l.add("a");
l.add("b");
l.add("c");
assertEquals("[a, b, c]", l.toString());
assertEquals(l.indexOf("a"), 0);

var s: Set<String> = new HashSet<String>();
s.add("a");
s.add("a");
s.add("b");
s.add("c");
s.add("c");
assertEquals(3, s.size());
assertTrue(s.contains("c"));

var s: Map<String, String> = new HashMap<String, String>();
s.put("a", "aa");
s.put("b", "bb");
s.put("c", "cc");
assertEquals("bb", s.get("b"));
```

## DISCLAIMER

J4TS is not made for implementing Java semantics in JavaScript. It will be close and mimic Java behavior, but it will never be completely Java. J4TS is full of heuristics and approximations, trying to get the best of it at a reasonable cost. So, programmers using J4TS should not expect to use it for porting complex Java applications (although it may help). On the other hand, J4TS should be fine to share and port small portions of code between Java and TypeScript. Typically, when using J4TS, some business logic may be shared more easily between a Java server and a TypeScript/JavaScript client.

## CONTRIBUTIONS

J4TS is meant to serve the public interest and be as open as possible. So anyone is more than welcome to contribute as long as it does not deviate J4TS from its initial goals stated above. 

## HOW TO BUILD

Currently J4TS is in a very early stage of development and there is no well-documented build process.

## LICENSE

J4TS is licensed under the Apache Open Source License version 2.