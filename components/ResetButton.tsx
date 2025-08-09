'use client';

export default function ResetButton() {
  const handleReset = async () => {
    try {
      // Reset server-side status
      await fetch('/api/launch-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'reset' })
      });
      
      // Clear localStorage
      localStorage.removeItem('hasSeenCountdown');
      localStorage.removeItem('hasSeenLoading');
      
      window.location.reload();
    } catch (error) {
      console.error('Error resetting:', error);
      window.location.reload();
    }
  };

  return (
    <button
      onClick={handleReset}
      className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors z-50"
    >
      🔄 Reset Countdown
    </button>
  );
}
