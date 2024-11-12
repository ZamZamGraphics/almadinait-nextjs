"use client";
import { useForm } from "react-hook-form";

const fatchStudent = async ({ studentId, batchNo }) => {
  try {
    // console.log(studentId, batchNo);
    const response = await fetch(
      `http://localhost:4000/v1/api/student?studentId=${studentId}&batchNo=${batchNo}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Server Error 1 : ", error);
  }
};

function Verify() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await fatchStudent(formData);
      console.log("Response : ", response);
    } catch (error) {
      console.log("Server Error 2 : ", error);
    }
  };

  return (
    <div className="container py-28">
      <h2 className="mb-14 text-5xl text-gray-900 font-bold leading-snug text-center">
        আমাদের শিক্ষার্থী <span className="text-lime-500">অনুসন্ধান</span>
      </h2>
      <div className="flex justify-center p-5">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="w-full max-w-[700px] flex flex-col gap-5 p-5 md:p-10 bg-white rounded-lg shadow-md"
        >
          <div className="flex flex-col items-start gap-1">
            <label className="text-xl font-medium text-gray-900">
              Student ID
            </label>
            <input
              {...register("studentId", { required: "Student ID is Required" })}
              name="studentId"
              type="text"
              placeholder="Enter Student ID"
              className={`form-control md:py-3 md:px-4 md:text-2xl font-medium ${
                errors.studentId && "error"
              }`}
            />
            {errors.studentId && (
              <p className="text-base text-red-600">
                {errors.studentId?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="text-xl font-medium text-gray-900">
              Batch Number
            </label>
            <input
              {...register("batchNo", { required: "Batch Number is Required" })}
              name="batchNo"
              type="text"
              placeholder="Enter Batch Number"
              className={`form-control md:py-3 md:px-4 md:text-2xl font-medium ${
                errors.batchNo && "error"
              }`}
            />
            {errors.batchNo && (
              <p className="text-base text-red-600">
                {errors.batchNo?.message}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3 w-full p-3 bg-red-100 text-red-600 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 9v4" />
              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
              <path d="M12 16h.01" />
            </svg>
            <p>Student was not found</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              className="block w-full font-medium bg-lime-500 hover:bg-lime-600 p-3 text-white rounded-md"
              type="submit"
            >
              Verify Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Verify;
