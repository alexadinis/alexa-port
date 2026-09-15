"use client";

import { Drawer } from "@base-ui/react/drawer";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Language } from "../../lib/i18n";
import { localizeHref } from "../../lib/i18n";
import { useContactDialog } from "../Contact/ContactDialogProvider";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavDrawerProps {
  language: Language;
  navLinks: NavLink[];
  labels: Record<string, string>;
}

function MenuToggleIcon({ open }: { open: boolean }) {
  const lineClassName =
    "absolute h-0.5 w-7 rounded-full bg-current transition-[transform,opacity] duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:duration-0";

  return (
    <span
      aria-hidden="true"
      className="relative flex size-7 items-center justify-center"
    >
      <span
        className={`${lineClassName} ${open ? "rotate-45" : "-translate-y-[7px]"}`}
      />
      <span
        className={`${lineClassName} ${open ? "scale-x-0 opacity-0" : "opacity-100"}`}
      />
      <span
        className={`${lineClassName} ${open ? "-rotate-45" : "translate-y-[7px]"}`}
      />
    </span>
  );
}

export default function MobileNavDrawer({
  language,
  navLinks,
  labels,
}: MobileNavDrawerProps) {
  const { openContactDialog } = useContactDialog();
  const [open, setOpen] = useState(false);
  const openContactAfterCloseRef = useRef(false);

  const closeForNavigation = () => setOpen(false);

  const openContact = () => {
    openContactAfterCloseRef.current = true;
    setOpen(false);
  };

  const handleOpenChangeComplete = (isOpen: boolean) => {
    if (!isOpen && openContactAfterCloseRef.current) {
      openContactAfterCloseRef.current = false;
      openContactDialog();
    }
  };

  return (
    <Drawer.Root
      open={open}
      onOpenChange={setOpen}
      onOpenChangeComplete={handleOpenChangeComplete}
      swipeDirection="down"
    >
      <Drawer.Trigger
        aria-label={language === "pt" ? "Abrir menu" : "Open menu"}
        className={`flex size-12 items-center justify-center rounded-full transition-opacity active:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden ${language === "pt" ? "focus-visible:outline-green" : "focus-visible:outline-blue"}`}
      >
        <MenuToggleIcon open={open} />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Backdrop className="fixed inset-0 z-40 bg-black opacity-[calc(0.7*(1-var(--drawer-swipe-progress)))] transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 data-[swiping]:transition-none" />
        <Drawer.Viewport className="fixed inset-0 z-50 flex items-end justify-center">
          <Drawer.Popup className="max-h-[calc(100dvh-1rem)] w-full translate-y-[var(--drawer-swipe-movement-y)] overflow-hidden rounded-t-[24px] bg-white text-black shadow-[0_-18px_60px_rgba(0,0,0,0.28)] outline-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] data-[ending-style]:translate-y-full data-[starting-style]:translate-y-full data-[swiping]:transition-none motion-reduce:duration-0">
            <div
              aria-hidden="true"
              className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-black/25"
            />

            <Drawer.Content className="px-5 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6">
              <div className="flex min-h-12 items-center justify-between">
                <Drawer.Title className="text-lg font-semibold">
                  Menu
                </Drawer.Title>
                <Drawer.Close
                  aria-label={language === "pt" ? "Fechar menu" : "Close menu"}
                  className="flex size-11 items-center justify-center rounded-full transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-black/10"
                >
                  <MenuToggleIcon open={open} />
                </Drawer.Close>
              </div>

              <nav
                aria-label={
                  language === "pt" ? "Navegação principal" : "Main navigation"
                }
                className="mt-3 flex flex-col"
              >
                {navLinks.map((link) => {
                  const label =
                    language === "pt"
                      ? (labels[link.label] ?? link.label)
                      : link.label;
                  const itemClassName =
                    "group flex min-h-16 w-full items-center justify-between border-t border-black/15 py-3 text-left text-[clamp(1.45rem,7vw,2rem)] font-semibold leading-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black";
                  const activeColorClassName =
                    language === "pt"
                      ? "active:text-green"
                      : "active:text-blue";
                  const content = (
                    <>
                      <span>{label.toLowerCase()}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="size-6 shrink-0 transition-transform duration-300 group-active:translate-x-1"
                        weight="bold"
                      />
                    </>
                  );

                  return link.href === "/#contact" ? (
                    <button
                      key={link.href}
                      type="button"
                      onClick={openContact}
                      className={`${itemClassName} text-red active:text-red`}
                    >
                      {content}
                    </button>
                  ) : (
                    <Link
                      key={link.href}
                      href={localizeHref(link.href, language)}
                      onClick={closeForNavigation}
                      className={`${itemClassName} ${activeColorClassName}`}
                    >
                      {content}
                    </Link>
                  );
                })}
              </nav>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
