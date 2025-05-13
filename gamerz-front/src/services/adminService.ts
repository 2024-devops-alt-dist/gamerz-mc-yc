import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL;

export function useGetCandidacies<T>(dependencies: unknown[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const candidaciesEndpoint = API + "/candidacies";
        const response: AxiosResponse = await axios.get<T>(candidaciesEndpoint, {
          withCredentials: true
        });
        setData(response.data);
      } catch (err) {
        console.log(err);
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
}

export async function updateUserStatus(userId: string, isAccepted: boolean, status: string) {
  try {
    const response =  await axios.put(`${API}/users/${userId}/status`, {isAccepted, status}, { withCredentials: true })
    return response.data

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.message)
    throw new Error("Erreur lors du changement de status de l'utilisateur")
}
}
