package java.awt;

import static jsweet.dom.Globals.document;

import java.applet.Applet;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import jsweet.dom.HTMLElement;
import jsweet.dom.HTMLInputElement;
import jsweet.util.StringTypes;

public class TextField extends Component implements HTMLComponent {

	HTMLInputElement input;
	ActionListener actionListener;

	public TextField(int cols) {
	}

	@Override
	public void init() {
		if (input != null) {
			return;
		}
		input = document.createElement(StringTypes.input);
		input.setAttribute("type", "text");
		input.id = "cmp" + Applet.CURRENT_ID++;
		initActionListener();
	}

	private void initActionListener() {
		if (actionListener != null) {
			input.onclick = e -> {
				this.actionListener.actionPerformed(new ActionEvent(this, null));
				return e;
			};
		}
	}

	@Override
	public void bind(String id) {
		input = (HTMLInputElement) document.getElementById(id);
	}

	@Override
	public HTMLElement getHTMLElement() {
		if (input == null) {
			init();
		}
		return input;
	}

	public void addActionListener(ActionListener actionListener) {
		this.actionListener = actionListener;
		if (input != null) {
			initActionListener();
		}
	}

	public void setText(String text) {
		input.value = text;
	}

	public String getText() {
		return input.value;
	}

}
