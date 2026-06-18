import {
  Container,
  Paper,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";

import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    if (!input) return;

    const sanitized = input.replace(/[^0-9.+\-*/()%]/g, "");

    try {
      // Use a safe function to evaluate only math expressions.
      const result = Function(`"use strict"; return (${sanitized})`)();
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "AC",
    "⌫",
    "%",
    "/",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "+",
    "0",
    ".",
    "=",
  ];


  return (
    <Container maxWidth="xs" sx={{ py: 4 , mt: 1.5}}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Calculator
        </Typography>

        <TextField
          fullWidth
          value={input}
          sx={{ mb: 3 }}
          InputProps={{
            readOnly: true,
          }}
        />

        <Grid container spacing={2}>
          {buttons.map((btn) => (
            <Grid item xs={3} md={4} key={btn}>
              <Button
                fullWidth
                variant={btn === "=" ? "contained" : "outlined"}
                color={btn === "AC" ? "error" : btn === "=" ? "primary" : "inherit"}
                onClick={() => {
                  if (btn === "=") calculate();
                  else if (btn === "AC") clearInput();
                  else if (btn === "⌫") deleteLast();
                  else handleClick(btn);
                }}
              >
                {btn}
              </Button>
            </Grid>
          ))}
        </Grid>

        <Button
          fullWidth
          color="error"
          variant="contained"
          sx={{ mt: 2 }}
          onClick={clearInput}
        >
          Clear
        </Button>
      </Paper>
    </Container>
  );
}

export default Calculator;
