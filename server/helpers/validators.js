import { body, header, param } from 'express-validator';

function validate(method) {
	switch (method) {
		case '': {
			return [
				// body('storeId', 'storeId is required').exists().notEmpty(),
			];
		}

		case '': {
			return []
		}
	}
}

export default validate;