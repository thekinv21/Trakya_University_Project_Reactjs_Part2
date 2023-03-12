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
  Stack,
} from "@chakra-ui/react";
import Avatar from "../../../../assets/images/user1.png";
import { useSelector } from "react-redux";

const HeaderDropdown = ({ username, puan }) => {
  //*--------------------Giriş yapıp yapmadığı bilgisi--------------------
  const isLogged = useSelector((state) => state.Auth.isLoggedIn);

  //*------------------------Dropdown links when userLogin-------------------
  const navbarLogin = useSelector((state) => state.Link.navbarLinksLogin);

  //*------------------------Dropdown links when userLogout-------------------
  const navbarLogout = useSelector((state) => state.Link.navbarLinksLogout);

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

          {/*-------------------------Eğer kullanıcı giriş yaptıysa------------------- */}

          {isLogged ? (
            <Stack>
              {navbarLogin.map((link, index) => (
                <Link key={index} href={link.href} fontSize={13}>
                  <MenuItem bg="none" icon={link.icon}>
                    {link.name}
                  </MenuItem>
                </Link>
              ))}
            </Stack>
          ) : (
            /*-------------------------Eğer kullanıcı giriş yapmadıysa------------------- */
            <Stack>
              {navbarLogout.map((link, index) => (
                <Link key={index} href={link.href} fontSize={13}>
                  <MenuItem bg="none" icon={link.icon}>
                    {link.name}
                  </MenuItem>
                </Link>
              ))}
            </Stack>
          )}
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

export default HeaderDropdown;
