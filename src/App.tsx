import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Problem from "./components/Problem";
import Explanation from "./components/Explanation";
import Founders from "./components/Founders";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
	const [docTitle, setDocTitle] = useState('Bayze - A Smart Way to Manage your Ad Accounts')

	useEffect(() => {
		setDocTitle('Bayze - A Smart Way to Manage your Ad Accounts')
		document.title = docTitle
	}, [docTitle])

	return (
		<div className="h-auto w-full bg-brand-blue">
			<div className="h-auto md:h-screen w-full">
				<Navbar></Navbar>
				<Hero></Hero>
			</div>
			<Features></Features>
			<Problem></Problem>
			<Explanation></Explanation>
			<Founders></Founders>
			<CTA></CTA>
			<Footer></Footer>
		</div>
	);
}

export default App;
