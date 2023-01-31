import { instanceAxios } from "./axios"

const getAllByStatus = (status: ICertificate['status']): Promise<ICertificate[]> => {
    const certificates = instanceAxios.get('/certificates/getAllByStatus', { params: { status } }).then(({ data }) => data)
    return certificates
}

export const certificatesService = {
    getAllByStatus
}