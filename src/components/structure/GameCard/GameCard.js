import "./GameCard.scss";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const GameCard = (props) => {
  return props.games.map((game, idx) => (
    <Card
      sx={{ width: 180, marginTop: "2rem", padding: "0.2rem" }}
      key={`game-card${idx}`}
      className="game-card"
    >
      <CardMedia
        component="img"
        image={game.cover}
        height="360"
        className="game-card__image"
      />
      <CardContentNoPadding>
        <CardActionsEdited className="buttons-group">
          <Button size="large" variant="outlined">
            {" "}
            Details
          </Button>
          <Button size="large" variant="contained">
            Favorite
          </Button>
        </CardActionsEdited>
      </CardContentNoPadding>
    </Card>
  ));
};

const CardContentNoPadding = styled(CardContent)(`
    padding: 0;
    &:last-child {
        padding-bottom: 0
    }
`);

const CardActionsEdited = styled(CardActions)(`
    >:not(:first-of-type) {
        margin-left: 0
    }
`);

export default GameCard;
