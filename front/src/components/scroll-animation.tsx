import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ScrollProps {
  children: React.ReactNode;
}
export function Scroll({ children }: ScrollProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // inizia da una posizione più bassa
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 100, // anima verso la posizione originale
      }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
