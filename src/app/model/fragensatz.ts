import { IFrage } from './frage';

export interface IFragensatz {
    number: number;
    titel: string;
    fragen: IFrage[];
}
