import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// HostListener serve para saber quando o mouse passa em cima
// Input serve para passar valores para a diretiva

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input() appHighlight = '';
  @Input() defaultColor = '';

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('')
  }

  // função que muda a cor do objeto
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  } 

}
