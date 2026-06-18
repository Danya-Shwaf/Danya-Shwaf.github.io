import { Box, Container, Typography, Stack, IconButton } from "@mui/material";

import { GitHub, LinkedIn, Email } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="h6">Danya Shawaf</Typography>

          <Stack direction="row" spacing={1}>
            <IconButton>
              <GitHub />
            </IconButton>

            <IconButton>
              <LinkedIn />
            </IconButton>

            <IconButton>
              <Email />
            </IconButton>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            © 2026 All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
