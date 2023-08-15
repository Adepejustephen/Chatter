import * as yup from "yup";

export const SignUpchema = yup
  .object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    verifyPassword: yup.string().required(),
    role:yup.string().required()
    
  })
  .required();

