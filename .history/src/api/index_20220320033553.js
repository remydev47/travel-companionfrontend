import axios from "axios";
  
export const getPlacesData = async (type, sw, ne) => {
    try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'e86af0182emsh3f267c1d4b30033p1d6ecajsn18d544776974'
          }
        });
        
        return data;
    } catch (error) {
        console.log(error)
    }
}