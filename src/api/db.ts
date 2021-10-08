import { GoogleSpreadsheet } from "google-spreadsheet"
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (request: VercelRequest, response: VercelResponse)  => {
	if('web' in request.headers) {
		if(request.headers['web'] !== process.env.CHECK_REQ) {
			response.status(401).send('Not Authenticated')
			return
		}
	}
	
	const { full_name, email, company } = request.body
	
	const doc = new GoogleSpreadsheet('1m_u10KlSACYtQJw0NuKUGqB436nGrBLvmivWArzyEYo')
	
	await doc.useServiceAccountAuth({
		client_email: process.env.CLIENT_EMAIL as string,
		private_key: process.env.PRIVATE_KEY as string,
	})


	await doc.loadInfo();
	console.log(doc.title)
	await doc.updateProperties({ title: 'Waitlist Form' })

	const sheet = await doc.sheetsByIndex[1]
	
	sheet.addRow({ full_name: full_name, email: email, company: company })

	response.status(200).send("Executed")
}