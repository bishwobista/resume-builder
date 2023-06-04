import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";// to integreate yup with react-hook-form

const Form = () => {
  const MUST_BE_CHARACTER = "Must be character";
  const schema = yup.object().shape({

    //.STRICT:  //strict mode is not working
    //using regex to check if the input is character or not
    //writing message directly in yup is not working
    fullName: yup.string().matches(/^[a-zA-Z ]*$/, MUST_BE_CHARACTER).required(),
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
    //using onsubmit instead of onchange and onclick
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="fullname" {...register("fullName")} />
      {/* using <p> tag on error not working  */}
      <p>{}</p>
      <>{errors.fullName?.message}</>
      <input type="text" placeholder="email" {...register("email")} />
      <>{errors.email?.message}</>
      <input type="number" placeholder="age" {...register("age")} />
      <>{errors.age?.message}</>
      <input type="password" placeholder="password" {...register("password")} />
      <>{errors.password?.message}</>
      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmPassword")}
      />
      <>{errors.confirmPassword?.message}</>
      <input type="submit" />
    </form>
  );
};
export default Form;


