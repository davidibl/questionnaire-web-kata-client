import { IAntwortMoeglichkeit } from './antwortMoeglichkeit';

export interface IFrage {
    id: number;
    frage: string;
    moeglicheAntworten: IAntwortMoeglichkeit[];
}
