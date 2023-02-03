import { instanceAxios } from "./axios"

const getAllByStatus = async (queryParams?: string): Promise<ICertificate[]> => {
    const query = `query{
        allCertificates${queryParams ? `(${queryParams})` : ""}{
            id
            name
            logo
            instituition{
              logo
            }
            stateCertificate
            stackStudied{
              name
            }
            stateLevel
            covercolor{
                hex
            }
            classification{
                name
            }
        }
    }`
    const { data } = await instanceAxios.post('/', { query }).then(({ data }) => data)
    return new Promise<ICertificate[]>(resolve => resolve(data.allCertificates))
}

const countData = async (queryParams?: string): Promise<number> => {
    const query = `query{
        _allCertificatesMeta${queryParams ? `(${queryParams})` : ""}{
            count
        }
    }`
    const { data } = await instanceAxios.post('/', { query }).then(({ data }) => data)
    return new Promise<number>(resolve => resolve(data._allCertificatesMeta.count))
}


export const certificatesService = {
    getAllByStatus,
    countData
}