import React, { Component } from 'react'
import { Dropdown, DropdownMenu, Button, NavItem, Arrow } from 'rebass'
import { Link } from 'react-router'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      open: false
    }
  }

  showDropDown = (event) => {
    this.setState({open: true})
  }

  dismissDropDown = (event) => {
    this.setState({open: false})
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
        >
          Menu
          <Arrow direction='down' />
        </Button>
        <DropdownMenu
          open={this.state.open}
          onMouseLeave={this.dismissDropDown}
        >
          <NavItem is='a'>
            Schedule
          </NavItem>
          <NavItem>
            <Link to='/'>Events</Link>
          </NavItem>
          <NavItem>
            <Link to='/todolist'>ToDos</Link>
          </NavItem>
        </DropdownMenu>
      </Dropdown>
    </header>
  }
}
export default Header
