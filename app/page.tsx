'use client'

import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import TheorySection from './components/TheorySection'
import PracticeSection from './components/PracticeSection'
import ExamSection from './components/ExamSection'
import ProgressTracker from './components/ProgressTracker'
import AITutor from './components/AITutor'

export default function Home() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [selectedLevel, setSelectedLevel] = useState<'havo4' | 'havo5'>('havo4')
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard selectedLevel={selectedLevel} />
      case 'theory':
        return <TheorySection selectedLevel={selectedLevel} />
      case 'practice':
        return <PracticeSection selectedLevel={selectedLevel} />
      case 'exams':
        return <ExamSection selectedLevel={selectedLevel} />
      case 'progress':
        return <ProgressTracker selectedLevel={selectedLevel} />
      default:
        return <Dashboard selectedLevel={selectedLevel} />
    }
  }

  // Show loading state until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Laden...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BE</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  Bedrijfseconomie HAVO
                </h1>
              </div>
            </div>
            
            {/* Level Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Niveau:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as 'havo4' | 'havo5')}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="havo4">HAVO 4</option>
                <option value="havo5">HAVO 5</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <Navigation 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {renderActiveSection()}
          </div>
        </main>

        {/* AI Tutor Sidebar */}
        <AITutor selectedLevel={selectedLevel} />
      </div>
    </div>
  )
}