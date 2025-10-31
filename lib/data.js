
export async function getAllCourses() {
  try {
    const courses = [
      {
        id: "652002036ea916ca6a89e5e1",
        name: "Digital Marketing & Freelancing",
        slug: "digital-marketing-&-freelancing",
        icon: "fa-computer",
      },
      {
        id: "64ae5289be081be562c7e3d8",
        name: "Graphic Design & Freelancing",
        slug: "graphic-design",
        icon: "fa-computer",
      },
      {
        id: "67d2b1eab525dbff7bb998ff",
        name: "IELTS English",
        slug: "ielts-english",
        icon: "fa-computer",
      },
      {
        id: "6676a81e4c7edd2955b69ee7",
        name: "Motion Graphics & Freelancing",
        slug: "motion-graphics-&-freelancing",
        icon: "fa-computer",
      },
      {
        id: "68e77256b3aa453901e99c71",
        name: "Office Application",
        slug: "office-application",
        icon: "fa-computer",
      },
    ]
    return courses;
  } catch (error) {
    return error;
  }
}

export async function getAllMentors() {
  try {
    const res = await fetch(`${process.env.API_URL}/v2/api/mentors`, {
      next: { revalidate: 300 }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getAllReviews() {
  try {
    const data = [
      {
        id: 1,
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVJDEc4HvrDibc05gI4QeOb8xk1DXGr-MwRgZC0uYvzivH94pAM=w72-h72-p-rp-mo-br100",
        name: "Ashraful Islam",
        star: 5,
        opinion: "Al-Madinah IT as a quality computer training institute is very grateful for the important role it plays in developing the technical skills of the students. With the right guidance and quality training of this institution, numerous students are moving forward in their future career.",
      },
      {
        id: 2,
        avatar: null,
        name: "Md Fahim",
        star: 5,
        opinion: "I wholeheartedly recommend every new student to pursue computer education at Al Madina IT. The training system, practical classes, and skilled instructors here will teach you in such a way that you will not only receive a certificate but also acquire real skills that can be applied in real life. From my own experience, I can say that the training I received has played a crucial role in shaping my career. If anyone wants to learn computer skills effectively, then Al Madina IT is the best choice for you!",
      },
      {
        id: 3,
        avatar: null,
        name: "Jubair Ahmad",
        star: 5,
        opinion: "I was a student at Al Madina IT Institute in Professional Graphic Design course. I am completed my professional course before 7 month. and i still get support from AL MADINA IT. Most probably the best IT Institute to learn in Brahmanbaria. Management is good and so helping. Mentors are the best.",
      },
      {
        id: 4,
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXtgTMa4sovcqI8SZAhfKLjiHv4WVlsNh1VClXX0BcGEj-_P-Mm-A=w72-h72-p-rp-mo-br100",
        name: "Sm akram hossain",
        star: 5,
        opinion: "One of the best IT Institute ever I've seen in my entire life. Specially, teachers of this institute, because they teach their students in a friend zone with a hand-on learning technic. The sectors, which are available at this IT Institute are very helpfull for a student to be a skilled person cause these sectors are related to this technical era. Bedsides these, the environment of this IT Institute is also interesting. In a circumstance, you should come at Al-madina IT Institute for being a skilled and honorable person in the society.",
      },
    ]
    return data;
  } catch (error) {
    return error;
  }
}

export async function fatchStudent({ studentId, batchNo }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/v2/api/student?studentId=${studentId}&batchNo=${batchNo}`, { next: { revalidate: 300 } }
    );
    const data = await response.json();
    return data
  } catch (error) {
    return { error: "Internal Server Error" };
  }
}

export async function getAllGalleries() {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/gallery`, {
      next: { revalidate: 300 }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getSinglePhoto(id) {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/gallery/${id}`, {
      next: { revalidate: 300 }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
