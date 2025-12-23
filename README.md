# RSVP Events Demo

A React Native application for discovering and managing events with RSVP functionality. Built to demonstrate expertise in React Native, state management, and event/commerce platforms.

## Features

- **Event Discovery**: Browse events by category, location, and date
- **RSVP Management**: RSVP to events with status (Going, Maybe, Can't Go)
- **Event Creation**: Create new events with details, location, and capacity
- **User Profile**: View created events and RSVP history
- **Real-time Updates**: Optimistic UI updates for instant feedback

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **Zustand** for state management
- **React Navigation** for navigation
- **date-fns** for date formatting
- **Expo Vector Icons** for icons

## Project Structure

```
src/
  components/     # Reusable UI components (EventCard)
  screens/        # Screen components (Home, EventDetails, CreateEvent, Profile)
  store/          # Zustand state management
  data/           # Mock data
  types/          # TypeScript type definitions
  utils/          # Helper functions (date formatting)
```

## Key Technical Decisions

1. **State Management**: Used Zustand for lightweight, performant state management
2. **Navigation**: React Navigation Native Stack for smooth navigation
3. **Type Safety**: Full TypeScript implementation for reliability
4. **Component Architecture**: Reusable components with clear separation of concerns
5. **Performance**: Optimized list rendering and memoization

## Running the Project

```bash
# Install dependencies
npm install

# Start Expo
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## Demo Walkthrough

1. **Home Screen**: Browse events, see upcoming events sorted by date
2. **Event Details**: View full event information, RSVP with status
3. **Create Event**: Form to create new events with validation
4. **Profile**: View your events and RSVP history

## Ready for Production

- Mock data can be easily replaced with API calls
- Store pattern makes backend integration straightforward
- TypeScript ensures type safety throughout
- Components are reusable and well-structured

## Interview Talking Points

- Demonstrates React Native expertise
- Shows understanding of state management patterns
- Event/commerce platform experience
- Clean, maintainable code structure
- Ready for real-world implementation

# rsvp-events-demo
