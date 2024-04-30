export const publicRoutes = [
    "/",
    "/auth/new-verification",
    new RegExp("^/[a-zA-Z0-9_-]+/[a-zA-Z0-9_-]+$"), // Include dynamic route here
];


export const authRoutes = [
    "/auth/login",
    "/auth/signup",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";