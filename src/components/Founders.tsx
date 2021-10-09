import satyam from "../images/Satyam Kulkarni.jpeg"
import avatar from "../images/avatar.png"

export default function Founders() {
	return (
		<div className="h-auto w-full flex flex-col justify-start items-center bg-brand-blue">
			<div className="h-1/4 mt-12 w-full flex flex-col justify-center md:justify-end text-center md:items-center">
				<h2 className="text-sm md:text-lg text-inter font-semibold text-brand-400">Avengers Assemble!</h2>
				<h1 className="text-2xl md:text-3xl text-inter font-extrabold md:w-1/2">The Team</h1>
			</div>
			<div className="p-10 h-auto w-auto grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-10">
				<div className="flex flex-col justify-start items-center text-center w-72 h-48">
					<img src={satyam} alt="" className="p-1 h-24 w-24 rounded-full" />
					<div className="text-lg font-semibold text-inter mt-5">Satyam Kulkarni</div>
					<div className="text-sm font-normal text-inter mt-3">Agencies should have focus more on Designing Campaigns rather than doing basic tasks!</div>
				</div>
				<div className="flex flex-col justify-start items-center text-center w-72 h-48">
					<img src={avatar} alt="" className="p-1 h-24 w-24 rounded-full" />
					<div className="text-lg font-semibold text-inter mt-5">Prajwal Marennavar</div>
					<div className="text-sm font-normal text-inter mt-3">Time is Money and We are here to save time of you!</div>
				</div>
			</div>
		</div>
	)
}