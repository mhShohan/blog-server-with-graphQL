import bcrypt from 'bcrypt'

/**
 * @param password 
 * @param hashPassword 
 * @returns Boolean
 */
export const verifyPassword = async (password: string, hashPassword: string) => {
  return await bcrypt.compare(password, hashPassword)
}

/**
 * @param password 
 * @returns Promise<string>
 */
export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10)
}
