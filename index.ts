import express from 'express';
import { router as emailSurveyController } from './src/email-survey/emailSurveyController';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const router = express.Router();
// app.use(cors({
//   // origin: false,
// //   // credentials: true
// }));
app.use(cors());

app.use(express.json());
app.use('/email', router);
router.use('/', emailSurveyController);

app.listen(8000, () =>{
  console.log('App is running...');
});