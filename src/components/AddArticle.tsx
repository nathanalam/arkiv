import { API, graphqlOperation } from "aws-amplify";
import {
  DefaultButton,
  Dialog,
  DialogFooter,
  IconButton,
  PrimaryButton,
} from "@fluentui/react";
import { useState } from "react";
import { createArticle, createUserArticle } from "../graphql/mutations";
import { CreateArticleInput, User } from "../API";
import uuid from "react-uuid";

interface AddArticleProps {
  user: User;
  onAdd: (newArticleId: string) => void;
}

const AddArticle = (props: AddArticleProps) => {
  const [hideDialog, setHideDialog] = useState(true);

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const addArticle = async (articleInput: CreateArticleInput) => {
    await API.graphql(graphqlOperation(createArticle, { input: articleInput }));
    await API.graphql(
      graphqlOperation(createUserArticle, {
        input: {
          articleId: articleInput.id,
          userId: props.user.id,
          page: 1,
          id: uuid(),
        },
      })
    );
    props.onAdd(articleInput.id || "");
  };

  return (
    <>
      <IconButton
        iconProps={{ iconName: "Add" }}
        title="Add"
        ariaLabel="Add"
        onClick={() => setHideDialog(false)}
        style={{ display: "inline-block" }}
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
            value={url}
            onChange={({ target }) => setUrl(target.value)}
            placeholder="Arxiv link"
          />
        </div>
        <DialogFooter>
          <PrimaryButton
            onClick={() => {
              const newArticleId = uuid();
              const time = new Date(Date.now()).toISOString();
              addArticle({
                id: newArticleId,
                name,
                url,
                date: time.substring(0, time.indexOf("T")),
              });
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
