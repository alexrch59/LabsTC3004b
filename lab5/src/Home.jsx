import { Typography } from "@mui/material";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("authUser") || "null");

  return (
    <div>
      {user ? (
        <Typography variant="h4">Bienvenido a la Home, Usuario</Typography>
      ) : null}
    </div>
  );
}