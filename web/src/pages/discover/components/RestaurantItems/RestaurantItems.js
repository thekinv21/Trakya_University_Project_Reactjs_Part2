import { Pagination } from "antd";
import RestCard from "./../RestaurantCard/RestCard";

const RestaurantItems = ({ rest, currentPage, setCurrentPage }) => {
  return (
    <>
      {rest.content?.map((res) => (
        <RestCard res={res} key={res.id} />
      ))}

      {rest.totalElements / 4 > 1 && (
        <Pagination
          style={{ display: "flex", justifyContent: "flex-end" }}
          total={rest.totalElements}
          current={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      )}
    </>
  );
};

export default RestaurantItems;
