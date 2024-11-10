import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export const HoverNavLink = ({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) => {
  /*
    TODO
    Implement a HoverNavLink component that renders a Tabs component with Tab components as children.
    The component should accept an array of strings as items and a className string.
    Clicking on a Tab should scroll the page to the corresponding section.
    If the user scrolls manually, the component should highlight the corresponding Tab.
    The current section should be highlighted in the Tabs component.
    The component should be responsive and should display a dropdown menu on small screens.
  */
  return (
    <div className={className}>
      <Tabs aria-label="Dynamic tabs" items={items} variant="bordered">
        {items.map((item, idx) => (
          <Tab key={item} title={item} />
        ))}
      </Tabs>
    </div>
  );
};
