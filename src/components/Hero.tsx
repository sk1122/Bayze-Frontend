import monitor from "../images/Monitor Right.png"
import pie from "../images/Pie Right.png"
import rocket from "../images/Rocket Left.png"
function Hero() {
	return (
		<div className="h-screen px-10 md:px-20 md:pt-20 flex justify-center items-center md:justify-start md:items-start flex-col">
			<h1 className="lg:text-5xl md:text-3xl text-2xl text-white text-montserrat font-bold leading-tight">A Better Way <br/>To Manage Your Ad Account</h1>
			<p className="text-white mt-5 w-72 md:w-3/4 text-montserrat font-normal lg:text-sm md:text-xs text-xs">
				We will help you optimize your Ad Budget and help you reach more and more Users.
			</p>
			<div className="flex justify-center items-center">
				<button className="w-36 h-12 text-center bg-brand-yellow text-montserrat font-bold text-white mt-5 hover:opacity-50">
					<a href="https://forms.gle/ZjTGKfpjmxZYFjwq8" target="_blank" rel="noreferrer">Join Waitlist</a>
				</button>
				<button className="w-36 h-12 text-center bg-transparent border-2 text-montserrat font-bold text-white ml-5 mt-5 hover:opacity-50">
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