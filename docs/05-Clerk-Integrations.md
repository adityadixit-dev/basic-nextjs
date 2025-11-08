# Clerk Integration

**YOU WILL NOT BE ABLE TO DEPLOY TO PRODUCTION UNLESS YOU HAVE YOUR OWN DOMAIN**
[See Here](https://clerk.com/docs/guides/development/deployment/vercel#deploy-to-production)

## [Clerk NextJS Quickstart](https://clerk.com/docs/nextjs/getting-started/quickstart)

- [Sign into Clerk Dashboard](https://dashboard.clerk.com/apps) and create application
- install `@clerk/nextjs` - `npm install @clerk/nextjs`
- Set Clerk API keys
- Update middleware in `proxy.ts` for Next16 and `middleware.ts` in Next15
- Wrap the html section in `src/app/layout.tsx` with the `<ClerkProvider>`
- Enable [Role Based Access Control](https://clerk.com/docs/guides/secure/basic-rbac)
- **You will not be able to deploy to production if you do not have a custom domain**

```tsx
  return (
    <ClerkProvider>
      <html>
      .....
      </html>
    </ClerkProvider>
```

## [Sync Clerk data using webhooks](https://clerk.com/docs/guides/development/webhooks/syncing)
