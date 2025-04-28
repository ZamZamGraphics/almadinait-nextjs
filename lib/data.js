export async function getAllBatches() {
  const res = await fetch(`${process.env.APP_URL}/api/batches`);
  const data = await res.json();
  if (!res.ok) {
    return "There was an error.";
  }
  return data;
}

export async function getSingleBatch() {}

export async function getAllCourses() {
  const res = await fetch(`${process.env.APP_URL}/api/courses`);
  const data = await res.json();
  if (!res.ok) {
    return "There was an error.";
  }
  return data;
}

export async function getSingleCourse() {}

export async function getAllMentors() {
  const res = await fetch(`${process.env.APP_URL}/api/mentors`);
  const data = await res.json();
  if (!res.ok) {
    return "There was an error.";
  }
  return data;
}

export async function getSingleMentor() {}

export async function getAllReviews() {
  const res = await fetch(`${process.env.APP_URL}/api/reviews`);
  const data = await res.json();
  if (!res.ok) {
    return "There was an error.";
  }
  return data;
}
