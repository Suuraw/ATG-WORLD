import HeroImage from "../assets/HeroImage.png";

export default function GroupHeader() {
  return (
    <div className="relative h-[300px]">
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Computer Engineering"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
      </div>

      <button className="absolute top-4 left-4 lg:hidden z-10">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h1 className="text-4xl font-bold mb-2">Computer Engineering</h1>
        <p className="text-lg opacity-90">
          3,42,765 Computer Engineers follow this
        </p>
      </div>
      <button className="lg:hidden px-4 py-2 text-sm font-medium absolute top-4 right-4 z-10 text-white bg-transparent rounded-lg border border-white hover:bg-gray-800">
        Join Group
      </button>
    </div>
  );
}
