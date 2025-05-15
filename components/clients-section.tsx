"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const clients = [
  { 
    name: "Сбербанк", 
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgODAiPjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iODAiIGZpbGw9IiMwMDdmM2UiIHJ4PSI4Ii8+PHRleHQgeD0iMTIwIiB5PSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNCRVJCQU5LPC90ZXh0Pjwvc3ZnPg=="
  },
  { 
    name: "Газпром", 
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgODAiPjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iODAiIGZpbGw9IiMwMDRiOTMiIHJ4PSI4Ii8+PHRleHQgeD0iMTIwIiB5PSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdBWlBST008L3RleHQ+PC9zdmc+"
  },
  { 
    name: "Яндекс", 
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgODAiPjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iODAiIGZpbGw9IiNmZjAwMDAiIHJ4PSI4Ii8+PHRleHQgeD0iMTIwIiB5PSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllBTkRFWDwvdGV4dD48L3N2Zz4="
  },
  { 
    name: "Тинькофф", 
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgODAiPjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iODAiIGZpbGw9IiNmZmNkMDAiIHJ4PSI4Ii8+PHRleHQgeD0iMTIwIiB5PSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VElOS09GRjwvdGV4dD48L3N2Zz4="
  },
  { 
    name: "МТС", 
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgODAiPjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iODAiIGZpbGw9IiNlMzAwMDAiIHJ4PSI4Ii8+PHRleHQgeD0iMTIwIiB5PSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1UUzwvdGV4dD48L3N2Zz4="
  },
  { 
    name: "Ростелеком", 
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgODAiPjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iODAiIGZpbGw9IiM1MTVGQ0YiIHJ4PSI4Ii8+PHRleHQgeD0iMTIwIiB5PSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJPU1RFTEVDT008L3RleHQ+PC9zdmc+"
  },
  { 
    name: "Мегафон", 
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgODAiPjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iODAiIGZpbGw9IiMwMDgyQ0QiIHJ4PSI4Ii8+PHRleHQgeD0iMTIwIiB5PSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1FR0FGT048L3RleHQ+PC9zdmc+"
  },
  { 
    name: "ВТБ", 
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgODAiPjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iODAiIGZpbGw9IiMwMDM4OWIiIHJ4PSI4Ii8+PHRleHQgeD0iMTIwIiB5PSI0OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlZUQjwvdGV4dD48L3N2Zz4="
  },
]

export function ClientsSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">Нам доверяют</p>
        </motion.div>

        <div className="mt-8">
          <LogoMarquee />
        </div>
      </div>
    </section>
  )
}

function LogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Duplicate the clients array to create a seamless loop
  const allClients = [...clients, ...clients]

  return (
    <div className="relative flex w-full overflow-hidden">
      <div className="animate-marquee flex w-full">
        {allClients.map((client, index) => (
          <div
            key={index}
            className="mx-8 flex min-w-[150px] items-center justify-center transition duration-300 hover:opacity-80"
          >
            <img 
              src={client.logo} 
              alt={client.name} 
              className="h-10 object-contain" 
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const span = parent.querySelector('span');
                  if (span) {
                    span.style.display = 'block';
                  }
                }
              }}
            />
            <span 
              className="hidden text-lg font-semibold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent"
            >
              {client.name}
            </span>
          </div>
        ))}
      </div>

      <div className="animate-marquee2 absolute top-0 flex w-full">
        {allClients.map((client, index) => (
          <div
            key={index}
            className="mx-8 flex min-w-[150px] items-center justify-center transition duration-300 hover:opacity-80"
          >
            <img 
              src={client.logo} 
              alt={client.name} 
              className="h-10 object-contain" 
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const span = parent.querySelector('span');
                  if (span) {
                    span.style.display = 'block';
                  }
                }
              }}
            />
            <span 
              className="hidden text-lg font-semibold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent"
            >
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
