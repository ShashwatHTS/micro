import { db1 } from "../migration/data-source";
import { User } from "../entity/User";

const userRepository = db1.getRepository(User);

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = userRepository.create({
    name,
    email,
    password,
  });
  await userRepository.save(user);
  console.log("joiv ", user);
  return res.json(user);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userRepository.findOneBy({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid password" });
  }
  console.log("joiv ", user);
  return res.json(user);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  userRepository.merge(user, { name, email, password });
  const updatedUser = await userRepository.save(user);
  console.log("joiv ", updatedUser);
  return res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await userRepository.findOneBy({ id });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  await userRepository.remove(user);
  console.log("joiv ", user);
  return res.json({ message: "User deleted successfully" });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userRepository.findOneBy({ id });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  console.log("joiv ", user);
  return res.json(user);
}   