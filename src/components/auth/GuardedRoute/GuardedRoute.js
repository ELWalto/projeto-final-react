import React from "react";
import { Redirect, Route } from "react-router";
import { JwtHandler } from "../../../local-storage/jwt-handler";

const GuardedRoute = ({ component: Component, ...rest }) => {
    const auth = JwtHandler.isJwtValid();
    return (
        <Route
            {...rest}
            render={(props) =>
                auth === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default GuardedRoute;
