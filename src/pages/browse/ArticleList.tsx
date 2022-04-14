import { IconButton } from "@fluentui/react";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { User, UserArticle } from "../../API";
import AddArticle from "../../components/AddArticle";
import { deleteUserArticle } from "../../graphql/mutations";
import { listUserArticles } from "../../graphql/queries";
import DemoView from "./DemoView";

interface ArticleListProps {
  user: User;
}

const fetchUserArticles = async (
  userid: string,
  callbackFunction: (newUserArticles: UserArticle[]) => void
) => {
  const result = (
    (await API.graphql(
      graphqlOperation(listUserArticles, {
        filter: {
          userId: {
            eq: userid,
          },
        },
      })
    )) as any
  ).data?.listUserArticles.items;
  callbackFunction(result);
};

const ArticleList = (props: ArticleListProps) => {
  const [userArticles, setUserArticles] = useState<UserArticle[]>([]);
  useEffect(() => {
    // declare the data fetching function
    // call the function
    fetchUserArticles(props.user.id, setUserArticles)
      // make sure to catch any error
      .catch(console.error);
  }, [props.user]);

  return (
    <div className="mini-posts">
      {userArticles.length ? (
        userArticles.map((userArticle) => {
          return (
            <article>
              <IconButton
                iconProps={{ iconName: "Delete" }}
                title="Delete"
                ariaLabel="Delete"
                onClick={() => {
                  API.graphql(
                    graphqlOperation(deleteUserArticle, {
                      input: {
                        id: userArticle.id,
                      },
                    })
                  );
                  fetchUserArticles(props.user.id, setUserArticles);
                }}
                style={{ display: "inline-block" }}
              />
              <a href={`/articles?id=${userArticle.id}`} className="image">
                <DemoView articleId={userArticle.articleId || ""} />
              </a>
            </article>
          );
        })
      ) : (
        <p>No articles yet... add one below!</p>
      )}
      <AddArticle
        user={props.user}
        onAdd={() => fetchUserArticles(props.user.id, setUserArticles)}
      />
    </div>
  );
};

export default ArticleList;
