import Model1 from "./Models/F1/model1";
import Model2 from "./Models/F2/Model2";
import Album from "./Models/F3/Album";
import Model3 from "./Models/F3/mainpage";
import Map from "./Models/F3/map";
import Middle1 from "./Models/F3/middle1";


export const Model3router = [
    { path:'map', component:<Map/>},
    { path:'album', component:<Album/>},
    { path:'', component:<Middle1/>},
]   

