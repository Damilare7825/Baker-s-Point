import React from 'react';
import terms from '../../Bakers-Point-Terms-and-Conditions.md?raw';
import PolicyDocument from '../components/PolicyDocument';

export default function Terms() {
  return <PolicyDocument markdown={terms} title="Terms & Conditions | Bakers Point Bakery" description="Review the terms for using the Bakers Point Bakery website and placing orders or bookings." />;
}
