package java.util.stream;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.function.IntFunction;

public interface IntStream {
    static Stream range(int startInclusive, int endExclusive) {
        if (startInclusive >= endExclusive) {
            return Collections.emptyList().stream();
        } else {
            List<Integer> result = new ArrayList();
            for (;startInclusive < endExclusive; ++startInclusive) {
                result.add(startInclusive);
            }
            return result.stream();
        }
    }
}
