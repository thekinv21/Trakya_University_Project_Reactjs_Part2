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
import Avatar from "../../../assets/images/user1.png";
import { useSelector } from "react-redux";

const NavbarDropdown = ({ username, puan }) => {
  //*-----------------take navbarlinks on global state----------------
  const navbarLinksLogin = useSelector((state) => state.Link.navbarLinksLogin);

  return (
    <React.Fragment>
      <Menu>
        {/*-----------------------Dropdown Button---------------- */}
        <MenuButton>
          <Image src={Avatar} cursor="pointer" rounded={100} maxW="45px" />
        </MenuButton>

        {/*-----------------------Dropdown list---------------- */}
        <MenuList>
          {/*-----------------Dropdown username and bonus----------*/}
          <MenuCommand textAlign="center" mt={5}>
            <Text color="#000" fontSize={13}>
              {username}
            </Text>
            <Text fontSize={10} mt={2}>
              Puanlarim : {puan}
            </Text>
          </MenuCommand>
          <MenuDivider mt="20px" />

          {/*-----------------------Dropdown links---------------- */}

          {navbarLinksLogin.map((link, index) => (
            <Link key={index} href={link.href} fontSize={13}>
              <MenuItem p="10px 20px" icon={link.icon}>
                {link.name}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

export default NavbarDropdown;
