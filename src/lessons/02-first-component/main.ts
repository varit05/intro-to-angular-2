import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {FirstComponent} from "./first-component";

@Component({
	selector: 'app',
	directives: [FirstComponent],
	template: `<div>
		<first-component></first-component>
		</div>`
})
class App{}

bootstrap(App);