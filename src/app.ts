import express, { Application } from 'express';
import router from './routes/routes';

const app: Application = express();

app.use(express.json());
app.use('/api', router);

const port = 3001;

app.listen(port, () => {
  console.log('server is running on port ' + port);
});

