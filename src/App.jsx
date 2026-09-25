import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import RevealOnScroll from './components/RevealOnScroll'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RevealOnScroll />
      <div className="page" id="top">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
