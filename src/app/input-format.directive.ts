import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }

  

  @HostListener('focus') onfocus(){
    console.log("on focus");
  }

  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;
    console.log("value : "+value);
    console.log("format : "+this.format);
    if(this.format == 'lowerCase'){
       this.el.nativeElement.value = value.toLowerCase();
    } if(this.format == 'upperCase'){
      this.el.nativeElement.value = value.toUpperCase();
   }
  }
}
