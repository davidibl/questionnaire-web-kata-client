import { Component, Input } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'titel',
    templateUrl: 'titel.html',
})
export class TitelComponent {

    @Input()
    public teilnehmerNummer: number;

    @Input()
    public titel: string;

}
