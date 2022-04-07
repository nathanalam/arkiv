import { API, graphqlOperation } from "aws-amplify";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import { getArticle } from "../../graphql/queries";
import { Article } from "../../API";

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

interface DemoViewProps {
  articleId: string;
}

const DemoView = (props: DemoViewProps) => {
  const [articleContent, setArticleContent] = useState(<ArticleLoading />);
  // get key from Storage.list;
  useEffect(() => {
    // declare the data fetching function
    const fetchPdf = async () => {
      // const signedURL = await Storage.get("demo.pdf");
      const article = (
        (await API.graphql(
          graphqlOperation(getArticle, { id: props.articleId })
        )) as any
      ).data.getArticle as Article;
      setArticleContent(<ArticleRendered url={article.arxivUrl} />);
    };

    // call the function
    fetchPdf()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return <div>{articleContent}</div>;
};

export default DemoView;
