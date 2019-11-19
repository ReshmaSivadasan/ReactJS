// import Fevicon_icon from '../assets/Fevicon_icon.png';
// import image2 from '../assets/image2.jpg';
// import image3 from '../assets/image3.jpg';
import icons from '../assets';



 const iconsFromFolder = (x)=>{
     return(
         <div>
             <img src= {icons[x]} alt ="icons"  />
         </div>
     );
 }
// const PROJECT = [
//     {
//         id:1,
//         title:'Digital Automation Fabric',
//         description:'First project',
//         image: Fevicon_icon,
//         link : 'http://10.56.200.51/daf2/login.html'
//     },
//      {
//         id:2,
//         title:'My API',
//         description:'Using React App',
//         image: image2
//     },
//      {
//         id:3,
//         title:'Final project',
//         description : 'New app',
//         image: image3
//     }
// ];

export default iconsFromFolder;
