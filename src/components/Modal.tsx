import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button, { ButtonVariant } from './Button'

export default function Modal({
    title,
    bodyText,
    buttonLabel,
    buttonVariant,
}:{
    title: string,
    bodyText: string,
    buttonLabel: string,
    buttonVariant: ButtonVariant
}) {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="eb-relative eb-z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="eb-ease-out eb-duration-300"
          enterFrom="eb-opacity-0"
          enterTo="eb-opacity-100"
          leave="eb-ease-in eb-duration-200"
          leaveFrom="eb-opacity-100"
          leaveTo="eb-opacity-0"
        >
          <div className="eb-fixed eb-inset-0 eb-bg-gray-500 eb-bg-opacity-75 eb-transition-opacity" />
        </Transition.Child>

        <div className="eb-fixed eb-inset-0 eb-z-10 eb-w-screen eb-overflow-y-auto">
          <div className="eb-flex eb-min-h-full eb-items-end eb-justify-center eb-p-4 eb-text-center sm:eb-items-center sm:eb-p-0">
            <Transition.Child
              as={Fragment}
              enter="eb-ease-out eb-duration-300"
              enterFrom="eb-opacity-0 eb-translate-y-4 sm:eb-translate-y-0 sm:eb-scale-95"
              enterTo="eb-opacity-100 eb-translate-y-0 sm:eb-scale-100"
              leave="eb-ease-in eb-duration-200"
              leaveFrom="eb-opacity-100 eb-translate-y-0 sm:eb-scale-100"
              leaveTo="eb-opacity-0 eb-translate-y-4 sm:eb-translate-y-0 sm:eb-scale-95"
            >
              <Dialog.Panel className="eb-relative eb-transform eb-overflow-hidden eb-rounded-sm eb-bg-white eb-px-4 eb-py-4 eb-text-left eb-shadow-xl eb-transition-all sm:eb-my-8 sm:eb-w-full sm:eb-max-w-sm sm:eb-p-6">
                <div>
                  <div className="eb-text-center">
                    <Dialog.Title as="h3" className="eb-text-base eb-font-semibold eb-leading-6 eb-text-gray-900 eb-font-serif">
                      {title}
                    </Dialog.Title>
                    <div className="eb-mt-2">
                      <p className="eb-text-sm eb-text-gray-500">
                        {bodyText}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="eb-mt-5 sm:eb-mt-6">
                    <Button
                        expand
                        label={buttonLabel}
                        variant={buttonVariant}
                    />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
