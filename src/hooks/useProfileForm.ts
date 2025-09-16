import { useState } from 'react';
import { UserProfile } from '../types/profile';

export function useProfileForm(initialValues: Partial<UserProfile>) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm };
}