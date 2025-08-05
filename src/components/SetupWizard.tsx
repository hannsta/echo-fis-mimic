import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, ArrowRight, ArrowLeft, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SetupWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    integrationType: "",
    environment: "",
    apiKey: "",
    secretKey: "",
    endpoint: ""
  });
  const { toast } = useToast();

  const steps = [
    { id: 1, title: "Choose Integration", description: "Select your FIS API integration type" },
    { id: 2, title: "Configure Credentials", description: "Set up your API credentials and environment" },
    { id: 3, title: "Test Connection", description: "Verify your integration settings" },
    { id: 4, title: "Review & Deploy", description: "Final review and go live" }
  ];

  const integrationTypes = [
    { value: "payment-processing", label: "Payment Processing API", complexity: "Medium" },
    { value: "account-management", label: "Account Management API", complexity: "High" },
    { value: "transaction-history", label: "Transaction History API", complexity: "Low" },
    { value: "risk-assessment", label: "Risk Assessment API", complexity: "High" }
  ];

  const handleNext = () => {
    // Simulate validation friction points that Pendo could track
    if (currentStep === 1 && !formData.integrationType) {
      toast({
        title: "Selection Required",
        description: "Please select an integration type to continue.",
        variant: "destructive"
      });
      return;
    }
    
    if (currentStep === 2 && (!formData.apiKey || !formData.secretKey)) {
      toast({
        title: "Credentials Required", 
        description: "Both API Key and Secret Key are required.",
        variant: "destructive"
      });
      return;
    }

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleTestConnection = () => {
    // Simulate connection test with potential failure
    const isSuccess = Math.random() > 0.3; // 70% success rate to demo UX issues
    
    if (isSuccess) {
      toast({
        title: "Connection Successful",
        description: "Your API integration is configured correctly."
      });
      setTimeout(() => setCurrentStep(4), 1500);
    } else {
      toast({
        title: "Connection Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    }
  };

  const handleDeploy = () => {
    toast({
      title: "Integration Deployed!",
      description: "Your FIS API integration is now live."
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2" data-pendo-id="setup-wizard-title">
          API Integration Setup
        </h1>
        <p className="text-gray-600">
          Set up your FIS API integration in just a few steps
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8" data-pendo-id="setup-progress-tracker">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep > step.id 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : currentStep === step.id
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'bg-gray-200 border-gray-300 text-gray-500'
                }`} data-pendo-id={`setup-step-${step.id}-indicator`}>
                  {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
              <div className="text-center mt-2">
                <div className="text-sm font-medium text-gray-900">{step.title}</div>
                <div className="text-xs text-gray-500">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle data-pendo-id={`setup-step-${currentStep}-title`}>
            {steps[currentStep - 1].title}
          </CardTitle>
          <CardDescription>
            {steps[currentStep - 1].description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && (
            <div className="space-y-4" data-pendo-id="integration-type-selection">
              <Label htmlFor="integration-type">Select Integration Type</Label>
              <Select 
                value={formData.integrationType} 
                onValueChange={(value) => setFormData(prev => ({...prev, integrationType: value}))}
                data-pendo-id="integration-type-dropdown"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose your FIS API integration" />
                </SelectTrigger>
                <SelectContent>
                  {integrationTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value} data-pendo-id={`integration-option-${type.value}`}>
                      <div className="flex items-center justify-between w-full">
                        <span>{type.label}</span>
                        <Badge variant={type.complexity === 'High' ? 'destructive' : type.complexity === 'Medium' ? 'default' : 'secondary'}>
                          {type.complexity}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formData.integrationType && (
                <div className="p-4 bg-blue-50 rounded-lg" data-pendo-id="integration-info-panel">
                  <h4 className="font-medium text-blue-900 mb-2">Integration Details</h4>
                  <p className="text-sm text-blue-800">
                    You've selected {integrationTypes.find(t => t.value === formData.integrationType)?.label}. 
                    This integration will provide secure access to FIS financial services.
                  </p>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4" data-pendo-id="credentials-configuration">
              <div>
                <Label htmlFor="environment">Environment</Label>
                <Select 
                  value={formData.environment}
                  onValueChange={(value) => setFormData(prev => ({...prev, environment: value}))}
                  data-pendo-id="environment-selector"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sandbox" data-pendo-id="env-sandbox">Sandbox (Testing)</SelectItem>
                    <SelectItem value="staging" data-pendo-id="env-staging">Staging</SelectItem>
                    <SelectItem value="production" data-pendo-id="env-production">Production</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="api-key">API Key</Label>
                <Input
                  id="api-key"
                  type="password"
                  placeholder="Enter your FIS API key"
                  value={formData.apiKey}
                  onChange={(e) => setFormData(prev => ({...prev, apiKey: e.target.value}))}
                  data-pendo-id="api-key-input"
                />
              </div>
              
              <div>
                <Label htmlFor="secret-key">Secret Key</Label>
                <Input
                  id="secret-key"
                  type="password"
                  placeholder="Enter your secret key"
                  value={formData.secretKey}
                  onChange={(e) => setFormData(prev => ({...prev, secretKey: e.target.value}))}
                  data-pendo-id="secret-key-input"
                />
              </div>
              
              <div>
                <Label htmlFor="endpoint">Custom Endpoint (Optional)</Label>
                <Input
                  id="endpoint"
                  placeholder="https://api.fis.com/custom-endpoint"
                  value={formData.endpoint}
                  onChange={(e) => setFormData(prev => ({...prev, endpoint: e.target.value}))}
                  data-pendo-id="endpoint-input"
                />
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg flex items-start space-x-2" data-pendo-id="security-warning">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800">Security Notice</h4>
                  <p className="text-sm text-yellow-700">
                    Your credentials are encrypted and stored securely. Never share your API keys with unauthorized users.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4" data-pendo-id="connection-testing">
              <div className="text-center p-8">
                <h3 className="text-lg font-medium mb-4">Test Your Connection</h3>
                <p className="text-gray-600 mb-6">
                  We'll verify your API credentials and test the connection to FIS servers.
                </p>
                <Button 
                  onClick={handleTestConnection}
                  size="lg"
                  data-pendo-id="test-connection-button"
                >
                  Test Connection
                </Button>
              </div>
              
              <div className="border rounded-lg p-4" data-pendo-id="connection-details">
                <h4 className="font-medium mb-2">Connection Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Integration Type:</span>
                    <span className="font-medium">{integrationTypes.find(t => t.value === formData.integrationType)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Environment:</span>
                    <span className="font-medium capitalize">{formData.environment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>API Key:</span>
                    <span className="font-medium">***...{formData.apiKey.slice(-4)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4" data-pendo-id="deployment-review">
              <div className="text-center p-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-4">Ready to Deploy!</h3>
                <p className="text-gray-600 mb-6">
                  Your FIS API integration has been configured and tested successfully. 
                  Click deploy to make it live.
                </p>
                <Button 
                  onClick={handleDeploy}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  data-pendo-id="deploy-integration-button"
                >
                  Deploy Integration
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between" data-pendo-id="wizard-navigation">
        <Button 
          variant="outline" 
          onClick={handleBack}
          disabled={currentStep === 1}
          data-pendo-id="wizard-back-button"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        
        {currentStep < 3 && (
          <Button 
            onClick={handleNext}
            data-pendo-id="wizard-next-button"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SetupWizard;