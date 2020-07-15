import React from 'react';
import Pdf from '@mikecousins/react-pdf';

function ExamViewer() {
    const renderCard = [];
    for (var i = 1; i < 5; i++) {
      renderCard.push(
        <Pdf
          file="http://localhost:5000/uploads/pdf/doc.pdf"
          cMapUrl='//cdn.jsdelivr.net/npm/pdfjs-dist/cmaps/'
          cMapPacked="true"
          page={i}
          scale={1.5}
          key={i}
        />
      );
    }

    return (
      <div>
        {renderCard}
      </div>
    )

};

export default ExamViewer