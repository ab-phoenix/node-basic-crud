import mongoose from 'mongoose';
import Joi from 'joi';

export const password = (value, helpers) => {
	if (value.length < 8) {
		return helpers.message('password must be at least 8 characters');
	}
	if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
		return helpers.message('password must contain at least 1 letter and 1 number');
	}
	return value;
};

export const mongoId = (value, helpers) => {
	if (!mongoose.Types.ObjectId.isValid(value)) {
		return helpers.message('Invalid id');
	}
	return value;
};

export const pagination = (orderBy = ['_id', 'createdAt']) => {
	return {
		orderBy: Joi.string().valid(...orderBy),
		isAscending: Joi.boolean(),
		page: Joi.number().min(1),
		perPage: Joi.number().min(1),
	};
};
