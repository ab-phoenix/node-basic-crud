import * as EMPLOYEE_SERVICE from '../../services/v1/employee.service.js';

export const getEmployees = async (req, res, next) => {
	try {
		const result = await EMPLOYEE_SERVICE.getEmployees(req.query);
		return res.sendJson({ ...result });
	} catch (error) {
		return next(error);
	}
};

export const createEmployee = async (req, res, next) => {
	try {
		const data = await EMPLOYEE_SERVICE.createEmployee(req.body);
		return res.sendJson({ message: 'Employee created successfully', data });
	} catch (error) {
		return next(error);
	}
};

export const getEmployee = async (req, res, next) => {
	try {
		const result = await EMPLOYEE_SERVICE.getEmployee(req.params);
		return res.sendJson({ data: result });
	} catch (error) {
		return next(error);
	}
};

export const updateEmployee = async (req, res, next) => {
	try {
		await EMPLOYEE_SERVICE.updateEmployee(req.params, req.body);
		return res.sendJson({ message: 'Employee updated successfully' });
	} catch (error) {
		return next(error);
	}
};

export const deleteEmployee = async (req, res, next) => {
	try {
		await EMPLOYEE_SERVICE.deleteEmployee(req.params);
		return res.sendJson({ message: 'Employee deleted successfully' });
	} catch (error) {
		return next(error);
	}
};

export const getTokenDetails = async (req, res, next) => {
	try {
		const result = await EMPLOYEE_SERVICE.getTokenDetails(req.query);
		return res.sendJson({ data: result });
	} catch (error) {
		return next(error);
	}
};

export const verifyEmail = async (req, res, next) => {
	try {
		await EMPLOYEE_SERVICE.verifyEmail(req.body);
		return res.sendJson({ message: 'Email verified successfully' });
	} catch (error) {
		return next(error);
	}
};
