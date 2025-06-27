
import { Code, Activity, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Code className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">FIS Code Connect</h1>
              <p className="text-blue-200 text-sm">Financial Integration Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-300 transition-colors">APIs</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Documentation</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Sandbox</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Support</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800">
              <Activity className="h-4 w-4 mr-2" />
              Status
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
