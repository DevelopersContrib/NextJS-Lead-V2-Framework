# NextJS Lead V2 Framework - Project Index

## Project Overview

A Next.js-based framework for creating lead generation and community websites with dynamic domain-based content, built for the CONTRIB ecosystem.

## Technology Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: JavaScript/JSX with TypeScript support
- **Node.js**: Version 20.19.4 (LTS)
- **Package Manager**: npm 10.8.2
- **Styling**: Tailwind CSS (with custom prefix `tw-`) + Bootstrap 5.3.3
- **State Management**: Zustand 5.0.3
- **UI Libraries**: Framer Motion, React Icons, Lucide React
- **HTTP Client**: Axios
- **Build Tools**: PostCSS, Autoprefixer
- **Deployment**: Vercel-ready

## Node.js Configuration

- **Required Version**: Node.js 20.x (LTS)
- **Version Manager**: nvm (Node Version Manager)
- **Project Configuration**: `.nvmrc` file specifies Node.js 20
- **Helper Script**: `use-node20.sh` for easy Node.js 20 switching

## Project Structure

### Root Configuration

- `next.config.js` - Next.js configuration with image domains and environment variables
- `tailwind.config.js` - Tailwind CSS configuration with custom prefix and content paths
- `package.json` - Dependencies and scripts with Node.js 20 engine requirement
- `middleware.ts` - Request middleware for www redirects
- `.nvmrc` - Node.js version specification (20)
- `use-node20.sh` - Helper script to switch to Node.js 20

### App Directory (App Router)

st
app/
├── layout.js          # Root layout with metadata generation
├── page.js            # Homepage with dynamic content
├── globals.css        # Global styles
├── about/             # About page
├── apps/              # Applications page
├── blog/              # Blog functionality
├── contact/           # Contact page
├── cookie/            # Cookie policy
├── developer/         # Developer resources
├── invest/            # Investment page
├── partner/           # Partnership page
├── privacy/           # Privacy policy
├── referral/          # Referral system
├── robots.txt/        # SEO robots configuration
├── sitemap.xml/       # SEO sitemap
├── staffing/          # Staffing page
└── terms/             # Terms of service

```

### API Routes

```

app/api/
├── domain/            # Domain-related API endpoints
├── fetcher/           # Data fetching endpoints
├── lead/              # Lead management endpoints
└── rss-proxy/         # RSS feed proxy endpoints

```

### Core Components

```

components/
├── Container.jsx              # Main content container
├── FeaturedDomain.jsx         # Featured domain showcase
├── Footer.jsx                 # Site footer
├── Form.jsx                   # Contact forms
├── HeaderNav.jsx              # Navigation header
├── HeaderWidget.jsx           # Header analytics widget
├── LatestCTA.jsx              # Call-to-action buttons
├── Logo.jsx                   # Dynamic logo component
├── RelatedDomains.jsx         # Related domains display
├── UserWidget.jsx             # User statistics widget
├── TokenSalePopup.jsx         # Token sale popup
├── changing-background.jsx    # Dynamic background effects
├── ErrorBlock.jsx             # Error handling component
├── LoadingState.jsx           # Loading indicators
├── ScriptLoader.jsx           # Script loading utility
├── Thanku.jsx                 # Thank you page component
└── notification/
    └── Notification.jsx       # Notification system

```

### Modules

```

modules/
└── blog/
    ├── BlogList.jsx           # Blog listing component
    └── slug.jsx               # Individual blog post component

```

### Library & Utilities

```

lib/
├── data.jsx                   # Core data fetching functions
├── formatTimeAgo.js           # Time formatting utilities
├── getEnvVar.js               # Environment variable helpers
├── randomAvatar.js            # Avatar generation
├── models/
│   └── routes.js              # Route definitions
├── hooks/
│   ├── fetchRss.js            # RSS feed fetching
│   ├── getBlogPost.js         # Blog post retrieval
│   ├── useBlogFetcher.js      # Blog data fetching hook
│   └── useFetcher.js          # General data fetching hook
└── store/
    └── useBlogStore.js        # Blog state management (Zustand)

```

## Key Features

### 1. Dynamic Domain-Based Content

- Automatically detects domain and fetches relevant content
- Dynamic metadata generation (title, description, keywords)
- Domain-specific branding and messaging

### 2. Multi-Page Structure

- Comprehensive page coverage (about, contact, privacy, terms, etc.)
- SEO-optimized with dynamic sitemap and robots.txt
- Responsive design with Tailwind CSS

### 3. Blog System

- RSS feed integration
- Dynamic blog post rendering
- State management with Zustand

### 4. Analytics & Tracking

- Google Analytics integration
- Piwik tracking support
- AdSense integration ready

### 5. User Engagement

- Lead capture forms
- Token sale popups
- Notification system
- Social media integration

### 6. API Integration

- CONTRIB API integration for domain data
- External service integrations
- RSS proxy functionality

## Environment Variables

- `CONTRIB_API1` - Main API endpoint
- `CONTRIB_API1_TOPSITES` - Top sites API
- `CONTRIB_USERS` - User data API
- `RELATED_DOMAINS` - Related domains API
- `API_URL` - General API URL
- `API_KEY` - API authentication key

## Development Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - Code linting

## Deployment

- Optimized for Vercel deployment
- Static site generation support
- Image optimization with Next.js Image component
- SEO-friendly with dynamic metadata

## Architecture Patterns

- **App Router**: Modern Next.js 13+ routing
- **Server Components**: Server-side rendering for performance
- **Dynamic Imports**: Code splitting and lazy loading
- **API Routes**: Backend functionality within Next.js
- **Middleware**: Request processing and redirects
- **State Management**: Zustand for client-side state

## Customization Points

- Domain-specific content via API
- Dynamic branding and logos
- Configurable color schemes via Tailwind
- Modular component system
- Extensible API endpoints

## Performance Features

- Image optimization
- Code splitting
- Static generation where possible
- Caching strategies
- Responsive design

## Security Considerations

- Environment variable protection
- API key management
- CORS handling
- Input validation
- Secure redirects

This framework provides a solid foundation for creating lead generation websites with dynamic content, comprehensive SEO, and modern web development practices.
