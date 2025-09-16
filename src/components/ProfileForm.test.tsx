import { render, screen, fireEvent } from '@testing-library/react';
import ProfileForm from './ProfileForm';
import { UserProfile } from '../types/profile';

// Mock the hooks
jest.mock('../hooks/useProfileForm');
jest.mock('../hooks/useProfile');

const mockUseProfileForm = require('../hooks/useProfileForm').useProfileForm;
const mockUseUpdateProfile = require('../hooks/useProfile').useUpdateProfile;

describe('ProfileForm', () => {
  const mockProfile: UserProfile = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Test bio',
  };

  beforeEach(() => {
    mockUseProfileForm.mockReturnValue({
      values: mockProfile,
      handleChange: jest.fn(),
      resetForm: jest.fn(),
    });
    mockUseUpdateProfile.mockReturnValue({
      mutate: jest.fn(),
      isPending: false,
      isError: false,
    });
  });

  test('renders form with profile data', () => {
    render(<ProfileForm userId="1" initialProfile={mockProfile} />);

    expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
    expect(screen.getByDisplayValue('john@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test bio')).toBeInTheDocument();
  });

  test('calls handleChange on input change', () => {
    const mockHandleChange = jest.fn();
    mockUseProfileForm.mockReturnValue({
      values: mockProfile,
      handleChange: mockHandleChange,
      resetForm: jest.fn(),
    });

    render(<ProfileForm userId="1" initialProfile={mockProfile} />);

    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

    expect(mockHandleChange).toHaveBeenCalled();
  });
});