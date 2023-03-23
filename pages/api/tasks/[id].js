import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
    const taskId = parseInt(req.query.id)

    if (req.method == 'GET'){
        const task = await prisma.Task.findUnique({
            where: {id: taskId}
        })

        res.status(200).json(task)
    } else if (req.method == 'PUT'){
        const task = await prisma.Task.findUnique({
            where: {id: taskId}
        })
        console.log('fetched task', taskId)
        const updatedTask = await prisma.Task.update({
            where: { id: taskId },
            data: {
                name : req.body.name  || task.name,
                desc : req.body.desc  || task.desc,
                color: req.body.color || task.color
            }
        })
        res.status(200).json(updatedTask)
    } else if (req.method == 'DELETE') {
        try {
            const deletedtask = await prisma.Task.delete({
                where: {id: taskId}
            })

            res.status(202).json(deletedtask)
        } catch (e) {
            res.status(404).json({'message': 'task does not exist'})
        }
    }
}
