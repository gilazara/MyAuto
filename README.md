# MyAuto Web Application

A modern automotive product catalog application built with React, TypeScript, and Vite. This application allows users to browse automotive parts and accessories with advanced filtering, categorization, and search capabilities.

## 🚀 Technologies Used

### Core Technologies

- **React 19** - A JavaScript library for building user interfaces
- **TypeScript** - Adds static typing to JavaScript for better code quality
- **Vite** - Lightning-fast build tool and development server
- **React Router DOM** - Client-side routing for single-page applications

### State Management & Data Fetching

- **TanStack Query (React Query)** - Powerful data fetching and caching library
- **Axios** - HTTP client for making API requests
- **React Hook Form** - Performant form validation and management

### Styling

- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development

### Code Quality

- **ESLint** - Linting tool for identifying and fixing code issues
- **TypeScript ESLint** - ESLint rules for TypeScript

## 📁 Project Structure

```
src/
├── features/           # Feature-based modules
│   └── Products/      # Product catalog feature
│       ├── components/    # Product-related components
│       │   ├── Filters/   # Product filtering logic
│       │   └── ProductList/  # Product display
│       ├── hooks/         # Custom React hooks
│       ├── service/       # API service functions
│       └── types/         # TypeScript type definitions
├── shared/            # Shared/reusable code
│   ├── api/          # API configuration (Axios, QueryClient)
│   ├── components/   # Reusable UI components (Button, Input, etc.)
│   └── utils/        # Helper functions
├── routes/           # Application routing configuration
└── App.tsx           # Main application component
```

## 🏗️ How the Project Works

### Architecture Overview

1. **Component-Based Architecture**: The app is built using React components organized by features
2. **Type Safety**: TypeScript ensures type safety across the entire application
3. **Data Fetching**: TanStack Query handles server state, caching, and synchronization
4. **Form Management**: React Hook Form manages form state with minimal re-renders
5. **Routing**: React Router DOM provides navigation between different views
6. **Styling**: Tailwind CSS provides utility classes for styling

### Key Features

- **Product Browsing**: Browse automotive products with detailed information
- **Advanced Filtering**: Filter products by vehicle type, manufacturer, category, and more
- **Search**: Search for specific products
- **Pagination**: Navigate through large product lists
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### Data Flow

1. User interacts with the UI (filters, search, pagination)
2. React Hook Form or state management captures user input
3. TanStack Query makes API requests through Axios
4. API responses are cached and displayed to the user
5. UI updates reactively based on the data

## 🚀 Getting Started for Beginners

### Prerequisites

Before you start, make sure you have the following installed on your computer:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- A code editor like **VS Code** - [Download here](https://code.visualstudio.com/)

### Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This command installs all the necessary packages listed in `package.json`.

### Step 2: Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

The application will start and you'll see a message like:

```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 3: Open the Application

Open your web browser and go to: `http://localhost:5173/`

You should see the application running! 🎉

### Step 4: Making Changes

- Edit any file in the `src/` folder
- Save the file
- The browser will automatically reload with your changes (Hot Module Replacement)

## 📝 Available Scripts

### `npm run dev`

Starts the development server at `http://localhost:5173/`

- Hot Module Replacement (HMR) enabled
- Fast refresh for instant updates

### `npm run build`

Creates an optimized production build

- TypeScript compilation
- Bundle optimization
- Output in `dist/` folder

### `npm run preview`

Preview the production build locally

- Run this after `npm run build`
- Serves the `dist/` folder

### `npm run lint`

Runs ESLint to check code quality

- Identifies potential issues
- Enforces code standards

## 🎓 Learning Resources

### For Beginners

- **React**: [Official React Tutorial](https://react.dev/learn)
- **TypeScript**: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- **Tailwind CSS**: [Tailwind Documentation](https://tailwindcss.com/docs)
- **Vite**: [Vite Guide](https://vitejs.dev/guide/)

### For This Project

1. **Understanding Components**: Start by exploring components in `src/shared/components/`
2. **Learning Hooks**: Check out custom hooks in `src/features/Products/hooks/`
3. **API Integration**: Look at service files in `src/features/Products/service/`
4. **Routing**: Examine `src/routes/index.tsx` for route configuration

## 🛠️ Common Tasks

### Adding a New Component

1. Create a new folder in `src/shared/components/` (e.g., `MyComponent/`)
2. Create `MyComponent.tsx` and `index.ts` files
3. Export your component from `index.ts`
4. Import and use it in other components

### Adding a New Feature

1. Create a folder in `src/features/` (e.g., `MyFeature/`)
2. Add `components/`, `hooks/`, `service/`, and `types/` folders
3. Implement your feature logic
4. Add routes in `src/routes/index.tsx` if needed

### Styling Components

Use Tailwind CSS utility classes:

```tsx
<div className="flex items-center justify-between p-4 bg-blue-500 text-white">
  <h1 className="text-2xl font-bold">Hello World</h1>
</div>
```

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port.

### Module Not Found Errors

Run `npm install` again to ensure all dependencies are installed.

### TypeScript Errors

Make sure you're using the correct types. Check `types/` folders for type definitions.

### Build Errors

Run `npm run lint` to identify and fix code issues before building.

## 📦 Project Dependencies

### Production Dependencies

- `react` & `react-dom` - UI library
- `react-router-dom` - Routing
- `@tanstack/react-query` - Data fetching
- `axios` - HTTP requests
- `react-hook-form` - Form handling

### Development Dependencies

- `vite` - Build tool
- `typescript` - Type checking
- `eslint` - Code linting
- `tailwindcss` - Styling

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test your changes locally
4. Run `npm run lint` to check code quality
5. Submit your changes for review

## 📄 License

This project is private and proprietary.

---

**Happy Coding! 🚗💨**
