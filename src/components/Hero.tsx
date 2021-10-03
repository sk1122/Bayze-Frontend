import monitor from "../images/Monitor Right.png"
import pie from "../images/Pie Right.png"
import rocket from "../images/Rocket Left.png"

// Bayze is the complete solution for managing ad accounts on any type of online advertising platform. From campaign performance tracking to campaign automation. What makes this product special is the power it gives you to manage, track multiple ad accounts and receive recommendation about campaigns. Bayze does not stop there! Bayze offers many features that are not offered in other products to save time for yourself, the business owner.
// Bayze is an all-in-one solution for your Ad accounts. It supports every important aspect of ad management like automation, reporting, campaign tracking and many more. This easy to use cloud based solution lets you scale your business to new peaks.
// Bayze is a revolutionary way to manage all of your AdWords accounts, easy to use, fast, and very efficient.

function Hero() {
	return (
		<div className="h-screen px-10 md:px-20 md:pt-20 flex justify-center md:justify-start items-start flex-col">
			<h1 className="lg:text-5xl md:text-3xl text-2xl  text-montserrat font-bold leading-tight">A Better Way <br/>To Manage Your Ad Account</h1>
			<p className="mt-4 w-96 md:w-3/5 z-50 text-montserrat font-normal lg:text-sm md:text-xs text-xs">
			Bayze is an all-in-one solution for your Ad accounts. It supports every important aspect of ad management like automation, reporting, campaign tracking and many more. This easy to use cloud based solution lets you scale your business to new peaks.
			</p>
			<div className="flex justify-center items-center">
				<button className="w-36 h-12 text-center bg-brand-400 text-white text-montserrat font-bold  mt-5 hover:opacity-50">
					<a href="https://tripetto.app/run/CBBK9KUDQX" target="_blank" rel="noreferrer">Join Waitlist</a>
				</button>
				<button className="w-36 h-12 text-center bg-transparent border-2 border-brand-400 text-montserrat font-bold  ml-5 mt-5 hover:opacity-50">
					Play Video
				</button>	
			</div>
			<div className="absolute bottom-0 right-5 w-full flex justify-end items-end flex-nowrap pointer-events-none opacity-0 md:opacity-100">
				<div className="relative w-48 h-64 rounded-lg mx-5" style={{ backgroundColor: "#3BD9F6" }}>
					<img src={monitor} alt="Pie Left" className="absolute -top-16 left-2" />
				</div>
				<div className="relative w-48 h-80 rounded-lg mx-5" style={{ backgroundColor: "#4800FF" }}>
					<img src={pie} alt="Pie Left" className="absolute -top-16 left-2" />
				</div>
				<div className="relative w-48 h-96 rounded-lg bg-brand-yellow mx-5">
					<img src={rocket} alt="Rocket Left" className="absolute -top-16 left-2" />
				</div>
			</div>
		</div>
	)
}

export default Hero