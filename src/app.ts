import express, { Application } from 'express';
import router from './routes/champions';
import connection from './database/connection';

const app: Application = express();

app.use(express.json());
app.use('/api/', router);

connection();

const port = 3001;

app.listen(port, () => {
  console.log('server is running on port ' + port);
});

