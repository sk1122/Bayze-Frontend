export default function Explanation() {
	return (
		<div className="h-auto w-full flex flex-col justify-start items-center bg-brand-orange">
			<div className="h-1/4 mt-12 w-full flex flex-col justify-center md:justify-end text-center md:items-center">
				<h1 className="text-2xl md:text-3xl text-inter font-extrabold md:w-1/2">How <span className="text-brand-400">Bayze</span> Works?</h1>
			</div>
			<div className="mt-10 p-10 h-full w-auto grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-10">
				<div className="flex flex-col justify-start items-center text-center w-72 h-48">
					<svg xmlns="http://www.w3.org/2000/svg" className="bg-brand-400 text-white p-1 h-10 w-10 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
					</svg>
					<div className="text-lg font-semibold text-inter mt-5">Link All Of Your Ad Accounts</div>
					<div className="text-sm font-normal text-inter mt-3">Connect Your Facebook & Google Accounts and we will show you all Ad Accounts associated with that accounts</div>
				</div>
				<div className="flex flex-col justify-start items-center text-center w-72 h-48">
					<svg xmlns="http://www.w3.org/2000/svg" className="bg-brand-400 text-white p-1 h-10 w-10 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
					</svg>
					<div className="text-lg font-semibold text-inter mt-5">Create Projects for Clients</div>
					<div className="text-sm font-normal text-inter mt-3">Create Projects for Clients and link their campaigns with that Project to get greater insights about Clients Ads</div>
				</div>
				<div className="flex flex-col justify-start items-center text-center w-72 h-48">
					<svg xmlns="http://www.w3.org/2000/svg" className="bg-brand-400 text-white p-1 h-10 w-10 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
					</svg>
					<div className="text-lg font-semibold text-inter mt-5">You are good to go!</div>
					<div className="text-sm font-normal text-inter mt-3">Setting up Bayze is as easy as it can get!</div>
				</div>
			</div>
		</div>
	)
}