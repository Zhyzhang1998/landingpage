import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './Styles';
import backgroundUrl from '../assets/background.png';
import { H1Typography, H3Typography, Body1Typography } from './Fonts';

function Herosection() {

 return (
  <>
    <Box component='article'>
      <H1Typography>
        Your voice is your power.
      </H1Typography>
      <H3Typography>
        Leverage AI for Effective and Efficient Outreach
      </H3Typography>
      <Body1Typography>
        At Gabriel AI, we empower you to connect with your audience like never before. Our AI-driven platform offers personalized voicemails and SMS messages, helping you streamline communication and enhance engagement with your clients, customers or community.
      </Body1Typography>
      <Button
        variant="contained"
        sx={styles.regularButton}
        >
          Try for free 👋
      </Button>
    </Box>
    <svg width="712" height="395" viewBox="0 0 712 395" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1070" height="395" rx="188" fill="url(#paint0_linear_139_2108)"/>
      <defs>
      <linearGradient id="paint0_linear_139_2108" x1="-1.28316e-06" y1="197.198" x2="901.053" y2="197.198" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F4DBAB" stop-opacity="0.4"/>
      <stop offset="0.574" stop-color="#F1D5CB"/>
      <stop offset="1" stop-color="white" stop-opacity="0.01"/>
      </linearGradient>
      </defs>
    </svg>
    <img
      src={backgroundUrl}
      alt='Demo'
    />
  </>
 );
};

export default Herosection;