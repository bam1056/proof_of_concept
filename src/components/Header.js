import React, { Component } from 'react'
import { Dropdown, DropdownMenu, Button, NavItem, Arrow } from 'rebass'

class Header extends Component {
  showDropDown = (event) => {
    event.target.parentNode.children[1].style.display = 'block'
  }
  dismissDropDown = (event) => {
    event.target.parentNode.children[1].style.display = 'none'
  }
  render () {
    return <header>
      <Dropdown>
        <Button
          backgroundColor='black'
          color='white'
          inverted
          rounded
          onMouseEnter={this.showDropDown}
          onMouseLeave={this.dismissDropDown}
        >
          Menu
          <Arrow direction='down' />
        </Button>
        <DropdownMenu onDismiss={function noRefCheck () {}} >
          <NavItem is='a'>
            Hello
          </NavItem>
          <NavItem is='a'>
            Hi
          </NavItem>
        </DropdownMenu>
      </Dropdown>
    </header>
  }
}
export default Header
