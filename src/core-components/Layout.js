import { Box } from '@mui/system'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <Box>
        <Navbar />
        <Box sx={{ mt:{ md: 8, xs: 6} }}>
            {children}
        </Box>
    </Box>
  )
}

export default Layout