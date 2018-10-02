import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appInputFormat]'
})
export class InputFormatDirective {
    constructor(private el: ElementRef) { }
    @Input('appInputFormat') format;
    @HostListener('focus') onFocus() {
        console.log("Focus");
    }
    @HostListener('blur') onBlur() {
        console.log("Blur");
        let value: string = this.el.nativeElement.value;
        if (this.format == 'lowercase') {
            this.el.nativeElement.value = value.toLowerCase();
        } else {
            this.el.nativeElement.value = value.toUpperCase();
        }

    }

}
