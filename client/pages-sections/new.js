import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardMedia
        component="img"
        height="300"
        width="300"
        image="/img/accident.jfif"
        alt="green iguana"
      />
    </Card>
  );
}
