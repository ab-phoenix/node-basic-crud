import Joi from 'joi';

import { mongoId, pagination, password } from './custom.validation.js';

const objectId = Joi.string().custom(mongoId);

export const getEmployees = {
	query: Joi.object().keys({
		...pagination(['_id', 'firstName', 'lastName', 'email', 'createdAt']),
	}),
};

export const getEmployee = {
	params: Joi.object({ id: objectId.required() }),
};

export const createEmployee = {
	body: Joi.object({
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().required().custom(password),
		phone: Joi.string().required(),
	}),
};

export const updateEmployee = {
	params: Joi.object({ id: objectId.required() }),
	body: Joi.object({
		firstName: Joi.string(),
		lastName: Joi.string(),
		email: Joi.string().email(),
		phone: Joi.string(),
	})
		.required()
		.not({}),
};

export const deleteEmployee = {
	params: Joi.object({ id: objectId.required() }),
};
