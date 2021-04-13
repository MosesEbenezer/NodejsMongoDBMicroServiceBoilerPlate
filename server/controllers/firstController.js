import 'babel-polyfill';
import BaseController from './BaseController';
import { validationResult } from 'express-validator';
// import {sequelize, db} from '../../models';

class firstController extends BaseController {
	constructor(req, res) {
		super(req, res);
		this.req = req;
		this.res = res;
	}

	static _create = async (req, res) => {
		try {
      // validate request body
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return firstController._responseError(res, 'ECS004', 'Validation failed', errors.array(), 422);
			}



		} catch (error) {
			return firstController._responseError(res, 'ECS005', 'An Error Occured', error, 500);
		}
	};

	static _get = async (req, res) => {
		try {
			

			return firstController._responseSuccess(res, '00', 'Successfully Fetched', null, 200);
		} catch (error) {
			return firstController._responseError(res, 'ECS005', 'An Error Occured', error, 500);
		}
	};

	static _update = async (req, res) => {
		try {
			

			return firstController._responseSuccess(res, '00', 'successfully Updated', null, 200);
		} catch (error) {
			return firstController._responseError(res, 'ECS005', 'An Error Occured', error, 500);
		}
	};

	static _delete = async (req, res) => {
		try {
		

			firstController._responseSuccess(res, '00', 'Deleted Successfully', null, 200);
		} catch (error) {
			return firstController._responseError(res, 'ECS005', 'An Error Occured', error, 500);
		}
	};

  static _disable = async (req, res) => { }

}

export default firstController;