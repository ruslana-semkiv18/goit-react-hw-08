import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}