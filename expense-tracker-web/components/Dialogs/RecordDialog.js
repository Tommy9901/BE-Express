"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export const RecordDialog = ({ hideDialog }) => {
  const searchParams = useSearchParams();
  const create = searchParams.get("create");
  const router = useRouter();

  const open = create === "new";

  return (
    <main>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[792px] rounded-lg">
          <DialogHeader>
            <div className="flex justify-between">
              <DialogTitle>Add Record</DialogTitle>
              <X className="w-5 h-5" onClick={() => router.push(`?`)} />
            </div>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <hr />
          <div className="flex gap-2">
            <div className="w-[50%]">
              <div className="w-full rounded-full bg-[#F3F4F6] mb-4">
                <Button className="w-[172px] rounded-full">Expense</Button>
                <Button className="w-[172px] rounded-full">Income</Button>
              </div>

              <div className="flex flex-col gap-[22px]">
                <div className="p-2 bg-[#F3F4F6] rounded-lg">
                  <p className="mb-4">Amount</p>
                  <input type="amount" placeholder="$ 000.00" className="bg-[#F3F4F6] border-none resize-none outline-none"/>
                </div>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full ">
                        Choose
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-100">
                      <div>aaaaaa</div>
                    </PopoverContent>
                  </Popover>
                </div>
                <div>calendar</div>
                <Button className="w-full rounded-full">Add Records</Button>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full ">
                      Chooose one
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[365px] flex flex-col gap-2">
                    <div>INCOME</div>
                    <hr />
                    <div>EXPENSE</div>
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <textarea
                  placeholder="Write here"
                  name="text"
                  id="text"
                  className="bg-[#F3F4F6] p-4 rounded-lg border-[#D1D5DB] w-full h-[280px] resize-none outline-none"
                ></textarea>
              </div>
            </div>
          </div>

          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
};

{
  /* <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary"></Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-6"></PopoverContent>
        </Popover> */
}

export default RecordDialog;
