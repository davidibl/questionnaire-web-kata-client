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
    @Input()
    public set selektierteAntwort(selektierteAntwort: string) {
        this._model = this.antwort.antwort === selektierteAntwort;
    }

    public _model: boolean;

    @Output()
    public antwortSelektiert: EventEmitter<string> = new EventEmitter<string>();

    public change(newValue: boolean) {
        if (newValue) {
            this.antwortSelektiert.emit(this.antwort.antwort);
            return;
        }
        this.antwortSelektiert.emit(null);
    }

}
