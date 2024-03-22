// // import signInSchema from "../models/signinModel";

// export default handleSignIn = async (email, password, setError) => {
//   // try {
//   //   signInSchema.safeParse({ email, password });

//   //   const response = await axios.post("/signin", { email, password });

//   //   console.log("Sign in successful:", response.data);
//   // } catch (error) {
//   //   if (error instanceof z.ZodError) {
//   //     setError(error.errors.map((err) => err.message).join(", "));
//   //   } else {
//   //     setError(error.response.data.message || error.message);
//   //   }
//   // }

//   try {
//     signInSchema.safeParse({ email, password });
//   } catch (error) {
//     setError(error);
//   }
// };
