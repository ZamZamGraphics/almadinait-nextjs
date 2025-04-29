import Image from "next/image";

function CourseName({ params }) {
  const { slug } = params;
  console.log(slug);
  return (
    <div className="container py-28">
      <div className="row">
        <div className="col-12 md:col-8">
          <h3 className="mb-5 text-5xl text-lime-500 font-bold leading-snug">
            অফিস অ্যাপ্লিকেশন কোর্স
          </h3>
          <p className="mb-5">
            পড়াশুনা, পার্ট টাইম চুকুরী, সরকারি-বেসরকারি, ছোট বড় বিভিন্ন ধরনের
            কোম্পানি, ব্যবসা প্রতিষ্ঠান কিংবা বিদেশে চাকুরীর জন্যও কম্পিউটার
            অফিস অ্যাপ্লিকেশন কোর্সটির বিকল্প নেই। উল্লেখ্য মাইক্রোসফট অফিস
            অ্যাপ্লিকেশন এর রয়েছে অনেকগুলো ভার্সন এবং প্রতিটি ভার্সনেই রয়েছে
            কম-বেশি পার্থক্য। এই কথা মাথায় রেখেই আমাদের কম্পিউটার অফিস
            অ্যাপ্লিকেশন কোর্স-২০১৮ সিলেবাস সাজানো হয়েছে। এছাড়াও ইংরেজী ও বাংলা
            দ্রুত টাইপের জন্য টিপস্ এন্ড ট্রিকস। যে কারণে একজন ব্যক্তি কম্পিউটার
            অফিস অ্যাপ্লিকেশন কোর্সটি সম্পূর্ণ করে খুব সহজেই প্রতিটি ভার্সনে
            অত্যন্ত দক্ষতার সাথে কাজ করতে পারবে।
          </p>
          <div className="ms-5">
            <ul className="list-disc">
              <li>Microsoft Word</li>
              <li>Microsoft Excel</li>
              <li>Microsoft PowerPoint</li>
              <li>Microsoft Access</li>
              <li>Microsoft Outlook</li>
              <li>Internet & Troubleshooting</li>
              <li>Advanced PDF Customization</li>
            </ul>
          </div>
        </div>
        <div className="col-12 md:col-4">
          <Image
            src="/courses/office.jpg"
            width={500}
            height={50}
            alt="Office Application"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default CourseName;
