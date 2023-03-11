import express, { Router, Request, Response } from "express";
import passport from "passport";

const clientURL: string = "http://localhost:5175";

const router: Router = express.Router();

router.get("/login/success", (req: Request, res: Response) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  } else {
    res.json({
      success: false,
      message: "Not Autorized",
    });
  }
});

router.get("/login/failed", (req: Request, res: Response) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate.",
  });
});
router.get(
  "/google",
  passport.authenticate("google", ["profile", "email"] as any)
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: clientURL,
    failureRedirect: "/login/failed",
  })
);

router.get("/logout", (req: Request, res: Response) => {
  req.logout({}, (err: any) => {
    if (err) return res.status(500).json("Something went wrong");
    res.redirect(clientURL);
  });
});

export default router;
