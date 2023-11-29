import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-letters-counter',
  templateUrl: './letters-counter.component.html',
  styleUrls: ['./letters-counter.component.scss'],
})
export class LettersCounterComponent implements AfterViewInit {
  public keyUp = new Subject<KeyboardEvent>();
  public counter = 0;

  @ViewChild('inputField', { static: false }) inputField!: ElementRef;
  inputValue: string = '';
  textLength = 0;

  ngAfterViewInit() {
    fromEvent(this.inputField?.nativeElement, 'keydown')
      .pipe(
        map((event: any) => event.target.value),
        tap((text: string) => (this.textLength = text.length))
      )
      .subscribe((value) => {
        this.inputValue = value;
        console.log(`Input value changed to: ${this.inputValue}`);
      });
  }
}
