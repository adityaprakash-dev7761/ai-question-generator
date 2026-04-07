const faqs = [
  {
    question: "How does the AI generate questions?",
    answer: "The AI analyzes the selected field and generates important questions."
  },
  {
    question: "Is this platform free?",
    answer: "Yes, you can use the platform for free."
  },
  {
    question: "Can I save generated questions?",
    answer: "Yes, you can save and download them."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>

        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <h2 className="font-semibold text-xl mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;