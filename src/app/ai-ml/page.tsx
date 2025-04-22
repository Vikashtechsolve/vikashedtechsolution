import React from 'react';
import Link from 'next/link';
import { FaBrain, FaRobot, FaChartLine, FaDatabase, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function AIMLPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Artificial Intelligence & Machine Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of creating intelligent systems and predictive models
          </p>
        </div>
        
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaBrain className="mr-3 text-purple-500" />
            What is AI & Machine Learning?
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Artificial Intelligence (AI) and Machine Learning (ML) are transforming the way we live and work. AI enables machines to simulate human intelligence, while ML focuses on developing systems that can learn from and make decisions based on data. These technologies are driving innovation across industries and creating exciting career opportunities.
          </p>
        </div>

        {/* Core Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaRobot className="mr-3 text-purple-500" />
              Artificial Intelligence
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Natural Language Processing</strong> - Understanding and generating human language</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Computer Vision</strong> - Image and video analysis</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Robotics</strong> - Autonomous systems and automation</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Expert Systems</strong> - Rule-based decision making</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Speech Recognition</strong> - Voice processing and analysis</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaChartLine className="mr-3 text-purple-500" />
              Machine Learning
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Supervised Learning</strong> - Classification and regression</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Unsupervised Learning</strong> - Clustering and dimensionality reduction</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Deep Learning</strong> - Neural networks and deep architectures</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Reinforcement Learning</strong> - Decision making through trial and error</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Natural Language Processing</strong> - Text analysis and generation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRocket className="mr-3 text-purple-500" />
            Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Healthcare</h4>
              <p className="text-gray-600">Disease diagnosis, drug discovery, and personalized medicine</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Finance</h4>
              <p className="text-gray-600">Fraud detection, algorithmic trading, and risk assessment</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Transportation</h4>
              <p className="text-gray-600">Autonomous vehicles, traffic prediction, and route optimization</p>
            </div>
          </div>
        </div>

        {/* Essential Skills */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRocket className="mr-3 text-purple-500" />
            Essential Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Programming</h4>
              <p className="text-gray-600">Python, R, and specialized ML libraries</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Mathematics</h4>
              <p className="text-gray-600">Statistics, linear algebra, and calculus</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Data Analysis</h4>
              <p className="text-gray-600">Data preprocessing, visualization, and interpretation</p>
            </div>
          </div>
        </div>

        {/* Career Paths */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRocket className="mr-3 text-purple-500" />
            Career Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Machine Learning Engineer</h4>
              <p className="text-gray-600">Design and implement ML algorithms and models</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Data Scientist</h4>
              <p className="text-gray-600">Analyze data and build predictive models</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">AI Research Scientist</h4>
              <p className="text-gray-600">Advance the field through research and innovation</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">NLP Engineer</h4>
              <p className="text-gray-600">Develop language processing systems</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your AI & ML Journey?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join our comprehensive AI & ML program and learn from industry experts. Get hands-on experience with real-world projects and build a portfolio that stands out.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
} 