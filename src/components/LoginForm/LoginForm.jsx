import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import { logIn } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const id = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.wrapInput}>
        <label htmlFor={`${id}-email`} className={css.label}>Email</label>
        <Field id={`${id}-email`} type="email" name="email" className={css.input}/>
        </div>
        <div className={css.wrapInput}>
        <label htmlFor={`${id}-password`} className={css.label}>Password</label>
        <Field id={`${id}-password`} type="password" name="password" className={css.input}/>
        </div>
        <button className={css.button} type="submit" disabled={isLoading}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}