import React from 'react'
import { Box } from '@primer/react'
import { Header } from '@primer/react'
import { MarkGithubIcon } from '@primer/octicons-react'
import { Octicon } from '@primer/react'

const Layout = ({ children }) => {
  return (
    <Box textAlign="center">
      <Header
        sx={{
          backgroundColor: 'muted',
        }}
      >
        <Header.Item>
          <Header.Link
            href="#"
            sx={{
              fontSize: 2,
            }}
          >
            <Octicon
              icon={MarkGithubIcon}
              size={32}
              sx={{
                marginRight: 2,
              }}
            />
            <span>GitHub</span>
          </Header.Link>
        </Header.Item>
        <Header.Item full>Menu</Header.Item>
        <Header.Item
          sx={{
            mr: 0,
          }}
        ></Header.Item>
      </Header>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          itemAlign="center"
          sx={{
            width: 'medium',
          }}
        >
          <main>{children}</main>
        </Box>
      </Box>

      {/* <footer>Footer</footer> */}
    </Box>
  )
}

export default Layout
