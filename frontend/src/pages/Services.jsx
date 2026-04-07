const services = [
  {
    title: "AI Question Generation",
    description: "Generate top 10 important questions instantly."
  },
  {
    title: "Interview Preparation",
    description: "Practice domain-specific interview questions."
  },
  {
    title: "Resume Guidance",
    description: "Get help for placements and interview readiness."
  },
  {
    title: "Mock Questions",
    description: "Prepare using common and trending questions."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;