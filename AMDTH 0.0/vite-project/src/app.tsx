import React, { useState, useEffect } from "react";
import Layout from "./components/layouts/layouts";
import Tienda from "./components/tiendacomponents/tienda";
import Adopcion from "./components/adopcioncomponents/adopcion";
import CarritoPage from "./pages/carrito"; // Página limpia del carrito
import Inicio from "./pages/inicio";
import { useCarritoGlobal } from "./hooks/useCarrito";

export default function App() {
  const [seccion, setSeccion] = useState(window.location.hash || "#inicio");

  // Hook global del carrito
  const {
    carrito,
    total,
    agregarAlCarrito,
    incrementar,
    decrementar,
    eliminarDelCarrito,
    limpiarCarrito,
  } = useCarritoGlobal();

  // Detectar cambio en el hash (#inicio, #tienda, #carrito, etc.)
  useEffect(() => {
    const handleHashChange = () => setSeccion(window.location.hash || "#inicio");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <Layout>
      {/* Página de inicio */}
      {seccion === "#inicio" && <Inicio />}

      {/* Tienda: recibe el método para agregar productos */}
      {seccion === "#tienda" && <Tienda agregarAlCarrito={agregarAlCarrito} />}

      {/* Adopción */}
      {seccion === "#adopcion" && <Adopcion />}

      {/* Carrito: página completa */}
      {seccion === "#carrito" && (
        <CarritoPage
          carrito={carrito}
          incrementar={incrementar}
          decrementar={decrementar}
          eliminarDelCarrito={eliminarDelCarrito}
          total={total}
          limpiarCarrito={limpiarCarrito}
        />
      )}
    </Layout>
  );
}
