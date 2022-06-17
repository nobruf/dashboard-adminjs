import 'dotenv/config';
import './database';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize'
import express from 'express';

import locale from './locales/locale';
import UsersResource from './resources/UserResource';

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJs = new AdminJS({
  databases: [],
  rootPath: '/admin',
  resources: [UsersResource],
  ...locale
});

const router = AdminJSExpress.buildRouter(adminJs)

app.use(adminJs.options.rootPath, router)
app.listen(5000, () => console.log('http://localhost:5000/admin'))