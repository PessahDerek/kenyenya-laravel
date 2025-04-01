import { Image } from "@mantine/core";

export default function Landing() {
  return (
    <div className={"w-full h-max min-h-[calc(100vh-70px)]"}>
      <Image
        className={"w-full h-full object-cover    "}
        src={"/ui/landing-grad-1.jpg"}
        alt={"graduation photos"}
      />
    </div>
  );
}
