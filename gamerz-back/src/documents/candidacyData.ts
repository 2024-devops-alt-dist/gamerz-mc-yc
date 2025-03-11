import { Candidacy } from "../schema/Candidacy";

export async function seedCandidacy() {
    await Candidacy.create(
        {
            motivation: "Jveu tro joué av vous sa a lère tro bi1 stp accept",
            status: "pending",
            user: "67d031702d2fc5f193185e67"
        },
        {
            motivation: "Mes Salutations, pourrais-je rejoindre ce merveilleux salon sur mon jeu favori: fortnite ? Je vous en saurais très reconnaissant. Mes Salutions distinguées.",
            status: "validated",
            user: "67d031aa2fd95a749e0988d6"
        }
    );
    console.log("Candidatures créées!");
    console.log(await Candidacy.findOne({ status: "validated"}).exec());
}