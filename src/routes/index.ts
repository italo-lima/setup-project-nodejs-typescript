import { Router } from 'express';

import testRoutes from './test.routes';

const routes = Router();

routes.use('/', testRoutes);

export default routes;
