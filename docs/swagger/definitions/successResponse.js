export default {
	type: 'object',
	properties: {
		statusCode: { type: 'number', default: 200 },
		status: { type: 'boolean', default: true },
		message: { type: 'string' },
	},
};
