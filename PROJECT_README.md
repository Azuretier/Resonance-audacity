# Azure Community - Discord Bot & Web Integration

A comprehensive Discord community management system with XP tracking, role customization, and synchronized web profiles.

## 🎯 Overview

This project consists of two synchronized components:

1. **Web Application** - React-based profile cards and role customization
2. **Discord Bot** - Node.js bot for member management, XP tracking, and commands

Both components share data through the Spark KV store for real-time synchronization.

## 🚀 Quick Start

### Web Application

The web app is already running in this Spark environment. Visit:
- `http://localhost:5173` (development)
- `azuret.me/azure-community/{userId}` (production)

### Discord Bot

See detailed setup instructions in:
- **[QUICKSTART.md](./discord-bot/QUICKSTART.md)** - Get the bot running in 5 minutes
- **[INTEGRATION.md](./discord-bot/INTEGRATION.md)** - Detailed architecture and integration guide

Quick setup:
```bash
cd discord-bot
npm install
cp .env.example .env
# Edit .env with your Discord credentials
npm run deploy-commands
npm run dev
```

## ✨ Features

### Web Application
- 📊 **Profile Cards** - Beautiful profile displays with XP, level, and rank
- 🎭 **Role Customization** - Select custom roles via intuitive interface
- 📈 **Progress Tracking** - Visual XP progress and rank advancement
- 🎨 **Modern Design** - Cyberpunk-inspired dark theme with glowing accents

### Discord Bot
- 👋 **Auto Member Management** - Pre-Member role assignment on join
- 📜 **Rules System** - Interactive rule display with agreement tracking
- ⚡ **XP & Leveling** - Message-based XP with 4-tier rank system
- 🏆 **Leaderboards** - Top members by XP
- 🎭 **Role Integration** - Syncs with web-based role selection
- 🔄 **Auto-Reconnection** - Handles disconnections gracefully

## 🎮 Discord Commands

- `/profile [@user]` - View user profile card
- `/leaderboard [limit]` - View XP leaderboard
- `/rules` - Display server rules with agreement
- `/roles` - Get link to role customization
- `/reconnect` - (Admin) Re-register interactions

## 📊 XP System

**Formula:** `level = floor(sqrt(xp / 100))`

**Rank Tiers:**
- 🥉 **Accordian** - Level 0-14
- 🥈 **Arcadia** - Level 15-29
- 🥇 **Apex** - Level 30-49
- 👑 **Legendary** - Level 50+

**XP Earning:**
- 10 XP per message
- 60-second cooldown between gains

## 🎭 Available Roles

### Special Roles
- ☆ଓ｡ Cutie ｡ଓ☆ - Romantic relationship term
- Luminelle - Lightbringer
- Archeborne - Exist

### Interest Roles
- Dreamer - Visionary
- Community Fan - Passionate supporter
- Thinker - Intelligent people
- Smart - Smart as it needs no explanation

### Contribution Roles
- Rising Star - Emerging talent
- Gifted - Naturally talented
- Artist - Expresser
- Creator - Creator
- Translator - Context harmony through languages

### Activity Roles
- Dream Maker - Community member

## 🏗️ Architecture

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│  Discord Bot    │◄───────►│  Shared KV Store │◄───────►│   Web App       │
│  (Node.js)      │         │  (Spark Runtime) │         │   (React)       │
└─────────────────┘         └──────────────────┘         └─────────────────┘
```

All user data is stored in the Spark KV store, ensuring both the bot and web app always have synchronized data.

## 📁 Project Structure

```
.
├── discord-bot/              # Discord bot repository
│   ├── src/
│   │   ├── commands/        # Slash command handlers
│   │   ├── events/          # Discord event handlers
│   │   ├── services/        # Business logic (XP, roles, KV)
│   │   ├── utils/           # Utility functions
│   │   └── index.ts         # Bot entry point
│   ├── QUICKSTART.md        # Quick setup guide
│   ├── INTEGRATION.md       # Detailed integration docs
│   └── package.json
│
├── src/                     # Web application
│   ├── components/          # React components
│   │   ├── ProfileCard.tsx
│   │   ├── RoleCustomizer.tsx
│   │   └── RulesDialog.tsx
│   ├── lib/                 # Utilities and types
│   │   ├── types.ts         # Shared type definitions
│   │   ├── api.ts           # API utilities
│   │   └── sync.ts          # Bot sync functions
│   └── App.tsx              # Main application
│
└── PRD.md                   # Product requirements document
```

## 🔧 Development

### Web App
```bash
npm install
npm run dev
```

### Discord Bot
```bash
cd discord-bot
npm install
npm run dev
```

## 🚀 Deployment

### Web App
Automatically deployed via Spark platform.

### Discord Bot

**Option 1: Docker**
```bash
cd discord-bot
docker-compose up -d
```

**Option 2: Node.js**
```bash
cd discord-bot
npm run build
npm start
```

**Option 3: Process Manager (PM2)**
```bash
cd discord-bot
npm run build
pm2 start dist/index.js --name azure-bot
```

## 🔐 Environment Variables

### Bot Requirements
```env
DISCORD_TOKEN=your_bot_token
DISCORD_CLIENT_ID=your_client_id
DISCORD_GUILD_ID=your_guild_id
WEBAPP_URL=https://azuret.me
WEBAPP_API_KEY=your_api_key
```

## 📚 Documentation

- **[PRD.md](./PRD.md)** - Product requirements and design specifications
- **[discord-bot/README.md](./discord-bot/README.md)** - Bot overview and features
- **[discord-bot/QUICKSTART.md](./discord-bot/QUICKSTART.md)** - Quick setup guide
- **[discord-bot/INTEGRATION.md](./discord-bot/INTEGRATION.md)** - Architecture and integration details

## 🐛 Troubleshooting

### Bot Issues
- Check bot token is valid
- Verify required intents are enabled
- Ensure bot has Manage Roles permission
- Use `/reconnect` to re-register commands

### Web App Issues
- Clear browser cache
- Check KV store connectivity
- Verify API endpoints are accessible

### Sync Issues
- Ensure both bot and webapp use same KV store
- Check API key authentication
- Verify network connectivity

## 🎯 Future Enhancements

- AI-powered auto-moderation
- Advanced analytics dashboard
- Custom profile card themes
- Achievement system
- Voice channel activity tracking

## 📄 License

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.
