import {
    Angry,
    Annoyed,
    Aperture,
    Atom,
    Award,
    Axe,
    BadgeDollarSign,
    Bell,
    Bird,
    Bluetooth,
    BookHeart,
    BusFront,
    Candy,
    Cat,
    Contact,
    Dog,
    FishOff,
    House,
    HousePlus,
    LockKeyholeOpen,
    PawPrint,
    Rabbit,
    Snail,
    Turtle,
  } from "lucide-react";

export const categoryIcons = [
    { name: "house", Icon: House },
    { name: "housePlus", Icon: HousePlus },
    { name: "contact", Icon: Contact },
    { name: "atom", Icon: Atom },
    { name: "badgeDollarSign", Icon: BadgeDollarSign },
    { name: "axe", Icon: Axe },
    { name: "bell", Icon: Bell },
    { name: "award", Icon: Award },
    { name: "aperture", Icon: Aperture },
    { name: "angry", Icon: Angry },
    { name: "annoyed", Icon: Annoyed },
    { name: "bluetooth", Icon: Bluetooth },
    { name: "bookHeart", Icon: BookHeart },
    { name: "busFront", Icon: BusFront },
    { name: "candy", Icon: Candy },
    { name: "cat", Icon: Cat },
    { name: "dog", Icon: Dog },
    { name: "fishOff", Icon: FishOff },
    { name: "rabbit", Icon: Rabbit },
    { name: "snail", Icon: Snail },
    { name: "turtle", Icon: Turtle },
    { name: "bird", Icon: Bird },
    { name: "pawPrint", Icon: PawPrint },
    { name: "lockKeyholeOpen", Icon: LockKeyholeOpen },
];
  
export const categoryColors = [
    { name: "blue", value: "#0166FF" },
    { name: "sky", value: "#01B3FF" },
    { name: "green", value: "#41CC00" },
    { name: "yellow", value: "#F9D100" },
    { name: "orange", value: "#FF7B01" },
    { name: "pink", value: "#AE01FF" },
    { name: "red", value: "#FF0101" },
];

export const CategoryIcon = ({ IconName, color }) => {
    // console.log({name})
    const iconObject = categoryIcons.find((item) => item.name === IconName);
    const colorObject = categoryColors.find((item) => item.name === color);
    // console.log({iconObject})
  
    if (!iconObject) {
      return <House />;
    }
  
    let hexColor;
    if (!colorObject) {
      hexColor = "#0000";
    } else {
      hexColor = colorObject.value;
    }
    const { Icon } = iconObject;
    return <Icon style={{ color: hexColor }} />;
};

export default CategoryIcon;