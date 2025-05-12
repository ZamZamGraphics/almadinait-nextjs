import { getAllMentors } from "@/lib/data";
import CarouselComponent from "../CarouselComponent";
import NoDataFound from "../NoDataFound";
import Teacher from "./Teacher";

async function Teachers() {
  const mentors = await getAllMentors();
  return (
    <div className="container my-32">
      <div className="grid grid-cols-1 justify-items-center">
        <div className="w-full">
          <h2 className="text-5xl text-gray-900 font-bold leading-snug text-center">
            আমাদের <span className="text-lime-500">শিক্ষক</span> মণ্ডলী
          </h2>
          <p className="mb-10 text-center">
            আল-মদিনা আইটি ইন্সটিটিউট-এ আছেন ইন্ডাষ্ট্রি সেরা এক্সপার্ট মেন্টর
            প্যানেল। যাদের তত্তাবধানে থেকে প্রশিক্ষনার্থীরা নিজেকে দক্ষ করে গড়ে
            তোলে কর্মসংস্থানের সুযোগ তৈরী করছে।
          </p>
        </div>
      </div>
      <CarouselComponent>
        {mentors.length > 0 ? (
          mentors.map((mentor) => (
            <Teacher
              key={mentor.id}
              name={mentor.name}
              title={mentor.title}
              avatar={mentor.avatar}
            />
          ))
        ) : (
          <NoDataFound>{mentors?.error || "No Data Found"}</NoDataFound>
        )}
      </CarouselComponent>
    </div>
  );
}

export default Teachers;
