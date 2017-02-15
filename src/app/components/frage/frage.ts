import { Component, Input, forwardRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IFrage } from '../../model/frage';
import { AntwortenService } from '../../services/antwortenService';

const CONTROL_VALUE_ACCESSOR = {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FrageComponent),
};

@Component({
    moduleId: __moduleName,
    providers: [CONTROL_VALUE_ACCESSOR],
    selector: 'frage',
    templateUrl: 'frage.html',
})
export class FrageComponent extends ControlContainer implements ControlValueAccessor {

    private korrekteAntwort: string;

    @Input()
    public frage: IFrage;

    public constructor(private _antwortService: AntwortenService) {
        super();
    }

    public antwortSelektiert(newAntwort: string) {
        this.korrekteAntwort = newAntwort;
        this._antwortService.createAntwort(this.frage.id, newAntwort);
        this._onChange(newAntwort);
    }

    public writeValue(value: any): void {
        this.korrekteAntwort = value;
    }

    public registerOnChange(fn: (_: any) => void): void {
        this._onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }
    public registerOnBlur(fn: () => void): void {
        this._onBlur = fn;
    }

    private _onChange = (_: any) => void 0;
    private _onTouched = () => void 0;
    private _onBlur = () => void 0;

}
