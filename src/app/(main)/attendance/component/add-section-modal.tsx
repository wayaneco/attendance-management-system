import { Button, Input } from "@/components";
import { Modal } from "@/components/Modal";

type AddSectionModalProps = {
  show: boolean;
  onClose: () => void;
};

export const AddSectionModal = ({
  show,
  onClose,
}: AddSectionModalProps): React.ReactElement => {
  return (
    <Modal
      show={show}
      onClose={onClose}
      header={"ADD NEW SECTION"}
      footer={
        <div className="ml-auto">
          <Button>Save</Button>
        </div>
      }
    >
      <Input label="Section Name:" />
    </Modal>
  );
};
