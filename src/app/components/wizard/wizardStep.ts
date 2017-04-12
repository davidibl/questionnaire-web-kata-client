import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'wizard-step',
    templateUrl: 'wizardStep.html',
})
export class WizardStepComponent {

    private _isActive: boolean = false;

    @Input('active')
    public set active(active: boolean) {
        this._isActive = active;
    }

    public get active() {
        return this._isActive;
    }

}
