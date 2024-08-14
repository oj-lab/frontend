import { useState } from "react";
import { useTranslation } from "react-i18next";
import MarkdownRender from "@/components/display/MarkdownRender";
import * as ProblemService from "@/apis/problem";
import { useNavigate } from "react-router-dom";
import React from "react";
import CircleCheckIcon from "@/components/display/icons/tabler/CircleCheckIcon";
import CircleXIcon from "@/components/display/icons/tabler/CircleXIcon";
import PlusIcon from "@/components/display/icons/tabler/PlusIcon";

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
  const [isValidSlug, setIsValidSlug] = useState<boolean | undefined>(
    undefined,
  );

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-3xl font-bold">{t("Create Problem")}</h1>
        <div className="flex gap-4 px-2">
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
                tags: tags.map((tag) => ({ name: tag })),
              }).then((_) => {
                navigate("/admin/problems");
              });
            }}
          >
            {t("Create")}
          </button>
        </div>
      </div>
      <div className="w-full pt-2">
        <p className="">
          {t("Please fill in the information below to create a new problem.")}
        </p>
        <p className="">{t("The information marked with * is required.")}</p>
      </div>
      <div className="card mt-4 w-full rounded border border-base-content/10 bg-base-100 pt-4 shadow-xl">
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
                  if (e.target.value === "") {
                    setIsValidSlug(undefined);
                    return;
                  }
                  ProblemService.checkProblemSlug(e.target.value).then(
                    (data) => {
                      setIsValidSlug(data.valid);
                    },
                  );
                }}
                value={slug}
              />
            </label>
            <div className="mt-9">
              {slug && isValidSlug === undefined && (
                <div className="flex items-center gap-2">
                  <span className="loading loading-spinner loading-md" />
                  <p className="text-sm ">{t("Checking slug is valid...")}</p>
                </div>
              )}
              {isValidSlug && (
                <CircleCheckIcon className="h-8 fill-green-500 stroke-none" />
              )}
              {isValidSlug === false && (
                <div className="flex items-center gap-2">
                  <CircleXIcon
                    className="h-8 fill-red-500 stroke-none"
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
            <input
              type="file"
              className="file-input w-full max-w-xs"
              onChange={(e) => {
                if (e.target.files) {
                  ProblemService.putProblemPackage(
                    slug,
                    e.target.files[0],
                  ).then((_) => {
                    console.log("uploaded");
                  });
                }
              }}
              disabled={!isValidSlug}
              accept=".zip"
            />
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
                  <PlusIcon className="h-6 w-6 " />
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
