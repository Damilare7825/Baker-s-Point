import React from 'react';
import privacyPolicy from '../../Bakers-Point-Privacy-Policy.md?raw';
import PolicyDocument from '../components/PolicyDocument';

export default function Privacy() {
  return <PolicyDocument markdown={privacyPolicy} title="Privacy Policy | Bakers Point Bakery" description="Read how Bakers Point Bakery handles information shared through orders, bookings and enquiries." />;
}
