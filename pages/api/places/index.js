import dbConnect from "../../../db/connect";
import Location from "../../../db/models/index";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const locations = await Location.find();
    return response.status(200).json(locations);
  }
  if (request.method === "POST") {
    try {
      const locationData = request.body;
      const location = new Location(locationData);
      await location.save();
      return response.status(201).json({ status: "Location created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
