"use client";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { House, Check, X } from "lucide-react";

// import { useEffect, useState } from "react";
// import { categoryColors, categoryIcons } from "@/components/data";
// import { Toaster } from "@/components/ui/sonner";
// import { toast } from "sonner";

export default function Home() {
  // const [categories, setCategories] = useState([]);
  // const [open, setOpen] = useState(false);  
  // const [icon, setIcon] = useState("house");
  // const [name, setName] = useState("");
  // const [color, setColor] = useState("blue");
  // const [loading, setLoading] = useState(false);
  // const [editingCategory, setEditingCategory] = useState();

  // const loadList = () => {
  //   fetch("http://localhost:4000/categories")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCategories(data);
  //     });
  // };

  // useEffect(() => {
  //   loadList();
  // }, []);

  // // create
  // const createNew = () => {
  //   setLoading(true);

  //   // const {name, icon, color} = prompt("Name...");
  //   fetch(`http://localhost:4000/categories`, {
  //     method: "POST",
  //     body: JSON.stringify({ name: name, color: color, icon: icon }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then(() => {
  //       loadList();
  //       setLoading(false);
  //       toast("Successfully created.");
  //     });
  // };

  // // update
  // const updateCategory = () => {
  //   setLoading(true);

  //   // const {name, icon, color} = prompt("Name...");
  //   fetch(`http://localhost:4000/categories/${editingCategory.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ name: name, color: color, icon: icon }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then(() => {
  //       loadList();
  //       setLoading(false);
  //       closeDialog
  //       toast("Successfully updated.");
  //     });
  // };

  // // delete
  // const deleteTask = (id) => {
  //   fetch(`http://localhost:4000/categories/${id}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.status === 404) {
  //       alert("Category not found!");
  //     }
  //     loadList();
  //   });
  // };

  // const reset = () => {
  //   setName("");
  //   setColor("blue");
  //   setIcon("house")
  //   setEditingCategory(null)
  // }

  // const closeDialog = () => {
  //   reset();
  //   setOpen(false)
  // }

  // useEffect(() => {
  //   if (editingCategory) {
  //     setOpen(true);
  //     setName(editingCategory.name);
  //     setIcon(editingCategory.icon);
  //     setColor(editingCategory.color);
  //   }
  // }, [editingCategory]);

  return (
    <main className="container mx-auto ">
      {/* <Toaster />
      <Button variant="secondary" onClick={() => {reset(); setOpen(true)}}>
        Adddd
      </Button> */}

      {/* <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px] rounded-lg">
          <DialogHeader>
            <div className="flex justify-between">
              <DialogTitle>Add Category</DialogTitle>
              <X onClick={closeDialog} className="w-5 h-5" />
            </div>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <hr />
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">
                  <CategoryIcon IconName={icon} color={color}/>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-6">
                <div className="grid grid-cols-6 gap-6 px-6">
                  {categoryIcons.map(({ name, Icon }) => (
                    <div
                      onClick={() => setIcon(name)}
                      key={name}
                      className={`grid items-center justify-center px-4 py-1 rounded-lg ${
                        icon === name ? "bg-slate-300" : ""
                      }`}
                    >
                      <Icon />
                    </div>
                  ))}
                </div>
                <hr />
                <div className="grid grid-cols-7 gap-x-4">
                  {categoryColors.map(({ name, value }) => (
                    <div
                      onClick={() => setColor(name)}
                      key={name}
                      className="w-8 h-8 rounded-full text-white flex items-center justify-center "
                      style={{ backgroundColor: value }}
                    >
                      {color === name && <Check className="w-4 h-4" />}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Input
              disabled={loading}
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 text-slate-400"
            />
          </div>

          <DialogFooter>
            {editingCategory ? (
              <Button disabled={loading} onClick={updateCategory} className="w-full rounded-full">Update</Button>
            ) : (
              <Button disabled={loading} onClick={createNew} className="w-full rounded-full">Save changes</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog> */}

      {/* <button className="w-full" onClick={createNew}>
        Add New
      </button> */}

      {/* {categories.map((category) => (
        <div key={category.name} className="flex gap-4">
          <CategoryIcon IconName={category.icon} color={category.color} />
          {category.name}
          <button onClick={() => deleteTask(category.id)}>delete</button>
          <button onClick={() => setEditingCategory(category)}>edit</button>
        </div>
      ))} */}
      aaaaaa
    </main>
  );
}

// const CategoryIcon = ({ IconName, color }) => {
//   // console.log({name})
//   const iconObject = categoryIcons.find((item) => item.name === IconName);
//   const colorObject = categoryColors.find((item) => item.name === color);
//   // console.log({iconObject})

//   if (!iconObject) {
//     return <House />;
//   }

//   let hexColor;
//   if (!colorObject) {
//     hexColor = "#0000";
//   } else {
//     hexColor = colorObject.value;
//   }
//   const { Icon } = iconObject;
//   return <Icon style={{ color: hexColor }} />;
// };
