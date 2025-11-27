# Portfolio Website

A modern, interactive portfolio website built with **Angular**, featuring 3D graphics with **Three.js** and smooth animations using **GSAP**.

## 🚀 Features

- **3D Hero Scene**: An interactive 3D wireframe Icosahedron with a floating particle system using `Three.js`.
- **Interactive Background**: A dynamic, starry background rendered via HTML5 Canvas.
- **Custom Cursor**: A smooth, lagging cursor with hover effects powered by `GSAP` and Angular Signals.
- **Modern Architecture**: Built with Angular Standalone Components and Signals for state management.
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes.

## 🛠️ Tech Stack

- **Framework**: [Angular](https://angular.io/) (v20+)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- **Styling**: SCSS (Sass)
- **State Management**: Angular Signals

## 📂 Project Structure

```
src/app/
├── components/
│   ├── hero-scene/       # Three.js 3D Icosahedron & Particles
│   ├── interactive-bg/   # Canvas-based Starry Background
│   ├── custom-cursor/    # GSAP-powered Custom Cursor
│   ├── header/           # Navigation Header
│   ├── about/            # About Section
│   ├── projects-section/ # Portfolio Projects Display
│   └── contact/          # Contact Information
├── services/
│   └── cursor.service.ts # Signal-based service for cursor hover states
└── app.*                 # Main application entry point
```

## ⚙️ Installation & Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Prerequisites
- Node.js
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd PortfolioWebsite
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 📦 Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 🧪 Running Tests

- **Unit Tests**: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- **End-to-End Tests**: Run `ng e2e` to execute the end-to-end tests.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
