export class Antwort {
    public frageId: number;
    public antwort: string;

    public constructor(frageId: number, antwort: string) {
        this.frageId = frageId;
        this.antwort = antwort;
    }
}
