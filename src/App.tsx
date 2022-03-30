import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import ArticleViewer from "./pages/create/GraphQlDemo";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./NotFound";
import DemoView from "./pages/browse/DemoView";

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

function App({ signOut, user }: any) {
  return (
    <div>
      <h1>Arkiv</h1>

      <p>Site under construction: https://github.com/nathanalam/arkiv</p>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="demo" element={<ArticleViewer />} />
          <Route path="view" element={<DemoView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
