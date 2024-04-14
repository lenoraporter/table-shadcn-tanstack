import React from "react";
import { Resource, columns} from './columns'
import { DataTable } from '@/components/data-table'


async function getResources(): Promise<Resource[]> {
  const res = await fetch(
    'https://661b3a7265444945d04f2e77.mockapi.io/resources'
  )
  const data = await res.json()
  return data
}
export default async function Page() {
  const data = await getResources()
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">All Resources</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  )
}
