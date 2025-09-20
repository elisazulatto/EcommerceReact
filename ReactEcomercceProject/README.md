# E-Commerce React App

Una aplicación de e-commerce desarrollada con React que permite navegar por un catálogo de libros nuevos y usados, agregar items al carrito y realizar compras.

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
│   ├── ItemDetailContainer.jsx
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

1. **Clona el repositorio**
   ```bash
   git clone "https://github.com/elisazulatto/EcommerceReact.git"
   cd ReactEcomercceProject
   ```

2. **Instala las dependencias** (IMPORTANTE: Ejecutar desde la carpeta del proyecto)
   ```bash
   npm install
   ```
   Esto instalará todas las dependencias necesarias:
   - React 19.1.0
   - React Router DOM
   - Firebase SDK
   - Bootstrap CSS

3. **Configura Firebase:**
   - Crea un archivo `.env` en la raíz del proyecto con las siguientes credenciales:
     ```bash
     # Firebase Configuration - Credenciales del proyecto
     VITE_FIREBASE_API_KEY=AIzaSyBR2UPR2JwtuaA8kWmH7yMhHph31VxdXRQ
     VITE_FIREBASE_AUTH_DOMAIN=reread-c9c7d.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=reread-c9c7d
     VITE_FIREBASE_STORAGE_BUCKET=reread-c9c7d.firebasestorage.app
     VITE_FIREBASE_MESSAGING_SENDER_ID=702275631174
     VITE_FIREBASE_APP_ID=1:702275631174:web:a1d2dbc477b57bba857247
     VITE_FIREBASE_MEASUREMENT_ID=G-QC4P7V1L0Q
     ```

La aplicación estará disponible en: `https://reread-c9c7d.web.app`

```
VITE_FIREBASE_API_KEY=AIzaSyBR2UPR2JwtuaA8kWmH7yMhHph31VxdXRQ
VITE_FIREBASE_AUTH_DOMAIN=reread-c9c7d.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=reread-c9c7d
VITE_FIREBASE_STORAGE_BUCKET=reread-c9c7d.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=702275631174
VITE_FIREBASE_APP_ID=1:702275631174:web:a1d2dbc477b57bba857247
VITE_FIREBASE_MEASUREMENT_ID=G-QC4P7V1L0Q
```
