import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <main style={{ padding: "20px" , minHeight:"80vh"}}>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default MainLayout