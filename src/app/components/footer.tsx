"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Tooltip,
} from "@nextui-org/react";
import { Github, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Footer() {
  const { setTheme, systemTheme, theme } = useTheme();
  const currentTheme = (theme === "system" ? systemTheme : theme) as
    | "dark"
    | "light";

  return (
    <footer className="grid w-full grid-cols-[auto,1fr,auto] px-4 py-4 lg:grid-cols-3 lg:px-12">
      <div className="flex items-center justify-start">
        <Tooltip content="Você será enviado para Github" showArrow delay={500}>
          <Button
            as={Link}
            href="https://github.com/TryLooney/felipes"
            isExternal
            variant="light"
            isIconOnly
          >
            <Github />
          </Button>
        </Tooltip>
      </div>
      <div className="flex items-center justify-center">
        <Button as={Link} isExternal color="primary" href="https://vercel.com">
          <svg
            className="h-6 w-6 text-xl"
            fill="currentColor"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" d="M256,48,496,464H16Z" />
          </svg>
          <span>
            Powered by <b>Vercel</b>
          </span>
        </Button>
      </div>
      <div className="flex items-center justify-end">
        <Dropdown size="sm">
          <DropdownTrigger>
            <Button variant="light" isIconOnly>
              {currentTheme === "dark" ? (
                <Moon className="h-6 w-6" />
              ) : (
                <Sun className="h-6 w-6" />
              )}
            </Button>
          </DropdownTrigger>
          <DropdownMenu onAction={(key) => setTheme(key.toString())}>
            <DropdownItem
              key="system"
              endContent={<Laptop className="h-5 w-5" />}
            >
              Sistema
            </DropdownItem>
            <DropdownItem key="dark" endContent={<Moon className="h-5 w-5" />}>
              Escuro
            </DropdownItem>
            <DropdownItem key="light" endContent={<Sun className="h-5 w-5" />}>
              Claro
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </footer>
  );
}
