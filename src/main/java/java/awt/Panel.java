package java.awt;

import static jsweet.dom.Globals.document;

import jsweet.dom.HTMLDivElement;
import jsweet.util.StringTypes;

public class Panel extends Container {

	@Override
	public void createHTML() {
		htmlElement = document.createElement(StringTypes.div);
		htmlElement.style.width = "100%";
		htmlElement.style.height = "100%";
	}

}
