import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Http } from '@angular/http';
import { ConfigService } from './configService';
import { IFragensatz } from '../model/fragensatz';

@Injectable()
export class FragenService {

    private fragenCache: ReplaySubject<IFragensatz[]> = new ReplaySubject<IFragensatz[]>(1);

    public constructor(private _http: Http,
                       private _configService: ConfigService) {

        this._http.get(_configService.getConfigValue('CONFIG.WEBSERVICE.FRAGEN.ENDPOINT'))
            .map(result => result.json())
            .subscribe(fragen => this.fragenCache.next(fragen));
    }

    public getFragen(): ReplaySubject<IFragensatz[]> {
        return this.fragenCache;
    }

}
