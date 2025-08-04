
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import CodeExamples from "@/components/CodeExamples";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="dashboard" className="w-full" data-pendo-id="main-navigation-tabs">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="dashboard" data-pendo-id="main-tab-dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="integration" data-pendo-id="main-tab-integration">Integration</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="dashboard" data-pendo-id="dashboard-content">
            <Dashboard />
          </TabsContent>
          
          <TabsContent value="integration" data-pendo-id="integration-content">
            <CodeExamples />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">FIS Code Connect</h3>
              <p className="text-gray-400">Powering financial innovation through seamless integration</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-300 transition-colors" data-pendo-id="footer-privacy-policy">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition-colors" data-pendo-id="footer-terms-service">Terms of Service</a>
              <a href="#" className="hover:text-blue-300 transition-colors" data-pendo-id="footer-support">Support</a>
              <a href="#" className="hover:text-blue-300 transition-colors" data-pendo-id="footer-contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
