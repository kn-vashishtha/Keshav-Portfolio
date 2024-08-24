
import image1 from './assets/TeamArcs-Logo.jpeg'
import image2 from './assets/ElixirEdge Logo.jpeg'
export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Athletic Individual",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Keshav';

export const experiences = [
    {
        'company': 'ElixirEdge IT Solutions',
        'role': 'Full Stack Web Developer',
        'duration': 'September 2024 - Present',
        'logo': image2,
        'points': [
            'Involved in a full-stack web application using [React.js, Next.js , Sql,MongoDB, etc.] for customer relationship management at ElixirEdge IT Solutions, Noida.',
            'The project involved in the hospitality and travel industry, I worked on integrating technology, market intelligence, and revenuemanagement to optimize connectivity and distribution strategies by designing and implementing user interfaces, building RESTful APIs, and managing data storage.⚙️.'
        ],
        'url': 'https://www.elixiredge.com/',
    },
    {
        'company': 'TeamArcs Technologies',
        'role': 'Full Stack Developer Intern',
        'duration': 'July 2024 - September 2024',
        'logo': image1,
        'points': [
            'Developed a full-stack web application using [React js, Node js, Mongo DB etc for customer survey analysis at TeamArcs.',
            'Collaborated on all phases of development, gaining experience in agilemethodologies📱.'
        ],
        'url': 'https://www.teamarcs.com/',
    },
]



export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
