import { useState } from "react";
import {Table,Pagination,Input} from "@/components/ui";
import { Badge } from "@/components/ui/badge";

const invoices = [
  { number: "INV/2025/00001", customer: "John Doe", date: "01/15/2025", due: "Today", activity: "Meeting", payment: "$2,500.00", status: "Draft" },
  { number: "INV/2025/00002", customer: "Jane Smith", date: "01/10/2025", due: "5 days", activity: "Follow-up on payment", payment: "$3,200.00", status: "Not Paid" },
  { number: "INV/2025/00003", customer: "Acme Corp", date: "12/20/2024", due: "13 days ago", activity: "Call", payment: "$1,500.00", status: "Posted" },
  { number: "INV/2025/00004", customer: "Beta LLC", date: "12/18/2024", due: "15 days ago", activity: "Upload Document", payment: "$2,800.00", status: "Paid" },
  { number: "INV/2025/00005", customer: "Charlie Inc", date: "12/10/2024", due: "25 days ago", activity: "Include Upsell", payment: "$4,500.00", status: "Draft" },
  { number: "INV/2025/00006", customer: "David Enterprises", date: "11/30/2024", due: "45 days ago", activity: "Follow-up on payment", payment: "$1,750.00", status: "Not Paid" },
  { number: "INV/2025/00007", customer: "Echo Ltd", date: "11/25/2024", due: "50 days ago", activity: "Call", payment: "$2,200.00", status: "Posted" },
  { number: "INV/2025/00008", customer: "Foxtrot Solutions", date: "11/15/2024", due: "60 days ago", activity: "Meeting", payment: "$5,100.00", status: "Paid" },
  { number: "INV/2025/00009", customer: "Golf Partners", date: "11/05/2024", due: "70 days ago", activity: "Upload Document", payment: "$3,000.00", status: "Not Paid" },
  { number: "INV/2025/00010", customer: "Hotel Networks", date: "10/25/2024", due: "80 days ago", activity: "Follow-up on payment", payment: "$4,750.00", status: "Posted" },
  { number: "INV/2025/00011", customer: "India Tech", date: "10/15/2024", due: "90 days ago", activity: "Meeting", payment: "$3,300.00", status: "Draft" },
  { number: "INV/2025/00012", customer: "Juliet Enterprises", date: "10/05/2024", due: "100 days ago", activity: "Call", payment: "$2,650.00", status: "Paid" },
  { number: "INV/2025/00013", customer: "Kilo Ventures", date: "09/25/2024", due: "110 days ago", activity: "Include Upsell", payment: "$3,900.00", status: "Not Paid" },
  { number: "INV/2025/00014", customer: "Lima Industries", date: "09/15/2024", due: "120 days ago", activity: "Upload Document", payment: "$2,400.00", status: "Posted" },
  { number: "INV/2025/00015", customer: "Mike Corp", date: "09/05/2024", due: "130 days ago", activity: "Follow-up on payment", payment: "$5,600.00", status: "Paid" }
];

export default function InvoiceTable() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const invoicesPerPage = 5;

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.customer.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = filteredInvoices.slice(indexOfFirstInvoice, indexOfLastInvoice);

  return (
    <div>
      <Input placeholder="Search invoices..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <Table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Customer</th>
            <th>Invoice Date</th>
            <th>Due Date</th>
            <th>Activities</th>
            <th>Total Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentInvoices.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.number}</td>
              <td>{invoice.customer}</td>
              <td>{invoice.date}</td>
              <td>{invoice.due}</td>
              <td>{invoice.activity}</td>
              <td>{invoice.payment}</td>
              <td><Badge>{invoice.status}</Badge></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        total={filteredInvoices.length}
        perPage={invoicesPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
