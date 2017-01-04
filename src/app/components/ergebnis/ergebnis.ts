import { Component } from '@angular/core';
import { IErgebnis } from '../../model/ergebnis';
import { ErgebnisService } from '../../services/ergebnisService';
import { AntwortenService } from '../../services/antwortenService';

@Component({
    moduleId: __moduleName,
    selector: 'ergebnis',
    templateUrl: 'ergebnis.html',
})
export class ErgebnisComponent {

    public ergebnis: IErgebnis;
    public teilnehmerNummer: number;

    public constructor(private _ergebnisService: ErgebnisService,
                       private _antwortenService: AntwortenService) {
                           
        this._antwortenService.getCurrentAntwortensatzNumber().subscribe(antwortensatzId => {
            this.teilnehmerNummer = antwortensatzId;
            this._ergebnisService.getErgebnis(antwortensatzId).subscribe(ergebnis => this.ergebnis = ergebnis);
        });
    }

}
