export const CONFIG = {
    WEBSERVICE: {
        ANTWORT: {
            POST: {
                ENDPOINT: 'http://localhost:9002/api/antwortensatz/:antwortsatzid/antwort/',
            },
        },
        ANTWORTENSATZ: {
            ENDPOINT: 'http://localhost:9002/api/antwortensatz/',
        },
        ERGEBNIS: {
            ENDPOINT: 'http://localhost:9002/api/antwortensatz/:antwortsatzid/ergebnis/',
        },
        FRAGEN: {
            ENDPOINT: 'http://localhost:9002/api/fragensatz/',
        },
    },
};
