import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";



export default function LayoutPage (){

return(
    <>
    <Navbar/>
    <main style={{position:'absolute', top:'4.2rem'}}>
        <Outlet/>

    </main>
    
    </>
);


}