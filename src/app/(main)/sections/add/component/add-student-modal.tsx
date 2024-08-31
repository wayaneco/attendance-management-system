import { Button, Input } from "@/components";
import { Modal } from "@/components/Modal";

type AddSectionModalProps = {
  show: boolean;
  onClose: () => void;
};

export const AddStudentModal = ({
  show,
  onClose,
}: AddSectionModalProps): React.ReactElement => {
  return (
    <Modal show={show} onClose={onClose} header="ADD NEW STUDENT">
      <form action="">
        <div className="flex flex-col gap-y-2">
          <Input label="First Name:" placeholder="First Name" />
          <Input label="Last Name:" placeholder="Last Name" />
          <Input label="Middle Name:" placeholder="Middle Name" />
          <Input label="Address:" placeholder="Address" />
          <Input label="Phone Number:" placeholder="Phone Number" />
        </div>
        <Button className="w-full mt-8">Save</Button>
      </form>
    </Modal>
  );
};
