import dbConnect from "../../../../db/connect";
import Location from "../../../../db/models/index";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const location = await Location.findById(id);

    if (!location) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(location);
  }
  if (request.method === "POST") {
    try {
      const locationData = request.body;
      const location = new Product(locationData);
      await location.save();
      return response.status(201).json({ status: "Location created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "PUT") {
    const updatedLocation = request.body;

    await Location.findByIdAndUpdate(id, updatedLocation);

    return response
      .status(200)
      .json({ status: `Product successfully updated.` });
  }

  if (request.method === "DELETE") {
    await Location.findByIdAndDelete(id);
    response.status(200).json({ status: `Product successfully deleted.` });
  }
}
