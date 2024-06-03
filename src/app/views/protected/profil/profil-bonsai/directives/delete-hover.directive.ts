import { Observable, Subscription } from 'rxjs';
import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appDeleteHover]',
  standalone: true
})
export class DeleteHoverDirective implements OnInit, OnDestroy {

  @Input('appDeleteHover') isHoverEnabled!: Observable<boolean>

  private hoverSubscription!: Subscription

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.hoverSubscription = this.isHoverEnabled.subscribe(isEnabled => {
      if (isEnabled) {
        this.renderer.addClass(this.el.nativeElement, 'hover-delete-enabled')
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'hover-delete-enabled')
      }
    });
  }

  ngOnDestroy() {
    if (this.hoverSubscription) {
      this.hoverSubscription.unsubscribe()
    }
  }
}