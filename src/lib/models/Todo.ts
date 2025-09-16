import mongoose, { Schema, Document } from 'mongoose'

export interface ITodo extends Document {
  _id: string
  title: string
  description?: string
  completed: boolean
  userId: string
  categoryId?: string
  createdAt: Date
  updatedAt: Date
}

const TodoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  userId: { type: String, required: true },
  categoryId: { type: String },
}, {
  timestamps: true,
  collection: 'todos'
})

export default mongoose.models.Todo || mongoose.model<ITodo>('Todo', TodoSchema)