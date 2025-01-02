/*
  # Create profiles table for gym members

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key) - Links to auth.users
      - `full_name` (varchar) - Member's full name
      - `gender` (varchar) - Member's gender
      - `date_joined` (date) - Registration date
      - `fees_paid` (boolean) - Payment status
      - `batch_change_requested` (boolean) - Batch change request status
      - `batch` (varchar) - Current batch
      - `created_at` (timestamp) - Record creation time
      - `updated_at` (timestamp) - Last update time

  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  full_name varchar NOT NULL,
  gender varchar NOT NULL CHECK (gender IN ('male', 'female', 'other')),
  date_joined date DEFAULT CURRENT_DATE,
  fees_paid boolean DEFAULT false,
  batch_change_requested boolean DEFAULT false,
  batch varchar NOT NULL CHECK (batch IN ('morning', 'afternoon', 'evening', 'night')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create function to handle updated_at
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();