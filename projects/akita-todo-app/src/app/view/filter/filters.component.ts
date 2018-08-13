import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TodoFilter, VISIBILITY_FILTER } from './filter.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos-filters',
  template: `
    <mat-form-field>
      <mat-select [formControl]="control" placeholder="Фильтр">
        <mat-option *ngFor="let filter of filters;" [value]="filter.value">
          {{filter.label}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosFiltersComponent implements OnInit, OnDestroy {
  @Input() public active: VISIBILITY_FILTER;
  @Input() public filters: TodoFilter[];
  @Output() public update = new EventEmitter<VISIBILITY_FILTER>();

  public control: FormControl;

  public ngOnInit() {
    this.control = new FormControl(this.active);

    this.control.valueChanges.subscribe((c) => {
      this.update.emit(c);
    });
  }

  public ngOnDestroy(): void {}
}
