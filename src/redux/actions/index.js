export const API_KEY = process.env.REACT_APP_API_KEY;
export const URL = process.env.REACT_APP_API_BASE_URL;

export const convertUnits = () => {
    return {
        type: 'CONVERT_TEMPERATURE_UNITS'
    }
}
