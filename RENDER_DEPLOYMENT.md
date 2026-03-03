# Deployment to Render

This portfolio application is configured for deployment on Render.

## Prerequisites

- GitHub account with this repository
- Render account (free tier available at https://render.com)

## Deployment Steps

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New +" → "Blueprint"
4. Select your GitHub repository
5. Render will automatically detect `render.yaml` and deploy

### Option 2: Manual Web Service Deployment

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the settings:
   - **Name**: `akash-portfolio` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for better performance)
5. Click "Create Web Service"

## Environment Variables

The app is configured with:
- `NODE_ENV=production` (automatically set by Render)

## Building Locally

To build for production:
```bash
npm install
npm run build
npm start
```

The app will be available at `http://localhost:3000`

## Files Included

- `render.yaml` - Render infrastructure configuration
- `server.js` - Express server to serve the production build
- Updated `package.json` with Express dependency and start script

## Troubleshooting

If the deployment fails:
1. Check the Render logs in the dashboard
2. Ensure all dependencies are correctly listed in `package.json`
3. Make sure the build completes without errors: `npm run build`
4. Verify the dist folder is created with your built files

## Custom Domain

Once deployed, you can add a custom domain:
1. In Render dashboard, go to Web Service settings
2. Add a custom domain
3. Update DNS records at your domain registrar

For more help, visit [Render Documentation](https://render.com/docs)
