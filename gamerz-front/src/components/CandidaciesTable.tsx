import { useState } from "react";
import { Candidacy } from "../models/UserModel";
import { updateUserStatus, useGetCandidacies } from "../services/adminService";

function CandidaciesTable() {
  const [refreshKey, setRefreshKey] = useState(0); // Clé pour forcer la mise à jour
  const { data, loading, error } = useGetCandidacies<Candidacy[]>([refreshKey]); // Ajout de refreshKey comme dépendance

  const resolveStatus = async (userId: string, newStatus: string) => {
    console.log("user :", userId, newStatus);
    let isAccepted: boolean;
    if (newStatus === "validated") {
      isAccepted = true;
    } else if (newStatus === "cancelled") {
      isAccepted = false;
    } else {
      isAccepted = false;
    }
    await updateUserStatus(userId, isAccepted, newStatus);
    setRefreshKey((prevKey) => prevKey + 1); // Incrémente refreshKey pour rafraîchir les données
  };

  console.log(data)

  if (loading)
    return (
      <div className="container min-w-full mx-auto mt-20 px-10 py-14 italic text-center border text-lg">
        Chargement ...
      </div>
    );
  if (error)
    return (
      <div className="container min-w-full mx-auto mt-20 px-10 py-14 text-red-600 italic text-center text-lg border">
        {error}
      </div>
    );

  return (
    <>
      <div className="card overflow-x-auto bg-base-200 border border-base-300 px-10 pb-8">
        <div className="p-10 mb-4">
          <h3>Liste des demandes reçues</h3>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Pseudo</th>
              <th>Email</th>
              <th>Status</th>
              <th>Motivation</th>
              <th>Registration Date</th>
              <th></th>
            </tr>
          </thead>

          {data?.map((candidacy) => (
            <tbody key={candidacy.id}>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{candidacy.pseudo}</div>
                    </div>
                  </div>
                </td>
                <td>{candidacy.email}</td>
                <td>{candidacy.status}</td>
                <td className="text-secondary break-all">{candidacy.motivation}</td>
                <td>
                  {candidacy.createdAt
                    ? new Date(candidacy.createdAt).toLocaleDateString()
                    : "—"}
                </td>
                <td>
                  <select
                    defaultValue="Resolve"
                    onChange={(e) => resolveStatus(candidacy.id, e.target.value)}
                    className="select select-ghost w-max"
                  >
                    <option disabled={true}>Resolve</option>
                    <option value="validated">Approve</option>
                    <option value="cancelled">Cancel</option>
                  </select>
                </td>
              </tr>
            </tbody>
          ))}

        </table>
      </div>
    </>
  );
}

export default CandidaciesTable;