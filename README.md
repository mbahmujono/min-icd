# Medical Summary to ICD Code Generator

Minimalistic Medical Summary to ICD Code Finder using GEMINI AI - Structured Response

## Built on cutting-edge technologies:

- Nuxt 3 for powerful, streamlined development.
- Nuxt UI v3 for customizable and sleek UI components.
- Pinia for state management simplicity.
- Tailwind CSS v4 for responsive and modern design.
- Fully compatible with the Nuxt v4 folder structure, this template ensures you're ready for the future of web development.
- v4.20 BoilerPlate for Nuxt Starter
- Gemini AI SDK
- tRPC for typesafe API response

## Features

- Nuxt 3
- Pinia for state management
- Tailwind CSS for styling
- Dark mode support
- Primary color switcher
- SEO meta tags
- Responsive design
- Based on v4.20 Minimalistic Boilerplate for Nuxt App

## Project Setup

### Prerequisites

- Node.js (>= 18.x)
- bun, npm or yarn
- Gemini AI API key

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/mbahmujono/min-icd.git
    cd min-icd
    ```

2. Install dependencies:

    ```sh
    bun install
    # or
    npm install
    # or
    yarn install
    ```

### Development

Start the development server:

```sh
bun run dev
# or
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Gemini AI API Key

please change the `.env.example` file with your GEMINI API Key, after add the API change it to `.env`

### Build

To build the project for production:

```sh
bun run build
# or
npm run build
# or
yarn build
```

### Deployment

After building the project, you can deploy the `dist` directory to your preferred hosting service.

## Project Structure

- `nuxt.config.ts`: Nuxt configuration file.
- `app/`: Contains the main application files.
  - `components/`: Vue components.
  - `layouts/`: Layout components.
  - `pages/`: Page components.
  - `stores/`: Pinia stores.
  - `assets/css/`: CSS files.
  - `lib/services/`: Nuxt service with Gemini SDK calling function.
  - `plugins/`: tRPC client.
- `public/`: Static assets.
- `server/`: tRPC routes and API setting.

## Usage

### State Management

This project uses Pinia for state management. Example store:

```typescript
export const useIndexStore = defineStore('useIndexStore', {
    state: () => ({
        name: ''
    }),
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useIndexStore, import.meta.hot))
}
```

### Components

- `AppLogo`: Displays the application logo.
- `AppSwitchMode`: Toggles between dark and light mode.
- `AppSwitchPrimaryColor`: Switches the primary color theme.

### Pages

- `index.vue`: The main landing page.
- `about.vue`: The about page and AI response.

### Layouts

- `default.vue`: The default layout for the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.

## Hire Me

Contact me at: diazadipradana@mail.ugm.ac.id for medical app AI project
