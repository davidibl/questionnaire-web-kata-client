import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IAntwortMoeglichkeit } from '../../model/antwortMoeglichkeit';

@Component({
    moduleId: __moduleName,
    selector: 'antwort',
    templateUrl: 'antwort.html',
})
export class AntwortComponent {

    @Input()
    public antwort: IAntwortMoeglichkeit;

    public _model: boolean;

    @Output()
    public antwortSelektiert: EventEmitter<string> = new EventEmitter<string>();

    public change(newValue: boolean) {
        if (newValue) {
            this.antwortSelektiert.emit(this.antwort.antwort);
        }
    }

}
