import React from "react";

import "./App.css";

import Grid from "@mui/material/Grid";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header user={'Hello'} logo={'React'} />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          Grid 8
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
