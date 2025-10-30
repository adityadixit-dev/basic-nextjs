# Add [ShadCn](https://ui.shadcn.com/) to NextJS

## [Read Docs](https://ui.shadcn.com/docs) and Install ShadCn

```bash
npx shadcn@latest init
```

## Add a few commonly used components

```bash
npx shadcn@latest add button
npx shadcn@latest add separator
npx shadcn@latest add sonner
npx shadcn@latest add input
```

## [ShadCn Themes](https://ui.shadcn.com/themes)

- Pick a theme and add it to `src/app/globals.css`
- In `src/app.globals.css`, add `--color-*: initial;` to `@theme inline {....}` to disable other colors

## Install [dark mode](https://ui.shadcn.com/docs/dark-mode/next)

```bash
npm install next-themes
```

- Follow documentation to add a wrapper to the layout
- Add a light dark button

- The documentations asks us to create a theme provider in the `src/components` folder. We will modify this slightly
- Create a `src/providers` folder. Any providers that wrap the whole app should go here.
- Create a theme provider at `src/components/providers/ThemeProvider.tsx` like the [documentation suggests.](https://ui.shadcn.com/docs/dark-mode/next#create-a-theme-provider)
- Add `src/providers/Providers.tsx`. We will export just one common provider from here instead of multiple nestings in the root `layout.tsx` file.

```tsx
"use client";

import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster position="top-center" richColors closeButton expand={true} />
      {children}
    </ThemeProvider>
  );
};
export default Providers;
```

- Import the above provider and wrap the root layout in it.
- if the `body` tag or other fields have props, make sure they are correctly configured. We will add a _toggle dark mode_ button later

```tsx
<html lang="en" suppressHydrationWarning>
  <body>
    <Providers>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </Providers>
  </body>
</html>
```

## Add Light Dark Button

- Add it here, but we will use it later in the main navigation window
- `src/components/ui/custom/LightDarkButton.tsx`

```tsx
"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
export function LightDarkButton() {
  const { theme, setTheme } = useTheme();
  const toggleMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Button variant="outline" size="icon" onClick={toggleMode}>
      <Sun className="h-fit w-fit scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-fit w-fit scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
export default LightDarkButton;
```
