# Joshua Jung · Oboe & English Horn

Personal music portfolio built with Next.js and exported as a static site.

## Commands

```bash
npm install        # first time only
npm run dev        # preview at http://localhost:3000 while editing
npm run build      # writes the finished static site to ./out
npm run photos     # re-generate web images after adding photos to ../Photos
```

## Editing content

All the text lives in **`content/site.ts`**: bio, experience, awards, teachers, gallery photos and videos.

- **Add a video:** paste the YouTube ID into the `videos` list (for `https://youtube.com/watch?v=abc123`, the ID is `abc123`).
  While the list is empty, the Media section shows placeholder frames.
- **Add a photo:** drop it into `../Photos/Horizontal` or `../Photos/Vertical`, run `npm run photos`, then add its id
  (the filename lowercased, with spaces and punctuation as dashes) to `gallery`.
- **Domain:** set `profile.siteUrl` once you have one.

## Deploying

Run `npm run build` and upload the `out/` folder to any static host: Vercel, Netlify, GitHub Pages or Cloudflare Pages.
On Vercel or Netlify you can also import the project directly and they'll build it for you.

## Résumé

The downloadable résumé is `public/resume/Joshua-Jung-Oboe-Resume.pdf`. It's a copy of `../Resume/` with the home
address and phone number removed, because this file is public. When you update your résumé, export a version without
those lines and replace this file, keeping the same filename.
