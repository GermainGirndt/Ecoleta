import express from 'express';

const app = express();

app.use(express.json());

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel',
    'Marcus'
]

app.get('/users', (request, response) => {
    const search  = String(request.query.search);
    console.log(search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;


    // response.send('Hello World');
    return response.json(filteredUsers)
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];
    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);
    
    const user = {
        name: 'Diego',
        email: 'diego@rocketseat.com.br',

    };

    return response.json(user)
});

app.listen(3333);