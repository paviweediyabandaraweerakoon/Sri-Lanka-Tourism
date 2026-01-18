# Code Reference Guide

## Quick File Overview

### Main Files You Need

#### 1. `/src/app/App.tsx` - Main Application
```typescript
- Imports all components
- Manages season filter state
- Renders the full page layout
```

#### 2. `/src/app/components/Header.tsx` - Navigation
```typescript
- Top navigation bar
- Logo and site title
- Navigation links (Destinations, Best Times, About)
```

#### 3. `/src/app/components/Hero.tsx` - Hero Banner
```typescript
- Large banner with beach image
- Main headline and description
- Two call-to-action buttons
```

#### 4. `/src/app/components/SeasonSelector.tsx` - Season Filter
```typescript
- 4 clickable season cards
- Manages which season is selected
- Shows month ranges for each season
- Props:
  - selectedSeason: current season
  - onSeasonChange: callback function
```

#### 5. `/src/app/components/DestinationCard.tsx` - Single Destination
```typescript
- Card layout for one destination
- Shows image, name, description, highlights
- Displays best visiting months, temperature, rainfall
- Props:
  - destination: Destination object
```

#### 6. `/src/app/components/DestinationsGrid.tsx` - All Destinations
```typescript
- Contains array of 8 destinations
- Filters based on selected season
- Renders grid of DestinationCard components
- Props:
  - selectedSeason: filters the displayed destinations
```

#### 7. `/src/app/components/AboutSection.tsx` - Info Section
```typescript
- 4 feature cards about Sri Lanka
- Call-to-action section
- Icons and descriptions
```

#### 8. `/src/app/components/Footer.tsx` - Page Footer
```typescript
- Links organized in 4 columns
- Social media icons
- Contact information
```

## Data Structures

### Season Type
```typescript
type Season = 'all' | 'dry-southwest' | 'dry-northeast' | 'inter-monsoon';
```

### Destination Interface
```typescript
interface Destination {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
  bestSeasons: string[];
  highlights: string[];
  temperature: string;
  rainfall: string;
  rating: number;
}
```

## Key Functions

### filterDestinationsBySeason()
Located in: `DestinationsGrid.tsx`
```typescript
// Filters destinations array based on selected season
// Returns all destinations if season is 'all'
// Returns matching destinations for specific seasons
```

### getSeasonMonths()
Located in: `DestinationsGrid.tsx`
```typescript
// Converts season enum to month ranges
// Used for filtering logic
```

## Styling Notes

### Color Classes Used
- `bg-orange-600` - Primary orange background
- `bg-red-600` - Primary red background
- `from-orange-600 to-red-600` - Gradient
- `hover:bg-orange-700` - Hover states
- `text-gray-600` - Secondary text

### Common Patterns
- Cards: `rounded-xl shadow-lg hover:shadow-2xl`
- Buttons: `px-8 py-4 rounded-lg font-semibold`
- Containers: `container mx-auto px-4`
- Grid: `grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8`

## Icons Used (from lucide-react)

- `Compass` - Main logo
- `MapPin` - Location markers
- `Calendar` - Season/time indicators
- `Star` - Ratings
- `Thermometer` - Temperature
- `Droplets` - Rainfall
- `Sun`, `Cloud`, `CloudRain` - Weather icons
- `Palmtree`, `Mountain`, `Waves`, `Coffee` - Feature icons
- `Facebook`, `Instagram`, `Twitter` - Social media
- `Mail`, `Phone` - Contact info

## Image Sources

All images are from Unsplash API:
- Sigiriya Rock
- Ella hill country
- Galle Fort
- Mirissa Beach
- Sri Lankan temple
- Tea plantations
- Wildlife/elephants
- Waterfalls

## Component Hierarchy

```
App
├── Header
├── Hero
├── SeasonSelector
│   └── 4x Season Buttons
├── DestinationsGrid
│   └── Multiple DestinationCards
├── AboutSection
│   └── 4x Feature Cards
└── Footer
    └── 4x Link Columns
```

## State Management

Only one piece of state in the entire app:
- `selectedSeason` in App.tsx
- Passed to SeasonSelector and DestinationsGrid
- Updated via `setSelectedSeason` callback

## Responsive Design

Mobile-first approach using Tailwind breakpoints:
- Default: Mobile (single column)
- `md:` - Tablets (768px+)
- `lg:` - Desktop (1024px+)
- `xl:` - Large desktop (1280px+)

Example:
```typescript
className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
// Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols, Large: 4 cols
```

## How Filtering Works

1. User clicks a season button in SeasonSelector
2. onSeasonChange callback updates selectedSeason in App.tsx
3. selectedSeason prop passed to DestinationsGrid
4. filterDestinationsBySeason() runs
5. Compares destination.bestSeasons with selected season months
6. Returns filtered array
7. Grid re-renders with filtered destinations

## Customization Guide

### To Add a New Destination:
1. Open `DestinationsGrid.tsx`
2. Add new object to `destinations` array
3. Get image from Unsplash
4. Fill in all required fields

### To Add a New Season:
1. Update `Season` type in `SeasonSelector.tsx`
2. Add new season object to `seasons` array
3. Update `getSeasonMonths()` function
4. Update filtering logic if needed

### To Change Colors:
1. Search for `orange-600` and `red-600` in all files
2. Replace with your preferred Tailwind colors
3. Update gradient classes

### To Modify Layout:
- Header: Change navigation items in `Header.tsx`
- Hero: Update text/CTA buttons in `Hero.tsx`
- Grid: Modify grid classes in `DestinationsGrid.tsx`
- Footer: Edit columns in `Footer.tsx`
