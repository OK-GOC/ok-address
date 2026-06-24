function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-10 text-center space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            OK Group of Companies
          </h1>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-yellow-400 font-medium uppercase tracking-wider mb-1">Phone</p>
              <a href="tel:+9595064567" className="text-white hover:text-yellow-400 transition-colors">
                09 5064567
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left min-w-0">
              <p className="text-sm text-yellow-400 font-medium uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:info@okgroupofcompanies.business" className="text-white hover:text-yellow-400 transition-colors break-all text-sm md:text-base">
                info@okgroupofcompanies.business
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-slate-800 rounded-xl p-5">
            <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-yellow-400 font-medium uppercase tracking-wider mb-1">Address</p>
              <p className="text-white leading-relaxed">
                No.45, Rose Garden,<br />
                Shwe Pinlon Housing, Shukinthar Street,<br />
                27 Quarter, North Dagon,<br />
                Yangon Township
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
