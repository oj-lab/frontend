import * as UserServiceModel from "@/models/service/user";
import React from "react";
import { useTranslation } from "react-i18next";
import UserAvatar from "./UserAvatar";
import ConfirmDialog from "../control/ConfirmDialog";
import TrashIcon from "./icons/tabler/TrashIcon";
import { joinClasses } from "@/utils/common";
import UserCogIcon from "./icons/tabler/UserCogIcon";

export interface UserTableProps {
  data: UserServiceModel.UserInfo[];
  showActions?: boolean;
  className?: string;
}

const UserTable: React.FC<UserTableProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={props.className}>
        <table className="table" aria-label="Problem Table">
          <thead>
            <tr className="border-base-content/10">
              <th key="avatar">{t("Avatar")}</th>
              <th key="name">{t("Name")}</th>
              <th key="account">{t("Account")}</th>
              <th key="roles">{t("Roles")}</th>
              {props.showActions && <th key="actions">{t("Actions")}</th>}
            </tr>
          </thead>
          <tbody>
            {props.data.map((userInfo) => (
              <tr key={userInfo.account} className="border-base-content/10">
                <td className="flex items-center gap-3 py-2">
                  <div className="avatar">
                    <UserAvatar
                      alt={userInfo.name}
                      avatarUrl={userInfo.avatarUrl}
                    />
                  </div>
                </td>
                <th>{userInfo.name}</th>
                <td>{userInfo.account}</td>
                <td>
                  <UserRoles roles={userInfo.roles ?? []} />
                </td>
                {props.showActions && (
                  <td className="p-2">
                    <UserActions userInfo={userInfo} onClickDelete={() => {}} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmDialog
        id="user_delete_confirm_modal"
        title="Confirm"
        message="Are you sure to delete this user?"
        onClickConfirm={() => {
          window.location.reload();
        }}
      />
    </>
  );
};

const UserRoles: React.FC<{ roles: string[] | undefined }> = (props) => {
  if (props.roles === undefined) {
    return <></>;
  }

  return (
    <div className="space-x-2">
      {props.roles.map((role) => (
        <div
          key={role}
          className="badge border-0 bg-base-300 font-semibold text-base-content/80"
        >
          {role}
        </div>
      ))}
    </div>
  );
};

interface ActionsProps {
  userInfo: UserServiceModel.UserInfo;
  onClickDelete: () => void;
}

const UserActions: React.FC<ActionsProps> = (props) => {
  const onClickDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    props.onClickDelete();
    const modal = document.getElementById(
      "delete_confirm_modal",
    ) as HTMLDialogElement;
    modal?.showModal();
  };

  return (
    <div className="flex space-x-1">
      <button className="btn btn-square btn-ghost btn-sm rounded">
        <UserCogIcon
          className={joinClasses(
            "h-5 w-5",
            props.userInfo.roles?.includes("admin")
              ? "text-success"
              : "text-base-content",
          )}
        />
      </button>
      <button
        className="btn btn-square btn-ghost btn-sm rounded hover:bg-error/20"
        onClick={onClickDelete}
      >
        <TrashIcon className="h-5 w-5 text-error" />
      </button>
    </div>
  );
};

export default UserTable;
