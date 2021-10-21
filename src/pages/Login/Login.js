// import { Box, Button, TextField } from "@mui/material";
// // import React from "react";
// import { Api } from "../../api/api";
// import { JwtHandler } from "../../local-storage/jwt-handler";
// import { TextFieldEdited } from "../NewGame/NewGame";

// const Login = (props) => {
// const handleSubmit = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;

//     const payload = {
//         email,
//         password,
//     };

//     const response = await Api.login(payload);

//     const body = await response.json();

//     if (response.status === 200) {
//         const accessToken = body.accessToken;
//         JwtHandler.setJwt(accessToken);
//         console.log(accessToken);

//         props.history.push("/");
//     }
// };

//     return (
//         <Box component="form" onSubmit={handleSubmit}>
//             <TextFieldEdited label="E-mail" name="email" />
//             <TextFieldEdited label="Password" name="password" type="password" />
//             <Button type="submit">Send</Button>
//         </Box>
//     );
// };

// export default Login;

import * as React from "react";

import { Api } from "../../Api/api";
import { JwtHandler } from "../../local-storage/jwt-handler";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/ELWalto">
        Visit my github
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Login = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = {
      email,
      password,
    };

    const response = await Api.login(payload);

    const body = await response.json();

    if (response.status === 200) {
      const accessToken = body.accessToken;
      JwtHandler.setJwt(accessToken);
      console.log(accessToken);

      props.history.push("/");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
export default Login;
