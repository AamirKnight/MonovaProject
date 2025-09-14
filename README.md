# Fashion Wardrobe App 👗

A stylish fashion wardrobe management interface built with React Native and Expo.

## 🚀 Quick Start

**Try it now:** [Expo Snack Demo](https://snack.expo.dev/@aamir09/monova-)

**Run locally:**
```bash
git clone https://github.com/AamirKnight/MonovaProject.git
cd MonovaProject
npm install
npm run start
```

## 📱 Features

### Core Functionality
- **3-Tab Navigation** - Collections, Outfits, Items with smooth transitions
- **Smart Filtering** - Filter by type, style, mood, and color
- **Collections** - Curated groups (Work, Leisure, Date Night, Weekend)
- **Outfit Display** - Complete outfit combinations with intelligent layouts
- **Item Grid** - 2-column responsive grid with metadata

### UI/UX Highlights
- Card-based design with shadows and rounded corners
- Horizontal scrollable filter chips
- Bookmark buttons and category badges
- Segmented tab bar with active states
- Smooth animations and micro-interactions

## 🏗️ Architecture

**State Management (React Hooks):**
- `activeTab` - Current tab (collections/outfits/items)
- `selectedFilters` - Filter states for search
- `slideAnim` - Animation controller
- `screenWidth` - Responsive layout management

**Data Structure:**
- Collections with themed outfit groups
- Individual items with comprehensive metadata  
- Filter options for advanced searching

## ⚠️ Limitations

- Mock data only (no backend)
- No data persistence
- Requires internet for images
- Single-user experience
- No text search functionality

## ✨ Animations

- **Scale & Opacity** - Smooth content transitions
- **Spring Animations** - Tab switching with physics
- **Filter Chips** - Color transitions and press feedback
- **Card Interactions** - Touch feedback (activeOpacity)
- **Performance** - Native driver for 60fps

## 🔧 Technical Details

- **Platform:** React Native + Expo
- **Images:** Unsplash API
- **Layout:** Responsive grid system
- **Optimization:** FlatList, conditional rendering, memoization