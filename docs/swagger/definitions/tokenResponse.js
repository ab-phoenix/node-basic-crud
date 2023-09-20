export default {
	type: 'object',
	properties: {
		access: {
			type: 'object',
			properties: {
				token: { type: 'string' },
				expires: { type: 'number' },
			},
		},
		refresh: {
			type: 'object',
			properties: {
				token: { type: 'string' },
				expires: { type: 'number' },
			},
		},
	},
};
