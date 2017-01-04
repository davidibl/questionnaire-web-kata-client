import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AntwortenService } from '../../services/antwortenService';
import { IFragensatz } from '../../model/fragensatz';
import { FragenService } from '../../services/fragenService';

@Component({
    moduleId: __moduleName,
    selector: 'fragen',
    templateUrl: 'fragen.html',
})
export class FragenComponent implements OnInit {

    public teilnehmerNummer: number;
    public fragensaetze: IFragensatz[];

    public constructor(private _antwortenService: AntwortenService,
                       private _fragenService: FragenService,
                       private _router: Router) { }

    public ngOnInit(): void {
        this._antwortenService
            .getCurrentAntwortensatzNumber()
            .subscribe(nummer => this.teilnehmerNummer = nummer);

        this._fragenService.getFragen().subscribe(fragensaetze => {
            this.fragensaetze = fragensaetze;
        });
    }

    public zumErgebnis() {
        this._router.navigate(['ergebnis']);
    }

    public neustart() {
        this._antwortenService
            .createAntwortensatz()
            .subscribe(neueNummer => {
                this.teilnehmerNummer = neueNummer;
            });
    }

}
