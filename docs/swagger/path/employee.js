import errorResponse from '../definitions/errorResponse.js';
import successResponse from '../definitions/successResponse.js';
import paginationParams from '../definitions/paginationParams.js';

export const getEmployees = {
	tags: ['Employee'],
	summary: 'Get employees',
	parameters: [
		...paginationParams(['_id', 'firstName', 'lastName', 'email', 'createdAt']),
		{
			name: 'search',
			in: 'query',
			schema: {
				type: 'string',
			},
		},
	],
	produces: ['application/json'],
	security: [],
	responses: {
		200: {
			content: {
				'application/json': {
					schema: {
						type: 'object',
						properties: {
							statusCode: { type: 'number' },
							status: { type: 'boolean' },
							page: { type: 'number' },
							total: { type: 'number' },
							data: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										_id: { type: 'string' },
										firstName: { type: 'string' },
										lastName: { type: 'string' },
										email: { type: 'string' },
										phone: { type: 'string' },
										createdAt: { type: 'string', format: 'date-time' },
									},
								},
							},
						},
					},
				},
			},
		},
		Error: { content: { 'application/json': { schema: errorResponse } } },
	},
};

export const getEmployee = {
	tags: ['Employee'],
	summary: 'Get employee',
	security: [],
	parameters: [
		{
			name: 'id',
			in: 'path',
			description: 'Employee id',
			required: true,
			schema: { type: 'string' },
		},
	],
	produces: ['application/json'],
	responses: {
		200: {
			content: {
				'application/json': {
					schema: {
						type: 'object',
						properties: {
							statusCode: { type: 'number' },
							status: { type: 'boolean' },
							data: {
								type: 'object',
								properties: {
									_id: { type: 'string' },
									firstName: { type: 'string' },
									lastName: { type: 'string' },
									email: { type: 'string' },
									phone: { type: 'string' },
								},
							},
						},
					},
				},
			},
		},
		Error: { content: { 'application/json': { schema: errorResponse } } },
	},
};

export const createEmployee = {
	tags: ['Employee'],
	summary: 'Create employee',
	security: [],
	produces: ['application/json'],
	requestBody: {
		content: {
			'application/json': {
				schema: {
					type: 'object',
					required: ['firstName', 'lastName', 'email', 'phone', 'password'],
					properties: {
						firstName: { type: 'string' },
						lastName: { type: 'string' },
						email: { type: 'string' },
						phone: { type: 'string' },
						password: { type: 'string' },
					},
				},
			},
		},
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: {
						type: 'object',
						properties: {
							statusCode: { type: 'number' },
							status: { type: 'boolean' },
							message: { type: 'string' },
							data: {
								type: 'object',
								properties: {
									_id: { type: 'string' },
									firstName: { type: 'string' },
									lastName: { type: 'string' },
									email: { type: 'string' },
									phone: { type: 'string' },
								},
							},
						},
					},
				},
			},
		},
		Error: { content: { 'application/json': { schema: errorResponse } } },
	},
};

export const updateEmployee = {
	tags: ['Employee'],
	summary: 'Update employee',
	security: [],
	parameters: [
		{
			name: 'id',
			in: 'path',
			description: 'Employee id',
			required: true,
			schema: { type: 'string' },
		},
	],
	produces: ['application/json'],
	requestBody: {
		content: {
			'application/json': {
				schema: {
					type: 'object',
					properties: {
						firstName: { type: 'string' },
						lastName: { type: 'string' },
						email: { type: 'string' },
						phone: { type: 'string' },
					},
				},
			},
		},
	},
	responses: {
		200: { content: { 'application/json': { schema: successResponse } } },
		Error: { content: { 'application/json': { schema: errorResponse } } },
	},
};

export const deleteEmployee = {
	tags: ['Employee'],
	summary: 'Delete employee',
	security: [],
	parameters: [
		{
			name: 'id',
			in: 'path',
			description: 'Employee id',
			required: true,
			schema: { type: 'string' },
		},
	],
	produces: ['application/json'],
	responses: {
		200: { content: { 'application/json': { schema: successResponse } } },
		Error: { content: { 'application/json': { schema: errorResponse } } },
	},
};
