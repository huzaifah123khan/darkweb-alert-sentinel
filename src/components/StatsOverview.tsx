
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Shield, AlertTriangle, Eye, Database, Globe } from 'lucide-react';

const StatsOverview = () => {
  const stats = [
    {
      title: 'Total Threats Detected',
      value: '1,247',
      change: '+12%',
      trend: 'up',
      icon: <AlertTriangle className="h-4 w-4 text-red-400" />,
      color: 'red'
    },
    {
      title: 'Sources Monitored',
      value: '156',
      change: '+3',
      trend: 'up', 
      icon: <Eye className="h-4 w-4 text-blue-400" />,
      color: 'blue'
    },
    {
      title: 'Data Points Scanned',
      value: '2.4M',
      change: '+8.2%',
      trend: 'up',
      icon: <Database className="h-4 w-4 text-green-400" />,
      color: 'green'
    },
    {
      title: 'Active Monitoring',
      value: '24/7',
      change: '99.9%',
      trend: 'stable',
      icon: <Shield className="h-4 w-4 text-purple-400" />,
      color: 'purple'
    },
    {
      title: 'Networks Covered',
      value: '47',
      change: '+2',
      trend: 'up',
      icon: <Globe className="h-4 w-4 text-cyan-400" />,
      color: 'cyan'
    },
    {
      title: 'Response Time',
      value: '< 2min',
      change: '-15%',
      trend: 'down',
      icon: <TrendingUp className="h-4 w-4 text-orange-400" />,
      color: 'orange'
    }
  ];

  const getGlowClass = (color: string) => {
    switch (color) {
      case 'red': return 'glow-red';
      case 'blue': return 'glow-blue';
      case 'green': return 'glow-green';
      case 'purple': return 'hover:shadow-purple-500/20';
      case 'cyan': return 'hover:shadow-cyan-500/20';
      case 'orange': return 'glow-orange';
      default: return '';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className={`bg-card/50 backdrop-blur-sm border-border/50 transition-all hover:scale-105 ${getGlowClass(stat.color)}`}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className={`text-xs flex items-center space-x-1 ${
                stat.trend === 'up' ? 'text-green-400' : 
                stat.trend === 'down' ? 'text-red-400' : 
                'text-muted-foreground'
              }`}>
                {stat.trend === 'up' && <TrendingUp className="h-3 w-3" />}
                {stat.trend === 'down' && <TrendingUp className="h-3 w-3 rotate-180" />}
                <span>{stat.change}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
