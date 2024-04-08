import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="Footer" className="container md:px-8 px-4">
      <div className="mb-20">
        <div className="flex flex-col gap-y-8 justify-center items-center">
          <div className="flex flex-nowrap gap-x-8 items-center justify-center">
            <Link href="#">
              <Instagram width={20} strokeWidth={1.5} absoluteStrokeWidth />
            </Link>

            <Link href="#">
              <Facebook width={20} strokeWidth={1.5} absoluteStrokeWidth />
            </Link>

            <Link href="#">
              <Youtube width={20} strokeWidth={1.5} absoluteStrokeWidth />
            </Link>

            <Link href="#">
              <Twitter width={20} strokeWidth={1.5} absoluteStrokeWidth />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-x-12 gap-y-6 items-center place-items-center text-sm font-medium">
            <Link href="#">Contact</Link>
            <Link href="#">Be a partner</Link>
            <Link href="#">Documentation</Link>
            <Link href="#">Jobs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
