import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/next-app'

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  try {
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

if (process.env.NODE_ENV !== 'production') {
  mongoose.set('debug', true)
}