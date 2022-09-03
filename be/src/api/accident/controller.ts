import ErrorClass from "../../helper/types/error";
import database from "../../loaders/database";

export const accident = async (cameraID:string, accidentImage: string) => {
  try {
    const data = await (await database())
      .collection("accidents")
      .insertOne({accidentImage:accidentImage,cameraID:cameraID});
    if (!data) {
      throw new ErrorClass("Error uploading image", 400);
    }
    console.log(`${data.insertedCount} food data added`);
    return {
      success: true,
      status: 201,
      message: 'Accident image uploaded',
    };
  } catch (error) {
    throw new ErrorClass(
      error.message ?? "Image updation failed",
      error.status.code ?? 500
    );
  }
};
