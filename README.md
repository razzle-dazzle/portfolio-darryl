# darryloctober.co.uk

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

This application requires Node.js v16.13+.

```bash
pnpm install
pnpm dev
```

Create a `.env` file similar to `.env.example`.

---

## Adding a new project

1. Add a new entry here: `lib/_all-db.ts`
2. Make sure there is an images folder in here `public/projects` which matches the images in the file above (required images are file.jpg, file_small.jpg)
3. Build new project data (this will compiler the TS and export a new MDX file: `pnpm run build-all`)
4. Commit and deploy to main.

> Note: The large images should be a screenshot from the site and the small should be 120x120, but it doesn't have to be square.