import React from 'react';
import PDFViewer from './components/PDFViewer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PDFViewer />
      <Footer />
    </div>
  );
}

export default App;
