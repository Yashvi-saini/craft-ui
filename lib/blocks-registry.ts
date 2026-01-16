import * as React from "react"
import { LoginForm } from "@/registry/login-form/component"
import { SignupForm } from "@/registry/signup-form/component"
import { LoginSplit } from "@/registry/login-split/component"
import { Footer } from "@/registry/footer/component"
import { FooterLarge } from "@/registry/footer-large/component"
import { Navbar } from "@/registry/navbar/component"
import { HeroSimple } from "@/registry/hero-simple/component"
import { PricingCards } from "@/registry/pricing-cards/component"
import { FeatureGrid } from "@/registry/feature-grid/component"
import { ContactForm } from "@/registry/contact-form/component"
import { CtaSimple } from "@/registry/cta-simple/component"
import { FaqSimple } from "@/registry/faq-simple/component"
import { TestimonialGrid } from "@/registry/testimonial-grid/component"

export interface Block {
  name: string
  component: React.ElementType
  files: {
    path: string
    type: "component" | "ui"
  }[]
}

export interface BlockCategory {
  title: string
  description: string
  blocks: Block[]
}

// Registry of all blocks with their component and code
export const BLOCK_REGISTRY: Record<string, BlockCategory> = {
  auth: {
    title: "Authentication",
    description: "Login and signup forms to get started.",
    blocks: [
      {
        name: "Login Form",
        component: LoginForm,
        files: [
          { path: "registry/login-form/component.tsx", type: "component" },
          { path: "components/ui/button.tsx", type: "ui" },
          { path: "components/ui/input.tsx", type: "ui" },
          { path: "components/ui/label.tsx", type: "ui" },
          { path: "components/ui/checkbox.tsx", type: "ui" },
          { path: "components/ui/card.tsx", type: "ui" },
        ]
      },
      {
        name: "Login Split",
        component: LoginSplit,
        files: [
          { path: "registry/login-split/component.tsx", type: "component" },
          { path: "components/ui/button.tsx", type: "ui" },
          { path: "components/ui/input.tsx", type: "ui" },
          { path: "components/ui/label.tsx", type: "ui" },
        ]
      },
      {
        name: "Signup Form",
        component: SignupForm,
        files: [
          { path: "registry/signup-form/component.tsx", type: "component" },
          { path: "components/ui/button.tsx", type: "ui" },
          { path: "components/ui/input.tsx", type: "ui" },
          { path: "components/ui/label.tsx", type: "ui" },
          { path: "components/ui/card.tsx", type: "ui" },
        ]
      },
    ],
  },
  footer: {
    title: "Footer",
    description: "A footer for your site.",
    blocks: [
      {
        name: "Simple Footer",
        component: Footer,
        files: [
          { path: "registry/footer/component.tsx", type: "component" }
        ]
      },
      {
        name: "Large Footer",
        component: FooterLarge,
        files: [
          { path: "registry/footer-large/component.tsx", type: "component" },
          { path: "components/ui/button.tsx", type: "ui" },
          { path: "components/ui/input.tsx", type: "ui" },
        ]
      }
    ]
  },
  header: {
    title: "Header / Navbar",
    description: "Navigation components for your site.",
    blocks: [
      {
        name: "Responsive Navbar",
        component: Navbar,
        files: [
          { path: "registry/navbar/component.tsx", type: "component" },
          { path: "components/ui/button.tsx", type: "ui" },
          { path: "components/ui/sheet.tsx", type: "ui" },
        ]
      }
    ]
  },
  hero: {
    title: "Hero",
    description: "Hero sections for your lending pages.",
    blocks: [
      {
        name: "Simple Hero",
        component: HeroSimple,
        files: [
          { path: "registry/hero-simple/component.tsx", type: "component" },
          { path: "components/ui/button.tsx", type: "ui" },
        ]
      }
    ]
  },
  pricing: {
    title: "Pricing",
    description: "Pricing sections for your SaaS.",
    blocks: [
      {
        name: "Pricing Cards",
        component: PricingCards,
        files: [
          { path: "registry/pricing-cards/component.tsx", type: "component" },
          { path: "components/ui/button.tsx", type: "ui" },
          { path: "components/ui/card.tsx", type: "ui" },
        ]
      }
    ]
  },
  feature: {
    title: "Features",
    description: "Feature sections showing what your product does.",
    blocks: [
      {
        name: "Feature Grid",
        component: FeatureGrid,
        files: [
          { path: "registry/feature-grid/component.tsx", type: "component" }
        ]
      }
    ]
  },
  contact: {
    title: "Contact",
    description: "Contact forms and sections.",
    blocks: [
      {
        name: "Contact Form",
        component: ContactForm,
        files: [
          { path: "registry/contact-form/component.tsx", type: "component" },
          { path: "components/ui/button.tsx", type: "ui" },
          { path: "components/ui/input.tsx", type: "ui" },
          { path: "components/ui/card.tsx", type: "ui" },
          { path: "components/ui/label.tsx", type: "ui" },
        ]
      }
    ]
  },
  cta: {
    title: "Call to Action",
    description: "Sections to encourage user action.",
    blocks: [
      {
        name: "Simple CTA",
        component: CtaSimple,
        files: [
          { path: "registry/cta-simple/component.tsx", type: "component" },
          { path: "components/ui/button.tsx", type: "ui" },
        ]
      }
    ]
  },
  faqs: {
    title: "FAQs",
    description: "Frequently Asked Questions sections.",
    blocks: [
      {
        name: "Simple FAQ",
        component: FaqSimple,
        files: [
          { path: "registry/faq-simple/component.tsx", type: "component" }
        ]
      }
    ]
  },
  testimonial: {
    title: "Testimonial",
    description: "Testimonial sections to build trust.",
    blocks: [
      {
        name: "Testimonial Grid",
        component: TestimonialGrid,
        files: [
          { path: "registry/testimonial-grid/component.tsx", type: "component" },
          { path: "components/ui/card.tsx", type: "ui" },
        ]
      }
    ]
  }
}
