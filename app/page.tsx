import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle
} from "@/components/ui/card";
import HeroSectionOne from "@/components/hero-section-demo-1";
import BentoGridThirdDemo from "@/components/bento-grid-demo-3";

export default function Home() {
  return (
    <div>
      <HeroSectionOne/>
      <BentoGridThirdDemo/>
    </div>
  );
}
