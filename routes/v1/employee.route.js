import express from 'express';

import validate from '../../middlewares/validate.js';
import * as EMPLOYEE_VALIDATION from '../../validations/employee.validation.js';

import * as EMPLOYEE_CONTROLLER from '../../controllers/v1/employee.controller.js';

const router = express.Router();

router.get('/', validate(EMPLOYEE_VALIDATION.getEmployees), EMPLOYEE_CONTROLLER.getEmployees);

router.get('/:id', validate(EMPLOYEE_VALIDATION.getEmployee), EMPLOYEE_CONTROLLER.getEmployee);

router.post('/', validate(EMPLOYEE_VALIDATION.createEmployee), EMPLOYEE_CONTROLLER.createEmployee);

router.patch('/:id', validate(EMPLOYEE_VALIDATION.updateEmployee), EMPLOYEE_CONTROLLER.updateEmployee);

router.delete('/:id', validate(EMPLOYEE_VALIDATION.deleteEmployee), EMPLOYEE_CONTROLLER.deleteEmployee);

export default router;
