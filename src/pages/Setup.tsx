import Header from "@/components/Header";
import SetupWizard from "@/components/SetupWizard";

const Setup = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <SetupWizard />
      </main>
    </div>
  );
};

export default Setup;