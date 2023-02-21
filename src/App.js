import { useEffect } from "react";
import "./App.css";
import AuthPage from "./Pages/AuthPage";
import UserPage from "./Pages/UserPage";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "./Redux/authActions";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    } else if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error, message]);

  return (
    <div className="App">
      {!loading && isAuthenticated ? <UserPage/> : <AuthPage />}{" "}
      <Toaster />
    </div>
  );
}

export default App;
