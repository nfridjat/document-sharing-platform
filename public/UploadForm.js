import React, { useState } from 'react';

function UploadForm() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('pdf', file);

    fetch('/api/upload', {
      method: 'POST',
      body: formData
    }).then(() => {
      alert('Document téléversé avec succès.');
      window.location.reload();
    });
  };

  return (
    <div className="upload-form">
      <h2>Interface Administrateur</h2>
      <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Téléverser</button>
    </div>
  );
}

export default UploadForm;