declare type ICertificate = {
    id: number,
    classification: string,
    logo: string,
    name: string,
    instituition: {
        name: string,
        logo: string
    },
    percentLevel: number,
    covercolor: string,
    certicateStatus: "FINISHED" | "PROGRESS" | "INTEREST",
    focusStack: string
}