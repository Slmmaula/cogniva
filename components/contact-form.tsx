"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-green-600"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-4">Your message has been received. We'll get back to you shortly.</p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-black">
            Name
          </label>
          <Input id="name" placeholder="Your name" required className="text-black bg-white" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-black">
            Email
          </label>
          <Input id="email" type="email" placeholder="Your email" required className="text-black bg-white" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-black">
          Phone
        </label>
        <Input id="phone" type="tel" placeholder="Your phone number" className="text-black bg-white" />
      </div>
      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-black">
          Service Interested In
        </label>
        <Select>
          <SelectTrigger className="text-black bg-white">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="text-black bg-white">
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="mobile-app">Mobile App Development</SelectItem>
            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-black">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project"
          rows={4}
          required
          className="text-black bg-white"
        />
      </div>
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}

