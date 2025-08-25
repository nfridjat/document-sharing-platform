import React, { useEffect, useState } from 'react';
import PDFViewer from './components/PDFViewer';
import UploadForm from './components/UploadForm';
import './styles/App.css';

function App() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch('/api/log-access');
    fetch('/api/documents')
      .then(res => res.json())
      .then(data => setDocuments(data));
  }, []);

  return (
    <div className="App">
      <h1>Plateforme de Partage de Documents</h1>
      <div className="tabs">
        {documents.map((doc, index) => (
          <div key={index} className="tab">
            <h3>{doc}</h3>
            <PDFViewer file={`/documents/${doc}`} />
          </div>
        ))}
      </div>
      <UploadForm />
    </div>
  );
}

export default App;