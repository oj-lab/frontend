import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { joinClasses } from "@/utils/common";
import * as JudgeServiceModel from "@/models/service/judge";
import BrandCPPIcon from "@/components/display/icons/tabler/BrandCPPIcon";
import BrandPythonIcon from "@/components/display/icons/tabler/BrandPythonIcon";
import { shortenString } from "@/utils/string";
import UserAvatar from "./UserAvatar";

export interface JudgeTableProps {
  data: JudgeServiceModel.JudgeInfo[];
  enableRouting?: boolean;
  className?: string;
}

const JudgeTable: React.FC<JudgeTableProps> = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={props.className}>
      <table className="table" aria-label="Problem Table">
        <thead>
          <tr className="border-base-content/10">
            <th key="uid">{t("UID")}</th>
            <th key="problemTitle">{t("Problem Title")}</th>
            <th key="user">{t("User")}</th>
            <th key="language">{t("Language")}</th>
            <th key="submitTime">{t("Submit Time")}</th>
            <th key="status">{t("Status")}</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((judge, idx) => (
            <tr
              key={idx}
              className={joinClasses(
                props.data.length > 1 ? "border-base-content/10" : "border-0",
                props.enableRouting && "hover cursor-pointer",
              )}
              onClick={() => {
                if (props.enableRouting) navigate(judge.UID);
              }}
            >
              <th>{shortenString(judge.UID, 8, false)}</th>
              <td>{judge.problem?.title}</td>
              <td className="flex items-center gap-3 py-2">
                <div className="avatar">
                  <UserAvatar
                    alt={judge.user?.name}
                    avatarUrl={judge.user?.avatarUrl}
                  />
                </div>
                <span>{judge.user?.name}</span>
              </td>
              <td>
                <div className="badge min-w-10 border-0 bg-base-300">
                  <LanguageIcon language={judge.language} />
                </div>
              </td>
              <td>{new Date(judge.createAt).toLocaleString()}</td>
              <td>
                <div
                  className={joinClasses(
                    "badge border-0 font-semibold",
                    getStatusBadageClass(judge.status, judge.verdict),
                  )}
                >
                  {judge.status === "finished" ? judge.verdict : judge.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const LanguageIcon: React.FC<{ language: string }> = ({ language }) => {
  if (language.toLowerCase() === "cpp") {
    return <BrandCPPIcon className="h-4 w-4 stroke-base-content" />;
  }
  if (language.toLowerCase() === "python") {
    return <BrandPythonIcon className="h-4 w-4 stroke-base-content" />;
  }
  return (
    <span className="text-[10px] font-semibold">{language.toUpperCase()}</span>
  );
};

function getStatusBadageClass(status: string, verdict: string): string {
  if (status === "finished" && verdict === "Accepted") {
    return "bg-success/10 text-success";
  }
  if (status === "finished" && verdict === "WrongAnswer") {
    return "bg-error/10 text-error";
  }
  if (status === "finished" && verdict === "CompileError") {
    return "bg-warning/10 text-warning";
  }
  if (status === "pending") {
    return "bg-primary/10 text-primary";
  }
  if (status === "running") {
    return "bg-secondary/10 text-secondary";
  }
  return "";
}

export default JudgeTable;
