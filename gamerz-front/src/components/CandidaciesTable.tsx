import { Candidacy } from "../models/UserModel"
import { useGetCandidacies } from "../services/adminService"


function CandidaciesTable() {

    const ENDPOINT = "/candidacies"
    const { data, loading, error } = useGetCandidacies<Candidacy[]>(ENDPOINT)


    console.log(data)
    if (loading) return <div className="container min-w-full mx-auto mt-20 px-10 py-14 italic text-center border text-lg">Chargement ...</div>
    if (error) return <div className="container min-w-full mx-auto mt-20 px-10 py-14 text-red-600 italic text-center text-lg border">{error}</div>

    return (
        <>
            <div className="card overflow-x-auto bg-base-200 border border-base-300 px-10 pb-8">
                <div className="p-10 mb-4">
                    <h3>Liste des demandes reçues</h3>
                </div>

                <table className="table">

                    {/* head */}
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

                        <tbody key={candidacy.email}>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{candidacy.pseudo}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {candidacy.email}
                                </td>
                                <td>{candidacy.status}</td>
                                <td className="text-primary-content break-all">{candidacy.motivation}</td>
                                <td>  {candidacy.createdAt
                                    ? new Date(candidacy.createdAt).toLocaleDateString()
                                    : '—'}</td>

                                {/* Bouton Select ici */}
                                <td>
                                    <select defaultValue="Resolve" className="select select-ghost w-max">
                                        <option disabled={true}>Resolve</option>
                                        <option>Validate</option>
                                        <option>Cancel</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>

                    ))}


                </table>
            </div>
        </>
    )
}

export default CandidaciesTable