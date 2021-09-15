import logo from "../Logo.png"

function Navbar() {
	return (
		<div className="h-24 w-full text-white flex justify-between items-center">
			<div className="w-64">
				<img src={logo} alt="" />
			</div>
			<div className="h-4 w-96 text-xs flex justify-around items-center text-montserrat">
				<div>About</div>
				<div>Products</div>
				<div><a href="https://bayze.hashnode.dev/" target="_blank">Blog</a></div>
				<div>Contact Us</div>
			</div>
		</div>
	)
}

export default Navbar