// middleware/auth.js
import jwt from "jsonwebtoken";

export  function authenticate(req) {
  const authHeader = req.headers.get("auth-token");
  if (!authHeader) {
    throw new Error("Authentication required");
  }
  
  // const token = authHeader.split(" ")[1];
  // console.log(token);
  console.log(authHeader);
  
  try {
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
    return { userId: decoded.user.id, role: decoded.user.role };
  } catch (error) {
    throw new Error("Invalid token");
  }
}