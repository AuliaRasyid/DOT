import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Home.css";
import Categories from "../../../Data/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);
  const min = 0;
  const max = 50;
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name || !type || !number) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(number, category, difficulty, type);
      navigate("/quiz");
    }
  };
  return (
    <div className="content">
      <div className="settings">
        <span>Quiz Settings</span>
        <div className="settings_select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}

          <TextField style={{ marginBottom: 15 }} label=" Enter Your Name " variant="outlined" onChange={(e) => setName(e.target.value)} />

          <TextField
            style={{ marginBottom: 15 }}
            type="number"
            label=" Number of Questions "
            variant="outlined"
            inputProps={{ min, max }}
            onChange={(e) => {
              var value = parseInt(e.target.value, 10);
              if (value > max) value = max;
              if (value < min) value = min;
              setNumber(value);
            }}
          />

          <TextField select style={{ marginBottom: 15 }} label="Select Category" variant="outlined" onChange={(e) => setCategory(e.target.value)} value={category}>
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField select label="Select Difficulty" variant="outlined" style={{ marginBottom: 15 }} onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <TextField select label="Select Type" variant="outlined" style={{ marginBottom: 15 }} onChange={(e) => setType(e.target.value)} value={type}>
            <MenuItem key="Multiple Choice" value="multiple">
              Multiple Choice
            </MenuItem>
            <MenuItem key="True/False" value="boolean">
              True/False
            </MenuItem>
          </TextField>

          <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="quiz.svg" className="banner" alt="quiz image"></img>
    </div>
  );
};

export default Home;
