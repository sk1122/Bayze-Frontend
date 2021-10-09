import Form from "./Form"

// Bayze is the complete solution for managing ad accounts on any type of online advertising platform. From campaign performance tracking to campaign automation. What makes this product special is the power it gives you to manage, track multiple ad accounts and receive recommendation about campaigns. Bayze does not stop there! Bayze offers many features that are not offered in other products to save time for yourself, the business owner.
// Bayze is an all-in-one solution for your Ad accounts. It supports every important aspect of ad management like automation, reporting, campaign tracking and many more. This easy to use cloud based solution lets you scale your business to new peaks.
// Bayze is a revolutionary way to manage all of your AdWords accounts, easy to use, fast, and very efficient.
// Bayze enables you and your team to work together on. It has rich feature to create Ad Campaigns, auto scheduling of ads, monitoring of the ads in real time, quick editing features which is very handy when creating ads.
// Bayze is an all-in-one solution for your Ad accounts. It supports every important aspect of ad management like automation, reporting, campaign tracking and many more. This easy to use cloud based solution lets you scale your business to new peaks


function Hero() {
	return (
		<div className="h-hero w-full flex flex-col justify-center items-center md:grid md:grid-rows-none grid-cols-none md:grid-cols-3">
			<div className="mt-10 p-5 md:mt-0 col-span-2 w-full flex flex-col justify-center items-center">
				<div className="h-1/2 md:ml-10 w-full text-left">
					<h1 className="text-3xl md:text-5xl text-inter font-extrabold">A <span className="text-brand-400">Smarter</span>  Way <br /> To Manage Your Ad Account</h1>
					<p className="mt-4 text-sm md:text-base text-inter font-normal w-3/4">Bayze is an all-in-one solution for your Ad accounts. It supports every important aspect of ad management like automation, reporting, campaign tracking and many more. This easy to use cloud based solution lets you scale your business to new peaks</p>
					<p className="mt-4 text-sm md:text-base text-inter font-bold w-3/4">First <b>100 Users</b> to Join Waitlist will get access to <span className="text-brand-400">Bayze</span> free for first year!🚀🚀</p>
				</div>
			</div>
			<div className="h-auto p-5 w-full flex justify-center items-center">
				<Form></Form>
			</div>
		</div>
	)
}

export default Hero