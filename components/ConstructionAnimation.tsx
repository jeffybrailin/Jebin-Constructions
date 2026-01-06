'use client'

import React from 'react'

export const ConstructionAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600 dark:from-blue-900 dark:to-blue-800">
      {/* Sky */}
      <div className="absolute inset-0">
        {/* Clouds */}
        <div className="absolute top-10 left-10 w-20 h-10 bg-white bg-opacity-30 rounded-full animate-slide-right" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-20 right-20 w-16 h-8 bg-white bg-opacity-30 rounded-full animate-slide-left" style={{ animationDuration: '25s' }}></div>
        <div className="absolute top-5 left-1/2 w-24 h-12 bg-white bg-opacity-20 rounded-full animate-slide-right" style={{ animationDuration: '30s' }}></div>
      </div>

      {/* Construction Site */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-yellow-600 to-yellow-500">
        {/* Ground */}
        <div className="absolute bottom-0 w-full h-8 bg-yellow-700"></div>
        
        {/* Building Structure */}
        <div className="absolute bottom-8 left-1/4 w-16 h-24 bg-gray-300 border-2 border-gray-400 animate-build-up" style={{ animationDuration: '3s' }}>
          {/* Windows */}
          <div className="absolute top-4 left-2 w-3 h-3 bg-blue-400"></div>
          <div className="absolute top-4 right-2 w-3 h-3 bg-blue-400"></div>
          <div className="absolute top-10 left-2 w-3 h-3 bg-blue-400"></div>
          <div className="absolute top-10 right-2 w-3 h-3 bg-blue-400"></div>
        </div>

        {/* Crane */}
        <div className="absolute bottom-8 right-1/3">
          {/* Crane Base */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-16 bg-gray-600"></div>
          {/* Crane Arm */}
          <div className="absolute top-0 left-1/2 w-24 h-2 bg-gray-700 transform -translate-x-1/2 animate-crane-swing" style={{ animationDuration: '4s' }}>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gray-800"></div>
          </div>
        </div>

        {/* Construction Worker */}
        <div className="absolute bottom-8 right-1/4 animate-worker-walk" style={{ animationDuration: '5s' }}>
          <div className="w-4 h-6 bg-orange-500 rounded-t-lg">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-300 rounded-full"></div>
          </div>
        </div>

        {/* Construction Vehicle */}
        <div className="absolute bottom-8 left-1/2 animate-vehicle-move" style={{ animationDuration: '6s' }}>
          <div className="w-12 h-8 bg-orange-600 rounded">
            <div className="absolute -top-2 left-2 w-4 h-4 bg-gray-800 rounded-full"></div>
            <div className="absolute -top-2 right-2 w-4 h-4 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

