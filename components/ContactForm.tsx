// ContactForm.tsx
import React from "react";
import {AnimatedSection} from "./AnimatedSection";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

export const ContactForm: React.FC = () => {
  return (
    <AnimatedSection id="contact">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
        Get in Touch
      </h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-6">
          <Input
            placeholder="Name"
            className="bg-gray-800 border-gray-700 text-white text-lg p-6"
          />
          <Input
            type="email"
            placeholder="Email"
            className="bg-gray-800 border-gray-700 text-white text-lg p-6"
          />
          <Textarea
            placeholder="Message"
            className="bg-gray-800 border-gray-700 text-white text-lg p-6"
            rows={6}
          />
          <Button type="submit" className="w-full text-lg py-6">
            Send Message
          </Button>
        </form>
      </div>
    </AnimatedSection>
  );
};
