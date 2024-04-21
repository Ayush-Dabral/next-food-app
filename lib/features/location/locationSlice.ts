import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface LocationState {
  value: string
}

// Define the initial state using that type
const initialState: LocationState = {
  value: ""
}

export const locationSlice = createSlice({
  name: 'location',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    inputHandler: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { inputHandler } = locationSlice.actions

export default locationSlice.reducer