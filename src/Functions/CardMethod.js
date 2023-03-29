import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getArtwork() {
  try {
    const response = await axios({
      url: `${baseUrl}/Card/getAll`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}

  export async function getArtworkBySerie(serie) {
    try {
      const response = await axios({
        url: `${baseUrl}/Card/getBySerie/${serie}`,
        method: "GET",
      });
  
      return response;
    } catch (errors) {
      console.log(errors);
    }
  }

