import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, AlertCircle, Loader2, LogIn, Asterisk, IdCard } from "lucide-react";


const FloatingShieldIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);


const FloatingChartIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <rect x="6" y="10" width="2.5" height="11" rx="0.5" />
    <rect x="11" y="6" width="2.5" height="15" rx="0.5" />
    <rect x="16" y="12" width="2.5" height="9" rx="0.5" />
    <path d="M3 17l5-6 4 3 9-10" />
  </svg>
);


const BrandIcon = () => (
  <div className="w-16 h-16 bg-[#00346b] rounded-xl flex items-center justify-center shadow-lg mb-4">
    <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <line x1="12" y1="11" x2="12" y2="17" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  </div>
);

const AdminSignin = () => {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!adminId.trim()) {
      setError("Please enter your admin ID or email address.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-x-hidden selection:bg-[#00346b]/10"
      style={{
        backgroundColor: "#f6faff",
        backgroundImage: "radial-gradient(#d1e3f8 1.5px, transparent 1.5px)",
        backgroundSize: "32px 32px"
      }}
    >
     
      <FloatingShieldIcon className="fixed -top-6 -right-6 text-[#00346b]/[0.08] w-[260px] h-[260px] pointer-events-none hidden md:block" />
      
      
      <FloatingChartIcon className="fixed -bottom-6 -left-6 text-[#00346b]/[0.08] w-[260px] h-[260px] pointer-events-none hidden md:block" />

   
      <div className="flex flex-col items-center text-center mb-6 z-10">
        <BrandIcon />
        <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-1">
          MediCenter
        </h1>
        <p className="text-slate-500 text-sm font-semibold tracking-wide">
          HealthPulse Admin Portal
        </p>
      </div>

      {/* Card Sign-in Form */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/80 max-w-[460px] w-full z-10 transition-all duration-300">
        <div className="mb-6">
          <h2 className="text-slate-900 text-2xl font-bold tracking-tight mb-1.5">
            Welcome back
          </h2>
          <p className="text-slate-500 text-[13.5px] leading-relaxed">
            Enter your credentials to manage hospital operations.
          </p>
        </div>

        {/* Input validation error banner */}
        {error && (
          <div className="flex items-start gap-3 bg-red-50 border border-red-150 rounded-xl p-3.5 text-red-700 text-xs mb-5 animate-fade-in">
            <AlertCircle size={16} className="flex-shrink-0 text-red-500 mt-0.5" />
            <p className="font-semibold">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Admin ID Field */}
          <div className="space-y-1.5">
            <label htmlFor="admin-id" className="block text-slate-500 text-[11px] font-bold uppercase tracking-wider select-none">
              Admin ID / Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <IdCard size={19} className="stroke-[1.75]" />
              </div>
              <input
                id="admin-id"
                type="text"
                placeholder="e.g. AD-99234 or email@hospital.com"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50/60 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00346b] focus:ring-4 focus:ring-[#00346b]/10 transition-all duration-200 text-sm font-medium"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-slate-500 text-[11px] font-bold uppercase tracking-wider select-none">
                Password
              </label>
              <Link
                to="#"
                onClick={() => alert("Please contact the IT support administrator to reset security credentials.")}
                className="text-[#00346b] hover:text-[#002247] text-xs font-bold transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <svg className="w-5 h-5 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3 bg-slate-50/60 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00346b] focus:ring-4 focus:ring-[#00346b]/10 transition-all duration-200 text-sm font-medium"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                tabIndex="-1"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember device checkbox */}
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-[18px] w-[18px] text-[#00346b] focus:ring-[#00346b] border-slate-300 rounded cursor-pointer transition-all"
              disabled={isLoading}
            />
            <label htmlFor="remember" className="ml-2.5 block text-slate-600 text-xs font-semibold cursor-pointer select-none">
              Remember this device for 30 days
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#00346b] hover:bg-[#002247] text-white py-3.5 px-4 rounded-xl font-semibold text-sm shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Authenticating Terminal...</span>
              </>
            ) : (
              <>
                <span>Sign In as Admin</span>
                <LogIn size={16} className="stroke-[2.5] mt-0.5" />
              </>
            )}
          </button>
        </form>

        {/* HIPAA audit warning & Support Links */}
        <div className="border-t border-slate-100 mt-6 pt-5 text-center">
          <p className="text-[11px] text-slate-400/90 leading-relaxed font-medium mb-3">
            Secure access for authorized personnel only. All activities are logged for auditing and security compliance (HIPAA).
          </p>
          <div className="flex justify-center gap-6 text-xs font-semibold text-slate-500">
            <Link to="#" className="hover:text-[#00346b] transition-colors">
              Support
            </Link>
            <Link to="#" className="hover:text-[#00346b] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Emergency capsule banner */}
      <div className="mt-8 z-10 flex items-center justify-center gap-2 bg-[#FEF2F2] border border-[#FCA5A5]/25 rounded-full px-5 py-2 hover:bg-red-100/50 transition-colors duration-200">
        <Asterisk size={14} className="text-[#B91C1C] stroke-[3.5] animate-pulse" />
        <span className="text-[#B91C1C] text-xs font-bold tracking-wide">
          IT Emergency: Ext. 4444
        </span>
      </div>
    </div>
  );
};

export default AdminSignin;