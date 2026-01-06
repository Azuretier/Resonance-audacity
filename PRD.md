# Planning Guide

An interactive, gamified ruleset learning application for the Azure Community Discord server that teaches community rules through engaging quiz-based challenges and progress tracking with a clean, modern interface.

**Experience Qualities**:
1. **Clean & Professional** - Modern, polished design that feels trustworthy and easy to navigate
2. **Educational & Engaging** - Learning rules should feel rewarding and clear, not overwhelming or boring
3. **Gamified & Progressive** - Users earn points and unlock sections as they master each rule, creating motivation to complete

**Complexity Level**: Light Application (multiple features with basic state) - This is a learning app with quizzes, progress tracking, and smooth animations that enhance the learning experience.

## Essential Features
For each core feature:
- Functionality (what it does)
- Purpose (why it matters)
- Trigger (how it starts)
- Progression (terse UX flow from start to finish - separate using `→`)
- Success criteria (how we'll validate it works)

### Interactive Rule Learning
- **Functionality**: Present complex multi-rule scenarios where users must identify which rules apply
- **Purpose**: Motivate users to complete all rules and provide clear sense of progress
- **Trigger**: User clicks on Learn tab or opens the app
- **Progression**: Display rule title and icon → Show detailed explanation → Present 2-3 real scenarios → User clicks "Got It!" → Move to next rule
- **Success criteria**: Users can read and mark rules as complete

### Mastery Progress Tracker
- **Functionality**: Track user progress through all rules with visual indicators
- **Purpose**: Provide clear sense of achievement and motivation
- **Trigger**: Automatically updated as user completes lessons and quizzes
- **Progression**: Display rule checklist → Show status indicators → Calculate overall progress → Display total points
- **Success criteria**: Progress persists between sessions and updates in real-time

### Quick Reference Guide
- **Functionality**: Provide easy lookup for users who have completed learning
- **Purpose**: Quick refresh on specific rules without full lesson
- **Trigger**: User clicks Reference tab
- **Progression**: Display all rules in condensed format → User searches or scrolls → Click to expand details
- **Success criteria**: Fast search and easy navigation to any rule

## Edge Case Handling
- **Quiz Failed Multiple Times**: Offer "Study Mode" with detailed explanations before retry
- **AI Assistant Unavailable**: Show offline message but keep core learning features functional
- **Perfect Score**: Celebrate with special animation and confetti
- **Skip Attempt**: Prevent skipping to later rules without completing earlier ones (progressive unlock)

## Design Direction

A clean, modern interface with thoughtful use of subtle gradients, generous whitespace, and refined typography. The design emphasizes clarity and professionalism while maintaining visual interest through careful use of color and smooth animations.

## Color Selection

A sophisticated color palette centered around a refined purple-blue primary with professional supporting colors.

- **Primary Color**: Deep Purple-Blue (oklch(0.45 0.15 265)) - Professional, trustworthy brand color
- **Secondary Colors**: Subtle Gray (oklch(0.95 0.01 240)) - Clean, unobtrusive backgrounds
- **Accent Color**: Soft Purple (oklch(0.92 0.015 265)) - Gentle highlights and hover states
- **Success**: Balanced Green (oklch(0.60 0.15 145)) - Achievement and positive feedback
- **Warning**: Warm Amber (oklch(0.70 0.15 65)) - Caution without alarm
- **Background**: Off-white with subtle cool tint (oklch(0.98 0.005 240))

**Foreground/Background Pairings**:
- Primary on White (oklch(0.45 0.15 265) / oklch(1 0 0)): White text (oklch(0.99 0 0)) - Ratio 9.2:1 ✓
- Success on White (oklch(0.60 0.15 145) / oklch(1 0 0)): White text (oklch(0.99 0 0)) - Ratio 5.8:1 ✓
- Text on Background (oklch(0.13 0.01 240) / oklch(0.98 0.005 240)): Black text - Ratio 14.5:1 ✓

## Font Selection

Modern, professional typography emphasizing clarity and readability.

- **Primary Font**: Space Grotesk - Clean, contemporary sans-serif with excellent screen readability
- **Accent Font**: JetBrains Mono - For numeric data, scores, and technical elements

**Typographic Hierarchy**:
- H1 (App Title): Space Grotesk Bold/48px/tight tracking with subtle gradient
- H2 (Section Titles): Space Grotesk Bold/32px
- H3 (Rule Names): Space Grotesk Semibold/24px
- Body (Rule Text): Space Grotesk Regular/16px/1.6 line height
- Stats/Scores: JetBrains Mono Bold/40px/tabular numerals

## Animations

Animations should feel smooth, purposeful, and professional - enhancing usability without calling attention to themselves.

Key animation moments:
- Subtle fade-in-up on page elements (500ms ease-out)
- Smooth tab transitions with slide animations (300ms)
- Progress bar fills with easing (300ms cubic-bezier)
- Card hover states with gentle scale (200ms)
- Badge appearances with spring physics
- Confetti on perfect scores (celebratory moment)
- Collapsible sections expand/collapse smoothly (200ms)
- Button states transition seamlessly (150ms)

## Component Selection

**Components**:
- **Card** - Clean borders, subtle shadows, optional backdrop blur for layering
- **Button** - Clear hierarchy with primary, secondary, and ghost variants
- **Badge** - Minimal design with semantic color coding
- **Progress** - Smooth bars with rounded ends
- **Tabs** - Underlined active state with smooth transitions
- **Input** - Clean borders with focus ring
- **Collapsible** - Smooth expand/collapse for reference guide

**Customizations**:
- Generous border radius (0.75rem) for friendly, modern feel
- Subtle borders (1px) with semi-transparent colors
- Soft shadows for depth without harshness
- Backdrop blur on cards for sophisticated layering
- Gradient backgrounds using radial patterns for subtle depth
- Smooth transitions on all interactive elements

**States**:
- Buttons: Default (solid), Hover (subtle shadow), Active (scale 0.98), Disabled (opacity 0.5)
- Cards: Subtle border with shadow, hover slightly lifts with increased shadow
- Icons: Duotone weight for visual interest without heaviness

**Icon Selection**:
- ShieldCheck (phosphor) - Rules and completion
- Trophy (phosphor) - Mastery and achievements  
- Books (phosphor) - Learning section
- Play (phosphor) - Quiz section
- Star (phosphor) - Points and ratings
- Lock (phosphor) - Locked content

**Spacing**:
- Consistent 8px grid system
- Generous padding (24px) on cards
- Clear visual grouping with gap utilities
- Ample whitespace for breathing room

**Mobile**:
- Stack elements vertically below 768px
- Maintain comfortable touch targets (44px minimum)
- Responsive typography scaling
- Collapsible navigation if needed
- Generous padding maintained on mobile
