import prisma from '../../../lib/prisma'
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method == 'GET'){
        const allUsers = await prisma.user.findMany({});

        res.status(200).json(allUsers);
    } else if (req.method == 'POST') {
        try {
            const newUser = await prisma.user.create({
                data: {
                    phoneNumber: req.body.phoneNumber,
                    password: await bcrypt.hash(req.body.password, 10),
                }
            });

            res.status(200).json(newUser);
        } catch (e){
            if (e.meta.target.includes('phoneNumber')) {
                res.status(422).json({message: 'Phone number taken.'});
            }
        }
    }
}
