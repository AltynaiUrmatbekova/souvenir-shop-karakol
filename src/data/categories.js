import giftImage from "../assets/gift.webp";
import naturalImage from "../assets/key.jpg";
import accessoriesImage from "../assets/access.jpg";

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
];
export function getCategories() {
  return categories;
}
export function getCategory(categoryId) {
  return categories[
    categories.findIndex((category) => category.categoryId === categoryId)
  ];
}
