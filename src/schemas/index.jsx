import * as Yup from "yup";

export const signUpSchema = Yup.object({
    firstname: Yup.string().required("Please enter your First name"),
    middlename: Yup.string().required("Please enter your Middle name"),
    lastname: Yup.string().required("Please enter your Last name"),
    mobileno: Yup.string().required("Please enter your Mobile No."),
    email: Yup.string().email().required("Please enter your Email"),
    birthday: Yup.string().required("Please enter your Birthday"),
    age: Yup.string().required("Please enter your Age"),
    bloodgroup: Yup.string().required("Please enter your Blood Group"),
    height: Yup.string().required("Please enter your Height"),
    weight: Yup.string().required("Please enter your Weight"),
});

