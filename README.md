# Authy

A Next.js authentication demo application using NextAuth.js v5, showcasing protected routes and authentication flows.

This project is part of [The Modern Full Stack Next.js Course](https://nextjscourse.dev/) 🚀.

## Features

- 🔐 Authentication with NextAuth.js v5
- 🛡️ Protected Dashboard Routes
- 🎨 Styled with Tailwind CSS
- 📱 Responsive Design
- 🎯 Custom Components using shadcn/ui
- 🔍 Authentication Status Indicator
- 📊 Debug Panel for Auth State

## Getting Started

1. Clone the repository

```
git clone git@github.com:kulkarniankita/authy-system.git
```

2. Install dependencies:

```
npm install
```

3. Start the Development Server

```
npm run dev
```

## Generating the Auth Secret

In order to generate the auth secret, the best way to do this is by running the following command:

`npx auth secret`

This will generate the secret and store it in .env.local file
