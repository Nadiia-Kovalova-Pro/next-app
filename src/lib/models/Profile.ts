import mongoose, { Schema, Document } from 'mongoose'

export interface IProfile extends Document {
  _id: string
  userId: string
  bio?: string
  avatar?: string
  theme?: string
  createdAt: Date
  updatedAt: Date
}

const ProfileSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  bio: { type: String },
  avatar: { type: String },
  theme: { type: String, default: 'light' },
}, {
  timestamps: true,
  collection: 'profiles'
})

export default mongoose.models.Profile || mongoose.model<IProfile>('Profile', ProfileSchema)