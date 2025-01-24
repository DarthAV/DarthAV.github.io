import { Divider } from "@heroui/react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center h-24 mt-8">
      <p className="text-4xl font-bold">{title}</p>
      <p className="text-md ">{subtitle}</p>
      <Divider className="m-2" />
    </div>
  );
}
