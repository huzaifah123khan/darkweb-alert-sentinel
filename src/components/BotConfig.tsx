
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Bot, MessageSquare, Mail, Smartphone, Settings, CheckCircle, AlertCircle } from 'lucide-react';

const BotConfig = () => {
  const botChannels = [
    {
      name: 'Telegram Bot',
      icon: <MessageSquare className="h-4 w-4" />,
      status: 'connected',
      lastMessage: '2 min ago',
      enabled: true,
      channel: '@security_alerts',
      messagesSent: 1247
    },
    {
      name: 'Slack Integration', 
      icon: <MessageSquare className="h-4 w-4" />,
      status: 'connected',
      lastMessage: '2 min ago',
      enabled: true,
      channel: '#security-alerts',
      messagesSent: 892
    },
    {
      name: 'Email Alerts',
      icon: <Mail className="h-4 w-4" />,
      status: 'connected',
      lastMessage: '15 min ago',
      enabled: true,
      channel: 'security@company.com',
      messagesSent: 156
    },
    {
      name: 'SMS Alerts',
      icon: <Smartphone className="h-4 w-4" />,
      status: 'pending',
      lastMessage: 'Never',
      enabled: false,
      channel: '+1-***-***-9876',
      messagesSent: 0
    }
  ];

  const alertTypes = [
    { name: 'Critical Threats', enabled: true, count: 23 },
    { name: 'Data Breaches', enabled: true, count: 45 },
    { name: 'API Key Leaks', enabled: true, count: 12 },
    { name: 'Domain Mentions', enabled: false, count: 0 },
    { name: 'Employee Data', enabled: true, count: 8 },
    { name: 'System Status', enabled: false, count: 0 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-purple-400" />
            <span>Notification Channels</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {botChannels.map((bot, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/20 border border-border/30">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    {bot.icon}
                    <div>
                      <h4 className="font-medium text-sm">{bot.name}</h4>
                      <p className="text-xs text-muted-foreground">{bot.channel}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-right text-xs">
                    <div className="flex items-center space-x-1">
                      {bot.status === 'connected' ? (
                        <CheckCircle className="h-3 w-3 text-green-400" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-orange-400" />
                      )}
                      <span className="text-muted-foreground">{bot.lastMessage}</span>
                    </div>
                    <div className="text-muted-foreground">{bot.messagesSent} sent</div>
                  </div>
                  <Switch checked={bot.enabled} />
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full mt-4">
              <Settings className="h-4 w-4 mr-2" />
              Configure Channels
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <span>Alert Filters</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">
              Configure which types of alerts to send to notification channels
            </p>
            
            {alertTypes.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/20 border border-border/30">
                <div className="flex items-center space-x-3">
                  <div>
                    <h4 className="font-medium text-sm">{alert.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {alert.count} alerts this month
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Badge 
                    variant={alert.enabled ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {alert.enabled ? 'Active' : 'Disabled'}
                  </Badge>
                  <Switch checked={alert.enabled} />
                </div>
              </div>
            ))}
            
            <div className="pt-4 border-t border-border/30">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Total alerts sent today:</span>
                <Badge variant="outline" className="font-mono">
                  127
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BotConfig;
