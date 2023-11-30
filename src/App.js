import "./styles/main.css";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

import ScrollToTop from "./utils/scrollToTop"

function App() {
  return (
		<div className="App">
				<ScrollToTop />
				<Navbar />
				<Home />
				<Footer />
		</div>
  );
}

export default App;
