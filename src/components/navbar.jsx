import arrow from "../assets/arrow.jpg";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <div className="hidden lg:flex items-center ml-8">
        <h1 className="text-2xl text-green-600 font-extralight">
          ATG.<span className="text-gray-600 font-normal">WORLD</span>
        </h1>
      </div>

      <div className="hidden lg:flex flex-1 max-w-xl mx-4">
        <div className="relative w-full">
          <input
            type="search"
            placeholder="Search for your favorite groups in ATG"
            className="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none font-bold "
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="hidden lg:flex items-center mr-6">
        <button className="text-sm">
          Create account.{" "}
          <span className="text-blue-500 font-bold">It's free!</span>
        </button>
        <img src={arrow} className="w-5 h-5" alt="Arrow" />
      </div>
    </nav>
  );
}
