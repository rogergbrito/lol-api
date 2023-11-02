import express, { Application, Request, Response } from 'express';
import router from './routes/champions';
import connection from './database/connection';
import cors from 'cors';

const app: Application = express();

const allowedUrls = ['http://localhost:3000', 'http://localhost:5500'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedUrls.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    };
  },
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));

app.use(express.json());
app.use('/api/', router);

connection();

const port = 3001;

app.listen(port, () => {
  console.log('server is running on port ' + port);
});

