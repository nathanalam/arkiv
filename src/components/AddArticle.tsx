import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  DefaultButton,
  Dialog,
  DialogFooter,
  IconButton,
  PrimaryButton,
} from "@fluentui/react";
import { useEffect, useState } from "react";
import {
  createArticle,
  createUserLibrary,
  updateUser,
} from "../graphql/mutations";
import { Article, CreateArticleInput, Subject, User } from "../API";
import uuid from "react-uuid";
import { listSubjects } from "../graphql/queries";

interface AddArticleProps {
  user: User;
}

const AddArticle = (props: AddArticleProps) => {
  const [hideDialog, setHideDialog] = useState(true);
  const [availableSubjects, setAvailableSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchSubjects = async () => {
      const subjects = await API.graphql(graphqlOperation(listSubjects));
      setAvailableSubjects((subjects as any).data?.listSubjects.items);
    };

    // call the function
    fetchSubjects()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [arxivUrl, setArxivUrl] = useState("");
  const [subject, setSubject] = useState<Subject | null>(null);

  const addArticle = async (articleInput: CreateArticleInput) => {
    await API.graphql(graphqlOperation(createArticle, { input: articleInput }));
    await API.graphql(
      graphqlOperation(createUserLibrary, {
        input: {
          articleID: articleInput.id,
          userID: props.user.id,
          id: uuid(),
        },
      })
    );
  };

  return (
    <>
      <IconButton
        iconProps={{ iconName: "Add" }}
        title="Add"
        ariaLabel="Add"
        onClick={() => setHideDialog(false)}
      />
      <Dialog
        hidden={hideDialog}
        onDismiss={() => setHideDialog(true)}
        dialogContentProps={{
          title: "Add Article",
          closeButtonAriaLabel: "Close",
          subText: "Add a link to your article",
        }}
      >
        <div>
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder="Article name"
          />
          <input
            value={date}
            onChange={({ target }) => setDate(target.value)}
            placeholder="Date"
          />
          <input
            value={arxivUrl}
            onChange={({ target }) => setArxivUrl(target.value)}
            placeholder="Arxiv link"
          />
          <input
            value={subject?.title}
            onChange={({ target }) => {
              let foundSubject: Subject | null = null;
              availableSubjects.forEach((subject) => {
                if (subject.title === target.value) {
                  foundSubject = subject;
                }
              });
              setSubject(foundSubject);
            }}
            placeholder="Subject"
          />
          <button
            onClick={() =>
              addArticle({
                id: uuid(),
                name,
                arxivUrl,
                date,
                subjectArticlesId: subject?.id || null,
              })
            }
          >
            Add Article
          </button>
        </div>
        <DialogFooter>
          <PrimaryButton
            onClick={() => {
              setHideDialog(true);
            }}
            text="Add"
          />
          <DefaultButton
            onClick={() => {
              setHideDialog(true);
            }}
            text="Cancel"
          />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddArticle;
