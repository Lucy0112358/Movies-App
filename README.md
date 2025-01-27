# React TV Application

## Project Description

This web app is a TV application built using React.js, showcasing a featured video section, a main menu with icons, and a trending section with a video carousel. It features animations and interaction behaviors based on user input.

## Task Description

The app consists of:
- **Home Page**
- **Main Menu**
- **Trending Now Section**

### 1. Main Menu
- Displays icons for various sections (Search, Home, TV Shows, Movies, Genres, Watch Later).
- On hover, the menu expands with a smooth animation from left to right, with the background opacity transitioning from 0% to 80%.
- When the menu is expanded, additional profile information and a secondary menu (Language, Get Help, Exit) appear.

### 2. Main Featured Video
- Located at the top left of the screen, this section shows the last featured movie.
- Includes a video cover image, category name, movie logo, release year, MPA rating, duration, a short description, and two buttons (Play and More Info).

### 3. Trending Now Section
- This section showcases trending videos (up to 50), sorted by the latest additions.
- A carousel view is used to display the videos, with a maximum of 8 items visible at a time. The rest are viewable via scrolling.
- When a user clicks on a video, the featured video section updates with the new movie's details, and after 2 seconds, the background image is replaced with a video player playing the selected video.
- The clicked video’s ID is stored in session storage, and the next time the page loads, the last clicked video appears first in the list.

---

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites
- Node.js (v14 or later)
- NPM (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Lucy0112358/Movies-App.git
