
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Download, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CodeExamples = () => {
  const codeExamples = {
    javascript: `// FIS Code Connect - Account Balance API
import { FISConnect } from '@fis/code-connect';

const client = new FISConnect({
  apiKey: process.env.FIS_API_KEY,
  environment: 'production' // or 'sandbox'
});

async function getAccountBalance(accountId) {
  try {
    const response = await client.accounts.getBalance({
      accountId: accountId,
      includeAvailable: true
    });
    
    return {
      currentBalance: response.currentBalance,
      availableBalance: response.availableBalance,
      currency: response.currency,
      lastUpdated: response.lastUpdated
    };
  } catch (error) {
    console.error('Balance retrieval failed:', error);
    throw error;
  }
}`,

    python: `# FIS Code Connect - Payment Processing API
import fis_connect

client = fis_connect.Client(
    api_key=os.getenv('FIS_API_KEY'),
    environment='production'  # or 'sandbox'
)

def process_payment(payment_data):
    try:
        response = client.payments.create({
            'amount': payment_data['amount'],
            'currency': payment_data['currency'],
            'source_account': payment_data['from_account'],
            'destination_account': payment_data['to_account'],
            'description': payment_data['description']
        })
        
        return {
            'transaction_id': response.transaction_id,
            'status': response.status,
            'confirmation_number': response.confirmation_number
        }
    except fis_connect.APIError as e:
        print(f"Payment failed: {e}")
        raise`,

    curl: `# FIS Code Connect - Customer Data API
curl -X GET "https://api.fiscode.connect/v1/customers/12345" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -H "FIS-Environment: production"

# Response
{
  "customer_id": "12345",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "accounts": [
    {
      "account_id": "acc_789",
      "type": "checking",
      "balance": 1250.75,
      "status": "active"
    }
  ],
  "last_transaction": "2024-01-15T10:30:00Z"
}`
  };

  const apiEndpoints = [
    { method: "GET", endpoint: "/v1/accounts/{id}/balance", description: "Retrieve account balance" },
    { method: "POST", endpoint: "/v1/payments", description: "Process payment transaction" },
    { method: "GET", endpoint: "/v1/customers/{id}", description: "Get customer information" },
    { method: "POST", endpoint: "/v1/webhooks", description: "Register webhook endpoint" },
    { method: "GET", endpoint: "/v1/transactions", description: "List recent transactions" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Integration Examples</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get started quickly with our comprehensive code examples and API documentation. 
          Choose your preferred programming language and start building.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2" data-pendo-id="integration-examples-main">
          <Card data-pendo-id="code-examples-main-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Code Examples
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" data-pendo-id="code-examples-copy-button">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button size="sm" variant="outline" data-pendo-id="code-examples-download-button">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700" data-pendo-id="code-examples-sandbox-button">
                    <Play className="h-4 w-4 mr-2" />
                    Run in Sandbox
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>
                Ready-to-use code snippets for common FIS integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="w-full" data-pendo-id="code-examples-tabs">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="javascript" data-pendo-id="code-tab-javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python" data-pendo-id="code-tab-python">Python</TabsTrigger>
                  <TabsTrigger value="curl" data-pendo-id="code-tab-curl">cURL</TabsTrigger>
                </TabsList>
                
                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card data-pendo-id="api-endpoints-card">
            <CardHeader>
              <CardTitle>API Endpoints</CardTitle>
              <CardDescription>Available FIS Code Connect APIs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {apiEndpoints.map((api, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          api.method === 'GET' ? 'border-green-500 text-green-700' : 
                          'border-blue-500 text-blue-700'
                        }`}
                      >
                        {api.method}
                      </Badge>
                      <code className="text-sm font-mono text-gray-700">{api.endpoint}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">{api.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card data-pendo-id="quick-links-card">
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" size="sm" data-pendo-id="quick-link-api-docs">
                📚 API Documentation
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm" data-pendo-id="quick-link-sandbox">
                🔧 Sandbox Environment
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm" data-pendo-id="quick-link-api-keys">
                🔑 API Key Management
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm" data-pendo-id="quick-link-analytics">
                📊 Usage Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm" data-pendo-id="quick-link-support">
                💬 Developer Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CodeExamples;
