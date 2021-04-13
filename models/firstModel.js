import 'babel-polyfill';
import mongoose from 'mongoose';

const Schema = mongoose.Schema

const firstModelSchema = new Schema(
  {
    // fields
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('firstModel', firstModelSchema)
