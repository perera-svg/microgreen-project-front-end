import { signUpFeatures } from "./content"
import { FeatureItem } from "./feature-item"

function SignUpFeatureList() {
  return (
    <ul className="flex flex-col gap-3">
      {signUpFeatures.map((feature) => (
        <FeatureItem key={feature.id} {...feature} />
      ))}
    </ul>
  )
}

export { SignUpFeatureList }
