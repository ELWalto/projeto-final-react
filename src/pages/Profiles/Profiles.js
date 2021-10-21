import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProfilesList from "../../components/structure/ProfilesList/ProfilesList";

const Profiles = () => {
    const { userId } = useParams();
    return (
        <div>
            <ProfilesList userId={userId} />
        </div>
    );
};

export default Profiles;
