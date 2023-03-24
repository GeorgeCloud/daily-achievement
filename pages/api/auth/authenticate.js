import prisma from '../../../lib/prisma'
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const user = await prisma.user.findUnique({
            where: {
                phoneNumber: req.body.phoneNumber
            }
        })

        bcrypt.compare(req.body.password, user.password).then(function(result) {
            if (result == true){
                res.status(422).json({message: 'Successful'});
            }
            res.status(422).json({message: 'Wrong phone number or password.'});
        });

        // const match = await bcrypt.compare(req.body.password, user.password);
        // console.log(match)

        // if (match){
        //     // Add user to session
        //     res.status(422).json({message: 'Successful'});
        // } else {
        //     res.status(422).json({message: 'Wrong phone number or password.'});
        // }
    }
}
