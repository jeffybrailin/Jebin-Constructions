'use client'

import React from 'react'

export const ConstructionAnimation: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '340px' }}>

      {/* === SKY === */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2c5c] via-[#1a4a8a] to-[#2e6fc4]" />

      {/* Stars (subtle dots) */}
      <div className="absolute top-3 left-8 w-1 h-1 bg-white rounded-full opacity-60" />
      <div className="absolute top-6 left-24 w-1 h-1 bg-white rounded-full opacity-40" />
      <div className="absolute top-2 right-16 w-1 h-1 bg-white rounded-full opacity-50" />
      <div className="absolute top-10 right-40 w-1 h-1 bg-white rounded-full opacity-30" />

      {/* SUN */}
      <div
        className="absolute top-6 right-16 w-14 h-14 rounded-full"
        style={{
          background: 'radial-gradient(circle, #FFE566 30%, #FFA500 80%, transparent 100%)',
          boxShadow: '0 0 30px 10px rgba(255,200,50,0.35)',
          animation: 'sunFloat 6s ease-in-out infinite',
        }}
      />



      {/* === GROUND === */}
      {/* Dirt/earth layer */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#5c3a1e] to-[#7a5230]" />
      {/* Top soil strip */}
      <div className="absolute bottom-16 w-full h-4 bg-[#8B6914]" />
      {/* Road/path */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#4a4a4a]" />
      {/* Road markings */}
      <div className="absolute bottom-3 left-[20%] w-12 h-1.5 bg-yellow-400 opacity-70 rounded" />
      <div className="absolute bottom-3 left-[45%] w-12 h-1.5 bg-yellow-400 opacity-70 rounded" />
      <div className="absolute bottom-3 left-[70%] w-12 h-1.5 bg-yellow-400 opacity-70 rounded" />

      {/* === BUILDING (left-center) === */}
      <div className="absolute bottom-20 left-[15%] w-28 flex flex-col-reverse">
        {/* Floor 1 */}
        {[0, 1, 2, 3].map((floor) => (
          <div
            key={floor}
            className="w-full border border-gray-400"
            style={{
              height: '40px',
              background: floor === 0 ? '#b0b8c8' : '#c8cfd8',
              animation: `floorReveal 0.4s ease-out ${floor * 0.3}s both`,
            }}
          >
            {/* Windows row */}
            <div className="flex justify-around items-center h-full px-1">
              {[0, 1, 2].map((w) => (
                <div
                  key={w}
                  style={{
                    width: 8,
                    height: 12,
                    background: floor % 2 === 0 ? '#67c8f5' : '#a3d9f5',
                    boxShadow: '0 0 4px rgba(100,200,255,0.6)',
                    animation: `windowFlicker ${2 + w * 0.7}s ease-in-out infinite`,
                    animationDelay: `${w * 0.4 + floor * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
        {/* Rooftop */}
        <div className="w-full h-3 bg-[#8a9ab0] border border-gray-500" />
      </div>

      {/* === TALLER BUILDING (right-center) === */}
      <div className="absolute bottom-20 right-[22%] w-20 flex flex-col-reverse">
        {[0, 1, 2, 3, 4, 5].map((floor) => (
          <div
            key={floor}
            className="w-full border border-gray-500"
            style={{
              height: '32px',
              background: floor < 2 ? '#a0aabc' : '#bcc5d0',
              animation: `floorReveal 0.4s ease-out ${floor * 0.25}s both`,
            }}
          >
            <div className="flex justify-around items-center h-full px-1">
              {[0, 1].map((w) => (
                <div
                  key={w}
                  style={{
                    width: 7,
                    height: 10,
                    background: '#7dd3fa',
                    boxShadow: '0 0 6px rgba(100,200,255,0.7)',
                    animation: `windowFlicker ${1.8 + w * 0.9}s ease-in-out infinite`,
                    animationDelay: `${w * 0.5 + floor * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="w-full h-3 bg-[#7a8a9c] border border-gray-600" />
      </div>

      {/* === CRANE === */}
      <div className="absolute" style={{ bottom: '80px', right: '38%' }}>
        {/* Vertical mast */}
        <div
          className="absolute"
          style={{
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 10,
            height: 130,
            background: 'linear-gradient(to right, #f59e0b, #d97706)',
            borderRadius: 2,
          }}
        />
        {/* Horizontal jib arm */}
        <div
          className="absolute"
          style={{
            top: 0,
            left: -60,
            width: 130,
            height: 8,
            background: 'linear-gradient(to bottom, #fbbf24, #d97706)',
            borderRadius: 2,
            transformOrigin: '50% 50%',
            animation: 'craneJibSwing 5s ease-in-out infinite',
          }}
        >
          {/* Hanging load cable */}
          <div
            style={{
              position: 'absolute',
              right: 10,
              top: '100%',
              width: 2,
              height: 30,
              background: '#555',
              animation: 'loadSwing 5s ease-in-out infinite',
            }}
          >
            {/* Load box */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: -8,
                width: 18,
                height: 14,
                background: '#CC5500',
                borderRadius: 2,
                border: '1px solid #a04000',
              }}
            />
          </div>
        </div>
      </div>

      {/* === EXCAVATOR === */}
      <div
        className="absolute"
        style={{
          bottom: '24px',
          left: '55%',
          animation: 'vehicleRoll 8s linear infinite',
        }}
      >
        {/* Body */}
        <div style={{ position: 'relative', width: 56, height: 28 }}>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: 56,
              height: 20,
              background: '#f59e0b',
              borderRadius: 4,
            }}
          />
          {/* Cab */}
          <div
            style={{
              position: 'absolute',
              bottom: 18,
              left: 6,
              width: 22,
              height: 16,
              background: '#d97706',
              borderRadius: '4px 4px 0 0',
            }}
          >
            {/* Window */}
            <div style={{ width: 10, height: 8, background: '#bae6fd', margin: '3px auto', borderRadius: 1 }} />
          </div>
          {/* Arm */}
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              right: 2,
              width: 28,
              height: 6,
              background: '#92400e',
              borderRadius: 3,
              transformOrigin: 'left center',
              animation: 'digArm 2s ease-in-out infinite',
            }}
          >
            {/* Bucket */}
            <div
              style={{
                position: 'absolute',
                right: -6,
                bottom: -6,
                width: 12,
                height: 10,
                background: '#78350f',
                borderRadius: '0 0 4px 4px',
              }}
            />
          </div>
          {/* Tracks */}
          <div style={{ position: 'absolute', bottom: -5, left: 2, width: 52, height: 8, background: '#374151', borderRadius: 3 }}>
            <div style={{ position: 'absolute', top: 1, left: 4, width: 8, height: 6, background: '#4b5563', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: 1, left: 20, width: 8, height: 6, background: '#4b5563', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: 1, left: 36, width: 8, height: 6, background: '#4b5563', borderRadius: '50%' }} />
          </div>
        </div>
      </div>

      {/* === WORKER 1 (walks left-right) === */}
      <div
        className="absolute"
        style={{
          bottom: '26px',
          left: '30%',
          animation: 'workerBob 4s ease-in-out infinite',
        }}
      >
        {/* Hard hat */}
        <div style={{ width: 12, height: 6, background: '#f59e0b', borderRadius: '50% 50% 0 0', margin: '0 auto' }} />
        {/* Head */}
        <div style={{ width: 10, height: 10, background: '#fde68a', borderRadius: '50%', margin: '0 auto' }} />
        {/* Body (vest) */}
        <div style={{ width: 14, height: 16, background: '#f97316', borderRadius: '2px 2px 0 0', margin: '0 auto' }} />
        {/* Legs */}
        <div style={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <div style={{ width: 5, height: 10, background: '#1f2937', borderRadius: 2, animation: 'legSwing 0.6s ease-in-out infinite alternate' }} />
          <div style={{ width: 5, height: 10, background: '#1f2937', borderRadius: 2, animation: 'legSwing 0.6s ease-in-out infinite alternate-reverse' }} />
        </div>
      </div>

      {/* === WORKER 2 === */}
      <div
        className="absolute"
        style={{
          bottom: '26px',
          left: '40%',
          animation: 'workerBob 3.5s ease-in-out infinite',
          animationDelay: '-1s',
        }}
      >
        <div style={{ width: 12, height: 6, background: '#ef4444', borderRadius: '50% 50% 0 0', margin: '0 auto' }} />
        <div style={{ width: 10, height: 10, background: '#fde68a', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 14, height: 16, background: '#3b82f6', borderRadius: '2px 2px 0 0', margin: '0 auto' }} />
        <div style={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <div style={{ width: 5, height: 10, background: '#1f2937', borderRadius: 2, animation: 'legSwing 0.5s ease-in-out infinite alternate-reverse' }} />
          <div style={{ width: 5, height: 10, background: '#1f2937', borderRadius: 2, animation: 'legSwing 0.5s ease-in-out infinite alternate' }} />
        </div>
      </div>




      {/* === DUST PARTICLES === */}
      {[10, 25, 40, 60, 75].map((left, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-yellow-200 opacity-20"
          style={{
            bottom: '28px',
            left: `${left}%`,
            width: 6 + i * 2,
            height: 6 + i * 2,
            animation: `dustFloat ${2 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* === TITLE OVERLAY (no button here) === */}
      <div className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none">
        <div className="text-center text-white px-4 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-heading font-bold drop-shadow-lg tracking-wide">
            Building Dreams
          </h1>
          <p className="text-lg md:text-xl mt-2 drop-shadow-md opacity-90">
            Modern Construction Solutions for Tomorrow
          </p>
        </div>
      </div>

      {/* === KEYFRAME STYLES === */}
      <style>{`
        @keyframes sunFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes floorReveal {
          from { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
          to   { opacity: 1; transform: scaleY(1); }
        }
        @keyframes windowFlicker {
          0%, 100% { opacity: 1; }
          45%      { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        @keyframes craneJibSwing {
          0%, 100% { transform: rotate(-4deg); }
          50%      { transform: rotate(4deg); }
        }
        @keyframes loadSwing {
          0%, 100% { transform: rotate(-6deg); }
          50%      { transform: rotate(6deg); }
        }
        @keyframes vehicleRoll {
          0%   { transform: translateX(0); }
          45%  { transform: translateX(-90px); }
          50%  { transform: translateX(-90px) scaleX(-1); }
          95%  { transform: translateX(0) scaleX(-1); }
          100% { transform: translateX(0); }
        }
        @keyframes digArm {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(-25deg); }
        }
        @keyframes workerBob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
        @keyframes legSwing {
          from { transform: rotate(-15deg); }
          to   { transform: rotate(15deg); }
        }
        @keyframes dustFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.15; }
          50%      { transform: translateY(-12px) scale(1.3); opacity: 0.25; }
        }
      `}</style>
    </div>
  )
}
