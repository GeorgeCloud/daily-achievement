import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
    if (req.method == 'GET'){
        const tasks = await prisma.task.findMany({})

        res.status(200).json(tasks)
    } else if (req.method == 'POST') {
        const newTask = await prisma.task.create({
            data: {
                name: req.body.name,
                desc: req.body.desc,
                color: req.body.color,
                userId: parseInt(req.body.userId),
            }
        })

        res.status(200).json(newTask)
    }
}
