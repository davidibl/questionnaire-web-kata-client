import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { QuestionnaireModule } from './questionnaireModule';
import {enableProdMode} from '@angular/core';

enableProdMode();
platformBrowserDynamic().bootstrapModule( QuestionnaireModule );
