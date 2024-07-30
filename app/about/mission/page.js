import Button from '@/app/components/Button';
import React from 'react';
import Image from 'next/image';
import alim from "@/public/md-abdul-alim.jpg";

export const metadata = {
  title: "Mission",
  description: "This a blog mission page",
};

export default function Mission() {
  return (
    <main className="mt-10">
      <div>
        Lorem Ipsum Mission
      </div>
      <div className="w-[300px]">
        <Image placeholder="blur" src={alim} alt="Alim image" loading="lazy" quality={100}/>
      </div>
      <div className="mt-5">
        <Button />
      </div>
    </main>
  )
}
