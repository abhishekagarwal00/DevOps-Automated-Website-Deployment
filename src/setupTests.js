import "@testing-library/jest-dom/vitest";

// Vite replaces these constants at build time; give them values for the test environment.
globalThis.__BUILD_TIME__ = "2026-07-01T10:00:00.000Z";
globalThis.__COMMIT_SHA__ = "abc1234";
