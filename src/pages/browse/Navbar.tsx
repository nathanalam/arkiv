import { useState } from "react";
import { User } from "../../API";
import ArticleList from "./ArticleList";

interface NavbarProps {
  user: User;
}

const Navbar = (props: NavbarProps) => {
  const [menubar, setMenubar] = useState(false);
  return (
    <div id="sidebar" className={menubar ? "active" : "inactive"}>
      <a href="#" className="toggle" onClick={() => setMenubar(!menubar)}>
        "Toggle"
      </a>
      <div className="inner">
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section>

        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li>
              <a href="/">Homepage</a>
            </li>
          </ul>
        </nav>

        <section>
          <header className="major">
            <h2>Articles</h2>
          </header>
          <ArticleList user={props.user} />
        </section>

        <footer id="footer">
          <p className="copyright">
            &copy; Untitled. All rights reserved. Demo Images:{" "}
            <a href="https://unsplash.com">Unsplash</a>. Design:{" "}
            <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Navbar;
