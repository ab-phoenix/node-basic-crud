// import { hostAddress } from '../config/index.js';

import info from './info.js';
import tags from './tags.js';
import securityDefinitions from './securityDefinitions.js';

import successResponse from './definitions/successResponse.js';
import errorResponse from './definitions/errorResponse.js';

import * as EMPLOYEE from './path/employee.js';

const path = {
	'/employee': { get: EMPLOYEE.getEmployees, post: EMPLOYEE.createEmployee },
	'/employee/{id}': { get: EMPLOYEE.getEmployee, patch: EMPLOYEE.updateEmployee, delete: EMPLOYEE.deleteEmployee },
	'/employee/get-token-details': { get: EMPLOYEE.getTokenDetails },
	'/employee/verify-email': { post: EMPLOYEE.verifyEmail },
};

export default {
	openapi: '3.0.0',
	info,
	servers: [
		{
			url: `http://localhost:5000/{basePath}`,
			description: 'Local server',
			variables: {
				basePath: { default: 'api/v1', enum: ['api/v1'] },
			},
		},
	],
	tags,
	components: {
		securitySchemes: securityDefinitions,
		schemas: {
			successResponse,
			errorResponse,
		},
	},
	security: [
		{
			bearerAuth: [],
		},
	],
	schemas: ['http', 'https'],
	paths: { ...path },
};
