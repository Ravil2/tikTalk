export interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

export interface UserProfileData {
  id: number;
  avatarUrl: string;
  city: string;
  description: string;
  firstName: string;
  lastName: string;
  userName: string;
  isActive: boolean;
  stack: string[];
}
