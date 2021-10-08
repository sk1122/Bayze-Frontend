import bayze from "../Logo.png"
export default function Footer() {
	return (
		<div className="p-10 font-bold h-auto w-full flex flex-col justify-start items-start bg-brand-blue">
			<img src={bayze} alt="Bayze Logo" className="w-36" />
			© 2021 All rights reserved. 
		</div>
	)
}