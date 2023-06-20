module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    else if (req.method === "OPTIONS") {
        return next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}