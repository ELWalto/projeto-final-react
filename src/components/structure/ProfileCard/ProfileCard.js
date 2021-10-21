import { Avatar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.scss";

const ProfileCard = ({ profiles }) => {
    return profiles.map((profile, idx) => (
        <Link to="/" key={idx} className="profiles__card">
            <Avatar
                alt="profile avatar"
                src={profile.image}
                sx={{ width: 100, height: 100, margin: "auto" }}
            />
            <Typography>{profile.title}</Typography>
        </Link>
    ));
};

export default ProfileCard;
