function BrowserTabs({ activePage, setActivePage }) {
  return (
    <div className="browser-tabs">
      <div 
        className={`browser-tab ${activePage === 'translator' ? 'active' : ''}`}
        onClick={() => setActivePage('translator')}
      >
        <span className="tab-icon">🔄</span>
        <span className="tab-title">Переводчик</span>
      </div>
      <div 
        className={`browser-tab ${activePage === 'dictionary' ? 'active' : ''}`}
        onClick={() => setActivePage('dictionary')}
      >
        <span className="tab-icon">📚</span>
        <span className="tab-title">Словарь</span>
      </div>
    </div>
  )
}

export default BrowserTabs
