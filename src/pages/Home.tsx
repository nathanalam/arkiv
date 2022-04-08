import { User } from "../API";
import PageWrapper from "../components/PageWrapper";

interface HomeProps {
  user: User;
}

const Home = (props: HomeProps) => {
  return (
    <PageWrapper user={props.user}>
      <>
        <section id="banner">
          <div className="content">
            <header>
              <h1>
                Arkiv
                <br />
                Still WIP
              </h1>
              <p>A better way to store and read PDFs</p>
            </header>
            <p>
              This is a WIP cloud PDF library that will keep track of where you are.
            </p>
            <ul className="actions">
              <li>
                <a href="https://github.com/nathanalam/arkiv" className="button big">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <span className="image object">
            <img src="images/diagram.png" alt="" />
          </span>
        </section>
      </>
    </PageWrapper>
  );
};

export default Home;
