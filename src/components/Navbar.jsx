import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { Mail, Notifications } from '@mui/icons-material';


const StyledToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})
const Search=styled("div")(({theme})=>({backgroundColor:"white"
    ,padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}))

const Icons=styled(Box)(({theme})=>({
    display:"none",gap:"20px",alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        gap:"10px",display:"flex"
    }
}))
const UserBox=styled(Box)(({theme})=>({
    display:"flex",gap:"10px",alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        gap:"10px",display:"none"
    }
}))


export const Navbar = () => {
  const [open,setOpen]=useState(false)

  return (
    <AppBar position='sticky'>
        <StyledToolbar>  
<Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>Janakiram</Typography>
<FlutterDashIcon sx={{display:{sx:"block", sm:"none"}}}/>
<Search><InputBase placeholder="search..."/></Search>
<Icons>
<Badge badgeContent={4} color="error">
  <Mail color="action" />
</Badge>
<Badge badgeContent={2} color="error">
  <Notifications color="action" />
</Badge>

<Avatar sx={{width:30,height:30}}
    src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    onClick={e=>setOpen(true)}
    />

</Icons>
<UserBox     onClick={e=>setOpen(true)}>
<Avatar sx={{width:30,height:30}}
    src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    />
 <Typography variant='span'>john</Typography>
</UserBox >
        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>{setOpen(false)}}

        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
       
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
     </AppBar>
  )
}
