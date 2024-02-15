import Link from "next/link"
import Logo from "./Logo"

function Navbar() {
  return (
    <div className="bg-slate-500 grid grid-col-1 place-items-center">
      <div>
      <Link href="/">
        <Logo/>
      </Link>
      </div>
      <div>
       

      </div>
    </div>
  )
}

export default Navbar