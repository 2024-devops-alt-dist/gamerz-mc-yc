import { User } from "../schema/Users";

export async function seedUsers() {
  await User.create(
    {
      pseudo: "Yaël",
      email: "yaya@mail.fr",
      password: "password",
      isAccepted: false,
      openToPlay: false,
    },
    {
      pseudo: "Maëva",
      email: "maev@mail.fr",
      password: "password",
      isAccepted: false,
      openToPlay: false,
    }
  );
  console.log("Utilisateurs ajoutés !");
  const userFound = await User.findOne({ pseudo: "Yaël" }).exec();
  console.log("utilisateur trouvé:", userFound);
}
