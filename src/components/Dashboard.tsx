
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Clock, ArrowRight, Code, Database, Zap } from "lucide-react";

const Dashboard = () => {
  const apiStatus = [
    { name: "Core Banking API", status: "operational", uptime: "99.9%" },
    { name: "Payment Processing", status: "operational", uptime: "99.8%" },
    { name: "Risk Management", status: "maintenance", uptime: "98.1%" },
    { name: "Customer Data", status: "operational", uptime: "99.9%" },
  ];

  const recentActivity = [
    { action: "API Key Generated", service: "Payment Gateway", time: "2 minutes ago" },
    { action: "Webhook Configured", service: "Transaction Alerts", time: "15 minutes ago" },
    { action: "Integration Test", service: "Core Banking", time: "1 hour ago" },
    { action: "Sandbox Reset", service: "Development", time: "3 hours ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Start Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to FIS Code Connect</h2>
            <p className="text-gray-600 mb-4">
              Connect to our financial services APIs and start building powerful integrations in minutes.
            </p>
            <div className="flex space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Code className="h-4 w-4 mr-2" />
                View Documentation
              </Button>
              <Button variant="outline">
                Try Sandbox
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <pre className="text-sm text-gray-700">
{`// Quick Start Example
const fis = new FISConnect({
  apiKey: 'your-api-key',
  environment: 'sandbox'
});

const balance = await fis.accounts
  .getBalance('account-123');`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
            <Database className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Calls Today</CardTitle>
            <Zap className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      {/* API Status and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>API Service Status</CardTitle>
            <CardDescription>Real-time status of all FIS services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {apiStatus.map((api, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {api.status === 'operational' ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : api.status === 'maintenance' ? (
                      <Clock className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    <span className="font-medium">{api.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={api.status === 'operational' ? 'default' : 'secondary'}
                      className={api.status === 'operational' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {api.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{api.uptime}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest integration and API activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.service}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
