import features from "../features.svg"

function Features() {
	return (
		<div className="md:h-screen w-full flex flex-col md:flex-row justify-between items-center bg-white">
			<div className="h-screen w-full grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
				<div className="flex justify-center items-center">
					<img src={features} alt="" className="w-3/4 h-1/2 md:w-3/4 md:h-1/2" />
				</div>
				<div className="flex flex-col justify-center items-start px-10">
					<h1 className="text-2xl md:text-5xl text-montserrat font-bold mb-5 md:mb-10">We help brands to</h1>
					<div className="font-normal text-sm md:text-md text-montserrat">
						<div className="mb-5">1/ Get Collective Insights about your Campaigns from All Ad Accounts</div>
						<div className="mb-5">2/ Get Recommandations for your Campaigns based on its Performance</div>
						<div className="mb-3 md:md-5">3/ Monitor Performance, Track Spending, Create Reports, and get notification about your Ads Activity.</div>
					</div>
					<button className=" text-center bg-brand-yellow text-montserrat px-5 py-2 font-bold text-white mt-5 hover:opacity-50">
						<a href="https://tripetto.app/run/CBBK9KUDQX" target="_blank" rel="noreferrer">Join Waitlist</a>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Features