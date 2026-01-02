import { LoginForm } from "@/registry/login-form/component"
import { SignupForm } from "@/registry/signup-form/component"
import { Footer } from "@/registry/footer/component"
import { Navbar } from "@/registry/navbar/component"

// Registry of all blocks with their component and code
export const BLOCK_REGISTRY: Record<string, any> = {
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
  }
}
