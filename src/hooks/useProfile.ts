import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUserProfile, updateUserProfile } from '../lib/api';
import { UserProfile, UpdateProfileRequest } from '../types/profile';

export function useProfile(userId: string) {
  return useQuery({
    queryKey: ['profile', userId],
    queryFn: () => fetchUserProfile(userId),
    enabled: !!userId,
  });
}

export function useUpdateProfile(userId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateProfileRequest) => updateUserProfile(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', userId] });
    },
  });
}