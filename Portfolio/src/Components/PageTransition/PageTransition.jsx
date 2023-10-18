import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={location.pathname}
        initial={{ x: "100%" }} // Inicia fuera de la pantalla a la derecha
        animate={{ x: 0 }} // Animación hacia la posición original
        exit={{ x: "-100%" }} // Sale hacia la izquierda
        transition={{ type: "tween", duration: 0.5 }}
        style={{ width: "100%", height: "100%", backgroundColor: "orange", position: "absolute" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

