// frontend/src/components/Footer.jsx
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-xl mb-2">AI Question Generator</h2>
          <p>Helping students prepare smarter with AI-generated questions for interviews and exams.</p>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Contact Us</h2>
          <p>Email: adityaprakash62093@gmail.com</p>
          <p>Phone: +91 6209142583</p>
          <p>Address: Noida, India</p>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/profile.php?id=100014138432067" target="_blank" rel="noreferrer"><FaFacebook size={24} /></a>
            <a href="https://www.linkedin.com/in/aditya-prakash-92172824b/" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
            <a href="https://www.instagram.com/adityaprakash7761/?hl=en" target="_blank" rel="noreferrer"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400">
        &copy; {new Date().getFullYear()} AI Question Generator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;