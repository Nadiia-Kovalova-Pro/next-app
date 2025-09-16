'use client';

import React from 'react';
import { useProfileForm } from '../hooks/useProfileForm';
import { useUpdateProfile } from '../hooks/useProfile';
import { UserProfile } from '../types/profile';
import styles from '../styles/ProfileForm.module.css';

interface ProfileFormProps {
  userId: string;
  initialProfile: UserProfile;
}

export default function ProfileForm({ userId, initialProfile }: ProfileFormProps) {
  const { values, handleChange, resetForm } = useProfileForm(initialProfile);
  const updateProfileMutation = useUpdateProfile(userId);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateProfileMutation.mutate(values);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          value={values.bio || ''}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="avatar">Avatar URL:</label>
        <input
          type="url"
          id="avatar"
          name="avatar"
          value={values.avatar || ''}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={updateProfileMutation.isPending} className={styles.submitButton}>
        {updateProfileMutation.isPending ? 'Saving...' : 'Save'}
      </button>
      <button type="button" onClick={resetForm} className={styles.resetButton}>Reset</button>
      {updateProfileMutation.isError && <p className={styles.error}>Error updating profile.</p>}
    </form>
  );
}