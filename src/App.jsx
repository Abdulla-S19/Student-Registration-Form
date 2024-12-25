// import React, { useState } from 'react';
// import './App.css'; 
// import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Stack } from '@mui/material';

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     mobile: '',
//     email: '',
//     gender: '',
//     dob: '',
//     course: ''
//   });

//   const [errors, setErrors] = useState({});

//   const courses = ["Biology", "Computer Science", "Commerce", "Humanities"];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === 'name' || name === 'address' || name === 'mobile' || name === 'email' || name === 'dob' || name === 'gender' || name === 'course') {
//       validateField(name, value);
//     }
//   };

//   const validateField = (name, value) => {
//     const newErrors = { ...errors };

//     switch (name) {
//       case 'name':
//         newErrors.name = value ? '' : 'Name is required';
//         break;
//       case 'address':
//         newErrors.address = value ? '' : 'Address is required';
//         break;
//       case 'mobile':
//         newErrors.mobile = /^[0-9]{10}$/.test(value) ? '' : 'Valid mobile number is required';
//         break;
//       case 'email':
//         newErrors.email = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value) ? '' : 'Valid email ending with @gmail.com is required';
//         break;
//       case 'gender':
//         newErrors.gender = value ? '' : 'Gender is required';
//         break;
//       case 'dob':
//         newErrors.dob = value ? '' : 'Date of birth is required';
//         break;
//       case 'course':
//         newErrors.course = value ? '' : 'Course selection is required';
//         break;
//       default:
//         break;
//     }

//     setErrors(newErrors);
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.address) newErrors.address = 'Address is required';
//     if (!formData.mobile || !/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = 'Valid mobile number is required';
//     if (!formData.email || !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) newErrors.email = 'Valid email ending with @gmail.com is required';
//     if (!formData.gender) newErrors.gender = 'Gender is required';
//     if (!formData.dob) newErrors.dob = 'Date of birth is required';
//     if (!formData.course) newErrors.course = 'Course selection is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert(`Data stored successfully!\n${JSON.stringify(formData, null, 2)}`);
//     }
//   };

//   const handleCancel = () => {
//     setFormData({
//       name: '',
//       address: '',
//       mobile: '',
//       email: '',
//       gender: '',
//       dob: '',
//       course: ''
//     });
//     setErrors({});
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Higher Secondary Admission Form</h2>
//       <form onSubmit={handleRegister} style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//         <div style={{ marginBottom: '15px' }}>
//           <TextField
//             fullWidth
//             label="Full Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             onBlur={() => validateField('name', formData.name)} 
//             error={!!errors.name}
//             helperText={errors.name}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <TextField
//             fullWidth
//             label="Address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             onBlur={() => validateField('address', formData.address)} 
//             error={!!errors.address}
//             helperText={errors.address}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <TextField
//             fullWidth
//             label="Mobile"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             onBlur={() => validateField('mobile', formData.mobile)} 
//             error={!!errors.mobile}
//             helperText={errors.mobile}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             onBlur={() => validateField('email', formData.email)} 
//             error={!!errors.email}
//             helperText={errors.email}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <FormControl fullWidth error={!!errors.gender}>
//             <InputLabel>Gender</InputLabel>
//             <Select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               onBlur={() => validateField('gender', formData.gender)} 
//             >
//               <MenuItem value="Male">Male</MenuItem>
//               <MenuItem value="Female">Female</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </Select>
//           </FormControl>
//           {errors.gender && <p style={{ color: 'red', fontSize: '12px' }}>{errors.gender}</p>}
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <TextField
//             fullWidth
//             label="Date of Birth"
//             name="dob"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             value={formData.dob}
//             onChange={handleChange}
//             onBlur={() => validateField('dob', formData.dob)} 
//             error={!!errors.dob}
//             helperText={errors.dob}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <FormControl fullWidth error={!!errors.course}>
//             <InputLabel>Course</InputLabel>
//             <Select
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               onBlur={() => validateField('course', formData.course)} 
//             >
//               {courses.map((course) => (
//                 <MenuItem key={course} value={course}>{course}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           {errors.course && <p style={{ color: 'red', fontSize: '12px' }}>{errors.course}</p>}
//         </div>
//         <Stack direction="row" spacing={2} justifyContent="center">
//           <Button type="submit" variant="contained" color="primary">Register</Button>
//           <Button type="button" variant="outlined" color="secondary" onClick={handleCancel}>Cancel</Button>
//         </Stack>
//       </form>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   MenuItem,
//   Button,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Select,
//   InputLabel,
//   Card,
//   CardContent,
//   Stack,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Email, Person, Phone, Home } from "@mui/icons-material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#3f51b5", // Blue color for primary elements
//     },
//     secondary: {
//       main: "#f50057", // Pink color for secondary elements
//     },
//     error: {
//       main: "#f44336", // Red color for errors
//     },
//     background: {
//       default: "#f7f7f7", // Light background color
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", sans-serif',
//     h4: {
//       fontWeight: "bold",
//     },
//   },
// });

