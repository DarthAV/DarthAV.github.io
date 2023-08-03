import { Card, CardBody, Image } from "@nextui-org/react";
import { SectionHeader } from "../../components/SectionHeader";

export function Education() {
  return (
    <div>
      <SectionHeader
        {...{ title: "Education", subtitle: "My academic background" }}
      />
      <Card>
        <CardBody>
          <b>University of Illinois Urbana Champaign</b>
          <Image
            width={100}
            src="https://nextui.org/images/album-cover.png"
            alt="UIUC Logo"
          />
        </CardBody>
      </Card>
    </div>
  );
}
