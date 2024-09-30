import { FC } from "react";
import { useTranslation } from "react-i18next";

export interface ConfirmDialogProps {
  id: string;
  title?: string;
  message: string;
  onClickConfirm: () => void;
}

export const ConfirmDialog: FC<ConfirmDialogProps> = (props) => {
  const { t } = useTranslation();

  return (
    <dialog id={props.id} className="modal">
      <div className="modal-box rounded">
        {props.title && <h3 className="text-lg font-bold">{t(props.title)}</h3>}
        <p className="py-4">{t(props.message)}</p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button className="btn btn-sm rounded">{t("Cancel")}</button>
            <button
              className="btn btn-primary btn-sm rounded"
              onClick={props.onClickConfirm}
            >
              {t("Confirm")}
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  );
};

export default ConfirmDialog;
