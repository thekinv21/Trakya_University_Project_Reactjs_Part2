import React from "react";
import {
  Card,
  Stack,
  Image,
  Text,
  CardBody,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import User from "../../../assets/svg/ProfileCardUser.svg";
import { useSelector } from "react-redux";

const UserCard = ({ user }) => {
  //?===================USERCARD LİNKS==================

  const profileLinks = useSelector((state) => state.Link.profileLinks);

  return (
    <React.Fragment>
      {/*================USER CARD CONTAİNER=============== */}

      <Card
        minW="280px"
        maxW="300px"
        h="480px"
        display={["none", "none", "block", "block"]}
      >
        <Stack h="100%" w="100%" justifyContent="center" alignItems="center">
          {/*================USER LOGO=============== */}

          <Image pt={5} src={User} draggable="false" />

          {/*================USER CARD NAME=============== */}

          <Text p={5} fontSize={14}>
            Tekrar Hoşgeldin : {user}
          </Text>

          {/*================USER CARD LİNKS=============== */}

          <CardBody w="full" p="0px" mt="20px">
            {profileLinks.map((link, index) => (
              <UnorderedList key={index} listStyleType="none">
                <Link
                  color="#000"
                  href={link.href}
                  borderTop="0.5px solid #c1c1c1"
                  display="flex"
                  alignItems="center"
                  p="12px 4px"
                  fontSize="14px"
                  _hover={{
                    borderLeft: "8px solid rgb(248, 179, 51)",
                    color: "#FAC050",
                  }}
                >
                  <ListItem pr={5}>{link.icon}</ListItem>
                  <ListItem>{link.name}</ListItem>
                </Link>
              </UnorderedList>
            ))}
          </CardBody>
        </Stack>
      </Card>
    </React.Fragment>
  );
};

export default UserCard;
