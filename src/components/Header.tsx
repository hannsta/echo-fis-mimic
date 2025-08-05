
import { Code, Activity, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3" data-pendo-id="header-logo">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Code className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">FIS Code Connect</h1>
              <p className="text-blue-200 text-sm">Financial Integration Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4" data-pendo-id="header-main-navigation">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:text-blue-300 transition-colors ${isActive('/') ? 'bg-blue-700 text-blue-100' : ''}`}
              data-pendo-id="header-nav-dashboard"
            >
              Dashboard
            </Link>
            <Link 
              to="/integration" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:text-blue-300 transition-colors ${isActive('/integration') ? 'bg-blue-700 text-blue-100' : ''}`}
              data-pendo-id="header-nav-integration"
            >
              Integration
            </Link>
            <Link 
              to="/setup" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:text-blue-300 transition-colors ${isActive('/setup') ? 'bg-blue-700 text-blue-100' : ''}`}
              data-pendo-id="header-nav-setup"
            >
              Setup
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2" data-pendo-id="header-action-buttons">
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 px-2" data-pendo-id="header-button-status">
              <Activity className="h-4 w-4" />
              <span className="sr-only">Status</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 px-2" data-pendo-id="header-button-settings">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800 px-2" data-pendo-id="header-button-user">
              <User className="h-4 w-4" />
              <span className="sr-only">User Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
