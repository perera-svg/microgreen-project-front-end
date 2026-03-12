import { Link } from "@tanstack/react-router"

import { BrandButton } from "@/components/brand/brand-button"
import {
  BrandCard,
  BrandCardContent,
  BrandCardFooter,
  BrandCardHeader,
  BrandCardTitle,
} from "@/components/brand/brand-card"
import { BrandCheckbox } from "@/components/brand/brand-checkbox"
import {
  BrandField,
  BrandFieldGroup,
  BrandFieldLabel,
} from "@/components/brand/brand-field"
import { BrandInput } from "@/components/brand/brand-input"
import {
  BrandInputGroupAddon,
  BrandInputGroupButton,
  BrandInputGroup,
  BrandInputGroupInput,
} from "@/components/brand/brand-input-group"
import { BrandSeparator } from "@/components/brand/brand-separator"

import {
  signInActions,
  signInBrand,
  signInForm,
  signInGoogleMark,
} from "./content"

function SignInFormCard() {
  const BrandIcon = signInActions.signInIcon
  const HeaderIcon = signInBrand.icon
  const VisibilityIcon = signInForm.visibilityIcon

  return (
    <BrandCard className="w-full max-w-[27.5rem] gap-0 px-0 py-0 shadow-none">
      <BrandCardHeader className="items-center px-10 pb-0 pt-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-secondary text-primary">
          <HeaderIcon aria-hidden className="size-7" />
        </span>
        <div className="space-y-2">
          <BrandCardTitle className="text-[1.65rem]">
            {signInForm.title}
          </BrandCardTitle>
          <p className="text-sm text-text-secondary">{signInForm.subtitle}</p>
        </div>
      </BrandCardHeader>

      <BrandCardContent className="px-10 pb-8 pt-7">
        <form
          className="flex flex-col gap-6"
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <BrandFieldGroup className="gap-4">
            <BrandField>
              <BrandFieldLabel htmlFor="sign-in-email">
                {signInForm.emailLabel}
              </BrandFieldLabel>
              <BrandInput
                id="sign-in-email"
                placeholder={signInForm.emailPlaceholder}
                type="email"
              />
            </BrandField>

            <BrandField>
              <div className="flex items-center justify-between gap-4">
                <BrandFieldLabel htmlFor="sign-in-password">
                  {signInForm.passwordLabel}
                </BrandFieldLabel>
                <a
                  className="text-xs font-medium text-text-tertiary transition-colors hover:text-primary"
                  href={signInForm.forgotPasswordHref}
                >
                  {signInForm.forgotPasswordLabel}
                </a>
              </div>
              <BrandInputGroup className="h-11">
                <BrandInputGroupInput
                  id="sign-in-password"
                  placeholder={signInForm.passwordPlaceholder}
                  type="password"
                />
                <BrandInputGroupAddon align="inline-end">
                  <BrandInputGroupButton
                    aria-label={signInForm.visibilityLabel}
                    size="icon-sm"
                    type="button"
                    variant="ghost"
                  >
                    <VisibilityIcon aria-hidden />
                  </BrandInputGroupButton>
                </BrandInputGroupAddon>
              </BrandInputGroup>
            </BrandField>
          </BrandFieldGroup>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-3 text-[13px] text-text-secondary">
                <BrandCheckbox defaultChecked />
                <span>{signInForm.keepSignedInLabel}</span>
              </label>
              <a
                className="text-[13px] font-semibold text-primary transition-colors hover:text-sage-dark"
                href={signInForm.oneTimeCodeHref}
              >
                {signInForm.oneTimeCodeLabel}
              </a>
            </div>

            <BrandButton className="w-full" type="submit">
              <BrandIcon aria-hidden data-icon="inline-start" />
              {signInForm.signInLabel}
            </BrandButton>
          </div>

          <div className="flex items-center gap-4">
            <BrandSeparator />
            <span className="text-xs text-text-tertiary">
              {signInForm.dividerLabel}
            </span>
            <BrandSeparator />
          </div>

          <BrandButton className="w-full" type="button" variant="outline">
            <span className="grid size-5 place-items-center rounded-[10px] bg-destructive text-[11px] font-bold text-white">
              {signInGoogleMark.label}
            </span>
            {signInForm.googleLabel}
          </BrandButton>
        </form>
      </BrandCardContent>

      <BrandCardFooter className="justify-center px-10 pb-8 pt-0">
        <p className="text-[13px] text-text-secondary">
          {signInForm.placeholderAccountCopy}{" "}
          <Link
            className="font-semibold text-primary transition-colors hover:text-sage-dark"
            to={signInForm.createAccountHref}
          >
            {signInForm.createAccountLabel}
          </Link>
        </p>
      </BrandCardFooter>
    </BrandCard>
  )
}

export { SignInFormCard }
