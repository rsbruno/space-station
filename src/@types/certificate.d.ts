declare type ICertificate = {
    id: number,
    type: string,
    logo: string,
    name: string,
    instituition: {
        name: string,
        logo: string
    },
    completedLevel: number,
    coverColor: string,
    status: "FINISHED" | "PROGRESS" | "INTEREST"
}