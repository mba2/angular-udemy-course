import { Directive, HostListener,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[inputFormatting]'
})
export class InputFormattingDirective {
  @Input("inputFormatting") format :string;

  constructor(private elem : ElementRef) { }


  @HostListener("blur") onBlur() {
    let value : string =  this.elem.nativeElement.value;
     
    if(this.format === "lowercase") {
     this.elem.nativeElement.value = value.toLowerCase();
    }else  this.elem.nativeElement.value = value.toUpperCase();
  }
}