// function App() {
//   const [email, setEmail] = useState("");
//   const [invalidEmail, setInvalidEmail] = useState(false);

//   const [userName, setUserName] = useState("");
//   const [invalidUserName, setInvalidUserName] = useState(false);

//   const [dob, setDob] = useState("");
//   const [invalidDob, setInvalidDob] = useState(false);

//   const [gender, setGender] = useState("");
//   const [invalidGender, setInvalidGender] = useState(false);

//   const [course, setCourse] = useState("");
//   const [invalidCourse, setInvalidCourse] = useState(false);

//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [invalidPhoneNumber, setInvalidPhoneNumber] = useState(false);

//   const [address, setAddress] = useState("");
//   const [invalidAddress, setInvalidAddress] = useState(false);

//   const [emergencyContact, setEmergencyContact] = useState("");
//   const [invalidEmergencyContact, setInvalidEmergencyContact] = useState(false);

//   const [preferredContact, setPreferredContact] = useState("");
//   const [invalidPreferredContact, setInvalidPreferredContact] = useState(false);

//   const validateInput = (inputValue) => {
//     const { name, value } = inputValue;

//     if (name === "username") {
//       setUserName(value);
//       setInvalidUserName(!/^[a-zA-Z][a-zA-Z ]{2,19}$/.test(value));
//     } else if (name === "email") {
//       setEmail(value);
//       setInvalidEmail(
//         !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
//       );
//     } else if (name === "dob") {
//       setDob(value);
//       const currentDate = new Date();
//       const birthDate = new Date(value);
//       let age = currentDate.getFullYear() - birthDate.getFullYear();
//       const month = currentDate.getMonth();
//       if (
//         month < birthDate.getMonth() ||
//         (month === birthDate.getMonth() &&
//           currentDate.getDate() < birthDate.getDate())
//       ) {
//         age--;
//       }
//       setInvalidDob(age < 16);
//     } else if (name === "gender") {
//       setGender(value);
//       setInvalidGender(!value);
//     } else if (name === "course") {
//       setCourse(value);
//       setInvalidCourse(!value);
//     } else if (name === "phoneNumber") {
//       setPhoneNumber(value);
//       setInvalidPhoneNumber(!/^\d{10}$/.test(value));
//     } else if (name === "address") {
//       setAddress(value);
//       setInvalidAddress(!value.trim());
//     } else if (name === "emergencyContact") {
//       setEmergencyContact(value);
//       setInvalidEmergencyContact(!/^\d{10}$/.test(value));
//     } else if (name === "preferredContact") {
//       setPreferredContact(value);
//       setInvalidPreferredContact(!value);
//     }
//   };

//   const handleRegister = () => {
//     if (
//       !(
//         invalidEmail ||
//         invalidUserName ||
//         invalidDob ||
//         invalidGender ||
//         invalidCourse ||
//         invalidPhoneNumber ||
//         invalidAddress ||
//         invalidEmergencyContact ||
//         invalidPreferredContact
//       )
//     ) {
//       alert(
//         `Registration Successful!\nName: ${userName}\nDOB: ${dob}\nGender: ${gender}\nCourse: ${course}\nPhone: ${phoneNumber}\nEmail: ${email}\nAddress: ${address}`
//       );
//       clearForm();
//     } else {
//       alert("Please fix the highlighted errors before submitting.");
//     }
//   };

