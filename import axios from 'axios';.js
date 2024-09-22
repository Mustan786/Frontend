import axios from 'axios';

export const submitData = (jsonInput, token) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('https://your-backend-url/bfhl', JSON.parse(jsonInput), {
                headers: { Authorization: `Bearer ${token}` }
            });
            dispatch({ type: 'SET_RESPONSE', payload: res.data });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.response.data });
        }
    };
};
