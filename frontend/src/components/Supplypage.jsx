import React, { useState, useEffect } from 'react';

const HtmlPage = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Fetch the HTML file from the public folder
    fetch('/index.html')
      .then((response) => response.text())
      .then((html) => {
        setHtmlContent(html);
      })
      .catch((err) => {
        console.error('Failed to fetch HTML:', err);
      });
  }, []);

  return (
    <>
  
    <div
      className="html-container"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  </>
  );
};

export default HtmlPage;
