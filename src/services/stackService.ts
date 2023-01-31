import { instanceAxios } from "./axios"

const getAllByExperience = (status: IStack['experience']): Promise<IStack[]> => {
    const certificates = instanceAxios.get('/stack/getAllByExperience', { params: { status } }).then(({ data }) => data)
    return certificates
}

export const stackService = {
    getAllByExperience
}