import ClaimsDrafting from "./ClaimsDrafting/ClaimsDrafting";
import "./ContentMain.css";
import UploadPDF from "./InvetionDisclosure/UploadPDF";
import PatentDrafting from "./PatentDrafting/PatentDrafting";
// import ProvisionalDraftingnewCK from "./ProvisionalDrafting/Provisional-with-CKeditor";
import ProvisionalDraftingnew from "./ProvisionalDrafting/ProvisionalDrafting-new";
import SequenceListing from "./SequenceListing/SequenceListing";
// import UsptoAPI from "./USPTO-API/UsptoAPI";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <UploadPDF />
      <ProvisionalDraftingnew />
      {/* <ProvisionalDraftingnewCK /> */}
      <ClaimsDrafting />
      <SequenceListing />
      <PatentDrafting />
      {/* <UsptoAPI /> */}
    </div>
  );
};

export default ContentMain;
