# Geoffrey Otieno's Portfolio

A clean, modern, and professional portfolio website for Geoffrey Nehemiah Otieno, a Software Engineer and Web Developer.

## Features

- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Dark/Light Theme Toggle:** Easily switch between light and dark modes.
- **Animated Hero Section:** Typing effect for job title.
- **Projects Showcase:** Filterable project gallery with live and GitHub links.
- **Skills Section:** Visual display of technical skills with icons.
- **About Section:** Personal introduction and downloadable resume.
- **Contact Form:** Send messages directly from the site.
- **Social Links:** Quick access to GitHub, LinkedIn, Facebook, and Twitter.
- **Smooth Scrolling Navigation:** Easy navigation between sections.

## Tech Stack

- **Frontend:** [React](https://react.dev/) (TypeScript)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** SVGs and custom components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Otigef/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
.
├── App.tsx
├── constants.tsx
├── index.html
├── index.tsx
├── metadata.json
├── package.json
├── tsconfig.json
├── types.ts
├── vite.config.ts
├── components/
│   ├── About.tsx
│   ├── AIAssistant.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── ThemeToggle.tsx
│   └── useInView.ts
└── contexts/
    └── ThemeContext.tsx
```

## Customization

- **Personal Info:** Edit [`PERSONAL_INFO`](constants.tsx) in [constants.tsx](constants.tsx).
- **Projects:** Add or modify projects in [`PROJECTS`](constants.tsx).
- **Skills:** Update the [`SKILLS`](constants.tsx) array for your tech stack.
- **Resume:** Replace `/Geoffrey_Otieno_Resume.pdf` with your own PDF.

## License

This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio.

---

Made with ❤️ by Geoffrey Nehemiah Otieno.
