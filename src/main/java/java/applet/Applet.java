package java.applet;

import static jsweet.dom.Globals.console;
import static jsweet.dom.Globals.document;
import static jsweet.dom.Globals.window;
import static jsweet.util.Globals.$get;
import static jsweet.util.Globals.$new;
import static jsweet.util.Globals.union;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.HTMLComponent;
import java.awt.Layout;
import java.awt.WebGraphics2D;

import jsweet.dom.Element;
import jsweet.dom.HTMLCanvasElement;
import jsweet.dom.HTMLDivElement;
import jsweet.dom.HTMLElement;
import jsweet.dom.NodeListOf;
import jsweet.util.StringTypes;

public class Applet {

	public static int CURRENT_ID = 0;

	static {
		console.info("installing applet onload hook");
		window.onload = e -> {
			console.info("applet onload hook");
			NodeListOf<Element> divList = document.getElementsByClassName("applet");

			HTMLDivElement div = (HTMLDivElement) divList.$get(0);
			if (div.getAttribute("data-applet") != null) {
				console.info("installing applet: " + div.getAttribute("data-applet"));
				div.style.position = "relative";
				HTMLCanvasElement canvas = document.createElement(StringTypes.canvas);
				canvas.setAttribute("width", div.getAttribute("data-width"));
				canvas.setAttribute("height", div.getAttribute("data-height"));
				div.style.width = div.getAttribute("data-width");
				div.style.height = div.getAttribute("data-height");
				if (div.firstChild != null) {
					div.insertBefore(canvas, div.firstChild);
				} else {
					div.appendChild(canvas);
				}
				canvas.style.position = "absolute";
				canvas.style.left = "0px";
				canvas.style.right = "0px";
				canvas.style.width = div.style.width;
				canvas.style.height = div.style.height;
				canvas.style.zIndex = "-1";
				String[] names = div.getAttribute("data-applet").split(".");
				Object constructor = window;
				for (String name : names) {
					constructor = $get(constructor, name);
					console.info("name: " + name + " -> " + constructor);
				}
				Applet applet = $new(constructor);
				applet.container = div;
				Graphics g = new WebGraphics2D(canvas);
				applet.init();
				applet.paint(g);
			}
			return null;
		};
	}

	HTMLElement container;
	Color backgroundColor;
	Layout layout;

	public Applet() {
	}

	public void init() {
	}

	public void paint(Graphics g) {
		WebGraphics2D wg = (WebGraphics2D) g;
		if (backgroundColor != null) {
			wg.getContext().fillStyle = union(backgroundColor.toHTML());
			console.log("painting background: " + backgroundColor.toHTML());
			wg.getContext().fillRect(0, 0, wg.getContext().canvas.width, wg.getContext().canvas.height);
		}
	}

	public void setBackground(Color c) {
		backgroundColor = c;
	}

	public void setLayout(Layout layout) {
		this.layout = layout;
		if (container.firstChild != null) {
			container.insertBefore(layout.getHTMLElement(), container.firstChild);
		} else {
			container.appendChild(layout.getHTMLElement());
		}
	}

	public void add(HTMLComponent component) {
		layout.add(component);
	}

}
