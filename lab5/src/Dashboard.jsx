import { Typography } from "@mui/material";
export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("authUser") || "null");
  return (
    <div>
      {user ? (
        <Typography variant="h4">Bienvenido a tu dashboard Usuario</Typography>
      ) : null}
    </div>
  );
}