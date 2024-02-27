# Github User Search App

## Overview

This React app enables users to find real-time information about GitHub users. By entering a GitHub username, the app fetches and displays relevant user data using the GitHub API.

## Features

- **Search Form**: Users can input a GitHub username to initiate a search.
- **User Results**: Displays user details, including their username, avatar, and profile link.
- **Loading Indicator**: Provides visual feedback during data fetching.
- **Not Found Message**: Alerts users when the entered username is not found.

## Project Structure

- **App Component**: The primary component handling state management and rendering UI elements.
- **Form Component**: A reusable component responsible for user input and search functionality.
- **UserResult Component**: A modular component for displaying user details.

## Technical Aspects

### State Management

- **useState**: Manages local state variables such as `query`, `userData`, `loading`, `notFound`, and `submitted`.

### Side Effects

- **useEffect**: Automatically focuses on the input field when the component mounts.

### Refs

- **useRef**: Used to obtain a reference to the input element for auto-focusing.

### Fetching Data

- **fetch API**: Utilized for making asynchronous requests to the GitHub API to retrieve user data.

### Component Composition

- **Form Component**: A modular component handling the presentation and functionality of the search form.
- **UserResult Component**: A modular component for presenting user details.

### Conditional Rendering

In the component's render method, conditional rendering is achieved using this pattern:
```jsx
loading ? ("") : ( submitted && ( notFound ? ("") : (</>) ) )
```

```jsx
{loading ? (
  <p>Fetching data...</p>
) : (
  submitted && (
    notFound ? (
      <p className="text-red-500">User not found</p>
    ) : (
      <UserResult
        username={userData.username}
        profileUrl={userData.profileUrl}
        avatar={userData.avatar}
      />
    )
  )
)}
```

Happy coding!
