import React from 'react';

function PDFViewer({ file }) {
  return (
    <iframe
      src={file}
      width="100%"
      height="600px"
      title="PDF Viewer"
    />
  );
}

export default PDFViewer;