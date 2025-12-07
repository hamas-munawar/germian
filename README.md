# Germian - Next.js & GSAP Landing Page

This project is a modern landing page built with Next.js, Tailwind CSS, and GSAP. It's inspired by the `permianworld.com` landing experience, focusing on a sophisticated preloader animation and a clean, component-based architecture.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) (with [`@gsap/react`](https://gsap.com/docs/v3/React/))
- **UI**: [React](https://react.dev/)
- **Fonts**: Local fonts managed by `next/font`

## Project Structure

The codebase is organized within the [`src`](src) directory, following modern Next.js app router conventions.

- [`src/app/layout.js`](src/app/layout.js): The root layout, which sets up global styles and fonts.
- [`src/app/page.js`](src/app/page.js): The main entry point for the home page.
- [`src/components/`](src/components): Contains all reusable React components.
  - [`Preloader.jsx`](src/components/Preloader.jsx): A complex component that orchestrates the entire entry animation sequence using a GSAP timeline.
  - [`Navbar.jsx`](src/components/Navbar.jsx): The site's header navigation.
  - [`Footer.jsx`](src/components/Footer.jsx): The site's footer.
  - [`Button.jsx`](src/components/Button.jsx): A reusable button with a hover animation.
- [`src/app/HeroSection.jsx`](src/app/HeroSection.jsx): The main content section displayed after the preloader.
- [`src/font.js`](src/font.js): Defines and loads local fonts for the project.
- [`src/app/globals.css`](src/app/globals.css): Global stylesheets and Tailwind CSS configuration.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository**

2.  **Install dependencies**
    This will install Next.js, React, GSAP, and other necessary packages listed in [`package.json`](package.json).

    ```sh
    bun install
    ```

3.  **Run the development server**
    This command starts the Next.js development server, typically on `http://localhost:3000`.
    ```sh
    bun run dev
    ```

## Available Scripts

The following scripts are available in [`package.json`](package.json):

- `bun run dev`: Starts the development server.
- `bun run build`: Creates a production-ready build of the application.
- `bun start`: Starts the production server (requires a build to be run first).

## Key Features

### Preloader Animation

The core animation is handled by the [`Preloader`](src/components/Preloader.jsx) component. It uses the `useGSAP` hook to create a multi-stage timeline that:

1.  Reveals text lines with a stagger effect.
2.  Scales a background box to fill the screen while updating a percentage counter.
3.  Fades out the text and transitions the preloader off-screen to reveal the main content.

### Local Fonts

The project uses `next/font` for optimized local font loading. The font files are located in `src/fonts/` and configured in [`src/font.js`](src/font.js). They are applied globally in the root [`layout.js`](src/app/layout.js) file.

### Component-Based Architecture

The UI is broken down into reusable components like [`Button`](src/components/Button.jsx), [`Navbar`](src/components/Navbar.jsx), and [`Footer`](src/components/Footer.jsx), promoting a clean and maintainable codebase.

## Deployment

The application can be deployed to any hosting provider that supports Next.js, such as Vercel, Netlify, or AWS Amplify.

To deploy, run the build command and deploy the generated `.next` directory.

```sh
bun run build
```

## Credits and Disclaimer

- This project is an educational animation clone inspired by `permianworld.com`.
- This project is not affiliated with or endorsed by the original owners.

## License

This codebase is available under the MIT license.
