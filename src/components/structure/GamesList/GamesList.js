import "./GamesList.scss";
import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/api";
import VideoEmbed from "../VideoEmbed/VideoEmbed";
import GameCard from "../GameCard/GameCard";
import ContentLoader from "react-content-loader";

const GamesList = () => {
  const [games, setGames] = useState(undefined);

  const fetchGetAll = async () => {
    const response = await Api.getAll("games", true);
    const res = await response.json();
    setGames(res);
  };

  useEffect(() => fetchGetAll(), []);

  if (!games) {
    const MyLoader = (props) => (
      <ContentLoader
        speed={2}
        width={280}
        height={320}
        viewBox="0 0 320 320"
        backgroundColor="#dedede"
        foregroundColor="#4a4a4a"
        {...props}
      >
        <rect x="9" y="2" rx="2" ry="2" width="141" height="214" />
        <rect x="277" y="451" rx="0" ry="0" width="11" height="0" />
        <rect x="37" y="229" rx="0" ry="0" width="85" height="18" />
        <rect x="37" y="255" rx="0" ry="0" width="85" height="18" />
        <rect x="163" y="3" rx="2" ry="2" width="141" height="214" />
        <rect x="191" y="230" rx="0" ry="0" width="85" height="18" />
        <rect x="191" y="256" rx="0" ry="0" width="85" height="18" />
      </ContentLoader>
    );
    return <MyLoader />;
  }

  return (
    <div className="games-group">
      <GameCard games={games} />
    </div>
  );
};

export default GamesList;
