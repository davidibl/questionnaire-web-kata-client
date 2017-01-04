import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from './configService';
import { Observable } from 'rxjs/Rx';
import { IErgebnis } from '../model/ergebnis';

@Injectable()
export class ErgebnisService {

    public constructor(private _http: Http, private _configService: ConfigService) { }

    public getErgebnis(antwortsatzId: number): Observable<IErgebnis> {
        return this._http.get(this.getErgebnisEnpoint(antwortsatzId)).map(result => result.json());
    }

    private getErgebnisEnpoint(antwortsatzId: number) {
        return this._configService.getConfigValue('CONFIG.WEBSERVICE.ERGEBNIS.ENDPOINT')
            .replace(':antwortsatzid', antwortsatzId + '');
    }

}
