"use client";

import Link from "next/link";


export default function Home() {
  return( 
     <div>
      <ul>
        <Link href="/payrolllanding"><li> PayrollLanding</li></Link>
        <Link href="/todolanding"><li> Todolanding</li></Link>
        <Link href="/recruitmentlanding"><li> RecruitLanding</li></Link>
        <Link href="/invoicelanding"><li> invoicelanding</li></Link>
        <Link href="/expenselanding"><li> expenceLanding</li></Link>
        <Link href="/crmlanding"><li> CrmLanding</li></Link>
        <Link href="/formslanding"><li> Formslanding</li></Link>
        <Link href="/surveylanding"><li> Surveylanding</li></Link>
        <Link href="/inventorylanding"><li> inventory</li></Link>


      </ul>

   </div>);
}
