"use client";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  CheckCircle,
  LucideIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  type submitStatus = {
    type: "success" | "error" | null;
    message: string;
  };
  const [submitStatus, setSubmitStatus] = useState<submitStatus>({
    type: null,
    message: "",
  });
  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Environment variables are not working!");
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );
      enqueueSnackbar("Message sent successfully!", { variant: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJs error: ", error);
      enqueueSnackbar("Failed to send message!", { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  type contactType = {
    icon: LucideIcon;
    label: string;
    value: string;
    href: string;
  };
  const contact: contactType[] = [
    {
      icon: Mail,
      label: "Email",
      value: "rupamsen195@gmail.com",
      href: "mailto:rupamsen@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+91)  9163154333",
      href: "9163154333",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, West Bengal, India",
      href: "#",
    },
  ];
  return (
    <div
      id="contact"
      className="flex flex-col items-center container mx-auto text-center relative px-10 sm:px-12 lg:px-24 xl:px-40 overflow-hidden w-full text-white/90 pt-30 pb-30"
    >
      <div className="absolute top-1/2 left-1/4 md:left-0 bg-secondary/10 animate-pulse w-96 md:w-full h-98 rounded-full blur-3xl -translate-y-1/2" />
      <p className="text-sm">GET IN TOUCH</p>
      <p className="text-3xl text-white/80 mb-2">Let's build something great</p>
      <p className="text-sm text-gray-400">
        If you need a project feel free to contact me
      </p>
      <div className="relative grid md:grid-cols-2 gap-8 my-10 text-left">
        <div className="bg-mauve-950 px-5 rounded-xl my-4 py-6 border border-secondary/10 shadow-lg shadow-secondary/10 w-80 lg:w-90">
          <h1>Contact Information</h1>
          {contact.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="mt-6 px-3 text-sm">
                <div className="flex gap-3 space-y-4">
                  <span className="p-2 bg-mauve-800 rounded-md mt-1">
                    {<Icon className="text-indigo-500 w-5 h-5" />}
                  </span>
                  <span className="">
                    <p className="text-gray-400">{item.label}</p>
                    <p>{item.value}</p>
                  </span>
                </div>
              </div>
            );
          })}
          <div className="px-4 py-2 bg-mauve-900 rounded-xl mt-4">
            <div className="relative">
              <div className="absolute left-1 top-2 bottom-0 w-2 h-2 -translate-x-1/2 ring ring-white/10 z-10 bg-secondary rounded-full">
                <span className="absolute inset-0 rounded-full bg-secondary animate-ping" />
              </div>
              <h1 className="mx-4">Currently available</h1>
            </div>
            <p className="text-sm text-gray-400 ">
              I’m available for new opportunities and full-time
              roles. I love building modern, scalable web applications
              with clean and efficient code. If you have a project idea or role
              in mind, feel free to reach out and share your contact number. I’d be happy to connect and
              discuss how I can contribute for the project. 
            </p>
          </div>
        </div>
        <div className="space-y-4 rounded-xl bg-mauve-950 px-5 py-6 my-4 border border-secondary/10 shadow-lg shadow-secondary/10 w-80 lg:w-90">
          <h1>Contact</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-3 relative space-y-4 text-sm"
          >
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              placeholder="Enter your name"
              required
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
              className="bg-mauve-900 outline-0 focus:ring-1 focus:ring-secondary px-4 py-2 rounded-xl h-10 font-light"
            />
            <User className="absolute w-4 h-4 right-6 top-12" />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              value={formData.email}
              placeholder="Enter your email"
              required
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              className="bg-mauve-900 outline-0 focus:ring-1 focus:ring-secondary px-4 py-2 rounded-xl h-10 font-light"
            />
            <MdEmail className="absolute w-4 h-4 right-6 top-35" />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              placeholder="Enter your message"
              required
              onChange={(event) =>
                setFormData({ ...formData, message: event.target.value })
              }
              className="bg-mauve-900 outline-0 focus:ring-1 focus:ring-secondary px-4 py-2 rounded-xl font-light resize-none"
            />
            <MessageCircle className="absolute w-4 h-4 right-6 top-58" />
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-1 justify-center text-center hover:text-white/80 button-glow bg-secondary hover:bg-secondary/90 rounded-full mt-4 my-2 py-3"
            >
              {isLoading ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 mt-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
