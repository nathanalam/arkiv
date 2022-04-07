import { API, Amplify, graphqlOperation } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import ArticleViewer from "./pages/create/GraphQlDemo";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DemoView from "./pages/browse/DemoView";

import { initializeIcons } from "@fluentui/react/lib/Icons";
import { useEffect, useState } from "react";
import { getUser } from "./graphql/queries";
import { User } from "./API";
import { createUser } from "./graphql/mutations";

initializeIcons(/* optional base url */);

Amplify.configure(awsExports);

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo">GraphQL Demo</Link>
          </li>
          <li>
            <Link to="view">View Demo</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

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
  }, [user.username]);
  return (
    <div>
      <h1>Arkiv</h1>

      <p>Site under construction: https://github.com/nathanalam/arkiv</p>
      {dbUser != null && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home user={dbUser} />} />
            <Route path="demo" element={<ArticleViewer />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default withAuthenticator(App);
