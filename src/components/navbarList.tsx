export interface INavbar {
    items: {
        name: string
        url: string
    }[]
  }
  

  
const navbarItems :INavbar["items"] = [
    {
    name: "About me",
    url: "#about"
    },
    {
    name: "Lebenslauf",
    url: "#cv"
    },
    {
    name: "Skills",
    url: "#skills"
    },
    {
    name: "Kontakt",
    url: "#contact"
    }
]

export default navbarItems