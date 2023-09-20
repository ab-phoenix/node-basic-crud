export default {
	type: 'object',
	properties: {
		statusCode: { type: 'number' },
		status: { type: 'boolean', default: false },
		message: { type: 'string' },
	},
};
