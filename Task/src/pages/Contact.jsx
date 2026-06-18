import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

import { useState } from "react";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all fields before sending.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Your message was sent successfully. I will reply soon!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card elevation={4}>
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Contact Me
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mb: 4, textAlign: "center" }}
          >
            Feel free to reach out anytime.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                label="Message"
                name="message"
                multiline
                rows={5}
                fullWidth
                value={formData.message}
                onChange={handleChange}
              />

              {error && <Typography color="error">{error}</Typography>}
              {success && (
                <Typography color="success.main">{success}</Typography>
              )}

              <Button type="submit" variant="contained" size="large">
                Send Message
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Contact;
