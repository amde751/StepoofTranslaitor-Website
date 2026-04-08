import { useState } from 'react'
import { MICELIUM_MAP, VOCABULARYWORDS_MAP, REVERSE_MICELIUM_MAP, REVERSE_VOCABULARYWORDS_MAP } from '../data/dictionaries'

function TranslatorPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('_')

  const toMicelium = (text) => {
    let result = text.toLowerCase()
    
    // Сначала заменяем словарные слова
    Object.entries(VOCABULARYWORDS_MAP).forEach(([word, translation]) => {
      const regex = new RegExp(word.toLowerCase(), 'gi')
      result = result.replace(regex, translation)
    })
    
    // Затем заменяем отдельные буквы
    Object.entries(MICELIUM_MAP).forEach(([char, emoji]) => {
      result = result.split(char).join(emoji)
    })
    
    return result
  }

  const fromMicelium = (text) => {
    let result = text
    
    // Сначала заменяем словарные слова
    Object.entries(REVERSE_VOCABULARYWORDS_MAP).forEach(([translation, word]) => {
      result = result.split(translation).join(word)
    })
    
    // Затем заменяем эмодзи на буквы
    Object.entries(REVERSE_MICELIUM_MAP).forEach(([emoji, char]) => {
      result = result.split(emoji).join(char)
    })
    
    return result
  }

  const handleEncode = () => {
    const result = toMicelium(input)
    setOutput(result)
  }

  const handleDecode = () => {
    const result = fromMicelium(input)
    setOutput(result)
  }

  const handleCopy = () => {
    if (output && output !== '_') {
      navigator.clipboard.writeText(output)
    }
  }

  return (
    <div className="page-content active">
      <div className="terminal-wrapper">
        <div className="terminal-header">
          <div className="dots-group">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="label">Ввод_Бананость🍌</span>
        </div>
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите текст..."
        />
      </div>

      <div className="control-panel">
        <button className="btn-main" onClick={handleEncode}>Забананить</button>
        <button className="btn-outline" onClick={handleDecode}>Разбананить</button>
      </div>

      <div className="terminal-wrapper">
        <div className="terminal-header">
          <div className="dots-group">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="label">Вывод_бананы🍌</span>
          </div>
          <button className="copy-btn" onClick={handleCopy}>КОПИРОВАТЬ</button>
        </div>
        <div className="output-field">{output}</div>
      </div>
    </div>
  )
}

export default TranslatorPage
