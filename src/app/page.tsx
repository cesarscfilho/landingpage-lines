import { ContentWrapper } from "@/components/content-wrapper"
import { LineDot, Section } from "@/components/section"
import { Button } from "@/components/ui/button"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function Home() {
  return (
    <>
      <Section>
        <ContentWrapper className="py-[24px]">
          <h1 className="font-semibold text-md">menup.</h1>
        </ContentWrapper>
      </Section>
      <Section>
        <ContentWrapper>
          <div className="max-w-[610px] flex flex-col space-y-6">
            <h1 className="text-3xl md:text-5xl font-semibold">
              The ultimate AI workspace for writers.
            </h1>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amccumsan justo. In odio libero, consequat
              ut convallis nec, sagittis non velit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi vitae nulla lacinia, vulputate
              mauris eget, accumsan justo. In odio libero, consequat ut
              convallis nec, sagittis non velit.
            </p>
            <Button className="w-[140px]">
              <span>Get started</span>
            </Button>
          </div>
        </ContentWrapper>
      </Section>
      <Section>
        <div className="md:px-[48px] px-[24px]">
          <div className="relative border-border border-x">
            <LineDot.leftBottom />
            <LineDot.leftTop />
            <LineDot.rightBottom />
            <LineDot.rightTop />
            <div className="bg-red-200/10 w-full h-[340px]"></div>
          </div>
        </div>
      </Section>
      <Section>
        <ContentWrapper className="max-w-[800px] mx-auto">
          <h1 className="text-4xl font-bold">FAQ{"'"}s</h1>
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
                Yes. It{"'"}s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ContentWrapper>
      </Section>
      <Section>
        <ContentWrapper>
          <div className="max-w-[610px] flex flex-col space-y-6">
            <h1 className="text-3xl md:text-5xl font-semibold">
              The ultimate AI workspace for writers.
            </h1>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amccumsan justo. In odio libero, consequat
              ut convallis nec, sagittis non velit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi vitae nulla lacinia, vulputate
              mauris eget, accumsan justo. In odio libero, consequat ut
              convallis nec, sagittis non velit.
            </p>
            <Button className="w-[140px]">
              <span>Get started</span>
            </Button>
          </div>
        </ContentWrapper>
      </Section>
      <Section className="border-b-0" rightBottom={false} leftBottom={false}>
        <ContentWrapper className="py-[24px] flex flex-col space-y-8">
          <div>
            <h1 className="font-semibold text-2xl">menup.</h1>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-foreground"
            >
              Cesar
            </Link>
            .
          </div>
        </ContentWrapper>
      </Section>
    </>
  )
}
