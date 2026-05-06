import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (step === 1 && email) {
        setStep(2);
      } else if (step === 2 && name) {
        setStep(3);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email,
      name,
      description,
    };

    emailjs.send('service_4u0p81m','template_z3nwywd', templateParams,'KNn_BbblQkasCsF9v')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setIsSubmitted(true);
        setEmail('');
        setName('');
        setDescription('');
        setStep(1);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div className="px-4 md:px-6">
      <div className="flex items-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-6xl font-bold text-white mr-4 md:mr-8">Contact</h2>
        <div className="flex-grow border-t-4 border-white"></div>
      </div>
      
      <div className="bg-black text-white font-mono py-4 md:py-8">
        <div className="w-full border-2 md:border-4 border-white flex flex-col">
          <div className="bg-gray-800 flex justify-between items-center p-3 md:p-4 border-b-2 md:border-b-4 border-white">
            <span className="text-white text-sm md:text-lg">Command Prompt</span>
            <div className="flex space-x-2">
              <span className="h-3 w-3 md:h-4 md:w-4 bg-white rounded-full inline-block"></span>
              <span className="h-3 w-3 md:h-4 md:w-4 bg-white rounded-full inline-block"></span>
              <span className="h-3 w-3 md:h-4 md:w-4 bg-white rounded-full inline-block"></span>
            </div>
          </div>

          <div className="bg-black text-white p-4 md:p-8 flex-grow overflow-y-auto text-base md:text-xl" style={{ minHeight: '300px', maxHeight: '60vh' }}>
            {step >= 1 && (
              <div className="mb-6 md:mb-8">
                <p className="text-sm md:text-base">C:{'\'}Users{'}>'} Enter your email:</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-black text-white border-none outline-none text-lg md:text-2xl p-2"
                  placeholder="me@gmail.com"
                  disabled={step !== 1}
                />
              </div>
            )}

            {step >= 2 && (
              <div className="mb-6 md:mb-8">
                <p className="text-sm md:text-base">C:{'\'}Users{'}>'} Enter your name:</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-black text-white border-none outline-none text-lg md:text-2xl p-2"
                  placeholder="Bob Dylan"
                  disabled={step !== 2}
                />
              </div>
            )}

            {step >= 3 && (
              <div className="mb-6 md:mb-8">
                <p className="text-sm md:text-base">C:{'\'}Users{'}>'} Enter a description:</p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-black text-white border-none outline-none text-lg md:text-2xl p-2"
                  placeholder="Type your message here..."
                  rows="4"
                />
              </div>
            )}

            {step === 3 && (
              <div className="text-center mt-6 md:mt-8">
                <button
                  onClick={handleSubmit}
                  className="bg-white text-black px-4 md:px-6 py-2 text-base md:text-xl font-bold rounded-lg">
                  Submit
                </button>
              </div>
            )}

            {isSubmitted && (
              <div className="text-center text-green-500 mt-4">
                <p className="text-sm md:text-base">Email sent successfully!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
