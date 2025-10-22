export interface PriceCard {
    title: string;
    info: string;
    price: number;
    options: readonly string[];
}

export const priceData: PriceCard[] = [
    {
        "title": "Free",
        "info": "For solo developers working on a passion project.",
        "price": 0,
        "options": [
            "15 Android and 15 iOS builds",
            "Low-priority queue",
            "60 min. on CI/CD Workflows",
            "Submit to app stores",
            "Send updates to 1K MAUs"
        ],
    },
    {
        "title": "Starter",
        "info": "For developers ready to launch real-world apps.",
        "price": 19,
        "options": [
            "145 of builds",
            "High-priority queue",
            "Access to large workers",
            "Send updates to 3K MAUs"
        ],
    },
    {
        "title": "Production",
        "info": "For teams building and distributing production apps.",
        "price": 199,
        "options": [
            "225 builds",
            "2 included concurrencies",
            "Send updates to 50K MAUs",
            "Priority support",
            "Single sign-on (SSO)"
        ],
    },
    {
        "title": "Enterprise",
        "info": "For apps with scale, security, and compliance needs.",
        "price": 1999,
        "options": [
            "1,000 of builds",
            "5 included concurrencies",
            "Send updates to 1M MAUs",
            "Slack and strategic support add-on available"
        ],
    }
]
