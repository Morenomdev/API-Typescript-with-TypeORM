import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import studentsRoutes from './routes/studentsRoutes';
import teachersRoutes from './routes/teachersRoutes';
import coursesRoutes from './routes/coursesRoutes';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);
app.use('/courses', coursesRoutes);

app.get('/', (req: Request, resp: Response) => {
  resp.send('Hi world');
});

export default app;