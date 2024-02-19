import Cart from "../model/Cart.js";

export const addToCart = async (req, res) => {
  const { id } = req.user;
  const cart = new Cart({ ...req.body, user: id });
  try {
    const doc = await cart.save();
    const result = await doc.populate("product");
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const fetchCartByUser = async (req, res) => {
  const { id } = req.user;
  try {
    const cartItems = await Cart.find({ user: id }).populate("product");
    res.status(201).json(cartItems);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    }).populate("product");
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndDelete(id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error);
  }
};
