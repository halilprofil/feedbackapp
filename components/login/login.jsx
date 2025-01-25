"use client";
import styles from "./page.module.css";
import { useFormState } from "react-dom";
import { loginUser, signupUser } from "@/app/api/action"; // signupUser'ı ekledik
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";

export default function Login({ login }) {
  const dialogRef = useRef(null);
  const [state, action] = useFormState(loginUser, null);
  const [signupState, signupAction] = useFormState(signupUser, null); // Signup için yeni useFormState
  const [isSignup, setIsSignup] = useState(false); // Formun hangi modda olduğunu tutan state

  useEffect(() => {
    // Eğer dialog açık değilse, aç
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [login]);

  useEffect(() => {
    console.log(state?.success);
    console.log();
    if (state?.error) {
      toast.error(state?.error);
    }
    if (state?.success) {
      toast.success(state?.success);
      dialogRef.current.close();
    }
  }, [state]);

  useEffect(() => {
    console.log(signupState?.success);
    console.log();
    if (signupState?.error) {
      toast.error(signupState?.error);
    }
    if (signupState?.success) {
      toast.success(signupState?.success);
      dialogRef.current.close();
    }
  }, [signupState]);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className={styles.modal} open={true}>
        <h2 className={styles.modalH2}>{isSignup ? "Create an Account" : "Join Feedback App"}</h2>

        {/* Login formu */}
        {!isSignup && (
          <form action={action} className={styles.loginForm}>
            <label htmlFor="userName">User Name</label>
            <input className={styles.formİnput} id="userName" name="userName" type="text" />

            <label htmlFor="email">Email</label>
            <input className={styles.formİnput} id="email" name="email" type="email" />

            <label htmlFor="password">Password</label>
            <input className={styles.formİnput} id="password" name="password" type="password" />

            <button className={styles.loginFormBtn}>Log in</button>

            <div className={styles.signUp}>
              <p>Don&apos;t have an account? </p>
              <button className={styles.statusSelectorButton} type="button" onClick={toggleForm}>
                Sign up
              </button>
            </div>
          </form>
        )}

        {/* Signup formu */}
        {isSignup && (
          <form action={signupAction} className={styles.loginForm}>
            <label htmlFor="firstName">First Name</label>
            <input className={styles.formİnput} id="firstName" name="firstName" type="text" />
            {signupState?.firstName?.error && <div className={styles.error}>{signupState.firstName.error}</div>}

            <label htmlFor="lastName">Last Name</label>
            <input className={styles.formİnput} id="lastName" name="lastName" type="text" />
            {signupState?.lastName?.error && <div className={styles.error}>{signupState.lastName.error}</div>}

            <label htmlFor="avatar">Avatar</label>
            <input className={styles.formİnput} id="avatar" name="avatar" type="text" />
            {signupState?.avatar?.error && <div className={styles.error}>{signupState.avatar.error}</div>}

            <label htmlFor="nickname">Nickname</label>
            <input className={styles.formİnput} id="nickname" name="nickname" type="text" />
            {signupState?.nickname?.error && <div className={styles.error}>{signupState.nickname.error}</div>}

            <label htmlFor="email">Email</label>
            <input className={styles.formİnput} id="email" name="email" type="email" />
            {signupState?.email?.error && <div className={styles.error}>{signupState.email.error}</div>}

            <label htmlFor="password">Password</label>
            <input className={styles.formİnput} id="password" name="password" type="password" />
            {signupState?.password?.error && <div className={styles.error}>{signupState.password.error}</div>}

            <button className={styles.signupFormBtn}>Sign Up</button>

            <div className={styles.signUp}>
              <p>Already have an account?</p>
              <button className={styles.statusSelectorButton} type="button" onClick={toggleForm}>
                Log in
              </button>
            </div>
          </form>
        )}

        <button onClick={closeDialog} className={styles.closeModal}>
          x
        </button>
      </dialog>
    </>
  );
}
