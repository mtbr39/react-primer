import {Button, Box, Heading, } from '@primer/react'
import {HeartIcon, SunIcon, TrophyIcon} from '@primer/octicons-react'

export default () => (
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
)