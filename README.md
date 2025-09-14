# Welcome to your Fashion Wardrobe App 👗

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app), featuring a stylish fashion wardrobe management interface.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## How to Run

### Snack Link
You can try the app directly in Expo Snack: [Fashion Wardrobe App](https://snack.expo.dev/@aamir09/monova-)

### Local Development
```bash
# Clone the repository
git clone https://github.com/AamirKnight/MonovaProject.git
cd MonovaProject

# Install dependencies
npm install

# Start the development server
npx expo start
```

## What Was Replicated

This fashion wardrobe app replicates the video that we given to by docs.

### Core Functionality
- **Three-Tab Navigation**: Collections, Outfits, and Items tabs with smooth transitions
- **Dynamic Filtering**: Filter items by type, style, mood, and color with real-time updates
- **Collection Management**: Curated fashion collections (Work, Leisure, Date Night, Casual Weekend)
- **Outfit Combinations**: Complete outfit displays
- **Individual Item Display**: Grid-based item browsing with detailed metadata

### Visual Design Elements
- **Card-Based Layout**: Clean, modern card design with shadows and rounded corners
- **Responsive Grid System**: Adaptive 2-column layout for items, flexible layouts for collections/outfits
- **Filter Chip Interface**: Horizontal scrollable filter chips with active states
- **Image Overlays**: Bookmark buttons and category badges on item images
- **Tab Bar Design**: Segmented control style with active state indicators

## Component Structure & State Management

### State Management
The app uses React hooks for state management:

- **`activeTab`**: Controls which tab is currently visible (collections/outfits/items)
- **`selectedFilters`**: Object managing filter states for type, style, mood, and color
- **`selectedCollectionFilter`**: Controls collection category filtering
- **`filteredItems`**: Computed array of items based on active filters
- **`filteredCollections`**: Computed array of collections based on collection filter
- **`slideAnim`**: Animated.Value for smooth transitions and micro-interactions
- **`screenWidth`**: Responsive width management for cross-platform compatibility

### Data Structure
Mock data includes:
- **Collections**: Curated outfit groups with themed items
- **Outfits**: Complete outfit combinations with smart layout logic
- **Items**: Individual fashion pieces with comprehensive metadata
- **Filter Options**: Categorized filter options for advanced searching

## Assumptions and Limitations

### Assumptions Made
1. **Mock Data**: Using static mock data instead of real backend integration
2. **Platform Optimization**: Designed primarily for mobile with web responsiveness

### Current Limitations
- **No Persistence**: Data doesn't persist between app sessions (no local storage)
- **Static Content**: No ability to add/edit/remove items dynamically
- **Image Dependencies**: Requires internet connection for image loading
- **No User Authentication**: Single-user experience without accounts
- **Limited Filtering**: Cannot combine multiple filter values within same category
- **No Search**: Text-based search functionality not implemented

### Technical Limitations
- **Memory Usage**: Large image collections may impact performance on lower-end devices
- **Network Dependency**: App relies on external image URLs
- **Responsive Design**: Optimized for phone/tablet, may need adjustments for desktop
- **Accessibility**: Basic accessibility features implemented, could be enhanced

## Animations & Interactions Implemented

### Micro-Animations
- **Scale Animation**: Items scale slightly when filters change (0.95 → 1.0)
- **Opacity Transitions**: Smooth fade-in effects on content updates (0 → 1)
- **Slide Transitions**: Subtle slide-up animation for outfit cards (20px → 0)
- **Tab Switching**: Spring animation with tension and friction for smooth transitions

### Interactive Elements
- **Filter Chips**: 
  - Active state color transitions (#f0f0f0 → #f7e6de)
  - Press feedback with opacity changes
  - Horizontal scroll with momentum
- **Tab Navigation**:
  - Segmented control design with shadow animations
  - Active tab background and text color transitions
  - Spring-based selection feedback
- **Card Interactions**:
  - Touch feedback with activeOpacity (0.7-0.9)
  - Bookmark button with circular background
  - Category badge positioning and styling

### Layout Animations
- **Responsive Grid**: Dynamic width calculation based on screen size
- **Asymmetric Layouts**: 
  - Collections: Left large item + right stacked items
  - Outfits: Intelligent item arrangement based on clothing type
- **Smooth Transitions**: Animated value interpolation for scale and opacity
- **Platform Adaptation**: Different behaviors for web vs mobile platforms

### Performance Optimizations
- **useNativeDriver**: All animations use native driver for 60fps performance
- **FlatList Optimization**: Efficient rendering for large item lists
- **Image Lazy Loading**: React Native Image component handles loading states
- **Conditional Rendering**: Only active tab content is rendered
- **Memoization**: Filter computations optimized with useEffect dependencies

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

