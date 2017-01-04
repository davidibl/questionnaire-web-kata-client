import { Component } from '@angular/core';
import { AntwortenService } from '../../services/antwortenService';
import { Router } from '@angular/router';

@Component({
    moduleId: __moduleName,
    selector: 'startseite',
    templateUrl: 'startseite.html',
})
export class StartseiteComponent {

    public antwortensatznummer: number;

    public constructor(private _antwortenService: AntwortenService,
                       private _router: Router) { }

    public onStarteFragebogen(): void {
        this._antwortenService
            .createAntwortensatz()
            .subscribe(neueNummer => {
                this._router.navigate(['fragen']);
            });
    }

}
