import { useState, useEffect } from 'react';
import './App.css';

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  }

  return (
    <div className={`container ${show ? "active" : ""}`}>
      <div className="header" onClick={toggle}>{question}</div>
      <div className="body">
        <div className="content">
          {answer}
        </div>
      </div>
    </div>
  );
}

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('/Data.json')
      .then(response => response.json())
      .then(data => setFaqs(data))
      .catch(error => console.error('Error fetching the FAQ data:', error));
  }, []);

  return (
    <div className="main">
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

function App() {
  return (
    <Faq />
  );
}

export default App;
