import { signInFooterLinks, signInFooterMeta } from "./content"
import { FooterLinkItem } from "./footer-link-item"

function SignInFooterBar() {
  return (
    <footer className="pb-4 pt-3">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 text-center sm:flex-row sm:gap-6 sm:px-6 lg:px-8">
        <p className="text-xs text-text-tertiary">{signInFooterMeta.copyright}</p>
        {signInFooterLinks.map((link) => (
          <FooterLinkItem key={link.label} {...link} />
        ))}
      </div>
    </footer>
  )
}

export { SignInFooterBar }
