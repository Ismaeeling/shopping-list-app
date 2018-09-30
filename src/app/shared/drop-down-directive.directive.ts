import { Directive, Input, ElementRef, Renderer2, HostBinding, TemplateRef, ViewContainerRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDownDirective]'
})
export class DropDownDirectiveDirective {
  @HostBinding('class.open') isOpen=false;

  @HostListener ('click') toggleOpen(){
    this.isOpen=!this.isOpen;
  }
  
  constructor() { }

}
