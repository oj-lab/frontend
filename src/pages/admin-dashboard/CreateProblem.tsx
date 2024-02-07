import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PlusIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import MarkdownRender from "@/components/markdown/MarkdownRender";
import { ProblemService } from "@/api/problem";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  const [description, setDescription] = useState<string>(
    descriptionPlaceholder,
  );
  const [tags, setTags] = useState<string[]>(["default"]);
  const [addingTag, setAddingTag] = useState<string>("");

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <div className="flex justify-between px-4">
        <h1 className="text-3xl font-bold">{t("Create Problem")}</h1>
        <div className="flex gap-4">
          <button
            className="btn btn-error btn-sm text-base-100"
            aria-label="Delete"
            onClick={() => {
              window.history.back();
            }}
          >
            {t("Cancel")}
          </button>
          <button
            className="btn btn-primary btn-sm text-base-100"
            onClick={() => {
              ProblemService.putProblem({
                slug,
                title,
                description,
                tags,
              }).then((_) => {
                navigate("/admin/problem");
              });
            }}
          >
            {t("Create")}
          </button>
        </div>
      </div>
      <div className="px-4 pt-2">
        <p className="">
          {t("Please fill in the information below to create a new problem.")}
        </p>
        <p className="">{t("The information marked with * is required.")}</p>
      </div>
      <div className="card mt-4 border border-base-300 pt-4 shadow-xl">
        <div className="card-body -mt-6">
          <div className="flex items-center gap-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Problem Slug</span>
              </div>
              <input
                type="text"
                placeholder="slug should be unique"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setSlug(e.target.value);
                }}
                value={slug}
              />
            </label>
            <div className="mt-9">
              {slug && slug !== "slug" && (
                <div className="flex items-center gap-2">
                  <span className="loading loading-spinner loading-md" />
                  <p className="text-sm ">{t("Checking slug is valid...")}</p>
                </div>
              )}
              {slug === "slug" && (
                <CheckCircleIcon className="h-8 fill-green-500" />
              )}
              {!slug && (
                <div className="flex items-center gap-2">
                  <XCircleIcon
                    className="h-8 fill-red-500"
                    aria-label="Error"
                  />
                  <p className="text-sm ">{t("Slug is not valid.")}</p>
                </div>
              )}
            </div>
          </div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Upload Package</span>
            </div>
            <input type="file" className="file-input w-full max-w-xs" />
          </label>
          <div className="divider" />
          <label className="form-control -mt-3 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Problem Title</span>
            </div>
            <input
              type="text"
              placeholder="which displays on problem header"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </label>
          <span className="ml-1 mt-4 text-sm">Problem Description</span>
          <div role="tablist" className="tabs-boxed tabs p-1">
            <input
              type="radio"
              name="problem_description_tabs"
              role="tab"
              className="tab"
              aria-label="Raw"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content rounded-md border-base-300 bg-base-100 p-2"
            >
              <textarea
                className="textarea m-0 h-64 w-full"
                placeholder="write problem description here"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </div>
            <input
              type="radio"
              name="problem_description_tabs"
              role="tab"
              className="tab"
              aria-label="Preview"
            />
            <div
              role="tabpanel"
              className="tab-content rounded-md border-base-300 bg-base-100 p-2"
            >
              <div className="h-64 w-full overflow-auto p-4">
                <MarkdownRender content={description} />
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="flex flex-col gap-4">
            {tags.length > 0 && (
              <div className="flex gap-2">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="badge badge-neutral cursor-pointer gap-2"
                    onClick={() => {
                      handleRemoveTag(tag);
                    }}
                  >
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-center gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Problem Tags</span>
                </div>
                <input
                  type="text"
                  placeholder="click tag to remove"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => {
                    setAddingTag(e.target.value);
                  }}
                />
              </label>
              <div className="mt-9">
                <button
                  className="btn btn-circle btn-primary btn-sm"
                  onClick={() => {
                    if (addingTag) {
                      let isDuplicate = false;
                      tags.forEach((tag) => {
                        if (tag === addingTag) isDuplicate = true;
                      });
                      if (!isDuplicate) {
                        setTags([...tags, addingTag]);
                        setAddingTag("");
                      }
                    }
                  }}
                >
                  <PlusIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProblem;
