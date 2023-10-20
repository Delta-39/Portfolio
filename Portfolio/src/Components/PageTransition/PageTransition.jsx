import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PageTransition = ({ children }) => {
  const location = useLocation();

  // Función para manejar el estilo del body y evitar la barra de desplazamiento horizontal
  const handleBodyOverflow = (value) => {
    document.body.style.overflowX = value;
  };

  useEffect(() => {
    // Antes de la transición
    handleBodyOverflow("hidden");

    // Después de la transición (ajusta el tiempo para que coincida con la duración de la animación)
    const transitionDuration = 1200; 
    const timeout = setTimeout(() => {
      handleBodyOverflow("auto");
    }, transitionDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "200%" }}
        transition={{ type: "tween", duration: 0.6 }}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "orange",
          position: "absolute",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        {/* Capa naranja */}
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.5, delay: 0.6 }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 11,
          overflow: "hidden",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
