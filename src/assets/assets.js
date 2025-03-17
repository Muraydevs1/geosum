import home_bgrnd from './home.jpeg'
import logo from './logo.png'
import telephone from './telephone.png'
import phone from './phone.png'
import menu from './menu.png'
import close from './close.png'
import about from './about.png'
import about1 from './about.1.avif'
import constructionpht from './construction.webp'
import datamanagepht from './data manage.jpg'
import healthpht from './health and safety.webp'
import mineplanningpht from './mininig planning.png'
import geoservicepht from './geological service.jpg';
import geotechpht from './about.png';
import projectimg from './project.jpeg'


export const assets = {
    home_bgrnd,
    projectimg,
    logo,
    telephone,
    phone,
    menu,
    close,
    about,
    about1,
    constructionpht,
    datamanagepht,
    healthpht,
    mineplanningpht,
    geoservicepht,
    geotechpht,
}

export const services =[
    {
        id:1,
        name:"Construction Services",
        image: constructionpht
    },
    {
        id:2,
        name:"Mine Planning and Engineering Services",
        image:mineplanningpht
    },
    {
        id:3,
        name:"Geological engineering Services",
        image:geoservicepht
    },
    {
        id:4,
        name:"Survey and Geotechnical Services",
        image:geotechpht
    },
    {
        id:5,
        name:"Health and Safety",
        image:healthpht
    },
    {
        id:6,
        name:"Software and Data Management Services",
        image:datamanagepht
    }

]


export const ProjectS=[
    {
        title: "4 Bedroom Apartment",
      location: "Accra",
      image: projectimg,
    }
]