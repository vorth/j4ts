package java.awt.event;

public class ActionEvent {

	private Object source;
	
	private String actionCommand;

	public ActionEvent(Object source, String actionCommand) {
		super();
		this.source = source;
		this.actionCommand = actionCommand;
	}

	public final Object getSource() {
		return source;
	}

	public final String getActionCommand() {
		return actionCommand;
	}
	
	
}
