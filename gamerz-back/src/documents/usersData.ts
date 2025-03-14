import { User } from "../schema/Users";

export async function seedUsers() {
  await User.create(
    {
      pseudo: "Yaël",
      email: "yaya@mail.fr",
      password: "password",
      isAdmin: true,
      isAccepted: false,
      openToPlay: false,
      motivation: "Ce salon a l'air trop bien, laissez moi entrer svp !!!"
    },
    {
      pseudo: "Maëva",
      email: "maev@mail.fr",
      password: "password",
      isAdmin: false,
      isAccepted: false,
      openToPlay: false,
      motivation: "Je vous saurais gré de bien vouloir m'accepter dans le salon de communication."
    }
  );
  console.log("Utilisateurs ajoutés !");
  const userFound = await User.findOne({ pseudo: "Yaël" }).exec();
  console.log("utilisateur trouvé:", userFound);
}
