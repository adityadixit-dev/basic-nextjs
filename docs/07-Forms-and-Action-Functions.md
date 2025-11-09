# Generic Forms and Action Function

- Action Function type found in `/src/types/form-types`
- Action Functions preferably go in `/src/lib/actions`
- They must be server components with the `"use server"` tag at the absolute top
- We are using ShadCn components over here, but we can make custom components as needed as well

## Action Function creator notes

### `src/utils/action-function-creator.ts`

- Higher order function that allows to insert or update into a database
- Database query function can be used to either add or update
- use these to create indivial action functions for different forms
