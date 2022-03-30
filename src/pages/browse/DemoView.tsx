import { Storage } from "aws-amplify";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const ArticleLoading = () => {
  return <h4>Loading Article...</h4>;
};

const ArticleRendered = ({ url }: { url: string }) => {
  const [pageNum, setPageNum] = useState(0);
  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setPageNum(numPages);
  };
  return (
    <div>
      <h4>Article Rendered!</h4>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        {[...Array(pageNum)].map((_, pageNumber) => (
          <Page key={pageNumber} pageNumber={pageNumber + 1} />
        ))}
      </Document>
      <a href={url}>Here is the link!</a>
    </div>
  );
};

const DemoView = () => {
  const [articleContent, setArticleContent] = useState(<ArticleLoading />);
  // get key from Storage.list;
  useEffect(() => {
    // declare the data fetching function
    const fetchPdf = async () => {
      const signedURL = await Storage.get("demo.pdf");
      setArticleContent(<ArticleRendered url={signedURL} />);
    };

    // call the function
    fetchPdf()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
    <div>
      <h1>Welcome to Arkiv</h1>
      {articleContent}
    </div>
  );
};

export default DemoView;
