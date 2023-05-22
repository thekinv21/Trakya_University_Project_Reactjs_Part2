import { Box, Text, Image } from "@chakra-ui/react";
import { Rate } from "antd";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
  return (
    <Box className={styles.testimonials}>
      <Box className={styles.card}>
        <Box className={styles.card_top}>
          <Box className={styles.profile}>
            <Box className={styles.profileImage}>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/8090/8090406.png"
                alt="user"
              />
            </Box>

            <Box className={styles.userInfo}>
              <Text as={"strong"}> {review.username}</Text>
              <Text color="gray.500" fontSize={12}>
                gizlidir@gmail.com
              </Text>
            </Box>
          </Box>
          <Box className="reviews">
            <Rate disabled value={review.star} style={{ fontSize: "16px" }} />
          </Box>
        </Box>

        <Box className={styles.comment}>
          <Text px={5}>{review.content}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewCard;
