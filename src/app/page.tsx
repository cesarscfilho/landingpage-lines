import { Container } from "@/components/container";
import { LineDot, Section } from "@/components/section";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
    <div className="min-h-screen">
      
    <Section>
        <div className="px-[1.4rem] py-[2rem]">
          <h1 className="font-semibold">menup.</h1>
        </div>
    </Section>
     <Section>  
      <div className="py-[4.5rem] px-[1.4rem]">

      <Container>
        <div className="max-w-[610px] flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">The ultimate AI workspace for writers.</h1>

        <p className="text-muted-foreground">Lorem ipsum dolor sit amccumsan justo. In odio libero, consequat ut convallis nec, sagittis non velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nulla lacinia, vulputate mauris eget, accumsan justo. In odio libero, consequat ut convallis nec, sagittis non velit.</p>
        <Button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md font-medium bg-primary text-primary-foreground w-32 transition hover:scale-110"><span>Get started</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-black/20"></div></div></Button>
        </div>
      </Container>
      </div>
    </Section>
     <Section> 
      <Container>
        <div className="relative border-border border-x mx-4 md:mx-0">
            <LineDot.leftBottom />
            <LineDot.leftTop />
            <LineDot.rightBottom />
            <LineDot.rightTop />    
        <div className="bg-red-200/10 w-full h-[500px]"></div>

      </div>
      </Container>
    </Section>
    <Section>

    <div className="px-[1.4rem] py-[2rem]">

      <Container>
<div className="max-w-[600px] mx-auto"> 
    <h1 className="text-4xl font-bold">FAQ's</h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

</div>
      </Container>
    </div>
    </Section>
    <div className="h-screen"></div>
    </div>


  );
}


