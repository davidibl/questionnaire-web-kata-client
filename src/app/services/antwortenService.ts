import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Http } from '@angular/http';
import { ConfigService } from './configService';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Antwort } from '../model/antwort';

@Injectable()
export class AntwortenService {

    private antwortensatzNumberCache: ReplaySubject<number> = new ReplaySubject<number>();
    private antwortensatzNummer: number;

    public constructor(private _http: Http, private _configService: ConfigService) { }

    public getCurrentAntwortensatzNumber(): ReplaySubject<number> {
        return this.antwortensatzNumberCache;
    }

    public createAntwortensatz(): Observable<number> {
        return this._http.post(this.getPostAntwortsatzEndpoint(), null)
            .map(result => result.json())
            .do(result => this.antwortensatzNummer = result)
            .do(result => this.antwortensatzNumberCache.next(result));
    }

    public createAntwort(frageId: number, antwort: string): void {
        this._http.post(this.getPostAntwortEndpoint(), new Antwort(frageId, antwort))
            .subscribe(result => result.json());
    }

    private getPostAntwortsatzEndpoint(): string {
        return this._configService.getConfigValue('CONFIG.WEBSERVICE.ANTWORTENSATZ.ENDPOINT');
    }

    private getPostAntwortEndpoint(): string {
        return this._configService.getConfigValue('CONFIG.WEBSERVICE.ANTWORT.POST.ENDPOINT')
            .replace(':antwortsatzid', this.antwortensatzNummer + '');
    }

}
