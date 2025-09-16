# E-Commerce React App

Una aplicación de e-commerce desarrollada con React que permite navegar por un catálogo de productos, agregar items al carrito y realizar compras.

## Características

- **Catálogo de productos**: Visualización de productos con filtrado por categorías
- **Vista de detalle**: Información completa de cada producto
- **Carrito de compras**: Gestión de productos seleccionados
- **Checkout**: Proceso de compra con formulario de datos del cliente
- **Base de datos**: Integración con Firebase Firestore
- **Responsive**: Diseño adaptable a diferentes dispositivos

## Tecnologías utilizadas

- React 19.1.0
- React Router DOM
- Firebase Firestore
- Bootstrap (para estilos)
- Vite (como bundler)

## Estructura del proyecto

```
src/
├── componentes/
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── CartWidget.jsx
│   ├── CheckoutForm.jsx
│   ├── Item.jsx
│   ├── ItemCount.jsx
│   ├── ItemDetail.jsx
│   ├── ItemList.jsx
│   ├── ItemListContainer.jsx
│   └── NavBar.jsx
├── context/
│   └── CartContext.jsx
├── firebase/
│   └── config.js
├── mock/
│   └── AsyncMoc.js
└── css/
    ├── CartWidget.css
    ├── ItemList.css
    └── NavBar.css
```

## Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura Firebase:
   - Crea un proyecto en Firebase
   - Obtén las credenciales de configuración
   - Actualiza el archivo `src/firebase/config.js`
4. Ejecuta el proyecto:
   ```bash
   npm run dev
   ```

## Funcionalidades implementadas

### Navegación
- Rutas para catálogo principal, categorías, detalle de producto, carrito y checkout
- Navegación sin recarga de página (SPA)
- Página 404 para rutas no encontradas

### Carrito de compras
- Context API para manejo global del estado del carrito
- Agregar/eliminar productos
- Modificar cantidades
- Cálculo automático de totales
- Persistencia durante la navegación

### Base de datos
- Colección de productos en Firestore
- Registro de órdenes de compra
- Consultas asíncronas con manejo de errores

### Experiencia de usuario
- Estados de carga con spinners
- Mensajes condicionales (carrito vacío, sin stock, etc.)
- Validaciones en formularios
- Confirmación de órdenes con ID único

## Variables de entorno

Para ocultar las credenciales de Firebase, crea un archivo `.env` en la raíz del proyecto:

```
VITE_FIREBASE_API_KEY=tu-api-key
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto-id
VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=tu-app-id
```

Luego actualiza `src/firebase/config.js` para usar estas variables.

## Resumen de lo implementado:

✅ **Listado y Detalle de productos** - Completado
✅ **Separación contenedores/presentación** - Completado  
✅ **ItemCount con validaciones** - Completado
✅ **Ocultar ItemCount después de agregar** - Completado
✅ **Navegación con React Router** - Completado
✅ **SPA sin recargas** - Completado
✅ **Context para carrito** - Completado
✅ **Componente Cart** - Completado
✅ **CartWidget con contador** - Completado
✅ **Firebase Firestore** - Completado
✅ **Renderizado condicional** - Completado
✅ **Confirmación de órdenes** - Completado
✅ **README.md** - Completado

**¡Tu aplicación está completa y lista para la entrega final!** Solo necesitas configurar Firebase con tus credenciales y estará funcionando al 100%.
