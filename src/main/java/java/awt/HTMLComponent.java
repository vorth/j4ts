package java.awt;

import jsweet.dom.HTMLElement;

public interface HTMLComponent {

	HTMLElement getHTMLElement();

	void bind(String id);

	void init();

}
