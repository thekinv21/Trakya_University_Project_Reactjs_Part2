import { useGetFavorites } from "../../api/restaurant";
import { useState } from "react";
import { useEffect } from "react";

export const useFavorites = () => {
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

  return {
    onClick,
    isLoading,
    filteredData,
    data,
  };
};
