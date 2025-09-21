import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('raboti be');
});

app.listen(5000, () => console.log('Express Server is listening on http://localhost:5000...'))