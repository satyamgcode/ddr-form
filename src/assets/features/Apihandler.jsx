import { createAsyncThunk } from "@reduxjs/toolkit";


export const createfarmer = createAsyncThunk(
    "createfarmer",
    async (data, { rejectWithValue }) => {
        try {
            const response = await fetch('https://ddr-1.onrender.com/api/create-ddr/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const error = await response.json();
                return rejectWithValue(error.message || "Failed to create farmer");
            }

            const result = await response.json();
            return result;
        } catch (error) {
            // Ensure the error is serializable
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
);


export const showfarmer = createAsyncThunk(
    "farmer",
    async (args, { rejectWithValue }) => {
        try {
            const response = await fetch('https://66e5172c5cc7f9b6273c4160.mockapi.io/getfarmer');

            if (!response.ok) {
                const error = await response.json();
                return rejectWithValue(error.message || "Failed to fetch farmers");
            }

            const result = await response.json();
            return result;
        } catch (error) {

            return rejectWithValue(error.message || "Something went wrong");
        }
    }
);



export const clusterIncharge = createAsyncThunk(
    "clusterIncharge",
    async (args, { rejectWithValue }) => {
        try {
            const response = await fetch('https://ddr-1.onrender.com/api/cluster-incharges/');
            if (!response.ok) {
                const error = await response.json();
                return rejectWithValue(error.message || "Failed to fetch cluster incharge");
            }
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
)

export const eligibleFarmers = createAsyncThunk(
    "eligibleFarmers",
    async (args, { rejectWithValue }) => {
        try {
            const response = await fetch('https://ddr-1.onrender.com/api/eligible-farmers/');
            if (!response.ok) {
                const error = await response.json();
                return rejectWithValue(error.message || "Failed to fetch eligible farmers");
            }
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
)

export const selectVariety = createAsyncThunk(
    "selectVariety",
    async (args, { rejectWithValue }) => {
        try {
            const response = await fetch('https://ddr-1.onrender.com/api/varieties/');
            if (!response.ok) {
                const error = await response.json();
                return rejectWithValue(error.message || "Failed to fetch variety");
            }
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
)

export const selectCropType = createAsyncThunk(
    "selectCropType",
    async (args, { rejectWithValue }) => {
        try {
            const response = await fetch('https://ddr-1.onrender.com/api/crop-types/');
            if (!response.ok) {
                const error = await response.json();
                return rejectWithValue(error.message || "Failed to fetch crop type");
            }
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
)

export const selectSource = createAsyncThunk(
    "selectSource",
    async (args, { rejectWithValue }) => {
        try {
            const response = await fetch('https://ddr-1.onrender.com/api/sources/');
            if (!response.ok) {
                const error = await response.json();
                return rejectWithValue(error.message || "Failed to fetch source");
            }
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
)

