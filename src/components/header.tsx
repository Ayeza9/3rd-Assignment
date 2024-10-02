import Link from "next/link";

export default function Header(){
    return(
        <div className = "NavBar">
            <ul className= "Header-buttons">
                <Link href = {"/portfolio"}>
                <li>Portfolio</li>
                </Link>
                <Link href={"/about-us"}>
                <li>About Us</li>
                </Link>
                <Link href={"/contact-us"}>
                <li>Contact Us</li>
                </Link>
            </ul>
        </div>
    )
}