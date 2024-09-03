"use client"

// import * as React from "react"
// import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
// import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"


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
  import { CalendarIcon, Check, Plus, X } from "lucide-react";
  
  
  import CategoryIcon, { categoryColors, categoryIcons } from "@/components/data";
  import { Toaster } from "@/components/ui/sonner";
  import { toast } from "sonner";

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider" 

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useEffect, useState } from "react";

export const Record = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);  
  const [icon, setIcon] = useState("house");
  const [name, setName] = useState("");
  const [color, setColor] = useState("blue");
  const [loading, setLoading] = useState(false);
  const [editingCategory, setEditingCategory] = useState();

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
    setLoading(true);

    // const {name, icon, color} = prompt("Name...");
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({ name: name, color: color, icon: icon }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        loadList();
        setLoading(false);
        closeDialog();
        toast("Successfully created.");
      });
  };

  // update
  const updateCategory = () => {
    setLoading(true);

    fetch(`http://localhost:4000/categories/${editingCategory.id}`, {
      method: "PUT",
      body: JSON.stringify({ name: name, color: color, icon: icon }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        loadList();
        setLoading(false);
        closeDialog();
        toast("Successfully updated.");
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

  const reset = () => {
    setName("");
    setColor("blue");
    setIcon("house")
    setEditingCategory(null)
  }

  const closeDialog = () => {
    reset();
    setOpen(false)
  }

  useEffect(() => {
    if (editingCategory) {
      setOpen(true);
      setName(editingCategory.name);
      setIcon(editingCategory.icon);
      setColor(editingCategory.color);
    }
  }, [editingCategory]);

    return(
        <main className="flex gap-6">

            <Toaster />
            

            <Dialog open={open}>
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
            </Dialog>




            <div className="flex flex-col gap-6 my-6 mx-4 max-w-[282px]">
                <div>
                    <div className="text-2xl font-semibold mb-6  ">Records</div>
                    <Button variant="secondary"  className="px-[98.5px] py-1 bg-[#0166FF] rounded-full text-white">
                        <Plus />
                        <span className="ml-2">Add</span>
                    </Button>
                </div>
                <div>
                    <Input type="search" placeholder="Search" />
                </div>
                <div>
                    <div className="text-base font-semibold mb-4">Types</div>
                    <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">All</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label htmlFor="r2">Income</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">Expence</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div>
                    <div className="flex justify-between mb-4">
                        <div className="text-base font-semibold">Category</div>
                        <div className="text-base font-normal text-slate-200">Clear</div>
                    </div>

                    <div className="flex flex-col gap-2">
                        {categories.map((category) => (
                            <div key={category.name} className="flex gap-1">
                                <CategoryIcon IconName={category.icon} color={category.color} />
                                {category.name}
                                <Button onClick={() => deleteTask(category.id)}>delete</Button>
                                <Button onClick={() => setEditingCategory(category)}>edit</Button>
                            </div>
                        ))}
                        <Button onClick={() => {reset(); setOpen(true)}} className=" px-3 py-1 max-w-[150px]">
                            <Plus />
                            <span className=" ml-2">Add Category</span>
                        </Button>
                    </div>
                </div>
                <div>
                    <div className="text-base font-semibold mb-4">Amount Range</div>
                    <div className="max-w-[254px]">
                        <div className="flex gap-4">
                            <Input type="input" />
                            <Input type="input" />
                        </div>
                        <div className="mt-6">
                            <Slider
                                defaultValue={[50]}
                                max={100}
                                step={1}
                                className={cn("w-[100%]", /*className*/)}
                                // {...props}
                            />
                        </div>
                    </div>
                </div>
            </div>  

            {/* body */}

            <div className="w-full">
                <div className="flex justify-between">
                    <div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                // className={cn(
                                //     "w-[240px] justify-start text-left font-normal",
                                //     !date && "text-muted-foreground"
                                // )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {/* {date ? format(date, "PPP") : <span>Pick a date</span>} */}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                mode="single"
                                // selected={date}
                                // onSelect={setDate}
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="secondary">
                                    Newest first 
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="flex flex-col gap-6">
                                <div className="grid grid-cols-6 gap-6 px-6"></div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div>
                    <div>select all</div>
                    <div>today</div>
                    <div>yesterday</div>
                </div>
            </div>
       
        </main>
    );
}


export default Record;