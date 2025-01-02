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

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
cd gym-registration-system
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/          # React components
│   ├── AuthForm.tsx    # Login/Signup form
│   ├── AuthToggle.tsx  # Toggle between login/signup
│   ├── Dashboard.tsx   # User dashboard
│   └── RegistrationForm.tsx  # New user registration
├── lib/
│   └── supabase.ts     # Supabase client configuration
├── types/
│   └── database.ts     # TypeScript types for database
└── App.tsx             # Main application component
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
- New users must complete their profile after registration
- Profile includes: full name, gender, and preferred batch

### Batch System
- Four available batches:
  - Morning (6:00 AM - 8:00 AM)
  - Afternoon (2:00 PM - 4:00 PM)
  - Evening (6:00 PM - 8:00 PM)
  - Night (8:00 PM - 10:00 PM)
- Users can request batch changes for the next month

### Payment System
- Monthly fees must be paid in advance
- Payment status tracked in the database
- Simple payment confirmation system

## Security Features

- Row Level Security (RLS) enabled
- Secure authentication with Supabase
- Protected API endpoints
- Personal information security

## Development

To start development:

1. Make sure all dependencies are installed:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details