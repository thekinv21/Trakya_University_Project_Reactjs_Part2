import { useGetReviews } from "./../../../../../../services/restaurantService/restaurant.service";
import { Heading } from "@chakra-ui/react";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import ReviewForm from "./components/ReviewForm/ReviewForm";

const RestReviews = ({ restaurantId }) => {
  const { data, isLoading, refetch } = useGetReviews(restaurantId);

  if (isLoading) return <p>Yükleniyor...</p>;

  return (
    <>
      {data.length ? (
        data.map((review, index) => <ReviewCard key={index} review={review} />)
      ) : (
        <Heading
          fontWeight={100}
          textAlign="center"
          pt={5}
          fontSize={22}
          mb={10}
        >
          Restoran Hakkında Yorum Bulunamadı!
        </Heading>
      )}

      <ReviewForm restaurantId={restaurantId} refetch={refetch} />
    </>
  );
};

export default RestReviews;
