'use client';

import React from 'react';
import { useProfile } from '../../hooks/useProfile';
import ProfileForm from '../../components/ProfileForm';
import styles from './Profile.module.css';

export default function ProfilePage() {
  const userId = '68c9926b1eefce26b6400968'; // MongoDB ObjectId from seeded data
  const { data: profile, isLoading, error } = useProfile(userId);

  if (isLoading) return <p>Loading profile...</p>;
  if (error) return <p>Error loading profile.</p>;
  if (!profile) return <p>No profile found.</p>;

  return (
    <div className={styles.container}>
      <h1>User Profile</h1>
      <div className={styles.profileInfo}>
        <h2>{profile.name}</h2>
        <p>Email: {profile.email}</p>
        {profile.bio && <p>Bio: {profile.bio}</p>}
        {profile.avatar && <img src={profile.avatar} alt="Avatar" className={styles.avatar} />}
      </div>
      <h2>Edit Profile</h2>
      <ProfileForm userId={userId} initialProfile={profile} />
    </div>
  );
}