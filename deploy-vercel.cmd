@echo off
cd /d "%~dp0"
if "%VERCEL_TOKEN%"=="" (
  echo VERCEL_TOKEN is not set.
  echo Create a token at https://vercel.com/account/tokens
  echo Then run: set VERCEL_TOKEN=your_token
  exit /b 1
)
npx.cmd vercel --prod --yes --token "%VERCEL_TOKEN%"

