import { NavigationBarType } from "./navigationBar";
import addClientIcon from "../../../public/images/addClient.png"
import importFileIcon from "../../../public/images/importFile.png"
import useListIcon from "../../../public/images/useList.svg"


export const links: NavigationBarType  = [
    {
        id: 1, 
        link: "/", 
        name: "Save Client", 
        icon: addClientIcon,  
    }, 
    // {
    //     id: 2, 
    //     link: "/upload-user-list", 
    //     name: "Upload File", 
    //     icon: importFileIcon,  
    // }, 
    {
        id: 3, 
        link: "/client-list", 
        name: "View Clients", 
        icon: useListIcon,  
    }, 
    {
        id: 4, 
        link: "/products", 
        name: "Products", 
        icon: useListIcon,  
    }, 
]