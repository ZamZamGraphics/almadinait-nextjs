export async function getAllCourses() {
  try {
    const courses = [
      {
        id: "68e77256b3aa453901e99c71",
        name: "Office Application",
        slug: "office-application",
        icon: "fa-computer",
      },
      {
        id: "64ae5289be081be562c7e3d8",
        name: "Graphic Design",
        slug: "graphic-design",
        icon: "fa-bezier-curve",
      },
      {
        id: "67d2b1eab525dbff7bb998ff",
        name: "Web Design",
        slug: "web-design",
        icon: "fa-code",
      },
      {
        id: "67d2b1eab525dbff7bb668ff",
        name: "IELTS English",
        slug: "ielts-english",
        icon: "fa-user-graduate",
      },
      {
        id: "6676a81e4c7edd2955b69ee7",
        name: "Motion Graphics",
        slug: "motion-graphics",
        icon: "fa-photo-film",
      },
      {
        id: "6676a81e4c7edd2966b96ee8",
        name: "Auto Cad 2D & 3D",
        slug: "auto-cad",
        icon: "fa-cube",
      },
      {
        id: "652002036ea916ca6a89e5e1",
        name: "Digital Marketing",
        slug: "digital-marketing",
        icon: "fa-chart-simple",
      },
    ];
    return courses;
  } catch (error) {
    return error;
  }
}

export async function getAllMentors() {
  try {
    const res = await fetch(`${process.env.API_URL}/v2/api/mentors`, {
      next: { revalidate: 300 },
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
        avatar:
          "https://lh3.googleusercontent.com/a-/ALV-UjVJDEc4HvrDibc05gI4QeOb8xk1DXGr-MwRgZC0uYvzivH94pAM=w72-h72-p-rp-mo-br100",
        name: "Ashraful Islam",
        star: 5,
        opinion:
          "Al-Madinah IT as a quality computer training institute is very grateful for the important role it plays in developing the technical skills of the students. With the right guidance and quality training of this institution, numerous students are moving forward in their future career.",
      },
      {
        id: 2,
        avatar: null,
        name: "Md Fahim",
        star: 5,
        opinion:
          "I wholeheartedly recommend every new student to pursue computer education at Al Madina IT. The training system, practical classes, and skilled instructors here will teach you in such a way that you will not only receive a certificate but also acquire real skills that can be applied in real life. From my own experience, I can say that the training I received has played a crucial role in shaping my career. If anyone wants to learn computer skills effectively, then Al Madina IT is the best choice for you!",
      },
      {
        id: 3,
        avatar: null,
        name: "Jubair Ahmad",
        star: 5,
        opinion:
          "I was a student at Al Madina IT Institute in Professional Graphic Design course. I am completed my professional course before 7 month. and i still get support from AL MADINA IT. Most probably the best IT Institute to learn in Brahmanbaria. Management is good and so helping. Mentors are the best.",
      },
      {
        id: 4,
        avatar:
          "https://lh3.googleusercontent.com/a-/ALV-UjXtgTMa4sovcqI8SZAhfKLjiHv4WVlsNh1VClXX0BcGEj-_P-Mm-A=w72-h72-p-rp-mo-br100",
        name: "Sm akram hossain",
        star: 5,
        opinion:
          "One of the best IT Institute ever I've seen in my entire life. Specially, teachers of this institute, because they teach their students in a friend zone with a hand-on learning technic. The sectors, which are available at this IT Institute are very helpfull for a student to be a skilled person cause these sectors are related to this technical era. Bedsides these, the environment of this IT Institute is also interesting. In a circumstance, you should come at Al-madina IT Institute for being a skilled and honorable person in the society.",
      },
    ];
    return data;
  } catch (error) {
    return error;
  }
}

export async function fatchStudent({ studentId, batchNo }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/v2/api/student?studentId=${studentId}&batchNo=${batchNo}`,
      { next: { revalidate: 300 } }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: "Internal Server Error" };
  }
}

export async function getAllGalleries() {
  try {
    const data = [
      {
        id: "5ff52b0d-fe0d-4bd9-9741-54379f004a36",
        imageUrl: "/gallery/01.jpg",
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4/+P5x3snJlYW/P/+iMHWVKu+qLgmJZWHgQEA2Y8NGc3WIqMAAAAASUVORK5CYII=",
        width: 1920,
        height: 1080,
      },
      {
        id: "3b27bcd5-b102-43c6-bf81-f751ffecfdca",
        imageUrl: "/gallery/02.jpg",
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AN/x7fL//vXe0wBoudJbpM+ru8IAO4JwTWx9RV9gACZAFSEYBwMBAO45EmJWNTLNAAAAAElFTkSuQmCC",
        width: 953,
        height: 1126,
      },
      {
        id: "5d554926-092d-4395-9b3a-d7c5edb3f5af",
        imageUrl: "/gallery/03.jpg",
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4//fDxMnttkGu69cuZNi2ebmelhonA0NyfAgAs0MLFuv8NNMAAAAASUVORK5CYII=",
        width: 1920,
        height: 1080,
      },
      {
        id: "f2af4479-0ba7-4d75-8774-d5bbf3212ff4",
        imageUrl: "/gallery/04.jpg",
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN4efvq/9/vP3x4XFZRzCAqLsHEyGBqaamgrAwAyTMK+wibhwEAAAAASUVORK5CYII=",
        width: 1920,
        height: 1080,
      },
      {
        id: "a5d695bc-29d9-4b6b-a167-7cdf8ea6f8d9",
        imageUrl: "/gallery/05.jpg",
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNIK4xV9rRgEGJYtm8+w9KFU5sqC/sr8v7/egYAdwULicKN8lQAAAAASUVORK5CYII=",
        width: 1920,
        height: 1080,
      },
      {
        id: "9d950cd7-7758-4a75-b862-0c4bc671573c",
        imageUrl: "/gallery/06.jpg",
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4///brKl9CbGBp/csYwj092RjYbCxNJrZUwEAsGwLJJHQBE0AAAAASUVORK5CYII=",
        width: 1920,
        height: 1080,
      },
      {
        id: "50029a08-0cb7-4e26-acff-897d96791a7e",
        imageUrl: "/gallery/07.jpg",
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4//fdkpriQlvLnevmMxzauba2qoiXhcHV2QYAu1gL0TRzAUgAAAAASUVORK5CYII=",
        width: 1920,
        height: 1080,
      },
      {
        id: "e1cf6c88-07ee-4d95-8e50-ad4035be2ab5",
        imageUrl: "/gallery/08.jpg",
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNYvnj27XOnLuzd///PBwZOTgZxFhZbFbWapBQAvYsLio3KEJ0AAAAASUVORK5CYII=",
        width: 1920,
        height: 1080,
      },
      {
        id: "82460757-4a66-40eb-a9a6-8f998d38a221",
        imageUrl: "/gallery/09.jpg",
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7z4v/95vvXvQC2rqG1oZ7Xx7UAm519oJqVaGVhANK0fqOUbwkCACDZFvj0wnbTAAAAAElFTkSuQmCC",
        width: 953,
        height: 1126,
      },
      {
        id: "8242f7a4-aacd-4644-8168-064c37929d0b",
        imageUrl: "/gallery/10.jpg",
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4/+/t7JlTwgP9F86bwrBuyZS5U+pFGBiKs5IBvf0MZ7qPMmAAAAAASUVORK5CYII=",
        width: 1920,
        height: 1080,
      },
    ];
    return data;
  } catch (error) {
    return error;
  }
}
