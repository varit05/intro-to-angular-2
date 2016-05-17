import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
	selector: 'app',
	templateUrl: './lessons/03-attribute-directive/highlight.directive.html',
	directives: [HighlightDirective]
})

class App {}

bootstrap(App);