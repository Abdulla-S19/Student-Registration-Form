import React, { useState } from "react";
import {Box,Container,Typography,TextField,Button,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,Card,
CardContent,Stack,InputAdornment,MenuItem,Select} from "@mui/material";
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
  const [course, setCourse] = useState(""); 
  const [invalidCourse, setInvalidCourse] = useState(false); 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [invalidPhoneNumber, setInvalidPhoneNumber] = useState(false);
  const [address, setAddress] = useState("");
  const [invalidAddress, setInvalidAddress] = useState(false);

  const courses = ["Biology", "Computer Science", "Commerce", "Humanities"];

  const validateInput = (inputValue) => {
    const { name, value } = inputValue;

    if (name === "username") {
      setUserName(value);
      setInvalidUserName(!/^[a-zA-Z][a-zA-Z ]{2,19}$/.test(value));
    } else if (name === "email") {
      setEmail(value);
      setInvalidEmail(
        !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)
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
      setInvalidCourse(!value); 
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
      setInvalidPhoneNumber(!/^\d{10}$/.test(value));
    } else if (name === "address") {
      setAddress(value);
      setInvalidAddress(!value.trim());
    }
  };

  const handleRegister = () => {
    if (!userName || !email || !dob || !gender || !course || !phoneNumber || !address || invalidEmail ||
      invalidUserName || invalidDob || invalidGender || invalidCourse || invalidPhoneNumber || invalidAddress
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
    setCourse(""); 
    setPhoneNumber("");
    setAddress("");

    setInvalidEmail(false);
    setInvalidUserName(false);
    setInvalidDob(false);
    setInvalidGender(false);
    setInvalidCourse(false); 
    setInvalidPhoneNumber(false);
    setInvalidAddress(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card
        sx={{padding: 4, borderRadius: 3, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)", background: "linear-gradient(to right, #2b5876, #4e4376)", 
        }}
      >
        <CardContent>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}
          >
            Student Registration
          </Typography>
          <Stack spacing={3}>
            <TextField fullWidth label="Full Name" variant="outlined" name="username" value={userName}
              onChange={(e) => validateInput(e.target)} error={invalidUserName}
              helperText={
                invalidUserName ? "Invalid name. Use alphabets only." : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                style: { color: "#fff" }, 
              }}
              InputLabelProps={{
                style: { color: "#fff" }, 
              }}
            />

            <TextField fullWidth label="Date of Birth" variant="outlined" type="date" name="dob"
              value={dob} onChange={(e) => validateInput(e.target)}
              InputLabelProps={{
                shrink: true,
                style: { color: "#fff" }, 
              }}
              error={invalidDob}
              helperText={invalidDob ? "You must be at least 16 years old." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                style: { color: "#fff" }, 
              }}
            />

            
            <FormControl fullWidth>
              <Typography sx={{ color: "#fff", marginBottom: 1 }}>
                Course
              </Typography>
              <Select value={course} onChange={(e) => validateInput(e.target)} name="course" error={invalidCourse}
                displayEmpty sx={{ backgroundColor: "#fff",color: "#000",borderRadius: "4px",padding: "10px",
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
              <RadioGroup row name="gender" value={gender} onChange={(e) => validateInput(e.target)}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="others" control={<Radio />} label="Others" />
              </RadioGroup>
            </FormControl>
            {invalidGender && (
              <Typography sx={{ color: "red", mt: 1 }}>
                Please select your gender.
              </Typography>
            )}

            <TextField fullWidth label="Email Address" variant="outlined" name="email" value={email} onChange={(e) => validateInput(e.target)} error={invalidEmail} helperText={invalidEmail ? "Invalid email format." : ""}
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

            <TextField fullWidth label="Phone Number" variant="outlined" name="phoneNumber" value={phoneNumber} onChange={(e) => validateInput(e.target)} error={invalidPhoneNumber}
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
              fullWidth label="Address" variant="outlined" name="address" multiline rows={3} value={address}
              onChange={(e) => validateInput(e.target)} error={invalidAddress} Text={invalidAddress ? "Address cannot be empty." : ""}
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
              <Button variant="contained" color="primary" size="large" onClick={handleRegister} sx={{
                  backgroundColor: "#007BFF", 
                  "&:hover": {
                    backgroundColor: "#0056b3", 
                  },
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", 
                }}
              >
                Register
              </Button>
              <Button variant="outlined" color="secondary" size="large" onClick={clearForm} sx={{
                  borderColor: "#007BFF", 
                  color: "#007BFF",
                  "&:hover": {
                    borderColor: "#0056b3", 
                    color: "#0056b3", 
                  },
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
                }}
              >
                Clear
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
      <Box sx={{ mb: 4 }} /> 
    </Container>
  );
}

export default App;
