import explanation from "../explanation.svg"

export default function Explanation() {
	return (
		<div className="h-screen w-full bg-white">
			<div className="h-screen grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
				<div className="flex flex-col justify-center items-center text-center">
					<div className="text-2xl md:text-5xl text-montserrat font-bold mb-5">What is Bayze?</div>
					<div className="text-sm md:text-md w-3/4 text-montserrat">We at Bayze are developing a Set of Digital Marketing Tools for Digital Marketing Teams to Smartly Manage all of their Ad Accounts, Get Greater Insights, Monitor Performance, Track Spending and Get Reports while collaborating with their fellow mates.</div>
					<button className="px-5 py-2 text-center bg-brand-yellow text-montserrat font-bold text-white mt-5 hover:opacity-50">
						<a href="https://tripetto.app/run/CBBK9KUDQX" target="_blank" rel="noreferrer">Join Waitlist</a>
					</button>
				</div>
				<div className="flex justify-center items-center">
					<img src={explanation} className="h-100" alt="" />
				</div>
			</div>
		</div>
	)
}