import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { WizardStepComponent } from './wizardStep';

@Component({
    moduleId: __moduleName,
    selector: 'wizard',
    templateUrl: 'wizard.html',
})
export class WizardComponent implements AfterContentInit {

     @ContentChildren(WizardStepComponent)
     private wizardSteps: QueryList<WizardStepComponent>;
     private _steps: Array<WizardStepComponent> = new Array();

     public ngAfterContentInit() {
        this.wizardSteps.forEach(step => this._steps.push(step));
        this._steps[0].active = true;
     }
}
