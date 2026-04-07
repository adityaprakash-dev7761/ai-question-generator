const About = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">About Our Platform</h1>

        <p className="text-lg text-gray-700 mb-4">
          Our AI Question Generator helps students and job seekers prepare smarter.
          Select any field and instantly get the top 10 important questions.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-100 p-5 rounded-xl">
            <h2 className="font-bold text-xl mb-2">Our Mission</h2>
            <p>To make interview and exam preparation easier using AI.</p>
          </div>

          <div className="bg-green-100 p-5 rounded-xl">
            <h2 className="font-bold text-xl mb-2">What We Provide</h2>
            <p>Important questions, interview preparation and subject-wise guidance.</p>
          </div>

          <div className="bg-purple-100 p-5 rounded-xl">
            <h2 className="font-bold text-xl mb-2">Why Choose Us</h2>
            <p>Fast, easy and tailored question generation for every field.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;