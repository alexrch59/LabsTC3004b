import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("admin@demo.com");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "ejemplo@gmail.com" && password === "123456") {
      localStorage.setItem("authUser", JSON.stringify({ email }));
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 3, mt: 5 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Ingresar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}