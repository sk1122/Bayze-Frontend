import { GoogleSpreadsheet } from "google-spreadsheet"
import { VercelRequest, VercelResponse } from '@vercel/node';

export const db = async (full_name, email, company)  => {
	
	const doc = new GoogleSpreadsheet('1m_u10KlSACYtQJw0NuKUGqB436nGrBLvmivWArzyEYo')
	
	await doc.useServiceAccountAuth({
		client_email: process.env.REACT_APP_CLIENT_EMAIL,
		private_key: process.env.REACT_APP_PRIVATE_KEY,
	})


	await doc.loadInfo();
	console.log(doc.title)
	await doc.updateProperties({ title: 'Waitlist Form' })

	const sheet = await doc.sheetsByIndex[1]
	
	sheet.addRow({ full_name: full_name, email: email, company: company })
}