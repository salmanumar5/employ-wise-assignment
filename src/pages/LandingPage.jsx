import { useNavigate } from "react-router-dom";
import { ArrowRight, Lock, LineChart, Users, LogIn } from "lucide-react";


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">EmployWise</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            EmployWise
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
            Simplify your HR operations
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            The all-in-one platform for modern workforce management.<br />
            Streamline your HR processes and empower your team.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
            >
              <LogIn className="mr-2 h-5 w-5" />
              <span>Login</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors flex items-center"
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-indigo-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Management</h3>
              <p className="text-gray-600">Streamline your workforce operations</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="text-indigo-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Analytics</h3>
              <p className="text-gray-600">Track and improve employee productivity</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-indigo-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Platform</h3>
              <p className="text-gray-600">Enterprise-grade security for your data</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} EmployWise. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
