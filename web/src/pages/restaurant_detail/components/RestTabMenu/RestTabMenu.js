import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { styles } from "./RestTabMenuStyle";
import RestImages from "./components/RestImages/RestImages";
import RestMenu from "./components/RestMenu/RestMenu";
import RestAbout from "./components/RestAbout/RestAbout";
import RestReviews from "./components/RestReviews/RestReviews";

const RestTabMenu = ({ restaurantInfo }) => {
  return (
    <Tabs sx={styles.tabs}>
      <TabList sx={styles.tablist} fontFamily="heading">
        <Tab>Hakkında</Tab>
        <Tab>Yemekleri</Tab>
        <Tab>Resimleri</Tab>
        <Tab>Yorumlar</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <RestAbout restaurantInfo={restaurantInfo} />
        </TabPanel>

        <TabPanel>
          <RestMenu restaurantId={restaurantInfo.id} />
        </TabPanel>

        <TabPanel>
          <RestImages restaurantImages={restaurantInfo.restaurantImageList} />
        </TabPanel>

        <TabPanel>
          <RestReviews restaurantId={restaurantInfo.id} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RestTabMenu;
