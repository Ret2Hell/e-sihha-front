export const clerkAppearance = {
  variables: {
    colorPrimary: "rgb(20, 184, 166)",
    colorTextOnPrimaryBackground: "white",
    colorBackground: "white",
    colorInputBackground: "white",
    colorInputText: "black",
    colorTextSecondary: "rgb(107, 114, 128)",
    colorTextLink: "rgb(20, 184, 166)",
    colorDanger: "rgb(239, 68, 68)",
    colorSuccess: "rgb(34, 197, 94)",
    borderRadius: "0.5rem",
    fontFamily: "inherit",
    fontFamilyButtons: "inherit",
  },
  elements: {
    card: "shadow-md",
    formButtonPrimary:
      "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transition-all duration-200",
    formButtonReset: "text-teal-600 hover:text-teal-700",
    socialButtonsBlockButton:
      "border border-gray-200 hover:bg-gray-50 transition-all duration-200",
    socialButtonsBlockButtonText: "font-medium",
    formFieldInput:
      "border !border-gray-200 focus:!border-teal-500 focus:!ring-1 focus:!ring-teal-500 transition-all duration-200",
    formFieldLabel: "font-medium !text-gray-700",
    footer: {
      padding: "0rem 2.5rem",
      "& > div > div:nth-child(1)": {
        background: "#F7F7F7",
      },
    },
    footerActionLink: "text-teal-600 hover:text-teal-700",
    headerTitle:
      "text-2xl font-bold !text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600",
    headerSubtitle: "!text-gray-600",
    identityPreview: "bg-gray-50 border border-gray-100",
    identityPreviewText: "!text-gray-700",
    identityPreviewEditButton: "text-teal-600 hover:text-teal-700",
    formFieldAction: "text-teal-600 hover:text-teal-700",
    formFieldSuccessText: "!text-green-600",
    formFieldErrorText: "!text-red-600",
    userButtonPopoverCard: "shadow-xl border border-gray-100",
    userButtonPopoverActionButton:
      "hover:bg-gray-50 text-gray-700 hover:text-teal-600 transition-all duration-200",
    userButtonPopoverActionButtonIcon: "text-gray-500",
    userButtonPopoverActionButtonText: "font-medium",
    userButtonPopoverFooter: "hidden",
  },
  layout: {
    socialButtonsPlacement: "bottom" as "bottom" | "top" | undefined,
    socialButtonsVariant: "iconButton" as
      | "iconButton"
      | "blockButton"
      | undefined,
  },
};
