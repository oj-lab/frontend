import {
  Button,
  Card,
  CardBody,
  Chip,
  Divider,
  Input,
  Spinner,
  Tab,
  Tabs,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PlusIcon } from "@heroicons/react/24/outline";
import MarkdownRender from "../../components/markdown/MarkdownRender";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import FileUploader from "../../components/FileUploader";

const descriptionPlaceholder = `Output a string with format: \`Hello! %s\`.

## Input

- The first line contains a string \`s\`.

## Output

- Output a string \`Hello! %s\`.

## Example

### Input:

\`\`\`
world!
\`\`\`

### Output:

\`\`\`
Hello! world!
\`\`\`

`;

const CreateProblem: React.FC = () => {
  const [slug, setSlug] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDiscription] = useState<string>("");
  const [tags, setTags] = useState<string[]>(["default"]);
  const [addingTag, setAddingTag] = useState<string>("");

  const { t } = useTranslation();

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">{t("Create Problem")}</h1>
        <div className="flex gap-4">
          <Button
            variant="bordered"
            onClick={() => {
              window.history.back();
            }}
          >
            {t("Cancel")}
          </Button>
          <Button color="primary">{t("Create")}</Button>
        </div>
      </div>
      <div>
        <p className="">
          {t("Please fill in the information below to create a new problem.")}
        </p>
        <p className="">{t("The information marked with * is required.")}</p>
      </div>
      <Card className="mt-4">
        <CardBody className="gap-4">
          <div className="flex items-center gap-4">
            <Input
              className="w-1/2"
              isRequired={true}
              label={t("Problem slug")}
              placeholder="example-problem"
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value);
              }}
            />
            {slug && slug !== "slug" && (
              <div className="flex items-center gap-2">
                <Spinner color="warning" aria-label="Checking..." />
                <p className="text-sm ">{t("Checking slug is valid...")}</p>
              </div>
            )}
            {slug === "slug" && (
              <CheckCircleIcon className="h-8 fill-green-500" />
            )}
            {!slug && (
              <div className="flex items-center gap-2">
                <XCircleIcon className="h-8 fill-red-500" aria-label="Error" />
                <p className="text-sm ">{t("Slug is not valid.")}</p>
              </div>
            )}
          </div>
          <FileUploader />
          <Divider />
          <Input
            className="w-1/2"
            isRequired={true}
            label={t("Problem title")}
            placeholder="Example Problem"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Tabs aria-label="Options">
            <Tab key="raw" title={t("Raw")}>
              <Textarea
                className="-mt-3"
                label={t("Problem description")}
                isRequired={true}
                placeholder={descriptionPlaceholder}
                value={description}
                onChange={(e) => {
                  setDiscription(e.target.value);
                }}
              />
            </Tab>
            <Tab key="preview" title={t("Preview")}>
              <Card className="-mt-3" shadow="sm">
                <CardBody>
                  <MarkdownRender
                    content={description ? description : descriptionPlaceholder}
                  />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
          <Divider />
          <div className="flex flex-col gap-4">
            {tags.length > 0 && (
              <div className="flex gap-2">
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    onClose={() => {
                      handleRemoveTag(tag);
                    }}
                    variant="flat"
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            )}
            <div className="flex items-center gap-4">
              <Input
                className="w-1/2"
                label={t("Add problem tag")}
                placeholder="new-tag"
                value={addingTag}
                onChange={(e) => {
                  setAddingTag(e.target.value);
                }}
              />
              <Button
                size="sm"
                radius="full"
                isIconOnly={true}
                color="secondary"
                onClick={() => {
                  if (addingTag) {
                    setTags([...tags, addingTag]);
                    setAddingTag("");
                  }
                }}
              >
                <PlusIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CreateProblem;
