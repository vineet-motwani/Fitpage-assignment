export interface Profile {
  id: string;
  full_name: string;
  gender: 'male' | 'female' | 'other';
  date_joined: string;
  fees_paid: boolean;
  batch_change_requested: boolean;
  batch: 'morning' | 'afternoon' | 'evening' | 'night';
  created_at: string;
  updated_at: string;
}

export interface AuthError {
  message: string;
}