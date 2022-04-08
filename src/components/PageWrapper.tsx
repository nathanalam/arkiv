import { User } from "../API";
import Navbar from "../pages/browse/Navbar";

interface PageWrapperProps {
  user: User;
  children: JSX.Element;
}

const PageWrapper = (props: PageWrapperProps) => {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <header id="header">
            <a href="/" className="logo">
              <strong>Arkiv</strong>
            </a>
            <ul className="icons">
              <li>
                <a href="#" className="icon brands fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-snapchat-ghost">
                  <span className="label">Snapchat</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-medium-m">
                  <span className="label">Medium</span>
                </a>
              </li>
            </ul>
          </header>

          {props.children}
        </div>
      </div>

      <Navbar user={props.user} />
    </div>
  );
};

export default PageWrapper;
