import dbConnect from "../../lib/dbConnect"
import Profile from "../../models/Profile"

export default async function handler (req, res) {
    const { method } = req

    await dbConnect()

    switch(method) {
        case 'GET':
            try {
                const profiles = await Profile.find({})
                res.status(200).json({ success: true, data: profiles })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                // For now we only allow one profile at a time
                const profiles = await Profile.find({})
                
                if (profiles.length != 0) {
                    return res.status(400).json({ sucess: false })
                }

                const profile = await Profile.create(req.body)
                res.status(201).json({ success: true, data: profile })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ sucess: false })
    }
}