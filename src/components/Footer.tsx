import bayze from "../Logo.png"
export default function Footer() {
	return (
		<div id="contact" className="p-10 font-bold h-auto w-full flex flex-col justify-start items-start bg-brand-blue">
			<img src={bayze} alt="Bayze Logo" className="w-36" />
			<br />
			<div className="text-inter">Email: <a href="mailto:bayzecorp@gmail.com">bayzecorp@gmail.com</a></div>
			<br />
			© 2021 All rights reserved. 
		</div>
	)
}