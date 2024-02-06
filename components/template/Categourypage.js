import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Categourypage.module.css";
import Box from "@mui/material/Box";
import MenuCard from "../modules/MenuCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { red } from "@mui/material/colors";
export default function Categourypage(props) {
  const [query, setQuery] = useState({
    difficulty: props.query.difficulty,
    time: props.query.time,
  });

  const router = useRouter();
  const clickHandler = () => {
    if (query.difficulty || query.time) {
      router.push({ pathname: "/categoury", query: query });
    }
  };

  /////
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.container}>
      <h1>Categoury</h1>
      <div className={styles.subContainer}>
        {/* <select
          className={styles.difficulty}
          value={query.difficulty}
          name="difficulty"
          onChange={changeHandler}
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          className={styles.time}
          value={query.time}
          name="time"
          onChange={changeHandler}
        >
          <option value="">Cooking Time</option>
          <option value="more">More than 30 Min</option>
          <option value="less">Less than 30 Min</option>
        </select> */}

        <Box>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="difficulty">Difficulty</InputLabel>
            <Select
              sx={{ borderColor: red[50] }}
              selected
              className={styles.MenuItem}
              labelId="difficulty"
              name="difficulty"
              id="difficulty"
              value={query.difficulty}
              label="Difficulty"
              onChange={changeHandler}
            >
              <MenuItem value="">
                <em>NONE</em>
              </MenuItem>
              <MenuItem value="Easy">Easy</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Hard">Hard</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="cooking-time">Cooking Time</InputLabel>
            <Select
              labelId="cooking-time"
              name="time"
              id="cooking-time"
              value={query.time}
              label="Cooking Time"
              onChange={changeHandler}
            >
              <MenuItem value="">
                <em>NONE</em>
              </MenuItem>
              <MenuItem value="more">More than 30 min</MenuItem>
              <MenuItem value="less">Less than 30 min</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* <button onClick={() => clickHandler()}>Search</button> */}
        <Button
          variant="contained"
          className={styles.button}
          startIcon={<SearchIcon />}
          onClick={() => clickHandler()}
        >
          Search
        </Button>
      </div>
      <div className={styles.cards}>
        {props.data.map((item) => (
          <MenuCard food={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
