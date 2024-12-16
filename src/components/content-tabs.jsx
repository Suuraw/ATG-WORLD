import arrow from "../assets/arrow1.png";
import facebook from "../assets/facebook.png";

export default function ContentTabs() {
  return (
    <div className="sticky top-0 bg-white z-10 shadow-sm">
      <div className="flex items-center justify-between py-4 px-4 lg:hidden">
        <h2 className="text-lg font-semibold">Posts(368)</h2>
        <button className="px-4 py-2 text-sm font-medium bg-gray-100 rounded-lg flex items-center gap-2">
          Filter: All
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex items-center justify-between border-b px-4">
        <div className="flex">
          <button className="px-4 py-4 text-sm font-medium border-b-2 border-black">
            All Posts(32)
          </button>
          <button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-black">
            Article
          </button>
          <button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-black">
            Event
          </button>
          <button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-black">
            Education
          </button>
          <button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-black">
            Job
          </button>
        </div>

    
        <div className="flex items-center gap-4">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg  gap-2">
            Write a Post
            <img src={arrow} className="w-4 h-4" alt="Arrow" />
          </button>

          <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg ">
            <img src={facebook} className="w-4 h-4" alt="Facebook" />
            <button className="">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
