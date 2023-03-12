import React from "react";
import { CardBody, UnorderedList, Link, ListItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const UserCardLinks = () => {

  //*-----------------Take links on global state-------------
  
  const profileLinks = useSelector((state) => state.Link.profileLinks);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default UserCardLinks;
