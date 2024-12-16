import Education from "../assets/Education.png"
import EducationProfile from "../assets/EducationProfile.png"
export default function EducationCard() {
  return (
    <div className="max-w-2xl mx-auto mt-6 bg-white rounded-lg shadow">
      <img
        src={Education}
        alt="Education course banner"
        className="w-full h-[220px] object-cover rounded-t-lg"
      />
      
      <div className="p-4">
        <span className="text-sm font-bold">🎓 Education</span>
        
        <div className="flex items-start justify-between mt-2">
          <h2 className="text-xl font-bold">
            Tax Benefits for Investment under National Pension Scheme launched by Government
          </h2>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
        
        <p className="mt-2 text-gray-600 line-clamp-2">
          I've worked in UX for the better part of a decade. From now on, I plan to rei...
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
             src={EducationProfile}
              alt="Sarah West"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="font-bold">Sarah West</p>
              <p className="text-sm text-gray-500">1.4k views</p>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600">
            <button className="flex items-center px-3 py-2 space-x-2 bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center mt-4 text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Mumbai, India
        </div>
      </div>
    </div>
  )
}

