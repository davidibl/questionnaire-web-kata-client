import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ALL_COMPONENTS } from './components/components';
import { ALL_SERVICES } from './services/services';
import { ALL_DIRECTIVES } from './directives/directives';
import { ALL_PIPES } from './pipes/pipes';
import { routing } from './app.routes';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, ...ALL_COMPONENTS, ...ALL_PIPES, ...ALL_DIRECTIVES],
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule, routing],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        ...ALL_SERVICES,
    ],
}, )
export class QuestionnaireModule {
}
