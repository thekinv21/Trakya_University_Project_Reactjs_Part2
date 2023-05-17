import { Box, Heading, Card, Button } from "@chakra-ui/react";
import { Input } from "antd";
import RestaurantItems from "./../RestaurantItems/RestaurantItems";
import { useFormik } from "formik";
import SelectSortBy from "./../../../../components/shared/selects/SelectSort";

const RestSearch = ({
  cityRef,
  restaurantNameRef,
  initialValues,
  handleClick,
  page,
  setCurrentPage,
  setSelectedSortOption,
  rest,
}) => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,

    onSubmit: () => {
      handleClick();
    },
  });

  const sortOptions = [
    { key: "restaurantName", value: "Restoran Adina Göre" },
    { key: "reviewsCount", value: "Popülerliğine Göre" },
    { key: "averageReviewStar", value: "Yildiz Sayisina Göre" },
  ];

  return (
    <>
      <Card
        p={5}
        overflow="hidden"
        bg="whiteAlpha.200"
        boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
        mb={5}
      >
        {/*=====================SEARCH CARD TITLE==================== */}

        <Box mb={5} w="100%">
          <Heading
            fontWeight="semibold"
            fontSize={["14px", "16px", "18px", "20px"]}
          >
            EDİRNEDEKİ RESTORANLAR
          </Heading>
        </Box>

        {/*=====================SEARCH CARD SUBTITLE==================*/}

        <Heading fontWeight="semibold" fontSize="small" mb={5} color="orange">
          Masa Bul :
        </Heading>

        {/*=====================SEARCH RESTAURANTS===================*/}

        <Box
          as="form"
          display="flex"
          flexDirection={["column", "column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
          gap={5}
        >
          {/*======================ŞEHİRE GÖRE==================*/}

          <Box w="100%">
            <Input
              ref={cityRef}
              name="city"
              value={values.city}
              onChange={handleChange}
              placeholder="Şehire Göre"
              autoComplete="off"
            />
          </Box>

          {/*========================NAME GÖRE======================*/}

          <Box w="100%">
            <Input
              name="restaurantName"
              ref={restaurantNameRef}
              value={values.restaurantName}
              onChange={handleChange}
              placeholder="Restoran İsmi"
              autoComplete="off"
            />
          </Box>

          {/*========================SIRALA======================*/}

          <Box w="100%">
            <SelectSortBy
              name={"sortBy"}
              options={sortOptions}
              getValue={(selectedValue) => {
                setSelectedSortOption(selectedValue);
                values.sortField = selectedValue;
              }}
            />
          </Box>

          {/*=====================ARAMA BUTONU===================*/}

          <Button
            type="submit"
            w="100%"
            bg="rgb(248, 179, 51)"
            color="#fff"
            fontWeight="regular"
            fontSize="small"
            _hover={{ bg: "orange" }}
            size="sm"
            onClick={handleSubmit}
          >
            Filtrele
          </Button>
        </Box>
      </Card>

      {/*=====================RESTAURANTS LİST==================*/}

      <RestaurantItems
        currentPage={page}
        setCurrentPage={setCurrentPage}
        rest={rest}
      />
    </>
  );
};
export default RestSearch;
