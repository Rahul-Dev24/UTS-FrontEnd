import axios from "axios";
import { AuthBaseUrl, TicketBaseUrl } from "../../common.json";

export const addTrain = async (data) => {
    try {
        const response = await axios.post(
            `${TicketBaseUrl}/addTrain`,
            data
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getStation = async (limit = NaN, sort = false) => {
    try {
        const response = limit ? await axios.get(`${AuthBaseUrl}/getStation?limit=${limit}&sort=${sort}`) : await axios.get(`${AuthBaseUrl}/getStation?sort=${sort}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTrain = async () => {
    try {
        const response = await axios.get(`${TicketBaseUrl}/getTrain`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const searchStation = async (query) => {
    try {
        const response = await axios.get(`${AuthBaseUrl}/searchStation?query=${query}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};