

# Full Stack Job Portal 

This is a full-stack job portal web application built with React JS, Tailwind CSS, Supabase for database and authentication, Clerk for secure authentication, and Shadcn UI for beautiful UI components. This project is a great addition to your resume and will help you impress recruiters by showcasing your skills in modern web development technologies.

## Features

-   **Authentication**: Secure login and registration using Clerk authentication
-   **Job Listings**: Create, read, update, and delete job listings
-   **User Dashboard**: Personal user dashboard with job applications and history
-   **Job Application**: Users can apply for jobs directly on the platform
-   **Responsive UI**: Tailwind CSS ensures the portal is fully responsive on all devices
-   **Shadcn UI**: Beautiful UI components integrated for a great user experience

## Technologies Used

-   **Frontend**: React JS, Tailwind CSS, Shadcn UI
-   **Backend**: Supabase (for database and authentication)
-   **Authentication**: Clerk for secure user authentication
-   **State Management**: React Hook Form for form handling

## Setup

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

-   **Node.js** (v14 or higher)
-   **npm** (Node Package Manager)

### Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

> Replace `your_supabase_anon_key_here` and `your_clerk_publishable_key_here` with the actual values from your Supabase and Clerk accounts.

### Installing Dependencies

1.  Clone the repository:
    
    ```bash
    https://github.com/Vighnesh-Gaddam/JobPortal.git
    cd job-portal
    ```
    
2.  Install the required dependencies:
    
    ```bash
    npm install
    ```
    

### Running the Development Server

To start the development server and run the app locally, use the following command:

```bash
npm run dev
```

This will start the app on `http://localhost:5173`.

### Contributing

If you'd like to contribute to this project, feel free to open an issue or submit a pull request.


