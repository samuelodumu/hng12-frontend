import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  async function detector() {
    await ai.languageDetector.create();
  }
  async function translateToEnglish() {
    await ai.textTranslator.create({
      sourceLanguage: 'auto',
      targetLanguage: 'en'
    });
  }

  async function translateToPortugese() {
    await ai.textTranslator.create({
      sourceLanguage: 'auto',
      targetLanguage: 'pt'
    });
  }
  async function translateToSpanish() {
    await ai.textTranslator.create({
      sourceLanguage: 'auto',
      targetLanguage: 'es'
    });
  }
  async function translateToRussian() {
    await ai.textTranslator.create({
      sourceLanguage: 'auto',
      targetLanguage: 'ru'
    });
  }
  async function translateToFrench() {
    await ai.textTranslator.create({
      sourceLanguage: 'auto',
      targetLanguage: 'fr'
    });
  }
  async function translateToTurkish() {
    await ai.textTranslator.create({
      sourceLanguage: 'auto',
      targetLanguage: 'tr'
    });
  }
  async function summarize() {
    await ai.textSummarizer.create();
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (text.trim() !== '') {
        sendChat();
      }
      e.preventDefault();
    }
  };

  const sendChat = () => {
    const output = document.querySelector('.output-text');
    output.classList.add('text-end');
    output.value += `${text}\n`;
    output.scrollTop = output.scrollHeight;
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className='container-fluid d-flex flex-column align-items-center'>
        <header className='col-md-8 mb-3'>
          <h1 className='display-4 fw-semibold mb-4'>BrieflyAI</h1>
          <p className='instructions fs-5 fw-light'>
            Enter the text you want to summarize or translate, then press Enter
            or click the send icon. The summarized or translated text will
            appear below.
          </p>
        </header>
        <div className='col-md-7'>
          <div className='output-group'>
            <textarea
              id='output-text'
              className='form-control mb-4 p-3 border-0 rounded-5 fw-medium'
              rows={12}
              cols={100}
              aria-label='output textbox'
              readOnly></textarea>
          </div>
        </div>
        <div className='col-md-7'>
          <div className='input-group'>
            <textarea
              rows={4}
              cols={100}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              placeholder='the quick brown fox jumps over the lazy dog...'
              value={text}
              id='input-text'
              className='form-control rounded-5 p-3 position-relative'
              aria-label='input textarea'></textarea>
            <span
              onClick={sendChat}
              className='send-icon fs-5 position-absolute align-self-end text-light px-3 py-2 rounded-4'>
              <i
                className='bi bi-send'
                aria-label='send icon'></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
