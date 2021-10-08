import { useState } from "react"

export default function Form() {
	
	const [full_name, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [company_name, setCompanyName] = useState('')
	const [form_error, setFormError] = useState('')

	const validEmailRegex = RegExp(
		// eslint-disable-next-line
		/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()/\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	);

	const addToWaitlist = async (full_name: string, email: string, company_name: string) => {
		let error_text = ''
		if(!full_name) {
			if (error_text === '') error_text = 'Please Enter '
			error_text += 'Full Name, '
		}
		if(!email) {
			if (error_text === '') error_text = 'Please Enter '
			error_text += 'Email, '
		} else {
			if (!validEmailRegex.test(email)) error_text += 'Email is not Correct '
		}
		if(!company_name) {
			if (error_text === '') error_text = 'Please Enter '
			error_text += 'Company, '
		}
		console.log(error_text)
		if (error_text !== '') {
			setFormError(error_text)
			return
		}
		setFormError(JSON.stringify(process.env))

		fetch(process.env.REACT_APP_DB_URL as string, {
			method: 'POST',
			headers: {
				web: process.env.REACT_APP_CHECK_REQ as string
			},
			body: JSON.stringify({
				full_name: full_name,
				email: email,
				company: company_name
			})
		})
		.then(res => res.json())
		.then(data => console.log(data))
	}
	
	return (
		<div className="mt-10 md:mt-0 flex justify-center items-center w-full h-auto">
			<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mr-10 flex flex-col">
				<div className="mb-4 mr-10">
					<label
						className="block text-grey-darker text-sm font-bold mb-2"
					>
						Full Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
						id="full_name"
						type="text"
						placeholder="Full Name"
						onChange={(e) => setFullName(e.target.value)}
					/>
				</div>
				<div className="mb-2">
					<label
						className="block text-grey-darker text-sm font-bold mb-2"
					>
						Company Name
					</label>
					<input
						className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
						id="company_name"
						type="text"
						placeholder="Bayze"
						onChange={(e) => setCompanyName(e.target.value)}
						/>
				</div>
				<div className="mb-6">
					<label
						className="block text-grey-darker text-sm font-bold mb-2"
						>
						Email ID
					</label>
					<input
						className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker"
						id="email_id"
						type="email"
						placeholder="bayze@gmail.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="w-60 text-inter text-red-500 font-bold mb-3">{form_error}</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-brand-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
						type="button"
						onClick={() => addToWaitlist(full_name, email, company_name)}
					>
						Join Waitlist
					</button>
				</div>
			</div>
		</div>
	)
}