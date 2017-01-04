import { Component, Input } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'header',
    templateUrl: 'header.html',
})
export class HeaderComponent {

    @Input()
    public brandLogoSource: string;

    @Input()
    public brandName: string;

}
