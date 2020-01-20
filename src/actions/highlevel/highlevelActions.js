import Constants from '../../constants';

export default {
	setDates: (startDate, endDate) => ({
		type: Constants.HIGHLEVEL_SET_DATES,
		dates: {
			startDate,
            endDate
		}
	}),
	clearDates: () => ({type: Constants.HIGHLEVEL_CLEAR_DATES}),
	getCosts: (startDate, endDate) => ({
		type: Constants.HIGHLEVEL_COSTS_REQUEST,
		begin: startDate,
		end: endDate
	}),
	getEvents: (startDate, endDate) => ({
		type: Constants.HIGHLEVEL_EVENTS_REQUEST,
		begin: startDate,
		end: endDate
	}),
	getUnusedEC2: (date) => ({
		type: Constants.HIGHLEVEL_UNUSED_EC2_REQUEST,
		date,
	}),
	getTagsKeys: (startDate, endDate) => ({
		type: Constants.HIGHLEVEL_TAGS_KEYS_REQUEST,
		begin: startDate,
		end: endDate
	}),
	getTagsValues: (startDate, endDate, key, detailed) => ({
		type: Constants.HIGHLEVEL_TAGS_COST_REQUEST,
		begin: startDate,
		end: endDate,
		key,
		detailed
	}),
	selectTagsKey: (key) => ({
		type: Constants.HIGHLEVEL_TAGS_KEYS_SELECT,
		key
	}),
};
