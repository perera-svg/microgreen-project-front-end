import { signInFeatures } from "./content"
import { FeatureItem } from "./feature-item"

function SignInFeatureList() {
  return (
    <ul className="flex flex-col gap-3">
      {signInFeatures.map((feature) => (
        <FeatureItem key={feature.id} {...feature} />
      ))}
    </ul>
  )
}

export { SignInFeatureList }
