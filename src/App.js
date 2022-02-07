import "./App.css";

// Router
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./Store/store";

// Components
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./views/Homepage";
import Contact from "./views/Contact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
