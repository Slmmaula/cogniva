"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqAccordion() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing options including project-based, retainer, and hourly rates. Each project is unique, so we provide custom quotes based on your specific requirements and objectives. We're transparent about costs and ensure you understand the value you're receiving.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes, we offer various maintenance and support packages to ensure your digital assets remain secure, up-to-date, and performing optimally. Our support team is available to address any issues and implement updates as needed.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We establish clear KPIs aligned with your business goals at the beginning of each project. These might include metrics like conversion rates, user engagement, traffic growth, or revenue increases. We provide regular reports tracking these metrics to demonstrate ROI.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "Our team is proficient in a wide range of technologies including React, Next.js, Node.js, Python, PHP, WordPress, Shopify, iOS/Android development, and more. We select the most appropriate technology stack based on your specific project requirements.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b">
          <AccordionTrigger className="py-4 text-left font-medium hover:text-purple-600 transition-colors">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-4 pt-1 text-muted-foreground">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

