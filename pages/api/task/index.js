const task = {
    name: 'Study Leetcode',
    desc: '300 hours of leetcode',
    userId: 0,
    createdOn: '12/12/12'
}

export default function handler(req, res) {
    res.status(200).json(task)
}
