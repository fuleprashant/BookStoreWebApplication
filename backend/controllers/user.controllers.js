import User from "../model/user.model.js";

export const signUp = async (req, res) => {
  //   console.log("the signup function is clicked");
  try {
    const { fullName, email, password } = req.body;
    console.log(fullName, email, password);
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    const createUser = new User({
      fullName,
      email,
      password,
    });
    await createUser.save();
    res.status(201).json({ message: "User created succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
