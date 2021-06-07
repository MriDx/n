import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Avatar, TextField } from "@material-ui/core";
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },

  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },

  field: {
    margin: theme.spacing(1),

  },

  div: {
    width: 500,
    display: "inline",
    justifyContent: "center",
    alignItems: "center"
  },
}));


const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h1>Edit Profile</h1>
        <div className={classes.div}>
          <Box className={classes.div} margin={8}>
            <Avatar className={classes.large}>Avatar</Avatar>
          </Box>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item>
                <TextField variant="outlined" label="First Name" />
              </Grid>
              <Grid item>
                <TextField variant="outlined" label="Last Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Contact Number" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="Address" />
              </Grid>
              <Grid item>
                <TextField variant="outlined" label="City" />
              </Grid>
              <Grid item>
                <TextField variant="outlined" label="State" />
              </Grid>
              <Grid item>
                <TextField variant="outlined" label="Zip Code" />
              </Grid>
              <Grid item>
                <TextField variant="outlined" label="Country" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth type="password" label="Password" />
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
