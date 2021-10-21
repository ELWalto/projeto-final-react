import "./NewGame.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import { Box, styled } from "@mui/system";
import { Button, TextField } from "@mui/material";
import GenresCheckbox from "../../components/structure/GenresCheckbox/GenresCheckbox";
import { Api } from "../../Api/api";

const NewGame = (props) => {
  const handleGenresCheck = (checked) => {
    console.log(checked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    /*         console.log(1, event)
        return */
    const payload = {
      title: event.target.title.value,
      cover: event.target.cover.value,
      description: event.target.description.value,
      year: +event.target.year.value,
      imdb: +event.target.imdb.value,
      trailer: event.target.trailer.value,
      gameplay: event.target.gameplay.value,
    };
    console.log(payload);
    console.log(props);
    Api.insert("games", payload, true);
    props.history.push("/game/new");
  };
  return (
    <BoxEdited component="form" onSubmit={handleSubmit}>
      <TextFieldEdited label="Title" name="title" required />
      <TextFieldEdited label="Cover Link" name="cover" required />
      <TextFieldEdited label="Description" name="description" required />
      <TextFieldEdited label="Release Year" name="year" type="number" />
      <TextFieldEdited label="IMDB Rate" name="imdb" type="number" />
      <TextFieldEdited label="Embed Trailer Link" name="trailer" />
      <TextFieldEdited label="Embed Gameplay Link" name="gameplay" />
      <GenresCheckbox onGenresChecked={handleGenresCheck} />
      <Button type="submit">Submit</Button>
    </BoxEdited>
  );
};

export const BoxEdited = styled(Box)(`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: auto;
    max-width: 500px;
`);

export const TextFieldEdited = styled(TextField)(`
    margin-top: 1rem;
`);

export default NewGame;
