import JobProfile from "../assets/Job.png"
export default function JobCard() {
  return (
    <div className="max-w-2xl mx-auto mt-6 bg-white rounded-lg shadow">
      <div className="p-4">
        <span className="text-sm font-bold">💼 Job</span>
        
        <div className="flex items-start justify-between mt-2">
          <h2 className="text-xl font-bold">
            Software Developer
          </h2>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center mt-2 space-x-4 text-sm text-black-600">
          <div className="flex items-center font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Innovaccer Analytics Private Ltd.
          </div>
          <div className="flex items-center font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Noida, India
          </div>
        </div>
        <button className="w-full mt-4 px-4 py-2 text-sm  text-green-500 font-semibold bg-white border rounded-lg  border-gray-400">
          Apply on Timesjobs
        </button>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              src={JobProfile}
              alt="Joseph Gray"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="font-bold">Joseph Gray</p>
              <p className="text-sm text-gray-500">1.4k views</p>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600">
            <button className="flex items-center px-3 py-2 space-x-2 bg-gray-100 rounded-lg ">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

