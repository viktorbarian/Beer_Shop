import { FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-spinner-input',
  templateUrl: './custom-spinner-input.component.html',
  styleUrls: ['./custom-spinner-input.component.scss'],
})
export class CustomSpinnerInputComponent implements OnInit {
  /*   @Input() control: FormControl = new FormControl(1, { nonNullable: true });
   */ @Input() width: string = '100%';
  @Input() value: number = 1;
  @Output() incrementEmit: EventEmitter<void> = new EventEmitter();
  @Output() decrementEmit: EventEmitter<void> = new EventEmitter();
  @Output() changeEmit: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onIncrementClick() {
    this.incrementEmit.emit();
  }
  onDecrementClick() {
    this.decrementEmit.emit();
  }
  onChangedValue(event: any) {
    this.changeEmit.emit(event.target.value);
  }
}
