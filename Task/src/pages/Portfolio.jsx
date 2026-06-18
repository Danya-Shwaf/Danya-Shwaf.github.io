import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";

import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import ProjectsSection from "../components/ProjectsSection";
import image from "../assets/image1.png";
import { useNavigate } from "react-router-dom";
function Portfolio() {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero */}
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          {/* Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  md: "4rem",
                },
              }}
            >
              Danya Shawaf
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
              Front-End Developer & Software Engineering Student
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 600,
              }}
            >
              Passionate about building modern, responsive and user-friendly web
              applications using React, JavaScript and Material UI.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button variant="contained" href="#projects">
                View Projects
              </Button>

              <Button variant="outlined" onClick={() => navigate("/contact")}>
                Contact Me
              </Button>
            </Stack>

            <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
              <a
                href="https://github.com/Danya-Shwaf"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub fontSize="large" color="primary" />
              </a>

              <a
                href="https://linkedin.com/danya-shawaf"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn fontSize="large" color="primary" />
              </a>

              <a href="mailto:danyasy990@gmail.com">
                <Email fontSize="large" color="primary" />
              </a>
            </Stack>
          </Box>

          {/* Image */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Avatar
              src={image}
              alt="Danya Shawaf"
              sx={{
                width: {
                  xs: 200,
                  md: 320,
                },
                height: {
                  xs: 200,
                  md: 320,
                },
                boxShadow: 6,
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* About */}
      <Container sx={{ py: 4 }}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>

            <Typography>
              I'm Danya Shawaf, a Software Engineering student passionate about
              Front-End Development and creating modern, responsive user
              interfaces.
            </Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Skills */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>

        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Chip label="HTML5" color="primary" />
          <Chip label="CSS3" color="success" />
          <Chip label="JavaScript" color="warning" />
          <Chip label="Tailwind" color="info" />
          <Chip label="React" color="error" />
          <Chip label="MUI" color="secondary" />
          <Chip label="Git & GitHub" />
        </Stack>
      </Container>
      <ProjectsSection />
    </>
  );
}

export default Portfolio;
