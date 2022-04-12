import { API, graphqlOperation } from "aws-amplify";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import { getArticle } from "../../graphql/queries";
import { Article } from "../../API";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const ArticleLoading = () => {
  return <p>Loading Article...</p>;
};

const ArticleRendered = ({ url }: { url: string }) => {
  return (
    <div>
      <Document file={url}>
        <Page pageNumber={1} />
      </Document>
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

export default DemoView;