//   const clearForm = () => {
//     setEmail("");
//     setUserName("");
//     setDob("");
//     setGender("");
//     setCourse("");
//     setPhoneNumber("");
//     setAddress("");
//     setEmergencyContact("");
//     setPreferredContact("");

//     setInvalidEmail(false);
//     setInvalidUserName(false);
//     setInvalidDob(false);
//     setInvalidGender(false);
//     setInvalidCourse(false);
//     setInvalidPhoneNumber(false);
//     setInvalidAddress(false);
//     setInvalidEmergencyContact(false);
//     setInvalidPreferredContact(false);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth="sm" sx={{ mt: 4 }}>
//         <Card
//           sx={{
//             padding: 4,
//             borderRadius: 3,
//             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//             backgroundColor: "#fff",
//           }}
//         >
//           <CardContent>
//             <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 3 }}>
//               Student Registration
//             </Typography>
//             <Stack spacing={3}>
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 variant="outlined"
//                 name="username"
//                 value={userName}
//                 onChange={(e) => validateInput(e.target)}
//                 error={invalidUserName}
//                 helperText={invalidUserName ? "Invalid name. Use alphabets only." : ""}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Person />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <TextField
//                 fullWidth
//                 label="Date of Birth"
//                 variant="outlined"
//                 type="date"
//                 name="dob"
//                 value={dob}
//                 onChange={(e) => validateInput(e.target)}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 error={invalidDob}
//                 helperText={invalidDob ? "You must be at least 16 years old." : ""}
//               />
//               <FormControl fullWidth>
//                 <InputLabel>Course</InputLabel>
//                 <Select
//                   name="course"
//                   value={course}
//                   onChange={(e) => validateInput(e.target)}
//                   error={invalidCourse}
//                 >
//                   <MenuItem value="biology">Biology</MenuItem>
//                   <MenuItem value="computer-science">Computer Science</MenuItem>
//                   <MenuItem value="commerce">Commerce</MenuItem>
//                   <MenuItem value="humanities">Humanities</MenuItem>
//                 </Select>
//               </FormControl>
//               {invalidCourse && <Typography sx={{ color: "red", mt: 1 }}>Please select a course.</Typography>}

//               <FormControl>
//                 <FormLabel>Gender</FormLabel>
//                 <RadioGroup row name="gender" value={gender} onChange={(e) => validateInput(e.target)}>
//                   <FormControlLabel value="male" control={<Radio />} label="Male" />
//                   <FormControlLabel value="female" control={<Radio />} label="Female" />
//                   <FormControlLabel value="others" control={<Radio />} label="Others" />
//                 </RadioGroup>
//               </FormControl>
//               {invalidGender && <Typography sx={{ color: "red", mt: 1 }}>Please select your gender.</Typography>}

//               <TextField
//                 fullWidth
//                 label="Email Address"
//                 variant="outlined"
//                 name="email"
//                 value={email}
//                 onChange={(e) => validateInput(e.target)}
//                 error={invalidEmail}
//                 helperText={invalidEmail ? "Invalid email format." : ""}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Email />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <TextField
//                 fullWidth
//                 label="Phone Number"
//                 variant="outlined"
//                 name="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => validateInput(e.target)}
//                 error={invalidPhoneNumber}
//                 helperText={invalidPhoneNumber ? "Phone number must be 10 digits." : ""}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Phone />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <TextField
//                 fullWidth
//                 label="Address"
//                 variant="outlined"
//                 name="address"
//                 multiline
//                 rows={3}
//                 value={address}
//                 onChange={(e) => validateInput(e.target)}
//                 error={invalidAddress}
//                 helperText={invalidAddress ? "Address cannot be empty." : ""}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Home />
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <TextField
//                 fullWidth
//                 label="Emergency Contact"
//                 variant="outlined"
//                 name="emergencyContact"
//                 value={emergencyContact}
//                 onChange={(e) => validateInput(e.target)}
//                 error={invalidEmergencyContact}
//                 helperText={invalidEmergencyContact ? "Emergency contact must be 10 digits." : ""}
//               />

