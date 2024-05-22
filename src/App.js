import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import { useState } from "react";

import "./App.css";
import {HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import PostListProvider from "./Store/PostListStore";

export default function App() {
  const [pageTheme, setTheme] = useState(
    createTheme({
      palette: {
        mode: "dark",
      },
    })
  );

  const changeTheme = () => {
    setTheme((prev) =>
      createTheme({
        palette: {
          mode: prev.palette.mode === "light" ? "dark" : "light",
        },
      })
    );
  };
  return (
    <ThemeProvider theme={pageTheme}>
      <PostListProvider>
        <HashRouter>
          <CssBaseline />
          <Topbar changeTheme={changeTheme} />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/CreatePost" element={<CreatePost />}></Route>
          </Routes>
          <Footer />
        </HashRouter>
      </PostListProvider>
    </ThemeProvider>
  );
}
