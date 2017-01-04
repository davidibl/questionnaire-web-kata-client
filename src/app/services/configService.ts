import { Injectable } from '@angular/core';
import * as CONFIG from '../config';

@Injectable()
export class ConfigService {

    public getConfigValue(configPath: string): string {
        return <string><any> configPath
                .split('.')
                .reduce((previousValue, param) => previousValue && previousValue[param], CONFIG);
    }

}
