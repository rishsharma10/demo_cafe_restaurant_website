"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is the cafe pet-friendly?",
    answer: "Yes! Our outdoor seating area is completely pet-friendly. We even have water bowls available for your furry friends."
  },
  {
    question: "Do you have free Wi-Fi for remote work?",
    answer: "Absolutely. We offer high-speed, complimentary Wi-Fi for all our guests. Just ask your server for the password."
  },
  {
    question: "Are there vegan or gluten-free options on the menu?",
    answer: "We have several vegan and gluten-friendly options, including oat and almond milk for coffees, and specific bakery items. Please check with our staff for daily specials!"
  },
  {
    question: "Is there parking available nearby?",
    answer: "Yes, there is a public parking lot directly in front of the cafe in Sector 10D, as well as ample street parking nearby."
  },
  {
    question: "Do you take table reservations?",
    answer: "We take reservations for groups of 4 or more. For smaller parties, we operate on a first-come, first-served basis. You can call us to book a larger table."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Got Questions?
          </p>
          <h2 className="reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-espresso">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="reveal space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border border-primary/10 rounded-2xl transition-colors duration-300 ${openIndex === i ? 'bg-latte' : 'bg-white hover:bg-latte/50'}`}
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-display font-bold text-espresso text-lg">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 text-caramel transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-6 pb-5 text-mocha/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
