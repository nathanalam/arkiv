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
      <Document
        file={{
          url,
          httpHeaders: {
            Origin: "https://main.d287qvsgysn418.amplifyapp.com/",
          },
        }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {[...Array(pageNum)].map((_, pageNumber) => (
          <Page key={pageNumber} pageNumber={pageNumber + 1} />
        ))}
      </Document>
      <a href={url}>Here is the link!</a>
    </div>
  );
};

interface FullViewProps {
  articleId: string;
}

const FullView = (props: FullViewProps) => {
  const [articleContent, setArticleContent] = useState(<ArticleLoading />);
  // get key from Storage.list;
  useEffect(() => {
    // declare the data fetching function
    const fetchPdf = async () => {
      const response = await API.graphql(
        graphqlOperation(getArticle, { id: props.articleId })
      );
      const article = (response as any).data.getArticle as Article;
      setArticleContent(<ArticleRendered url={article.url} />);
    };

    // call the function
    fetchPdf()
      // make sure to catch any errorg
      .catch(console.error);
  }, [props.articleId]);
  return <div>{articleContent}</div>;
};

export default FullView;
