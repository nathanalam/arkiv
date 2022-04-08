import { API, Amplify, graphqlOperation } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { initializeIcons } from "@fluentui/react/lib/Icons";
import { useEffect, useState } from "react";
import { getUser } from "./graphql/queries";
import { User } from "./API";
import { createUser } from "./graphql/mutations";
import ArticleViewer from "./pages/browse/ArticleViewer";

initializeIcons(/* optional base url */);

Amplify.configure(awsExports);

const App = ({ signOut, user }: any) => {
  const [dbUser, setDbUser] = useState<User | null>(null);

  useEffect(() => {
    // declare the data fetching function
    const fetchUser = async () => {
      const userResult = (
        (await API.graphql(
          graphqlOperation(getUser, { id: user.username })
        )) as any
      ).data?.getUser;
      if (userResult != null) {
        setDbUser(userResult);
      } else {
        const createdUser = (
          (await API.graphql(
            graphqlOperation(createUser, {
              input: {
                id: user.username,
                name: user.attributes.email,
              },
            })
          )) as any
        ).data.createUser;
        setDbUser(createdUser);
      }
    };

    // call the function
    fetchUser()
      // make sure to catch any error
      .catch(console.error);
  }, [user.username, user.attributes.email]);
  return (
    <div>
      {dbUser != null && (
        <Routes>
          <Route path="/">
            <Route index element={<Home user={dbUser} />} />
            <Route path="articles" element={<ArticleViewer user={dbUser}/>}/> 
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default withAuthenticator(App);
