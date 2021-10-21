import { Button, Popover, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Api } from "../../../Api/api";

const NewGenre = ({ setNewGenres }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const payload = {
            name: e.target.name.value,
        };
        console.log(payload);
        await Api.insert("genres", payload, true);
        setNewGenres(true);
    };

    const open = Boolean(anchorEl);

    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
            >
                New Genre
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField name="name" />
                    <Button type="submit" size="large">
                        Send
                    </Button>
                </Box>
            </Popover>
        </div>
    );
};

export default NewGenre;
