import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";// to integreate yup with react-hook-form
const Form = () => {
  
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(8).max(15).required(),
    confirmPassword: yup
    .string()
    //not null assertion operator or use type assertion as string instead of [], null
    .oneOf([yup.ref("password")], "Passwords must match").required()!, 
  });
  const { register, handleSubmit, formState: {errors}, } = useForm({
    resolver: yupResolver(schema),

  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="fullname" {...register("fullName")} />
      {/* <p>{errors.fullName?.message}</p> */}
      <input type="text" placeholder="email" {...register("email")} />
      <input type="number" placeholder="age" {...register("age")} />
      <input type="password" placeholder="password" {...register("password")} />
      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmPassword")}
      />
      <input type="submit" />
    </form>
  );
};
export default Form;


