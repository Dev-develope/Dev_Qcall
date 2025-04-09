import Image from "next/image";

export default function Images({ img, overlayImg }) {
  return (

      <div className="container mx-auto mt-10">
        <Image
          src={img}
          alt="QCall.ai Demo"
          width={900}
          height={700}
          className="rounded-lg object-fit w-full"
        />
      </div>

  );
}
