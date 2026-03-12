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
  BrandInputGroup,
  BrandInputGroupAddon,
  BrandInputGroupButton,
  BrandInputGroupInput,
} from "@/components/brand/brand-input-group"
import { BrandSeparator } from "@/components/brand/brand-separator"

import {
  signUpActions,
  signUpBrand,
  signUpForm,
  signUpGoogleMark,
} from "./content"

function SignUpFormCard() {
  const ActionIcon = signUpActions.createAccountIcon
  const HeaderIcon = signUpBrand.icon
  const VisibilityIcon = signUpForm.visibilityIcon

  return (
    <BrandCard className="w-full max-w-[28.75rem] gap-0 px-0 py-0 shadow-none">
      <BrandCardHeader className="items-center px-10 pb-0 pt-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-secondary text-primary">
          <HeaderIcon aria-hidden className="size-7" />
        </span>
        <div className="space-y-2">
          <BrandCardTitle className="text-[1.65rem]">
            {signUpForm.title}
          </BrandCardTitle>
          <p className="text-sm text-text-secondary">{signUpForm.subtitle}</p>
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
              <BrandFieldLabel htmlFor="sign-up-name">
                {signUpForm.fullNameLabel}
              </BrandFieldLabel>
              <BrandInput
                id="sign-up-name"
                placeholder={signUpForm.fullNamePlaceholder}
                type="text"
              />
            </BrandField>

            <BrandField>
              <BrandFieldLabel htmlFor="sign-up-email">
                {signUpForm.emailLabel}
              </BrandFieldLabel>
              <BrandInput
                id="sign-up-email"
                placeholder={signUpForm.emailPlaceholder}
                type="email"
              />
            </BrandField>

            <BrandField>
              <BrandFieldLabel htmlFor="sign-up-password">
                {signUpForm.passwordLabel}
              </BrandFieldLabel>
              <BrandInputGroup className="h-11">
                <BrandInputGroupInput
                  id="sign-up-password"
                  placeholder={signUpForm.passwordPlaceholder}
                  type="password"
                />
                <BrandInputGroupAddon align="inline-end">
                  <BrandInputGroupButton
                    aria-label={signUpForm.visibilityLabel}
                    size="icon-sm"
                    type="button"
                    variant="ghost"
                  >
                    <VisibilityIcon aria-hidden />
                  </BrandInputGroupButton>
                </BrandInputGroupAddon>
              </BrandInputGroup>
            </BrandField>

            <BrandField>
              <BrandFieldLabel htmlFor="sign-up-confirm-password">
                {signUpForm.confirmPasswordLabel}
              </BrandFieldLabel>
              <BrandInputGroup className="h-11">
                <BrandInputGroupInput
                  id="sign-up-confirm-password"
                  placeholder={signUpForm.confirmPasswordPlaceholder}
                  type="password"
                />
                <BrandInputGroupAddon align="inline-end">
                  <BrandInputGroupButton
                    aria-label={signUpForm.visibilityLabel}
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

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-center gap-3 text-[13px] text-text-secondary">
              <BrandCheckbox defaultChecked />
              <span>{signUpForm.termsCopy}</span>
            </label>
            <a
              className="text-[13px] font-semibold text-primary transition-colors hover:text-sage-dark"
              href={signUpForm.privacyHref}
            >
              {signUpForm.privacyLabel}
            </a>
          </div>

          <BrandButton className="w-full" type="submit">
            <ActionIcon aria-hidden data-icon="inline-start" />
            {signUpForm.createAccountLabel}
          </BrandButton>

          <div className="flex items-center gap-4">
            <BrandSeparator />
            <span className="text-xs text-text-tertiary">
              {signUpForm.dividerLabel}
            </span>
            <BrandSeparator />
          </div>

          <BrandButton className="w-full" type="button" variant="outline">
            <span className="grid size-5 place-items-center rounded-[10px] bg-destructive text-[11px] font-bold text-white">
              {signUpGoogleMark.label}
            </span>
            {signUpForm.googleLabel}
          </BrandButton>
        </form>
      </BrandCardContent>

      <BrandCardFooter className="justify-center px-10 pb-8 pt-0">
        <p className="text-[13px] text-text-secondary">
          {signUpForm.accountCopy}{" "}
          <Link
            className="font-semibold text-primary transition-colors hover:text-sage-dark"
            to={signUpForm.signInHref}
          >
            {signUpForm.signInLabel}
          </Link>
        </p>
      </BrandCardFooter>
    </BrandCard>
  )
}

export { SignUpFormCard }
