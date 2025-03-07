import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Gallery</h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore life at Military Boys Hostel Karad through our photo gallery
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="festivals">Festival Celebrations</TabsTrigger>
            <TabsTrigger value="pt">PT Sessions</TabsTrigger>
            <TabsTrigger value="study">Study Rooms</TabsTrigger>
            <TabsTrigger value="play">Play Time</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
              <GalleryItem
                key={i}
                src={`/placeholder.svg?height=300&width=300&text=Gallery+Image+${i + 1}`}
                alt={`Gallery Image ${i + 1}`}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="festivals" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <GalleryItem
                key={i}
                src={`/placeholder.svg?height=300&width=300&text=Festival+${i + 1}`}
                alt={`Festival Celebration ${i + 1}`}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pt" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <GalleryItem
                key={i}
                src={`/placeholder.svg?height=300&width=300&text=PT+Session+${i + 1}`}
                alt={`PT Session ${i + 1}`}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="study" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <GalleryItem
                key={i}
                src={`/placeholder.svg?height=300&width=300&text=Study+Room+${i + 1}`}
                alt={`Study Room ${i + 1}`}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="play" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <GalleryItem
                key={i}
                src={`/placeholder.svg?height=300&width=300&text=Play+Time+${i + 1}`}
                alt={`Play Time ${i + 1}`}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function GalleryItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg group">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
        <p className="text-white p-3 font-medium">{alt}</p>
      </div>
    </div>
  )
}

