// Launch configuration
export const LAUNCH_CONFIG = {
  // Set your launch date here
  // Format: new Date(year, month (0-11), day, hour, minute)
  launchDate: new Date(Date.now() + 15 * 1000), // 15 seconds from now (for testing)
  
  // Loading duration in milliseconds
  loadingDuration: 3000,
  
  // Enable/disable countdown
  enableCountdown: true,
  
  // Enable/disable loading screen
  enableLoading: true,
  
  // Site title
  siteTitle: "LEO District 306 D2",
  
  // Site description
  siteDescription: "Official Website of LEO District 306 D2",
  
  // Debug mode - set to true to always show countdown
  debugMode: false
};

// Helper function to get time until launch
export const getTimeUntilLaunch = () => {
  const now = new Date();
  const timeDiff = LAUNCH_CONFIG.launchDate.getTime() - now.getTime();
  
  if (timeDiff <= 0) {
    return { isLaunched: true, timeLeft: 0 };
  }
  
  return {
    isLaunched: false,
    timeLeft: timeDiff
  };
};
