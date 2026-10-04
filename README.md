# Random GIF Generator

A React + Vite app that fetches random GIFs from the Giphy API. It includes two generators:

- A random GIF panel that shows a new GIF each time you click Generate.
- A tag-based GIF panel that lets you search for GIFs by keyword, such as cats, cars, or space.

## Features

- Fetches random GIFs from Giphy
- Generates GIFs by tag/category
- Loading spinner while requests are in progress
- Clean UI built with React and Tailwind CSS
- Simple and responsive single-page layout

## Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- Giphy API

## Prerequisites

Before running the app, make sure you have:

- Node.js installed
- npm or yarn installed
- A Giphy API key

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and add your Giphy API key:

   ```env
   VITE_GIPHY_API_KEY=your_api_key_here
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal, usually:

   ```bash
   http://localhost:5173
   ```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Project Structure

```bash
src/
  components/
    Random.jsx
    Tag.jsx
    Spinner.jsx
  hooks/
    useGif.jsx
  App.jsx
  main.jsx
```

## Notes

This app depends on the Giphy API, so a valid API key is required for it to work properly. You can get one from the Giphy Developers portal.

## License

This project is for educational/demo purposes.
