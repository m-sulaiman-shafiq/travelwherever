# TravelWherever Development Guidelines

## Project

TravelWherever is a Next.js application using TypeScript and Tailwind CSS.

## Code Guidelines

- Use TypeScript and maintain strict typing.
- Prefer reusable React components instead of duplicating UI.
- Follow the existing project structure and naming conventions.
- Use the existing state-management and data-fetching patterns rather than introducing new libraries unnecessarily.
- Keep components focused and avoid unnecessary complexity.
- Do not change unrelated files when implementing a feature.

## Before Making Changes

- Inspect the existing implementation and understand how the relevant components are currently used.
- Identify potential edge cases before modifying the code.
- Reuse existing utilities and components where appropriate.

## Verification

- Run TypeScript checks after significant changes.
- Run linting when applicable.
- Verify that existing functionality has not been broken.
- Review the final diff before considering the task complete.

## AI Agent Guidelines

- Do not assume an implementation detail if it can be verified from the codebase.
- Explain significant architectural decisions before making them.
- Keep changes minimal and focused on the requested task.
- Never expose API keys, secrets, or environment variables.