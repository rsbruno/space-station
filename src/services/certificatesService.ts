import { instanceAxios } from "./axios"

const getAllByStatus = async (status: ICertificate['certicateStatus']): Promise<ICertificate[]> => {
    const query = `query{
        allCertificates{
            name
            classification
            logo
            instituition
            percentLevel
            covercolor{
              hex
            }
            certicateStatus
            focusStack{
              name
            }
          }
    }`
    const { data } = await instanceAxios.post('/', { query }).then(({ data }) => data)
    const response = data.allCertificates.map((certificate: any) => {
        return {
            ...certificate,
            covercolor: certificate.covercolor.hex,
            focusStack: certificate.focusStack.name
        } as ICertificate
    })
    return new Promise<ICertificate[]>(resolve => resolve(response))
}

export const certificatesService = {
    getAllByStatus
}