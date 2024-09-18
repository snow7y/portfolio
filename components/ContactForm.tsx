// ContactForm.tsx
import React, {useState} from "react";
import {AnimatedSection} from "./AnimatedSection";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("メール送信開始")

    await fetch("/api/email", {
      method: "POST",

      body: JSON.stringify({name, email, message}),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Success!");
      }
    });
  };

  return (
    <AnimatedSection id="contact">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
        Contact
      </h2>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white text-lg p-6"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white text-lg p-6"
          />
          <Textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white text-lg p-6"
            rows={6}
          />
          <Button
            type="submit"
            className="w-full text-lg py-6"
          >
            Send Message
          </Button>
        </form>
      </div>
    </AnimatedSection>
  );
};
