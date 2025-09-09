import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { SuperAdminHome } from "./SuperAdminHome";
import { AdminHome } from "./AdminHome";
import { ResellerHome } from "./ResellerHome";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  if (!user) return null; 

  switch (user.role) {
    case "ADMIN":
      return <AdminHome />;
    case "SUPERADMIN":
      return <SuperAdminHome />;
    case "RESELLER":
      return <ResellerHome />;
    default:
      return <div>Akses ditolak</div>;
  }
}
