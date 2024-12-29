import { duplicateValidation } from "@/lib/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialStataTriggerProps = {
    trigger?: {
        type?: "COMMENT" | "DM"
        keyword?: string
        types?: string[]
        keywords?: string[]
    }
}

const initialState: InitialStataTriggerProps = {
    trigger: {
        type: undefined,
        keyword: undefined,
        types: [],
        keywords: []
    }
}

export const AUTOMATION = createSlice({
    name: "automation",
    initialState: initialState,
    reducers: {
        TRIGGER: (state, action: PayloadAction<InitialStataTriggerProps>) => {
            state.trigger!.types = duplicateValidation(
                state.trigger?.types!,
                action.payload.trigger?.type!
            )
            return state
        }
    }

})


export const { TRIGGER } = AUTOMATION.actions
export default AUTOMATION.reducer
