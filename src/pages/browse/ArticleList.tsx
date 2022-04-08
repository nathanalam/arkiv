import { IconButton } from "@fluentui/react";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { User } from "../../API";
import AddArticle from "../../components/AddArticle";
import { deleteUserLibrary } from "../../graphql/mutations";
import DemoView from "./DemoView";

interface ArticleListProps {
  user: User;
}

const ArticleList = (props: ArticleListProps) => {
  const [articleIds, setArticleIds] = useState(
    props.user.savedArticles
      ? props.user.savedArticles.items.map(
          (userlibrary) => userlibrary?.articleID
        )
      : []
  );
  return (
    <div className="mini-posts">
      {articleIds ? (
        articleIds.map((articleid) => {
          return (
            <article>
              <IconButton
                iconProps={{ iconName: "Delete" }}
                title="Delete"
                ariaLabel="Delete"
                onClick={() => {
                  props.user.savedArticles?.items.forEach((userLibrary) => {
                    if (userLibrary && userLibrary.articleID === articleid)
                      API.graphql(
                        graphqlOperation(deleteUserLibrary, {
                          input: {
                            id: userLibrary.id,
                          },
                        })
                      );
                  });
                  setArticleIds(articleIds.filter((oid) => oid !== articleid));
                }}
                style={{ display: "inline-block" }}
              />
              <a href={`/articles?id=${articleid}`} className="image">
                <DemoView articleId={articleid || ""} />
              </a>
            </article>
          );
        })
      ) : (
        <p>No articles yet... add one below!</p>
      )}
      <AddArticle
        user={props.user}
        onAdd={(newArticleId) => setArticleIds([...articleIds, newArticleId])}
      />
    </div>
  );
};

export default ArticleList;
