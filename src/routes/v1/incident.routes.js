import express from "express";
import {incidentController} from "../../controllers/incident.controller";
import verifyToken from "../../middleware/token.middleware"

const router = express.Router();

router.post("/red-flags", verifyToken, incidentController.createIncident);
router.patch("/red-flags/:incidentId/comment",verifyToken, incidentController.updateComment )
router.patch("/red-flags/:incidentId/location",verifyToken, incidentController.updateLocation )

export default router;