import prisma from '../../../lib/prisma'
import { parse } from 'date-fns'

export default async function handler(req, res) {
    if (req.method == 'GET'){
        const tasks = await prisma.Task.findMany({})

        res.status(200).json(tasks)
    } else if (req.method == 'POST') {
        const userId = 1; // Grab from session

        const newTask = await prisma.Task.create({
            data: {
                title    : req.body.title,
                userId   : userId,
                time     : parse(req.body.time, 'HH:mm', new Date()),
                dates    : req.body.dates,
                color    : req.body.color,
                desc     : req.body.description,
                location : req.body.location
            }
        })

        res.status(200).json(newTask)
    }
}
