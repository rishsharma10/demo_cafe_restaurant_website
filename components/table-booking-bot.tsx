"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles, User, Calendar, Clock, CheckCircle } from "lucide-react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

type Option = {
  label: string;
  nextStep: number;
  value?: string;
};

export default function TableBookingBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(0);
  const [bookingDetails, setBookingDetails] = useState({
    party: "",
    date: "",
    time: "",
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateBotResponse(
        "Hi! I'm the Vidhyonix Cafe AI Concierge ✨ I can help you reserve a table, recommend dishes, or answer any questions about our menu.",
        0
      );
    }
  }, [isOpen]);

  const simulateBotResponse = (text: string, nextStep: number, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "bot", text }]);
      setStep(nextStep);
    }, delay);
  };

  const handleOptionClick = (option: Option) => {
    // Add user message
    setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "user", text: option.label }]);
    
    // Save details if applicable
    if (step === 1) setBookingDetails(prev => ({ ...prev, party: option.value || option.label }));
    if (step === 2) setBookingDetails(prev => ({ ...prev, date: option.value || option.label }));
    if (step === 3) setBookingDetails(prev => ({ ...prev, time: option.value || option.label }));

    // Hide options while loading next step
    setStep(-1); 

    // Determine bot's next response based on the step we just completed
    switch (step) {
      case 0:
        if (option.label === "Reserve a Table") {
          simulateBotResponse("Awesome. How many people are joining?", 1);
        } else if (option.label === "Do you have vegan options?") {
          simulateBotResponse("Yes! We have a delicious Vegan Margherita Pizza and several plant-based milks for our coffees. Would you like to book a table to try them?", 102);
        } else if (option.label === "What's the best drink here?") {
          simulateBotResponse("Our absolute best-seller is the Cold Coffee—it's legendary here! The Hazelnut Frappe is a close second. Ready to come in and try one?", 102);
        } else {
          simulateBotResponse("No problem! Let me know if you change your mind.", 99);
        }
        break;
      case 1:
        simulateBotResponse("Got it. When would you like to come in?", 2);
        break;
      case 2:
        simulateBotResponse("Perfect! We have a few great tables left. Pick a time:", 3);
        break;
      case 3:
        simulateBotResponse(`Almost done. 2 people at ${option.label}. Should I lock this in under your name?`, 4);
        break;
      case 4:
        simulateBotResponse("You're all set! 🥳 I've locked in your table. See you soon at Vidhyonix Cafe!", 5);
        break;
      case 99:
        if (option.label === "Actually, let's book") {
          simulateBotResponse("Awesome. How many people are joining?", 1);
        }
        break;
      case 102:
        if (option.label === "Yes, let's book a table") {
          simulateBotResponse("Awesome. How many people are joining?", 1);
        } else {
          simulateBotResponse("No problem! I'll be here if you change your mind.", 99);
        }
        break;
      default:
        break;
    }
  };

  // Define options for each step
  const getOptionsForStep = () => {
    switch (step) {
      case 0:
        return [
          { label: "Reserve a Table", nextStep: 1 },
          { label: "Do you have vegan options?", nextStep: 100 },
          { label: "What's the best drink here?", nextStep: 101 },
        ];
      case 1:
        return [
          { label: "1-2 People", nextStep: 2, value: "2" },
          { label: "3-4 People", nextStep: 2, value: "4" },
          { label: "5+ Group", nextStep: 2, value: "6" },
        ];
      case 2:
        return [
          { label: "Today", nextStep: 3 },
          { label: "Tomorrow", nextStep: 3 },
          { label: "This Weekend", nextStep: 3 },
        ];
      case 3:
        return [
          { label: "12:30 PM", nextStep: 4 },
          { label: "1:00 PM", nextStep: 4 },
          { label: "7:30 PM", nextStep: 4 },
          { label: "8:00 PM", nextStep: 4 },
        ];
      case 4:
        return [
          { label: "Book as Guest", nextStep: 5 },
        ];
      case 5:
        return [
          { label: "Close Chat", nextStep: -2 }, // Special case to close
        ];
      case 99:
        return [
          { label: "Actually, let's book", nextStep: 1 }
        ];
      case 102:
        return [
          { label: "Yes, let's book a table", nextStep: 1 },
          { label: "Just browsing for now", nextStep: 99 },
        ];
      default:
        return [];
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Optional: Reset chat if they closed after completing
    if (step === 5) {
      setTimeout(() => {
        setMessages([]);
        setStep(0);
        setBookingDetails({ party: "", date: "", time: "" });
      }, 500);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 bg-espresso text-cream px-5 py-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100'}`}
      >
        <Sparkles className="h-5 w-5 text-accent" />
        <span className="font-display font-bold">Book a Table</span>
      </motion.button>

      {/* Chat Window Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.25 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] h-[500px] max-h-[80vh] bg-cream rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-espresso/10"
          >
            {/* Header */}
            <div className="bg-espresso text-cream p-4 flex items-center justify-between shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center relative">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-espresso rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-display font-bold leading-none mb-1">Vidhyonix AI Concierge</h3>
                  <p className="text-xs text-cream/70">Always online</p>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#f8f6f3]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3 px-4 text-sm sm:text-base ${
                      msg.sender === "user" 
                        ? "bg-accent text-white rounded-br-sm shadow-sm" 
                        : "bg-white text-espresso rounded-bl-sm shadow-sm border border-black/5"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Booking Summary Card (Shows at the end) */}
              {step === 5 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-accent/20 mx-2 mt-2"
                >
                  <div className="flex items-center gap-2 text-accent font-bold mb-3 border-b border-black/5 pb-2">
                    <CheckCircle className="w-5 h-5" />
                    Booking Confirmed
                  </div>
                  <div className="space-y-2 text-sm text-espresso/80">
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-black/40" />
                      <span>{bookingDetails.party || "2"} People</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-black/40" />
                      <span>{bookingDetails.date || "Today"}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-black/40" />
                      <span>{bookingDetails.time || "7:30 PM"}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl rounded-bl-sm p-4 shadow-sm border border-black/5 flex gap-1">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} 
                      className="w-2 h-2 bg-black/30 rounded-full"
                    />
                    <motion.div 
                      animate={{ y: [0, -5, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} 
                      className="w-2 h-2 bg-black/30 rounded-full"
                    />
                    <motion.div 
                      animate={{ y: [0, -5, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} 
                      className="w-2 h-2 bg-black/30 rounded-full"
                    />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Options */}
            <div className="p-4 bg-white border-t border-espresso/10">
              <div className="flex flex-wrap gap-2">
                {getOptionsForStep().map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (opt.nextStep === -2) {
                        handleClose();
                      } else {
                        handleOptionClick(opt);
                      }
                    }}
                    disabled={isTyping}
                    className="bg-cream hover:bg-caramel/30 text-espresso text-sm font-bold py-2 px-4 rounded-full border border-caramel/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {opt.label}
                  </button>
                ))}
                {getOptionsForStep().length === 0 && !isTyping && step !== -1 && (
                  <p className="text-xs text-black/40 italic w-full text-center">Chat ended.</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
