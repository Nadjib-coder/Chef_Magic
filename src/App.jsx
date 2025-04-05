import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    alert(`🚨 Important Update:

      This version of the Recipe Web App has been adapted to showcase my frontend development skills using a mock API. Originally, the app was powered by a Hugging Face AI model, but due to security concerns with private key management and limitations on AI usage, the AI integration has been temporarily replaced.
      
      The mock API serves as a demonstration of the app's functionality, but the underlying code for the AI-powered feature is still intact, commented out for future updates. This change allows you to explore the frontend while I work on a secure backend solution for AI integration.
      
      Please read the README for more detailed information on the app's functionality and future plans.
      
      Thank you for your understanding, and feel free to provide feedback!`);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
