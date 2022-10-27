import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Title = ({ text }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 45,
          display: "flex",
          flexDirection: "center",
          mt: 10,
          "@media (max-width:768px)": { width: 222, height: 600 },
        }}
        color="text.primary"
        gutterBottom
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Title;
