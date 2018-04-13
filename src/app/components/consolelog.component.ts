import { Component, OnInit } from '@angular/core';

@Component({
    selector: "console-log-div",
	template: `
			<div>
				<legend>Console Output</legend>
				<div id="console-log-div" style="overflow:scroll;">
				</div>
			</div>
			`
})

export class ConsoleLogComponent implements OnInit{
	
	ngOnInit() {
		this.initConsoleLogDiv();
	}

	initConsoleLogDiv = () => {
		'use strict';
		function toString(x) {
			return typeof x === 'string' ? x : JSON.stringify(x);
		}

		var log = console.log.bind(console);
		var error = console.error.bind(console);
		var warn = console.warn.bind(console);
		var table = console.table ? console.table.bind(console) : null;
		var id = 'console-log-div';

		function createOuterElement() {
			var outer = document.getElementById(id);
			// if (!outer) {
			//   outer = document.createElement('fieldset');
			//   outer.id = id;
			//   document.body.appendChild(outer);
			// }
			outer.classList.add(id);
			var style = outer.style;
			style.width = '100%';
			style.height = '300px';
			style.fontFamily = 'monospace';
			style.marginTop = '20px';
			style.marginLeft = '10px';
			style.marginRight = '10px';
			style.whiteSpace = 'pre';
			style.border = '1px solid black';
			style.borderRadius = '5px';
			style.padding = '5px 10px';
			return outer;
		}

		var logTo = (function createLogDiv() {
			var outer = createOuterElement();
			var div = document.createElement('div');
			div.id = 'console-log-text';
			outer.appendChild(div);
			return div;
		}());

		function printToDiv() {
			var msg = Array.prototype.slice.call(arguments, 0)
			  .map(toString)
			  .join(' ');
			var text = logTo.textContent;
			logTo.textContent = text + msg + '\n';
		}

		function logWithCopy() {
			log.apply(null, arguments);
			printToDiv.apply(null, arguments);
		}

  		console.log = logWithCopy;
  // console.log.toDiv = true;
	}
}