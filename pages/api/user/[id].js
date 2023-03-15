import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
    const userId = parseInt(req.query.id)

    if (req.method == 'GET'){
        console.log('fetching:', userId)
        const user = await prisma.user.findUnique({
            where: {id: userId}
        })

        res.status(200).json(user)
    } else if (req.method == 'DELETE') {
        try {
            const deletedUser = await prisma.user.delete({
                where: {id: userId}
            })

            res.status(202).json(deletedUser)
        } catch (e) {
            res.status(404).json({'message': 'User does not exist'})
        }
    }
}
