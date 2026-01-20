import React, { useState, useEffect } from 'react';
import { 
  Terminal, Code2, ShieldCheck, Zap, 
  ChevronRight, Database, Globe, Cpu,
  Send, Activity, User, BookOpen, Award,
  FileDown, Github, Linkedin, ExternalLink
} from 'lucide-react';

// Custom LeetCode Icon Component
const LeetCodeIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.323 4.32a1.09 1.09 0 0 0 0 1.556 1.09 1.09 0 0 0 1.556 0l4.323-4.32A1.09 1.09 0 0 0 13.483 0zm-5.278 5.688a1.1 1.1 0 0 0-1.556 0l-4.323 4.322a1.09 1.09 0 0 0 0 1.555c.134.134.315.209.511.209h7.545a1.1 1.1 0 0 0 0-2.2H5.817l4.323-4.322a1.1 1.1 0 0 0 0-1.555c-.134-.134-.315-.209-.511-.209h-.024zM22.178 11.648a1.1 1.1 0 0 0-1.556 0l-4.323 4.322a1.101 1.101 0 0 0 1.556 1.555l4.323-4.322a1.1 1.1 0 0 0 0-1.555zM13.483 18.272a1.1 1.1 0 0 0-1.556 0l-4.323 4.322a1.101 1.101 0 0 0 1.556 1.555l4.323-4.322a1.1 1.1 0 0 0 0-1.555z"/>
  </svg>
);

const VITE_API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

const API_BASE = `${VITE_API_BASE}/api/v1`;

const endpoints = [
  { id: 'identity', method: 'GET', path: '/identity', icon: <User size={18}/>, description: 'Candidate identity & contact' },
  { id: 'skills', method: 'GET', path: '/skills', icon: <Cpu size={18}/>, description: 'Technical stack breakdown' },
  { id: 'projects', method: 'GET', path: '/projects', icon: <Code2 size={18}/>, description: 'Project portfolio with filters' },
  { id: 'problem-solving', method: 'GET', path: '/problem-solving', icon: <Zap size={18}/>, description: 'DSA & Competitive stats' },
  { id: 'education', method: 'GET', path: '/education', icon: <BookOpen size={18}/>, description: 'Academic background' },
  { id: 'achievements', method: 'GET', path: '/achievements', icon: <Award size={18}/>, description: 'Certifications & Honors' },
  { 
    id: 'hire', 
    method: 'POST', 
    path: '/hire', 
    icon: <Send size={18}/>, 
    description: 'Contact & Hiring Inquiry', 
    body: { 
      company: 'Zoho Corporation', 
      role: 'Java Backend Developer', 
      email: 'hr@zoho.com',
      message: 'We are impressed by your Headless Portfolio. Let us discuss a Java role.'
    } 
  },
  { id: 'stats', method: 'GET', path: '/stats', icon: <Activity size={18}/>, description: 'Real-time API analytics' },
];

