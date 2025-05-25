
import { useEffect } from 'react';
import Header from '@/components/Header';
import StatsOverview from '@/components/StatsOverview';
import MonitoringPanel from '@/components/MonitoringPanel';
import AlertsPanel from '@/components/AlertsPanel';
import BotConfig from '@/components/BotConfig';

const Index = () => {
  useEffect(() => {
    // Set dark theme by default for the cybersecurity aesthetic
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 cyber-grid">
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Threat Intelligence Dashboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring of dark web sources, underground forums, and threat feeds 
            to detect data breaches, leaked credentials, and corporate intelligence threats.
          </p>
        </div>

        <StatsOverview />
        
        <MonitoringPanel />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <AlertsPanel />
          </div>
          <div className="xl:col-span-1">
            <div className="space-y-6">
              <BotConfig />
            </div>
          </div>
        </div>
      </div>
      
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

export default Index;
