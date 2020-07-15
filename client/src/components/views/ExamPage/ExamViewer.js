import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import './ExamViewer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ExamViewer() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  window.onload = function (event) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("body").style.paddingTop = "0"
    setTimeout(()=>{window.print()},1000)
  }

  return (
    <div
      id="ExamContainer"
      style={{
        msUserSelect: "none",
        MozUserSelect: "-moz-none",
        KhtmlUserSelect: "none",
        WebkitUserSelect: "none",
        userSelect: "none"
      }}
    >
      <Document
        file='http://localhost:5000/uploads/pdf/doc.pdf'
        options={{
          cMapUrl: '//cdn.jsdelivr.net/npm/pdfjs-dist/cmaps/',
          cMapPacked: "true"
        }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              scale={1.2}
              pageNumber={index + 1}
            />
          ),
        )}
      </Document>
    </div>
  );
}

export default ExamViewer