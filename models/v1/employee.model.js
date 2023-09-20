/* eslint-disable func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import { genBcryptHash } from '../../utils/helper.js';

const { Schema, model } = mongoose;

const EmployeeSchema = new Schema(
	{
		firstName: { type: String, default: null },
		lastName: { type: String, default: null },

		email: { type: String, default: null },
		password: { type: String, default: null },

		phone: { type: String, default: null },

		isDeleted: { type: Boolean, default: false },
		deletedAt: { type: Date, default: null },
	},
	{
		timestamps: true,
	}
);

EmployeeSchema.pre(/^save|findOneAndUpdate$/, true, function (next, done) {
	const self = this;
	if (self.op && self.op === 'findOneAndUpdate') {
		const password = self.get('password');
		if (password) {
			self._update.$set.password = genBcryptHash(password);
		}
	} else if (self.isModified('password')) {
		self.password = genBcryptHash(self.password);
	}
	done();
	next();
});

EmployeeSchema.methods.isValidPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

export default model('employee', EmployeeSchema, 'employees');
