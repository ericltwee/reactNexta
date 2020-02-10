import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import MyProfile from "./components/MyProfilePage";
import UploadPage from "./components/Uploader";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.get("https://insta.nextacademy.com/api/v1/users/").then(result => {
      setUsers(result.data);
      setIsLoading(false);
    });

    let loggedInUser = localStorage.getItem("userInfo");
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
  }, []);

  const signUpUser = (username, email, password, callback) => {
    axios({
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/users/",
      data: {
        username: username,
        email: email,
        password: password
      }
    })
      .then(result => {
        if (result.data.status === "success") {
          toast.info("Registered account!", toastSettings);
          callback();
        } else {
          toast.warning("Oops, something went wrong!", toastSettings);
        }
      })
      .catch(err => {
        let delay = 500;
        err.response.data.message.forEach(message => {
          setTimeout(() => {
            toast.error(message, toastSettings);
          }, delay);
          delay += 500;
        });
      });
  };

  const loginUser = (username, password, callback) => {
    axios({
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/login",
      data: {
        username: username,
        password: password
      }
    })
      .then(response => {
        if (response.status === 201) {
          toast.info(`Hi ${response.data.user.username}`, toastSettings);
          localStorage.setItem("authToken", response.data.auth_token);
          localStorage.setItem("userInfo", JSON.stringify(response.data.user));
          setCurrentUser(response.data.user);
          callback();
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          toast.error(
            "Invalid credentials, check and try again.",
            toastSettings
          );
        }
      });
  };

  const logoutUser = () => {
    toast.info("Successfully logged out", toastSettings);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <NavBar
        signUpUser={signUpUser}
        loginUser={loginUser}
        logoutUser={logoutUser}
        currentUser={currentUser}
      />
      <ToastContainer />
      <header className="App-header">
        <Route exact path="/">
          <HomePage users={users} isLoading={isLoading} />
        </Route>
        <Route path="/user/:id/:username">
          <UserProfile users={users} />
        </Route>
        <Route path="/profile">
          <MyProfile />
        </Route>
        <Route path="/uploadpic">
          <UploadPage />
        </Route>
      </header>
    </div>
  );
}

const toastSettings = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

export default App;
