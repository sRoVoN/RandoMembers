import { Box, Typography, Avatar, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";

export const Grids = ({ member, index, loading, setLoading }) => {
  useEffect(() => {
    setLoading(true);

    return() => {
      setLoading(false);
    }

  }, []);
  return (
    <Slide
    direction="left"
    in={loading}
    style={{
      transitionDelay: loading ? `${index + 1}99ms` : "0ms"
    }}
    >
    <Grid sx={{ justifyContent: "center", textAlign: "center" }}>
      <Box sx={{ width: 200, height: 200, borderRadius: "50%", m: 2 }}>
        <Avatar
          src={member.picture.medium}
          sx={{ height: 100, width: 100, ml: 6 }}
        />
        <Typography
          variant="h6"
          style={{ color: "orange" }}
        >{`${member.name.title} ${member.name.first} ${member.name.last} `}</Typography>
        <Typography variant="body2">{member.location.city}</Typography>
        <Typography variant="body2">{member.location.country}</Typography>
      </Box>
    </Grid>
    </Slide>
  );
};
