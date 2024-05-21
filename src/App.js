import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/Add";
import { useState } from "react";



function App() {
 const [mode,setMode]=useState("light")
const darkTheme=createTheme({
  palette:{
    mode:mode
}})
  
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
   <Sidebar setMode={setMode} mode={mode}/>
   <Feed/>
   <Rightbar/>
   </Stack>
   <Add/>

    </Box>
    </ThemeProvider>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { Container, Box, Typography, Button, Divider, Grid, Paper, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import finddubai from './finddubai.jpg'; // Assume you have it in the `src` folder
// import VisaIcon from '@mui/icons-material/CreditCard';
// import MasterCardIcon from '@mui/icons-material/CreditCard';
// import AmericanExpressIcon from '@mui/icons-material/CreditCard';
// import PayPalIcon from '@mui/icons-material/AccountBalanceWallet';

// const flightData = {
//   firstFlight: {
//     from: 'Stockholm',
//     to: 'Rome',
//     flightNo: 'C650',
//     airline: 'Delta Airlines',
//     gate: '14D',
//     departureTime: '01:00',
//     arrivalTime: '18:00',
//   },
//   secondFlight: {
//     from: 'Rome',
//     to: 'Istanbul',
//     flightNo: 'JSG113',
//     airline: 'Turkish Airways',
//     gate: '23A',
//     departureTime: '20:00',
//     arrivalTime: '20:30',
//   },
//   otherDetails: {
//     layover: '3h',
//     totalDuration: '9:45h',
//     price: 157,
//     currency: 'USD',
//   },
// };

// function App() {
//   const [flightInfo, setFlightInfo] = useState(null);

//   useEffect(() => {
//     // Mock API call
//     setTimeout(() => {
//       setFlightInfo(flightData);
//     }, 1000);
//   }, []);

//   return (
//     <Container maxWidth="lg">
//       <Box my={4}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <Box display="flex" justifyContent="center">
//               <img src={finddubai} alt="Idris Travel Agency" style={{ width: 150 }} />
//               <Box mx={2} flexGrow={1} display="flex" justifyContent="space-around">
//                 <Button startIcon={<SearchIcon />} variant="text">Flight</Button>
//                 <Button variant="text">Hotel</Button>
//                 <Button variant="text">Holiday Packages</Button>
//                 <Button variant="text">Trains</Button>
//                 <Button variant="text">Buses</Button>
//               </Box>
//               <Button variant="text">My Account</Button>
//             </Box>
//           </Grid>
//         </Grid>
        
//         {flightInfo ? (
//           <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
//             <Box display="flex" alignItems="center" justifyContent="center">
//               <Typography variant="h5">One step, {flightInfo.otherDetails.layover} Between</Typography>
//               <Typography variant="body2" sx={{ ml: 2 }}>Flight Duration: {flightInfo.otherDetails.totalDuration}</Typography>
//             </Box>

//             <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
//               <Typography variant="body2">First Flight No From {flightInfo.firstFlight.from} {flightInfo.firstFlight.flightNo}</Typography>
//               <Typography variant="body2" sx={{ ml: 2 }}>{flightInfo.firstFlight.airline}</Typography>
//             </Box>

//             <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
//               <Typography variant="body2">Second Flight No From {flightInfo.secondFlight.from} {flightInfo.secondFlight.flightNo}</Typography>
//               <Typography variant="body2" sx={{ ml: 2 }}>{flightInfo.secondFlight.airline}</Typography>
//             </Box>

//             <Divider sx={{ my: 4 }} />

//             <Grid container spacing={2} justifyContent="center">
//               <Grid item>
//                 <Typography variant="h6">ARN</Typography>
//                 <Typography variant="body2">{flightInfo.firstFlight.from} CET ({flightInfo.firstFlight.departureTime})</Typography>
//                 <Typography variant="body2">Gate {flightInfo.firstFlight.gate}</Typography>
//               </Grid>

//               <Grid item>
//                 <Typography variant="h6">FCO</Typography>
//                 <Typography variant="body2">{flightInfo.firstFlight.to} CET ({flightInfo.firstFlight.arrivalTime})</Typography>
//                 <Typography variant="body2">{flightInfo.secondFlight.departureTime})</Typography>
//                 <Typography variant="body2">Gate {flightInfo.secondFlight.gate}</Typography>
//               </Grid>

//               <Grid item>
//                 <Typography variant="h6">SAW</Typography>
//                 <Typography variant="body2">{flightInfo.secondFlight.to} CET ({flightInfo.secondFlight.arrivalTime})</Typography>
//                 <Typography variant="body2">Gate {flightInfo.secondFlight.gate}</Typography>
//               </Grid>
//             </Grid>

//             <Divider sx={{ my: 4 }} />

//             <Box display="flex" justifyContent="center" alignItems="center">
//               <Typography variant="body2">${flightInfo.otherDetails.price} (Taxes Included)</Typography>
//               <IconButton><VisaIcon /></IconButton>
//               <IconButton><MasterCardIcon /></IconButton>
//               <IconButton><AmericanExpressIcon /></IconButton>
//               <IconButton><PayPalIcon /></IconButton>
//               <Button variant="contained" sx={{ ml: 4 }}>Purchase The Flight</Button>
//             </Box>
//           </Paper>
//         ) : (
//           <Typography variant="body2" align="center">Loading flight details...</Typography>
//         )}

//       </Box>

//       <Divider />

//       <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" py={4}>
//         <Box>
//           <Typography variant="body2">Quick Links</Typography>
//           <Button variant="text">Flights</Button>
//           <Button variant="text">Buses</Button>
//           <Button variant="text">Trains</Button>
//           <Button variant="text">Packages</Button>
//           <Button variant="text">Login/SignUp</Button>
//         </Box>
//         <Box>
//           <Typography variant="body2">We Offer</Typography>
//           <Button variant="text">Booking Flights</Button>
//           <Button variant="text">Booking Hotels</Button>
//           <Button variant="text">Booking Trains</Button>
//           <Button variant="text">Booking Buses</Button>
//         </Box>
//         <Box>
//           <Typography variant="body2">Activities</Typography>
//           <Button variant="text">Tour Leading</Button>
//           <Button variant="text">Cruising & Sailing</Button>
//           <Button variant="text">Camping</Button>
//           <Button variant="text">Kayaking</Button>
//         </Box>
//         <Box>
//           <Typography variant="body2">Service</Typography>
//           <Button variant="text">Privacy & Security</Button>
//           <Button variant="text">Terms & Conditions</Button>
//           <Button variant="text">Travel Insurance</Button>
//         </Box>
//       </Box>

//       <Divider />

//       <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
//         <IconButton><Box component="span" className="fab fa-facebook-f"></Box></IconButton>
//         <IconButton><Box component="span" className="fab fa-twitter"></Box></IconButton>
//         <IconButton><Box component="span" className="fab fa-instagram"></Box></IconButton>
//         <IconButton><Box component="span" className="fab fa-linkedin-in"></Box></IconButton>
//       </Box>

//       <Box display="flex" alignItems="center" justifyContent="center" my={2}>
//         <Typography variant="body2">IDRIS Travel Agency</Typography>
//         <Typography variant="body2" sx={{ mx: 2 }}>&copy; 2023</Typography>
//       </Box>
//     </Container>
//   );
// }

// export default App;