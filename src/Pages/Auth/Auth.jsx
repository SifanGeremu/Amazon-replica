import React, { useContext, useState } from "react";
import classes from "../Auth/SignUp.module.css";
import { Link,useNavigate,useLocation } from "react-router-dom";
import logo from "../../assets/images/amazonlogo1.jpg";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { auth } from "../../utility/Firebase";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate =useNavigate();
  const navStateData =useLocation();
  console.log(user);

  const authhandler = async (e) => {
    e.preventDefault();
    const action = e.target.name;

    if (action === "signIn") {
      setLoading((prev) => ({ ...prev, signIn: true }));
      signInWithEmailAndPassword(auth, Email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: "SET_USER",
            user: userInfo.user,
          });
        })
        .catch((err) => {
          setErr(err.message);
        })
        .finally(() => {
          setLoading((prev) => ({ ...prev, signIn: false }));
          navigate(navStateData?.state?.redirect || "/");
        });
    } else {
      setLoading((prev) => ({ ...prev, signUp: true }));
      createUserWithEmailAndPassword(auth, Email, password)
        .then((userInfo) => {
          dispatch({
            type: "SET_USER",
            user: userInfo.user,
          });
        })
        .catch((err) => {
          setErr(err.message);
        })
        .finally(() => {
          setLoading((prev) => ({ ...prev, signUp: false }));
          navigate(navStateData?.state?.redirect || "/");
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img src={logo} alt="Amazon Logo" />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        {err && <p style={{ color: "red" }}>{err}</p>}{" "}
        {/*  Show error message */}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={Email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            name="signIn"
            onClick={authhandler}
            className={classes.login__signinbutton}
            disabled={loading.signIn}
          >
            {loading.signIn ? (
              <ClipLoader color="black" size={20} />
            ) : (
              "Sign In"
            )}
          </button>
          {/* {navStateData.state.msg && (
            <small
              style={{
                padding: "5px",
                textAlign: "center",
                color: "red",
                fontWeight: "bold",
              }}
            > {navStateData.state.msg}</small>
          )} */}

          <p>
            This is an Amazon clone built by young and energetic developer Sifan
            Geremu who holds a BSc degree in Computer Science. Feel free to
            contact me!
          </p>

          <button
            type="submit"
            name="signUp"
            onClick={authhandler}
            className={classes.login__createaccount}
            disabled={loading.signUp}
          >
            {loading.signUp ? (
              <ClipLoader color="black" size={20} />
            ) : (
              "Create Your Amazon Account"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Auth;
