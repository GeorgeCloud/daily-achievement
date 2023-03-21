import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
    if (req.method == 'GET'){
        const tasks = await prisma.task.findMany({})

        res.status(200).json(tasks)
    } else if (req.method == 'POST') {
        const userId = 1; // Grab from session

        const newTask = await prisma.task.create({
            data: {
                userId: userId,
                title : req.body.title,
                color : req.body.color,
                desc  : req.body.description,
            }
        })

        res.status(200).json(newTask)
    }
}
