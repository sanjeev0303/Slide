import { useQueryUser } from "@/hooks/user-queries";
import React from "react";

type SubscriptionPlanProps = {
  children: React.ReactNode;
  type: "FREE" | "PRO";
};

const SubscriptionPlan = ({ children, type }: SubscriptionPlanProps) => {
    const { data } = useQueryUser()
    return data?.data?.subscription?.plan === type && children
};

export default SubscriptionPlan;
