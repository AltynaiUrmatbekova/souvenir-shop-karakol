import woolImage from "../assets/slipper.jpeg";
import woolslipperImage from "../assets/slippers.jpeg";
import woolslippersImage from "../assets/slipperss.jpeg";
import dandelionImage from "../assets/dandelion jam.jpeg";
import seabuckhornImage from "../assets/seabuckhorn jam.jpeg";
import calendulaImage from "../assets/calendula.jpeg";

const homemades = [
  {
    homemadeId: "wool",
    title: "Wool",
    image: woolImage,
    description:
      "Notably, the Inazuma Souvenir Shop does not open until you max out the Sacred Sakura Tree. Nearly all of your Electro Sigils will go toward upgrading the tree and getting tons of very worthwhile rewards from it. After you fully upgrade it, you can head over to the Inazuma Souvenir Shop, but it really only has some weapon enhancement material and furniture blueprints — nothing super interesting.",
  },
  {
    homemadeId: "woolslipper",
    title: "Wool slippers",
    image: woolslipperImage,
    description:
      "Notably, the Inazuma Souvenir Shop does not open until you max out the Sacred Sakura Tree. Nearly all of your Electro Sigils will go toward upgrading the tree and getting tons of very worthwhile rewards from it. After you fully upgrade it, you can head over to the Inazuma Souvenir Shop, but it really only has some weapon enhancement material and furniture blueprints — nothing super interesting.",
  },
  {
    homemadeId: "woolslippers",
    title: "Wool slipper",
    image: woolslippersImage,
    description:
      "Notably, the Inazuma Souvenir Shop does not open until you max out the Sacred Sakura Tree. Nearly all of your Electro Sigils will go toward upgrading the tree and getting tons of very worthwhile rewards from it. After you fully upgrade it, you can head over to the Inazuma Souvenir Shop, but it really only has some weapon enhancement material and furniture blueprints — nothing super interesting.",
  },
  {
    homemadeId: "dandelion",
    title: "Dandelion jam",
    image: dandelionImage,
    description:
      "Notably, the Inazuma Souvenir Shop does not open until you max out the Sacred Sakura Tree. Nearly all of your Electro Sigils will go toward upgrading the tree and getting tons of very worthwhile rewards from it. After you fully upgrade it, you can head over to the Inazuma Souvenir Shop, but it really only has some weapon enhancement material and furniture blueprints — nothing super interesting.",
  },
  {
    homemadeId: "seabuckhorn",
    title: "Seabuckhorn jam",
    image: seabuckhornImage,
    description:
      "Notably, the Inazuma Souvenir Shop does not open until you max out the Sacred Sakura Tree. Nearly all of your Electro Sigils will go toward upgrading the tree and getting tons of very worthwhile rewards from it. After you fully upgrade it, you can head over to the Inazuma Souvenir Shop, but it really only has some weapon enhancement material and furniture blueprints — nothing super interesting.",
  },
  {
    homemadeId: "calendula",
    title: "Calendula",
    image: calendulaImage,
    description:
      "Notably, the Inazuma Souvenir Shop does not open until you max out the Sacred Sakura Tree. Nearly all of your Electro Sigils will go toward upgrading the tree and getting tons of very worthwhile rewards from it. After you fully upgrade it, you can head over to the Inazuma Souvenir Shop, but it really only has some weapon enhancement material and furniture blueprints — nothing super interesting.",
  },
];

export function getHomemades() {
  return homemades;
}

export function getHomemade(homemadeId) {
  return homemadeId[
    homemades.findIndex((homemade) => homemade.homemadeId === homemadeId)
  ];
}
