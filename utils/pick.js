import _ from 'lodash';
/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
export const pick = (object, keys) => {
	return keys.reduce((obj, key) => {
		if (object && Object.prototype.hasOwnProperty.call(object, key)) {
			// eslint-disable-next-line no-param-reassign
			obj[key] = object[key];
		}
		return obj;
	}, {});
};

export const pickWithValueOnly = (object, keys) => {
	return keys.reduce((obj, key) => {
		if (object && Object.prototype.hasOwnProperty.call(object, key)) {
			// eslint-disable-next-line no-param-reassign
			if (object[key]) obj[key] = object[key];
		}
		return obj;
	}, {});
};

export const pickFiltersAndOptions = params => {
	const filters = {};
	const options = {};

	if (!params || _.isEmpty(params)) {
		return { filters, options };
	}

	Object.entries(params).forEach(([key, value]) => {
		if (_.startsWith(key, 'filter_') || key === 'search') {
			const param = key.replace('filter_', '');
			if (param === 'createdAt') {
				const dates = JSON.parse(params.filter_createdAt);
				const startDate = new Date(dates.date_from).setHours(0, 0, 0);
				const endDate = dates.date_to ? new Date(dates.date_to).setHours(23, 59, 59) : new Date(startDate).setHours(23, 59, 59);

				filters[param] = {
					$gte: startDate,
					$lte: endDate,
				};
			} else {
				filters[param] = value;
			}
		} else {
			options[key] = value;
		}
	});

	return { filters, options };
};

export default { pick, pickWithValueOnly, pickFiltersAndOptions };
