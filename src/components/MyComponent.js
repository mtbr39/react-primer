import {Button, Box, Heading, } from '@primer/react'
import {HeartIcon, SunIcon, TrophyIcon} from '@primer/octicons-react'

export default () => (
  <Box m={4}>
    <Heading as="h2" sx={{mb: 2}}>
      Hello, world!
    </Heading>
    <p>This will get Primer text styles.</p>
    <Box
      sx={{
        display: 'flex',
        gap: 4
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button leadingVisual={HeartIcon}>Heart</Button>
      <Button leadingVisual={SunIcon}>Sun</Button>
      <Button leadingVisual={TrophyIcon}>Trophy</Button>
    </Box>
  </Box>
)