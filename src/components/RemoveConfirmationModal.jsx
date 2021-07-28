import React from "react";
import { useHistory } from "react-router-dom";
import { AlertCircle } from "tabler-icons-react";

const RemoveConfirmationModal = ({
  handleRemoveModalVisibility,
  removeAd,
  adToRemove,
}) => {
  const history = useHistory();
  const handleRemoveAd = (adToRemove) => {
    removeAd(adToRemove);
    history.push("/?r=true");
  };
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal">
        <div className="modal-wrapper">
          <div className="modal-body">
            <AlertCircle
              size={48}
              strokeWidth={1.5}
              color={"red"}
              className="modal-body__sign"
            />
            <h3 className="modal-body__title">
              Are you sure you want remove this ad?
            </h3>
          </div>
          <div className="modal-footer">
            <div className="modal-footer__buttons">
              <button
                className="modal-footer__button button button-l button-grey"
                onClick={() => handleRemoveModalVisibility()}
              >
                Cancel
              </button>
              <button
                className="modal-footer__button button button-l button-red"
                onClick={() => handleRemoveAd(adToRemove)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveConfirmationModal;
