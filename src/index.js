import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import routes from './routes.js';
import cookieParser from 'cookie-parser';
import authMiddleware from './middlewares/authMiddleware.js';

const app = express();

// Setup DataBase
const url = 'mongodb://localhost:27017';
try {
    await mongoose.connect(url, { dbName: 'movie-magic' });
    console.log('Супер вързахме базата данни');
} catch (err) {
    console.error('Нещо не може да се върже с базата данни', err.message);
}

// Handlebars setup
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Middlewares
app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authMiddleware); // ✅ без скоби

// Routes
app.use(routes);

app.listen(5000, () =>
    console.log('Express Server is listening on http://localhost:5000...')
);
