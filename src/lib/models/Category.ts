import mongoose, { Schema, Document } from 'mongoose'

export interface ICategory extends Document {
  _id: string
  name: string
  description?: string
  color?: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  color: { type: String },
  userId: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'categories'
})

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema)