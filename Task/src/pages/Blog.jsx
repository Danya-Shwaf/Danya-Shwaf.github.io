import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  TextField,
} from "@mui/material";

import { useState } from "react";

const posts = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: `Blog Post ${index + 1}`,
  date: "June 2026",
  image: `https://picsum.photos/600/400?random=${index + 1}`,
  shortText:
    "Learn modern front-end development techniques and best practices.",
  fullText:
    "This article covers advanced concepts in front-end development including responsive design, component-based architecture, performance optimization, accessibility, and user experience improvements. These practices help developers build scalable and maintainable applications.",
}));

function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Container sx={{ py: 6, minHeight: "70vh" }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        Blog
      </Typography>

      <Typography textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
        Articles about Front-End Development, React and Web Design.
      </Typography>

      <TextField
        fullWidth
        label="Search Articles"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 5 }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          },
          gap: 3,
        }}
      >
        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            sx={{
              height: "100%",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              height="220"
              image={post.image}
              alt={post.title}
            />

            <CardContent>
              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {post.date}
              </Typography>

              <Typography sx={{ mt: 2 }}>
                {expandedPost === post.id ? post.fullText : post.shortText}
              </Typography>

              <Button
                variant="contained"
                sx={{ mt: 3 }}
                onClick={() =>
                  setExpandedPost(expandedPost === post.id ? null : post.id)
                }
              >
                {expandedPost === post.id ? "Show Less" : "Read More"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Blog;
