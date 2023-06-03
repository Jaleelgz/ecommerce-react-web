import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import Toast from "./common/Toast/Toast";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute/PrivateRoute";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useEffect } from "react";
import { getUser } from "./utils/authServices";
import { setUser } from "./store/slices/UserSlice";

const App = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast.value);

  const checkUser = () => {
    const tmpUserData = getUser();

    if (tmpUserData) {
      dispatch(setUser(tmpUserData));
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        {toast.visibility && <Toast />}

        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="cart" element={<Layout />}>
              <Route exact index element={<CartPage />} />
            </Route>
          </Route>

          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<Layout />}>
            <Route exact index element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
