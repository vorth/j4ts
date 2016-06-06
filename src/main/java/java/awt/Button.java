package java.awt;

import static jsweet.dom.Globals.console;
import static jsweet.dom.Globals.document;

import java.applet.Applet;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import jsweet.dom.HTMLButtonElement;
import jsweet.dom.HTMLElement;
import jsweet.util.StringTypes;

public class Button extends Component implements HTMLComponent {

	HTMLButtonElement button;
	ActionListener actionListener;
	String actionCommand;
	String label;

	public Button(String label) {
		this.label = label;
		this.actionCommand = label;
	}

	@Override
	public void bind(String id) {
		button = (HTMLButtonElement) document.getElementById(id);
		button.innerHTML = label;
	}

	@Override
	public void init() {
		if (button != null) {
			return;
		}
		button = document.createElement(StringTypes.button);
		button.innerHTML = label;
		button.id = "cmp" + Applet.CURRENT_ID++;
		initActionListener();
	}

	private void initActionListener() {
		if (actionListener != null) {
			button.onclick = e -> {
				console.log("button clicked: " + actionCommand);
				this.actionListener.actionPerformed(new ActionEvent(this, actionCommand));
				return e;
			};
		}
	}

	@Override
	public HTMLElement getHTMLElement() {
		if (button == null) {
			init();
		}
		return button;
	}

	public void addActionListener(ActionListener actionListener) {
		this.actionListener = actionListener;
		if (button != null) {
			initActionListener();
		}
	}

}
