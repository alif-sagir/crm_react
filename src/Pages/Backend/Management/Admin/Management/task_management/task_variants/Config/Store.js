import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import setup from "./setup";
// import app_config from "../../../../config/app.config";

var store_prefix = setup.prefix;
// var api_prefix = setup.api_prefix;

export const async_actions = {
    // all data
    [`fetch_all_data`]: createAsyncThunk(
        `${store_prefix}/fetch_all_data`,
        async (data, thunkAPI) => {
            let state = thunkAPI.getState()[store_prefix];
            let qparams = {
                page_limit: state[`page_limit`],
                // orderByCol: state[`orderByCol`],
                // orderByAsc: state[`orderByAsc`],
                // show_active_data: state[`show_active_data`],
            }
            if(state[`search_key`].length){
                qparams['search_key'] = state[`search_key`]
            }

            let url = data?.url ? data.url : `/${setup.route_prefix}`;
            const response = await axios.get(url, {
                params: {
                    ...qparams
                }
            });
            return response.data;
        }
    ),
};

const storeSlice = createSlice({
    name: `${store_prefix}`,
    initialState: {
        data: {},
        page_limit: 1,
        search_key: '',
    },
    reducers: {
        set_page_limit: (state, { payload }) => {
            state.page_limit = payload
        },
        set_search_key: (state, { payload }) => {
            state.search_key = payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(async_actions[`fetch_all_data`].fulfilled, (state, { type, payload, meta }) => {
                state[`data`] = payload;
            })
    },
})

export default storeSlice;