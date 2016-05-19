# J4TS
Java APIs for TypeScript / JavaScript / JSweet

The goal of J4TS is to implement some Java APIs for TypeScript / JavaScript / JSweet when it makes sense. It is based on a fork of the GWT's JRE emulation library and is written in Java, and transpiled to TypeScript/JavaScript with the JSweet transpiler. It intends to be useful for the following cases:

- Programmers used to the Java APIs can be more efficient using J4TS than when having to learn basic JavaScript APIs.
- It can ease code sharing between Java and TypeScript/JavaScript (and also hopefully, ease the understanding and relationships between the Java fans and TypeScript/JavaScript ones).
- Typically, J4TS can be used as a runtime for transpilers, so that you can use the Java APIs in your transpiled Java programs. So far, J4TS main target is the [JSweet transpiler](http://www.jsweet.org), but it is not limited to it.

J4TS currently covers most of the core Java API supported by GWT (``java.lang``, ``java.util``, some ``java.io``). It does not support java.math yet because the GWT implementation requires a deep Java emulation, which is not consistent with the JSweet approach (so ``java.math`` should be implemented as a wrapper for [bignumber.js](https://github.com/MikeMcl/bignumber.js/) for instance). J4TS is intended to be completed on-the-fly as more use cases are needed. So feel free to contribute.

## Examples
```TypeScript
import List = java.util.List;
import ArrayList = java.util.ArrayList;
import Set = java.util.Set;
import HashSet = java.util.HashSet;
import Map = java.util.Map;
import HashMap = java.util.HashMap;

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

## Disclaimer

J4TS is not made for fully implementing Java semantics in JavaScript. It is close to and mimic Java behavior, but it will never be completely Java, espcially because primitive types in Java are different (chars and numbers especially).

## Contributions

J4TS is meant to serve the public interest and be as open as possible. So anyone is more than welcome to contribute as long as it does not deviate J4TS from its initial goals stated above. When you meet a class or a method that is not supported, please feel free to contribute under the terms of the license.

## How to use

You can use the current JavaScript bundle (runtime): ``target/js/bundle.js``. 

From TypeScript, you can compile with ``js/bundle.d.ts``.

From JSweet, add the candy dependency in your ``pom.xml``.

```xml
<dependency>
	<groupId>org.jsweet.candies</groupId>
	<artifactId>j4ts</artifactId>
	<version>0.1.0</version>
</dependency>
```

## How to build

Use Gulp to clean temporary files (required: Gulp and required modules).

```
> gulp clean
```

Use Maven to generate the JavaScript bundle in the ``target/js`` directory (required: JSweet)

```
> mvn clean generate-sources
```

To build and install the JSweet candy in your local Maven repository.

```
> gulp prepare-jsweet-candy
> cd packaging/jsweet-candy
> mvn clean install
```

## License

J4TS is licensed under the Apache Open Source License version 2.