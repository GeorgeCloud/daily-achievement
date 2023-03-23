import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
    if (req.method == 'GET'){
        const userId = parseInt(req.query.id)

        const tasks = await prisma.Task.findMany({
            where: { userId: userId }
        })

        res.status(200).json(tasks)
    }
}
