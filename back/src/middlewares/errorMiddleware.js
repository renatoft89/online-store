const handlePrismaErrors = (error, _req, res, next) => {
  if (error.code === "P2002") {
    res.status(409).json({ message: "this email already exists" });
  } else if (error.code === "P2025") {
    res.status(404).json({ message: "Record not found error" });
  } else {
    console.log({ error });
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = handlePrismaErrors