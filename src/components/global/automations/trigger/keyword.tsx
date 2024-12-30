"use client";

import { Input } from "@/components/ui/input";
import { useKeywords } from "@/hooks/create-automaion";
import { useMutationDataState } from "@/hooks/mutation-data";
import { useQueryAutomation } from "@/hooks/user-queries";
import { X } from "lucide-react";
import React from "react";

type KeywordsProps = {
  id: string;
};

const Keywords = ({ id }: KeywordsProps) => {
  const { keyword, onValueChange, onKeyPress, deleteMutation } =
    useKeywords(id);

  const { latestVariable } = useMutationDataState(["add-keyword"]);
  const { data } = useQueryAutomation(id);

//   console.log("latestVariable: ", latestVariable);


  return (
    <div className="bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl">
      <p className="text-sm text-text-secondary">
        Add words that trigger automations
      </p>
      <div className="flex flex-wrap justify-start gap-2 items-center">
        {typeof data?.data !== "string" &&
          data?.data?.keywords &&
          data?.data?.keywords.length > 0 &&
          data?.data?.keywords.map(
            (word) =>
            //   word.id !== latestVariable.variables.id && (
                <div
                  key={word.id}
                  className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full"
                >
                  <p>{word.word}</p>
                  <X
                    size={20}
                    onClick={() => deleteMutation({ id: word.id })}
                  />
                </div>
            //   )
          )}
        {latestVariable && latestVariable.status === "pending" && (
          <div className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full">
            {latestVariable.variables.keyword}
          </div>
        )}

        <Input
          placeholder="Add keyword..."

          value={keyword}
          className="p-0 bg-transparent ring-0 border-none outline-none"
          onChange={onValueChange}
          onKeyUp={onKeyPress}
        />
      </div>
    </div>
  );
};

export default Keywords;
