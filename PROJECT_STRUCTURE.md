# Sri Lankan Tourism Website - Project Structure

## Overview
This is a modern, responsive tourism website for Sri Lanka built with React, TypeScript, and Tailwind CSS. It helps users find the best destinations based on the season they plan to visit.

## Features
- **Seasonal Filtering**: Filter destinations by the best time to visit (Dry Southwest, Dry Northeast, Inter-Monsoon, or All Seasons)
- **8 Featured Destinations**: Including Sigiriya, Ella, Galle Fort, Mirissa Beach, Temple of the Tooth, Nuwara Eliya, Yala National Park, and Diyaluma Falls
- **Interactive UI**: Hover effects, smooth transitions, and responsive design
- **Detailed Information**: Each destination includes best visiting times, temperature, rainfall, highlights, and ratings
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices

## File Structure

```
/src/app/
├── App.tsx                          # Main application component
└── components/
    ├── Header.tsx                   # Top navigation header
    ├── Hero.tsx                     # Hero section with main banner image
    ├── SeasonSelector.tsx           # Season filter buttons
    ├── DestinationCard.tsx          # Individual destination card component
    ├── DestinationsGrid.tsx         # Grid of destination cards with filtering logic
    ├── AboutSection.tsx             # "Why Visit Sri Lanka" section
    └── Footer.tsx                   # Footer with links and contact info
```

## Component Details

### 1. App.tsx
Main component that:
- Manages the selected season state
- Renders all sections in order
- Passes season filter to DestinationsGrid

### 2. Header.tsx
- Navigation bar with logo and menu
- Gradient orange-to-red background
- Responsive navigation links

### 3. Hero.tsx
- Full-width hero section with background image
- Call-to-action buttons
- Gradient overlay for text readability

### 4. SeasonSelector.tsx
- 4 season cards (All, Southwest Dry, Northeast Dry, Inter-Monsoon)
- Click to filter destinations
- Shows which season is currently active
- Includes month ranges and descriptions

### 5. DestinationCard.tsx
- Displays individual destination with:
  - Image with star rating overlay
  - Location and description
  - Best visiting months
  - Temperature and rainfall info
  - Highlights list
  - Explore button

### 6. DestinationsGrid.tsx
- Contains all destination data
- Filters destinations based on selected season
- Responsive grid layout (1-4 columns)
- Shows count of filtered results

### 7. AboutSection.tsx
- 4 feature cards highlighting Sri Lanka's attractions
- Call-to-action section
- Icons for visual appeal

### 8. Footer.tsx
- 4 columns: About, Quick Links, Popular Destinations, Contact
- Social media icons
- Copyright and legal links

## Seasons Explained

### Southwest Dry Season (Dec - Mar)
Best for: West Coast, South Coast
- Galle Fort
- Mirissa Beach

### Northeast Dry Season (May - Sep)
Best for: East Coast, Cultural Triangle
- Sigiriya
- Yala National Park

### Inter-Monsoon (Apr, Jul-Sep, Oct-Nov)
Best for: Hill Country, Central Highlands
- Ella
- Nuwara Eliya
- Diyaluma Falls

### Year-Round
- Temple of the Tooth (Kandy)
- Most cultural sites

## Destinations Included

1. **Sigiriya** - Ancient rock fortress (Cultural Triangle)
2. **Ella** - Hill country with tea plantations
3. **Galle Fort** - Dutch colonial fort (South Coast)
4. **Mirissa Beach** - Beach paradise for whale watching
5. **Temple of the Tooth** - Sacred Buddhist temple in Kandy
6. **Nuwara Eliya** - Colonial tea country ("Little England")
7. **Yala National Park** - Wildlife safari destination
8. **Diyaluma Falls** - Second highest waterfall

## Color Scheme
- Primary: Orange (#ea580c) to Red (#dc2626) gradient
- Accent: Orange shades for buttons and highlights
- Neutral: Grays for text and backgrounds
- Seasonal colors: Blue, Orange, Amber, Teal for different seasons

## Technologies Used
- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## How to Use
1. Page loads with all destinations visible
2. Click any season card to filter destinations
3. Scroll through filtered results
4. Click "Explore" on any destination for more details
5. Use navigation to jump between sections

## Responsive Breakpoints
- Mobile: < 768px (1 column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: 1024px - 1280px (3 columns)
- Large Desktop: > 1280px (4 columns)

## Future Enhancements (Not Implemented)
- Search functionality
- Destination detail pages
- Booking integration
- User reviews
- Interactive map
- Photo galleries
- Multi-language support
