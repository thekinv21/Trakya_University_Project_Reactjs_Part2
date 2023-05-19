import { useState } from "react";

export const useReserveFilter = ({ reserveData }) => {
  const filterBy = [
    { key: "1", value: "İptal Edilen Rezervasyonlar" },
    { key: "2", value: "Mevcut Rezervasyonlar" },
    { key: "3", value: "Güncellenen Rezervasyonlar" },
    { key: "4", value: "Bütün Rezervasyonlar" },
  ];

  const [filteredData, setFilteredData] = useState(reserveData);
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    e.preventDefault();

    if (filter === "1") setFilteredData(cancelledReserve);
    else if (filter === "2") setFilteredData(availableReserve);
    else if (filter === "3") setFilteredData(updatedReserve);
    else if (filter === "4") setFilteredData(reserveData);
  };

  const availableReserve = reserveData.filter(
    (reserve) => reserve.bookingStatus === "PENDING"
  );

  const cancelledReserve = reserveData.filter(
    (reserve) => reserve.bookingStatus === "CANCELLED"
  );

  const updatedReserve = [];

  return {
    filterBy,
    setFilter,
    handleFilter,
    filteredData,
  };
};
