 import Image from "next/image";
 import profile from "../../public/profile.jpg"
 import Header from "../components/header"
 import Footer from "@/components/footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Footer/>
    
  
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="bluecolor">Ayeza Haroon</span>
          <br />I'm Next.JS Developer 
        </div>
        <div className="childContainer" >
      <Image className="profile-image" src="/profile.jpg" alt ="profile.jpg" width ={200} height= {200}/>
      </div>
      </div>
      </div>
  );
}