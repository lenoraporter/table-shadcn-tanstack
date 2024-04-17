"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Resource = {
  id: string
  name: string
  ipAddress: number
  status: "active" | "inactive"
  dropletType: string
  createdAt: string
}

export const columns: ColumnDef<Resource>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "ipAddress",
    header: "IP Address",
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'))
      const formatted = date.toLocaleDateString()
      return <div className='font-medium'>{formatted}</div>
    }
  },
]
