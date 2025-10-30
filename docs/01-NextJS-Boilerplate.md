# NextJS 16 Boilerplate

## Install using `create-next-app`

```bash
npx create-next-app@latest .
```

### Settings for [Next 16](https://nextjs.org/)

- Would you like to use TypeScript? _Yes_
- Which linter would you like to use? _ESLint_
- Would you like to use React Compiler? _No_
- Would you like to use Tailwind CSS? _Yes_
- Would you like your code inside a `src/` directory? _Yes_
- Would you like to use App Router? (recommended) _Yes_
- Would you like to customize the import alias (`@/*` by default)? _No_

### Clean `src/app/globals.css`, `src/app/page.tsx` and `/public` folder

- Only keep `@import "tailwindcss";` in `src/app/globals.css`
- `globals.css` will be updated later with shadcn
- Delete `.svg` files from the public folder
- Export just a simple `h1` tag from the `src/app/page.tsx`

### Favicon

- Setup favicon in `src/app/favicon.ico` or `src/app/icon.png`
- This can be done later

### Global Config File - `src/lib/config.ts`

- Just a basic template here

## Test and Troubleshoot

### Test

- `npm run dev` to check if dev server is running
- `npm run build` to check if everything compiles
- `npm run start` to check if compiled code is served

### Troubleshooting notes

- Fonts may not show correctly in Mozilla Firefox
- Firefox may be forcing default system font
- `firefox -> settings` search for font -> tell firefox, it can use other fonts
