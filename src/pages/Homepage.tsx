import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  useEffect(() => {
    document.title = `offnd.at - share the offensiveness`
  }, [])

  return (
    <>
      <Typography>Homepage</Typography>
      <Link to='/s/wyjebiście-dewońscy-horyszowianie'>Go stats</Link>
    </>
  )
}

export default Homepage
