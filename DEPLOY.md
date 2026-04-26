# Deploy

This project is ready for Vercel deployment, but the current machine is not logged in to Vercel.

## Required

Create a Vercel token:

```text
https://vercel.com/account/tokens
```

Set it locally in the terminal:

```cmd
set VERCEL_TOKEN=your_token
```

Then deploy:

```cmd
deploy-vercel.cmd
```

The command runs:

```cmd
npx.cmd vercel --prod --yes --token "%VERCEL_TOKEN%"
```

