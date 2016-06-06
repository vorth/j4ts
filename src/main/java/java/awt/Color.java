package java.awt;

public class Color {

	int r, g, b;

	public Color(int r, int g, int b) {
		super();
		this.r = r;
		this.g = g;
		this.b = b;
	}

	public String toHTML() {
		StringBuilder sb = new StringBuilder();
		sb.append("#");
		String s = Integer.toHexString(r);
		if (s.length() == 1) {
			sb.append("0");
		}
		sb.append(s);
		s = Integer.toHexString(g);
		if (s.length() == 1) {
			sb.append("0");
		}
		sb.append(s);
		s = Integer.toHexString(b);
		if (s.length() == 1) {
			sb.append("0");
		}
		sb.append(s);
		return sb.toString();
	}

}
