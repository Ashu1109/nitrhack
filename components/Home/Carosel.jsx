"use client";
import * as React from "react";
import src from "@/app/assets/hospital.jpg";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cmc from "@/app/assets/cmcvellor.jpeg";
import ranchi from "@/app/assets/ranchi.jpeg";
export default function Carosel() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className={
        " bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#27c2e6] to-blue-500 h-[70vh] w-[100vw]  flex justify-center items-center  flex-col px-20 "
      }
    >
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="flex items-center justify-center p-2  text-center bg-slate-300 ">
                <Image src={ranchi} alt={"img"} width={400} className={"p-5"} />
                <div>
                  ontrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
                  Good and Evil) by Cicero, written in 45 BC. This book is a
                  treatise on the theory of ethics, very popular during the
                  Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum
                  dolor sit amet..&quot;, comes from a line in section 1.10.32.
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex items-center justify-center p-2  text-center bg-slate-300 ">
                <Image
                  src={cmc}
                  alt={"img"}
                  width={700}
                  className={"p-5 w-[20vw]"}
                />
                <div>
                  CMC Vellore is a premier medical institution in India known
                  for its excellence in healthcare, education, and research.
                  Founded in 1900, it offers world-class medical services,
                  innovative treatments, and compassionate care to patients.
                  With a rich history and commitment to holistic healing, CMC
                  Vellore continues to be a beacon of hope and healing.With
                  state-of-the-art facilities and a dedicated team of healthcare
                  professionals, CMC Vellore provides a wide range of medical
                  specialties, including cardiology, oncology, neurology, and
                  more. Its mission to serve the underserved and promote health
                  equity has made it a trusted institution nationally and
                  internationally.
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex items-center justify-center p-2  text-center bg-slate-300 ">
                <Image src={ranchi} alt={"img"} width={400} className={"p-5"} />
                <div>
                  ontrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
                  Good and Evil) by Cicero, written in 45 BC. This book is a
                  treatise on the theory of ethics, very popular during the
                  Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum
                  dolor sit amet..&quot;, comes from a line in section 1.10.32.
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex items-center justify-center p-2  text-center bg-slate-300 ">
                <Image src={src} alt={"img"} width={400} className={"p-5"} />
                <div>
                  &quot;Sunset Hospital stands as a beacon of healing in our
                  community, offering compassionate care and cutting-edge
                  treatments. With a dedicated team of medical professionals and
                  state-of-the-art facilities, we provide personalized
                  healthcare services to meet the diverse needs of our patients,
                  ensuring their well-being and recovery. &quot;
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="flex items-center justify-center p-2  text-center bg-slate-300 ">
                <Image src={cmc} alt={"img"} width={400} className={"p-5"} />
                <div>
                  ontrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
                  Good and Evil) by Cicero, written in 45 BC. This book is a
                  treatise on the theory of ethics, very popular during the
                  Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum
                  dolor sit amet..&quot;, comes from a line in section 1.10.32.
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  );
}
