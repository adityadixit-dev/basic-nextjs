# Recomended User Steps

## 01 - NextJS Boilerplate

1. `src/app/layout.tsx`: [Modify metadata as needed](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
2. Optional: [Set up fonts](https://nextjs.org/docs/app/api-reference/components/font)
3. `src/app/page.tsx`: Setup a heading here for initial test
4. Add favicon at `src/app/favicon.ico` or `src/app/icon.png`
5. Add various [routing files](https://nextjs.org/docs/app/getting-started/project-structure#routing-files)

## 02 - ShadCn

1. [ShadCn Themes](https://ui.shadcn.com/themes) you can use to copy to `src/app/global.css`
2. I Recomended [UI Colours by Sajid](https://www.iamsajid.com/ui-colors/) for a nice colour pallete

## Helpful utils - `src/utils`

- Simple helpers to log to console in Dev Mode - `log-in-dev-mode.ts`
- Validate formdata with zod - `validate-formdata-with-zodtype.ts`
- The above function takes a schema and returns data if it matches schema. Else throws an error
- Example usage of `validateFormDataWithZodSchema` function; better to wrap in a `try-catch`

```ts
const rawData = Object.fromEntries(formData);
const validatedData: ValidDataType = validateFormDataWithSchema(
  schemaToUse,
  rawData,
);
```

## Database and Drizzle

- Add `DATABASE_URL` to .env
- This may be either a local database in dev, or a production database (see docs)
- Check local and production drizzle config files at `drizzle.config.ts` and `drizzle.config.prod.ts`

# TODO STUFF

- Neon DB Setup
- Clerk Auth with users table and Role based authentication
- Basic Formcontainers

# Possible Frameworks/Libraries to use

- NextJS 16
- vercel hosting
- shadcn ui
- Drizzle ORM
- Zod
- NeonDB
- Clerk Auth
- Next Blob Storage
- SWR for data fetching
- Framer Motion for animations
- Next SEO for boosting SEO
- next-sitemap to autogenerate sitemaps
- [Addition Options here](https://github.com/officialrajdeepsingh/awesome-nextjs)

# Checklist for Todos

- [ ] DATABASE_URL in `.env`
