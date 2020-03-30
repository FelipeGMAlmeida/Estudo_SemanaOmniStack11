const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStck 11.0',
        instrutor: 'Diego Fernandes',
        aluno: 'Felipe Gonçalves'
    });
});

app.listen(3333);
