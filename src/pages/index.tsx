import Dropdown from "@/components/Dropdown";
import Navbar from "@/components/Navbar";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (<>
  <Navbar/>
  <div className="flex justify-items-end">
     
      lush life
      {/* <NameBoard/> */}
     
      
      <Link href='/login'> login page</Link>
      <Dropdown/>
      <Dropdown/>
      <Dropdown/>
        {/* //#b4075f color code */}
      {/* <WhatsAppButton phoneNumber="+917994458702" message="nakshdfifbf"/> */}
    </div>
  </>
    
    
  );
}
