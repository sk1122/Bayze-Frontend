import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Problem from "./components/Problem";
import Explanation from "./components/Explanation";
import Founders from "./components/Founders";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import {  animateScroll as scroll } from "react-scroll"

function App() {
	const [docTitle, setDocTitle] = useState('Bayze - A Smart Way to Manage your Ad Accounts')

	useEffect(() => {
		setDocTitle('Bayze - A Smart Way to Manage your Ad Accounts')
		document.title = docTitle
	}, [docTitle])

	const scrollToTop = () => {
		scroll.scrollToTop();
	}

	return (
		<div className="h-auto w-full bg-brand-blue">
			<Navbar></Navbar>
			<Hero></Hero>
			<Features></Features>
			<Problem></Problem>
			<Explanation></Explanation>
			<Founders></Founders>
			<CTA></CTA>
			<Footer></Footer>
			{/* eslint-disable-next-line */}
			<a onClick={scrollToTop} className="fixed top-100 right-5 w-10 h-10">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-brand-400" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
				</svg>
			</a>
		</div>
	);
}

export default App;
