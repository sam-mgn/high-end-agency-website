import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

function Callout({
  title = "Point cle",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="rounded-2xl border border-[#5AB4B4]/30 bg-[#5AB4B4]/10 p-5 my-8">
      <p className="text-xs uppercase tracking-[0.14em] text-[#0D1826]/70">{title}</p>
      <div className="mt-2 text-slate-700 leading-7">{children}</div>
    </aside>
  );
}

function ArticleCTA({
  href = "/#contact",
  label = "Demander un audit communication",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className="my-10 rounded-2xl bg-[#0D1826] p-6 text-white">
      <p className="text-sm text-white/70">Besoin d'un plan d'action adapte a votre contexte ?</p>
      <Link
        href={href}
        className="mt-3 inline-flex items-center rounded-full bg-[#5AB4B4] px-5 py-2.5 text-sm font-semibold text-[#0D1826] hover:bg-white"
      >
        {label}
      </Link>
    </div>
  );
}

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-12 text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-8 text-xl font-semibold text-slate-900" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-slate-700 leading-7 my-5" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-7 my-5" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 space-y-2 text-slate-700 leading-7 my-5" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-slate-900" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l-4 border-[#5AB4B4] pl-4 italic text-slate-700 my-6" {...props} />
  ),
  Callout,
  ArticleCTA,
};
