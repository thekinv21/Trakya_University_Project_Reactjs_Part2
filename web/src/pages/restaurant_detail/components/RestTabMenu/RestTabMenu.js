import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { styles } from "./RestTabMenuStyle";
import RestImages from "./components/RestImages/RestImages";
import RestMenu from "./components/RestMenu/RestMenu";
import RestAbout from "./components/RestAbout/RestAbout";
import RestReviews from "./components/RestReviews/RestReviews"

const RestTabMenu = ({ restaurantInfo }) => {
  return (
    <Tabs sx={styles.tabs}>
      {/*=====================REST HEADER================== */}
      <TabList sx={styles.tablist}>
        <Tab>Hakkinda</Tab>
        <Tab>Menulari</Tab>
        <Tab>Resimleri</Tab>
        <Tab>Yorumlar</Tab>
      </TabList>

      {/*=====================REST TABS================== */}

      <TabPanels>
        {/*=====================REST ABOUT================== */}
        <TabPanel>
          <RestAbout restaurantInfo={restaurantInfo} />
        </TabPanel>

        {/*=====================REST MeNU================== */}
        <TabPanel>
          <RestMenu />
        </TabPanel>

        {/*=====================REST IMAGES================== */}
        <TabPanel>
          <RestImages restaurantImages={restaurantInfo.restaurantImageList} />
        </TabPanel>

        {/*=====================REST REVİEWS================== */}
        <TabPanel>
          <RestReviews />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RestTabMenu;
