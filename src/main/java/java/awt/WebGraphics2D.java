package java.awt;

import jsweet.dom.CanvasRenderingContext2D;
import jsweet.dom.HTMLCanvasElement;
import jsweet.util.StringTypes;

public class WebGraphics2D extends Graphics {

	private HTMLCanvasElement canvas;
	private CanvasRenderingContext2D context;

	public WebGraphics2D(HTMLCanvasElement canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext(StringTypes._2d);
	}

	@Override
	public void drawString(String s, int x, int y) {
		context.fillText(s, x, y);
	}

	public final HTMLCanvasElement getCanvas() {
		return canvas;
	}

	public final CanvasRenderingContext2D getContext() {
		return context;
	}

}
