import React from "react";
import { NextStep } from "../../ApiContext/api/types/nextStep";
declare const LoadingView: React.FC<{
    nextStep: NextStep & {
        type: "completed";
    };
}>;
export default LoadingView;
