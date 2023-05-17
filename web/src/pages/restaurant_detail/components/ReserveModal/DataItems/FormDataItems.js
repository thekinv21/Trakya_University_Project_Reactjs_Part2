import { HStack, Box } from "@chakra-ui/react";
import styles from "./DataItems.module.css";
import { FcConferenceCall, FcCalendar, FcClock } from "react-icons/fc";

const DataItems = ({ data }) => {
  return (
    <HStack className={styles.hstack}>
      <Box className={styles.item}>
        <FcConferenceCall fontSize={20} />
        {data.peoples}
      </Box>
      <Box className={styles.item}>
        <FcCalendar fontSize={20} />
        {data.date}
      </Box>
      <Box className={styles.item}>
        <FcClock fontSize={20} />
        {data.clock}
      </Box>
    </HStack>
  );
};

export default DataItems;
