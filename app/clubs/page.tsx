
'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Clubs() {
  const [selectedRegion, setSelectedRegion] = useState('Region A');
  const [selectedZone, setSelectedZone] = useState('Zone A1');
  const [selectedClub, setSelectedClub] = useState<any>(null);

  // Animated counter states
  const [regionsCount, setRegionsCount] = useState(0);
  const [zonesCount, setZonesCount] = useState(0);
  const [clubsCount, setClubsCount] = useState(0);

  // Counter animation function
  const animateCounter = (targetValue: number, setter: (value: number) => void, duration: number = 2000) => {
    const increment = targetValue / (duration / 16); // 60fps
    let currentValue = 0;
    
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        setter(targetValue);
        clearInterval(timer);
      } else {
        setter(Math.floor(currentValue));
      }
    }, 16);
  };

  const regionsData = {
    'Region A': {
      director: 'Leo Bimsara Alawathugoda',
      zones: {
        'Zone A1': {
          director: 'Leo Sanjeev Gunasekara',
          clubs: [
            { 
              name: 'Leo Club of Arawwala ', 
              president: 'Saman Perera', 
              members: 25,
              details: {
                president: 'Leo Saman Perera',
                vicePresident: 'Leo Nishani Fernando',
                secretary: 'Leo Ruwan Silva',
                treasurer: 'Leo Chamari Dias',
                newsletter: 'Unity Voice',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of UoM', 
              president: 'Nishani Silva', 
              members: 20,
              details: {
                president: 'Leo Nishani Silva',
                vicePresident: 'Leo Kasun Rajapaksha',
                secretary: 'Leo Dilini Kumara',
                treasurer: 'Leo Roshan Wickrama',
                newsletter: 'Kalubowila Chronicles',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of Raththanapitiya', 
              president: 'Ruwan Fernando', 
              members: 18,
              details: {
                president: 'Leo Ruwan Fernando',
                vicePresident: 'Leo Amara Jayawardana',
                secretary: 'Leo Tharushi Rodrigo',
                treasurer: 'Leo Chamara Silva',
                newsletter: 'Central Connect',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            }
            
           
          ]
        },
        'Zone A2': {
          director: 'Leo Isuri Jayakodi',
          clubs: [
            { 
              name: 'Leo Club of Saegis Campus', 
              president: 'Dilini Kumara', 
              members: 21,
              details: {
                president: 'Leo Dilini Kumara',
                vicePresident: 'Leo Priyanka Dias',
                secretary: 'Leo Kasun Mendis',
                treasurer: 'Leo Fathima Nazeer',
                newsletter: 'Coastal Current',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of USJ', 
              president: 'Roshan Wickrama', 
              members: 17,
              details: {
                president: 'Leo Roshan Wickrama',
                vicePresident: 'Leo Mohamed Rizan',
                secretary: 'Leo Ayesha Farook',
                treasurer: 'Leo Imran Hassan',
                newsletter: 'Ancient Echo',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of Dehiwala East', 
              president: 'Amara Jayawardana', 
              members: 16,
              details: {
                president: 'Leo Amara Jayawardana',
                vicePresident: 'Leo Ahmed Ibrahim',
                secretary: 'Leo Aminath Shifa',
                treasurer: 'Leo Hassan Manik',
                newsletter: 'Heritage Herald',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            }
            
          
            
           
          ]
        }
      }
    },
    'Region B': {
      director: 'Leo Aditha Udara',
      zones: {
        'Zone B1': {
          director: 'Leo Enuk Dabare',
          clubs: [
            { 
              name: 'Leo Club of Ethos International College, Colombo VII', 
              president: 'Suresh Kumar', 
              members: 22,
              details: {
                president: 'Leo Suresh Kumar',
                vicePresident: 'Leo Kamala Patel',
                secretary: 'Leo Deepika Nair',
                treasurer: 'Leo Ravi Gupta',
                newsletter: 'Peninsula Post',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of Sri Lanka Technological Campus', 
              president: 'Kamala Patel', 
              members: 18,
              details: {
                president: 'Leo Kamala Patel',
                vicePresident: 'Leo Priyanka Dias',
                secretary: 'Leo Kasun Mendis',
                treasurer: 'Leo Fathima Nazeer',
                newsletter: 'North News',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of Panadura Alubomulla ', 
              president: 'Deepika Nair', 
              members: 20,
              details: {
                president: 'Leo Deepika Nair',
                vicePresident: 'Leo Mohamed Rizan',
                secretary: 'Leo Ayesha Farook',
                treasurer: 'Leo Imran Hassan',
                newsletter: 'Island Voice',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            // { 
            //   name: 'Leo Club of Kilinochchi Revival', 
            //   president: 'Ravi Gupta', 
            //   members: 19,
            //   details: {
            //     president: 'Leo Ravi Gupta',
            //     vicePresident: 'Leo Ahmed Ibrahim',
            //     secretary: 'Leo Aminath Shifa',
            //     treasurer: 'Leo Hassan Manik',
            //     newsletter: 'Revival Report',
            //     socialMedia: {
            //       website: '#',
            //       facebook: '#',
            //       instagram: '#',
            //       youtube: '#'
            //     }
            //   }
            // },
            // { 
            //   name: 'Leo Club of Mullaitivu Coast', 
            //   president: 'Priyanka Dias', 
            //   members: 16,
            //   details: {
            //     president: 'Leo Priyanka Dias',
            //     vicePresident: 'Leo Fathmath Nisha',
            //     secretary: 'Leo Mohamed Shifan',
            //     treasurer: 'Leo Ibrahim Manik',
            //     newsletter: 'Coastal Chronicle',
            //     socialMedia: {
            //       website: '#',
            //       facebook: '#',
            //       instagram: '#',
            //       youtube: '#'
            //     }
            //   }
            // },
            // { 
            //   name: 'Leo Club of Puttalam Lagoon', 
            //   president: 'Kasun Mendis', 
            //   members: 21,
            //   details: {
            //     president: 'Leo Kasun Mendis',
            //     vicePresident: 'Leo Mariyam Nisha',
            //     secretary: 'Leo Ahmed Waheed',
            //     treasurer: 'Leo Aminath Riza',
            //     newsletter: 'Lagoon Letter',
            //     socialMedia: {
            //       website: '#',
            //       facebook: '#',
            //       instagram: '#',
            //       youtube: '#'
            //     }
            //   }
            // }
          ]
        },
        'Zone B2': {
          director: 'Leo Mindula Gunathilaka',
          clubs: [
            { 
              name: 'Leo Club of Godigamuwa', 
              president: 'Fathima Nazeer', 
              members: 25,
              details: {
                president: 'Leo Fathima Nazeer',
                vicePresident: 'Leo Ibrahim Waheed',
                secretary: 'Leo Thilaka Murali',
                treasurer: 'Leo Dilshan Rajapaksha',
                newsletter: 'Eastern Edge',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of Millaniya', 
              president: 'Mohamed Rizan', 
              members: 23,
              details: {
                president: 'Leo Mohamed Rizan',
                vicePresident: 'Leo Mariyam Shahla',
                secretary: 'Leo Arun Sharma',
                treasurer: 'Leo Samantha Perera',
                newsletter: 'Coastal Current',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of Pepiliyana Woodlands', 
              president: 'Ayesha Farook', 
              members: 20,
              details: {
                president: 'Leo Ayesha Farook',
                vicePresident: 'Leo Naveen Dharmasiri',
                secretary: 'Leo Priya Mendis',
                treasurer: 'Leo Saman Perera',
                newsletter: 'Beach Bulletin',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            // { 
            //   name: 'Leo Club of Sammanthurai Trade', 
            //   president: 'Imran Hassan', 
            //   members: 18,
            //   details: {
            //     president: 'Leo Imran Hassan',
            //     vicePresident: 'Leo Nishani Silva',
            //     secretary: 'Leo Ruwan Fernando',
            //     treasurer: 'Leo Chamari Dias',
            //     newsletter: 'Trade Times',
            //     socialMedia: {
            //       website: '#',
            //       facebook: '#',
            //       instagram: '#',
            //       youtube: '#'
            //     }
            //   }
            // },
            // { 
            //   name: 'Leo Club of Kattankudy Unity', 
            //   president: 'Ahmed Ibrahim', 
            //   members: 17,
            //   details: {
            //     president: 'Leo Ahmed Ibrahim',
            //     vicePresident: 'Leo Kasun Rajapaksha',
            //     secretary: 'Leo Dilini Kumara',
            //     treasurer: 'Leo Roshan Wickrama',
            //     newsletter: 'Unity Update',
            //     socialMedia: {
            //       website: '#',
            //       facebook: '#',
            //       instagram: '#',
            //       youtube: '#'
            //     }
            //   }
            // }
          ]
        }
      }
    },
    'Region C': {
      director: 'Leo Buwanaji Munasinghe ',
      zones: {
        'Zone C1': {
          director: 'Leo Duvindu Rajapaksha',
          clubs: [
            { 
              name: 'Leo Club of Piliyandala', 
              president: 'Aminath Shifa', 
              members: 28,
              details: {
                president: 'Leo Aminath Shifa',
                vicePresident: 'Leo Hassan Manik',
                secretary: 'Leo Fathmath Nisha',
                treasurer: 'Leo Mohamed Shifan',
                newsletter: 'Central Circle',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of Polgasowita', 
              president: 'Hassan Manik', 
              members: 26,
              details: {
                president: 'Leo Hassan Manik',
                vicePresident: 'Leo Ibrahim Manik',
                secretary: 'Leo Mariyam Nisha',
                treasurer: 'Leo Ahmed Waheed',
                newsletter: 'New Horizons',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of Taxila Central College', 
              president: 'Fathmath Nisha', 
              members: 24,
              details: {
                president: 'Leo Fathmath Nisha',
                vicePresident: 'Leo Aminath Riza',
                secretary: 'Leo Ibrahim Waheed',
                treasurer: 'Leo Thilaka Murali',
                newsletter: 'Atoll Announcer',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            // { 
            //   name: 'Leo Club of Fuvahmulah Island', 
            //   president: 'Mohamed Shifan', 
            //   members: 22,
            //   details: {
            //     president: 'Leo Mohamed Shifan',
            //     vicePresident: 'Leo Dilshan Rajapaksha',
            //     secretary: 'Leo Mariyam Shahla',
            //     treasurer: 'Leo Arun Sharma',
            //     newsletter: 'Island Insight',
            //     socialMedia: {
            //       website: '#',
            //       facebook: '#',
            //       instagram: '#',
            //       youtube: '#'
            //     }
            //   }
            // }
          ]
        },
        'Zone C2': {
          director: 'Darshika Prabashwara',
          clubs: [
            { 
              name: 'Leo Club of GWUIM FISSMS', 
              president: 'Ibrahim Manik', 
              members: 20,
              details: {
                president: 'Leo Ibrahim Manik',
                vicePresident: 'Leo Samantha Perera',
                secretary: 'Leo Naveen Dharmasiri',
                treasurer: 'Leo Priya Mendis',
                newsletter: 'Laamu Life',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of Kalubowila', 
              president: 'Mariyam Nisha', 
              members: 18,
              details: {
                president: 'Leo Mariyam Nisha',
                vicePresident: 'Leo Saman Perera',
                secretary: 'Leo Nishani Silva',
                treasurer: 'Leo Ruwan Fernando',
                newsletter: 'Baa Bulletin',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            },
            { 
              name: 'Leo Club of Colombo Monarch', 
              president: 'Ahmed Waheed', 
              members: 16,
              details: {
                president: 'Leo Ahmed Waheed',
                vicePresident: 'Leo Chamari Dias',
                secretary: 'Leo Kasun Rajapaksha',
                treasurer: 'Leo Dilini Kumara',
                newsletter: 'Raa Review',
                socialMedia: {
                  website: '#',
                  facebook: '#',
                  instagram: '#',
                  youtube: '#'
                }
              }
            }
          ]
        }
      }
    }
  };

  const getTotalClubs = () => {
    let total = 0;
    Object.values(regionsData).forEach(region => {
      Object.values(region.zones).forEach(zone => {
        total += zone.clubs.length;
      });
    });
    return total;
  };

  const getClubsInZone = (regionKey: string, zoneKey: string) => {
    return (regionsData as any)[regionKey]?.zones[zoneKey]?.clubs.length || 0;
  };

  // Start animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      animateCounter(3, setRegionsCount, 1500);
      animateCounter(6, setZonesCount, 2000);
      animateCounter(getTotalClubs(), setClubsCount, 2500);
    }, 500); // Delay before starting animation

    return () => clearTimeout(timer);
  }, []);

  const currentRegion = (regionsData as any)[selectedRegion];
  const currentZone = currentRegion?.zones[selectedZone];

  const handleViewDetails = (club: any) => {
    setSelectedClub(club);
  };

  const closeModal = () => {
    setSelectedClub(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Title Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#2388C9] mb-6">
              Our LEO Clubs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our organizational structure across three dynamic regions and six vibrant zones
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className="py-16 bg-white relative overflow-hidden">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2388C9] mb-6">
              Our Organization at a Glance
            </h2>
            <p className="text-gray-600 text-sm">Spanning across multiple regions with dedicated leadership</p>
          </div>
          
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {/* Regions Counter */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2388C9] to-[#2C4B78] rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-[#2388C9]/20 rounded-2xl p-6 text-center min-w-[140px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2388C9] to-[#2C4B78] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <i className="ri-map-2-line text-white text-lg"></i>
                </div>
                <div className="text-3xl font-bold text-[#2388C9] mb-1">
                  {regionsCount}
                </div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Regions</div>
                <div className="mt-3 w-8 h-1 bg-gradient-to-r from-[#2388C9] to-[#2C4B78] rounded-full mx-auto"></div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="hidden md:block w-16 h-px bg-gradient-to-r from-[#2388C9]/30 via-[#2C4B78]/50 to-[#2388C9]/30 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#2388C9] rounded-full animate-pulse"></div>
            </div>

            {/* Zones Counter */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C4B78] to-[#7B8394] rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-[#2C4B78]/20 rounded-2xl p-6 text-center min-w-[140px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2C4B78] to-[#7B8394] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <i className="ri-folder-2-line text-white text-lg"></i>
                </div>
                <div className="text-3xl font-bold text-[#2C4B78] mb-1">
                  {zonesCount}
                </div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Zones</div>
                <div className="mt-3 w-8 h-1 bg-gradient-to-r from-[#2C4B78] to-[#7B8394] rounded-full mx-auto"></div>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="hidden md:block w-16 h-px bg-gradient-to-r from-[#7B8394]/30 via-[#1D2030]/50 to-[#7B8394]/30 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#7B8394] rounded-full animate-pulse"></div>
            </div>

            {/* Clubs Counter */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7B8394] to-[#1D2030] rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-[#7B8394]/20 rounded-2xl p-6 text-center min-w-[140px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7B8394] to-[#1D2030] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <i className="ri-community-line text-white text-lg"></i>
                </div>
                <div className="text-3xl font-bold text-[#7B8394] mb-1">
                  {clubsCount}
                </div>
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Clubs</div>
                <div className="mt-3 w-8 h-1 bg-gradient-to-r from-[#7B8394] to-[#1D2030] rounded-full mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Achievement Banner */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-[#2388C9]/10 via-white to-[#2C4B78]/10 rounded-xl border border-[#2388C9]/20 p-4 text-center shadow-sm">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <i className="ri-award-line text-[#2388C9] mr-2"></i>
                  <span className="font-medium">LEO District 306 D2</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center">
                  <i className="ri-calendar-line text-[#2C4B78] mr-2"></i>
                  <span className="font-medium">Established 2025</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center">
                  <i className="ri-global-line text-[#7B8394] mr-2"></i>
                  <span className="font-medium">Sri Lanka & Maldives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Left Sidebar - Region Selection */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-100 sticky top-6">
                <div className="flex items-center mb-5">
                                  <div className="w-6 h-6 bg-gradient-to-br from-[#2388C9] to-[#2C4B78] rounded-lg mr-3 flex items-center justify-center shadow-sm">
                  <i className="ri-map-pin-line text-white text-xs"></i>
                </div>
                <h3 className="text-base font-semibold bg-gradient-to-r from-[#2388C9] to-[#2C4B78] bg-clip-text text-transparent">Select Region</h3>
                </div>
                
                <div className="space-y-2">
                  {Object.keys(regionsData).map((region) => (
                    <button
                      key={region}
                      onClick={() => {
                        setSelectedRegion(region);
                        setSelectedZone(Object.keys((regionsData as any)[region].zones)[0]);
                      }}
                      className={`w-full p-3 rounded-lg text-left transition-all duration-300 cursor-pointer text-sm font-medium ${
                        selectedRegion === region
                          ? 'bg-gradient-to-r from-[#2388C9] to-[#2C4B78] text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-[#2388C9]/10 hover:text-[#2388C9] border border-gray-200'
                      }`}
                    >
                      <span className="flex items-center">
                        <i className={`ri-organization-chart text-base mr-2 transition-colors ${
                          selectedRegion === region ? 'text-white' : 'text-[#2388C9]'
                        }`}></i>
                        {region}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Region Director */}
                {currentRegion && (
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <div className="flex items-center p-3 bg-gradient-to-r from-[#2388C9]/10 to-[#2C4B78]/10 rounded-lg border border-[#2388C9]/20">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2388C9]/20 to-[#2C4B78]/20 rounded-full flex items-center justify-center mr-3 shadow-sm">
                        <span className="text-[#2388C9] font-semibold text-sm">
                          {currentRegion.director.split(' ')[1]?.[0] || 'L'}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs text-[#2388C9] font-medium uppercase tracking-wider">Region Director</div>
                        <div className="font-semibold text-[#2388C9] text-sm">{currentRegion.director}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Content - Zones & Clubs */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                
                {/* Zone Tabs Header - Custom Tab Style with Slanted Borders */}
                <div className="bg-gradient-to-r from-gray-50 to-[#2388C9]/10 rounded-t-xl">
                  <div className="flex border-b border-gray-200/50 relative">
                    {Object.keys(currentRegion?.zones || {}).map((zone, index) => {
                      const isActive = selectedZone === zone;
                      const isFirst = index === 0;
                      const isLast = index === Object.keys(currentRegion?.zones || {}).length - 1;
                      
                      return (
                        <div key={zone} className="relative flex-1">
                          <button
                            onClick={() => setSelectedZone(zone)}
                            className={`skew-x-12 relative w-full px-6 py-3 text-sm font-medium transition-all duration-200 ease-out cursor-pointer group ${
                              isActive
                                ? 'bg-white text-[#2388C9] shadow-sm -mb-px z-10'
                                : 'bg-transparent text-gray-600 hover:text-[#2388C9] hover:bg-white/50 z-0'
                            }`}
                            style={{
                              borderBottom: isActive ? 'none' : '3px solid #2563eb',
                              borderLeft: isActive && !isFirst ? '3px solid #2563eb' : 'none',
                              borderRight: isActive && !isLast ? '3px solid #2563eb' : 'none',
                              marginLeft: index > 0 ? '-1px' : '0',
                              // transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
                              borderTopLeftRadius: isFirst ? '0.75rem' : '0',
                              borderTopRightRadius: isLast ? '0.75rem' : '0'
                            }}
                          >
                            {/* Top border line for active tab */}
                            {isActive && (
                              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#2388C9]"></div>
                            )}
                            
                            {/* Slanted right border for active tab (backslash style) */}
                            {isActive && !isLast && (
                              <div 
                                className="absolute top-0 right-0 w-4 h-full z-20 pointer-events-none"
                                style={{
                                  // background: 'linear-gradient(135deg, #2563eb 0%, #2563eb 2px, transparent 2px, transparent 100%)',
                                  // clipPath: 'polygon(0 0, 100% 100%, 90% 100%, 0 10%)'
                                }}
                              />
                            )}
                            
                            {/* Left slanted border for active tab if not first */}
                            {isActive && !isFirst && (
                              <div 
                                className="absolute top-0 left-0 w-4 h-full z-20 pointer-events-none"
                                style={{
                                  // background: 'linear-gradient(45deg, transparent 0%, transparent calc(100% - 2px), #2563eb calc(100% - 2px), #2563eb 100%)',
                                  // clipPath: 'polygon(10% 0, 100% 90%, 100% 100%, 0 100%)'
                                }}
                              />
                            )}

                            <span className="-skew-x-12 relative z-10 flex items-center justify-center">
                              <i className={`ri-folder-line mr-1 text-sm transition-colors duration-150 ${
                                isActive ? 'text-[#2388C9]' : 'text-gray-400 group-hover:text-[#2388C9]'
                              }`}></i>
                              {zone}
                            </span>
                            
                            {/* Bottom indicator for active tab */}
                            {/* {isActive && (
                              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-150"></div>
                            )} */}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Zone Content */}
                <div className="p-6 bg-white rounded-b-xl">
                  {/* Zone Info Header */}
                  <div className="mb-6 flex items-center justify-between p-4 bg-gradient-to-r from-[#2388C9]/10 to-[#2C4B78]/10 rounded-lg border border-[#2388C9]/20">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2388C9] to-[#2C4B78] rounded-lg mr-3 flex items-center justify-center shadow-sm">
                        <i className="ri-group-line text-white text-sm"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{selectedZone}</h3>
                        <p className="text-xs text-gray-600">Zone Overview</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-[#2388C9]">{getClubsInZone(selectedRegion, selectedZone)}</div>
                      <div className="text-xs text-[#2388C9] font-medium">Active Clubs</div>
                    </div>
                  </div>

                  {/* Zone Director */}
                  {currentZone && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-[#2388C9]/10 via-white to-[#2C4B78]/10 rounded-lg border border-[#2388C9]/20">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#2388C9]/20 to-[#2C4B78]/20 rounded-full flex items-center justify-center mr-3 shadow-sm">
                          <span className="text-[#2388C9] font-semibold text-sm">
                            {currentZone.director.split(' ')[1]?.[0] || 'L'}
                          </span>
                        </div>
                        <div>
                          <div className="text-xs text-[#2388C9] font-medium uppercase tracking-wider">Zone Director</div>
                          <div className="font-semibold text-[#2388C9] text-sm">{currentZone.director}</div>
                          <div className="text-xs text-gray-600">Leading {getClubsInZone(selectedRegion, selectedZone)} clubs in {selectedZone}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Clubs List */}
                  <div className="grid gap-3">
                    {currentZone?.clubs.map((club: any, index: number) => (
                      <div key={index} className="group bg-gradient-to-r from-white to-[#2388C9]/5 p-4 border border-gray-200/50 rounded-lg hover:border-[#2388C9]/30 transition-all duration-300 cursor-pointer hover:shadow-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#2388C9]/20 to-[#2C4B78]/20 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                            <i className="ri-team-line text-[#2388C9] text-sm"></i>
                          </div>
                          <div className="flex-1 min-w-0">
                            <button 
                              onClick={() => handleViewDetails(club)}
                              className="font-semibold text-sm text-[#2388C9] hover:text-[#2C4B78] cursor-pointer text-left block w-full truncate group-hover:text-[#2388C9] transition-colors"
                            >
                              {club.name}
                            </button>
                            <div className="text-xs text-gray-600 mt-1">
                              <span className="flex items-center">
                                <i className="ri-user-star-line mr-1 text-[#2388C9] text-xs"></i>
                                President: <span className="font-medium ml-1">{club.president}</span>
                                <span className="mx-2 text-gray-400">•</span>
                                <i className="ri-group-line mr-1 text-[#2388C9] text-xs"></i>
                                <span className="font-medium">{club.members}</span> Members
                              </span>
                            </div>
                          </div>
                          <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <i className="ri-arrow-right-circle-line text-lg text-[#2388C9]"></i>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-[#2388C9]/10 to-[#2C4B78]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-[#2388C9] to-[#2C4B78] rounded-lg mb-4">
              <i className="ri-organization-chart text-xl text-white"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2388C9] mb-3">District Overview</h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">Complete structure of LEO District 306 D2 across all regions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(regionsData).map(([regionKey, regionData], index) => (
              <div key={regionKey} className="group bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 p-5">
                <div className="text-center mb-4">
                                  <div className="w-12 h-12 bg-gradient-to-br from-[#2388C9]/20 to-[#2C4B78]/20 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <i className="ri-building-line text-lg text-[#2388C9]"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{regionKey}</h3>
                <div className="text-xs text-[#2388C9] bg-[#2388C9]/10 px-3 py-1 rounded-full border border-[#2388C9]/20 inline-block">
                  Director: <span className="font-semibold">{regionData.director.replace('Leo ', '')}</span>
                </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  {Object.entries(regionData.zones).map(([zoneKey, zoneData]) => (
                    <div key={zoneKey} className="bg-gradient-to-r from-gray-50 to-[#2388C9]/10 p-3 rounded-lg border border-gray-100">
                      <div className="flex justify-between items-center mb-1">
                        <div className="font-medium text-gray-800 flex items-center text-sm">
                          <i className="ri-folder-line text-[#2388C9] mr-1 text-xs"></i>
                          {zoneKey}
                        </div>
                        <div className="text-xs font-semibold text-[#2388C9] bg-white px-2 py-1 rounded-full">
                          {zoneData.clubs.length} clubs
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 pl-4">
                        Director: <span className="font-medium">{zoneData.director.replace('Leo ', '')}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-200 text-center">
                                  <div className="text-2xl font-bold bg-gradient-to-r from-[#2388C9] to-[#2C4B78] bg-clip-text text-transparent mb-1">
                  {Object.values(regionData.zones).reduce((sum, zone) => sum + zone.clubs.length, 0)}
                </div>
                <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Total Clubs</div>
                <div className="mt-2 w-12 h-0.5 bg-gradient-to-r from-[#2388C9] to-[#2C4B78] rounded-full mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Details Modal */}
      {selectedClub && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/50 animate-modal-appear">
            <div className="p-10">
              {/* Header */}
              <div className="flex justify-between items-start mb-10">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#2388C9] to-[#2C4B78] rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <i className="ri-community-line text-2xl text-white"></i>
                </div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-[#2388C9] bg-clip-text text-transparent">
                    {selectedClub.name}
                  </h2>
                      <p className="text-lg text-gray-600 mt-1">Club Profile & Leadership</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-4xl cursor-pointer ml-6 w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Key Officers Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-gray-700 to-[#2388C9] bg-clip-text text-transparent">Executive Committee</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* President */}
                  <div className="group bg-gradient-to-r from-[#2388C9]/10 to-[#2C4B78]/10 p-6 rounded-2xl border border-[#2388C9]/20 hover:shadow-lg transition-all">
                    <div className="flex items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#2388C9] to-[#2C4B78] rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <i className="ri-crown-line text-2xl text-white"></i>
                      </div>
                      <div>
                        <div className="font-bold text-[#2388C9] text-xl mb-1">President</div>
                        <div className="text-gray-700 font-semibold text-lg">{selectedClub.details.president.replace('Leo ', '')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Vice President */}
                  <div className="group bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all">
                    <div className="flex items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <i className="ri-user-star-line text-2xl text-white"></i>
                      </div>
                      <div>
                        <div className="font-bold text-indigo-800 text-xl mb-1">Vice President</div>
                        <div className="text-gray-700 font-semibold text-lg">{selectedClub.details.vicePresident.replace('Leo ', '')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Secretary */}
                  <div className="group bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-all">
                    <div className="flex items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <i className="ri-file-text-line text-2xl text-white"></i>
                      </div>
                      <div>
                        <div className="font-bold text-green-800 text-xl mb-1">Secretary</div>
                        <div className="text-gray-700 font-semibold text-lg">{selectedClub.details.secretary.replace('Leo ', '')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Treasurer */}
                  <div className="group bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-all">
                    <div className="flex items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <i className="ri-wallet-line text-2xl text-white"></i>
                      </div>
                      <div>
                        <div className="font-bold text-purple-800 text-xl mb-1">Treasurer</div>
                        <div className="text-gray-700 font-semibold text-lg">{selectedClub.details.treasurer.replace('Leo ', '')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Leo Advisor */}
                  <div className="group bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-all">
                    <div className="flex items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <i className="ri-compass-line text-2xl text-white"></i>
                      </div>
                      <div>
                        <div className="font-bold text-orange-800 text-xl mb-1">Leo Advisor</div>
                        <div className="text-gray-700 font-semibold text-lg">Lion Hasitha Anuradha Jayarathne</div>
                      </div>
                    </div>
                  </div>

                  {/* Staff Advisor */}
                  <div className="group bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-100 hover:shadow-lg transition-all">
                    <div className="flex items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <i className="ri-graduation-cap-line text-2xl text-white"></i>
                      </div>
                      <div>
                        <div className="font-bold text-teal-800 text-xl mb-1">Staff Advisor</div>
                        <div className="text-gray-700 font-semibold text-lg">Ms. Prasangi Kiringoda</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
                              <div className="text-center bg-gradient-to-r from-gray-50 to-[#2388C9]/10 p-8 rounded-2xl border border-gray-100">
                <div className="text-2xl font-bold text-gray-700 mb-6">Connect With Us</div>
                <div className="flex justify-center gap-6">
                  <a href={selectedClub.details.socialMedia.facebook} className="group w-16 h-16 bg-gradient-to-br from-[#2388C9] to-[#2C4B78] rounded-full flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                    <i className="ri-facebook-fill text-2xl group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a href={selectedClub.details.socialMedia.instagram} className="group w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                    <i className="ri-instagram-line text-2xl group-hover:scale-110 transition-transform"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
