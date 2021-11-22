import React from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
// import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  }
}));

export default function AddStudent() {
  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [year, setYear] = React.useState("");
  const [major, setMajor] = React.useState("");

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handleYearChange = event => setYear(event.target.value);
  const handleMajorChange = event => setMajor(event.target.value);

  const [message, setMessage] = React.useState("Nothing saved in the session");

  async function sampleFunc(toInput) {
    console.log(toInput);
    const response = await fetch("/api/student", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    let body = await response.json();
    console.log(body.id);
    // TODO: IF SUCCESSFULLY CREATED ACCOUNT, PROMPT LOG IN BUTTON
    setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const toInput = { email, password, firstName, lastName, year, major };
    sampleFunc(toInput);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setYear("");
    setMajor("");
  };

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={email}
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                value={password}
                label="Password"
                name="password"
                autoComplete="password"
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fname"
                value={firstName}
                label="First Name"
                name="firstName"
                autoComplete="name"
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lname"
                value={lastName}
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleLastNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="year"
                name="year"
                variant="outlined"
                required
                fullWidth
                value={year}
                id="year"
                label="Year"
                onChange={handleYearChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="major"
                value={major}
                label="Major"
                name="major"
                autoComplete="major"
                onChange={handleMajorChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Save
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/view">View Student Records</Link>
            </Grid>
          </Grid>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
      </div>
    </Container>
  );
}

// import React from 'react';

// function AddStudent(){
//   return <div>
//     <h2>
//       this is add student
//     </h2>
//   </div>
// }

// export default AddStudent;