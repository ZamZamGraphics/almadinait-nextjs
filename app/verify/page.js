"use client";
import { fatchStudent } from "@/lib/data";
import { useState } from "react";
import { useForm } from "react-hook-form";
import StudentVerify from "../components/StudentVerify";

function Verify() {
  const [student, setStudent] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { isSubmitting, errors },
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await fatchStudent(formData);
      if (response?.errors) {
        setError("root.random", {
          type: "random",
          message: response.errors.message,
        });
      } else {
        setStudent(response.student);
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: "Internal Server Error",
      });
    }
  };

  return (
    <div className="container py-28">
      <h2 className="mb-20 text-5xl text-gray-900 font-bold leading-snug text-center">
        আমাদের শিক্ষার্থী <span className="text-lime-500">অনুসন্ধান</span>
      </h2>
      <div className="flex justify-center p-5 md:p-10">
        {student ? (
          <StudentVerify student={student} />
        ) : (
          <form
            onSubmit={handleSubmit(submitForm)}
            className="w-full max-w-[700px] flex flex-col gap-5 p-5 md:p-10 bg-white rounded-2xl shadow-lg"
          >
            <div className="flex flex-col items-start gap-1">
              <label className="text-xl font-medium text-gray-900">
                Student ID
              </label>
              <input
                {...register("studentId", {
                  required: "Student ID is Required",
                })}
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
                {...register("batchNo", {
                  required: "Batch Number is Required",
                })}
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
            {errors.root?.random && (
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
                <p>{errors.root.random.message}</p>
              </div>
            )}
            <div className="flex items-center gap-1">
              <button
                className="block w-full font-medium bg-lime-500 hover:bg-lime-600 disabled:bg-gray-200 disabled:text-gray-400 p-3 text-white rounded-md"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Search Student" : "Verify Student"}
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="py-1 px-5 bg-orange-300 text-gray-900 rounded-full text-sm"
          onClick={() => {
            setStudent(null);
            reset();
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Verify;
