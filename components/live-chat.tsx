"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi there! How can we help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    setTimeout(() => {
      const agentResponses = [
        "Thanks for reaching out! Someone from our team will get back to you shortly.",
        "I'd be happy to help with that. Could you provide more details?",
        "That's a great question. Let me find the best solution for you.",
        "We offer a variety of services that might address your needs. Would you like to schedule a consultation?",
        "I understand your concern. Let me connect you with one of our specialists.",
      ]

      const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)]

      const agentMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, agentMessage])
    }, 1000)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="flex flex-col w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl overflow-hidden border">
          {/* Chat header */}
          <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-medium">Chat with Cogniva Creative</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-purple-700">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-end gap-2 max-w-[80%]",
                    message.isUser ? "ml-auto justify-end" : "justify-start"
                  )}
                >
                  {!message.isUser && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 select-none">
                      C
                    </div>
                  )}
                  <div
                    className={cn(
                      "p-3 rounded-xl text-sm",
                      message.isUser
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    )}
                  >
                    <p>{message.text}</p>
                    <p className="text-xs opacity-70 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  {message.isUser && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-800 text-white select-none">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-3 border-t flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon" className="bg-purple-600 hover:bg-purple-700">
              <Send className="h-4 w-4 text-white" />
            </Button>
          </form>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}
    </div>
  )
}
