import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL;

export function useGetCandidacies<T>(ENDPOINT_URL : string) {
  // Retourne les données récupérées
  const [data, setData] = useState<T | null>(null);
  // Gestion du chargement = booléen pour savoir si les données sont entrain d'être chargées ou non
  const [loading, setLoading] = useState<boolean>(true);
  // Gestion des erreurs = Permettra d'afficher un message d'erreur
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await axios.get<T>(API + ENDPOINT_URL);
        setData(response.data);
      } catch (err) {
        console.log(err);
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
