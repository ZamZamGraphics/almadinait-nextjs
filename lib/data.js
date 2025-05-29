export async function getAllBatches() {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/batches`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getSingleBatch(batchID) {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/batches/${batchID}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getAllCourses() {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/courses`);
    const data = await res.json();
    data.sort((a, b) => a.id - b.id);
    return data;
  } catch (error) {
    return error;
  }
}

export async function getSingleCourse() { }

export async function getAllMentors() {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/mentors`);
    const data = await res.json();
    data.sort((a, b) => a.id - b.id);
    return data;
  } catch (error) {
    return error;
  }
}

export async function getSingleMentor() { }

export async function getAllReviews() {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/reviews`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function fatchStudent({ studentId, batchNo }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/student?studentId=${studentId}&batchNo=${batchNo}`
    );
    return response.json();
  } catch (error) {
    return { error: "Internal Server Error" };
  }
}

export async function getImageByID(id) {
  try {
    const res = await fetch(`${process.env.API_URL}/media/${id}`);
    const data = await res.json();
    const sourceURL = data?.source_url;

    if (data.code === "rest_post_invalid_id") {
      return data.message;
    }

    return sourceURL;
  } catch (error) {
    return error;
  }
}

export async function getAllGalleries() {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/gallery`);
    const data = await res.json();
    data.sort((a, b) => a.id - b.id);
    return data;
  } catch (error) {
    return error;
  }
}
