import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Mohon login terlebih dahulu.</p>;

  if (user.role === "admin") return <h2>Admin Dashboard</h2>;
  if (user.role === "superadmin") return <h2>SuperAdmin Dashboard</h2>;
  if (user.role === "reseller") return <h2>Reseller Dashboard</h2>;

  return <p>User tidak punya akses ke dashboard. Silakan gunakan fitur toko.</p>;
}
