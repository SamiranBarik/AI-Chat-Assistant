import { useState } from 'react';
import './App.css';
import ChatInput from './components/ChatInput';
import ChatResponse from './components/ChatResponse';
import { fetchChatResponse } from './service/api';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleQuestionSubmit = async(question) => {
      setLoading(true);
      setResponse(null);
      try{
       const apiResponse = await fetchChatResponse(question);
       setResponse(apiResponse);
      } catch (error) {
        alert("Failed to get response")
      } finally {
        setLoading(false);
      }
  }

  return (
    <div className="App">
      <header className="bg-primary text-white text-center p-3">
        <h1>Gemini ChatBot</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit}/>
       {loading && <h1>Loading..</h1>}
       <ChatResponse response={response}/>
        {/* RESPONSE */}
    </div>
  );
}

export default App;