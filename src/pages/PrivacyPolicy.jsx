import React, { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  Eye,
  Settings,
  Mail,
  Phone,
  Lock,
  Shield,
  Activity,
  CheckCircle2
} from 'lucide-react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('info');
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-slate-50 min-h-screen font-sans text-slate-800">

      {/* Privacy Policy Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100/50 shadow-sm mb-8 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl font-bold text-blue-950 mb-3">Privacy Policy</h1>
          <p className="text-slate-600 leading-relaxed mb-4">
            At HealthPulse, your health data is handled with the utmost confidentiality and integrity. We
            are committed to protecting your privacy and providing a secure healthcare environment.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
            <CheckCircle2 size={14} />
            Last Updated: {lastUpdated}
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-200/20 to-transparent pointer-events-none" />
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">


        <div className="lg:col-span-1 sticky top-6 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Contents</p>
            <nav className="space-y-1">
              {[
                { id: 'info', label: 'Information Collection' },
                { id: 'usage', label: 'Data Usage' },
                { id: 'rights', label: 'Patient Rights' },
                { id: 'security', label: 'Security Measures' },
                { id: 'contact', label: 'Contact Compliance' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* HIPAA Compliance Badge */}
          <div className="bg-blue-600 text-white rounded-xl p-5 shadow-sm border border-blue-700">
            <div className="flex items-center gap-2.5 mb-3">
              <ShieldCheck className="text-blue-100" size={24} />
              <h3 className="font-bold tracking-wide">HIPAA Compliant</h3>
            </div>
            <p className="text-xs text-blue-100 leading-relaxed">
              Our systems are fully compliant with federal healthcare regulations.
            </p>
          </div>
        </div>

        {/* Right Main Policy Content */}
        <div className="lg:col-span-3 space-y-6">

          {/* Section: Information Collection */}
          <section id="info" className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm scroll-mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <FileText size={22} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Information Collection</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              HealthPulse collects information necessary to provide high-quality medical care and maintain efficient operations. This includes:
            </p>
            <ul className="space-y-2.5 text-sm mb-6 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span className="text-slate-600"><strong className="text-slate-800">Personal Identification:</strong> Name, date of birth, government IDs, and contact details.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span className="text-slate-600"><strong className="text-slate-800">Clinical Records:</strong> Medical history, lab results, imaging, and treatment plans.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span className="text-slate-600"><strong className="text-slate-800">Financial Information:</strong> Insurance details, billing addresses, and payment history.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span className="text-slate-600"><strong className="text-slate-800">Technical Data:</strong> IP addresses and browser information when using our Patient Portal.</span>
              </li>
            </ul>
            <div className="bg-blue-50/70 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-sm italic text-blue-950 font-medium">
                We do not sell your personal or medical data to third-party marketers.
              </p>
            </div>
          </section>

          {/* Section: Data Usage */}
          <section id="usage" className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm scroll-mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <Settings size={22} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Data Usage</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Your data is processed only for authorized purposes within the healthcare ecosystem:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Direct Patient Care</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Sharing data between your primary physician and specialists to ensure continuous care.</p>
              </div>
              <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Billing & Operations</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Managing insurance claims and streamlining clinical workflows.</p>
              </div>
              <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Legal Compliance</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Responding to public health requirements or court orders as mandated by law.</p>
              </div>
              <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Service Improvement</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Using anonymized data to analyze wait times and facility efficiency.</p>
              </div>
            </div>
          </section>

          {/* Section: Patient Rights */}
          <section id="rights" className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm scroll-mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Eye size={22} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Patient Rights</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Under federal regulations, you have specific rights regarding your medical records:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Eye size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Right to Inspect</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">You can request to review or receive a copy of your health and billing records.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Right to Amend</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">If you believe your record is incorrect, you may request a formal amendment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Right to Disclosure Accounting</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">You can request a list of times we've shared your health information for certain reasons.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Security Measures */}
          <section id="security" className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm scroll-mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <ShieldCheck size={22} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Security Measures</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              We employ enterprise-grade security protocols to safeguard your sensitive information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center p-3">
                <Lock className="text-blue-600 mb-2" size={26} />
                <span className="text-xs font-bold text-slate-800">256-bit Encryption</span>
              </div>
              <div className="flex flex-col items-center p-3">
                <Shield className="text-blue-600 mb-2" size={26} />
                <span className="text-xs font-bold text-slate-800">Biometric Access</span>
              </div>
              <div className="flex flex-col items-center p-3">
                <Activity className="text-blue-600 mb-2" size={26} />
                <span className="text-xs font-bold text-slate-800">24/7 Monitoring</span>
              </div>
            </div>
          </section>

          {/* Section: Contact Privacy Office */}
          <section id="contact" className="bg-gradient-to-b from-slate-50 to-slate-100 rounded-xl border border-slate-200 p-6 shadow-sm scroll-mt-6">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Contact Privacy Office</h3>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              If you have questions about this policy or wish to exercise your rights, please contact our dedicated compliance officer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-500">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-blue-600">privacy@healthpulse.com</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-500">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">Compliance Line</p>
                  <p className="text-sm font-semibold text-slate-800">1-800-SAFE-DATA</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}