const Connect = () => {
  return (
    <section className="bg-[#0F0F2E] py-20 px-4 sm:px-8 lg:px-20 mb-30 ">
      <div className="max-w-7xl mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Smaller Label */}
            <p className="text-white text-xs uppercase tracking-wider mb-4">
              WHY CHOOSE US
            </p>

            {/* Smaller Heading */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Track your crypto portfolio on the best way possible
            </h1>

            {/* Smaller Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Mean if he they been no hold mr. Is at much do made.
              <br />
              Latter person am secure of estate genius at.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="flex flex-col gap-4 ">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-6 py-4 rounded-lg bg-[#1E1E3F] text-white placeholder-gray-400 border border-transparent focus:border-[#5D5FEF] focus:outline-none transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-4 rounded-lg bg-[#1E1E3F] text-white placeholder-gray-400 border border-transparent focus:border-[#5D5FEF] focus:outline-none transition"
            />
            <button className="w-full px-6 py-4 bg-[#5D5FEF] text-white font-semibold rounded-lg hover:bg-[#4a4bd0] transition duration-300">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
