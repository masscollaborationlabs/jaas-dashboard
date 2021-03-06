import { ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: ReactElement;
  isActive: boolean;
};

export default function FadeUpIn({
  children,
  isActive = true,
}: Props): ReactElement {
  return (
    <>
      {isActive && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
