import { Box } from "@mui/material";
import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
