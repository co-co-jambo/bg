import "dotenv/config";
import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "../dist/oauth.js";
import { appRouter } from "../dist/routers.js";
import { createContext } from "../dist/context.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configure body parser with larger size limit for file uploads
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// OAuth callback under /api/oauth/callback
registerOAuthRoutes(app);

// tRPC API
app.use(
  "/api/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

// Serve static files from the dist/public directory
app.use(express.static(path.join(__dirname, "../dist/public")));

// Handle client-side routing - serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/index.html"));
});

export default app;