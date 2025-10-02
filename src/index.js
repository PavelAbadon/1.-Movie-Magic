import express from 'express';
import handlebars from 'express-handlebars'
import mongoose from 'mongoose';
import routes from './routes.js';

const app = express();

//Setup DataBase
const url = 'mongodb://localhost:27017';
try {
    await mongoose.connect(url, {
    dbName:'movie-magic',
});
    console.log('Супер вързахме базата данни');

} catch (err) {
    console.error('Нещо не може да се върже с базата данни', err.message)
}

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,

    }
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static('src/public'));
app.use(express.urlencoded())

app.use(routes);

app.listen(5000, () => console.log('Express Server is listening on http://localhost:5000...'))