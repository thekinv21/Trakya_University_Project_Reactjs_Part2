import React from "react";
import {
  Menu,
  MenuButton,
  Image,
  MenuList,
  MenuCommand,
  Text,
  MenuDivider,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import Avatar from "../../../../assets/images/user1.png";
import { useSelector } from "react-redux";

const HeaderDropdown = ({ username, puan }) => {
  //*------------------------Dropdown links-------------------
  const navbarLink = useSelector((state) => state.Link.navbarLinks);

  return (
    <React.Fragment>
      <Menu>
        {/*--------------------Open Dropdown when Click -Avatar -------------------------*/}
        <MenuButton>
          <Image
            ml={["15px", "20px", "20px", "10px", "30px"]}
            cursor="pointer"
            w="40px"
            rounded="100%"
            src={Avatar}
          />
        </MenuButton>

        {/*--------------------Dropdown List when Click Avatar-------------------------*/}

        <MenuList bg="rgba(0,0,0,0.5)" border="none" color="#fff">
          <MenuCommand textAlign="center">
            <Text fontSize={14} mt={5} fontWeight={700}>
              {username}
            </Text>
            <Text fontSize={10} fontWeight={700}>
              Puanlarim : {puan}
            </Text>
          </MenuCommand>

          <MenuDivider m="20px 10px" />

          {/*----------------------DropDown username and his Bonus---------------------*/}

          {navbarLink.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              textDecoration="none"
              fontSize={13}
            >
              <MenuItem bg="none" icon={link.icon}>
                {link.name}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

export default HeaderDropdown;
