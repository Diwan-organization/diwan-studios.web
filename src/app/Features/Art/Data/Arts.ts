export class ArtCategory {
    Name!: string;
    ProjectItem!: ArtProjectItem[]
}

export class ArtProjectItem {
    Name!: string;
    Description!: string;
    Images!: string[];
    Location!: string;
    CategoryName!: string;
}

export const ArtProjects: ArtProjectItem[] = [
    {
        Name: 'FIFA',
        Description: 'Exclusive artistry in Qatar World Cup 2022 Where passion meets art through our Graffiti at Al-thomama and Al-Janub Stadiums. Number of walls: 2 walls at Al-thomama stadium 3 walls at Al-Jandub stadium.',
        Location: 'Qatar',
        Images: [
            'assets/Images/Projects/fifa/fifa1.webp',
            'assets/Images/Projects/fifa/fifa2.webp',
            'assets/Images/Projects/fifa/fifa3.webp',
            'assets/Images/Projects/fifa/fifa4.webp',
        ],
        CategoryName: 'Commercial'
    }, {
        Name: 'EAA',
        Description: 'EAA envisions bringing new life chances, real hope and opportunities to improve the lives of poor and marginalised children, youth and women especially in the developing world.',
        Location: 'Qatar',
        Images: [
            'assets/Images/Projects/EAA/EAA1.webp',
            'assets/Images/Projects/EAA/EAA2.webp',
            'assets/Images/Projects/EAA/EAA3.webp',
            'assets/Images/Projects/EAA/EAA4.webp',
        ],
        CategoryName: 'Commercial'
    }, {
        Name: 'PubG',
        Description: `In celebration of Vikendi Reborn we couldn't miss the chance to add our touches onto PS5 with an illustraion for PubG game.`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/pubg/pubg1.png',
            'assets/Images/Projects/pubg/pubg2.webp',
            'assets/Images/Projects/pubg/pubg3.webp',
            'assets/Images/Projects/pubg/pubg4.webp',
        ],
        CategoryName: 'Commercial'
    }, {
        Name: 'HSBC',
        Description: 'This is from the "Vision of Our City" campaign.\nThe idea of representing each location of the bank in\nthis project we worked on the headquarters in Cairo.\nIn the piece we include pixels and personalities that\ndepict the role of technology and a new female-led\ngeneration of entrepreneurs. \nThis generation is puttingsustainable initiatives first, represented by plants and the shape of the lotus; a symbol of rebirth.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/hsbc/hsbc1.webp',
            'assets/Images/Projects/hsbc/hsbc-lion.png',
        ],
        CategoryName: 'Commercial'
    }, {
        Name: 'Adidas',
        Description: 'The design incorporates the finest aspects of modern and ancient Egyptian art and architecture into a spectacular masterpiece in the center lays two main elements instantly grabing on attention diwan studios graffiti artwork and adidas trefoil centered in a perfect combination fading away the boundary between art and the everyday world.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/adidas/adidas1.webp',
            'assets/Images/Projects/adidas/adidas2.webp',
            'assets/Images/Projects/adidas/adidas3.webp',
        ],
        CategoryName: 'Commercial'
    }, {
        Name: 'Lane 9',
        Description: 'Fluorescent interactive art concept around 500 meter square.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/lane9/lane1.webp',
            'assets/Images/Projects/lane9/lane2.webp',
            'assets/Images/Projects/lane9/lane3.webp',
            'assets/Images/Projects/lane9/lane4.webp',
            'assets/Images/Projects/lane9/lane5.webp',
            'assets/Images/Projects/lane9/lane5.webp',
            'assets/Images/Projects/lane9/lane6.webp',
            'assets/Images/Projects/lane9/lane7.webp',
            'assets/Images/Projects/lane9/lane8.webp',
            'assets/Images/Projects/lane9/lane9.webp',
            'assets/Images/Projects/lane9/lane10.webp',
            'assets/Images/Projects/lane9/lane11.webp',
            'assets/Images/Projects/lane9/lane12.webp',
        ],
        CategoryName: 'Entertainments'
    }, {
        Name: 'Orange',
        Description: 'Whole building consist of 11 floors.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Offices and factories'
    }, {
        Name: 'Mondelez',
        Description: `The point here was to story-tell the employees' health, safety and enviroment through typography.\naccentuating the brand names of Mondelez through applying the popping colors for a lively atmosphere`,
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/mondelez/mondelez1.webp',
            'assets/Images/Projects/mondelez/mondelez2.webp',
            'assets/Images/Projects/mondelez/mondelez3.webp',
            'assets/Images/Projects/mondelez/mondelez4.webp',
            'assets/Images/Projects/mondelez/mondelez5.webp',
            'assets/Images/Projects/mondelez/mondelez6.webp',
        ],
        CategoryName: 'Offices and factories'
    }, {
        Name: 'Careem',
        Description: 'Inspiring graffiti art used as a motivation for growth using the brand color.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Offices and factories'
    }, {
        Name: 'Money Fellows',
        Description: 'The graffiti drawn on the walls of their head offices in cairo took the walls to another place to keep up the positive vibes in the place.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Offices and factories'
    }, {
        Name: 'Virtual Quest',
        Description: 'Number of walls: 10.\nGame developnig office.\nAdding an artistic touch to walls of the place to match the identity and make it special.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Offices and factories'
    }, {
        Name: 'GTE',
        Description: 'Travel solutions company.\nUnique artwork to keep up the positive vibes.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Offices and factories'
    }, {
        Name: 'Rubix Park',
        Description: 'Number of walls: 8.\nA fun way to keep the audience included.\nIn this project we used the interactive art concept in which the art is involved with the spectator in a way.\nHaving interactive artwork for people to enjoy like the rubik\'s cube which can be used as a bench.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Malls'
    }, {
        Name: 'Gleem Bay',
        Description: 'Number of walls: 8.\nAn outdoor hub featuring the beach and summer vibes.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Malls'
    }, {
        Name: 'Tio Complex',
        Description: '',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Malls'
    }, {
        Name: 'Pro Guys',
        Description: 'Pro Guys is one of the best wrapping and car styling companies in Egypt.\nFocus was showcasing their identity and work through our murals ending it witha statement wall of Pro Guy\'s dream team',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Showrooms'
    }, {
        Name: 'Seats',
        Description: 'Adding color to the walls through tropical and relatable artwork.',
        Location: 'Egypt',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Showrooms'
    }, {
        Name: 'Bonita',
        Description: 'One of the top mexican cuisines in Egypt.\nThe artwork along with the neon lights purpose is to give the place Mexican vibes as if clients are stepping into the heart of Mexico.',
        Location: 'Qatar',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Restaurants'
    }, {
        Name: 'Taiyaki',
        Description: 'Promoting the Origin of the place through murals that show the street of japan which highlights the japanese culture.',
        Location: 'Qatar',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Restaurants'
    }, {
        Name: 'Butcher\'s Burger',
        Description: 'Number of branches: 10.\nPutting an identity to Butcher\'s Burger walls that matches its modern interior.',
        Location: 'Qatar',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Restaurants'
    }, {
        Name: 'Kansas',
        Description: 'Number of branches: 5.\nGiving a new look to a fried chicken quick service, Kansas interior is all about hip hop street graffiti.',
        Location: 'Qatar',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Restaurants'
    }, {
        Name: 'Mori Sushi',
        Description: 'Japanese murals artwork.',
        Location: 'Qatar',
        Images: [
            'assets/Images/Projects/',
        ],
        CategoryName: 'Restaurants'
    },
];

export const ArtCategories: ArtCategory[] = [
    { Name: 'Commercial', ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Commercial') },
    { Name: 'Offices and factories', ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Offices and factories') },
    { Name: 'Restaurants', ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Restaurants') },
    { Name: 'Malls', ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Malls') },
    { Name: 'Showrooms', ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Showrooms') },
    { Name: 'Entertainment', ProjectItem: ArtProjects.filter(p => p.CategoryName == 'Entertainments') },
];
