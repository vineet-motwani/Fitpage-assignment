import React from 'react';

interface AuthToggleProps {
  view: 'login' | 'signup';
  setView: (view: 'login' | 'signup') => void;
}

export function AuthToggle({ view, setView }: AuthToggleProps) {
  return (
    <div className="flex space-x-4 mb-8">
      <button
        onClick={() => setView('login')}
        className={`px-4 py-2 rounded ${
          view === 'login'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-700'
        }`}
      >
        Login
      </button>
      <button
        onClick={() => setView('signup')}
        className={`px-4 py-2 rounded ${
          view === 'signup'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-700'
        }`}
      >
        Sign Up
      </button>
    </div>
  );
}