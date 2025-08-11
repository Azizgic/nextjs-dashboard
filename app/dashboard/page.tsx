import RevenueChart from "@/app/ui/dashboard/revenue-chart"
import { lusitana } from "@/app/ui/fonts"
import { fetchLatestInvoices, fetchRevenue } from "../lib/data"
import LatestInvoices from "../ui/dashboard/latest-invoices";

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
            <div></div>
            <div className="mt-6 grid gird-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {<RevenueChart revenue={revenue} />}
                {<LatestInvoices latestInvoices={latestInvoices} />}
            </div>
        </main>
    )
}
