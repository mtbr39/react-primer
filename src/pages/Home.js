// src/pages/Home.js
import React from 'react'
import Layout from '../components/Layout'
import MyComponent from '../components/MyComponent'
import { Box } from '@primer/react'

const Home = () => {
  return (
    <Layout>
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
      <MyComponent />
    </Layout>
  )
}

export default Home
