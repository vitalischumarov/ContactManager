import axios from "axios";

// const URL = "https://randomuser.me/api/";

interface UserPicture {
  large: string;
}

interface User {
  picture: UserPicture;
}

interface ApiResponse {
  results: User[];
}

export async function fetchImage(geschlecht: string) {
  let sex: string = "";
  if (geschlecht === "männlich") {
    sex = "male";
  } else {
    sex = "female";
  }
  const URL = `https://randomuser.me/api/?gender=${sex}`;
  const response = await axios.get<ApiResponse>(URL);
  const userImage = response.data.results[0].picture.large;
  return userImage;
}
