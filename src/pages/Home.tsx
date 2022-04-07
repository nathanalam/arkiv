import { User } from "../API";
import AddArticle from "../components/AddArticle";
import DemoView from "./browse/DemoView";

interface HomeProps {
  user: User;
}

const Home = (props: HomeProps) => {
  return (
    <div>
      <h1>Welcome to Arkiv</h1>

      {props.user.savedArticles ? (
        props.user.savedArticles.items.map((userlibrary) => {
          return (
            <>
              <p>{userlibrary?.articleID}</p>
              <DemoView articleId={userlibrary?.articleID || ""} />
            </>
          );
        })
      ) : (
        <p>No articles yet... add one below!</p>
      )}
      <AddArticle user={props.user} />
    </div>
  );
};

export default Home;
