import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
export default function FadeMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBoth = () =>{
    props.handleClick();
    handleClose();
  }

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true"  onClick={handleClick}>
        <MenuIcon style={{ color:"#18E1D9" }} />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleBoth} >Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
      </Menu>
    </div>
  );
}
