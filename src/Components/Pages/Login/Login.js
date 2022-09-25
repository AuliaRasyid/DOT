import React from "react";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, FormControlLabel, Grid, Paper, TextField, Button, Typography, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const paperStyle = { padding: 20, height: "70vh", width: 280, margin: "20px auto" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={15} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label="Username" placeholder="Enter username" variant="outlined" fullWidth required />
        <TextField label="Password" placeholder="Enter password" type="password" variant="outlined" fullWidth required />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label={
            <Typography variant="caption" style={{ color: "#2979ff" }}>
              Remember Me
            </Typography>
          }
          labelPlacement="end"
        />
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
          Sign in
        </Button>

        <Link to="/home">
          <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
            Play as Quest
          </Button>
        </Link>
        <Link>
          <Typography>Forgot password ?</Typography>
        </Link>
        <Link>
          <Typography> Do you have an account ?Sign Up</Typography>
        </Link>
      </Paper>
    </Grid>
  );
};

export default Login;
