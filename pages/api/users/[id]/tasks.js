import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
    if (req.method == 'GET'){
        const userId = parseInt(req.query.id)

        const tasks = await prisma.Task.findMany({
            where: {
                userId: userId,
                // date: {
                //     equals: "2023-03-25T09:35:38.449Z"
                // }
            }
        })

        res.status(200).json(tasks)
    }
}









// import prisma from '../../../../lib/prisma'

// export default async function handler(req, res) {
//     if (req.method == 'GET'){
//         const userId = parseInt(req.query.id)

//         const tasks = await prisma.Task.findMany({
//             where: { userId: userId }
//         })

//         res.status(200).json(tasks)
//     }
// }
  