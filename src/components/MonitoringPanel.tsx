
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Radar, Play, Pause, RotateCcw, Eye, AlertCircle, CheckCircle } from 'lucide-react';

const MonitoringPanel = () => {
  const [isScanning, setIsScanning] = useState(true);
  const [scanProgress, setScanProgress] = useState(67);
  const [lastScan, setLastScan] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      if (isScanning) {
        setScanProgress(prev => {
          const newProgress = prev + Math.random() * 5;
          if (newProgress >= 100) {
            setLastScan(new Date());
            return Math.random() * 20;
          }
          return newProgress;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isScanning]);

  const scanSources = [
    { name: 'Tor Hidden Services', status: 'active', threats: 12, lastCheck: '2 min ago' },
    { name: 'Paste Sites', status: 'active', threats: 3, lastCheck: '1 min ago' },
    { name: 'Forums & Markets', status: 'scanning', threats: 0, lastCheck: 'now' },
    { name: 'Telegram Channels', status: 'active', threats: 7, lastCheck: '3 min ago' },
    { name: 'Underground APIs', status: 'pending', threats: 1, lastCheck: '5 min ago' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 glow-blue">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Radar className="h-5 w-5 text-blue-400" />
              <span>Scanning Control</span>
            </CardTitle>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant={isScanning ? "destructive" : "default"}
                onClick={() => setIsScanning(!isScanning)}
                className="glow-blue"
              >
                {isScanning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isScanning ? 'Pause' : 'Resume'}
              </Button>
              <Button size="sm" variant="outline" onClick={() => setScanProgress(0)}>
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Scan Progress</span>
                <span>{Math.round(scanProgress)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 relative"
                  style={{ width: `${scanProgress}%` }}
                >
                  {isScanning && (
                    <div className="absolute inset-0 bg-white/30 animate-scan-line"></div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Last Complete Scan:</span>
                <div className="font-mono text-green-400">{lastScan.toLocaleTimeString()}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Status:</span>
                <div className="flex items-center space-x-1">
                  {isScanning ? (
                    <>
                      <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse-cyber"></div>
                      <span className="text-green-400">Scanning</span>
                    </>
                  ) : (
                    <>
                      <div className="h-2 w-2 bg-orange-400 rounded-full"></div>
                      <span className="text-orange-400">Paused</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-cyan-400" />
            <span>Monitoring Sources</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {scanSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/20 border border-border/30">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    {source.status === 'active' && <CheckCircle className="h-4 w-4 text-green-400" />}
                    {source.status === 'scanning' && <div className="h-4 w-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />}
                    {source.status === 'pending' && <AlertCircle className="h-4 w-4 text-orange-400" />}
                    <span className="font-medium">{source.name}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant={source.threats > 0 ? "destructive" : "secondary"} className="text-xs">
                    {source.threats} threats
                  </Badge>
                  <span className="text-xs text-muted-foreground">{source.lastCheck}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonitoringPanel;
