import React, { useState } from 'react';
import { 
  Users, 
  HelpCircle, 
  Calendar, 
  Briefcase, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ExternalLink,
  ChevronRight,
  BookmarkPlus,
  Compass,
  Award,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedStaffId, setSelectedStaffId] = useState(null);

  // Solano Team Directory extracted directly from presentation slides
  const staffList = [
    {
      id: "vtarutani",
      name: "Ms. V",
      pronouns: "she/her/hers",
      title: "Director, Solano County",
      department: "Leadership",
      email: "vtarutani@ceoworks.org",
      phone: "415-521-4991",
      bio: "Leads overall operations, community partnerships, and strategic expansion for CEO Solano County.",
      services: ["Program Leadership", "Community Partnerships", "Participant Advocacy", "Escalations"],
      roleHelp: "Executive decisions, community issues, or overall program feedback."
    },
    {
      id: "mmills",
      name: "Dr. Mills",
      pronouns: "he/him/his",
      title: "Director II, Program Services",
      department: "Program Services",
      email: "mmills@ceoworks.org",
      phone: "510-882-3023",
      bio: "Oversees program operations, staff development, and participant service delivery across Solano.",
      services: ["Program Operations", "Service Delivery", "Staff Supervision", "Specialized Supports"],
      roleHelp: "Program structure, service quality, or general program inquiries."
    },
    {
      id: "mtorkildson",
      name: "Ms. Maura",
      pronouns: "she/her/hers",
      title: "Sr. P2E Instructor & Supportive Services Specialist",
      department: "Classroom & Support",
      email: "mtorkildson@ceoworks.org",
      phone: "415-720-4411",
      bio: "Leads Pathway to Employment (P2E) workshops and coordinates supportive service distribution.",
      services: ["P2E Orientation", "Work Readiness Class", "Supportive Services Determination", "Gas & Transit Cards"],
      roleHelp: "Classroom training, orientation dates, or supportive service eligibility."
    },
    {
      id: "mnance",
      name: "Ms. Mariah",
      pronouns: "she/her/hers",
      title: "Retention Specialist",
      department: "Retention & Job Support",
      email: "mnance@ceoworks.org",
      phone: "707-227-9593",
      bio: "Supports participants after securing full-time work to ensure job retention and milestone incentives.",
      services: ["Job Retention Support", "Milestone Rewards", "Workplace Conflict Advice", "Career Advancement"],
      roleHelp: "Help staying employed, reporting work hours, or claiming retention bonuses."
    },
    {
      id: "lgallino",
      name: "Ms. Lola",
      pronouns: "she/her/hers",
      title: "Job Coach",
      department: "Job Coaching",
      email: "lgallino@ceoworks.org",
      phone: "707-227-4144",
      bio: "Provides 1-on-1 job readiness coaching, interview preparation, resume creation, and individual barrier removal.",
      services: ["1-on-1 Job Coaching", "Resume Building", "Interview Prep", "Barrier Removal", "Supportive Services Referral"],
      roleHelp: "Resume creation, interview practice, or finding job leads."
    },
    {
      id: "mocastillo",
      name: "Moises Castillo",
      pronouns: "he/him/his",
      title: "Job Developer / Business Account Manager",
      department: "Employer Relations",
      email: "mocastillo@ceoworks.org",
      phone: "707-903-8771",
      bio: "Connects participants with fair-chance employers, negotiates hiring opportunities, and manages employer partnerships.",
      services: ["Employer Matching", "Fair-Chance Job Openings", "Direct Interview Setup", "Industry Placement"],
      roleHelp: "Connecting with specific hiring managers or applying for featured job openings."
    },
    {
      id: "jbailey",
      name: "Mr. Bailey",
      pronouns: "he/him/his",
      title: "Manager, Social Enterprise",
      department: "Transitional Work",
      email: "jbailey@ceoworks.org",
      phone: "707-914-6450",
      bio: "Manages transitional work crews, worksite safety, van dispatch, and daily work schedules.",
      services: ["Work Crew Scheduling", "Van Pickup & Routes", "Worksite Safety", "Daily Pay Eligibility"],
      roleHelp: "Transitional work crew schedules, van pickups, or work gear."
    },
    {
      id: "soleary",
      name: "Skye O'leary",
      pronouns: "he/him/his",
      title: "Site Supervisor - Solano",
      department: "Transitional Work",
      email: "soleary@ceoworks.org",
      phone: "707-770-8196",
      bio: "Supervises transitional work crews on-site, providing coaching and daily skill evaluation.",
      services: ["On-Site Work Crew Supervision", "Safety Enforcement", "Daily Work Evaluation"],
      roleHelp: "Worksite directions, daily crew check-ins, or safety questions."
    },
    {
      id: "dconey",
      name: "Dylan Coney",
      pronouns: "he/him/his",
      title: "Site Supervisor - Solano",
      department: "Transitional Work",
      email: "dconey@ceoworks.org",
      phone: "707-227-6599",
      bio: "Leads field work crews, supporting participant skill development and daily job site performance.",
      services: ["Field Work Crew Leadership", "Equipment Training", "Workplace Safety"],
      roleHelp: "Worksite supervisor questions or daily crew check-ins."
    },
    {
      id: "mcordell",
      name: "Mekyla Cordell",
      pronouns: "she/her/hers",
      title: "Site Supervisor - Solano",
      department: "Transitional Work",
      email: "mcordell@ceoworks.org",
      phone: "707-903-0550",
      bio: "Guides work crews on field sites with a focus on teamwork, safety, and daily work performance.",
      services: ["Work Crew Supervision", "Skills Training", "On-Site Support"],
      roleHelp: "Worksite check-ins or work crew instructions."
    },
    {
      id: "grideau",
      name: "Gregory Rideau",
      pronouns: "he/him/his",
      title: "Site Supervisor - Solano",
      department: "Transitional Work",
      email: "grideau@ceoworks.org",
      phone: "707-515-0468",
      bio: "Supervises work crews, enforcing safety standards and daily team productivity.",
      services: ["Site Supervision", "Safety Compliance", "Field Instruction"],
      roleHelp: "Field site questions or work crew logistics."
    }
  ];

  const problemCards = [
    { problem: "I need help finding a full-time job", solution: "Job Coach & Job Developer", staffId: "mocastillo" },
    { problem: "I need resume or interview practice", solution: "Job Coach (Ms. Lola)", staffId: "lgallino" },
    { problem: "I have a work crew or van pickup question", solution: "Social Enterprise (Mr. Bailey)", staffId: "jbailey" },
    { problem: "I got hired and need retention support", solution: "Retention Specialist (Ms. Mariah)", staffId: "mnance" },
    { problem: "I need supportive services or work gear", solution: "Start with your Job Coach (Ms. Lola)", staffId: "lgallino" },
    { problem: "I have a question about class or orientation", solution: "P2E Instructor (Ms. Maura)", staffId: "mtorkildson" },
  ];

  const events = [
    { title: "Pathway to Employment (P2E) Orientation", date: "Every Monday", time: "9:00 AM – 12:00 PM", location: "CEO Fairfield Office", desc: "Required work readiness orientation for new participants." },
    { title: "Resume & Online Application Lab", date: "Every Wednesday", time: "1:00 PM – 3:00 PM", location: "CEO Fairfield Computer Lab", desc: "1-on-1 assistance updating resumes and submitting job applications." },
    { title: "Fair Chance Employer Spotlight", date: "Third Thursday of the Month", time: "10:30 AM – 12:00 PM", location: "Fairfield Office / Virtual", desc: "Meet direct hiring managers from local fair-chance employers." }
  ];

  return (
    <div className="min-h-screen bg-[#101010] text-[#f6f6f6] pb-24 font-sans">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      {/* Header Banner */}
      <header className="bg-[#1d1d1d] border-b border-neutral-800 py-6 px-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full bg-[#13b878] text-[#101010] flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">
            ceo
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">CEO Solano Connect</h1>
            <p className="text-slate-400 text-sm mt-0.5">Center for Employment Opportunities • Fairfield & Solano County Hub</p>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main id="main-content" className="max-w-3xl mx-auto px-4 py-6 space-y-8">

        {/* Tab Selection */}
        {activeTab === 'home' && (
          <div className="space-y-8">
            
            {/* Prominent Solano Job Board Link */}
            <div className="bg-gradient-to-r from-[#13b878]/20 to-emerald-900/30 border-2 border-[#13b878] rounded-2xl p-6 text-center shadow-xl">
              <span className="bg-[#13b878] text-[#101010] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Featured Tool</span>
              <h2 className="text-2xl font-black text-white mb-2">Solano Fair Chance Job Board</h2>
              <p className="text-slate-300 text-sm mb-5 max-w-md mx-auto">
                Explore active job openings in Solano County curated specifically for returning citizens and fair-chance candidates.
              </p>
              <a 
                href="https://microblog-mu.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#13b878] hover:bg-[#087d56] text-[#101010] hover:text-white font-extrabold text-base min-h-[56px] px-8 rounded-xl transition-all shadow-lg w-full sm:w-auto"
              >
                <Briefcase className="w-5 h-5" />
                Open Solano Job Board
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Start Here Guide Card */}
            <button 
              onClick={() => setActiveTab('starthere')}
              className="w-full bg-[#1d1d1d] hover:bg-neutral-800 border border-neutral-700 rounded-2xl p-5 text-left transition-all flex items-center justify-between group min-h-[56px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#13b878] transition-colors">New Here? Start Here.</h3>
                  <p className="text-slate-400 text-xs mt-0.5">7 quick steps to work successfully with CEO Solano.</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
            </button>

            {/* Who Can Help Me Section */}
            <section className="bg-[#1d1d1d] border border-neutral-800 rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <HelpCircle className="w-6 h-6 text-[#13b878]" />
                <h3 className="text-xl font-bold text-white">Who Can Help Me?</h3>
              </div>
              <p className="text-slate-400 text-xs mb-4">Select what you need help with to find the right staff contact:</p>
              
              <div className="grid gap-2.5">
                {problemCards.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedStaffId(item.staffId);
                      setActiveTab('team');
                    }}
                    className="w-full bg-[#101010] hover:bg-neutral-800 border border-neutral-800 rounded-xl p-3.5 text-left flex items-center justify-between transition-colors min-h-[56px]"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{item.problem}</p>
                      <p className="text-xs text-[#13b878] font-medium mt-0.5">→ Contact: {item.solution}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                ))}
              </div>
            </section>

            {/* Action Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <button 
                onClick={() => setActiveTab('team')}
                className="bg-[#1d1d1d] hover:bg-neutral-800 border border-neutral-800 p-5 rounded-2xl text-left transition-all min-h-[56px] flex flex-col justify-between"
              >
                <Users className="w-8 h-8 text-[#13b878] mb-3" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Meet Your Team</h3>
                  <p className="text-slate-400 text-xs">Direct phone numbers, emails, and bios for all Solano staff.</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('services')}
                className="bg-[#1d1d1d] hover:bg-neutral-800 border border-neutral-800 p-5 rounded-2xl text-left transition-all min-h-[56px] flex flex-col justify-between"
              >
                <Award className="w-8 h-8 text-blue-400 mb-3" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Services & Support</h3>
                  <p className="text-slate-400 text-xs">Job coaching, work crews, gear, and retention support.</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('calendar')}
                className="bg-[#1d1d1d] hover:bg-neutral-800 border border-neutral-800 p-5 rounded-2xl text-left transition-all min-h-[56px] flex flex-col justify-between"
              >
                <Calendar className="w-8 h-8 text-purple-400 mb-3" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Calendar & Events</h3>
                  <p className="text-slate-400 text-xs">Workshops, orientations, and office event schedules.</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('resources')}
                className="bg-[#1d1d1d] hover:bg-neutral-800 border border-neutral-800 p-5 rounded-2xl text-left transition-all min-h-[56px] flex flex-col justify-between"
              >
                <BookOpen className="w-8 h-8 text-amber-400 mb-3" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Community Resources</h3>
                  <p className="text-slate-400 text-xs">DMV, Social Security, Legal Aid, and transit links.</p>
                </div>
              </button>
            </div>

            {/* Save Site to Home Screen */}
            <div className="bg-[#1d1d1d] border border-neutral-800 rounded-2xl p-5 text-center">
              <BookmarkPlus className="w-8 h-8 text-[#13b878] mx-auto mb-2" />
              <h3 className="text-base font-bold text-white mb-1">Save This Portal to Your Phone</h3>
              <p className="text-slate-400 text-xs mb-3">Keep CEO contacts and tools easily accessible on your home screen:</p>
              <div className="text-xs text-slate-300 space-y-1 bg-[#101010] p-3 rounded-xl max-w-sm mx-auto">
                <p>📱 <strong>iPhone:</strong> Tap Share icon (bottom) ➔ "Add to Home Screen"</p>
                <p>🤖 <strong>Android:</strong> Tap Menu dots (top right) ➔ "Add to Home screen"</p>
              </div>
            </div>

            {/* Direct Office Info */}
            <div className="bg-[#1d1d1d] border border-neutral-800 rounded-2xl p-5 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#13b878]" /> CEO Fairfield Office
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                1411 Oliver Road, Suite 120, Fairfield, CA 94534<br />
                Office Hours: Monday – Friday, 8:00 AM – 5:00 PM
              </p>
              <div className="grid sm:grid-cols-2 gap-2 pt-2">
                <a href="tel:7075150468" className="bg-[#13b878] hover:bg-[#087d56] text-[#101010] hover:text-white font-extrabold text-sm min-h-[56px] px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Phone className="w-4 h-4" /> Call (707) 515-0468
                </a>
                <a href="mailto:referralsfairfield@ceoworks.org" className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm min-h-[56px] px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-neutral-700">
                  <Mail className="w-4 h-4" /> Email Office
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Start Here Page */}
        {activeTab === 'starthere' && (
          <div className="space-y-6">
            <button onClick={() => setActiveTab('home')} className="text-[#13b878] text-xs font-bold flex items-center gap-1 mb-2">
              ← Back to Home
            </button>
            <h2 className="text-2xl font-black text-white">New Here? Start Here.</h2>
            <p className="text-slate-400 text-sm">Follow these 7 steps to get the most out of working with CEO Solano:</p>

            <div className="space-y-3">
              {[
                { step: "1", title: "Save the CEO Office Number", desc: "Add (707) 515-0468 to your phone contacts today." },
                { step: "2", title: "Know Your Job Coach", desc: "Ms. Lola is your main contact for job readiness and interview practice." },
                { step: "3", title: "Check the Calendar", desc: "Attend required orientation and job search workshops on Wednesdays." },
                { step: "4", title: "Prepare Work Documents", desc: "Ensure you have a valid Photo ID and Social Security card ready." },
                { step: "5", title: "Open the Solano Job Board", desc: "Bookmark our live Fair-Chance Job Board to browse active listings." },
                { step: "6", title: "Keep Contacts Updated", desc: "Tell your Job Coach immediately if your phone number or email changes." },
                { step: "7", title: "Check Voicemail & Email Daily", desc: "Employers and CEO staff will call or email with interview offers." }
              ].map((s, idx) => (
                <div key={idx} className="bg-[#1d1d1d] border border-neutral-800 rounded-xl p-4 flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-[#13b878] text-[#101010] font-black text-sm flex items-center justify-center flex-shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-white">{s.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Page */}
        {activeTab === 'team' && (
          <div className="space-y-6">
            <button onClick={() => { setActiveTab('home'); setSelectedStaffId(null); }} className="text-[#13b878] text-xs font-bold flex items-center gap-1 mb-2">
              ← Back to Home
            </button>
            <h2 className="text-2xl font-black text-white">Meet Your Solano Team</h2>
            <p className="text-slate-400 text-sm">Direct contacts for CEO staff in Fairfield and Solano County:</p>

            <div className="space-y-4">
              {staffList.map((staff) => {
                const isHighlighted = selectedStaffId === staff.id;
                return (
                  <div 
                    key={staff.id} 
                    className={`bg-[#1d1d1d] border rounded-2xl p-5 space-y-4 transition-all ${
                      isHighlighted ? 'border-[#13b878] ring-2 ring-[#13b878]/30' : 'border-neutral-800'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-black text-white">{staff.name}</h3>
                        <p className="text-xs text-[#13b878] font-semibold">{staff.title} • <span className="text-slate-400">{staff.pronouns}</span></p>
                        <span className="inline-block bg-neutral-800 text-slate-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-1 border border-neutral-700">
                          {staff.department}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{staff.bio}</p>

                    <div className="bg-[#101010] p-3 rounded-xl border border-neutral-800">
                      <p className="text-xs font-bold text-white mb-2">What I can help you with:</p>
                      <ul className="grid sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                        {staff.services.map((svc, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#13b878] flex-shrink-0" />
                            {svc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2 pt-1">
                      {staff.phone && (
                        <a href={`tel:${staff.phone.replace(/[^0-9]/g, '')}`} className="bg-[#13b878] hover:bg-[#087d56] text-[#101010] hover:text-white font-extrabold text-xs min-h-[48px] px-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
                          <Phone className="w-4 h-4" /> Call {staff.phone}
                        </a>
                      )}
                      {staff.email && (
                        <a href={`mailto:${staff.email}`} className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs min-h-[48px] px-3 rounded-xl flex items-center justify-center gap-2 transition-colors border border-neutral-700">
                          <Mail className="w-4 h-4" /> Email
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Services Page */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <button onClick={() => setActiveTab('home')} className="text-[#13b878] text-xs font-bold flex items-center gap-1 mb-2">
              ← Back to Home
            </button>
            <h2 className="text-2xl font-black text-white">Services & Support</h2>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-xs text-slate-300">
              <p className="font-bold text-amber-400 mb-1">Important Rule for Supportive Services:</p>
              <p>Availability and eligibility vary. Always start by speaking with your <strong>Job Coach (Ms. Lola)</strong> to determine next steps.</p>
            </div>

            <div className="space-y-4">
              {[
                { title: "Job Coaching & Barrier Removal", contact: "Ms. Lola", desc: "1-on-1 career planning, resume support, and workplace problem solving." },
                { title: "Transitional Work Crews & Daily Pay", contact: "Mr. Bailey & Supervisors", desc: "Paid transitional work experience, daily pay program, and work gear." },
                { title: "Fair-Chance Job Placement", contact: "Moises Castillo", desc: "Direct connections to employers in Solano who hire individuals with records." },
                { title: "Job Retention & Bonuses", contact: "Ms. Mariah", desc: "Ongoing support after securing employment, plus retention milestone rewards." },
                { title: "Pathway to Employment (P2E) Class", contact: "Ms. Maura", desc: "Interactive work readiness instruction, communication, and digital literacy skills." }
              ].map((svc, i) => (
                <div key={i} className="bg-[#1d1d1d] border border-neutral-800 rounded-xl p-5 space-y-2">
                  <h3 className="text-lg font-bold text-white">{svc.title}</h3>
                  <p className="text-xs text-slate-400">{svc.desc}</p>
                  <p className="text-xs text-[#13b878] font-bold">Contact: {svc.contact}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Calendar Page */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <button onClick={() => setActiveTab('home')} className="text-[#13b878] text-xs font-bold flex items-center gap-1 mb-2">
              ← Back to Home
            </button>
            <h2 className="text-2xl font-black text-white">Workshops & Events</h2>

            <div className="space-y-3">
              {events.map((ev, i) => (
                <div key={i} className="bg-[#1d1d1d] border border-neutral-800 rounded-xl p-5 space-y-2">
                  <span className="bg-purple-500/20 text-purple-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase border border-purple-500/30">
                    {ev.date}
                  </span>
                  <h3 className="text-lg font-bold text-white">{ev.title}</h3>
                  <p className="text-xs text-slate-300">⏰ {ev.time} • 📍 {ev.location}</p>
                  <p className="text-xs text-slate-400">{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources Page */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <button onClick={() => setActiveTab('home')} className="text-[#13b878] text-xs font-bold flex items-center gap-1 mb-2">
              ← Back to Home
            </button>
            <h2 className="text-2xl font-black text-white">Community Resources</h2>

            <div className="space-y-3">
              {[
                { title: "Solano County Fresh Start Program", desc: "FREE expungement, felony reduction, and record sealing.", phone: "(707) 784-6700" },
                { title: "Fairfield DMV Office", desc: "Driver's license and California Photo ID assistance.", link: "https://www.dmv.ca.gov" },
                { title: "Social Security Administration (Fairfield)", desc: "Free replacement Social Security cards.", phone: "1-800-772-1213" },
                { title: "America's Job Center (WIB Solano)", desc: "Free computer access, job fairs, and career grants.", phone: "(707) 863-3500" }
              ].map((res, i) => (
                <div key={i} className="bg-[#1d1d1d] border border-neutral-800 rounded-xl p-5 space-y-2">
                  <h3 className="text-base font-bold text-white">{res.title}</h3>
                  <p className="text-xs text-slate-400">{res.desc}</p>
                  {res.phone && <p className="text-xs text-[#13b878] font-bold">📞 {res.phone}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Fixed Bottom Mobile Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1d1d1d]/95 backdrop-blur-md border-t border-neutral-800 py-2 px-3 z-50">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 min-w-[56px] min-h-[48px] justify-center text-xs font-bold transition-colors ${
              activeTab === 'home' ? 'text-[#13b878]' : 'text-slate-400'
            }`}
          >
            <Compass className="w-5 h-5" />
            Home
          </button>

          <button 
            onClick={() => setActiveTab('team')}
            className={`flex flex-col items-center gap-1 min-w-[56px] min-h-[48px] justify-center text-xs font-bold transition-colors ${
              activeTab === 'team' ? 'text-[#13b878]' : 'text-slate-400'
            }`}
          >
            <Users className="w-5 h-5" />
            Team
          </button>

          <button 
            onClick={() => setActiveTab('calendar')}
            className={`flex flex-col items-center gap-1 min-w-[56px] min-h-[48px] justify-center text-xs font-bold transition-colors ${
              activeTab === 'calendar' ? 'text-[#13b878]' : 'text-slate-400'
            }`}
          >
            <Calendar className="w-5 h-5" />
            Events
          </button>

          <a 
            href="https://microblog-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 min-w-[56px] min-h-[48px] justify-center text-xs font-bold text-emerald-400 hover:text-white"
          >
            <Briefcase className="w-5 h-5" />
            Jobs ↗
          </a>
        </div>
      </nav>
    </div>
  );
}
