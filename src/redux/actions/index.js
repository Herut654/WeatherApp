export const API_KEY = process.env.REACT_APP_API_KEY;
export const URL = 'https://dataservice.accuweather.com/';

export const convertUnits = () => {
    return {
        type: 'CONVERT_TEMPERATURE_UNITS'
    }
}
