import {Button, Box, Heading, Icon} from '@primer/react'

export default () => (
  <Box m={4}>
    <Heading as="h2" sx={{mb: 2}}>
      Hello, world!
    </Heading>
    <p>This will get Primer text styles.</p>
    <Button variant="primary">Primary</Button>
    {/* <Button leadingVisual={HeartIcon}>Leading visual</Button> */}
  </Box>
)