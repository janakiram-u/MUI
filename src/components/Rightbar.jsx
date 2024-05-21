import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const Rightbar = () => {
  return (
    <Box flex={2} 
    p={2}
    sx={{display:{xs:"none",sm:"block"}}}
    >
        <Box position="fixed" width={300}>
<Typography variant='h6' fontWeight={100}>
  Online friends
</Typography >
<AvatarGroup max={7} total={20}>
  <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg" />
  <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg" />
  <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_960_720.jpg" />
  <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2020/07/30/10/29/woman-5450043_960_720.jpg" />
  <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_960_720.jpg" />
  <Avatar alt="Travis" src="https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg" />
  <Avatar alt="Cindy Bak" src="https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_960_720.jpg" />
  <Avatar alt="Agnes Walk" src="https://cdn.pixabay.com/photo/2018/04/23/14/38/dog-3344414_1280.jpg" />
</AvatarGroup>
<Typography variant='h6' fontWeight={100} mt={2} mb={2}>
  Latest photos
</Typography>
<ImageList cols={3} rowHeight={100} gap={5}>
  <ImageListItem>
    <img src='https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg'
    alt=''
    />
  </ImageListItem>
  
  
  <ImageListItem>
    <img src='https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_960_720.jpg'
    alt=''
    />
  </ImageListItem>
  <ImageListItem>
    <img src='https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_1280.jpg'
    alt=''
    />
  </ImageListItem>
 
</ImageList>
<Typography variant='h6' fontWeight={100} mt={2} >
  Latest Conversations
</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2020/07/30/10/29/woman-5450043_960_720.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_1280.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
   </Box>
    </Box>
  )
}
