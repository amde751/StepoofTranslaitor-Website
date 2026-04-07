import { useState } from 'react'
import { MICELIUM_MAP, VOCABULARYWORDS_MAP } from '../data/dictionaries'
import DictModal from './DictModal'

function DictionaryPage() {
  const [activeTab, setActiveTab] = useState('alphabet')
  const [searchQuery, setSearchQuery] = useState('')
  const [modalData, setModalData] = useState(null)

  const filteredAlphabet = Object.entries(MICELIUM_MAP).filter(([char, emoji]) =>
    char.toLowerCase().includes(searchQuery.toLowerCase()) || emoji.includes(searchQuery)
  )

  const filteredVocabulary = Object.entries(VOCABULARYWORDS_MAP).filter(([word, translation]) =>
    word.toLowerCase().includes(searchQuery.toLowerCase()) || translation.includes(searchQuery)
  )

  const openModal = (original, translation, type) => {
    setModalData({ original, translation, type })
  }

  const closeModal = () => {
    setModalData(null)
  }

  return (
    <div className="page-content active">
      <div className="search-wrapper">
        <input
          type="text"
          id="searchInput"
          placeholder="🔍 Поиск по словарю..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="dict-tabs">
        <button
          className={`dict-tab-btn ${activeTab === 'alphabet' ? 'active' : ''}`}
          onClick={() => setActiveTab('alphabet')}
        >
          📖 Алфавит
        </button>
        <button
          className={`dict-tab-btn ${activeTab === 'vocabulary' ? 'active' : ''}`}
          onClick={() => setActiveTab('vocabulary')}
        >
          📝 Словарные слова
        </button>
      </div>

      {activeTab === 'alphabet' && (
        <div className="dict-tab-content active">
          <div className="terminal-wrapper">
            <div className="terminal-header">
              <div className="dots-group">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="label">Алфавит_мiцеlium🧿</span>
            </div>
            <div className="dictionary-grid">
              {filteredAlphabet.length === 0 ? (
                <div className="no-results">Ничего не найдено 😔</div>
              ) : (
                filteredAlphabet.map(([char, emoji]) => (
                  <div
                    key={char}
                    className="dict-item"
                    onClick={() => openModal(char, emoji, 'alphabet')}
                  >
                    <div className="dict-char">{char}</div>
                    <div className="dict-emoji">{emoji}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'vocabulary' && (
        <div className="dict-tab-content active">
          <div className="terminal-wrapper">
            <div className="terminal-header">
              <div className="dots-group">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="label">Словарные_слова👀</span>
            </div>
            <div className="dictionary-list">
              {filteredVocabulary.length === 0 ? (
                <div className="no-results">Ничего не найдено 😔</div>
              ) : (
                filteredVocabulary.map(([word, translation]) => (
                  <div
                    key={word}
                    className="vocab-item"
                    onClick={() => openModal(word, translation, 'vocabulary')}
                  >
                    <div className="vocab-word">{word}</div>
                    <div className="vocab-translation">{translation}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {modalData && (
        <DictModal
          original={modalData.original}
          translation={modalData.translation}
          type={modalData.type}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default DictionaryPage
