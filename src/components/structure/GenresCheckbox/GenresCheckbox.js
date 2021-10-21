import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/api";
import NewGenre from "../NewGenre/NewGenre";

const GenresCheckbox = ({ onGenresChecked }) => {
    const [genres, setGenres] = useState(undefined);
    const [genresChecked, setGenresChecked] = useState([]);

    const [newGenres, setNewGenres] = useState(true);

    const getAllGenres = async () => {
        const response = await Api.getAll("genres", true);
        const result = await response.json();
        setGenres(result);
        setNewGenres(false);
    };

    useEffect(() => {
        if (newGenres) {
            getAllGenres();
        }
    }, [newGenres]);

    if (!genres || newGenres) {
        return "Loading...";
    }

    const handleChange = (event) => {
        const checked = event.target.checked;
        const value = event.target.value;
        const list = [...genresChecked];
        if (checked) {
            list.push(value);
        } else {
            list.splice(list.indexOf(value), 1);
        }
        setGenresChecked(list);
        onGenresChecked(list);
    };
    return (
        <FormControl sx={{ marginTop: "1rem" }} component="fieldset">
            <FormLabel component="legend">Genres</FormLabel>
            <FormGroup aria-label="position" row>
                {genres.map((genre, idx) => (
                    <FormControlLabel
                        value={genre.name}
                        control={<Checkbox onChange={handleChange} />}
                        label={genre.name}
                        labelPlacement="end"
                        key={`list-genre${idx}`}
                    />
                ))}
            </FormGroup>
            <NewGenre setNewGenres={setNewGenres} />
        </FormControl>
    );
};

export default GenresCheckbox;
