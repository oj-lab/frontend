import { Card, CardHeader, CardBody } from "@nextui-org/react";

export default function NewsCard() {
  return (
    <Card className="prose prose-sm py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p>Release Note</p>
        <small className="text-default-500">v0.0.1</small>
        <h4>Hello OJ Lab front 💕</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p>
          OJ Lab front is now in alpha stage. We are working hard to bring you
          the best experience.
        </p>
        <p>Stay tuned!</p>
      </CardBody>
    </Card>
  );
}
