import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import postsRoute from './routes/posts.route.js';
import authRoute from './routes/auth.route.js';
import usersRoute from './routes/users.route.js';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :response-time ms'));
app.use('/api/posts', postsRoute);

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});