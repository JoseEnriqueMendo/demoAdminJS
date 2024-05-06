import express from 'express';
import dotenv from 'dotenv';
import { adminRouter, adminJs } from './conectionAdminJS/index.js';
dotenv.config();
const app = express();


// Middleware
app.use(adminJs.options.rootPath, adminRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on  http://localhost:${process.env.PORT}${adminJs.options.rootPath}`
  );
});
