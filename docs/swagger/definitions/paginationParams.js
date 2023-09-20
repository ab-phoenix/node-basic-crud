export default (enums = ['_id', 'createdAt']) => {
	return [
		{
			name: 'orderBy',
			in: 'query',
			schema: {
				type: 'string',
				enum: enums,
			},
			default: 'createdAt',
		},
		{
			name: 'isAscending',
			in: 'query',
			schema: { type: 'boolean' },
			default: false,
		},
		{
			name: 'page',
			in: 'query',
			schema: { type: 'number' },
			default: 1,
		},
		{
			name: 'perPage',
			in: 'query',
			schema: { type: 'number' },
			default: 10,
		},
	];
};
