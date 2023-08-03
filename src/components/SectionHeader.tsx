import { Divider } from "@nextui-org/react";

// take two props: title and subtitle
// return a section header with the title and subtitle
// .section__title {
//     font - size: var(--h1 - font - size);
// }
// .section__subtitle {
//     display: block;
//     font - size: var(--small - font - size);
//     margin - bottom: var(--mb - 3);
// }

// .section__title,
// .section__subtitle {
//     text - align: center;
// }

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center h-24">
      <p className="text-4xl font-bold">{title}</p>
      <p className="text-md ">{subtitle}</p>
      <Divider />
    </div>
  );
}
