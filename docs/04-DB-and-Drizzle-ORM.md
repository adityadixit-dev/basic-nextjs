# [Drizzle ORM with Postgres](https://orm.drizzle.team/docs/get-started/postgresql-new)

```bash
npm i drizzle-orm pg
npm i -D drizzle-kit tsx @types/pg
```

- Note that drizzle-kit has been installed as a dev dependency and will have a security vulnerability due to esbuild

## File Structure

- Ensure `DATABASE_URL` variable has been set in the `.env` file
- Database related files are in the `src/lib/db` folder
- Files `drizzle.config.ts` and `drizzle.config.prod.ts` for dev and production configurations for drizzle
- The folder `src/lib/db/schema` is where you should define your table schemas
- The folder `src/lib/db/queries` is where you should keep database querries
- Modify `package.json` with additional migration scripts

## Migrations

- In a dev environment you can use `npx drizzle-kit push` to push the DB schema to the Database
- However for production, it might be best to use `generate` and `migrate`
- [Database Connection Basics](https://orm.drizzle.team/docs/connect-overview)
- [Migration Fundamentals](https://orm.drizzle.team/docs/migrations)
- [Migrations with Drizzle Kit](https://orm.drizzle.team/docs/kit-overview)

# Setup Postgres Locally

- Check is psql is installed and working; Install according to local OS as needed

```bash
psql --version
```

## Helpful commands

- Connect to local postgres server: `sudo -u postgres psql`
- List of databases: `\l` (once in psql shell)
- Create a new database: `CREATE DATABASE <DbName>;`
- Connect to database: `\c <DbName>`
- Example Database Url (ssl disabled for local use only): `DATABASE_URL="postgres://postgres:postgres@localhost:5432/<DbName>?sslmode=disable"`

## Vercel Neon DB Integration

- In the vercel dashboard, select the project then goto settings
  ![Project Settings](./images/project-settings.png "Settings")
- On the left side bar select Integrations
  ![Integrations](./images/project-integrations.png)
- Browse marketplace and create integration
- You should see the integration in the storage tab
- Connect to the integration and update `.env` file accordingly
