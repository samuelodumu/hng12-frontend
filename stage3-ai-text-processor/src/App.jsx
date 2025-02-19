import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (text.trim() !== '') {
        sendChat();
        e.preventDefault();
      }
    }
  };

  const sendChat = () => {
    const output = document.querySelector('.output-text');
    output.classList.add('text-end');
    output.value += `${text}\n`;
    output.scrollTop = output.scrollHeight
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className='container-fluid'>
        <header className='mb-5'>
          <h1 className='display-4'>BrieflyAI</h1>
        </header>
        <div className='container'>
          <div className='output-group'>
            <textarea
              className='output-text form-control mb-4 p-3 border-0 rounded-5 fw-medium'
              rows={12}
              cols={100}
              readOnly></textarea>
          </div>
        </div>
        <div className='container'>
          <div className='input-group'>
            <textarea
              rows={4}
              cols={100}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              value={text}
              className='form-control rounded-5 p-3 position-relative input-text'
              aria-label='With textarea'></textarea>
            <span onClick={sendChat} className='send-icon fs-5 position-absolute align-self-end text-light px-3 py-2 rounded-4'>
              <i className='bi bi-send'></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
