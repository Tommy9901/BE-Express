"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
  Check,
} from "lucide-react";

import { useEffect, useState } from "react";

const categoryIcon = [
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

const categoryColor = [
  { name: "blue", value: "#0166FF" },
  { name: "sky", value: "#01B3FF" },
  { name: "green", value: "#41CC00" },
  { name: "yellow", value: "#F9D100" },
  { name: "orange", value: "#FF7B01" },
  { name: "pink", value: "#AE01FF" },
  { name: "red", value: "#FF0101" },
];

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");

  const loadList = () => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  };

  useEffect(() => {
    loadList();
  }, []);

  // create
  const createNew = () => {
    const name = prompt("Name...");
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  };

  // delete
  const deleteTask = (id) => {
    fetch(`http://localhost:4000/categories/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 404) {
        alert("Category not found!");
      }
      loadList();
    });
  };

  const updateTask = (id) => {
    fetch(`http://localhost:4000/categories/${id}, ${update}`, {
      method: "PUT",
    }).then((res) => {
      if (res.status === 404) {
        alert("Category not found!");
      }
      loadList();
    });
  };
  console.log({ color });

  return (
    <main className="container mx-auto">
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Adddd
      </Button>

      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
          </DialogHeader>
          <hr />
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger>
                <Button variant="secondary">
                  <House />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-6">
                <div className="grid grid-cols-6 gap-6 px-6">
                  {categoryIcon.map(({ name, Icon }) => (
                    <div key={name}>
                      <Icon />
                    </div>
                  ))}
                </div>
                <hr />
                <div className="grid grid-cols-7 gap-x-4">
                  {categoryColor.map(({ name, value }) => (
                    <div
                      onClick={() => setColor(name)}
                      key={name}
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: value }}
                    >
                      {color === name && <Check />}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <Button onClick={() => setOpen(false)}>close</Button>
          <DialogFooter>
            <Button className="w-full rounded-full">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <button className="w-full" onClick={createNew}>
        Add New
      </button>

      {categories.map((category) => (
        <div key={category.name}>
          {category.name}
          <button onClick={() => deleteTask(category.id)}>delete</button>
          <button onClick={updateTask}>edit</button>
        </div>
      ))}
    </main>
  );
}
