import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreching } from "../../redux/auth/selectors";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreching);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Please wait, updating user info...</b>
  ) : (
    <Layout>
      <Suspense fallback={null}> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo={"/"}
            />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo={"/contacts"}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo={"/login"} />
            }
          />
        </Routes>
      </Suspense>
      <Toaster/>  
    </Layout>
  );
}