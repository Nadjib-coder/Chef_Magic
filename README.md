# Recipe Web App

A web application showcasing a recipe interface, initially powered by a Hugging Face AI model to generate recipes dynamically. Due to certain limitations, the app has been updated to work with a mock API for demonstration purposes, highlighting the frontend development skills involved.

## Features

- User-friendly interface to browse and search for recipes.
- Dynamic fetching of recipe data using a mock API.
- Future-ready architecture to integrate backend and AI-powered functionality.

## Why the Change?

The app was initially designed to leverage a Hugging Face AI model for recipe generation. However, two main challenges led to the shift:

1. **Private Key Management**: The AI model requires a private key, which necessitates a backend for secure storage.
2. **Cost and Access**: The AI model is paid and has a limited free usage quota, making it impractical for hosting the app in its original form.

To address these issues, I commented out the original AI integration code for a future update when a backend is added, and transitioned to using a mock API.

## Showcase Purpose

This app demonstrates my **frontend development skills** and serves as a foundation for future enhancements with AI and backend integration.

## Deployment

The app is hosted on Netlify for easy access. You can view it here:

[Recipe Web App Live Demo](#)

> Note: Replace the `#` above with the actual Netlify link after deploying.

## Future Plans

- Implement a secure backend for private key management.
- Re-enable the AI-powered recipe generation feature.
- Explore additional features like user authentication and recipe saving.

## Getting Started

### Prerequisites

- Node.js installed on your system.
- Basic understanding of frontend development.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipe-web-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipe-web-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Deployment on Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Drag and drop the `build` folder into the Netlify deployment area.
3. Copy the generated link and replace it in the README under "Deployment."

## Feedback

I am open to feedback and suggestions for improvement. Feel free to contact me via [LinkedIn](https://www.linkedin.com/in/nadjibmouhoun) or raise an issue in the repository.

---

Thank you for checking out the Recipe Web App.
