import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Close } from '@icon-park/react'

export interface DrawerProps {
    show: boolean,
    onClose: () => void,
    title?: string,
    children?: ReactNode,
}

export default function Drawer({
    show,
    onClose,
    title,
    children,
}: DrawerProps) {

    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="eb-relative eb-z-40" onClose={onClose}>
                <div className="eb-fixed eb-inset-0" />

                <div className="eb-fixed eb-inset-0 eb-overflow-hidden">
                    <div className="eb-absolute eb-inset-0 eb-overflow-hidden">
                        <div className="eb-pointer-events-none eb-fixed eb-inset-y-0 eb-right-0 eb-flex eb-max-w-full eb-pl-10 sm:eb-pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="eb-transform eb-transition eb-ease-in-out eb-duration-500 sm:eb-duration-700"
                                enterFrom="eb-translate-x-full"
                                enterTo="eb-translate-x-0"
                                leave="eb-transform eb-transition eb-ease-in-out eb-duration-500 sm:eb-duration-700"
                                leaveFrom="eb-translate-x-0"
                                leaveTo="eb-translate-x-full"
                            >
                                <Dialog.Panel className="eb-pointer-events-auto eb-w-screen eb-max-w-2xl">
                                    <div className="eb-flex eb-h-full eb-flex-col eb-overflow-y-scroll eb-bg-white eb-py-6 eb-shadow-xl">
                                        <div className="eb-px-4 sm:eb-px-6">
                                            <div className="eb-flex eb-items-start eb-justify-between">
                                                <Dialog.Title className="eb-font-semibold eb-leading-6 eb-text-gray-900">
                                                    {title && title}
                                                </Dialog.Title>
                                                <div className="eb-ml-3 eb-flex eb-h-7 eb-items-center">
                                                    <button
                                                        type="button"
                                                        className="eb-relative eb-rounded-md eb-bg-white hover:eb-text-gray-500"
                                                        onClick={onClose}
                                                    >
                                                        <span className="eb-absolute eb--inset-2.5" />
                                                        <span className="eb-sr-only">Close panel</span>
                                                        <Close className="eb-h-6 eb-w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eb-relative eb-mt-6 eb-flex-1 eb-px-4 sm:eb-px-6">
                                            {children}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
