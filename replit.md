# Overview

This is a company website project for ㈜스페이스서정 (Space Seo Jung Co., Ltd.), a landscaping and garden construction company based in South Korea. The project is built as a single-page application (SPA) showcasing the company's services, projects, CEO information, and contact details. The website is designed to be a direct translation of a company brochure into a web format, maintaining exact content fidelity while providing an engaging user experience with scroll-based animations and responsive design.

The application presents six main sections: CEO introduction, major projects portfolio, company introduction, detailed construction processes, construction categories, and contact information. It emphasizes the company's philosophy of creating "slow spaces" that provide respite from busy modern life.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application is built as a React TypeScript SPA using Vite as the build tool. The frontend follows a component-based architecture with clear separation of concerns:

- **Component Structure**: Components are organized into `common` (Header, Footer), `sections` (main page sections), and `ui` (reusable UI components)
- **Styling Strategy**: Pure CSS approach with all styles contained in dedicated CSS files under the `styles` directory, avoiding inline styles in components
- **Design System**: Uses CSS custom properties for design tokens including colors, typography, spacing, and shadows
- **Animation System**: Custom scroll-based animation system using Intersection Observer API for progressive content revelation
- **Responsive Design**: Mobile-first approach with responsive grid layouts and flexible typography

## State Management
The application uses minimal state management:
- **Local Component State**: React useState hooks for component-specific state like scroll position and animation visibility
- **Custom Hooks**: useScrollAnimation hook for managing intersection observer logic and animation states
- **No Global State**: Static content application doesn't require complex state management solutions

## Styling Architecture
- **CSS Organization**: Modular CSS with separate files for tokens, base styles, animations, and component-specific styles
- **Design Token System**: Centralized color palette, typography scale, spacing system, and component variants
- **Animation Framework**: Custom CSS animations with JavaScript triggers for scroll-based interactions
- **Theme Approach**: Light theme only with consistent color scheme based on nature-inspired palette

## Development Tools
- **Build System**: Vite for fast development and optimized production builds
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Code Quality**: ESLint and component testing setup using data-testid attributes
- **Asset Management**: Static images served from CDN sources (Unsplash, Pixabay)

# External Dependencies

## Frontend Framework and Tools
- **React 18**: Core frontend framework with modern hooks and concurrent features
- **TypeScript**: Static type checking and enhanced developer experience
- **Vite**: Fast build tool with hot module replacement and optimized bundling
- **@vitejs/plugin-react**: Vite plugin for React support with fast refresh

## UI Component Libraries
- **Radix UI**: Comprehensive unstyled component library for accessibility-compliant primitives including dialogs, dropdowns, navigation, form controls, and layout components
- **Lucide React**: Modern icon library with consistent design and tree-shaking support
- **class-variance-authority**: Utility for creating component variants with conditional class names
- **clsx**: Lightweight utility for conditional CSS class names
- **tailwind-merge**: Utility for merging Tailwind CSS classes intelligently

## Styling and Design
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **PostCSS**: CSS post-processor with autoprefixer for browser compatibility
- **CSS Custom Properties**: Native CSS variables for design token system

## Data and State Management
- **@tanstack/react-query**: Server state management with caching, background updates, and request deduplication
- **React Hook Form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Form validation resolvers for various validation libraries
- **Zod**: TypeScript-first schema validation library

## Backend Infrastructure (Prepared but Unused)
- **Express.js**: Node.js web framework for potential API endpoints
- **Drizzle ORM**: TypeScript ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **Drizzle Kit**: Database migration and introspection tools

## Additional Utilities
- **date-fns**: Modern date utility library for date manipulation
- **embla-carousel-react**: Carousel component for potential image galleries
- **cmdk**: Command palette component for search functionality
- **nanoid**: URL-safe unique ID generator

The application is currently structured as a static website but includes the infrastructure for potential backend integration with user authentication, content management, and dynamic data if needed in the future.