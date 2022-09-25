import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Quiz from "./Components/Pages/Quiz/Quiz";
import Result from "./Components/Pages/Result/Result";
import Login from "./Components/Pages/Login/Login";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (number = "", category = "", difficulty = "", type = "") => {
    const { data } = await axios.get(`https://opentdb.com/api.php?${number && `amount=${number}`}${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}${type && `&type=${type}`}`);
    setQuestions(data.results);
  };
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./scott-webb-UjupleczBOY-unsplash.jpg)" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />}></Route>
          <Route path="/quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />}></Route>
          <Route path="/result" element={<Result name={name} score={score} />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
