import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateModalStatus } from "../../store/slices/dashboardSlice";
import { DATE_FORMAT } from "../../utils/helper";
import { ShowBooked } from "./ShowBooked";
import { ShowEmptySeat } from "./ShowEmptySeat";
export function Modal() {
  const { isModalVisible, isShowBookedTicketModal, isShowEmptySeatModal } =
    useSelector((store) => store.dashboard);
  const dispatch = useDispatch();

  return (
    <>
      <Transition appear show={isModalVisible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => dispatch(updateModalStatus(false))}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all max-h-[25rem] overflow-y-scroll">
                  <div className="flex justify-between">
                    <h1 className="text-2xl mb-2">Booked Ticket Details</h1>
                    <FaTimes
                      className="cursor-pointer"
                      onClick={() => dispatch(updateModalStatus(false))}
                    />
                  </div>
                  <h1 className="mb-2">Date: {DATE_FORMAT(new Date())}</h1>
                  {isShowBookedTicketModal && <ShowBooked />}
                  {isShowEmptySeatModal && <ShowEmptySeat />}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
