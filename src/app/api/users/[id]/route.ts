import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import User from '@/lib/models/User'
import Profile from '@/lib/models/Profile'

interface RouteParams {
  params: Promise<{ id: string }>
}

// GET /api/users/[id] - Get user profile
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB()
    const { id } = await params

    // First try to find by MongoDB ObjectId
    let user = await User.findById(id)

    // If not found, try to find by email (for backward compatibility)
    if (!user) {
      user = await User.findOne({ email: id })
    }

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Get the profile
    const profile = await Profile.findOne({ userId: user._id.toString() })

    // Transform to match the expected interface
    const userProfile = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      bio: profile?.bio,
      avatar: profile?.avatar,
    }

    return NextResponse.json(userProfile)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    )
  }
}

// PUT /api/users/[id] - Update user profile
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB()
    const body = await request.json()
    const { id } = await params

    // First try to find by MongoDB ObjectId
    let user = await User.findById(id)

    // If not found, try to find by email (for backward compatibility)
    if (!user) {
      user = await User.findOne({ email: id })
    }

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Update user fields
    const updateData: Record<string, string> = {}
    if (body.name !== undefined) updateData.name = body.name
    if (body.email !== undefined) updateData.email = body.email

    if (Object.keys(updateData).length > 0) {
      await User.findByIdAndUpdate(user._id, updateData)
    }

    // Update profile fields
    const profileUpdateData: Record<string, string | undefined> = {}
    if (body.bio !== undefined) profileUpdateData.bio = body.bio
    if (body.avatar !== undefined) profileUpdateData.avatar = body.avatar

    if (Object.keys(profileUpdateData).length > 0) {
      await Profile.findOneAndUpdate(
        { userId: user._id.toString() },
        profileUpdateData,
        { upsert: true }
      )
    }

    // Fetch updated user and profile
    const updatedUser = await User.findById(user._id)
    const updatedProfile = await Profile.findOne({ userId: user._id.toString() })

    const userProfile = {
      id: updatedUser!._id.toString(),
      name: updatedUser!.name,
      email: updatedUser!.email,
      bio: updatedProfile?.bio,
      avatar: updatedProfile?.avatar,
    }

    return NextResponse.json(userProfile)
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    )
  }
}

// DELETE /api/users/[id] - Delete user profile
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB()
    const { id } = await params

    // First try to find by MongoDB ObjectId
    let user = await User.findById(id)

    // If not found, try to find by email (for backward compatibility)
    if (!user) {
      user = await User.findOne({ email: id })
    }

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Delete profile first
    await Profile.findOneAndDelete({ userId: user._id.toString() })

    // Delete user
    await User.findByIdAndDelete(user._id)

    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    )
  }
}