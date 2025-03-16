


  Deployment link: https://launchify-six.vercel.app/



![Tech Stack](https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6)
![Tech Stack](https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000)
![Tech Stack](https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4)
![Tech Stack](https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=F03E2F)

## Overview

Launchify is a modern web application, Next-Gen Startup App built with **Next.js 15**, where entrepreneurs can submit their startup ideas for virtual pitch competitions, explore ideas submitted by others, and gain visibility through a minimalistic and user-friendly design. The platform provides a seamless user experience and encourages engagement with dynamic content.

## Tech Stack

- **React 19**
- **Next.js 15**
- **Sanity** (Content Management)
- **TailwindCSS** (UI Styling)
- **ShadCN** (UI Components)
- **TypeScript** (Type Safety)

## Features

- **Live Content API**: Dynamically displays the latest startup ideas on the homepage using Sanity's Content API.
- **GitHub Authentication**: Seamlessly allows users to sign in using their GitHub credentials.
- **Pitch Submission**: Entrepreneurs can submit their startup ideas, including a title, description, category, and multimedia content (images or videos).
- **View Pitches**: Users can browse submitted startup ideas with filtering options by category.
- **Pitch Details Page**: Each pitch has its own dedicated page, showcasing its description and multimedia content.
- **Profile Page**: Users can view and manage the list of pitches they've submitted.
- **Editor Picks**: Administrators can highlight top startup ideas, showcased under the "Editor Picks" section, managed through Sanity Studio.
- **Views Counter**: Tracks the number of views for each pitch, providing insight into its popularity.
- **Search Functionality**: An efficient search feature to find and view pitches based on keywords.
- **Minimalistic Design**: The platform offers a fresh, clean, and simple user interface with essential pages to ensure a pleasant experience and modern aesthetic.

## Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```
  <p class="text-lg text-gray-700 mb-4">
    Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the <a href="https://www.sanity.io/" class="text-blue-600">Sanity website</a>.
  </p>

  **Running the Project**

```bash
npm run dev
```

  <p class="text-lg text-gray-700">Open <a href="http://localhost:3000" class="text-blue-600">http://localhost:3000</a> in your browser to view the project.</p>


