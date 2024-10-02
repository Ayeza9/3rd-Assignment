import Link from "next/link";

export default function Footer(){
    return(
        <div className = "footer">
            <ul className= "footer-buttons">
                <Link href = {"/service"}>
                <li>Services</li>
                </Link>
                <Link href={"/product"}>
                <li>Products</li>
                </Link>
                <Link href={"/blog"}>
                <li>Blog</li>
                </Link>
            </ul>
        </div>
    )
}