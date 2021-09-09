import express, { json } from 'express';
import cors from 'cors';
import router from './router.js';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(json());

app.use('/', router);

// app.get('/', (req, res) => res.send(`Routes at /api/`));

const port = 5000;
app.listen(
	port,
	() => console.log(`Listening to port ${port}`)
);