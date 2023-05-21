import { useState } from "react";
import { useGetMenuByRestId } from "../../../../../../services/menuService/menu.service";
import MenuCard from "./components/MenuCard";
import { Pagination } from "antd";
import { Heading } from "@chakra-ui/react";

const RestMenu = ({ restaurantId }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading } = useGetMenuByRestId(restaurantId, currentPage);

  if (isLoading) return <p>Yükleniyor</p>;

  return (
    <>
      {data.content.length ? (
        <>
          {data.content.map((menu , index) => (
            <MenuCard key={index} menuInfo={menu} />
          ))}
          {data.totalElements > 2 && (
            <Pagination
              style={{ justifyContent: "flex-end" }}
              total={data.totalElements}
              current={currentPage}
              onChange={setCurrentPage}
            />
          )}
        </>
      ) : (
        <Heading fontWeight={100} textAlign="center" pt={5} fontSize={22}>
          Restoranın Yemek Menüsü Bulunamadı!
        </Heading>
      )}
    </>
  );
};

export default RestMenu;
