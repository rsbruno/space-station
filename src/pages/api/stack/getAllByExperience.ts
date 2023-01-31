import type { NextApiRequest, NextApiResponse } from 'next'
import stacks from '@/mocks/knowlodge.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<IStack[]>) {
    const { status } = req.query
    if (status) {
        const response = stacks.filter(f => f.experience === status) as IStack[]
        res.status(200).json(response)
    } else res.status(404).json([])
}