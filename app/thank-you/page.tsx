import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Thank You | Prayas Graphics",
  description: "Your enquiry has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  const whatsappNumber = "918788270495"; 
  const whatsappMessage = encodeURIComponent("Hi, I just submitted an enquiry on the website and wanted to follow up.");
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F8F8F8] pb-20 pt-24 overflow-x-hidden">
      <div className="w-full max-w-lg px-4 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 ring-8 ring-zinc-50 border border-zinc-200 shadow-xs">
          <CheckCircle2 className="h-12 w-12 text-zinc-950" />
        </div>
        
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-zinc-950 mb-4">
          Enquiry Received!
        </h1>
        <p className="text-lg text-zinc-600 mb-8 font-medium">
          Thank you for reaching out. We have received your detailed requirements and will send you a custom quotation via WhatsApp within <strong className="text-zinc-900">14 hours</strong>.
        </p>

        <div className="space-y-4 flex flex-col items-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full sm:w-80 h-14 items-center justify-center gap-3 rounded-full bg-zinc-950 px-8 font-bold text-white transition-all hover:bg-zinc-800 hover:scale-[1.02] shadow-sm"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us Directly
          </a>
          
          <Link
            href="/services"
            className="flex w-full sm:w-80 h-14 items-center justify-center rounded-full border border-zinc-300 bg-white px-8 font-bold text-zinc-900 transition-all hover:bg-zinc-50 hover:border-zinc-400"
          >
            Explore More Services
          </Link>
        </div>
      </div>
    </main>
  );
}
