import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/layout/Navbar"
import MyListsPage from "./pages/MyListsPage"
import LoginPage from "./pages/LoginPage"
import CategoryPage from "./pages/CategoryPage"
import TrashPage from "./pages/TrashPage"
import SettingsPage from "./pages/SettingsPage"
import UserPage from "./pages/UserPage"


function App() {
  
  return (
<div className="bg-gray-400 min-h-screen">
<BrowserRouter basename="/">
      {/* <Routes>
      <Route path="/" element={<LoginPage />} />
      </Routes> */}
      <Navbar />
      
      <Routes>  
      <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />  
        <Route path="/lists" element={<MyListsPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      {/* <ScrollPage /> */}
    </BrowserRouter>
</div>
  )

}

export default App
