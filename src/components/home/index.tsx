import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button

} from '@chakra-ui/react'
export default function Home() {
  return <Menu>
  <MenuButton as={Button} >
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create</MenuItem>
    <MenuItem>Mark haha</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend</MenuItem>
  </MenuList>
</Menu>
}
