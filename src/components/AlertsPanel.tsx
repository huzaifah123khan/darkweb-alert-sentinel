
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, Eye, ExternalLink, Calendar, MapPin } from 'lucide-react';

const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      severity: 'critical',
      title: 'Corporate Email Database Found',
      description: 'Database containing 2,847 employee emails discovered on underground forum',
      source: 'RaidForums Mirror',
      timestamp: '2 minutes ago',
      location: 'Tor Hidden Service',
      matched: ['company.com', 'internal emails'],
      status: 'new'
    },
    {
      id: 2,
      severity: 'high',
      title: 'Leaked API Keys Detected',
      description: 'Production API keys found in paste site dump',
      source: 'Pastebin Scraper',
      timestamp: '15 minutes ago',
      location: 'Public Paste',
      matched: ['api_key_prod', 'aws_secret'],
      status: 'investigating'
    },
    {
      id: 3,
      severity: 'medium',
      title: 'Domain Referenced in Threat Actor Chat',
      description: 'Company domain mentioned in cybercriminal Telegram channel',
      source: 'Telegram Monitor',
      timestamp: '1 hour ago',
      location: 'Private Channel',
      matched: ['targetcompany.com'],
      status: 'acknowledged'
    },
    {
      id: 4,
      severity: 'low',
      title: 'Historical Breach Data Circulating',
      description: 'Old breach data from 2019 being reshared',
      source: 'Forum Scanner',
      timestamp: '3 hours ago',
      location: 'Dark Web Forum',
      matched: ['old_user_db.sql'],
      status: 'resolved'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'high': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <AlertTriangle className="h-4 w-4 text-red-400" />;
      case 'high': return <AlertTriangle className="h-4 w-4 text-orange-400" />;
      case 'medium': return <Shield className="h-4 w-4 text-yellow-400" />;
      case 'low': return <Eye className="h-4 w-4 text-blue-400" />;
      default: return <Eye className="h-4 w-4" />;
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <span>Active Threat Alerts</span>
          </CardTitle>
          <Badge variant="destructive" className="animate-pulse-cyber">
            {alerts.filter(a => a.status === 'new').length} New
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-4 rounded-lg border transition-all hover:bg-background/30 ${
                alert.status === 'new' ? 'glow-red' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {getSeverityIcon(alert.severity)}
                  <div>
                    <h4 className="font-semibold text-sm">{alert.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{alert.description}</p>
                  </div>
                </div>
                <Badge className={getSeverityColor(alert.severity)} variant="outline">
                  {alert.severity.toUpperCase()}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground mb-3">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{alert.timestamp}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{alert.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs text-muted-foreground">Matched:</span>
                {alert.matched.map((match, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {match}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={alert.status === 'new' ? 'destructive' : 'outline'} 
                    className="text-xs"
                  >
                    {alert.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">from {alert.source}</span>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