function App() {
  const [activeEp, setActiveEp] = useState(endpoints[0]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [requestBody, setRequestBody] = useState(JSON.stringify(endpoints[0].body || {}, null, 2));

  const executeRequest = async () => {
    setLoading(true);
    try {
      const options = {
        method: activeEp.method,
        headers: { 'Content-Type': 'application/json' },
      };
      if (activeEp.method === 'POST') options.body = requestBody;

      const start = performance.now();
      const res = await fetch(`${API_BASE}${activeEp.path}`, options);
      const data = await res.json();
      const duration = (performance.now() - start).toFixed(0);

      setResponse({ status: res.status, duration, data, headers: Object.fromEntries(res.headers) });
    } catch (err) {
      setResponse({ status: 'Error', data: { message: 'Failed to connect to backend' } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full" />
      </div>

      {/* UPDATED NAVBAR */}
      <nav className="border-b border-white/5 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 md:px-6 h-16 flex items-center justify-between gap-2">
          
          {/* Left Side: Logo */}
          <div className="flex items-center gap-1.5 md:gap-2 group shrink-0">
            <div className="bg-blue-600 p-1 md:p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Terminal size={16} className="text-white md:w-5 md:h-5" />
            </div>
            <span className="font-bold text-white tracking-tight text-sm md:text-lg">
              M.A.S<span className="text-blue-500">.</span>
            </span>
          </div>

          {/* Center/Right: Socials & Actions */}
          <div className="flex items-center gap-2 md:gap-6">
            
            {/* Social Links - Now visible on all screens */}
            <div className="flex items-center gap-3 md:gap-4 md:border-r md:border-white/10 md:pr-4">
              <a href="https://github.com/Siddiq4712" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-abubacker-siddiq-h-ab378428a2" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="https://leetcode.com/u/Siddiq4712/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-orange-400 transition-colors">
                <LeetCodeIcon size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>

            {/* Download Button */}
            <a 
              href={`${API_BASE}/identity/resume`}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-400 px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg text-[10px] md:text-sm font-medium transition-all active:scale-95 shrink-0"
            >
              <FileDown size={14} className="md:w-[18px] md:h-[18px]" />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </a>

            {/* Status Dot - Text hidden on very small mobile to save space */}
            <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20 shrink-0">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest hidden xs:block">Online</span>
            </div>
            
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* UPDATED SIDEBAR HEADER */}
        <div className="lg:col-span-4 space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight uppercase">Mohamed Abubacker Siddiq H</h1>
            <p className="text-slate-500 leading-relaxed mb-6">
              Full Stack Developer & Competitive Programmer. Proving backend expertise through an API-first architecture.
            </p>

            {/* {/* NEW SOCIALS GRID */}
            {/* <div className="grid grid-cols-3 gap-3">
              <a href="https://github.com/Siddiq4712" target="_blank" className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group">
                <Github size={20} className="text-slate-400 group-hover:text-white" />
                <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/mohamed-abubacker-siddiq-h-ab378428a2" target="_blank" className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-blue-600/10 hover:border-blue-500/30 transition-all group">
                <Linkedin size={20} className="text-slate-400 group-hover:text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">LinkedIn</span>
              </a>
              <a href="https://leetcode.com/u/Siddiq4712/" target="_blank" className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-orange-600/10 hover:border-orange-500/30 transition-all group">
                <LeetCodeIcon size={20} className="text-slate-400 group-hover:text-orange-400" />
                <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">LeetCode</span>
              </a>
            </div> */}
          </div>

          {/* Existing endpoints mapping */}
          <div className="space-y-2">
            {endpoints.map((ep) => (
              <button
                key={ep.id}
                onClick={() => { 
                  setActiveEp(ep); 
                  setResponse(null); 
                  if(ep.body) setRequestBody(JSON.stringify(ep.body, null, 2)) 
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
                  activeEp.id === ep.id 
                  ? 'bg-blue-600/10 border-blue-500/50 text-white shadow-lg shadow-blue-500/5' 
                  : 'bg-white/5 border-white/5 hover:border-white/10 text-slate-400'
                }`}
              >
                <span className={`p-2 rounded-lg ${activeEp.id === ep.id ? 'bg-blue-500 text-white' : 'bg-slate-800'}`}>
                  {ep.icon}
                </span>
                <div className="text-left">
                  <div className="text-xs font-bold opacity-50 uppercase tracking-widest">{ep.method}</div>
                  <div className="font-mono text-sm">{ep.path}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content: Terminal & Output */}
        <div className="lg:col-span-8 space-y-6">
          {/* Request Panel */}
          <div className="bg-[#121214] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Request Console</span>
              </div>
              <button 
                onClick={executeRequest}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all active:scale-95"
              >
                {loading ? 'Executing...' : <>Run Request <ChevronRight size={16}/></>}
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span className="text-blue-500 font-bold font-mono uppercase">{activeEp.method}</span>
                <span className="text-slate-500 font-mono">/api/v1{activeEp.path}</span>
              </div>
              
              {activeEp.method === 'POST' && (
                <textarea
                  value={requestBody}
                  onChange={(e) => setRequestBody(e.target.value)}
                  className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-sm focus:border-blue-500/50 outline-none transition-colors"
                />
              )}
            </div>
          </div>

          {/* Response Panel */}
          <div className="bg-[#121214] rounded-2xl border border-white/5 overflow-hidden shadow-2xl flex flex-col min-h-[400px]">
            <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database size={16} className="text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Response Body</span>
              </div>
              {response && (
                <div className="flex gap-4 text-[10px] font-bold uppercase tracking-tighter">
                  <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-4">
                    STATUS: {response.status}
                  </span>
                  <span className="text-blue-400">TIME: {response.duration}ms</span>
                </div>
              )}
            </div>
            
            <div className="p-6 flex-grow font-mono text-sm overflow-auto max-h-[500px] custom-scrollbar">
              {response ? (
                <pre className="text-blue-100/80 leading-relaxed whitespace-pre-wrap">
                  {JSON.stringify(response.data, null, 2)}
                </pre>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-4 opacity-50">
                  <Globe size={48} strokeWidth={1} />
                  <p>Awaiting request execution...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm italic">
          "Architecture is the art of how to waste space." - Built with Node.js, Express & React.
        </p>
      </footer>
    </div>
  );
}

export default App;
