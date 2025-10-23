interface options {
    title: string,
    iconSrc?: `/icons/${string}.svg`
}

export interface PriceCard {
    title: string;
    info: string;
    price: number;
    options: readonly options[];
}

export const priceData: PriceCard[] = [
    {
        title: "Free",
        info: "For solo developers working on a passion project.",
        price: 0,
        options: [
            {
                title: "15 Android and 15 iOS builds"
            },
            {
                title: "Low-priority queue",
                iconSrc: '/icons/low_priority.svg'
            },
            {
                title: "60 min. on CI/CD Workflows"
            },
            {
                title: "Submit to app stores"
            },
            {
                title: "Send updates to 1K MAUs"
            }
        ]
    },
    {
        title: "Starter",
        info: "For developers ready to launch real-world apps.",
        price: 19,
        options: [
            {
                title: "145 of builds"
            },
            {
                title: "High-priority queue",
                iconSrc: '/icons/high_priority.svg'
            },
            {
                title: "Access to large workers"
            },
            {
                title: "Send updates to 3K MAUs"
            }
        ]
    },
    {
        title: "Production",
        info: "For teams building and distributing production apps.",
        price: 199,
        options: [
            {
                title: "225 builds"
            },
            {
                title: "2 included concurrencies"
            },
            {
                title: "Send updates to 50K MAUs"
            },
            {
                title: "Priority support"
            }
        ]
    },
    {
        title: "Enterprise",
        info: "For apps with scale, security, and compliance needs.",
        price: 1999,
        options: [
            {
                title: "1,000 of builds"
            },
            {
                title: "5 included concurrencies"
            },
            {
                title: "Send updates to 1M MAUs"
            },
            {
                title: "Slack and strategic support add-on available"
            }
        ]
    }
]