# offnd-at/frontend-react

[![Build Status](https://img.shields.io/github/actions/workflow/status/offnd-at/frontend-react/build-and-publish.yml?branch=master)](https://github.com/offnd-at/frontend-react/actions)
[![GitHub Release](https://img.shields.io/github/v/release/offnd-at/frontend-react)](https://github.com/offnd-at/frontend-react/releases)

The modern, good-enough-performance web frontend for [offnd.at](https://offnd.at). Built with **React 19**, **TypeScript**, and **Material-UI**, this application provides a sleek and responsive interface for generating memorable, profanity-laced short URLs.

**Live Demo**

- [offnd.at](https://offnd.at)

## Technology Stack

| Category               | Technology                         |
| :--------------------- | :--------------------------------- |
| **Framework**          | React 19 (Vite)                    |
| **Language**           | TypeScript 5                       |
| **Styling**            | Material UI (MUI) 7                |
| **State Management**   | Zustand                            |
| **Data Fetching**      | TanStack Query v5 (React Query)    |
| **Routing**            | React Router 7                     |
| **Testing**            | Vitest, React Testing Library, MSW |
| **Linting/Formatting** | ESLint 9, Prettier                 |

## Key Features

- **Profanity-First Generation**: Turn boring URLs into offensive, yet memorable phrases.
- **Customization**: Choose from different languages and themes for your generated links.
- **Statistics**: Real-time tracking of link visits, including geographical data and recent traffic.
- **Responsiveness**: Optimized for everything from mobile phones to high-resolution desktops.
- **Robust Testing**: Comprehensive test suite covering hooks, stores, and components.

## Architecture & Design Patterns

The project follows modern React best practices to ensure maintainability and performance:

- **Component-Based Architecture**: Modular UI components built with MUI.
- **Custom Hooks**: Encapsulated logic for API interactions and state management.
- **Store Pattern**: Centralized, lightweight state management using Zustand.
- **Query Pattern**: Efficient server state management and caching with TanStack Query.
- **Error Boundaries**: Graceful error handling for a seamless user experience.

## Getting Started

### Prerequisites

- [Node.js 20+](https://nodejs.org/) with [npm](https://www.npmjs.com/)

### Quick Start

1. **Clone the repository**:

   ```bash
   git clone https://github.com/offnd-at/frontend-react.git
   cd frontend-react
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the backend**:
   The frontend requires a running instance of the backend. You can find more details about the backend in the [offnd-at/backend-core](https://github.com/offnd-at/backend-core/) repository.

   ```bash
   cd ..
   git clone https://github.com/offnd-at/backend-core.git
   cd backend-core/src
   docker-compose up -d
   ```

4. **Run development server**:
   ```bash
   cd ../../frontend-react
   npm run dev
   ```

### Docker Support

You can also run the application using Docker:

```bash
docker build -t offnd-frontend .
docker run -p 8080:80 offnd-frontend
```

## Testing

We use Vitest and React Testing Library for our testing suite.

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test -- --coverage

# Open Vitest UI
npm run test:ui
```

## Contributing

Contributions are welcome! Feel free to create an issue or submit a pull request. You can also reach out to the project author at [contact@offnd.at](mailto:contact@offnd.at) with any questions or suggestions.

If you'd like to help translate the short link profanity into your language, please check [offnd-at/vocabularies](https://github.com/offnd-at/vocabularies)!

---

Built with 🤬 by [ghawliczek](https://github.com/ghawliczek).
