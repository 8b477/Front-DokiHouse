import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appUpdateHover]',
  standalone: true
})
export class UpdateHoverDirective implements OnInit, OnDestroy {

  @Input('appUpdateHover') isHoverEnabled!: Observable<boolean>

  private hoverSubscription!: Subscription

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.hoverSubscription = this.isHoverEnabled.subscribe(isEnabled => {
      if (isEnabled) {
        this.renderer.addClass(this.el.nativeElement, 'hover-update-enabled')
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'hover-update-enabled')
      }
    });
  }

  ngOnDestroy() {
    if (this.hoverSubscription) {
      this.hoverSubscription.unsubscribe()
    }
  }
}