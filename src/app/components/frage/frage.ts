import { Component, Input } from '@angular/core';
import { IFrage } from '../../model/frage';
import { AntwortenService } from '../../services/antwortenService';

@Component({
    moduleId: __moduleName,
    selector: 'frage',
    templateUrl: 'frage.html',
})
export class FrageComponent {

    private _korrekteAntwort: string;

    @Input()
    public frage: IFrage;

    public constructor(private _antwortService: AntwortenService) { }

    public antwortSelektiert(newAntwort: string) {
        this._korrekteAntwort = newAntwort;
        this._antwortService.createAntwort(this.frage.id, newAntwort);
    }

}
