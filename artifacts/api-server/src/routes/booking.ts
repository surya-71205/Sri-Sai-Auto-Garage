import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { bookingsTable } from "@workspace/db";
import { SubmitBookingBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/booking", async (req, res) => {
  const parsed = SubmitBookingBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  try {
    await db.insert(bookingsTable).values({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email ?? null,
      service: parsed.data.service,
      preferredDate: parsed.data.preferredDate,
      preferredTime: parsed.data.preferredTime ?? null,
      notes: parsed.data.notes ?? null,
    });

    req.log.info(
      { name: parsed.data.name, service: parsed.data.service },
      "Booking submitted",
    );

    // TODO: Wire a real email/SMS notification here so the garage owner
    // receives an alert for each new booking request.

    res.json({
      success: true,
      message:
        "Booking request received! We will confirm your appointment shortly.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save booking");
    res.status(500).json({ error: "Failed to process your request" });
  }
});

export default router;
