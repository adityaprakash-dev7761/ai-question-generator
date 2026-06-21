// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="h-screen bg-linear-to-r from-yellow-100 to-yellow-50 flex flex-col justify-center items-center text-center px-4">

//       <h1 className="text-5xl font-bold mb-6">
//         Ace Interviews with{" "}
//         <span className="text-orange-500">AI-Powered</span> Learning
//       </h1>

//       <p className="text-gray-600 max-w-xl mb-6">
//         G
//       </p>

//       <button
//         onClick={() => navigate("/login")}
//         className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition"
//       >
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default LandingPage;

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Interview<span className="text-blue-500">AI</span>
          </h1>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 rounded-lg border border-slate-700 hover:bg-slate-900 transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
              AI-Powered Interview Preparation Platform
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight">
              Master Your
              <span className="text-blue-500"> Interviews </span>
              With AI
            </h1>

            <p className="text-slate-400 text-lg mt-6 leading-relaxed">
              Practice technical and HR interviews, receive intelligent
              feedback, improve communication skills, and track your performance
              through advanced AI analysis.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                Start Practicing →
              </button>

              <button className="border border-slate-700 px-8 py-4 rounded-xl hover:bg-slate-900 transition">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-slate-500 mt-1">Users</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">50K+</h3>
                <p className="text-slate-500 mt-1">Interviews</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">95%</h3>
                <p className="text-slate-500 mt-1">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Dashboard */}
          <div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold">Interview Performance</h3>

                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  Improved
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Technical Skills</span>
                    <span>92%</span>
                  </div>

                  <div className="h-3 bg-slate-800 rounded-full">
                    <div className="h-3 bg-blue-500 rounded-full w-[92%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Communication</span>
                    <span>87%</span>
                  </div>

                  <div className="h-3 bg-slate-800 rounded-full">
                    <div className="h-3 bg-green-500 rounded-full w-[87%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Problem Solving</span>
                    <span>90%</span>
                  </div>

                  <div className="h-3 bg-slate-800 rounded-full">
                    <div className="h-3 bg-purple-500 rounded-full w-[90%]"></div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 mt-8">
                  <p className="text-slate-400">Overall Interview Score</p>

                  <h2 className="text-5xl font-bold text-blue-500 mt-2">89%</h2>

                  <p className="text-green-400 mt-3">
                    +12% from last assessment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose InterviewAI?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="text-4xl mb-4">🤖</div>

            <h3 className="text-xl font-semibold mb-3">AI Mock Interviews</h3>

            <p className="text-slate-400">
              Practice with realistic AI interviewers and experience
              industry-level interview scenarios.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="text-4xl mb-4">📊</div>

            <h3 className="text-xl font-semibold mb-3">Smart Analytics</h3>

            <p className="text-slate-400">
              Detailed insights on communication, technical knowledge and
              confidence.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="text-4xl mb-4">🚀</div>

            <h3 className="text-xl font-semibold mb-3">Career Growth</h3>

            <p className="text-slate-400">
              Build confidence and improve interview performance with
              personalized recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Ready To Crack Your Next Interview?
          </h2>

          <p className="text-slate-400 mt-6 text-lg">
            Join thousands of candidates preparing smarter with AI.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="mt-10 bg-blue-600 px-10 py-4 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
