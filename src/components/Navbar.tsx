import { useRef } from "react"
import logo from "../Logo.png"
import { Link } from "react-scroll"

function Navbar() {
	let menu = useRef<HTMLElement>(null)
	
	const openMenu = () => {
		let menuNode = menu.current!
		if(menuNode.classList.contains("hidden")) menuNode.classList.remove("hidden")
		else menuNode.classList.add("hidden")
	}

	return (
		<div className="md:relative bg-brand-blue h-24 w-full flex justify-between items-center">
			<div className="w-36 mt-3 md:mt-0 left-0 absolute md:static ml-3 md:ml-5 md:w-36">
				<img src={logo} alt="" />
			</div>
			<div className="h-4 w-96 hidden text-xs mr-4 md:flex justify-around items-center text-montserrat">
				<div><Link to="features" spy={true} smooth={true} duration={500}>Features</Link></div>
				<div><Link to="problems" spy={true} smooth={true} duration={500}>Problems</Link></div>
				<div><a href="https://bayze.hashnode.dev/" target="_blank" rel="noreferrer">Blog</a></div>
				<div><Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link></div>
				</div>
			<div className="md:hidden">
				<button className="md:hidden absolute right-16" type="button" onClick={openMenu}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
			<div className="hidden text-xs md:hidden justify-around items-center text-white text-montserrat bg-brand-400 p-4 rounded-lg absolute top-24 right-10" ref={menu as React.RefObject<HTMLDivElement>}>
				<div className="px-2 py-4">About</div>
				<div className="px-2 py-4">Products</div>
				<div className="px-2 py-4"><a href="https://bayze.hashnode.dev/" target="_blank" rel="noreferrer">Blog</a></div>
				<div className="px-2 py-4">Contact Us</div>
			</div>
		</div>
	)
}

export default Navbar