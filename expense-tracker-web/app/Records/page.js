"use client";
import { useRouter } from "next/navigation";


import { Checkbox } from "@/components/ui/checkbox";
// import * as React from "react"
// import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns";
// import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { CalendarIcon, Plus, X } from "lucide-react";

import CategoryIcon from "@/components/data";
import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import CategoryDialog from "@/components/Dialogs/CategoryDialog";
import RecordDialog from "@/components/Dialogs/RecordDialog";

export const Record = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [recordOpen, setRecordOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState();
//   const [loading, setLoading] = useState(false);

    const router = useRouter();

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

//   console.log({ open });

  return (
    <main className="flex gap-6 ">
        <RecordDialog hideDialog={() => setOpen(false)}/>

      <Toaster />
      <CategoryDialog
        open={open}
        onClose={() => setOpen(false)}
        editingCategory={editingCategory}
        onComplete={loadList}
        uploadEditingCategory={setEditingCategory}
      />


        <div className="flex flex-col gap-6 my-6 mx-4 max-w-[282px]">
            <div>
                <div className="text-2xl font-semibold mb-6  ">Records</div>
                <Button
                    variant="secondary"
                    className="px-[98.5px] py-1 bg-[#0166FF] rounded-full text-white"
                    onClick={() => router.push(`?create=new`)}
                >
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
                    <div key={category.name} className="flex justify-between">
                        <div className="flex gap-2">
                            <CategoryIcon IconName={category.icon} color={category.color} />
                            {category.name}
                        </div>
                        <div className="flex gap-1">
                            <Button onClick={() => deleteTask(category.id)}>delete</Button>
                            <Button
                            onClick={() => {
                                setEditingCategory(category);
                                setOpen(true);
                            }}
                            >
                            edit
                            </Button>
                        </div>
                    </div>
                    ))}
                    <Button
                    onClick={() => setOpen(true)}
                    className=" px-3 py-1 max-w-[150px]"
                    >
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
                        className={cn("w-[100%]" /*className*/)}
                        // {...props}
                    />
                    </div>
                </div>
            </div>
        </div>

      {/* body */}

      <div className="w-full">
        <div className="flex justify-between mb-4">
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
                <Button variant="secondary">Newest first</Button>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-6">
                <div className="grid grid-cols-6 gap-6 px-6"></div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Select all
              </label>
            </div>
            <div>Dynamic number</div>
          </div>
          <div>today</div>
          <div>yesterday</div>
        </div>
      </div>
    </main>
  );
};

export default Record;
