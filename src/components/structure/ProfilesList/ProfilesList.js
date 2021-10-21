import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/api";
import ProfileCard from "../ProfileCard/ProfileCard";
import './ProfileList.scss'
const ProfilesList = ({ userId }) => {
    const [profiles, setProfiles] = useState(undefined);

    const fetchUserById = async () => {
        const response = await Api.getProfilesByUserId(userId, true);
        const resProfiles = await response.json();
        setProfiles(resProfiles);
    };

    useEffect(() => fetchUserById(), []);

    if(!profiles){
        return <div>Loading..</div>
    }

    return <div className="profiles">
        <ProfileCard profiles={profiles} />
    </div>;
};

export default ProfilesList;