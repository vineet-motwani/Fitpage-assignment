# Gym Registration System

A modern web application for managing gym class registrations, built with React, Supabase, and Tailwind CSS.

## Features

- User authentication (signup/login)
- Profile management
- Batch selection (Morning/Afternoon/Evening/Night)
- Monthly fee payments
- Batch change requests
- Real-time updates
- Responsive design

## Prerequisites

- Node.js (v18 or higher).
- npm or yarn
- Supabase account with a project initiated.

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/vineet-motwani/Fitpage-assignment.git
cd Fitpage-assignment
```

2. Install dependencies
```bash
npm i
```

3. Set up environment variables
Create a `.env` file in the root directory with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url (without quotes)
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key (without quotes)
```

4. Start the development server
```bash
npm run dev
```

## Database Schema

The application uses the following table structure in Supabase:

```sql
profiles (
  id uuid PRIMARY KEY,
  full_name varchar,
  gender varchar,
  date_joined date,
  fees_paid boolean,
  batch_change_requested boolean,
  batch varchar,
  created_at timestamptz,
  updated_at timestamptz
)
```

## Features Explanation

### Authentication
- Users can sign up with email and password
- Existing users can log in to their accounts
- Secure authentication handled by Supabase

### Profile Management
- New users must complete their profile after registration (onboarding types).
- Profile includes: full name, gender, and preferred batch (other fields can be added as and when required).

### Batch System
- Four available batches:
  - Morning (6:00 AM - 8:00 AM)
  - Afternoon (2:00 PM - 4:00 PM)
  - Evening (6:00 PM - 8:00 PM)
  - Night (8:00 PM - 10:00 PM)
- Users can request batch changes for the next month (I have implemented this as a toggle, however notifiers can be added in the backend for admin).

### Payment System
- Monthly fees must be paid in advance, however payment system has not been integrated yet.
- Payment status tracked in the database
- Simple payment confirmation system

## Security Features

- Row Level Security (RLS) enabled due to requirements by Supabase.
- Secure authentication with Supabase.
- Protected API endpoints.
- Personal information security.

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

Looking forward to hearing back from you at [Vineet K. Motwani](mailto:motwanivineet08@gmail.com)