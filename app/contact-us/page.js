'use client'
import { submitContact } from "@/app/actions";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
    errors: {},
    success: false
}

function ContactUs() {
    const formRef = useRef(null);
    const [state, formAction] = useFormState(submitContact, initialState);
    const { pending } = useFormStatus();

    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset();
        }
    }, [state.success])

    return (
        <div className='container py-28'>
            <h2 className="mb-14 text-5xl text-gray-900 font-bold leading-snug text-center">
                আমাদের সাথে যোগাযোগ
            </h2>
            <div className="row">
                <div className="col-12 md:col-6">
                    <div className="flex flex-col gap-5 text-left">
                        <p>
                            যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে পারেন। <br />
                            তাছাড়া হটলাইন নম্বরে কল করে জেনে নিতে পারেন ট্রেইনিং সংক্রান্ত  যেকোনো তথ্য।
                            <br />
                            যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে পারেন। <br />
                            এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক ম্যাসেঞ্জারেও নক দিতে পারেন।
                        </p>
                        <div className="row">
                            <div className="col-12 sm:col-6 mb-5">
                                <h3 className="text-2xl text-lime-500 font-semibold">হেড অফিস</h3>
                                <p>
                                    ফখরে বাঙ্গাল রোড, <br />
                                    কান্দিপাড়া, ব্রাহ্মণবাড়িয়া ৩৪০০
                                </p>
                            </div>
                            <div className="col-12 sm:col-6">
                                <h3 className="text-2xl text-black font-semibold">অফিস খোলা থাকে</h3>
                                <p>
                                    শনিবার - শুক্রবার <br />
                                    সকাল ১০ টা থেকে রাত ৮ টা
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 sm:col-6 mb-5">
                                <h3 className="text-2xl text-black font-semibold">ফোন নাম্বার</h3>
                                <p>
                                    +880 1736622722 <br />
                                    +880 1976722611 <br />
                                    +880 1811149531 <br />
                                    +880 1712297951
                                </p>
                            </div>
                            <div className="col-12 sm:col-6 mb-5">
                                <h3 className="text-2xl text-black font-semibold">ই-মেইল</h3>
                                <p>
                                    <a href="mailto:almadinait@gmail.com">
                                        almadinait@gmail.com
                                    </a><br />
                                    <a href="mailto:almadinait.bd@gmail.com">
                                        almadinait.bd@gmail.com
                                    </a><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <h3 className="text-3xl text-gray-900 font-bold leading-snug text-center">আপনাদের জিজ্ঞাসা ইনবক্স করুন</h3>
                    <form
                        ref={formRef}
                        action={formAction}
                        className="py-5 flex flex-col w-full items-start gap-4"
                    >
                        <div className="flex flex-col w-full gap-2 items-start">
                            <label className="text-lg text-black font-bold">আপনার নাম</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`form-control ${state.errors?.name && 'error'}`}
                                placeholder="আপনার নাম লিখুন"
                            />
                            {state.errors?.name && <p className="text-red-500">{state?.errors.name}</p>}
                        </div>
                        <div className="flex flex-col w-full gap-2 items-start">
                            <label className="text-lg text-black font-bold">আপনার ইমেইল</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`form-control ${state.errors?.email && 'error'}`}
                                placeholder="আপনার ইমেইল লিখুন"
                            />
                            {state.errors?.email && <p className="text-red-500">{state?.errors.email}</p>}
                        </div>
                        <div className="flex flex-col w-full gap-2 items-start">
                            <label className="text-lg text-black font-bold">আপনি কি জানতে চান, বিস্তারিত লিখুন</label>
                            <textarea
                                id="message"
                                name="message"
                                className={`form-control ${state.errors?.message && 'error'}`}
                                rows="5"
                                placeholder="আপনি কি জানতে চান, বিস্তারিত লিখুন"
                            />
                            {state.errors?.message && <p className="text-red-500">{state?.errors.message}</p>}
                        </div>
                        <div className="flex flex-col md:flex-row items-start gap-5 w-full">
                            <button
                                type="submit"
                                disabled={pending}
                                className="py-2 px-8 rounded-lg bg-lime-500 hover:bg-lime-600 disabled:bg-lime-200 text-white"
                            >Submit</button>
                            {state.success && <p className="py-2 px-8 bg-green-100 text-green-800 font-semibold border border-green-300 w-full rounded-lg">
                                ধন্যবাদ
                            </p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
