import { useState, useEffect } from 'react'

function DictModal({ original, translation, type, onClose }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleCopy = () => {
    navigator.clipboard.writeText(translation)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const title = type === 'alphabet' ? 'Банан' : 'Бананость'

  return (
    <div className="dict-modal-overlay" onClick={handleOverlayClick} style={{ opacity: 1 }}>
      <div className="dict-modal-content">
        <div className="dict-modal-header">
          <h3>{title}</h3>
          <button className="dict-modal-close" onClick={onClose}>×</button>
        </div>
        <div className="dict-modal-body">
          <div className="dict-modal-original">{original}</div>
          <div className="dict-modal-arrow">→</div>
          <div className="dict-modal-translation">{translation}</div>
        </div>
        <div className="dict-modal-footer">
          <button 
            className="dict-modal-copy" 
            onClick={handleCopy}
            style={copied ? { background: 'var(--accent-green)' } : {}}
          >
            {copied ? '✓ Бананость Скопирована!' : 'Копировать Бананость'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DictModal
