import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routers/userRoute.js';
import containerRoute from './routers/containerRoute.js';
import shipmentRoute from './routers/shipmentRoute.js';
import shipmentDetailRoute from './routers/shipmentDetailRoute.js';
import repairmentRoute from './routers/repairmentRoute.js';
import logActivityRoute from './routers/log_activityRoute.js';
import createUsers from './seeders/createUsers.js';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  console.log('server connected');
});

// createUsers();  // uncomment untuk seeders user
app.use(userRoute);
app.use(containerRoute);
app.use(shipmentRoute);
app.use(shipmentDetailRoute);
app.use(repairmentRoute);
app.use(logActivityRoute);


app.listen(port, () => {
  console.log(`server connected on http://localhost:${port}`);
});
