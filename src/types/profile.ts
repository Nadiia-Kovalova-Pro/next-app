export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
}

export interface UpdateProfileRequest {
  name?: string;
  email?: string;
  bio?: string;
  avatar?: string;
}