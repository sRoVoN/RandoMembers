import { AvatarGroup, Avatar, Box } from "@mui/material";

export const GroupOfAvatars = ({ avatars }) => {
  return (
    <Box
      sx={{ p: 5, border: "1px solid pink" }}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
    >
      <AvatarGroup max={30}>
        {avatars.map((avatar, index) => (
          <Avatar alt={avatar.nat} key={index} src={avatar.picture.thumbnail} />
        ))}
      </AvatarGroup>
    </Box>
  );
};
