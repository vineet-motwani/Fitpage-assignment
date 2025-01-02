import React, { useState } from 'react';
import type { Profile } from '../types/database';
import { supabase } from '../lib/supabase';

interface DashboardProps {
  profile: Profile;
}

export function Dashboard({ profile: initialProfile }: DashboardProps) {
  const [profile, setProfile] = useState(initialProfile);
  const [loading, setLoading] = useState(false);

  const handlePayFees = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ fees_paid: true })
        .eq('id', profile.id);

      if (error) throw error;
      setProfile({ ...profile, fees_paid: true });
    } catch (error) {
      console.error('Error updating fees:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBatchChangeRequest = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ batch_change_requested: true })
        .eq('id', profile.id);

      if (error) throw error;
      setProfile({ ...profile, batch_change_requested: true });
    } catch (error) {
      console.error('Error requesting batch change:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Welcome, {profile.full_name}</h2>
        <button
          onClick={() => supabase.auth.signOut()}
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
      <div className="space-y-4 mb-6">
        <p><strong>Batch:</strong> {profile.batch}</p>
        <p><strong>Fees Status:</strong> {profile.fees_paid ? 'Paid' : 'Unpaid'}</p>
        <p><strong>Batch Change Requested:</strong> {profile.batch_change_requested ? 'Yes' : 'No'}</p>
        <p><strong>Member Since:</strong> {new Date(profile.date_joined).toLocaleDateString()}</p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handlePayFees}
          disabled={loading || profile.fees_paid}
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {profile.fees_paid ? 'Fees Paid' : 'Pay Fees'}
        </button>
        <button
          onClick={handleBatchChangeRequest}
          disabled={loading || profile.batch_change_requested}
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {profile.batch_change_requested ? 'Change Requested' : 'Request Batch Change'}
        </button>
      </div>
    </div>
  );
}