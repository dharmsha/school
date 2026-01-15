'use client';

import { useState } from 'react';
import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import QuickTools from "@/components/QuickToolCard"
import SubjectCard  from "@/components/SubjectCard"
import TrendingResources from "@/components/TrendingResources";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="pb-20">
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <StatsGrid />
        
        <TrendingResources activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}