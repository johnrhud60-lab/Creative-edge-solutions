import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/print-order", (req, res) => {
    const { name, phone, service, details } = req.body;
    
    console.log("--- NEW PRINT ORDER RECEIVED ---");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Service:", service);
    console.log("Details:", details);
    console.log("-------------------------------");

    // In a real app, you'd save this to a database or send an email
    res.json({ 
      success: true, 
      message: "Order transmission received at CyberPrint Command Center. Our agents will contact you shortly.",
      orderId: Math.random().toString(36).substring(7).toUpperCase()
    });
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", system: "CyberPrint Command Center" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`CyberPrint Command Center active on http://localhost:${PORT}`);
  });
}

startServer();
