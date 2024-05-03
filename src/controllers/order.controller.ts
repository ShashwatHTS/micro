import { datasource, db1, db2 } from "../migration/data-source";
import { User } from "../entity/User";
import { Order } from "../entity/Order";

const userRepository = db1.getRepository(User);
const orderRepository = db2.getRepository(Order);

export const createOrder = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  const userid = await userRepository.findOneBy({ id: userId });
  if (!userid) {
    return res.status(404).json({ message: "User not found" });
  }
  console.log("joiv ", userid);
  const order = orderRepository.create({
    userId,
    productId,
    quantity,
  });
  await orderRepository.save(order);
  console.log("joiv ", order);
  return res.json(order);
};

export const getOrder = async (req, res) => {
  const subQueryBuilder = userRepository
    .createQueryBuilder("user")
    .select()
    .addSelect("order.*")
    .innerJoin("db2.order", "order", "order.userId = user.id")
    .getRawMany();

  console.log(subQueryBuilder);
};
