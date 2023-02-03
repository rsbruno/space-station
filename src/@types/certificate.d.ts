declare type ICertificate = {
    id: string;
    name: string;
    logo: string;
    instituition: {
        id: string;
        name: string;
        logo: string;
    },
    relatedStacks: {
        id: string;
        name: string;
        logo: string;
    }[],
    stateCertificate: "FINISHED" | "PROGRESS" | "INTEREST",
    stackStudied: {
        id: string;
        name: string;
        logo: string;
    },
    stateLevel: number;
    covercolor: {
        hex: string,
        red: number,
        green: number,
        blue: nuber
    },
    classification: {
        id: string,
        name: string
    }
}

