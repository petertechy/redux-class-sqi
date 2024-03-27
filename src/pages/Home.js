import { useFormik } from "formik";
import * as yup from "yup";
import { addOne } from "../redux/userSlice";
import { useDispatch } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .required()
        .matches(/^[A-Z][\w]+/, "Firstname must start with capital letter"),
      lastName: yup
        .string()
        .required()
        .matches(/^[A-Z][\w]+/, "Last must start with capital letter"),
      age: yup.number().required("Please Provide age").min(16).max(80),
      email: yup.string().email(),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // const [userData, setUserData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(userData);
  };
  const changeRedux = () => {
    dispatch(addOne());
  };
  return (
    <div className='App App-header'>
      {/* <img src={image} alt='' /> */}
      <button onClick={changeRedux}> Change Redux State</button>
      <form action='' onSubmit={formik.handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            FirstName
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='firstName'
            type='text'
            className='form-control'
            placeholder='FirstName'
          />
          <span className='text-danger'>{formik.errors.firstName}</span>
        </div>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Last Name
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='text'
            name='lastName'
            className='form-control'
            placeholder='Last Name'
          />
          <span className='text-danger'>{formik.errors.lastName}</span>
        </div>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Age
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='text'
            name='age'
            className='form-control'
            placeholder='Age'
          />
          <span className='text-danger'>{formik.errors.age}</span>
        </div>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Email
          </label>
          <input
            type='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='email'
            className='form-control'
            placeholder='email'
          />
          <span className='text-danger'>{formik.errors.email}</span>
        </div>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Password
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='password'
            name='password'
            className='form-control'
            placeholder='password'
          />
          <span className='text-danger'>{formik.errors.password}</span>
        </div>
        <button className='btn-danger btn form-control'> Submit</button>
      </form>
    </div>
  );
}

export default Home;
