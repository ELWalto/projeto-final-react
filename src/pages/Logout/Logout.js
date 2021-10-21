import React from 'react'
import { Redirect } from 'react-router'
import { JwtHandler } from '../../local-storage/jwt-handler'

const Logout = () => {
    JwtHandler.clearJwt()
    return (
        <div>
            <Redirect to="/" />
        </div>
    )
}

export default Logout
