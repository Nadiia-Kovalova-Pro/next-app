import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  _id: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'users'
})

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)