export interface Review {
    imgScr: `/img/${string}.png`,
    name: string,
    dateOfReview: Date,
    socialIconSrc: `/icons/${string}.svg`,
    rate: 1 | 2 | 3 | 4 | 5,
    description: string,
}

export interface RegPageContent {
    slogans: string[],
    info: string,
    reviews: Review[]
}

const RegPageContent: RegPageContent = {
    slogans: [
        'Easiest way',
        'meetings fast',
    ],
    info: 'Capture every plan, invite and detail.',
    reviews: [
        {
            imgScr: '/img/user_1.png',
            name: 'John Anderson',
            dateOfReview: new Date('2024-02-12'),
            socialIconSrc: '/icons/google.svg',
            rate: 5,
            description: 'This team is phenomenal! They understood our requirements, communicated effectively, and delivered a fantastic product. The user interface is intuitive, and performance has been excellent. However, we did experience a minor delay in delivery, but their team kept us informed throughout. Overall, highly recommended!'
        },
        {
            imgScr: '/img/user_2.png',
            name: 'John Anderson',
            dateOfReview: new Date('2024-02-12'),
            socialIconSrc: '/icons/google.svg',
            rate: 5,
            description: 'This team is phenomenal! They understood our requirements, communicated effectively, and delivered a fantastic product. The user interface is intuitive, and performance has been excellent. However, we did experience a minor delay in delivery, but their team kept us informed throughout. Overall, highly recommended!'
        },
        {
            imgScr: '/img/user_1.png',
            name: 'John Anderson',
            dateOfReview: new Date('2024-02-12'),
            socialIconSrc: '/icons/google.svg',
            rate: 5,
            description: 'This team is phenomenal! They understood our requirements, communicated effectively, and delivered a fantastic product. The user interface is intuitive, and performance has been excellent. However, we did experience a minor delay in delivery, but their team kept us informed throughout. Overall, highly recommended!'
        },
        {
            imgScr: '/img/user_1.png',
            name: 'John Anderson',
            dateOfReview: new Date('2024-02-12'),
            socialIconSrc: '/icons/google.svg',
            rate: 5,
            description: 'This team is phenomenal! They understood our requirements, communicated effectively, and delivered a fantastic product. The user interface is intuitive, and performance has been excellent. However, we did experience a minor delay in delivery, but their team kept us informed throughout. Overall, highly recommended!'
        },
        {
            imgScr: '/img/user_1.png',
            name: 'John Anderson',
            dateOfReview: new Date('2024-02-12'),
            socialIconSrc: '/icons/google.svg',
            rate: 5,
            description: 'This team is phenomenal! They understood our requirements, communicated effectively, and delivered a fantastic product. The user interface is intuitive, and performance has been excellent. However, we did experience a minor delay in delivery, but their team kept us informed throughout. Overall, highly recommended!'
        },
        {
            imgScr: '/img/user_1.png',
            name: 'John Anderson',
            dateOfReview: new Date('2024-02-12'),
            socialIconSrc: '/icons/google.svg',
            rate: 5,
            description: 'This team is phenomenal! They understood our requirements, communicated effectively, and delivered a fantastic product. The user interface is intuitive, and performance has been excellent. However, we did experience a minor delay in delivery, but their team kept us informed throughout. Overall, highly recommended!'
        },
        {
            imgScr: '/img/user_1.png',
            name: 'John Anderson',
            dateOfReview: new Date('2024-02-12'),
            socialIconSrc: '/icons/google.svg',
            rate: 5,
            description: 'This team is phenomenal! They understood our requirements, communicated effectively, and delivered a fantastic product. The user interface is intuitive, and performance has been excellent. However, we did experience a minor delay in delivery, but their team kept us informed throughout. Overall, highly recommended!'
        },
        {
            imgScr: '/img/user_1.png',
            name: 'John Anderson',
            dateOfReview: new Date('2024-02-12'),
            socialIconSrc: '/icons/google.svg',
            rate: 5,
            description: 'This team is phenomenal! They understood our requirements, communicated effectively, and delivered a fantastic product. The user interface is intuitive, and performance has been excellent. However, we did experience a minor delay in delivery, but their team kept us informed throughout. Overall, highly recommended!'
        },
        {
            imgScr: '/img/user_1.png',
            name: 'John Anderson',
            dateOfReview: new Date('2024-02-12'),
            socialIconSrc: '/icons/google.svg',
            rate: 5,
            description: 'This team is phenomenal! They understood our requirements, communicated effectively, and delivered a fantastic product. The user interface is intuitive, and performance has been excellent. However, we did experience a minor delay in delivery, but their team kept us informed throughout. Overall, highly recommended!'
        },
    ]
}

export default RegPageContent