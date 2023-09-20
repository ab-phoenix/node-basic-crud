import express from 'express';
import swaggerUi from 'swagger-ui-express';

import apiSwaggerDoc from '../../docs/swagger/index.js';

import employee from './employee.route.js';

const router = express.Router();

const swaggerUiOpts = { swaggerOptions: { docExpansion: 'none' } };
const swaggerHtml = swaggerUi.generateHTML(apiSwaggerDoc, swaggerUiOpts);

router.use('/doc', swaggerUi.serveFiles(apiSwaggerDoc, swaggerUiOpts));
router.get('/doc', (req, res) => res.send(swaggerHtml));

router.use('/employee', employee);

export default router;
