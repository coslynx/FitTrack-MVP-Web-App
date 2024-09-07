<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
FitTrack-MVP-Web-App
</h1>
<h4 align="center">A web-based fitness tracker to help users achieve their goals.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="Framework used for the application">
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend technologies used">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend technology used">
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="Large language models used">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/FitTrack-MVP-Web-App?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/FitTrack-MVP-Web-App?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/FitTrack-MVP-Web-App?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
The repository contains a Minimum Viable Product (MVP) called "FitTrack-MVP-Web-App" that provides a user-friendly platform for fitness tracking, goal setting, and progress visualization. It combines the power of React, Next.js, and a robust backend built with Node.js, leveraging custom Large Language Models (LLMs) like Gemini and OpenAI for enhanced user experience and functionality. 

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a modular architectural pattern with separate directories for different functionalities, ensuring easier maintenance and scalability.             |
| 📄 | **Documentation**  | The repository includes a README file that provides a detailed overview of the MVP, its dependencies, and usage instructions.|
| 🔗 | **Dependencies**   | The codebase relies on various external libraries and packages such as React, Next.js, Zustand, Prisma, and Tailwind CSS, which are essential for building and styling the UI components, and handling external services.|
| 🧩 | **Modularity**     | The modular structure allows for easier maintenance and reusability of the code, with separate directories and files for different functionalities such as components, pages, styles, and utilities.|
| 🧪 | **Testing**        | Implement unit tests using frameworks like Jest or React Testing Library to ensure the reliability and robustness of the codebase.       |
| ⚡️  | **Performance**    | The performance of the system can be optimized based on factors such as the browser and hardware being used. Consider implementing performance optimizations for better efficiency.|
| 🔐 | **Security**       | Enhance security by implementing measures such as input validation, data encryption, and secure communication protocols.|
| 🔀 | **Version Control**| Utilizes Git for version control with GitHub Actions workflow files for automated build and release processes.|
| 🔌 | **Integrations**   | Interacts with browser APIs, external services through HTTP requests, and includes integrations with popular fitness trackers like Fitbit, Garmin, and Apple Health.|
| 📶 | **Scalability**    | Design the system to handle increased user load and data volume, utilizing caching strategies and cloud-based solutions for better scalability.           |

## 📂 Structure
```text
├── components
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── GoalInput.tsx
│   ├── ProgressChart.tsx
│   └── SocialShareButton.tsx
├── pages
│   ├── api
│   │   ├── auth.ts
│   │   ├── goals.ts
│   │   └── progress.ts
│   ├── _app.tsx
│   ├── index.tsx
│   ├── dashboard.tsx
│   └── login.tsx
├── styles
│   └── global.css
├── utils
│   ├── helpers.ts
│   ├── api.ts
│   ├── auth.ts
│   └── validation.ts
├── config
│   └── next-auth.config.ts
├── middleware
│   └── authentication.ts
├── .env
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- Docker

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/coslynx/FitTrack-MVP-Web-App.git`
2. Navigate to the MVP directory:
   - `cd FitTrack-MVP-Web-App`
3. Install dependencies:
   - `npm install`

## 🏗️ Usage
### 🏃‍♂️ Running the MVP
1. Start the development server:
   - `npm start`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
Adjust configuration settings in `config.js` or `.env`.

### 📚 Examples
- 📝 **Example 1**: Setting up a new fitness goal:  
    - Navigate to the 'Goals' section.
    - Click on the 'Add Goal' button.
    - Fill in the goal details (type, target, timeframe).
    - Submit the goal.
- 📝 **Example 2**: Tracking workout progress: 
    - Log in to your account.
    - Navigate to the 'Progress' section.
    - Click on 'Log Workout' to record workout details (date, type, duration, metrics).
    - View your progress visualized on the 'Progress Chart'.
- 📝 **Example 3**: Integrating with fitness trackers:
    - Log in to your account.
    - Navigate to 'Settings' and connect your fitness tracker (Fitbit, Garmin, Apple Health).
    - Automatically sync your workout data from your tracker to FitTrack for a seamless experience.

## 🌐 Hosting
### 🚀 Deployment Instructions
If applicable, provide details on how to host the MVP using various services, such as:

Vercel
Netlify
GitHub Pages
AWS
Google Cloud

#### Heroku
1. Install the Heroku CLI:
   - `npm install -g heroku`
2. Login to Heroku:
   - `heroku login`
3. Create a new Heroku app:
   - `heroku create`
4. Deploy the code:
   - `git push heroku main`

### 🔑 Environment Variables
- `DATABASE_URL`: PostgreSQL database connection URL.
- `NEXTAUTH_SECRET`: A secret used for signing tokens.

## 📜 API Documentation
### 🔍 Endpoints
- **GET /api/auth/[...nextauth].js**: Handles authentication requests (sign in, sign up, password reset).
- **GET /api/goals**: Retrieves a list of goals for the current user.
- **POST /api/goals**: Creates a new goal for the current user.
- **GET /api/progress**: Retrieves workout data and progress for the current user.
- **POST /api/progress**: Logs a new workout for the current user.

### 🔒 Authentication
Authentication is handled by NextAuth.js, which provides secure JWT token-based authentication.

### 📝 Examples
```bash
# Get goals
curl -X GET http://localhost:3000/api/goals -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Create a new goal
curl -X POST http://localhost:3000/api/goals -H "Authorization: Bearer YOUR_JWT_TOKEN" -H "Content-Type: application/json" -d '{"type": "weight loss", "target": 10, "timeframe": 30}'

# Get progress data
curl -X GET http://localhost:3000/api/progress -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Log a new workout
curl -X POST http://localhost:3000/api/progress -H "Authorization: Bearer YOUR_JWT_TOKEN" -H "Content-Type: application/json" -d '{"date": "2024-03-10", "type": "running", "duration": 30, "distance": 5, "calories": 300}'
```

## 📜 License
This MVP is licensed under the [MIT](https://choosealicense.com/licenses/mit/).

## 👥 Authors
- **CosLynxAI** - [CosLynx.com](https://coslynx.com)
- **Drix10** - [GitHub](https://github.com/coslynx)
- **Kais Radwan** - [GitHub](https://github.com/KaisRadwan)


<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
  <img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
</div>