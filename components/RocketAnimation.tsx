'use client';

import { useEffect, useRef } from 'react';

interface RocketAnimationProps {
  onComplete?: () => void;
}

export default function RocketAnimation({ onComplete }: RocketAnimationProps) {
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rocket = rocketRef.current;
    if (!rocket) return;

    // Enhanced animation sequence
    const animateRocket = () => {
              // Initial state - start from bottom
        rocket.style.transform = 'translateX(100px) translateY(100vh) scale(1)';
        rocket.style.opacity = '1';

              // Countdown animation (15)
        setTimeout(() => {
          const labels = rocket.querySelectorAll('.labels');
          labels.forEach((label) => {
            (label as HTMLElement).style.animation = 'countdown 0.5s ease-in-out';
          });
        }, 500);

                      // Engine start with smoke
        setTimeout(() => {
          rocket.style.transform = 'translateX(100px) translateY(calc(100vh - 50px)) scale(1.1)';
          const smokeElements = rocket.querySelectorAll('.rocket__smoke');
          smokeElements.forEach((smoke, index) => {
            setTimeout(() => {
              (smoke as HTMLElement).style.opacity = '1';
              (smoke as HTMLElement).style.transform = 'translateX(20px) translateY(10px)';
            }, index * 200);
          });
        }, 1000);

        // Fire ignition
        setTimeout(() => {
          const fire = rocket.querySelector('.rocket__fire') as HTMLElement;
          const rocketImage = rocket.querySelector('.rocket-image') as HTMLElement;
          if (fire) {
            fire.style.transform = 'translateX(-50%) scale(1.8)';
            fire.style.filter = 'brightness(1.5)';
          }
          if (rocketImage) {
            rocketImage.style.filter = 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))';
          }
        }, 1000);

        // Lift off
        setTimeout(() => {
          rocket.style.transform = 'translateX(100px) translateY(calc(100vh - 200px)) scale(1.3)';
          const fire = rocket.querySelector('.rocket__fire') as HTMLElement;
          const rocketImage = rocket.querySelector('.rocket-image') as HTMLElement;
          if (fire) {
            fire.style.transform = 'translateX(-50%) scale(2.5)';
            fire.style.filter = 'brightness(2)';
          }
          if (rocketImage) {
            rocketImage.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 1))';
          }
        }, 3000);

        // Full launch
        setTimeout(() => {
          rocket.style.transform = 'translateY(-100vh) scale(0.3)';
          rocket.style.opacity = '0';
          
          // Complete animation
          setTimeout(() => {
            onComplete?.();
          }, 1500);
        }, 5000);
    };

    animateRocket();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div id="frame" className="w-full h-full flex items-center justify-center relative">
        {/* Background stars */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div ref={rocketRef} className="rocket">
          {/* Rocket Image */}
          <div className="rocket-image">
            <img src="/images/rocket-launch.png" alt="Rocket Launch" />
          </div>
          
          <div className="rocket__label">
            <p className="labels">15</p>
          </div>
          
          {/* Left smoke */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={`left-${i}`} className="rocket__smoke rocket__smoke--left">
              <div className="rocket__smoke__inner">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j}></div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Right smoke */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={`right-${i}`} className="rocket__smoke rocket__smoke--right">
              <div className="rocket__smoke__inner">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j}></div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="rocket__fire"></div>
        </div>


      </div>

      <style jsx>{`
        :root {
          --color: #1e3a8a;
          --font-color: #fbbf24;  
          
          --rocket-main: white;
          --rocket-highlight: #e74c3c;
          --rocket-glass: #9AECDB;
          --rocket-smoke: #f1f2f6;
          --rocket-fire: #f0932b;
          --rocket-fire-highlight: #f1c40f;
        }

        #frame {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }

        .shadow {
          position: absolute;
          width: 50%;
          height: 100%;
          right: 0;
          background: rgba(100, 100, 100, .1);
          z-index: 1;
        }

        .shadow--full {
          width: 100%;
        }

        .rocket {
          position: relative;
          width: 180px;
          height: 270px;
          transition: all 2s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(100px) translateY(100vh);
        }

        .rocket-image {
          width: 180px;
          height: 270px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
          transition: all 1s ease-in-out;
        }

        .rocket-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        .rocket__label {
          width: 250px;
          position: absolute;
          top: -80px;
          left: -200px;
        }

        .rocket__label p {
          position: absolute;
          top: 0;
          left: 0;
          font-family: 'Bowlby One SC', cursive;
          font-size: 80px;
          line-height: 80px;
          margin: 0;
          text-transform: uppercase;
          color: var(--font-color);
          transform: rotate(-25deg);
          opacity: 0;
        }

        .rocket__smoke {
          position: absolute;
          width: 50px;
          height: 10px;
          bottom: 5px;
          opacity: 0;
          z-index: 15;
          transition: all 0.5s ease-in-out;
        }

        .rocket__smoke__inner {
          position: relative;
          margin: 30px 0 0 0;
          width: 100%;
          height: 100%;
          background: var(--rocket-smoke);      
        }

        .rocket__smoke__inner div {
          position: absolute;
          border-radius: 50%;
          width: 12px;
          height: 12px;
          left: -5px;
          bottom: 0;
          box-shadow: inset -2px -3px 0 0 var(--rocket-smoke);    
          background: #fff;    
          z-index: 10;      
        }

        .rocket__smoke__inner div:nth-child(1) {
          transform: scale(1.5);
          left: 10%;
          bottom: 30%;
          z-index: 9;
        }

        .rocket__smoke__inner div:nth-child(2) {
          transform: scale(2.5);
          left: 50%;
          bottom: 90%;
          z-index: 8;
        }

        .rocket__smoke__inner div:nth-child(3) {
          transform: scale(1.1);
          left: 84%;
          bottom: 4.5%;
          z-index: 7;
        }

        .rocket__smoke--right {
          right: -30px;
        }

        .rocket__smoke--left {
          left: -30px;
          transform: rotateY(180deg);
        }

        .rocket__fire {
          position: absolute;
          width: 20px;
          height: 20px;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--rocket-fire);
          border-radius: 50%;
          transition: all 0.5s ease-in-out;
          box-shadow: 0 0 20px var(--rocket-fire);
        }

        .rocket__fire:after {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          width: 16px;
          height: 16px;
          background: var(--rocket-fire-highlight);
          border-radius: 50%;
        }

        @keyframes countdown {
          0% { 
            transform: rotate(-25deg) scale(0); 
            opacity: 0;
          }
          50% { 
            transform: rotate(-25deg) scale(1.2); 
            opacity: 1;
          }
          100% { 
            transform: rotate(-25deg) scale(1); 
            opacity: 1;
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .animate-twinkle {
          animation: twinkle 3s infinite;
        }
      `}</style>
    </div>
  );
}
