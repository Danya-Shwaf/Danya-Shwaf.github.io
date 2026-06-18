import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const projects = [
  {
    title: "Complaint Management System",
    description: "Web application for tracking and managing complaints.",
    link: "https://github.com/Danya-Shwaf/",
  },
  {
    title: "Electronic Payment System",
    description: "Web application for electronic payments and transactions.",
    link: "https://github.com/Danya-Shwaf/Electronic-Payment-System",
  },
  {
    title: "E-Planet Shopping",
    description: "E-commerce platform for online shopping.",
    link: "https://github.com/Danya-Shwaf/e-plantShopping",
  },
];

function ProjectsSection() {
  return (
    <Container sx={{ py: 5 }} id="projects">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3,1fr)",
          },
          gap: 3,
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            sx={{
              height: "100%",
              transition: ".3s",
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>

              <Typography color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" href={project.link} target="_blank">
                View Project
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default ProjectsSection;
