import { Typography } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { GroupOfAvatars } from "../../templates/GroupOfAvatars";
import Spinner from "../../templates/Spinner";
const Home = ({ avatars, setAvatars, isLoading, setIsLoading }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const { data: users } = await axios.get(
          "https://randomuser.me/api/?results=120&inc=picture,nat&noinfo"
        );
        const avatarUsers = users.results;
        setIsLoading(false);
        setAvatars(avatarUsers);
      } catch (err) {
        setIsLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Main Page
      </Typography>
      {isLoading ? <Spinner /> : <GroupOfAvatars avatars={avatars} />}
    </>
  );
};
export default Home;
