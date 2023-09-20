import APIError from '../../utils/APIError.js';
import { deselectFields, pagination, removeFields } from '../../utils/helper.js';
import { aggregatePagination } from '../../utils/customPagination.js';

import EMPLOYEE_MODEL from '../../models/v1/employee.model.js';

export const getEmployees = async reqQuery => {
	try {
		const query = { isDeleted: false };
		const options = pagination(reqQuery);

		if (reqQuery.search) {
			const searchRegExp = new RegExp(reqQuery.search);
			query.$or = [{ firstName: searchRegExp }, { lastName: searchRegExp }, { email: searchRegExp }];
		}

		const response = await aggregatePagination(
			EMPLOYEE_MODEL,
			[
				{ $match: query },
				{
					$project: deselectFields({ exclude: ['createdAt'] }),
				},
			],
			options
		);

		return response;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const createEmployee = async reqBody => {
	try {
		const record = (await EMPLOYEE_MODEL.create(reqBody)).toJSON();

		return removeFields(record);
		//
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getEmployee = async reqParams => {
	try {
		const { id: recordId } = reqParams;

		const result = await EMPLOYEE_MODEL.findOne({ _id: recordId, isDeleted: false }, deselectFields());
		if (!result) throw new APIError({ status: 404, message: 'Employee not found' });

		return result;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const updateEmployee = async (reqParams, reqBody) => {
	try {
		const { id: recordId } = reqParams;

		const result = await EMPLOYEE_MODEL.findOneAndUpdate({ _id: recordId, isDeleted: false }, { $set: reqBody });
		if (!result) throw new APIError({ status: 404, message: 'Employee not found' });

		//
	} catch (error) {
		return Promise.reject(error);
	}
};

export const deleteEmployee = async reqParams => {
	try {
		const { id: recordId } = reqParams;

		const result = await EMPLOYEE_MODEL.findOneAndUpdate(
			{ _id: recordId, isDeleted: false },
			{
				$set: { isDeleted: true, deletedAt: new Date() },
			}
		);
		if (!result) throw new APIError({ status: 404, message: 'Employee not found' });

		//
	} catch (error) {
		return Promise.reject(error);
	}
};
