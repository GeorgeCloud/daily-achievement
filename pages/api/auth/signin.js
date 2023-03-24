import prisma from '../../../lib/prisma'
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const user = await prisma.user.findUnique({
            where: {
                phoneNumber: req.body.phoneNumber
            }
        })

        if (user){
            const match = await bcrypt.compare(req.body.password, user.password);

            if (match) {
                // Create session
                res.status(200).json({message: 'Successful'});
                return
            }
            res.status(422).json({message: 'Phone number not registered.'});
        }
    }
}
