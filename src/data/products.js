import productImage from "../assets/honey.jpeg";
import productImage2 from "../assets/dandelion.jpeg";
import productImage3 from "../assets/pine.jpeg";
import productImage4 from "../assets/slippers.jpeg";
import productImage5 from "../assets/wool bag.jpeg";
import productImage6 from "../assets/cream.jpeg";

const products = [
  {
    image: productImage,
    productId: "white-honey",
    title: "White honey",
    description: `Honey is a sweet, viscous food substance made by honey bees and some other bees.[1][2] Bees produce honey from the sugary secretions of plants (floral nectar) or from secretions of other insects (such as honeydew), by regurgitation, enzymatic activity, and water evaporation. Honey bees store honey in wax structures called honeycombs, whereas stingless bees store honey in pots made of wax and resin.`,
    price: 15,
  },
  {
    image: productImage2,
    productId: "mountain-honey",
    title: "Mountain-honey",
    description: `he variety of honey produced by honey bees (the genus Apis) is the best-known, due to its worldwide commercial production and human consumption.[4] Honey is collected from wild bee colonies, or from hives of domesticated bees, a practice known as beekeeping or apiculture (meliponiculture in the case of stingless bees)`,
    price: 11,
  },
  {
    image: productImage3,
    productId: "pine-cone-jam",
    title: "Pine cone jam",
    description: `Honey is produced by bees collecting nectar and honeydew for use as sugars consumed to support metabolism of muscle activity during foraging or to be stored as a long-term food supply.[14][15] During foraging, bees use part of the nectar collected to support metabolic activity of flight muscles, with the majority of collected nectar destined for regurgitation, digestion, and storage as honey.[14][16] In cold weather or when other food sources are scarce, adult and larval bees use stored honey as food.`,
    price: 12,
  },
  {
    image: productImage4,
    productId: "slippers",
    title: "Slippers",
    description: `Honey is collected from wild bee colonies or from domesticated beehives. On average, a hive will produce about 29 kilograms (65 lb) of honey per year.[24] Wild bee nests are sometimes located by following a honeyguide bird.

    To safely collect honey from a hive, beekeepers typically pacify the bees using a bee smoker. The smoke triggers a feeding instinct (an attempt to save the resources of the hive from a possible fire), making them less aggressive, and obscures the pheromones the bees use to communicate. The honeycomb is removed from the hive and the honey may be extracted from it either by crushing or by using a honey extractor. The honey is then usually filtered to remove beeswax and other debris..`,
    price: 10,
  },
  {
    image: productImage5,
    productId: "wool-bag",
    title: "Wool bag",
    description: `Honey is sometimes adulterated by the addition of other sugars, syrups, or compounds to change its flavor or viscosity, reduce cost, or increase the fructose content to stave off crystallization. Adulteration of honey has been practiced since ancient times, when honey was sometimes blended with plant syrups such as maple, birch, or sorghum and sold to customers as pure honey. Sometimes crystallized honey was mixed with flour or other fillers, hiding the adulteration from buyers until the honey was liquefied. In modern times the most common adulterant became clear, almost-flavorless corn syrup; the adulterated mixture can be very difficult to distinguish from pure honey.`,
    price: 8,
  },
  {
    image: productImage6,
    productId: "cream",
    title: "Natural cream",
    description: `The physical properties of honey vary, depending on water content, the type of flora used to produce it (pasturage), temperature, and the proportion of the specific sugars it contains. Fresh honey is a supersaturated liquid, containing more sugar than the water can typically dissolve at ambient temperatures. At room temperature, honey is a supercooled liquid, in which the glucose precipitates into solid granules. This forms a semisolid solution of precipitated glucose crystals in a solution of fructose and other ingredients.`,
    price: 12,
  }
];

export function getProducts() {
  return products;
}


export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}