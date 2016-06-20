package java.awt;

import static jsweet.dom.Globals.document;

import jsweet.dom.HTMLElement;
import jsweet.dom.HTMLTableColElement;
import jsweet.dom.HTMLTableDataCellElement;
import jsweet.dom.HTMLTableElement;
import jsweet.dom.HTMLTableRowElement;
import jsweet.util.StringTypes;

public class GridLayout implements Layout {

	HTMLTableElement table;
	int currentPosition = 0;
	int cols, rows;

	public GridLayout(int rows, int cols) {
		this.rows = rows;
		this.cols = cols;
	}

	@Override
	public void add(HTMLComponent component) {
		if (table == null) {
			init();
		}
		int pos = 0;
		for (int j = 0; j < rows; j++) {
			HTMLTableRowElement row = (HTMLTableRowElement) table.childNodes.$get(j);
			for (int i = 0; i < cols; i++) {
				HTMLTableColElement col = (HTMLTableColElement) row.childNodes.$get(i);
				if (pos++ == currentPosition) {
					col.appendChild(component.getHTMLElement());
					component.getHTMLElement().style.width = "100%";
					component.getHTMLElement().style.height = "100%";
					currentPosition++;
					return;
				}
			}
		}
	}

	@Override
	public HTMLElement getHTMLElement() {
		if (table == null) {
			init();
		}
		return table;
	}

	@Override
	public void bind(String id) {
	}

	@Override
	public void init() {
		table = document.createElement(StringTypes.table);
		table.style.width = "100%";
		table.style.height = "100%";
		table.style.position = "absolute";
		table.style.left = "0px";
		table.style.right = "0px";
		table.style.zIndex = "0";

		for (int j = 0; j < rows; j++) {
			HTMLTableRowElement row = document.createElement(StringTypes.tr);
			table.appendChild(row);
			for (int i = 0; i < cols; i++) {
				HTMLTableDataCellElement col = document.createElement(StringTypes.td);
				row.appendChild(col);
				col.style.width = "" + ((int) 100 / cols) + "%";
			}
		}
	}

}
