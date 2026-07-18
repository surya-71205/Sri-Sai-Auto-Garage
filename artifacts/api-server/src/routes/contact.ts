import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { contactSubmissionsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  try {
    await db.insert(contactSubmissionsTable).values({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email ?? null,
      message: parsed.data.message,
      serviceNeeded: parsed.data.serviceNeeded ?? null,
    });

    req.log.info({ name: parsed.data.name }, "Contact form submitted");

    // TODO: Wire a real email service here (e.g. Resend or Nodemailer)
    // to send a notification to the garage owner on each submission.

    res.json({
      success: true,
      message: "Thank you! We will get back to you shortly.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact submission");
    res.status(500).json({ error: "Failed to process your request" });
  }
});

export default router;
