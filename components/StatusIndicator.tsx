'use client';

import { useState, useEffect } from 'react';

export default function StatusIndicator() {
  const [status, setStatus] = useState({
    isFirstUser: false,
    hasLaunched: false,
    firstUserSeen: false
  });

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('/api/launch-status');
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error('Error checking status:', error);
      }
    };

    checkStatus();
  }, []);

  return (
    <div className="fixed top-4 left-4 bg-black bg-opacity-75 text-white p-3 rounded-lg text-sm z-50">
      <div className="font-bold mb-1">Server Status:</div>
      <div>First User Seen: {status.firstUserSeen ? '✅ Yes' : '❌ No'}</div>
      <div>Has Launched: {status.hasLaunched ? '✅ Yes' : '❌ No'}</div>
      <div>You are: {status.isFirstUser ? '🎉 FIRST USER!' : '👤 Regular User'}</div>
    </div>
  );
}
