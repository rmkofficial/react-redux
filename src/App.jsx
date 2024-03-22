import Counter from "./components/Counter";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <UserForm />}
      <Counter />
    </>
  );
}

export default App;
