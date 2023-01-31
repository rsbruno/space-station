import { instanceAxios } from "./axios"

const getAllByExperience = async (status: IStack['experience']): Promise<IStack[]> => {
    const query = `
        query{
            allStacks {
                id
                name
                logo
                experience
            }
        }
    
    `
    const { data } = await instanceAxios.post('/', { query }).then(({ data }) => data)
    return new Promise<IStack[]>(resolve => resolve(data.allStacks))
}

export const stackService = {
    getAllByExperience
}