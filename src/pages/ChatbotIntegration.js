const ChatbotIntegration = () => {
    const handleIntegration = () => {
      alert('Integration successful!');
    };
  
    return (
      <div className="p-6">
        <h1>Chatbot Integration & Testing</h1>
        <button onClick={() => alert('Testing chatbot!')}>Test Chatbot</button>
        <button onClick={handleIntegration}>Integrate on Website</button>
      </div>
    );
  };
  
  export default ChatbotIntegration;
  