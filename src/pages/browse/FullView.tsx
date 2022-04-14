import { API, graphqlOperation } from "aws-amplify";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import { getArticle, getUserArticle } from "../../graphql/queries";
import { Article, UserArticle } from "../../API";
import { updateUserArticle } from "../../graphql/mutations";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const changeUserArticlePage = async (
  userArticleId: string,
  newPage: number,
  callback: () => void
) => {
  await API.graphql(
    graphqlOperation(updateUserArticle, {
      input: {
        id: userArticleId,
        page: newPage,
      },
    })
  );
  callback();
};

const fetchPdf = async (
  userArticleId: string,
  callbackFunction: (articleProps: ArticleProps) => void
) => {
  let response;
  response = await API.graphql(
    graphqlOperation(getUserArticle, { id: userArticleId })
  );
  const userArticle = (response as any).data.getUserArticle as UserArticle;
  response = await API.graphql(
    graphqlOperation(getArticle, { id: userArticle.articleId })
  );
  const article = (response as any).data.getArticle as Article;
  callbackFunction({ url: article.url, page: userArticle.page });
};

interface FullViewProps {
  userArticleId: string;
}
interface ArticleProps {
  url?: string;
  page?: number;
}

const FullView = (props: FullViewProps) => {
  const [maxPage, setMaxPage] = useState(10);
  const [articleProps, setArticleProps] = useState<ArticleProps>({});
  useEffect(() => {
    fetchPdf(props.userArticleId, setArticleProps);
  }, [props.userArticleId]);
  return (
    <>
      {articleProps.url ? (
        <div>
          <button
            onClick={() => {
              if (articleProps.page && articleProps.page > 1) {
                changeUserArticlePage(
                  props.userArticleId,
                  articleProps.page - 1,
                  () => {
                    fetchPdf(props.userArticleId, setArticleProps);
                  }
                );
              }
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (articleProps.page && articleProps.page < maxPage) {
                changeUserArticlePage(
                  props.userArticleId,
                  articleProps.page + 1,
                  () => {
                    fetchPdf(props.userArticleId, setArticleProps);
                  }
                );
              }
            }}
          >
            Next
          </button>
          <Document
            file={{
              url:
                articleProps.url.charAt(articleProps.url.length - 1) === "/"
                  ? articleProps.url
                  : articleProps.url + "/",
            }}
            onLoadSuccess={({ numPages }) => setMaxPage(numPages)}
          >
            <Page key={articleProps.page} pageNumber={articleProps.page} />
          </Document>
          <a href={articleProps.url}>Here is the link!</a>
        </div>
      ) : (
        <h4>Loading Article...</h4>
      )}
    </>
  );
};

export default FullView;
