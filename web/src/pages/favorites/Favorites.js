import Container from "../../components/container/Container";
import { Box } from "@chakra-ui/react";
import UserCard from "./../../components/cards/user/UserCard";
import NotfoundFavorite from "./components/NotfoundFavorite";
import { useGetFavorites } from "../../api/restaurant";
import RestaurantCard from "../main/components/restaurant_list/RestaurantCard/RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";

const Favorites = () => {
  //*==============FAVORİTE RESTAURANTS LİST=============
  const userId = JSON.parse(sessionStorage.getItem("token"));
  const { data, isLoading } = useGetFavorites(userId.user.id);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (isLoading) return;
    setFilteredData(data?.content);
  }, [isLoading, data]);

  const onClick = (e) => {
    console.log("basildi", e);
    setFilteredData(filteredData.filter((x) => x.id !== e));
  };

  if (isLoading) return data;

  return (
    <Container>
      {/*=================FAVORİTES CONTAİNER===============*/}
      <Box
        padding={10}
        className="container"
        display="flex"
        alignItems="start"
        justifyContent="center"
        gap={5}
      >
        {/*=================FAVORİTES USERCARD===============*/}

        <UserCard />

        {/*================FAVORİ RESTAURANT VARSA============ */}

        <Box
          display="flex"
          justifyContent={["center", "center", "center", "start"]}
          alignItems="center"
          flexWrap="wrap"
          gap={5}
        >
          {filteredData?.length ? (
            filteredData?.map((fav, index) => (
              <RestaurantCard
                key={index}
                onClick={onClick}
                restaurant={{ ...fav, isFavorite: true }}
                favData={data.content}
              />
            ))
          ) : (
            <NotfoundFavorite />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Favorites;
