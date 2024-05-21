import { Avatar, Box,  Button,  ButtonGroup,  Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Add  as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'


const StyledModal=styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

const UserBox=styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px"
 
})
export const Add = () => {
const [open,setOpen]=useState(false)

  return (
    <>
        <Tooltip onClick={e=>{setOpen(true)}} title="Add" sx={{position:"fixed",
        bottom:15, 
        left: { xs: 'calc(50% - 25px)', md:30}
       
        }}
       
        >
          <IconButton>
          <Fab color="primary" aria-label="add">
<AddIcon/>
</Fab>
          </IconButton>
        </Tooltip>
        
<StyledModal
  open={open}
  onClose={e=>{setOpen(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280}  borderRadius={5} p={3} 
  bgcolor={"background.default"} color={"text.primary"}>
  <Typography variant='h6' color="grey" textAlign='center'>
    Create post
  </Typography>
  <UserBox >
<Avatar sx={{width:30,height:30}}
    src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    />
 <Typography variant='span' fontWeight={500}>john</Typography>
</UserBox >
<TextField
sx={{width:"100%"}}
          id="standard-multiline-static"          
          multiline
          rows={3}
          defaultValue="What's on your mind"
          variant="standard"
        />
<Stack direction="row" gap={1} mt={2} mb={3}>
<EmojiEmotions color='primary'/>
<Image color='secondary'/>
 <VideoCameraBack color='success'/>
  <PersonAdd color="error"/>
</Stack>
<ButtonGroup
fullWidth
variant="contained" aria-label="Basic button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><DateRange/></Button>
  
</ButtonGroup>
  </Box>
</StyledModal>
    
    </>
  )
}
