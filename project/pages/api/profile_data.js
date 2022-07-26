import dbConnect from '../../lib/dbConnect'
import Profile from '../../models/Profile'

export default async function handler (req, res) {
    const { method } = req

    await dbConnect()

    switch(method) {
        case 'GET':
            try {
                if (req.body.username) {
                    const profiles = await Profile.find({username: req.body.username})
                    res.status(200).json({ success: true, data: profiles })
                } else {
                    const profiles = await Profile.find({})
                    res.status(200).json({ success: true, data: profiles })
                }
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const profiles = await Profile.find({})
                if (profiles.length == 3 ) {
                    res.status(400).json({ sucess: false })
                }

                if (!req.body.username) {
                    res.status(400).json({ sucess: false })
                }
                const currentProfile = await Profile.find({username: req.body.username})
                if(currentProfile.length > 0) {
                    res.status(400).json({ sucess: false })
                }

                const newProfile = await Profile.create(req.body)
                res.status(201).json({ success: true, data: newProfile })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'DELETE':
            try {
                if (!req.body.username) {
                    res.status(400).json({ sucess: false })
                }
                Profile.deleteOne({username: req.body.username}).then(function(){
                    res.status(204).end()
                }).catch(function(error){
                    res.status(400).json({ success: false })
                })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
    }
}