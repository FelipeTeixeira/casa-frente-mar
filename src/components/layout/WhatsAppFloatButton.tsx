import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/config/site";

export function WhatsAppFloatButton() {
  return (
    <motion.a
      href={buildWhatsAppLink("default")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_-4px_rgba(0,0,0,0.35)] sm:h-16 sm:w-16"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/60" />
    </motion.a>
  );
}
