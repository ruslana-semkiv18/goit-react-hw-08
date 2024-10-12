import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>Home</PageTitle>
      <h1 className={css.title}>Welcome to the Phone Directory!</h1>
    </div>
  );
}