import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  TextField,
  Chip,
} from "@mui/material";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 45,
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 95,
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 150,
    image: "https://picsum.photos/600/400?random=4",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 35,
    image: "https://picsum.photos/600/400?random=5",
  },
  {
    id: 6,
    name: "USB Hub",
    price: 25,
    image: "https://picsum.photos/600/400?random=6",
  },
];

function Gallery() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <Container sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Product Gallery
        </Typography>

        <Chip color="primary" label={`Cart: ${cartCount}`} />
      </Box>

      <TextField
        fullWidth
        label="Search Products"
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
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            sx={{
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
              image={product.image}
              alt={product.name}
            />

            <CardContent>
              <Typography variant="h6" gutterBottom>
                {product.name}
              </Typography>

              <Typography color="primary" fontWeight="bold">
                ${product.price}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                onClick={addToCart}
              >
                Add To Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Gallery;
