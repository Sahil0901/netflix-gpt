import React, { useEffect } from "react";
import { Netflix_Logo } from "../utils/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/GptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector((store) => store.user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptClick = () => {
    dispatch(toggleGptSearch());
  };
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black w-screen z-10 flex flex-col md:flex-row justify-center md:justify-between">
      <img
        alt="logo"
        src={Netflix_Logo}
        className=" w-48 mx-auto md:mx-0 "
      ></img>
      {userInfo && (
        <div className="flex">
          <div className="mx-2 p-2">
            <button
              className="text-white bg-purple-600 px-4 py-2 rounded-lg"
              onClick={handleGptClick}
            >
              Gpt Search
            </button>
          </div>
          <div className="mx-4 p-2 flex">
            <img
              alt="userIcon"
              src={userInfo?.photoURL}
              className="w-10 h-10"
            ></img>
            <button onClick={handleSignOut} className="font-bold text-white">
              (Sign Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
