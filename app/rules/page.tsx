"use client"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function RulesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hostel Rules & Regulations</h1>
        <p className="mt-4 text-lg text-gray-600">
          Our rules are designed to maintain discipline and create a conducive environment for all residents
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              General Rules
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="font-bold text-primary">1.</span>
                <p>Students must maintain discipline and decorum in the hostel premises at all times.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">2.</span>
                <p>Ragging in any form is strictly prohibited. Any student found guilty of ragging will be expelled.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">3.</span>
                <p>Possession or consumption of alcohol, tobacco, or any narcotic substances is strictly prohibited.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">4.</span>
                <p>Students must maintain cleanliness in their rooms and common areas.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">5.</span>
                <p>Damaging hostel property is a serious offense and will result in disciplinary action.</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Attendance & Timing
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="font-bold text-primary">1.</span>
                <p>Morning PT is compulsory for all students from 5:30 AM to 6:15 AM.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">2.</span>
                <p>
                  Evening study hours are from 8:30 PM to 10:00 PM, during which all students must be in the study room.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">3.</span>
                <p>Lights out time is 10:30 PM. All students must be in their rooms by this time.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">4.</span>
                <p>Students must take permission from the warden before leaving the hostel premises.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">5.</span>
                <p>Weekend outings are permitted only with prior written permission from parents/guardians.</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Mess Rules
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="font-bold text-primary">1.</span>
                <p>All students must be present in the mess during meal times.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">2.</span>
                <p>Wasting food is strictly prohibited.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">3.</span>
                <p>Students must maintain silence and discipline in the mess area.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">4.</span>
                <p>Food will not be served outside the designated meal timings except in case of illness.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">5.</span>
                <p>Complaints regarding food quality should be reported to the mess committee or warden.</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Disciplinary Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="font-bold text-primary">1.</span>
                <p>
                  Violation of hostel rules will result in disciplinary action, including warnings, punishment, fines, or
                  suspension.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">2.</span>
                <p>Repeated violations may result in expulsion from the hostel.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">3.</span>
                <p>The decision of the hostel warden and management will be final in all disciplinary matters.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">4.</span>
                <p>Parents/guardians will be notified of serious disciplinary issues.</p>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">5.</span>
                <p>The hostel management reserves the right to modify these rules as and when required.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

