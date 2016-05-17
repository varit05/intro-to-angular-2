import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
	selector: '[myHighlight]',
	host: {
	    '(mouseenter)': 'onMouseEnter()',
	    '(mouseleave)': 'onMouseLeave()'
	}
})

export class HighlightDirective {
	private _defaultColor= 'Green';
	private el: HTMLElement;

	constructor(el: ElementRef) {
		this.el = el.nativeElement;
	}

	@Input() set defaultColor(colorName:string) {
	    this._defaultColor = colorName || this._defaultColor;
	}

    @Input('myHighlight') highlightColor: string;

    onMouseEnter() { this.highlight(this.highlightColor || this._defaultColor); }
    onMouseLeave() { this.highlight(null); }

    private highlight(color:string) {
        this.el.style.backgroundColor = color;
    }
}
