# Ping Pilot

**Ping Pilot** is a full-stack event monitoring SaaS platform that keeps you informed in real time. Get instant notifications for critical events, enabling you to stay updated and take action—whether at home, work, or on the go.

## Features

- **Real-Time Notifications**: Receive alerts the moment events occur.
- **Multi-Platform Support**: Notifications delivered to web, mobile, and social media platforms.
- **Customizable Alerts**: Tailor notifications to fit your needs.
- **Analytics Dashboard**: Gain insights from event data in one place.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Shadcn
- **Backend**: Node.js, Hono Js
- **Database**: Neon / PostgreSQL

## Get Started

To get started with Ping Pilot, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vishnu-mouli-102408/ping-pilot.git
   cd ping-pilot
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

   Create a new PostgreSQL database and update the connection settings in the `.env` file.

4. **Run database migrations:**

   ```bash
   npm run migrate
   ```

5. **Start the development server:**

   ```bash
   npm start
   ```

6. **Open your browser:**

   Navigate to `http://localhost:3000` to see the application in action.
