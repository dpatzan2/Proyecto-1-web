# 🧮 Proyecto Calculadora Web

Este proyecto es una calculadora web interactiva desarrollada con React, permite realizar operaciones aritméticas básicas como suma, resta, multiplicación, división, cambio de signo y manejo de decimales, proporcionando una experiencia de usuario intuitiva y responsiva - [🛠️ Demo 🛠️](https://proyecto-1-web-five.vercel.app/)

## ✨ Características

- 🖥️ Interfaz amigable y responsiva.
- ➕➖✖️➗ Operaciones básicas: suma, resta, multiplicación, división.
- 🔢 Soporte para números decimales.
- 🧹 Botón para limpiar la pantalla (`C`).
- 🔄 Cambio de signo (`+/-`).
- 🧪 Pruebas automatizadas con Jest y React Testing Library.
- 📚 Documentación visual de componentes con Storybook.

## 🛠️ Tecnologías Utilizadas

- [⚛️ React](https://reactjs.org/)
- [🃏 Jest](https://jestjs.io/)
- [🧪 React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [📚 Storybook](https://storybook.js.org/)
- 💻 JavaScript (ES6+)
- 🎨 TailwindCSS

## 🚀 Instalación

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/dpatzan2/Proyecto-1-web.git
   cd proyecto-1
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

## ▶️ Uso

Para iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:57173) para ver la aplicación en tu navegador.

## 📚 Storybook

Para visualizar la documentación interactiva de los componentes con Storybook:

```bash
npm run storybook
```

Abre [http://localhost:6006](http://localhost:6006) para ver Storybook en tu navegador.

## 🧪 Pruebas

Para ejecutar las pruebas automatizadas:

```bash
npm test
```

Las pruebas cubren la funcionalidad principal de la calculadora, asegurando que las operaciones y la interfaz funcionen correctamente.

## 📁 Estructura del Proyecto

```
proyecto-1/
├── .storybook/
│   ├── main.js
│   ├── preview.js
│   └── ...
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── __tests__/
│   │   └── Calculator.test.jsx
│   |   └── ...
│   ├── components/
│   │   └── Calculator.jsx
│   |   └── ...
│   ├── stories/
│   │   └── Calculator.stories.jsx
│   |   └── ...
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

- `.storybook/`: Configuración de Storybook.
- `src/components/`: Componentes principales de la aplicación.
- `src/__tests__/`: Pruebas unitarias.
- `src/stories/`: Historias de Storybook para los componentes.
- `public/`: Archivos públicos y HTML base.
- `package.json`: Dependencias y scripts del proyecto.

---

Diseño inspirado en [Calculadora](https://github.com/dpatzan2/IN5BM-Calculadora-DiegoPatzan)

---

Desarrollado por Diego Patzán.

