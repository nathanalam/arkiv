import { useSearchParams } from "react-router-dom";
import { User } from "../../API";
import PageWrapper from "../../components/PageWrapper";
import FullView from "./FullView";

interface ArticleViewerProps {
  user: User;
}

const ArticleViewer = (props: ArticleViewerProps) => {
  const [searchParams,] = useSearchParams();
  return (
    <PageWrapper user={props.user}>
      <>
        <FullView userArticleId={searchParams.get("id") || ""}></FullView>
      </>
    </PageWrapper>
  );
};

export default ArticleViewer;
