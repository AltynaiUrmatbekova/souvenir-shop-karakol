import giftImage from "../assets/gift.webp";
import naturalImage from "../assets/key.jpg";
import accessoriesImage from "../assets/access.jpg";
import woolImage from "../assets/tree.jpg";
import woolImage2 from "../assets/bear.jpg";
import woolImage3 from "../assets/bird.jpg";

const categories = [
  {
    categoryId: "gift",
    title: "Gifts",
    image: giftImage,
    description:
      "Notably, the Inazuma Souvenir Shop does not open until you max out the Sacred Sakura Tree. Nearly all of your Electro Sigils will go toward upgrading the tree and getting tons of very worthwhile rewards from it. After you fully upgrade it, you can head over to the Inazuma Souvenir Shop, but it really only has some weapon enhancement material and furniture blueprints — nothing super interesting.",
  },
  {
    categoryId: "natural",
    title: "Natural",
    image: naturalImage,
    description:
      "Notably, the Inazuma Souvenir Shop does not open until you max out the Sacred Sakura Tree. Nearly all of your Electro Sigils will go toward upgrading the tree and getting tons of very worthwhile rewards from it. After you fully upgrade it, you can head over to the Inazuma Souvenir Shop, but it really only has some weapon enhancement material and furniture blueprints — nothing super interesting.",
  },
  {
    categoryId: "accessories",
    title: "Accessories",
    image: accessoriesImage,
    description:
      "Notably, the Inazuma Souvenir Shop does not open until you max out the Sacred Sakura Tree. Nearly all of your Electro Sigils will go toward upgrading the tree and getting tons of very worthwhile rewards from it. After you fully upgrade it, you can head over to the Inazuma Souvenir Shop, but it really only has some weapon enhancement material and furniture blueprints — nothing super interesting.",
  },
  {
    categoryId: "natural1",
    title: "Christmas tree",
    image: woolImage,
    description: `Honey is a sweet, viscous food substance made by honey bees and some other bees.[1][2] Bees produce honey from the sugary secretions of plants (floral nectar) or from secretions of other insects (such as honeydew), by regurgitation, enzymatic activity, and water evaporation. Honey bees store honey in wax structures called honeycombs, whereas stingless bees store honey in pots made of wax and resin.`,
    price: 15,
  },
  {
    categoryId: "natural2",
    title: "White bear toy",
    image: woolImage2,
    description: `he variety of honey produced by honey bees (the genus Apis) is the best-known, due to its worldwide commercial production and human consumption.[4] Honey is collected from wild bee colonies, or from hives of domesticated bees, a practice known as beekeeping or apiculture (meliponiculture in the case of stingless bees)`,
    price: 11,
  },
  {
    categoryId: "bird",
    title: "Bird",
    image: woolImage3,
    description: `Honey is produced by bees collecting nectar and honeydew for use as sugars consumed to support metabolism of muscle activity during foraging or to be stored as a long-term food supply.[14][15] During foraging, bees use part of the nectar collected to support metabolic activity of flight muscles, with the majority of collected nectar destined for regurgitation, digestion, and storage as honey.[14][16] In cold weather or when other food sources are scarce, adult and larval bees use stored honey as food.`,
    price: 12,
  },
];
export function getCategories() {
  return categories;
}
export function getCategory(categoryId) {
  return categories[
    categories.findIndex((category) => category.categoryId === categoryId)
  ];
}