//               <FormControl fullWidth>
//                 <InputLabel>Preferred Contact Method</InputLabel>
//                 <Select
//                   name="preferredContact"
//                   value={preferredContact}
//                   onChange={(e) => validateInput(e.target)}
//                   error={invalidPreferredContact}
//                 >
//                   <MenuItem value="email">Email</MenuItem>
//                   <MenuItem value="phone">Phone</MenuItem>
//                 </Select>
//               </FormControl>
//               {invalidPreferredContact && <Typography sx={{ color: "red", mt: 1 }}>Please select a contact method.</Typography>}

//               <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   onClick={handleRegister}
//                   sx={{
//                     "&:hover": {
//                       backgroundColor: "#303f9f",
//                     },
//                   }}
//                 >
//                   Register
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   size="large"
//                   onClick={clearForm}
//                 >
//                   Clear
//                 </Button>
//               </Box>
//             </Stack>
//           </CardContent>
//         </Card>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default App;




import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Stack,
  InputAdornment,
  MenuItem,
  Select,
  Chip,
  Paper,
} from "@mui/material";
import { Email, Person, Phone, Home, CalendarToday } from "@mui/icons-material";

function App() {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [userName, setUserName] = useState("");
  const [invalidUserName, setInvalidUserName] = useState(false);
  const [dob, setDob] = useState("");
  const [invalidDob, setInvalidDob] = useState(false);
  const [gender, setGender] = useState("");
  const [invalidGender, setInvalidGender] = useState(false);
  const [course, setCourse] = useState(""); // Course field
  const [invalidCourse, setInvalidCourse] = useState(false); // Validation state for course
  const [phoneNumber, setPhoneNumber] = useState("");
  const [invalidPhoneNumber, setInvalidPhoneNumber] = useState(false);
  const [address, setAddress] = useState("");
  const [invalidAddress, setInvalidAddress] = useState(false);

  const courses = [
    "Biology",
    "Computer Science",
    "Commerce",
    "Humanities",
  ];

  const validateInput = (inputValue) => {
    const { name, value } = inputValue;

    if (name === "username") {
      setUserName(value);
      setInvalidUserName(!/^[a-zA-Z][a-zA-Z ]{2,19}$/.test(value));
    } else if (name === "email") {
      setEmail(value);
      setInvalidEmail(
        !/^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      );
    } else if (name === "dob") {
      setDob(value);
      const currentDate = new Date();
      const birthDate = new Date(value);
      let age = currentDate.getFullYear() - birthDate.getFullYear();
      const month = currentDate.getMonth();
      if (
        month < birthDate.getMonth() ||
        (month === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      setInvalidDob(age < 16);
    } else if (name === "gender") {
      setGender(value);
      setInvalidGender(!value);
    } else if (name === "course") {
      setCourse(value);
      setInvalidCourse(!value); // Set invalid if no course is selected
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
      setInvalidPhoneNumber(!/^\d{10}$/.test(value));
    } else if (name === "address") {
      setAddress(value);
      setInvalidAddress(!value.trim());
    }
  };

  const handleRegister = () => {
    // Check for missing fields before submission
    if (
      !userName ||
      !email ||
      !dob ||
      !gender ||
      !course ||
      !phoneNumber ||
      !address ||
      invalidEmail ||
      invalidUserName ||
      invalidDob ||
      invalidGender ||
      invalidCourse ||
      invalidPhoneNumber ||
      invalidAddress
    ) {
      alert("Please fill out all fields correctly before submitting.");
    } else {
      alert(
        `Registration Successful!\nName: ${userName}\nDOB: ${dob}\nGender: ${gender}\nCourse: ${course}\nPhone: ${phoneNumber}\nEmail: ${email}\nAddress: ${address}`
      );
      clearForm();
    }
  };

  const clearForm = () => {
    setEmail("");
    setUserName("");
    setDob("");
    setGender("");
    setCourse(""); // Reset course
    setPhoneNumber("");
    setAddress("");

    setInvalidEmail(false);
    setInvalidUserName(false);
    setInvalidDob(false);
    setInvalidGender(false);
    setInvalidCourse(false); // Reset course validation state
    setInvalidPhoneNumber(false);
    setInvalidAddress(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card
        sx={{
          padding: 4,
          borderRadius: 3,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          background: "linear-gradient(to right, #2b5876, #4e4376)", // Dark gradient
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}
          >
            Student Registration
          </Typography>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              name="username"
              value={userName}
              onChange={(e) => validateInput(e.target)}
              error={invalidUserName}
              helperText={
                invalidUserName ? "Invalid name. Use alphabets only." : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                style: { color: "#fff" }, // Text color in input box
              }}
              InputLabelProps={{
                style: { color: "#fff" }, // Label color
              }}
            />

            <TextField
              fullWidth
              label="Date of Birth"
              variant="outlined"
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => validateInput(e.target)}
              InputLabelProps={{
                shrink: true,
                style: { color: "#fff" }, // Label color
              }}
              error={invalidDob}
              helperText={invalidDob ? "You must be at least 16 years old." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                style: { color: "#fff" }, // Text color in input box
              }}
            />

            {/* Course field with improved look */}
            <FormControl fullWidth>
              <Typography sx={{ color: "#fff", marginBottom: 1 }}>
                Course
              </Typography>
              <Select
                value={course}
                onChange={(e) => validateInput(e.target)}
                name="course"
                error={invalidCourse}
                displayEmpty
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "4px",
                  padding: "10px",
                  '& .MuiSelect-icon': {
                    color: "#000",
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Select a Course
                </MenuItem>
                {courses.map((courseOption) => (
                  <MenuItem key={courseOption} value={courseOption}>
                    {courseOption}
                  </MenuItem>
                ))}
              </Select>
              {invalidCourse && (
                <Typography sx={{ color: "red", mt: 1 }}>
                  Please select a course.
                </Typography>
              )}
            </FormControl>

            <FormControl>
              <FormLabel sx={{ color: "#fff" }}>Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={gender}
                onChange={(e) => validateInput(e.target)}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="others"
                  control={<Radio />}
                  label="Others"
                />
              </RadioGroup>
            </FormControl>
            {invalidGender && (
              <Typography sx={{ color: "red", mt: 1 }}>
                Please select your gender.
              </Typography>
            )}

            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              name="email"
              value={email}
              onChange={(e) => validateInput(e.target)}
              error={invalidEmail}
              helperText={invalidEmail ? "Invalid email format." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                style: { color: "#fff" },
              }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
            />

            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => validateInput(e.target)}
              error={invalidPhoneNumber}
              helperText={
                invalidPhoneNumber ? "Phone number must be 10 digits." : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                style: { color: "#fff" },
              }}
            />

            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              name="address"
              multiline
              rows={3}
              value={address}
              onChange={(e) => validateInput(e.target)}
              error={invalidAddress}
              helperText={invalidAddress ? "Address cannot be empty." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Home sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                style: { color: "#fff" },
              }}
            />

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleRegister}
                sx={{
                  backgroundColor: "#007BFF", // Blue color
                  "&:hover": {
                    backgroundColor: "#0056b3", // Darker blue on hover
                  },
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Add some depth with shadow
                }}
              >
                Register
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={clearForm}
                sx={{
                  borderColor: "#007BFF", // Matching the button color
                  color: "#007BFF",
                  "&:hover": {
                    borderColor: "#0056b3", // Darker blue on hover
                    color: "#0056b3", // Text color changes on hover
                  },
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add some depth with shadow
                }}
              >
                Clear
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
      <Box sx={{ mb: 4 }} /> {/* Space outside the form */}
    </Container>
  );
}

export default App;
