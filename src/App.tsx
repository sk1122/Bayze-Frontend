import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
	return (
		<div className="h-full bg-gradient-to-br from-brand-500 via-brand-400 to-brand-400 h-screen w-full">
			<div className="h-screen w-full">
				<Navbar></Navbar>
				<Hero></Hero>
			</div>
			<Features></Features>
		</div>
	);
}

export default App;
