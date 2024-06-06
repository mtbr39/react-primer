// src/pages/Home.js
import React from 'react'
import BandLayout from '../components/BandLayout'
import { Box, Button } from '@primer/react'
import {HeartIcon, SunIcon, TrophyIcon} from '@primer/octicons-react'

const MusicListPage = () => {
  return (
    <BandLayout>
      <Box
        sx={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'border.default',
          borderRadius: 1,
          p: 3,
          m: 3,
          minHeight: 'small',
        }}
      >

      </Box>
      <Box m={4}>
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          <Button leadingVisual={HeartIcon} variant="primary">Primary</Button>
          <Button leadingVisual={HeartIcon}>Heart</Button>
          <Button leadingVisual={SunIcon}>Sun</Button>
          <Button leadingVisual={TrophyIcon}>Trophy</Button>
        </Box>
      </Box>
    </BandLayout>
  )
}

export default MusicListPage
