import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import { Adapter, Resource, Database } from '@adminjs/sql';
import dotenv from 'dotenv';
dotenv.config();

AdminJS.registerAdapter({
  Database,
  Resource,
});

const db = await new Adapter('postgresql', {
  host: process.env.HOST,
  port: process.env.PORT_DB,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  ssl: false,
}).init();

const adminJs = new AdminJS({
  resources: [
    {
      resource: db.table('departamentos'),
      options: {},
    },
    {
      resource: db.table('personas'),
      options: {},
    },
  ],
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminRouter, adminJs };
