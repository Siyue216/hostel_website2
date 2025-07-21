"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

export default function UsefulLinks() {
  const links = [
    {
      category: "Hostel Documents",
      items: [
        {
          title: "Fee Structure",
          url: "/documents/fee-structure.pdf",
          description: "Detailed fee structure and payment schedule for the hostel"
        },
        {
          title: "Food Menu",
          url: "/documents/food-menu.pdf",
          description: "Weekly food menu and meal timings"
        },
        {
          title: "Leave Application Form",
          url: "/useful link/leave application.pdf",
          description: "Download leave application form for students"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Useful Links</h1>
      <div className="grid gap-6">
        {links.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {category.items.map((item) => (
                  <div key={item.title} className="border-b pb-4 last:border-0">
                    <Link
                      href={item.url}
                      target={item.url.startsWith('http') ? '_blank' : undefined}
                      rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-2 group"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                      {item.url.startsWith('http') ? (
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                      ) : (
                        <FileText className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 