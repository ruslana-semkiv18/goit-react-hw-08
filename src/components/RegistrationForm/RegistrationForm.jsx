import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const id = useId();
    
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.wrapInput}>
        <label htmlFor={`${id}-name`} className={css.label}>Username</label>
        <Field id={`${id}-name`} type="text" name="name" className={css.input}/>
        </div>
        <div className={css.wrapInput}>
        <label htmlFor={`${id}-email`} className={css.label}>Email</label>
        <Field id={`${id}-email`} type="email" name="email" className={css.input}/>
        </div>
        <div className={css.wrapInput}>
        <label htmlFor={`${id}-password`} className={css.label}>Password</label>
        <Field id={`${id}-password`} type="password" name="password" className={css.input}/>
        </div>
        <button type="submit" className={css.button}>Registration</button>
      </Form>
    </Formik>
  );
}