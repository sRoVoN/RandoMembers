import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { Grid } from "@mui/material";

export const Cards = ({ member }) => {
  return (
    <Grid
      display="flex"
      sx={{ justifyContent: "center", textAlign: "center" }}
      spacing={2}
    >
      <Card
        sx={{
          maxWidth: 300,
          backgroundColor: "lightblue",
          mr: 2,
          p: 2,
          mb: 2,
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            width="30"
            image={member.picture.large}
            alt={member.name.last}
          />
          <CardContent>
            <Typography variant="h6">{`${member.name.first} ${member.name.last} `}</Typography>
            <Typography variant="body2">{member.location.contrey}</Typography>
            <Typography variant="body2">{member.location.city}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button hre="" size="small" color="primary" target="_blank">
            more information
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
