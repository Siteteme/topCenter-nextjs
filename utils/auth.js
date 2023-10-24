import {verify} from "jsonwebtoken";

const {hash, compare} = require("bcryptjs");

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password, passwordHash) {
  const verifiedPassword = await compare(password, passwordHash);
  return verifiedPassword;
}

async function verifyToken(token, secretKey) {
  try {
    const result = verify(token, secretKey);
    console.log(result);
    return {email: result.email};
  } catch (error) {
    return false;
  }
}

export {hashPassword, verifyPassword, verifyToken};
