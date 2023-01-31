import type { NextApiRequest, NextApiResponse } from 'next'
import certificates from '@/mocks/certificates.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<ICertificate[]>) {
    const { status } = req.query
    if (status) {
        const response = certificates.filter(f => f.status === status) as ICertificate[]
        res.status(200).json(response)
    } else res.status(404).json([])
}