package java.util.stream;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringJoiner;
import java.util.function.BiConsumer;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.Supplier;

public final class Collectors {
	private static <T> BinaryOperator<T> throwingMerger() {
		return (u, v) -> {
			throw new IllegalStateException(String.format("Duplicate key %s", u));
		};
	}

	static class CollectorImpl<T, A, R> implements Collector<T, A, R> {
		private final Supplier<A> supplier;
		private final BiConsumer<A, T> accumulator;
		private final BinaryOperator<A> combiner;

		CollectorImpl(Supplier<A> supplier, BiConsumer<A, T> accumulator, BinaryOperator<A> combiner) {
			this.supplier = supplier;
			this.accumulator = accumulator;
			this.combiner = combiner;
		}

		@Override
		public BiConsumer<A, T> accumulator() {
			return accumulator;
		}

		@Override
		public Supplier<A> supplier() {
			return supplier;
		}

		public BinaryOperator<A> combiner() {
			throw new IllegalStateException();
		}

		public Function<A, R> finisher() {
			throw new IllegalStateException();
		}

		public Set<Characteristics> characteristics() {
			throw new IllegalStateException();
		}
	}

	public static <T> Collector<T, ?, List<T>> toList() {
		return new CollectorImpl<>(() -> new ArrayList<>(), (l, i) -> l.add(i), (left, right) -> {
			left.addAll(right);
			return left;
		});
	}

	public static <T> Collector<T, ?, Set<T>> toSet() {
		return new CollectorImpl<>(() -> new HashSet<>(), (s, i) -> s.add(i), (left, right) -> {
			left.addAll(right);
			return left;
		});
	}

	public static <T, K, U> Collector<T, ?, Map<K, U>> toMap(Function<? super T, ? extends K> keyMapper,
			Function<? super T, ? extends U> valueMapper) {
		return toMap(keyMapper, valueMapper, throwingMerger(), HashMap::new);
	}

	public static <T, K, U> Collector<T, ?, Map<K, U>> toMap(Function<? super T, ? extends K> keyMapper,
			Function<? super T, ? extends U> valueMapper, BinaryOperator<U> mergeFunction) {
		return toMap(keyMapper, valueMapper, mergeFunction, HashMap::new);
	}

	public static <T, K, U, M extends Map<K, U>> Collector<T, ?, M> toMap(Function<? super T, ? extends K> keyMapper,
			Function<? super T, ? extends U> valueMapper, BinaryOperator<U> mergeFunction, Supplier<M> mapSupplier) {
		BiConsumer<M, T> accumulator = (map, element) -> map.merge(keyMapper.apply(element), valueMapper.apply(element),
				mergeFunction);
		return new CollectorImpl<>(mapSupplier, accumulator, mapMerger(mergeFunction));
	}

	private static <K, V, M extends Map<K, V>> BinaryOperator<M> mapMerger(BinaryOperator<V> mergeFunction) {
		return (m1, m2) -> {
			for (Map.Entry<K, V> e : m2.entrySet())
				m1.merge(e.getKey(), e.getValue(), mergeFunction);
			return m1;
		};
	}

	/**
	 * Returns a {@code Collector} that concatenates the input elements into a
	 * {@code String}, in encounter order.
	 *
	 * @return a {@code Collector} that concatenates the input elements into a
	 *         {@code String}, in encounter order
	 */
	public static Collector<CharSequence, ?, String> joining() {
		return new CollectorImpl<CharSequence, StringBuilder, String>(StringBuilder::new, StringBuilder::append,
				(r1, r2) -> {
					r1.append(r2);
					return r1;
				});
	}

	/**
	 * Returns a {@code Collector} that concatenates the input elements, separated
	 * by the specified delimiter, in encounter order.
	 *
	 * @param delimiter
	 *            the delimiter to be used between each element
	 * @return A {@code Collector} which concatenates CharSequence elements,
	 *         separated by the specified delimiter, in encounter order
	 */
	public static Collector<CharSequence, ?, String> joining(CharSequence delimiter) {
		return joining(delimiter, "", "");
	}

	/**
	 * Returns a {@code Collector} that concatenates the input elements, separated
	 * by the specified delimiter, with the specified prefix and suffix, in
	 * encounter order.
	 *
	 * @param delimiter
	 *            the delimiter to be used between each element
	 * @param prefix
	 *            the sequence of characters to be used at the beginning of the
	 *            joined result
	 * @param suffix
	 *            the sequence of characters to be used at the end of the joined
	 *            result
	 * @return A {@code Collector} which concatenates CharSequence elements,
	 *         separated by the specified delimiter, in encounter order
	 */
	public static Collector<CharSequence, ?, String> joining(CharSequence delimiter, CharSequence prefix,
			CharSequence suffix) {
		return new CollectorImpl<>(() -> new StringJoiner(delimiter, prefix, suffix), StringJoiner::add,
				StringJoiner::merge);
	}
}
