"use client";

import Link from "next/link";

const links = [
  { href: "/payrolllanding", label: "Payroll Landing" },
  { href: "/todolanding", label: "Todo Landing" },
  { href: "/recruitmentlanding", label: "Recruitment Landing" },
  { href: "/invoicelanding", label: "Invoice Landing" },
  { href: "/expenselanding", label: "Expense Landing" },
  { href: "/crmlanding", label: "CRM Landing" },
  { href: "/formslanding", label: "Forms Landing" },
  { href: "/surveylanding", label: "Survey Landing" },
  { href: "/inventorylanding", label: "Inventory" },
];

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ul className="bg-white p-6 rounded-2xl shadow-lg space-y-2 w-72">
        {links.map((link, index) => (
          <li key={index} className="text-center">
            <Link
              href={link.href}
              className="block py-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
