import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface Props {
  sx?: any;
}

const Copyright: React.FC<Props> = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Online Judge Lab</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
