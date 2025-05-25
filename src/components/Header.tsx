
import { Shield, Activity, AlertTriangle } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-card/50 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-blue-400 glow-blue" />
              <div className="absolute inset-0 h-8 w-8 text-blue-400 animate-pulse-cyber opacity-50">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                DarkWeb Alert Sentinel
              </h1>
              <p className="text-sm text-muted-foreground">Advanced Threat Monitoring System</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
              <Activity className="h-4 w-4 text-green-400 animate-pulse-cyber" />
              <span className="text-sm text-green-400 font-medium">System Online</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <AlertTriangle className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">2 Active Alerts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
