import rocket from "../images/Satyam Kulkarni.jpeg"
export default function Founders() {
	return (
		<div className="h-screen w-full bg-brand-400 flex flex-col justify-center items-center" style={{ backgroundColor: "#BEE1FF" }}>
			<div className="text-4xl font-bold text-montserrat mt-10">Founder Details</div>
			<div className="h-screen grid grid-cols-2 gap-20">
				<div className="flex flex-col justify-center items-center">
					<img src={rocket} alt="Rocket" className="rounded-full w-20 h-20 md:w-40 md:h-40" />
					<div className="text-xl font-bold text-montserrat mt-10 mb-2">Satyam Kulkarni</div>
					<div className="px-10 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, voluptatum velit. Eveniet tempora exercitationem voluptatibus esse corrupti</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img src={rocket} alt="Rocket" className="rounded-full w-20 h-20 md:w-40 md:h-40" />
					<div className="text-xl font-bold text-montserrat mt-10 mb-2">Satyam Kulkarni</div>
					<div className="px-10 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, voluptatum velit. Eveniet tempora exercitationem voluptatibus esse corrupti</div>
				</div>
			</div>
		</div>
	)
}