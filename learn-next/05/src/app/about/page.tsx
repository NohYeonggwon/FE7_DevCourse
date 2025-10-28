import Image from "next/image";
import { doldam, nanumPenScript } from "../layout";
import animal from "@/src/asset/images/animal.jpg";

export default function AboutPage() {
  return (
    <>
      <h1 className={nanumPenScript.className}>About</h1>
      <h1 className={doldam.className}>제주</h1>
      <Image src={animal} alt="animal" />
      <Image
        src="https://cdn.pixabay.com/photo/2024/12/24/11/29/bird-9288255_640.jpg"
        alt="animal"
        width={400}
        height={300}
      />
    </>
  );
}
