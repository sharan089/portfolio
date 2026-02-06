# How to Deploy to Vercel

Since I cannot log into your Vercel account directly, you need to run the deployment command yourself. It is very easy.

## Steps

1.  **Open a New Terminal** in this project folder.
2.  Run the following command:
    ```bash
    npx vercel
    ```
3.  **Follow the prompts**:
    *   It will ask you to log in (select GitHub or Email).
    *   "Set up and deploy?" -> **Y** (Yes)
    *   "Which scope?" -> **Enter** (Your account)
    *   "Link to existing project?" -> **N** (No)
    *   "Project Name?" -> **Enter** (sarvesh-portfolio)
    *   "Directory?" -> **Enter** (./)
    *   "Auto-detect settings?" -> **N** (No)
        *   **Important**: If it asks for Build Command, type: `npm run build`
        *   Output Directory: `dist`
        *   Install Command: `npm install`
    *   (Most of the time it auto-detects correctly as 'Vite', just press Enter if it says Vite).

4.  Wait for it to upload. It will give you a **Production** link (e.g., `https://sarvesh-portfolio.vercel.app`).

## Future Updates
If you make changes later, just run:
```bash
npx vercel --prod
```
to update the live site.
