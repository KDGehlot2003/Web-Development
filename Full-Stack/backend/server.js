import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
//     });

// get a list of five jokes

app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            question: 'What do you call a very small valentine?',
            answer: 'A valen-tiny!'
        },
        {
            id: 2,
            question: 'What did the dog say when he rubbed his tail on the sandpaper?',
            answer: 'Ruff, Ruff!'
        },
        {
            id: 3,
            question: 'Why don’t sharks like to eat clowns?',
            answer: 'Because they taste funny!'
        },
        {
            id: 4,
            question: 'What did the light bulb say to the switch?',
            answer: 'A nervous wreck!'
        },  
        {
            id: 5,
            question: 'What do you get when you cross a snowman with a vampire?',
            answer: 'Frostbite!'
        }
    ];
    res.send(jokes);
    });

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    });