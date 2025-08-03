# Tanish - Personal Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Firebase authentication with NeonDB database integration.

## Features

- 🔐 **Firebase Authentication** - Secure login with email/password and Google OAuth
- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- ⚡ **Fast Performance** - Powered by Vite for lightning-fast development
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎯 **Interactive Elements** - Particle backgrounds, animations, and command palette
- 🚀 **Portfolio Sections** - Projects, experience, skills, and contact information
- 💾 **Database Integration** - Contact form submissions stored in NeonDB with Prisma ORM

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Authentication**: Firebase Auth
- **Database**: NeonDB (PostgreSQL)
- **ORM**: Prisma
- **Backend**: Express.js
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Animations**: CSS animations and Intersection Observer

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account (for authentication)
- Gmail account (for email notifications)

### Quick Setup

1. **Clone and setup**
   ```bash
   git clone <YOUR_REPO_URL>
   cd cosmic-forge-tanish
   node setup-dev.js
   ```

2. **Configure environment variables**
   - Edit the `.env` file created by the setup script
   - Add your Firebase configuration
   - Add your Gmail app password for email notifications

3. **Start development**
   ```bash
   npm run dev:full
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Manual Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password and Google)
   - Create a `.env` file with your Firebase config:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
   ```

3. **Set up Email (Optional)**
   - Enable 2FA on your Gmail account
   - Generate an App Password
   - Add to `.env`:
   ```env
   EMAIL_PASS=your-gmail-app-password
   ```

4. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

5. **Start development**
   ```bash
   npm run dev:full
   ```

## Available Scripts

- `npm run dev` - Start Vite development server only
- `npm run server` - Start Express server only
- `npm run dev:full` - Start both servers concurrently
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Database Schema

The contact form submissions are stored in the `ContactMessage` table with the following structure:

```sql
model ContactMessage {
  id         Int      @id @default(autoincrement())
  name       String
  email      String
  topic      String
  message    String
  createdAt  DateTime @default(now())
}
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts (Auth)
├── hooks/          # Custom React hooks
├── lib/           # Utilities and configurations
├── pages/         # Page components
└── assets/        # Static assets
prisma/
├── schema.prisma  # Database schema
└── migrations/    # Database migrations
server.js          # Express server
```

## Deployment

### Quick Start
1. **Set up environment variables** (see `.env.example`)
2. **Deploy to Vercel**: `vercel --prod`
3. **Configure environment variables** in Vercel dashboard
4. **Test all functionality**

### Deployment Options

#### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel --prod
```

#### Option 2: Railway
- Connect GitHub repository
- Add environment variables
- Automatic deployment

#### Option 3: Render
- Connect GitHub repository
- Configure build settings
- Add environment variables

### Environment Variables Required
- `DATABASE_URL` - NeonDB connection string
- `EMAIL_PASS` - Gmail app password
- `VITE_FIREBASE_*` - Firebase configuration
- `FRONTEND_URL` - Your domain for CORS

### Post-Deployment Checklist
- [ ] Test authentication
- [ ] Verify contact form
- [ ] Check email notifications
- [ ] Test responsive design
- [ ] Monitor performance

For detailed deployment instructions, see `DEPLOYMENT_GUIDE.md` and `DEPLOYMENT_CHECKLIST.md`.

## License

This project is private and proprietary.

---

Built with ❤️ by Tanish
